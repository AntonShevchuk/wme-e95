// ==UserScript==
// @name         WME E95
// @version      0.6.1
// @description  Setup road properties in one click
// @license      MIT License
// @author       Anton Shevchuk
// @namespace    https://greasyfork.org/users/227648-anton-shevchuk
// @supportURL   https://github.com/AntonShevchuk/wme-e95/issues
// @match        https://www.waze.com/editor*
// @match        https://www.waze.com/*/editor*
// @match        https://beta.waze.com/editor*
// @match        https://beta.waze.com/*/editor*
// @exclude      https://www.waze.com/user/editor*
// @exclude      https://beta.waze.com/user/editor*
// @icon         data:image/png;base64,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
// @grant        none
// @require      https://greasyfork.org/scripts/450160-wme-bootstrap/code/WME-Bootstrap.js?version=1090054
// @require      https://greasyfork.org/scripts/450221-wme-base/code/WME-Base.js?version=1090055
// @require      https://greasyfork.org/scripts/450320-wme-ui/code/WME-UI.js?version=1090056
// ==/UserScript==

/* jshint esversion: 8 */
/* global require */
/* global $ */
/* global W */
/* global I18n */
/* global WME, WMEBase, WMEUI, WMEUIHelper */
/* global Container, Settings, SimpleCache, Tools  */

(function () {
  'use strict'

  // Script name, uses as unique index
  const NAME = 'E95'

  // Translations
  const TRANSLATION = {
    'en': {
      title: 'Quick Properties'
    },
    'uk': {
      title: 'Швидкі налаштування',
    },
    'ru': {
      title: 'Быстрые настройки'
    }
  }

  const STYLE = 'button.waze-btn.E95 { margin: 0 4px 4px 0; padding: 2px; width: 42px; } ' +
    'button.waze-btn.E95:hover { box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 100px 100px rgba(255, 255, 255, 0.3); } ' +
    'button.waze-btn.E95-E { margin-right: 42px; }' +
    'button.waze-btn.E95-J { margin-right: 42px; }'

  WMEUI.addTranslation(NAME, TRANSLATION)
  WMEUI.addStyle(STYLE)

  // Road Types
  //   I18n.translations.uk.segment.road_types
  const types = {
    street: 1,
    primary: 2,
    // ...
    offroad: 8,
    // ...
    private: 17,
    // ...
    parking: 20,
  }
  // Road colors by type
  const colors = {
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
  const flags = {
    tunnel: 0b00000001,
    // ???     : 0b00000010,
    // ???     : 0b00000100,
    // ???     : 0b00001000,
    unpaved: 0b00010000,
    headlights: 0b00100000,
  }
  // Buttons:
  //   title - for buttons
  //   shortcut - keys for shortcuts, by default is Alt + (1..9)
  //   detectCity - try to detect city name by closures segments
  //   clearCity - clear city name
  //   attributes - native settings for model object
  // TODO:
  //   – check permissions for user level lower than 2
  const BUTTONS = {
    A: {
      title: 'PLR',
      shortcut: 'A+1',
      callback: () => setupRoadCallback(getButtonConfig('A')),
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 5,
        revMaxSpeed: 5,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.parking,
        flags: 0,
        lockRank: 0,
      }
    },
    B: {
      title: 'Pr20',
      shortcut: 'A+2',
      callback: () => setupRoadCallback(getButtonConfig('B')),
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 20,
        revMaxSpeed: 20,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.private,
        flags: 0,
        lockRank: 0,
      }
    },
    C: {
      title: 'Pr50',
      shortcut: 'A+3',
      callback: () => setupRoadCallback(getButtonConfig('C')),
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 50,
        revMaxSpeed: 50,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.private,
        flags: 0,
        lockRank: 0,
      }
    },
    D: {
      title: 'St50',
      shortcut: 'A+4',
      callback: () => setupRoadCallback(getButtonConfig('D')),
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 50,
        revMaxSpeed: 50,
        roadType: types.street,
        flags: 0,
        lockRank: 0,
      }
    },
    E: {
      title: 'PS50',
      shortcut: 'A+5',
      callback: () => setupRoadCallback(getButtonConfig('E')),
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 50,
        revMaxSpeed: 50,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.primary,
        flags: 0,
        lockRank: 1,
      }
    },
    F: {
      title: '20',
      shortcut: 'A+6',
      callback: () => setupRoadCallback(getButtonConfig('F')),
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 20,
        revMaxSpeed: 20,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.parking,
        flags: 0,
        lockRank: 0,
      }
    },
    G: {
      title: 'OR',
      shortcut: 'A+7',
      callback: () => setupRoadCallback(getButtonConfig('G')),
      clearCity: true,
      attributes: {
        flags: flags.headlights,
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.offroad,
        lockRank: 0,
      }
    },
    H: {
      title: 'Pr90',
      shortcut: 'A+8',
      callback: () => setupRoadCallback(getButtonConfig('H')),
      clearCity: true,
      attributes: {
        flags: flags.headlights,
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.private,
        lockRank: 0,
      }
    },
    I: {
      title: 'St90',
      shortcut: 'A+9',
      callback: () => setupRoadCallback(getButtonConfig('I')),
      clearCity: true,
      attributes: {
        flags: flags.headlights,
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.street,
        lockRank: 0,
      }
    },
    J: {
      title: 'PS90',
      shortcut: 'A+0',
      callback: () => setupRoadCallback(getButtonConfig('J')),
      clearCity: true,
      attributes: {
        flags: flags.headlights,
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        fwdMaxSpeedUnverified: false,
        revMaxSpeedUnverified: false,
        roadType: types.primary,
        lockRank: 1,
      }
    }
  }

  // Require Waze API
  let WazeActionUpdateObject
  let WazeActionUpdateFeatureAddress

  class E95 extends WMEBase {
    constructor (name, buttons) {
      super(name)

      // Build panel
      // Container for buttons
      let controls = document.createElement('div')
      controls.className = 'controls'
      // Create buttons
      for (let btn in buttons) {
        let config = buttons[btn]
        let title = config.title
        let color = colors[config.attributes.roadType]
        let description = config.title + ' - ' +
          I18n.t('segment.road_types')[config.attributes.roadType] + '; ' +
          I18n.t('edit.segment.fields.speed_limit') + ' ' +
          I18n.t('measurements.speed.km', { speed: config.attributes.fwdMaxSpeed })

        let UIButton = new WMEUIHelperControlButton(NAME, btn, title, description, config.callback, config.shortcut)
        let button = UIButton.html()
        button.dataset[NAME] = btn
        button.style.backgroundColor = color
        controls.appendChild(button)
      }
      let label = document.createElement('label')
      label.className = 'control-label'
      label.innerHTML = I18n.t(NAME).title

      this.panel = document.createElement('div')
      this.panel.className = 'form-group ' + NAME
      this.panel.appendChild(label)
      this.panel.appendChild(controls)
    }

    /**
     * Handler for `segment.wme` event
     * Create UI controls every time when updated DOM of sidebar
     * Uses native JS function for better performance
     *
     * @param {jQuery.Event} event
     * @param {HTMLElement} element
     * @param {W.model} model
     * @return {void}
     */
    onSegment (event, element, model) {
      // Skip for walking trails
      if (model.isWalkingRoadType()) {
        return
      }
      // Panel should already create
      element.prepend(this.panel)
    }
  }

  $(document)
    .on('bootstrap.wme', ready)

  function ready () {
    // Require scripts
    WazeActionUpdateObject = require('Waze/Action/UpdateObject')
    WazeActionUpdateFeatureAddress = require('Waze/Action/UpdateFeatureAddress')

    new E95(NAME, BUTTONS)
  }

  // Get Button settings
  function getButtonConfig (index) {
    return BUTTONS[index]
  }

  // Handler for Road buttons
  function setupRoadCallback (button) {
    // Get all selected segments
    let segments = WME.getSelectedSegments()
    let options = {}
    // Try to detect city, if needed
    if (button.detectCity) {
      let cityName = null
      for (let i = 0, total = segments.length; i < total; i++) {
        cityName = detectCity(segments[i])
        if (cityName) {
          options.cityName = cityName
          break
        }
      }
    }
    for (let i = 0, total = segments.length; i < total; i++) {
      setupRoad(segments[i], button, options)
    }
  }

  // Update segment attributes
  function setupRoad (segment, settings, options = []) {
    let addr = segment.getAddress().attributes
    // Change address
    let address = {
      countryID: addr.country ? addr.country.id : W.model.getTopCountry().getID(),
      stateID: addr.state ? addr.state.id : W.model.getTopState().getID(),
      cityName: addr.city ? addr.city.attributes.name : null,
      streetName: addr.street ? addr.street.name : null,
    }
    // Settings: Clear city
    if (settings.clearCity) {
      address.cityName = null
    }
    // Settings: Detect city
    if (settings.detectCity && options.cityName) {
      address.cityName = options.cityName
    }
    // Check city
    address.emptyCity = (address.cityName === null)
    // Check street
    address.emptyStreet = (address.streetName === null) || (address.streetName === '')
    // Check lock level
    if (segment.attributes.lockRank > settings.attributes.lockRank) {
      settings.attributes.lockRank = segment.attributes.lockRank
    }
    // Update segment properties
    W.model.actionManager.add(
      new WazeActionUpdateObject(
        segment,
        settings.attributes
      )
    )
    // Update segment address
    W.model.actionManager.add(
      new WazeActionUpdateFeatureAddress(
        segment,
        address,
        {
          streetIDField: 'primaryStreetID'
        }
      )
    )
  }

  // Detect city name by connected segments
  function detectCity (segment) {
    // Check cityName of the segment
    if (segment.getAddress().getCity() && !segment.getAddress().getCity().isEmpty()) {
      return segment.getAddress().getCity().getName()
    }
    let cityName = null
    // TODO: replace follow magic with
    //  W.selectionManager.getSelectedFeatures()[0].model.getConnectedSegments()
    //  W.selectionManager.getSelectedFeatures()[0].model.getConnectedSegmentsByDirection()
    //  when it will work
    //  last check - 2019.11.21
    let connected = []
    connected = connected.concat(W.model.nodes.getObjectById(segment.attributes.fromNodeID).getSegmentIds()) // segments from point A
    connected = connected.concat(W.model.nodes.getObjectById(segment.attributes.toNodeID).getSegmentIds()) // segments from point B
    connected.filter(id => id !== segment.getID())

    for (let i = 0, total = connected.length; i < total; i++) {
      let city = W.model.segments.getObjectById(connected[i]).getAddress().getCity()
      // skip segments with empty cities
      if (city && !city.isEmpty()) {
        cityName = city.getName()
        break
      }
    }
    return cityName
  }
})()