// ==UserScript==
// @name         WME E95
// @version      0.4.9
// @description  Setup road properties in one click
// @author       Anton Shevchuk
// @license      MIT License
// @include      https://www.waze.com/editor*
// @include      https://www.waze.com/*/editor*
// @include      https://beta.waze.com/editor*
// @include      https://beta.waze.com/*/editor*
// @exclude      https://www.waze.com/user/editor*
// @exclude      https://beta.waze.com/user/editor*
// @icon         data:image/png;base64,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
// @grant        none
// @supportURL   https://github.com/AntonShevchuk/wme-e95/issues
// @namespace    http://tampermonkey.net/
// ==/UserScript==
/* jshint esversion: 6 */
/* global require */

(function ($, WazeApi) {
  'use strict';

  let WazeActionUpdateObject = require("Waze/Action/UpdateObject");
  let WazeActionUpdateFeatureAddress = require("Waze/Action/UpdateFeatureAddress");

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
  };
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
  };

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
  };

  // Buttons:
  //   title - for buttons
  //   keyCode - key for shortcuts (Alt + 1..9)
  //   detectCity - try to detect city name by closures segments
  //   clearCity - clear city name
  //   attributes - native settings for model object
  // TODO:
  //   – check permissions for user level lower than 2
  const buttons = {
    A: {
      title: 'PLR',
      keyCode: 49,
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 5,
        revMaxSpeed: 5,
        roadType: types.parking,
        flags: 0,
        lockRank: 0,
      }
    },
    B: {
      title: 'Pr20',
      keyCode: 50,
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 20,
        revMaxSpeed: 20,
        roadType: types.private,
        flags: 0,
        lockRank: 0,
      }
    },
    C: {
      title: 'Pr50',
      keyCode: 51,
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 50,
        revMaxSpeed: 50,
        roadType: types.private,
        flags: 0,
        lockRank: 0,
      }
    },
    D: {
      title: 'St50',
      keyCode: 52,
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
      keyCode: 53,
      detectCity: true,
      attributes: {
        fwdMaxSpeed: 50,
        revMaxSpeed: 50,
        roadType: types.primary,
        flags: 0,
        lockRank: 1,
      }
    },
    F: {
      title: 'OR',
      keyCode: 54,
      clearCity: true,
      attributes: {
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        roadType: types.offroad,
        lockRank: 0,
      }
    },
    G: {
      title: 'Pr90',
      keyCode: 55,
      clearCity: true,
      attributes: {
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        roadType: types.private,
        lockRank: 0,
      }
    },
    H: {
      title: 'St90',
      keyCode: 56,
      clearCity: true,
      attributes: {
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        roadType: types.street,
        lockRank: 0,
      }
    },
    I: {
      title: 'PS90',
      keyCode: 57,
      clearCity: true,
      attributes: {
        fwdMaxSpeed: 90,
        revMaxSpeed: 90,
        roadType: types.primary,
        lockRank: 1,
      }
    },
  };

  // Regions settings, will be merged with default values
  // Default values is actual for Ukraine
  const speed = {
    '20': {
      fwdMaxSpeed: 20,
      revMaxSpeed: 20,
    },
    '60': {
      fwdMaxSpeed: 60,
      revMaxSpeed: 60,
    }
  };
  const preset = {
    headlights: {
      attributes: {
        flags: flags.headlights
      }
    },
    pr60: {
      title: 'Pr60',
      attributes: speed["60"]
    },
    st60: {
      title: 'St60',
      attributes: speed["60"]
    },
    ps60: {
      title: 'PS60',
      attributes: speed["60"]
    },
  };
  const region = {
    // Belarus
    'BO': {
      A: {
        attributes: speed["20"]
      },
      C: preset.pr60,
      D: preset.st60,
      E: preset.ps60,
      F: {
        title: 'SUP',
        attributes: {
          roadType: types.street,
          flags: flags.unpaved,
        }
      }
    },
    // Russian Federation
    'RS': {
      C: preset.pr60,
      D: preset.st60,
      E: preset.ps60,
    },
    // Ukraine
    'UP': {
      F: preset.headlights,
      G: preset.headlights,
      H: preset.headlights,
      I: preset.headlights,
    }
  };

  // Get Button settings
  function getButtonConfig(index) {
    let btn = {};
    if (region[WazeApi.model.countries.top.abbr]
      && region[WazeApi.model.countries.top.abbr][index]) {
      $.extend(true, btn, buttons[index], region[WazeApi.model.countries.top.abbr][index]);
    } else {
      btn = buttons[index];
    }
    return btn;
  }

  // Update segment attributes
  function setupRoad(segment, settings, options = []) {
    let addr = segment.getAddress().attributes;
    // Change address
    let address = {
      countryID: addr.country ? addr.country.id : WazeApi.model.countries.top.id,
      stateID: addr.state ? addr.state.id : WazeApi.model.states.top.id,
      cityName: addr.city ? addr.city.attributes.name : null,
      streetName: addr.street ? addr.street.name : null,
    };
    // Settings: Clear city
    if (settings.clearCity) {
      address.cityName = null;
    }
    // Settings: Detect city
    if (settings.detectCity && options.cityName) {
      address.cityName = options.cityName;
    }
    // Check city
    address.emptyCity = (address.cityName === null);
    // Check street
    address.emptyStreet = (address.streetName === null) || (address.streetName === '');
    // Update segment properties
    WazeApi.model.actionManager.add(
      new WazeActionUpdateObject(
        segment,
        settings.attributes
      )
    );
    // Update segment address
    WazeApi.model.actionManager.add(
      new WazeActionUpdateFeatureAddress(
        segment,
        address,
        {
          streetIDField: 'primaryStreetID'
        }
      )
    );
  }

  // Update street handler
  function processHandler() {
    process(this.dataset.e95);
  }

  function process(index) {
    // Get all selected segments
    let selected = WazeApi.selectionManager.getSelectedFeatures();
    let segments = [];
    let options = {};
    // Fill segments array
    for (let i = 0, total = selected.length; i < total; i++) {
      segments.push(WazeApi.model.segments.getObjectById(selected[i].model.attributes.id))
    }
    // Filter segments array
    segments = segments.filter(segment => segment && segment.getPermissions());
    // Try to detect city
    if (getButtonConfig(index).detectCity) {
      console.log('E-95: city detection');
      let cityName = null;
      for (let i = 0, total = segments.length; i < total; i++) {
        console.log('E95: attempt ' + (i + 1));
        cityName = detectCity(segments[i]);
        if (cityName) {
          options.cityName = cityName;
          break;
        }
      }
      console.log('E-95: detected city ' + cityName);
    }

    for (let i = 0, total = segments.length; i < total; i++) {
      setupRoad(segments[i], getButtonConfig(index), options);
    }
  }

  // Detect city name by connected segments
  function detectCity(segment) {
    // Check cityName of the segment
    if (segment.getAddress().getCity() && !segment.getAddress().getCity().isEmpty()) {
      return segment.getAddress().getCity().getName();
    }
    let cityName = null;
    // TODO: replace follow magic with segment.getConnectedSegments() and segment.getConnectedSegmentsByDirection() when it will work
    let connected = WazeApi.model.nodes.getObjectById(segment.getAttributes().fromNodeID).getSegmentIds(); // segments from point A
    connected = connected.concat(WazeApi.model.nodes.getObjectById(segment.getAttributes().toNodeID).getSegmentIds()); // segments from point B
    connected.filter(id => id !== segment.getID());

    for (let i = 0, total = connected.length; i < total; i++) {
      let city = WazeApi.model.segments.getObjectById(connected[i]).getAddress().getCity();
      // skip segments with empty cities
      if (city && !city.isEmpty()) {
        cityName = city.getName();
        break;
      }
    }
    return cityName;
  }

  // Create UI controls everytime when updated DOM of sidebar
  // Uses native JS function for better performance
  function createUI() {
    // container for buttons
    let controls = document.createElement('div');
    controls.className = 'controls';
    // create all buttons
    for (let btn in buttons) {
      let button = document.createElement('button');
      let buttonConfig = getButtonConfig(btn);
      button.className = 'waze-btn waze-btn-small road-e95 road-e95-' + btn;
      button.style.backgroundColor = colors[buttonConfig.attributes.roadType];
      button.innerHTML = buttonConfig.title;
      button.dataset.e95 = btn;
      controls.appendChild(button);
    }

    let label = document.createElement('label');
    label.className = 'control-label';
    label.innerHTML = 'Quick properties';

    let group = document.createElement('div');
    group.className = 'form-group e95';
    group.appendChild(label);
    group.appendChild(controls);

    document.getElementById('segment-edit-general').prepend(group);
  }

  function init() {
    // Check for changes in the edit-panel
    // TODO: try to find solutions to handle native event
    let speedLimitsObserver = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        for (let i = 0, total = mutation.addedNodes.length; i < total; i++) {
          let node = mutation.addedNodes[i];
          // Only fire up if it's a node
          if (node.nodeType === Node.ELEMENT_NODE &&
            node.querySelector('div.selection') &&
            node.querySelector('div.hide-walking-trail').style.display !== 'none' &&
            !node.querySelector('div.form-group.e95')) {
            createUI();
          }
        }
      });
    });

    speedLimitsObserver.observe(document.getElementById('edit-panel'), {childList: true, subtree: true});
    console.log('E95: observer was run');

    // Handler for all buttons
    $('#edit-panel').on('click', 'button.road-e95', processHandler);

    // Handler for button shortcuts
    $(document).on('keyup', function (e) {
      if (e.altKey && !e.ctrlKey && !e.shiftKey) {
        for (let btn in buttons) {
          if (buttons[btn].keyCode === e.which) {
            process(btn);
            break;
          }
        }
      }
    });
    console.log('E95: handler was initialized');

    // Apply styles
    let style = document.createElement('style');
    style.type = 'text/css';
    style.innerHTML =
      'button.waze-btn.road-e95 { margin: 0 4px 4px 0; padding: 2px; width: 42px; } ' +
      'button.waze-btn.road-e95:hover { box-shadow: 0 2px 8px 0 rgba(0, 0, 0, 0.1), inset 0 0 100px 100px rgba(255, 255, 255, 0.3); } ' +
      'button.waze-btn.road-e95-E { margin-right: 42px; }' +
      'button.waze-btn.road-e95-F { margin-right: 50px; }'
    ;
    document.getElementsByTagName('head')[0].appendChild(style);
  }

  // Bootstrap plugin
  function bootstrap(tries = 1) {
    console.log('E95: attempt ' + tries);
    if (WazeApi &&
      WazeApi.map &&
      WazeApi.model &&
      WazeApi.loginManager.user) {
      console.log('E95: was initialized');
      init();
    } else if (tries < 100) {
      tries++;
      setTimeout(() => bootstrap(tries), 800);
    } else {
      console.error('E95: initialization failed');
    }
  }

  console.log('E95: initialization');
  bootstrap();
})(window.jQuery, window.W);
