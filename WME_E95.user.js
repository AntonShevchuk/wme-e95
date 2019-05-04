// ==UserScript==
// @name         WME E95
// @version      0.2.0
// @description  Setup road properties in one click
// @author       Anton Shevchuk
// @license      MIT License
// @include      https://www.waze.com/editor*
// @include      https://www.waze.com/*/editor*
// @exclude      https://www.waze.com/user/editor*
// @icon         data:image/png;base64,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
// @grant        none
// @updateURL    https://github.com/AntonShevchuk/wme-e95/raw/master/WME_E95.user.js
// @downloadURL  https://github.com/AntonShevchuk/wme-e95/raw/master/WME_E95.user.js
// @supportURL   https://github.com/AntonShevchuk/wme-e95/issues
// ==/UserScript==
/* jshint esversion: 6 */
/* global require */

(function($, WazeApi) {
    'use strict';

    let WazeActionUpdateObject = require("Waze/Action/UpdateObject");
    let WazeActionUpdateFeatureAddress = require("Waze/Action/UpdateFeatureAddress");

    // Road Types
    //   I18n.translations.uk.segment.road_types
    const types = {
        street  : 1,
        primary : 2,
        // ...
        private : 17,
        // ...
        parking : 20,
    };

    // Road Flags
    //   for setup flags use binary operators
    //   e.g. flags.tunnel | flags.headlights
    const flags = {
        tunnel     : 0b00000001,
        // ???     : 0b00000010,
        // ???     : 0b00000100,
        // ???     : 0b00001000,
        unpaved    : 0b00010000,
        headlights : 0b00100000,
    };

    // Buttons:
    //   title - for buttons
    //   keyCode - key for shortcuts (Alt+...)
    //   detectCity - try to detect city name by closures segments
    //   clearCity - clear city name
    //   attributes - native settings for object
    const buttons = {
        A: {
            title: 'Pr20',
            color: '#ffa',
            keyCode: 49,
            detectCity: true,
            attributes: {
                fwdMaxSpeed: 20,
                revMaxSpeed: 20,
                roadType: types.private,
            }
        },
        B: {
            title: 'Pr50',
            color: '#ffa',
            keyCode: 50,
            detectCity: true,
            attributes: {
                fwdMaxSpeed: 50,
                revMaxSpeed: 50,
                roadType: types.private,
            }
        },
        C: {
            title: 'St50',
            color: '#fff',
            keyCode: 51,
            detectCity: true,
            attributes: {
                fwdMaxSpeed: 50,
                revMaxSpeed: 50,
                roadType: types.street,
            }
        },
        D: {
            title: 'St90',
            color: '#fff',
            keyCode: 52,
            clearCity: true,
            attributes: {
                fwdMaxSpeed: 90,
                revMaxSpeed: 90,
                roadType: types.street,
                flags: flags.headlights,
            }
        },
        E: {
            title: 'P5',
            color: '#abc',
            keyCode: 53,
            detectCity: true,
            attributes: {
                fwdMaxSpeed: 5,
                revMaxSpeed: 5,
                roadType: types.parking,
            }
        }
    };

    // Update segment attributes
    function setupRoad(segment, settings) {
        let addr = segment.getAddress().attributes;
        // Change address
        let address = {
            countryID:   addr.country ? addr.country.id : WazeApi.model.countries.top.id,
            stateID:     addr.state ? addr.state.id : WazeApi.model.states.top.id,
            cityName:    addr.city ? addr.city.attributes.name : null,
            streetName:  addr.street ? addr.street.name : null,
        };

        // Settings: Clear city
        if (settings.clearCity) {
            address.cityName = null;
        }

        // Settings: Detect city
        if (settings.detectCity) {
            address.cityName = getCity(segment);
        }

        // Check city
        address.emptyCity = (address.cityName === null);

        // Check street
        address.emptyStreet = (address.streetName === null);

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
        for (let i = 0, total = selected.length; i < total; i++) {
            let segment = WazeApi.model.segments.getObjectById(selected[i].model.attributes.id);
            if (!segment) continue;
            if (!segment.getPermissions()) {
                console.log('E95: you don\'t have permissions');
                continue;
            }
            setupRoad(segment, buttons[index]);
        }
    }

    // Detect city name by connected segments
    function getCity(segment) {
        // get cities
        // W.model.cities.getValidCities();
        // distance to city center
        // W.model.cities.getObjectById(644304).getAttributes().geometry.distanceTo(W.model.segments.getObjectById(374688209).getAttributes().geometry);
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
        console.log('E-95: detected city ' + cityName);
        return cityName;
    }

    // Create UI controls everytime
    // Uses native JS function for better performance
    function createUI() {
        // container for buttons
        let controls = document.createElement('div');
        controls.className = 'controls';
        // create all buttons
        for (let btn in buttons) {
            let button = document.createElement('button');
            button.className = 'waze-btn waze-btn-small waze-btn-white road-e95 road-' + btn;
            button.style.marginRight = '4px';
            button.style.marginBottom = '4px';
            button.style.backgroundColor = buttons[btn].color;
            button.innerHTML = buttons[btn].title;
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
        var speedlimitsObserver = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                for (let i = 0, total = mutation.addedNodes.length; i < total; i++) {
                    let node = mutation.addedNodes[i];
                    // Only fire up if it's a node
                    if (node.nodeType === Node.ELEMENT_NODE &&
                        node.querySelector('div.selection') &&
                        !node.querySelector('div.form-group.e95')) {
                        createUI();
                    }
                }
            });
        });

        speedlimitsObserver.observe(document.getElementById('edit-panel'), { childList: true, subtree: true });
        console.log('E95: observer was run');

        // Handler for all buttons
        $('#edit-panel').on('click', 'button.road-e95', processHandler);

        // Handler for button shortcuts
        $(document).on('keyup', function(e) {
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
