// ==UserScript==
// @name         WME E95
// @name:uk      WME 🇺🇦 E95
// @name:ru      WME 🇺🇦 E95
// @version      0.9.0
// @description  Setup road properties with templates
// @description:uk Швидке налаштування атрибутів вулиці за шаблонами
// @description:ru Настройка атрибутов улиц по шаблонам
// @license      MIT License
// @author       Anton Shevchuk
// @namespace    https://greasyfork.org/users/227648-anton-shevchuk
// @supportURL   https://github.com/AntonShevchuk/wme-e95/issues
// @match        https://*.waze.com/editor*
// @match        https://*.waze.com/*/editor*
// @exclude      https://*.waze.com/user/editor*
// @icon         data:image/png;base64,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
// @grant        none
// @require      https://update.greasyfork.org/scripts/389765/1090053/CommonUtils.js
// @require      https://update.greasyfork.org/scripts/450160/1681948/WME-Bootstrap.js
// @require      https://update.greasyfork.org/scripts/450221/1681856/WME-Base.js
// @require      https://update.greasyfork.org/scripts/450320/1688694/WME-UI.js
// ==/UserScript==

/* jshint esversion: 8 */
/* global require */
/* global $, jQuery */
/* global I18n */
/* global SDK */
/* global WMEBase, WMEUI, WMEUIHelper, WMEUIHelperControlButton */
/* global Container, Settings, SimpleCache, Tools  */

// import type { Node, Segment, Venue, WmeSDK } from "wme-sdk-typings";

(function () {
  'use strict'

  // Script name, uses as unique index
  const NAME = 'E95'

  // Translations
  const TRANSLATION = {
    'en': {
      title: 'Quick Properties',
      description: 'Apply the road\'s settings by one click',
      help: 'You can use the <strong>Keyboard shortcuts</strong> to apply the settings. It\'s more convenient than clicking on the buttons.',
    },
    'uk': {
      title: 'Швидкі налаштування',
      description: 'Застосовуйте швидкі налаштування для доріг за один клік',
      help: 'Використовуйте <strong>гарячі клавіши</strong>, це значно швидше ніж використовувати кнопки',
    },
    'ru': {
      title: 'Быстрые настройки',
      description: 'Применяйте быстрые настройки для дорог в один клик',
      help: 'Используйте <strong>комбинации клавиш</strong>, и не надо будет клацать кнопки',
    }
  }

  WMEUI.addTranslation(NAME, TRANSLATION)

  const STYLE = 'button.waze-btn.e95 { margin: 0 4px 4px 0; padding: 2px; width: 42px; } ' +
    'button.waze-btn.e95:hover { box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 100px 100px rgba(255, 255, 255, 0.3); } ' +
    'button.waze-btn.e95-E { margin-right: 42px; }' +
    'button.waze-btn.e95-J { margin-right: 42px; }' +
    'p.e95-info { border-top: 1px solid #ccc; color: #777; font-size: x-small; margin-top: 15px; padding-top: 10px; text-align: center; }' +
    '#sidebar p.e95-blue { background-color:#0057B8;color:white;height:32px;text-align:center;line-height:32px;font-size:24px;margin:0; }' +
    '#sidebar p.e95-yellow { background-color:#FFDD00;color:black;height:32px;text-align:center;line-height:32px;font-size:24px;margin:0; }'

  WMEUI.addStyle(STYLE)

  // Road Types
  //   I18n.translations.uk.segment.road_types
  //   I18n.translations.en.segment.road_types
  const TYPES = {
    street: 1,
    primary: 2,
    freeway: 3,
    ramp: 4,
    trail: 5,
    major: 6,
    minor: 7,
    offroad: 8,
    walkway: 9,
    boardwalk: 10,
    ferry: 15,
    stairway: 16,
    private: 17,
    railroad: 18,
    runway: 19,
    parking: 20,
    narrow: 22
  }
  // Road colors by type
  const COLORS = {
    '1': '#ffffeb',
    '2': '#f0ea58',
    // ...
    '8': '#867342',
    // ...
    '17': '#beba6c',
    // ...
    '20': '#ababab'
  }
  // Road Flags
  //   for setup flags use binary operators
  //   e.g. flags.tunnel | flags.headlights
  const FLAGS = {
    beacons: false,
    fwdLanesEnabled: false,
    fwdSpeedCamera: false,
    headlights: false,
    nearbyHOV: false,
    revLanesEnabled: false,
    revSpeedCamera: false,
    tunnel: false,
    unpaved: false
  }

  // Buttons:
  //   title - for buttons
  //   shortcut - keys for shortcuts, by default is Alt + (1..9)
  //   options:
  //    - detectCity - try to detect the city name by closures segments
  //    - clearCity - clear the city name
  //    - clearStreet - clear the street name
  //   attributes - native settings for model object
  // TODO:
  //   – check permissions for user level lower than 2
  const BUTTONS = {
    A: {
      title: 'PR 5',
      shortcut: 'A+1',
      options: {
        detectCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 5,
        revSpeedLimit: 5,
        roadType: TYPES.private,
        lockRank: 0,
      }
    },
    B: {
      title: 'PR20',
      shortcut: 'A+2',
      options: {
        detectCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 20,
        revSpeedLimit: 20,
        roadType: TYPES.private,
        lockRank: 0,
      }
    },
    C: {
      title: 'PR50',
      shortcut: 'A+3',
      options: {
        detectCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 50,
        revSpeedLimit: 50,
        roadType: TYPES.private,
        lockRank: 0,
      }
    },
    D: {
      title: 'St50',
      shortcut: 'A+4',
      options: {
        detectCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 50,
        revSpeedLimit: 50,
        roadType: TYPES.street,
        lockRank: 0,
      }
    },
    E: {
      title: 'PS50',
      shortcut: 'A+5',
      options: {
        detectCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 50,
        revSpeedLimit: 50,
        roadType: TYPES.primary,
        lockRank: 1,
      }
    },
    F: {
      title: 'PLR',
      shortcut: 'A+6',
      options: {
        detectCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 5,
        revSpeedLimit: 5,

        roadType: TYPES.parking,
        lockRank: 0,
      }
    },
    G: {
      title: 'OR',
      shortcut: 'A+7',
      options: {
        clearCity: true,
        clearStreet: false,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.offroad,
        lockRank: 0,
      }
    },
    H: {
      title: 'PR90',
      shortcut: 'A+8',
      options: {
        clearCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.private,
        lockRank: 0,
      }
    },
    I: {
      title: 'St90',
      shortcut: 'A+9',
      options: {
        clearCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.street,
        lockRank: 0,
      }
    },
    J: {
      title: 'PS90',
      shortcut: 'A+0',
      options: {
        clearCity: true,
      },
      attributes: {
        //flags: 0,
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.primary,
        lockRank: 1,
      }
    }
  }

  // codes of countries
  const COUNTRIES = {
    albania: 2,
    hungary: 99,
    portugal: 181,
    ukraine: 232
  }

  // country specified buttons config
  const CONFIGS = {
    // Albania
    // Pr40 Alt+9 private 40 km/h auto 2
    // FW90 Alt+0 freeway 90 km/h clear 5
    2: {
      A: {
        title: 'St40',
        attributes: {
          fwdSpeedLimit: 40,
          revSpeedLimit: 40,
          roadType: TYPES.street,
          lockRank: 1,
        }
      },
      B: {
        title: 'St80',
        attributes: {
          fwdSpeedLimit: 80,
          revSpeedLimit: 80,
          roadType: TYPES.street,
          lockRank: 1,
        }
      },
      C: {
        title: 'PS40',
        attributes: {
          fwdSpeedLimit: 40,
          revSpeedLimit: 40,
          roadType: TYPES.primary,
          lockRank: 1,
        }
      },
      D: {
        title: 'PS80',
        attributes: {
          fwdSpeedLimit: 80,
          revSpeedLimit: 80,
          roadType: TYPES.primary,
          lockRank: 1,
        }
      },
      E: {
        title: 'mH40',
        attributes: {
          fwdSpeedLimit: 40,
          revSpeedLimit: 40,
          roadType: TYPES.minor,
          lockRank: 2,
        }
      },
      F: {
        title: 'mH80',
        attributes: {
          fwdSpeedLimit: 80,
          revSpeedLimit: 80,
          roadType: TYPES.minor,
          lockRank: 2,
        }
      },
      G: {
        title: 'MH40',
        attributes: {
          fwdSpeedLimit: 40,
          revSpeedLimit: 40,
          roadType: TYPES.major,
          lockRank: 3,
        },
      },
      H: {
        title: 'MH80',
        attributes: {
          fwdSpeedLimit: 80,
          revSpeedLimit: 80,
          roadType: TYPES.major,
          lockRank: 3,
        }
      },
      I: {
        title: 'Pr40',
        attributes: {
          fwdSpeedLimit: 40,
          revSpeedLimit: 40,
          roadType: TYPES.private,
          lockRank: 1,
        }
      },
      J: {
        title: 'FW90',
        attributes: {
          fwdSpeedLimit: 90,
          revSpeedLimit: 90,
          roadType: TYPES.freeway,
          lockRank: 4,
        }
      }
    },
    // Hungary
    99: {
      A: {
        title: 'PR20',
        attributes: {
          fwdSpeedLimit: 20,
          revSpeedLimit: 20,
        }
      },
      B: {
        title: 'PR30',
        attributes: {
          fwdSpeedLimit: 30,
          revSpeedLimit: 30,
        }
      },
      F: {
        title: 'PLR',
        attributes: {
          fwdSpeedLimit: 20,
          revSpeedLimit: 20
        }
      },
    },
    // Portugal
    181: {
      F: {
        title: 'PLR',
        attributes: {
          fwdSpeedLimit: 30,
          revSpeedLimit: 30,
        }
      },
      G: {
        title: 'OR',
        attributes: {
          fwdSpeedLimit: 30,
          revSpeedLimit: 30,
        }
      }
    },
    // Ukraine
    232: {
      G: {
        attributes: {
          flags: {
            headlights: true
          }
        }
      },
      H: {
        attributes: {
          flags: {
            headlights: true
          }
        }
      },
      I: {
        attributes: {
          flags: {
            headlights: true
          }
        }
      },
      J: {
        attributes: {
          flags: {
            headlights: true
          }
        }
      },
    }
  }

  class E95 extends WMEBase {
    constructor (name, buttons, config) {
      super(name)
      this.initHelper()
      this.initTab()

      this.buttons = null
      this.panel = null

      this.wmeSDK.Events
        .once({ eventName: "wme-feature-editor-opened" })
        .then((event) => {
          if (event.featureType === 'segment') {
            this.initButtons(buttons, config)
            this.initShortcuts()
            this.initPanel()
          }
        });
    }

    initHelper() {
      this.helper = new WMEUIHelper(this.name)
    }

    initTab () {
      let tab = this.helper.createTab(
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

    initButtons (buttons, config) {
      // check country configuration
      let country = this.wmeSDK.DataModel.Countries.getTopCountry()?.id || COUNTRIES.ukraine

      this.config = config[country]
      this.buttons = {}

      for (let key in buttons) {
        let config = Tools.mergeDeep(buttons[key], this.config[key])

        this.buttons[key] = {
          title: config.title,
          color: COLORS[config.attributes.roadType],
          callback: () => this.buttonCallback(config),
          shortcut: buttons[key].shortcut,
          description: config.title + ' - ' +
            I18n.t('segment.road_types')[config.attributes.roadType] + '; ' +
            I18n.t('edit.segment.fields.speed_limit') + ' ' +
            I18n.t('measurements.speed.km', { speed: config.attributes.fwdSpeedLimit })
        }
      }
      // this.log('Buttons loaded')
    }
    initShortcuts () {
      for (let key in this.buttons) {
        if (this.buttons.hasOwnProperty(key)) {
          let button = this.buttons[key]
          if (button.shortcut) {
            let shortcut = {
              callback: button.callback,
              description: button.description,
              shortcutId: this.id + '-' + key,
              shortcutKeys: button.shortcut,
            };

            if (!this.wmeSDK.Shortcuts.areShortcutKeysInUse({ shortcutKeys: button.shortcut })) {
              this.wmeSDK.Shortcuts.createShortcut(shortcut);
            } else {
              this.log('Shortcut already in use')
            }
          }
        }
      }
    }

    initPanel () {
      let segmentEditGeneral = $('#segment-edit-general')
      if (segmentEditGeneral.has('div.form-group.e95').length === 0) {
        segmentEditGeneral.prepend(
          this.getPanel()
        )
        // this.log('Panel initialized')
      }
    }

    getPanel () {
      if (this.panel) {
        return this.panel
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
      let label = document.createElement('wz-label')
      label.htmlFor = ''
      label.innerText = I18n.t(NAME).title

      this.panel = document.createElement('div')
      this.panel.className = 'form-group ' + this.id
      this.panel.appendChild(label)
      this.panel.appendChild(controls)

      return this.panel
    }

    // Handler for Road buttons
    buttonCallback (button) {
      // Get all selected segments
      let segments = this.getSelectedSegments()
      let options = button.options
      let attributes = button.attributes

      // Try to detect city, if needed
      if (options.detectCity) {
        let cityId = null
        for (let i = 0, total = segments.length; i < total; i++) {
          cityId = this.detectCity(segments[i])
          if (cityId) {
            options.cityId = cityId
            break
          }
        }
      }

      // Apply settings to all segments
      for (let i = 0, total = segments.length; i < total; i++) {
        this.updateSegment(segments[i], options, attributes)
      }
    }

    /**
     * Update segment attributes
     * @param {Object} segment
     * @param {Object} options
     * @param {Object} attributes
     */
    updateSegment (segment, options, attributes = {}) {
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

      const getEmptyStreet = (cityId) => {
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
      let cityID = address.city?.id || null
      let streetID = address.street?.id || null

      // options: clear city
      if (options.clearCity) {
        this.log('clear city id')
        cityID = getEmptyCity().id
      } else
      // options: detect city
      if (!cityID && options.detectCity && options.cityID) {
        this.log('detected city "' + options.cityID + '"')
        cityID = options.cityID
      } else
      // options: top city or empty city
      if (!cityID) {
        cityID = this.wmeSDK.DataModel.Cities.getTopCity()?.id || getEmptyCity().id
      }

      // options: clear street
      if (options.clearStreet || !streetID) {
        this.log('use empty street id')
        streetID = getEmptyStreet(cityID)?.id
      }

      if (streetID !== address.street?.id) {
        this.log('update the street id: ' + streetID)
        this.wmeSDK.DataModel.Segments.updateAddress({
          segmentId: segment.id,
          primaryStreetId: streetID
        })
      }

      // keep the current lock level if it is higher than in the config's attributes
      if (segment.lockRank > attributes.lockRank) {
        attributes.lockRank = segment.lockRank
      }
      // need more logs
      this.log('set road type to ' + I18n.t('segment.road_types')[attributes.roadType])

      // Get the keys from the source object you want to check
      const keysToCompare = Object.keys(attributes);

      // Use .some() to find if *any* key has a different value.
      // .some() stops looping as soon as it finds one `true` match.
      const shouldUpdate = keysToCompare.some(key => {
        return attributes[key] !== segment[key];
      });

      if (shouldUpdate) {
        this.log("Update the segment! 🚩");
        console.log(attributes)
        attributes.segmentId = segment.id
        this.wmeSDK.DataModel.Segments.updateSegment(attributes)
      } else {
        this.log("No update needed. ✅");
      }
    }

    /**
     * Detect city ID by connected segments
     * @param {Object} segment
     * @return {Number|null}
     */
    detectCity (segment) {
      let address = this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id })

      // check city of the segment
      if (address.city?.name && !address.city?.isEmpty) {
        return address.city.id
      }

      // check city of the connected segments
      let connected = []

      connected = connected.concat(this.wmeSDK.DataModel.Segments.getConnectedSegments({ segmentId: segment.id }))
      connected = connected.concat(this.wmeSDK.DataModel.Segments.getConnectedSegments({ segmentId: segment.id, reverseDirection: true }))

      console.log(connected)

      let cities = connected.map(segment => this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id }).city)

      console.log(cities)

      // cities of the connected segments
      cities = cities.filter(city => city) // filter segments w/out city
      cities = cities.filter(city => !city.isEmpty) // filter empty city name
      cities = cities.map(city => city.id) // extract cities id

      if (cities.length) {
        return cities.shift()
      }
      return null
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
    onSegment (event, element, model) {
      // Skip for walking trails and blocked roads
      if ( this.wmeSDK.DataModel.Segments.isRoadTypeDrivable({ roadType: model.roadType })
        && this.wmeSDK.DataModel.Segments.hasPermissions({ segmentId: model.id })
      ) {
        // Panel can be already exists
        if (this.buttons) this.initPanel()
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
    onSegments (event, element, models) {
      // Skip for walking trails or locked roads
      if (models.filter((model) =>
          this.wmeSDK.DataModel.Segments.isRoadTypeDrivable({ roadType: model.roadType })
          && this.wmeSDK.DataModel.Segments.hasPermissions({ segmentId: model.id })
        ).length === 0) {
        // Remove the panel
        element.querySelector('div.form-group.e95')?.remove()
        return
      }

      // Panel can be already exists
      if (this.buttons) this.initPanel()
    }
  }

  $(document).on('bootstrap.wme', () => {
    new E95(NAME, BUTTONS, CONFIGS)
  })
})()
