import { TYPE_NAMES } from './types'
import { NAME } from './name'
import { SETTINGS } from './layers'

export class E95 extends WMEBase {
  buttons: any
  panel: WMEUIHelperPanel
  tab: WMEUIHelperTab
  layers: Record<string, string>

  constructor (name: string, layers: any, buttons: any, config: any) {
    super(name, { layers })

    this.buttons = null
    this.layers = {}

    this.initLayers()
    this.initHandlers(buttons, config)
    this.initTab(buttons)
  }

  /**
   * Initialization of WMEUIHelperTab
   */
  initTab (buttons) {
    this.tab = this.helper.createTab(
      WMEUI.t(NAME).title,
      {
        sidebar: this.wmeSDK.Sidebar,
        image: GM_info.script.icon
      }
    )
    this.tab.addText('description', WMEUI.t(NAME).description)
    this.tab.addDiv('text', WMEUI.t(NAME).help)
    this.tab.addDiv('config', WMEUI.t(NAME).config)

    this.initTabButtons(buttons)

    this.tab.addText(
      'info',
      '<a href="' + GM_info.scriptUpdateURL + '">' + GM_info.script.name + '</a> ' + GM_info.script.version
    )
    this.tab.addText('blue', 'made in')
    this.tab.addText('yellow', 'Ukraine')
    this.tab.inject().then(() => this.log('Script Tab Initialized') )
  }

  /**
   * Populate tab with button details after buttons are loaded
   */
  initTabButtons (buttons: any) {
    const t = WMEUI.t(NAME).buttons

    for (let key in buttons) {
      let raw = buttons[key]
      if (!raw) continue

      let fs = this.helper.createFieldset(
          '<span class="e95-road-' + raw.attributes.roadType + '">' + raw.title + '</span>',
          { className: 'collapsed' }
      )

      let details = t.roadType + ': ' + TYPE_NAMES[raw.attributes.roadType]
      details += '<br>' + t.speed + ': ' + raw.attributes.fwdSpeedLimit + '/' + raw.attributes.revSpeedLimit + ' km/h'
      details += '<br>' + t.lock + ': ' + (raw.attributes.lockRank + 1)

      if (raw.shortcut) {
        details += '<br>' + t.shortcut + ': ' + raw.shortcut
      }
      if (raw.options?.detectCity) {
        details += '<br>' + t.detectCity + ': ' + t.yes
      }
      if (raw.options?.clearCity) {
        details += '<br>' + t.clearCity + ': ' + t.yes
      }
      if (raw.attributes.flagAttributes?.headlights) {
        details += '<br>' + t.headlights + ': ' + t.yes
      }
      if (raw.attributes.flagAttributes?.unpaved) {
        details += '<br>' + t.unpaved + ': ' + t.yes
      }

      fs.addText('details', details)
      this.tab.addElement(fs)
    }
  }

  /**
   * Initial the layers
   */
  initLayers () {
    let layers = this.settings.get('layers')

    for (let layerName in layers) {
      if (layers.hasOwnProperty(layerName)) {
        this.initLayer(layerName)
      }
    }
  }

  /**
   * Initial the layer: set visibility to true and add the checkbox for this layer
   */
  initLayer (layerName: string) {
    this.layers[layerName] = this.name + ': ' + WMEUI.t(NAME)['layers'][layerName]

    this.wmeSDK.Map.addLayer({
      layerName: this.layers[layerName],
      styleRules: SETTINGS.styleRules,
      styleContext: SETTINGS.styleContext
    });

    this.wmeSDK.Map.setLayerVisibility({ layerName: this.layers[layerName], visibility: this.settings.get('layers', layerName, 'enabled')});

    this.wmeSDK.LayerSwitcher.addLayerCheckbox({ name: this.layers[layerName] });
    this.wmeSDK.LayerSwitcher.setLayerCheckboxChecked({ name: this.layers[layerName], isChecked: this.settings.get('layers', layerName, 'enabled') })

    if (this.settings.get('layers', layerName, 'enabled')) {
      this.wmeSDK.Events.trackDataModelEvents({ dataModelName: "segments" })
    }
  }

  initHandlers (buttons: any, config: any) {
    if (this.wmeSDK.DataModel.Countries.getTopCountry()?.id
      && !this.buttons) {
      this.initButtons(buttons, config)
      this.initShortcuts()
    }

    // initial loading
    this.wmeSDK.Events.on({
      eventName: "wme-map-data-loaded",
      eventHandler: () => {
        if (this.wmeSDK.DataModel.Countries.getTopCountry()?.id
          && !this.buttons) {
          this.initButtons(buttons, config)
          this.initShortcuts()
        }
      }
    })

    // the layer toggled
    this.wmeSDK.Events.on({
      eventName: "wme-layer-checkbox-toggled",
      eventHandler: (e: any) => {
        if (Object.values(this.layers).includes(e.name)) {
          let layerKey = Object.keys(this.layers).find(key => this.layers[key] === e.name)
          this.wmeSDK.Map.setLayerVisibility({ layerName: e.name, visibility: e.checked });
          this.settings.set('layers', layerKey, 'enabled', e.checked)

          let layers = this.settings.get('layers')

          let enabledLayers = false

          for (let layerName in layers) {
            if (layers.hasOwnProperty(layerName) && layers[layerName].enabled) {
              enabledLayers = true
              break
            }
          }

          if (enabledLayers) {
            this.wmeSDK.Events.trackDataModelEvents({ dataModelName: "segments" })
            this.highlightSegments()
          } else {
            this.wmeSDK.Events.stopDataModelEventsTracking({ dataModelName: "segments" })
          }
        }
      }
    })

    // added a new model
    this.wmeSDK.Events.on({
      eventName: "wme-data-model-objects-added",
      eventHandler: (e: any) => {
        if (e.dataModelName === 'segments' && e.objectIds.length) {
          for (let i = 0; i < e.objectIds.length; i++) {
            let segmentId = e.objectIds[i]
            let segment = this.wmeSDK.DataModel.Segments.getById({ segmentId })
            this.highlightSegment(segment)
          }
        }
      }
    })

    // changed a model
    this.wmeSDK.Events.on({
      eventName: "wme-data-model-objects-changed",
      eventHandler: (e: any) => {
        // segments were changed
        if (e.dataModelName === 'segments' && e.objectIds.length) {
          for (let i = 0; i < e.objectIds.length; i++) {
            let segmentId = e.objectIds[i]
            this.removeHighlight(segmentId)

            let segment = this.wmeSDK.DataModel.Segments.getById({ segmentId })
            // try to highlight a changed segment
            this.highlightSegment(segment)
          }
        }
      }
    })

    // remove a model
    this.wmeSDK.Events.on({
      eventName: "wme-data-model-objects-removed",
      eventHandler: (e: any) => {
        if (e.dataModelName === 'segments' && e.objectIds.length) {
          for (let i = 0; i < e.objectIds.length; i++) {
            this.removeHighlight(e.objectIds[i])
          }
        }
      }
    })
  }

  /**
   * Preparation of the buttons
   * @param {Object} buttons
   * @param {Object} config
   */
  initButtons (buttons: any, config: any) {
    // check country configuration
    let country = this.wmeSDK.DataModel.Countries.getTopCountry()?.id

    this.log("Load configuration for County with ID: " + country)
    // test buttons layout for the country:
    // country = COUNTRIES.greece

    // load country configuration if needed
    if (country && config[country]) {
      buttons = Tools.mergeDeep(buttons, config[country])
    }

    this.buttons = {}

    // reload buttons
    for (let key in buttons) {
      let button = buttons[key]

      // skip disabled buttons (e.g. A: false in country config)
      if (!button) {
        continue
      }

      this.buttons[key] = {
        title: button.title,
        roadType: button.attributes.roadType,
        callback: () => this.buttonCallback(button),
        shortcut: buttons[key].shortcut,
        description: TYPE_NAMES[button.attributes.roadType] + ' — ' + button.attributes.fwdSpeedLimit + ' km/h'
      }
    }

    this.initPanel()
  }

  /**
   * Initialization of the Shortcuts
   */
  initShortcuts () {
    for (let key in this.buttons) {
      if (this.buttons.hasOwnProperty(key)) {
        let button = this.buttons[key]
        if (button.hasOwnProperty('shortcut')) {
          this.createShortcut(key, button.description, button.shortcut, button.callback)
        }
      }
    }
  }

  /**
   * Build the panel with buttons
   */
  initPanel () {
    this.panel = this.helper.createPanel(WMEUI.t(NAME).title)
    for (let key in this.buttons) {
      let button = this.buttons[key]
      let btn = this.panel.addButton(
        key,
        button.title,
        button.description,
        () => button.callback(),
        { className: 'e95-road-' + button.roadType }
      )
      btn.html().dataset[NAME] = key
    }
  }

  /**
   * Draw segments without Speed Limits
   */
  highlightSegments () {
    let segments = this.getAllSegments()

    for (let i = 0; i < segments.length; i++ ) {
      this.highlightSegment(segments[i])
    }
  }

  /**
   * Draw a segment on the E95 Layer
   * @param segment
   */
  highlightSegment (segment: any) {
    if (!segment?.id) {
      return
    }
    if (segment.id < 0) {
      return
    }
    // skip not drivable segments
    if (!this.wmeSDK.DataModel.Segments.isRoadTypeDrivable({ roadType: segment.roadType })) {
      return
    }

    let layers = this.settings.get('layers')

    for (let layerName in layers) {
      if (layers.hasOwnProperty(layerName)) {
        let layer = layers[layerName]
        if (layer.enabled && layer.callback(segment)) {
          if (!this.wmeSDK.Map.getFeatureDomElement({ layerName: this.layers[layerName], featureId: segment.id })) {
            // add a new feature to the layer
            let feature = turf.lineString(
              segment.geometry.coordinates,
              { styleName: "stylePolyline", style: { color: layer.color } },
              { id: segment.id })
            this.wmeSDK.Map.addFeatureToLayer({ layerName: this.layers[layerName], feature: feature });
          }
        }
      }
    }
  }

  /**
   * Remove a segment from the E95 Layer
   * @param segmentId
   */
  removeHighlight (segmentId: any) {
    if (!segmentId) {
      return
    }

    let layers = this.settings.get('layers')

    for (let layerName in layers) {
      if (layers.hasOwnProperty(layerName)) {
        if (this.wmeSDK.Map.getFeatureDomElement({ layerName: this.layers[layerName], featureId: segmentId })) {
          this.wmeSDK.Map.removeFeatureFromLayer({ layerName: this.layers[layerName], featureId: segmentId })
        }
      }
    }
  }

  /**
   * Handler for `segment.wme` event
   * Create UI controls every time when updated DOM of sidebar
   * Uses native JS function for better performance
   *
   * @param {jQuery.Event} event
   * @param {HTMLElement} element
   * @param {Segment} model
   * @return {void}
   */
  onSegment (event: any, element: HTMLElement, model: any) {
    if (this.canEditSegment(model)) {
      if (this.panel) element.prepend(this.panel.html())
    } else {
      this.panel?.remove()
    }
  }

  onSegments (event: any, element: HTMLElement, models: any[]) {
    if (models.filter((model) => this.canEditSegment(model)).length > 0) {
      if (this.panel) element.prepend(this.panel.html())
    } else {
      this.panel?.remove()
    }
  }

  /**
   * Handler for Road buttons
   * @param button
   */
  buttonCallback (button: any) {
    this.group('apply "' + button.title + '"')
    // Get all selected segments
    let segments = this.getSelectedSegments()
    let options = button.options
    let attributes = button.attributes

    // Try to detect the city, if needed
    if (options.detectCity) {
      let cityId = null
      for (let i = 0, total = segments.length; i < total; i++) {
        cityId = this.detectCity(segments[i])
        if (cityId) {
          options.cityId = cityId
          this.log('detected city id: ' + cityId)
          break
        }
      }
    }

    // Apply settings to all segments
    for (let i = 0, total = segments.length; i < total; i++) {
      this.updateSegment(segments[i], options, attributes)
    }
    this.groupEnd()
  }

  /**
   * Update segment attributes
   * @param {Object} segment
   * @param {Object} options
   * @param {Object} attributes
   */
  updateSegment (segment: any, options: any, attributes: any = {}) {
    const getEmptyCity = () => {
      return this.wmeSDK.DataModel.Cities.getCity({
          countryId: this.wmeSDK.DataModel.Countries.getTopCountry().id,
          cityName: ''
        })
        || this.wmeSDK.DataModel.Cities.addCity({
          countryId: this.wmeSDK.DataModel.Countries.getTopCountry().id,
          cityName: ''
        })
    }

    const getEmptyStreet = (cityId: any) => {
      return this.wmeSDK.DataModel.Streets.getStreet({
          cityId: cityId,
          streetName: '',
        })
        || this.wmeSDK.DataModel.Streets.addStreet({
          cityId: cityId,
          streetName: ''
        })
    }

    // current segment address
    let address = this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id})

    // check address information
    let cityId = address.city?.id || null
    let streetId = address.street?.id || null

    // set flags
    let cityIsEmpty = address.city ? address.city.isEmpty : true
    let streetIsEmpty = address.street ? address.street.isEmpty : true

    if (options.clearCity) {
      // clear the city option
      cityId = getEmptyCity().id
      streetId = getEmptyStreet(cityId)?.id
      this.log('clear city and use the empty city id: ' + cityId)
    } else if (cityIsEmpty && options.detectCity && options.cityId) {
      // detect the city option
      cityId = options.cityId
      this.log('use the detected city id: ' + cityId)
    } else if (cityIsEmpty && options.detectCity) {
      // top city
      // cityId = this.wmeSDK.DataModel.Cities.getTopCity()?.id
      // this.log('use the top city if available: ' + cityId)
      this.log('city not detected, skip')
    }

    // empty city
    if (!cityId) {
      cityId = getEmptyCity().id
      this.log('use the empty city id: ' + cityId)
    }

    // empty street
    if (!streetId || streetIsEmpty) {
      streetId = getEmptyStreet(cityId)?.id
      this.log('use the empty street id: ' + streetId)
    }

    // update street
    if (streetId !== address.street?.id) {
      this.wmeSDK.DataModel.Segments.updateAddress({
        segmentId: segment.id,
        primaryStreetId: streetId
      })
      this.log('apply the street id: ' + streetId)
    }

    // keep the current lock level if it is higher than in the config's attributes
    if (segment.lockRank > attributes.lockRank) {
      attributes.lockRank = segment.lockRank
      this.log('use current lock rank: ' + (attributes.lockRank + 1) + ' ⚠️')
    }

    // use user lock rank if it lower than we want to apply
    if (attributes.lockRank > this.wmeSDK.State.getUserInfo().rank) {
      attributes.lockRank = this.wmeSDK.State.getUserInfo().rank
      this.log('use user lock rank: ' + (attributes.lockRank + 1) + ' ⚠️')
    }

    // need more logs
    this.log('set road type to ' + attributes.roadType)

    // Get the keys from the source object you want to check
    const keysToCompare = Object.keys(attributes);

    // Use .some() to find if *any* key has a different value.
    // .some() stops looping as soon as it finds one `true` match.
    const shouldUpdate = keysToCompare.some(key => {
      return attributes[key] !== segment[key];
    });

    if (shouldUpdate) {
      attributes.segmentId = segment.id
      this.wmeSDK.DataModel.Segments.updateSegment(attributes)
      this.log("segment updated");
    } else {
      this.log("no update needed");
    }
  }

  /**
   * Detect city ID by connected segments
   * @param {Object} segment
   * @return {Number|null}
   */
  detectCity (segment: any): number | null {
    this.log('detect a city')
    let address = this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id })

    // check the city of the segment
    if (address.city?.name && !address.city?.isEmpty) {
      return address.city.id
    }

    // check the city of the connected segments
    let connected: any[] = []

    connected = connected.concat(this.wmeSDK.DataModel.Segments.getConnectedSegments({ segmentId: segment.id }))
    connected = connected.concat(this.wmeSDK.DataModel.Segments.getConnectedSegments({ segmentId: segment.id, reverseDirection: true }))

    let cities: any[] = connected.map(segment => this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id }).city)

    // cities of the connected segments
    cities = cities.filter(city => city) // filter segments w/out city
    cities = cities.filter(city => !city.isEmpty) // filter empty city name
    cities = cities.map(city => city.id) // extract city's ids
    cities = [...new Set(cities)] // unique cities

    if (cities.length) {
      return cities.shift() // use the first one
    }
    return null
  }
}
