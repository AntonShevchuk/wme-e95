// ==UserScript==
// @name         WME E95
// @name:uk      WME 🇺🇦 E95
// @name:ru      WME 🇺🇦 E95
// @version      0.13.0
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
// @require      https://update.greasyfork.org/scripts/389765/1793258/CommonUtils.js
// @require      https://update.greasyfork.org/scripts/450160/1792042/WME-Bootstrap.js
// @require      https://update.greasyfork.org/scripts/450221/1793261/WME-Base.js
// @require      https://update.greasyfork.org/scripts/450320/1793862/WME-UI.js
//
// @require      https://cdn.jsdelivr.net/npm/@turf/turf@7.2.0/turf.min.js
// ==/UserScript==

(function () {
    'use strict';

    const NAME = 'E95';

    const TRANSLATION = {
        'en': {
            title: 'Quick Properties',
            description: 'Apply the road\'s settings by one click',
            help: 'You can use the <strong>Keyboard shortcuts</strong> to apply the settings. It\'s more convenient than clicking on the buttons.',
            config: 'The button configuration is based on <strong>community rules</strong> for each country. '
                + 'It is not a personal preference — the settings are defined in the source code and automatically applied '
                + 'when you edit in a supported country. If you edit in multiple countries, the script switches the configuration automatically.',
            buttons: {
                title: 'Buttons',
                roadType: 'Road type',
                speed: 'Speed limit',
                lock: 'Lock rank',
                shortcut: 'Shortcut',
                detectCity: 'Detect city',
                clearCity: 'Clear city',
                headlights: 'Headlights',
                unpaved: 'Unpaved',
                yes: 'yes',
            },
            layers: {
                speedLimit: 'Speed Limit',
                headlights: 'Headlights',
            },
        },
        'uk': {
            title: 'Швидкі налаштування',
            description: 'Застосовуйте швидкі налаштування для доріг за один клік',
            help: 'Використовуйте <strong>гарячі клавіши</strong>, це значно швидше ніж використовувати кнопки',
            config: 'Конфігурація кнопок базується на <strong>правилах спільноти</strong> для кожної країни. '
                + 'Це не особисті налаштування — параметри визначені у коді скрипта та автоматично застосовуються '
                + 'при редагуванні у підтримуваній країні. Якщо ви редагуєте у кількох країнах, скрипт перемикає конфігурацію автоматично.',
            buttons: {
                title: 'Кнопки',
                roadType: 'Тип дороги',
                speed: 'Обмеження швидкості',
                lock: 'Рівень блокування',
                shortcut: 'Гарячі клавіші',
                detectCity: 'Визначити місто',
                clearCity: 'Очистити місто',
                headlights: 'Ввімкнені фари',
                unpaved: 'Ґрунтова',
                yes: 'так',
            },
            layers: {
                speedLimit: 'Обмеження Швидкості',
                headlights: 'Ввімкнені фари',
            },
        },
        'ru': {
            title: 'Быстрые настройки',
            description: 'Применяйте быстрые настройки для дорог в один клик',
            help: 'Используйте <strong>комбинации клавиш</strong>, и не надо будет клацать кнопки',
            config: 'Конфигурация кнопок основана на <strong>правилах сообщества</strong> для каждой страны. '
                + 'Это не личные настройки — параметры определены в коде скрипта и автоматически применяются '
                + 'при редактировании в поддерживаемой стране. Если вы редактируете в нескольких странах, скрипт переключает конфигурацию автоматически.',
            buttons: {
                title: 'Кнопки',
                roadType: 'Тип дороги',
                speed: 'Ограничение скорости',
                lock: 'Уровень блокировки',
                shortcut: 'Горячие клавиши',
                detectCity: 'Определить город',
                clearCity: 'Очистить город',
                headlights: 'Включены фары',
                unpaved: 'Грунтовая',
                yes: 'да',
            },
            layers: {
                speedLimit: 'Ограничение скорости',
                headlights: 'Включены фары',
            },
        },
        'pt': {
            title: 'Propriedades Rápidas',
            description: 'Aplique as configurações da estrada com um clique',
            help: 'Pode usar os <strong>atalhos de teclado</strong> para aplicar as configurações. É mais conveniente do que clicar nos botões.',
            config: 'A configuração dos botões é baseada nas <strong>regras da comunidade</strong> de cada país. '
                + 'Não é uma preferência pessoal — as configurações são definidas no código-fonte e aplicadas automaticamente '
                + 'ao editar num país suportado. Se editar em vários países, o script alterna a configuração automaticamente.',
            buttons: {
                title: 'Botões',
                roadType: 'Tipo de estrada',
                speed: 'Limite de velocidade',
                lock: 'Nível de bloqueio',
                shortcut: 'Atalho',
                detectCity: 'Detetar cidade',
                clearCity: 'Limpar cidade',
                headlights: 'Faróis',
                unpaved: 'Não pavimentada',
                yes: 'sim',
            },
            layers: {
                speedLimit: 'Limite de Velocidade',
                headlights: 'Faróis',
            },
        },
        'el': {
            title: 'Γρήγορες Ιδιότητες',
            description: 'Εφαρμόστε τις ρυθμίσεις του δρόμου με ένα κλικ',
            help: 'Μπορείτε να χρησιμοποιήσετε τις <strong>συντομεύσεις πληκτρολογίου</strong> για να εφαρμόσετε τις ρυθμίσεις. Είναι πιο βολικό από το να πατάτε τα κουμπιά.',
            config: 'Η διαμόρφωση των κουμπιών βασίζεται στους <strong>κανόνες της κοινότητας</strong> για κάθε χώρα. '
                + 'Δεν είναι προσωπική προτίμηση — οι ρυθμίσεις ορίζονται στον πηγαίο κώδικα και εφαρμόζονται αυτόματα '
                + 'όταν επεξεργάζεστε σε υποστηριζόμενη χώρα. Αν επεξεργάζεστε σε πολλές χώρες, το script αλλάζει τη διαμόρφωση αυτόματα.',
            buttons: {
                title: 'Κουμπιά',
                roadType: 'Τύπος δρόμου',
                speed: 'Όριο ταχύτητας',
                lock: 'Επίπεδο κλειδώματος',
                shortcut: 'Συντόμευση',
                detectCity: 'Ανίχνευση πόλης',
                clearCity: 'Εκκαθάριση πόλης',
                headlights: 'Φώτα',
                unpaved: 'Χωματόδρομος',
                yes: 'ναι',
            },
            layers: {
                speedLimit: 'Όριο Ταχύτητας',
                headlights: 'Φώτα',
            },
        },
        'sq': {
            title: 'Vetitë e Shpejta',
            description: 'Aplikoni cilësimet e rrugës me një klikim',
            help: 'Mund të përdorni <strong>shkurtoret e tastierës</strong> për të aplikuar cilësimet. Është më e përshtatshme sesa të klikoni butonat.',
            config: 'Konfigurimi i butonave bazohet në <strong>rregullat e komunitetit</strong> për çdo vend. '
                + 'Nuk është preferencë personale — cilësimet janë të përcaktuara në kodin burimor dhe aplikohen automatikisht '
                + 'kur redaktoni në një vend të mbështetur. Nëse redaktoni në disa vende, skripti ndërron konfigurimin automatikisht.',
            buttons: {
                title: 'Butonat',
                roadType: 'Lloji i rrugës',
                speed: 'Kufiri i shpejtësisë',
                lock: 'Niveli i bllokimit',
                shortcut: 'Shkurtore',
                detectCity: 'Zbulo qytetin',
                clearCity: 'Pastro qytetin',
                headlights: 'Dritat',
                unpaved: 'E pashtruar',
                yes: 'po',
            },
            layers: {
                speedLimit: 'Kufiri i Shpejtësisë',
                headlights: 'Dritat',
            },
        },
        'es': {
            title: 'Propiedades Rápidas',
            description: 'Aplica la configuración de la carretera con un clic',
            help: 'Puedes usar los <strong>atajos de teclado</strong> para aplicar la configuración. Es más cómodo que hacer clic en los botones.',
            config: 'La configuración de los botones se basa en las <strong>reglas de la comunidad</strong> de cada país. '
                + 'No es una preferencia personal — la configuración está definida en el código fuente y se aplica automáticamente '
                + 'al editar en un país soportado. Si editas en varios países, el script cambia la configuración automáticamente.',
            buttons: {
                title: 'Botones',
                roadType: 'Tipo de carretera',
                speed: 'Límite de velocidad',
                lock: 'Nivel de bloqueo',
                shortcut: 'Atajo',
                detectCity: 'Detectar ciudad',
                clearCity: 'Limpiar ciudad',
                headlights: 'Faros',
                unpaved: 'Sin pavimentar',
                yes: 'sí',
            },
            layers: {
                speedLimit: 'Límite de Velocidad',
                headlights: 'Faros',
            },
        },
        'hu': {
            title: 'Gyors Tulajdonságok',
            description: 'Alkalmazza az út beállításait egyetlen kattintással',
            help: 'Használhatja a <strong>billentyűparancsokat</strong> a beállítások alkalmazásához. Kényelmesebb, mint a gombokra kattintani.',
            config: 'A gombok konfigurációja az egyes országok <strong>közösségi szabályain</strong> alapul. '
                + 'Ez nem személyes beállítás — a paraméterek a forráskódban vannak meghatározva, és automatikusan alkalmazásra kerülnek '
                + 'a támogatott országban történő szerkesztéskor. Ha több országban szerkeszt, a szkript automatikusan váltja a konfigurációt.',
            buttons: {
                title: 'Gombok',
                roadType: 'Úttípus',
                speed: 'Sebességhatár',
                lock: 'Zárolási szint',
                shortcut: 'Billentyűparancs',
                detectCity: 'Város felismerése',
                clearCity: 'Város törlése',
                headlights: 'Fényszórók',
                unpaved: 'Burkolatlan',
                yes: 'igen',
            },
            layers: {
                speedLimit: 'Sebességhatár',
                headlights: 'Fényszórók',
            },
        },
    };

    /**
     * Road types matching SDK.ROAD_TYPE enum values
     * @see https://www.waze.com/editor/sdk/variables/index.SDK.ROAD_TYPE.html
     */
    const TYPES = {
        STREET: 1,
        PRIMARY_STREET: 2,
        FREEWAY: 3,
        RAMP: 4,
        WALKING_TRAIL: 5,
        MAJOR_HIGHWAY: 6,
        MINOR_HIGHWAY: 7,
        OFF_ROAD: 8,
        WALKWAY: 9,
        PEDESTRIAN_BOARDWALK: 10,
        FERRY: 15,
        STAIRWAY: 16,
        PRIVATE_ROAD: 17,
        RAILROAD: 18,
        RUNWAY_TAXIWAY: 19,
        PARKING_LOT_ROAD: 20,
        ALLEY: 22,
    };
    const TYPE_NAMES = Object.fromEntries(Object.entries(TYPES).map(([name, id]) => [id, name.toLowerCase().replace(/_/g, ' ')]));

    const albania = {
        id: 2,
        name: 'albania',
        buttons: {
            A: {
                title: 'PLR',
                shortcut: 'A+7',
                options: {
                    detectCity: true,
                },
                attributes: {
                    fwdSpeedLimit: 5,
                    revSpeedLimit: 5,
                    roadType: TYPES.PARKING_LOT_ROAD,
                    lockRank: 0,
                },
            },
            B: {
                title: 'Pr40',
                attributes: {
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.PRIVATE_ROAD,
                    lockRank: 1,
                },
            },
            C: {
                title: 'St40',
                attributes: {
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.STREET,
                    lockRank: 1,
                },
            },
            D: {
                title: 'PS40',
                attributes: {
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.PRIMARY_STREET,
                    lockRank: 1,
                },
            },
            E: {
                title: 'mH40',
                attributes: {
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.MINOR_HIGHWAY,
                    lockRank: 2,
                },
            },
            F: {
                title: 'MH40',
                attributes: {
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.MAJOR_HIGHWAY,
                    lockRank: 3,
                },
            },
            G: {
                title: 'FW90',
                attributes: {
                    fwdSpeedLimit: 90,
                    revSpeedLimit: 90,
                    roadType: TYPES.FREEWAY,
                    lockRank: 4,
                },
            },
            H: {
                title: 'Pr80',
                attributes: {
                    fwdSpeedLimit: 80,
                    revSpeedLimit: 80,
                    roadType: TYPES.PRIVATE_ROAD,
                    lockRank: 1,
                },
            },
            I: {
                title: 'St80',
                attributes: {
                    fwdSpeedLimit: 80,
                    revSpeedLimit: 80,
                    roadType: TYPES.STREET,
                    lockRank: 1,
                },
            },
            J: {
                title: 'PS80',
                attributes: {
                    fwdSpeedLimit: 80,
                    revSpeedLimit: 80,
                    roadType: TYPES.PRIMARY_STREET,
                    lockRank: 1,
                },
            },
            K: {
                title: 'mH80',
                attributes: {
                    fwdSpeedLimit: 80,
                    revSpeedLimit: 80,
                    roadType: TYPES.MINOR_HIGHWAY,
                    lockRank: 2,
                },
            },
            L: {
                title: 'MH80',
                attributes: {
                    fwdSpeedLimit: 80,
                    revSpeedLimit: 80,
                    roadType: TYPES.MAJOR_HIGHWAY,
                    lockRank: 3,
                },
            },
        },
    };

    const greece = {
        id: 85,
        name: 'greece',
        buttons: {
            D: {
                title: 'ST30',
                attributes: {
                    fwdSpeedLimit: 30,
                    revSpeedLimit: 30,
                    roadType: TYPES.STREET,
                },
            },
            E: {
                title: 'ST50',
                attributes: {
                    fwdSpeedLimit: 50,
                    revSpeedLimit: 50,
                    roadType: TYPES.STREET,
                },
            },
            F: {
                title: 'ST90',
                attributes: {
                    fwdSpeedLimit: 90,
                    revSpeedLimit: 90,
                    roadType: TYPES.STREET,
                },
            },
            J: {
                title: 'PR30',
                options: {},
                attributes: {
                    fwdSpeedLimit: 30,
                    revSpeedLimit: 30,
                    roadType: TYPES.PRIMARY_STREET,
                },
            },
            K: {
                title: 'PR50',
                options: {},
                attributes: {
                    fwdSpeedLimit: 50,
                    revSpeedLimit: 50,
                    roadType: TYPES.PRIMARY_STREET,
                },
            },
            L: {
                title: 'PR90',
                options: {},
                attributes: {
                    fwdSpeedLimit: 90,
                    revSpeedLimit: 90,
                    roadType: TYPES.PRIMARY_STREET,
                },
            },
            M: {
                title: 'PRV',
                attributes: {
                    roadType: TYPES.PRIVATE_ROAD,
                },
            },
            N: {
                title: 'UN',
                options: {},
                attributes: {
                    flagAttributes: { unpaved: true },
                    roadType: TYPES.STREET,
                },
            },
            O: {
                title: 'UN40',
                attributes: {
                    flagAttributes: { unpaved: true },
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.STREET,
                },
            },
            P: {
                title: 'ST',
                options: {},
                attributes: {
                    roadType: TYPES.STREET,
                },
            },
        },
    };

    const honduras = {
        id: 97,
        name: 'honduras',
        buttons: {
            A: {
                title: 'PR',
                options: {
                    detectCity: true,
                },
                attributes: {
                    fwdSpeedLimit: 20,
                    revSpeedLimit: 20,
                    roadType: TYPES.PRIVATE_ROAD,
                    lockRank: 2,
                },
            },
            B: {
                title: 'PLR',
                options: {
                    detectCity: true,
                },
                attributes: {
                    fwdSpeedLimit: 20,
                    revSpeedLimit: 20,
                    roadType: TYPES.PARKING_LOT_ROAD,
                    lockRank: 2,
                },
            },
            C: {
                title: 'StU',
                options: {
                    detectCity: true,
                },
                attributes: {
                    flagAttributes: { unpaved: true },
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.STREET,
                    lockRank: 2,
                },
            },
            D: {
                title: 'StP',
                options: {
                    detectCity: true,
                },
                attributes: {
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.STREET,
                    lockRank: 2,
                },
            },
            E: {
                title: 'PSU',
                options: {
                    detectCity: true,
                },
                attributes: {
                    flagAttributes: { unpaved: true },
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.PRIMARY_STREET,
                    lockRank: 3,
                },
            },
            F: {
                title: 'PSP',
                options: {
                    detectCity: true,
                },
                attributes: {
                    fwdSpeedLimit: 40,
                    revSpeedLimit: 40,
                    roadType: TYPES.PRIMARY_STREET,
                    lockRank: 3,
                },
            },
            G: false,
            H: false,
            I: false,
            J: false,
            K: false,
            L: false,
        },
    };

    const hungary = {
        id: 99,
        name: 'hungary',
        buttons: {
            A: {
                title: 'PR20',
                attributes: {
                    fwdSpeedLimit: 20,
                    revSpeedLimit: 20,
                },
            },
            B: {
                title: 'PR30',
                attributes: {
                    fwdSpeedLimit: 30,
                    revSpeedLimit: 30,
                },
            },
            G: {
                title: 'PLR',
                attributes: {
                    fwdSpeedLimit: 20,
                    revSpeedLimit: 20,
                },
            },
        },
    };

    const portugal = {
        id: 181,
        name: 'portugal',
        buttons: {
            G: {
                title: 'PLR',
                attributes: {
                    fwdSpeedLimit: 30,
                    revSpeedLimit: 30,
                },
            },
            H: {
                title: 'OR',
                attributes: {
                    fwdSpeedLimit: 30,
                    revSpeedLimit: 30,
                },
            },
        },
    };

    const ukraine = {
        id: 232,
        name: 'ukraine',
        buttons: {
            H: {
                options: {
                    clearCity: true,
                },
                attributes: {
                    flagAttributes: {
                        headlights: true,
                    },
                },
            },
            I: {
                attributes: {
                    flagAttributes: {
                        headlights: true,
                    },
                },
            },
            J: {
                attributes: {
                    flagAttributes: {
                        headlights: true,
                    },
                },
            },
            K: {
                attributes: {
                    flagAttributes: {
                        headlights: true,
                    },
                },
            },
            L: {
                attributes: {
                    flagAttributes: {
                        headlights: true,
                    },
                },
            },
        },
    };

    const countries = [
        albania, greece, honduras, hungary, portugal, ukraine,
    ];
    ({
        ...Object.fromEntries(countries.map(c => [c.name, c.id])),
    });
    const CONFIGS = {
        0: {},
        ...Object.fromEntries(countries.map(c => [c.id, c.buttons])),
    };
    const BUTTONS = {
        A: {
            title: 'PR 5',
            shortcut: 'A+1',
            options: {
                detectCity: true,
            },
            attributes: {
                fwdSpeedLimit: 5,
                revSpeedLimit: 5,
                roadType: TYPES.PRIVATE_ROAD,
                lockRank: 0,
            },
        },
        B: {
            title: 'PR20',
            shortcut: 'A+2',
            options: {
                detectCity: true,
            },
            attributes: {
                fwdSpeedLimit: 20,
                revSpeedLimit: 20,
                roadType: TYPES.PRIVATE_ROAD,
                lockRank: 0,
            },
        },
        C: {
            title: 'PR50',
            shortcut: 'A+3',
            options: {
                detectCity: true,
            },
            attributes: {
                fwdSpeedLimit: 50,
                revSpeedLimit: 50,
                roadType: TYPES.PRIVATE_ROAD,
                lockRank: 0,
            },
        },
        D: {
            title: 'St50',
            shortcut: 'A+4',
            options: {
                detectCity: true,
            },
            attributes: {
                fwdSpeedLimit: 50,
                revSpeedLimit: 50,
                roadType: TYPES.STREET,
                lockRank: 0,
            },
        },
        E: {
            title: 'PS50',
            shortcut: 'A+5',
            options: {
                detectCity: true,
            },
            attributes: {
                fwdSpeedLimit: 50,
                revSpeedLimit: 50,
                roadType: TYPES.PRIMARY_STREET,
                lockRank: 1,
            },
        },
        F: {
            title: 'mH50',
            shortcut: null,
            options: {
                detectCity: true,
            },
            attributes: {
                fwdSpeedLimit: 50,
                revSpeedLimit: 50,
                roadType: TYPES.MINOR_HIGHWAY,
                lockRank: 2,
            },
        },
        G: {
            title: 'PLR',
            shortcut: 'A+6',
            options: {
                detectCity: true,
            },
            attributes: {
                fwdSpeedLimit: 5,
                revSpeedLimit: 5,
                roadType: TYPES.PARKING_LOT_ROAD,
                lockRank: 0,
            },
        },
        H: {
            title: 'OR',
            shortcut: 'A+7',
            options: {},
            attributes: {
                fwdSpeedLimit: 90,
                revSpeedLimit: 90,
                roadType: TYPES.OFF_ROAD,
                lockRank: 0,
            },
        },
        I: {
            title: 'PR90',
            shortcut: 'A+8',
            options: {},
            attributes: {
                fwdSpeedLimit: 90,
                revSpeedLimit: 90,
                roadType: TYPES.PRIVATE_ROAD,
                lockRank: 0,
            },
        },
        J: {
            title: 'St90',
            shortcut: 'A+9',
            options: {},
            attributes: {
                fwdSpeedLimit: 90,
                revSpeedLimit: 90,
                roadType: TYPES.STREET,
                lockRank: 0,
            },
        },
        K: {
            title: 'PS90',
            shortcut: 'A+0',
            options: {},
            attributes: {
                fwdSpeedLimit: 90,
                revSpeedLimit: 90,
                roadType: TYPES.PRIMARY_STREET,
                lockRank: 1,
            },
        },
        L: {
            title: 'mH90',
            shortcut: null,
            options: {},
            attributes: {
                fwdSpeedLimit: 90,
                revSpeedLimit: 90,
                roadType: TYPES.MINOR_HIGHWAY,
                lockRank: 2,
            },
        },
    };

    const SETTINGS = {
        styleContext: {
            color: (context) => {
                const style = context?.feature?.properties?.style;
                if (!style)
                    return style;
                return style?.color;
            },
        },
        styleRules: [
            {
                predicate: (properties) => properties.styleName === 'stylePolyline',
                style: {
                    stroke: true,
                    strokeColor: '${color}',
                    strokeDashstyle: 'longdash',
                    strokeLinecap: 'round',
                    strokeOpacity: 1,
                    strokeWidth: 4,
                },
            },
        ],
    };
    const LAYERS = {
        speedLimit: {
            enabled: false,
            color: '#f00',
            callback: function (segment) {
                if (segment.isAtoB && !segment.fwdSpeedLimit)
                    return true;
                if (segment.isBtoA && !segment.revSpeedLimit)
                    return true;
                return segment.isTwoWay && (!segment.fwdSpeedLimit || !segment.revSpeedLimit);
            },
        },
        headlights: {
            enabled: false,
            color: '#88ffee',
            callback: (segment) => segment.flagAttributes.headlights,
        },
    };

    class E95 extends WMEBase {
        constructor(name, layers, buttons, config) {
            super(name, { layers });
            this.buttons = null;
            this.layers = {};
            this.initLayers();
            this.initHandlers(buttons, config);
            this.initTab(buttons);
        }
        /**
         * Initialization of WMEUIHelperTab
         */
        initTab(buttons) {
            this.tab = this.helper.createTab(WMEUI.t(NAME).title, {
                sidebar: this.wmeSDK.Sidebar,
                image: GM_info.script.icon
            });
            this.tab.addText('description', WMEUI.t(NAME).description);
            this.tab.addDiv('text', WMEUI.t(NAME).help);
            this.tab.addDiv('config', WMEUI.t(NAME).config);
            this.initTabButtons(buttons);
            this.tab.addText('info', '<a href="' + GM_info.scriptUpdateURL + '">' + GM_info.script.name + '</a> ' + GM_info.script.version);
            this.tab.addText('blue', 'made in');
            this.tab.addText('yellow', 'Ukraine');
            this.tab.inject().then(() => this.log('Script Tab Initialized'));
        }
        /**
         * Populate tab with button details after buttons are loaded
         */
        initTabButtons(buttons) {
            const t = WMEUI.t(NAME).buttons;
            for (let key in buttons) {
                let raw = buttons[key];
                if (!raw)
                    continue;
                let fs = this.helper.createFieldset('<span class="e95-road-' + raw.attributes.roadType + '">' + raw.title + '</span>', { className: 'collapsed' });
                let details = t.roadType + ': ' + TYPE_NAMES[raw.attributes.roadType];
                details += '<br>' + t.speed + ': ' + raw.attributes.fwdSpeedLimit + '/' + raw.attributes.revSpeedLimit + ' km/h';
                details += '<br>' + t.lock + ': ' + (raw.attributes.lockRank + 1);
                if (raw.shortcut) {
                    details += '<br>' + t.shortcut + ': ' + raw.shortcut;
                }
                if (raw.options?.detectCity) {
                    details += '<br>' + t.detectCity + ': ' + t.yes;
                }
                if (raw.options?.clearCity) {
                    details += '<br>' + t.clearCity + ': ' + t.yes;
                }
                if (raw.attributes.flagAttributes?.headlights) {
                    details += '<br>' + t.headlights + ': ' + t.yes;
                }
                if (raw.attributes.flagAttributes?.unpaved) {
                    details += '<br>' + t.unpaved + ': ' + t.yes;
                }
                fs.addText('details', details);
                this.tab.addElement(fs);
            }
        }
        /**
         * Initial the layers
         */
        initLayers() {
            let layers = this.settings.get('layers');
            for (let layerName in layers) {
                if (layers.hasOwnProperty(layerName)) {
                    this.initLayer(layerName);
                }
            }
        }
        /**
         * Initial the layer: set visibility to true and add the checkbox for this layer
         */
        initLayer(layerName) {
            this.layers[layerName] = this.name + ': ' + WMEUI.t(NAME)['layers'][layerName];
            this.wmeSDK.Map.addLayer({
                layerName: this.layers[layerName],
                styleRules: SETTINGS.styleRules,
                styleContext: SETTINGS.styleContext
            });
            this.wmeSDK.Map.setLayerVisibility({ layerName: this.layers[layerName], visibility: this.settings.get('layers', layerName, 'enabled') });
            this.wmeSDK.LayerSwitcher.addLayerCheckbox({ name: this.layers[layerName] });
            this.wmeSDK.LayerSwitcher.setLayerCheckboxChecked({ name: this.layers[layerName], isChecked: this.settings.get('layers', layerName, 'enabled') });
            if (this.settings.get('layers', layerName, 'enabled')) {
                this.wmeSDK.Events.trackDataModelEvents({ dataModelName: "segments" });
            }
        }
        initHandlers(buttons, config) {
            if (this.wmeSDK.DataModel.Countries.getTopCountry()?.id
                && !this.buttons) {
                this.initButtons(buttons, config);
                this.initShortcuts();
            }
            // initial loading
            this.wmeSDK.Events.on({
                eventName: "wme-map-data-loaded",
                eventHandler: () => {
                    if (this.wmeSDK.DataModel.Countries.getTopCountry()?.id
                        && !this.buttons) {
                        this.initButtons(buttons, config);
                        this.initShortcuts();
                    }
                }
            });
            // the layer toggled
            this.wmeSDK.Events.on({
                eventName: "wme-layer-checkbox-toggled",
                eventHandler: (e) => {
                    if (Object.values(this.layers).includes(e.name)) {
                        let layerKey = Object.keys(this.layers).find(key => this.layers[key] === e.name);
                        this.wmeSDK.Map.setLayerVisibility({ layerName: e.name, visibility: e.checked });
                        this.settings.set('layers', layerKey, 'enabled', e.checked);
                        let layers = this.settings.get('layers');
                        let enabledLayers = false;
                        for (let layerName in layers) {
                            if (layers.hasOwnProperty(layerName) && layers[layerName].enabled) {
                                enabledLayers = true;
                                break;
                            }
                        }
                        if (enabledLayers) {
                            this.wmeSDK.Events.trackDataModelEvents({ dataModelName: "segments" });
                            this.highlightSegments();
                        }
                        else {
                            this.wmeSDK.Events.stopDataModelEventsTracking({ dataModelName: "segments" });
                        }
                    }
                }
            });
            // added a new model
            this.wmeSDK.Events.on({
                eventName: "wme-data-model-objects-added",
                eventHandler: (e) => {
                    if (e.dataModelName === 'segments' && e.objectIds.length) {
                        for (let i = 0; i < e.objectIds.length; i++) {
                            let segmentId = e.objectIds[i];
                            let segment = this.wmeSDK.DataModel.Segments.getById({ segmentId });
                            this.highlightSegment(segment);
                        }
                    }
                }
            });
            // changed a model
            this.wmeSDK.Events.on({
                eventName: "wme-data-model-objects-changed",
                eventHandler: (e) => {
                    // segments were changed
                    if (e.dataModelName === 'segments' && e.objectIds.length) {
                        for (let i = 0; i < e.objectIds.length; i++) {
                            let segmentId = e.objectIds[i];
                            this.removeHighlight(segmentId);
                            let segment = this.wmeSDK.DataModel.Segments.getById({ segmentId });
                            // try to highlight a changed segment
                            this.highlightSegment(segment);
                        }
                    }
                }
            });
            // remove a model
            this.wmeSDK.Events.on({
                eventName: "wme-data-model-objects-removed",
                eventHandler: (e) => {
                    if (e.dataModelName === 'segments' && e.objectIds.length) {
                        for (let i = 0; i < e.objectIds.length; i++) {
                            this.removeHighlight(e.objectIds[i]);
                        }
                    }
                }
            });
        }
        /**
         * Preparation of the buttons
         * @param {Object} buttons
         * @param {Object} config
         */
        initButtons(buttons, config) {
            // check country configuration
            let country = this.wmeSDK.DataModel.Countries.getTopCountry()?.id;
            this.log("Load configuration for County with ID: " + country);
            // test buttons layout for the country:
            // country = COUNTRIES.greece
            // load country configuration if needed
            if (country && config[country]) {
                buttons = Tools.mergeDeep(buttons, config[country]);
            }
            this.buttons = {};
            // reload buttons
            for (let key in buttons) {
                let button = buttons[key];
                // skip disabled buttons (e.g. A: false in country config)
                if (!button) {
                    continue;
                }
                this.buttons[key] = {
                    title: button.title,
                    roadType: button.attributes.roadType,
                    callback: () => this.buttonCallback(button),
                    shortcut: buttons[key].shortcut,
                    description: TYPE_NAMES[button.attributes.roadType] + ' — ' + button.attributes.fwdSpeedLimit + ' km/h'
                };
            }
            this.initPanel();
        }
        /**
         * Initialization of the Shortcuts
         */
        initShortcuts() {
            for (let key in this.buttons) {
                if (this.buttons.hasOwnProperty(key)) {
                    let button = this.buttons[key];
                    if (button.hasOwnProperty('shortcut')) {
                        this.createShortcut(key, button.description, button.shortcut, button.callback);
                    }
                }
            }
        }
        /**
         * Build the panel with buttons
         */
        initPanel() {
            this.panel = this.helper.createPanel(WMEUI.t(NAME).title);
            for (let key in this.buttons) {
                let button = this.buttons[key];
                let btn = this.panel.addButton(key, button.title, button.description, () => button.callback(), { className: 'e95-road-' + button.roadType });
                btn.html().dataset[NAME] = key;
            }
        }
        /**
         * Draw segments without Speed Limits
         */
        highlightSegments() {
            let segments = this.getAllSegments();
            for (let i = 0; i < segments.length; i++) {
                this.highlightSegment(segments[i]);
            }
        }
        /**
         * Draw a segment on the E95 Layer
         * @param segment
         */
        highlightSegment(segment) {
            if (!segment?.id) {
                return;
            }
            if (segment.id < 0) {
                return;
            }
            // skip not drivable segments
            if (!this.wmeSDK.DataModel.Segments.isRoadTypeDrivable({ roadType: segment.roadType })) {
                return;
            }
            let layers = this.settings.get('layers');
            for (let layerName in layers) {
                if (layers.hasOwnProperty(layerName)) {
                    let layer = layers[layerName];
                    if (layer.enabled && layer.callback(segment)) {
                        if (!this.wmeSDK.Map.getFeatureDomElement({ layerName: this.layers[layerName], featureId: segment.id })) {
                            // add a new feature to the layer
                            let feature = turf.lineString(segment.geometry.coordinates, { styleName: "stylePolyline", style: { color: layer.color } }, { id: segment.id });
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
        removeHighlight(segmentId) {
            if (!segmentId) {
                return;
            }
            let layers = this.settings.get('layers');
            for (let layerName in layers) {
                if (layers.hasOwnProperty(layerName)) {
                    if (this.wmeSDK.Map.getFeatureDomElement({ layerName: this.layers[layerName], featureId: segmentId })) {
                        this.wmeSDK.Map.removeFeatureFromLayer({ layerName: this.layers[layerName], featureId: segmentId });
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
        onSegment(event, element, model) {
            if (this.canEditSegment(model)) {
                if (this.panel)
                    element.prepend(this.panel.html());
            }
            else {
                this.panel?.remove();
            }
        }
        onSegments(event, element, models) {
            if (models.filter((model) => this.canEditSegment(model)).length > 0) {
                if (this.panel)
                    element.prepend(this.panel.html());
            }
            else {
                this.panel?.remove();
            }
        }
        /**
         * Handler for Road buttons
         * @param button
         */
        buttonCallback(button) {
            this.group('apply "' + button.title + '"');
            // Get all selected segments
            let segments = this.getSelectedSegments();
            let options = button.options;
            let attributes = button.attributes;
            // Try to detect the city, if needed
            if (options.detectCity) {
                let cityId = null;
                for (let i = 0, total = segments.length; i < total; i++) {
                    cityId = this.detectCity(segments[i]);
                    if (cityId) {
                        options.cityId = cityId;
                        this.log('detected city id: ' + cityId);
                        break;
                    }
                }
            }
            // Apply settings to all segments
            for (let i = 0, total = segments.length; i < total; i++) {
                this.updateSegment(segments[i], options, attributes);
            }
            this.groupEnd();
        }
        /**
         * Update segment attributes
         * @param {Object} segment
         * @param {Object} options
         * @param {Object} attributes
         */
        updateSegment(segment, options, attributes = {}) {
            const getEmptyCity = () => {
                return this.wmeSDK.DataModel.Cities.getCity({
                    countryId: this.wmeSDK.DataModel.Countries.getTopCountry().id,
                    cityName: ''
                })
                    || this.wmeSDK.DataModel.Cities.addCity({
                        countryId: this.wmeSDK.DataModel.Countries.getTopCountry().id,
                        cityName: ''
                    });
            };
            const getEmptyStreet = (cityId) => {
                return this.wmeSDK.DataModel.Streets.getStreet({
                    cityId: cityId,
                    streetName: '',
                })
                    || this.wmeSDK.DataModel.Streets.addStreet({
                        cityId: cityId,
                        streetName: ''
                    });
            };
            // current segment address
            let address = this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id });
            // check address information
            let cityId = address.city?.id || null;
            let streetId = address.street?.id || null;
            // set flags
            let cityIsEmpty = address.city ? address.city.isEmpty : true;
            let streetIsEmpty = address.street ? address.street.isEmpty : true;
            if (options.clearCity) {
                // clear the city option
                cityId = getEmptyCity().id;
                streetId = getEmptyStreet(cityId)?.id;
                this.log('clear city and use the empty city id: ' + cityId);
            }
            else if (cityIsEmpty && options.detectCity && options.cityId) {
                // detect the city option
                cityId = options.cityId;
                this.log('use the detected city id: ' + cityId);
            }
            else if (cityIsEmpty && options.detectCity) {
                // top city
                // cityId = this.wmeSDK.DataModel.Cities.getTopCity()?.id
                // this.log('use the top city if available: ' + cityId)
                this.log('city not detected, skip');
            }
            // empty city
            if (!cityId) {
                cityId = getEmptyCity().id;
                this.log('use the empty city id: ' + cityId);
            }
            // empty street
            if (!streetId || streetIsEmpty) {
                streetId = getEmptyStreet(cityId)?.id;
                this.log('use the empty street id: ' + streetId);
            }
            // update street
            if (streetId !== address.street?.id) {
                this.wmeSDK.DataModel.Segments.updateAddress({
                    segmentId: segment.id,
                    primaryStreetId: streetId
                });
                this.log('apply the street id: ' + streetId);
            }
            // keep the current lock level if it is higher than in the config's attributes
            if (segment.lockRank > attributes.lockRank) {
                attributes.lockRank = segment.lockRank;
                this.log('use current lock rank: ' + (attributes.lockRank + 1) + ' ⚠️');
            }
            // use user lock rank if it lower than we want to apply
            if (attributes.lockRank > this.wmeSDK.State.getUserInfo().rank) {
                attributes.lockRank = this.wmeSDK.State.getUserInfo().rank;
                this.log('use user lock rank: ' + (attributes.lockRank + 1) + ' ⚠️');
            }
            // need more logs
            this.log('set road type to ' + attributes.roadType);
            // Get the keys from the source object you want to check
            const keysToCompare = Object.keys(attributes);
            // Use .some() to find if *any* key has a different value.
            // .some() stops looping as soon as it finds one `true` match.
            const shouldUpdate = keysToCompare.some(key => {
                return attributes[key] !== segment[key];
            });
            if (shouldUpdate) {
                attributes.segmentId = segment.id;
                this.wmeSDK.DataModel.Segments.updateSegment(attributes);
                this.log("segment updated");
            }
            else {
                this.log("no update needed");
            }
        }
        /**
         * Detect city ID by connected segments
         * @param {Object} segment
         * @return {Number|null}
         */
        detectCity(segment) {
            this.log('detect a city');
            let address = this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id });
            // check the city of the segment
            if (address.city?.name && !address.city?.isEmpty) {
                return address.city.id;
            }
            // check the city of the connected segments
            let connected = [];
            connected = connected.concat(this.wmeSDK.DataModel.Segments.getConnectedSegments({ segmentId: segment.id }));
            connected = connected.concat(this.wmeSDK.DataModel.Segments.getConnectedSegments({ segmentId: segment.id, reverseDirection: true }));
            let cities = connected.map(segment => this.wmeSDK.DataModel.Segments.getAddress({ segmentId: segment.id }).city);
            // cities of the connected segments
            cities = cities.filter(city => city); // filter segments w/out city
            cities = cities.filter(city => !city.isEmpty); // filter empty city name
            cities = cities.map(city => city.id); // extract city's ids
            cities = [...new Set(cities)]; // unique cities
            if (cities.length) {
                return cities.shift(); // use the first one
            }
            return null;
        }
    }

    var css_248z = "polyline.warning {\n  stroke: #ff0000;\n  stroke-dasharray: 2 8;\n  stroke-opacity: 0.8;\n  stroke-width: 2;\n}\n\n.e95 .wme-ui-panel-content {\n  display: grid;\n  grid-template-columns: repeat(6, 44px);\n  gap: 6px;\n  padding: 0;\n}\n\n.e95 button.e95 {\n  width: 44px;\n  margin: 1px;\n  padding: 2px;\n  border: 1px solid #eee;\n  cursor: pointer;\n  box-shadow: 0 1px 2px rgba(0,0,0,.1);\n  white-space: nowrap;\n  color: #333;\n}\n\n.e95 button.e95:hover {\n  box-shadow: 0 2px 8px 0 rgba(0,0,0,.1), inset 0 0 100px 100px rgba(255,255,255,.3);\n}\n\n/* Road type colors */\n.e95 .e95-road-1  { background-color: #ffffeb } /* street */\n.e95 .e95-road-2  { background-color: #f0ea58 } /* primary street */\n.e95 .e95-road-3  { background-color: #bd74c9; color: #fff } /* freeway */\n.e95 .e95-road-4  { background-color: #ababab } /* ramp */\n.e95 .e95-road-5  { background-color: #ffffff } /* walking trail */\n.e95 .e95-road-6  { background-color: #45b1c8 } /* major highway */\n.e95 .e95-road-7  { background-color: #63b27f } /* minor highway */\n.e95 .e95-road-8  { background-color: #867342; color: #fff } /* off-road */\n.e95 .e95-road-17 { background-color: #beba6c } /* private road */\n.e95 .e95-road-20 { background-color: #ababab } /* parking lot road */\n\n.e95 .wme-ui-tab-content {\n  padding: 8px;\n}\n\n.e95 .wme-ui-fieldset-legend span {\n  display: inline-block;\n  padding: 0 6px;\n  border-radius: 4px;\n  font-size: 11px;\n  line-height: 18px;\n  min-width: 48px;\n  text-align: center;\n  color: #333;\n  border: 1px solid rgba(0,0,0,.1);\n}\n\n.e95 .wme-ui-fieldset-content p {\n  margin: 0;\n  padding: 4px 0;\n  font-size: 12px;\n  line-height: 1.6;\n  color: #555;\n}\n\np.e95-info {\n  border-top: 1px solid #ccc;\n  color: #777;\n  font-size: x-small;\n  margin-top: 15px;\n  padding-top: 10px;\n  text-align: center;\n}\n\n#sidebar p.e95-blue {\n  background-color: #0057B8;\n  color: white;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  font-size: 24px;\n  margin: 0;\n}\n\n#sidebar p.e95-yellow {\n  background-color: #FFDD00;\n  color: black;\n  height: 32px;\n  text-align: center;\n  line-height: 32px;\n  font-size: 24px;\n  margin: 0;\n}\n";

    $(document).on('bootstrap.wme', () => {
        WMEUI.addTranslation(NAME, TRANSLATION);
        WMEUI.addStyle(css_248z);
        new E95(NAME, LAYERS, BUTTONS, CONFIGS);
    });

})();
