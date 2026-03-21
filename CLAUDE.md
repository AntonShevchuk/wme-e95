# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

WME E95 is a TamperMonkey/GreaseMonkey userscript for Waze Map Editor (WME). It provides quick road property templates — one-click buttons and keyboard shortcuts (Alt+1 through Alt+0) to apply speed limits, road types, lock ranks, and flags to selected road segments.

Source is written in TypeScript under `src/`, built with Rollup into a single IIFE at `dist/WME-E95.user.js`. GreasyFork auto-syncs from the dist output.

## Commands

- **Install:** `npm install`
- **Build:** `npm run build`
- **Watch:** `npm run watch` (rebuild on changes)
- No test or lint steps exist.

## Architecture

```
src/
├── meta.ts              # userscript header (comment block, not TS code)
├── style.css            # plain CSS, imported as string
├── globals.d.ts         # declares WME runtime globals (WMEBase, WMEUI, etc.)
├── types.ts             # TYPES, COLORS, TS interfaces (ButtonConfig, CountryConfig, etc.)
├── translations.ts      # NAME constant, TRANSLATION (en, uk, ru)
├── layers.ts            # LAYERS (speedLimit, headlights), SETTINGS (style rules)
├── buttons/
│   ├── index.ts         # default BUTTONS (A-L), COUNTRIES map, CONFIGS map
│   └── countries/       # per-country button overrides (one file each)
├── e95.ts               # E95 class (extends WMEBase)
└── index.ts             # bootstrap: registers translations/CSS, instantiates E95
```

**Build output:** `dist/WME-E95.user.js` — IIFE with userscript header prepended as banner. Version is read from `package.json` via `{{version}}` placeholder in `meta.ts`.

**Key external dependencies** (loaded via `@require` in userscript header, not bundled):
- WME-Bootstrap.js, WME-Base.js, WME-UI.js, CommonUtils.js (WME script ecosystem)
- TurfJS v7.2.0 (geospatial line geometry)

## Country Configuration Pattern

Each country file in `src/buttons/countries/` exports a `CountryConfig` with partial button overrides. These are merged into default BUTTONS via `Tools.mergeDeep` at runtime — country configs are intentionally partial. A button set to `false` disables it. Countries can also add buttons beyond A-L (e.g., Greece adds M-P).

To add a new country: create a file in `src/buttons/countries/`, import it in `src/buttons/index.ts`.

## Coding Conventions

- TypeScript with `strict: false` — minimal type annotations, `any` for WME SDK types
- Road types use the `TYPES` constant object from `types.ts`, not raw numbers
- Lock ranks are 0-indexed (0-4) but capped to the user's editing rank at runtime
- GitHub Actions auto-builds `dist/` on push to master
