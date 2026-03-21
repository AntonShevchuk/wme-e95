import { COLORS } from './types'
import { NAME } from './translations'
import { SETTINGS } from './layers'

export class E95 extends WMEBase {
  buttons: any
  panel: any
  layers: Record<string, string>

  constructor (name: string, layers: any, buttons: any, config: any) {
    super(name, { layers })

    this.buttons = null
    this.panel = null
    this.layers = {}

    this.initHelper()
    this.initTab()
    this.initLayers()
    this.initHandlers(buttons, config)
  }

  /**
   * Initialization of WMEUIHelper
   */
  initHelper() {
    (this as any).helper = new WMEUIHelper(this.name)
  }

  /**
   * Initialization of WMEUIHelperTab
   */
  initTab () {
    let tab = (this as any).helper.createTab(
      I18n.t(this.name).title,
      {
        sidebar: this.wmeSDK.Sidebar,
        image: GM_info.script.icon
      }
    )
    tab.addText('description', I18n.t(this.name).description)
    tab.addDiv('text', I18n.t(this.name).help)
    tab.addText(
      'info',
      '<a href="' + GM_info.scriptUpdateURL + '">' + GM_info.script.name + '</a> ' + GM_info.script.version
    )
    tab.addText('blue', 'made in')
    tab.addText('yellow', 'Ukraine')
    tab.inject().then(() => this.log('Script Tab Initialized') )
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
    this.layers[layerName] = this.name + ': ' + I18n.t(NAME)['layers'][layerName]

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
          this.settings.set(['layers', layerKey, 'enabled'], e.checked)

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
        color: COLORS[button.attributes.roadType],
        callback: () => this.buttonCallback(button),
        shortcut: buttons[key].shortcut,
        description: button.title + ' - ' +
          I18n.t('segment.road_types')[button.attributes.roadType] + '; ' +
          I18n.t('edit.segment.fields.speed_limit') + ' ' +
          (I18n as any).t('measurements.speed.km', { speed: button.attributes.fwdSpeedLimit })
      }
    }
    // this.log('Buttons loaded')
  }

  /**
   * Initialization of the Shortcuts
   */
  initShortcuts () {
    for (let key in this.buttons) {
      if (this.buttons.hasOwnProperty(key)) {
        let button = this.buttons[key]
        if (button.hasOwnProperty('shortcut')) {
          let shortcut: any = {
            callback: button.callback,
            description: button.description,
            shortcutId: this.id + '-' + key,
            shortcutKeys: button.shortcut,
          };

          if (shortcut.shortcutKeys && this.wmeSDK.Shortcuts.areShortcutKeysInUse({ shortcutKeys: shortcut.shortcutKeys })) {
            this.log('Shortcut already in use')
            shortcut.shortcutKeys = null
          }
          this.wmeSDK.Shortcuts.createShortcut(shortcut);
        }
      }
    }
  }

  /**
   * Get HTML of the panel
   * @return {HTMLElement|false}
   */
  getPanel (): HTMLElement | false {
    if (this.panel) {
     return this.panel
    }

    if (!this.buttons) {
      return false
    }

    // Build panel
    // Container for buttons
    let controls = document.createElement('div')
        controls.className = 'controls'
    // Create buttons
    for (let key in this.buttons) {
      let button = this.buttons[key]

      let UIButton = new WMEUIHelperControlButton(
        this.id,
        key,
        button.title,
        button.description,
        () => button.callback()
      )
      let buttonElement = UIButton.html()
      buttonElement.dataset[NAME] = key
      buttonElement.style.backgroundColor = button.color
      controls.appendChild(buttonElement)
    }
    let label = document.createElement('wz-label') as HTMLLabelElement
    label.htmlFor = ''
    label.innerText = I18n.t(NAME).title

    this.panel = document.createElement('div')
    this.panel.className = 'form-group ' + this.id
    this.panel.appendChild(label)
    this.panel.appendChild(controls)

    return this.panel
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
    // Skip for walking trails and blocked roads
    if ( this.wmeSDK.DataModel.Segments.isRoadTypeDrivable({ roadType: model.roadType })
      && this.wmeSDK.DataModel.Segments.hasPermissions({ segmentId: model.id, permission: 'EDIT_PROPERTIES' })
    ) {
      let panel = this.getPanel()
      if (panel) element.prepend( panel )
    } else {
      // Remove the panel
      element.querySelector('div.form-group.e95')?.remove()
    }
  }

  /**
   * Handler for `segments.wme` event
   * Create UI controls every time when updated DOM of sidebar
   * Uses native JS function for better performance
   *
   * @param {jQuery.Event} event
   * @param {HTMLElement} element
   * @param {Array<Segment>} models
   * @return {void}
   */
  onSegments (event: any, element: HTMLElement, models: any[]) {
    // Skip for walking trails or locked roads
    if (models.filter((model) =>
      this.wmeSDK.DataModel.Segments.isRoadTypeDrivable({ roadType: model.roadType })
      && this.wmeSDK.DataModel.Segments.hasPermissions({ segmentId: model.id, permission: 'EDIT_PROPERTIES' })
    ).length > 0) {
      let panel = this.getPanel()
      if (panel) element.prepend( panel )
    } else {
      // Remove the panel
      element.querySelector('div.form-group.e95')?.remove()
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
    this.log('set road type to "' + I18n.t('segment.road_types')[attributes.roadType] + '"')

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
    cities = cities.map(city => city.id) // extract cities id
    cities = [...new Set(cities)] // unique cities

    if (cities.length) {
      return cities.shift() // use the first one
    }
    return null
  }
}
