import { describe, it, expect } from 'vitest'
import { BUTTONS, COUNTRIES, CONFIGS } from '../src/buttons/index'
import { TYPES } from '../src/types'

describe('BUTTONS', () => {
  const keys = Object.keys(BUTTONS)

  it('should have 12 default buttons (A-L)', () => {
    expect(keys).toEqual(['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'])
  })

  it('every button should have a title', () => {
    for (const [key, btn] of Object.entries(BUTTONS)) {
      expect(btn.title, `button ${key} missing title`).toBeTruthy()
    }
  })

  it('every button should have a valid roadType', () => {
    const validTypes = Object.values(TYPES)
    for (const [key, btn] of Object.entries(BUTTONS)) {
      expect(validTypes, `button ${key} has invalid roadType ${btn.attributes.roadType}`)
        .toContain(btn.attributes.roadType)
    }
  })

  it('every button should have fwd and rev speed limits', () => {
    for (const [key, btn] of Object.entries(BUTTONS)) {
      expect(btn.attributes.fwdSpeedLimit, `button ${key} missing fwdSpeedLimit`).toBeDefined()
      expect(btn.attributes.revSpeedLimit, `button ${key} missing revSpeedLimit`).toBeDefined()
      expect(btn.attributes.fwdSpeedLimit, `button ${key} fwdSpeedLimit should be positive`).toBeGreaterThan(0)
      expect(btn.attributes.revSpeedLimit, `button ${key} revSpeedLimit should be positive`).toBeGreaterThan(0)
    }
  })

  it('every button should have lockRank in valid range (0-4)', () => {
    for (const [key, btn] of Object.entries(BUTTONS)) {
      expect(btn.attributes.lockRank, `button ${key} missing lockRank`).toBeDefined()
      expect(btn.attributes.lockRank, `button ${key} lockRank out of range`)
        .toBeGreaterThanOrEqual(0)
      expect(btn.attributes.lockRank, `button ${key} lockRank out of range`)
        .toBeLessThanOrEqual(4)
    }
  })

  it('shortcuts should be unique (excluding null)', () => {
    const shortcuts = Object.values(BUTTONS)
      .map(b => b.shortcut)
      .filter(s => s !== null && s !== undefined)
    expect(new Set(shortcuts).size).toBe(shortcuts.length)
  })

  it('shortcuts should follow Alt+N pattern', () => {
    for (const [key, btn] of Object.entries(BUTTONS)) {
      if (btn.shortcut) {
        expect(btn.shortcut, `button ${key} shortcut format`).toMatch(/^A\+\d$/)
      }
    }
  })
})

describe('COUNTRIES', () => {
  it('should have "none" entry with value 0', () => {
    expect(COUNTRIES.none).toBe(0)
  })

  it('should have all expected countries', () => {
    const expected = ['albania', 'greece', 'honduras', 'hungary', 'portugal', 'ukraine']
    for (const name of expected) {
      expect(COUNTRIES, `missing country: ${name}`).toHaveProperty(name)
    }
  })

  it('should have unique country IDs', () => {
    const ids = Object.values(COUNTRIES)
    expect(new Set(ids).size).toBe(ids.length)
  })
})

describe('CONFIGS', () => {
  it('should have config for every country ID', () => {
    for (const [name, id] of Object.entries(COUNTRIES)) {
      expect(CONFIGS, `missing config for ${name} (${id})`).toHaveProperty(String(id))
    }
  })

  it('config for "none" (0) should be empty', () => {
    expect(CONFIGS[0]).toEqual({})
  })

  it('country overrides should only use valid button keys', () => {
    const validKeys = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
    for (const [countryId, buttons] of Object.entries(CONFIGS)) {
      if (Number(countryId) === 0) continue
      for (const key of Object.keys(buttons)) {
        expect(validKeys, `country ${countryId} has unexpected button key "${key}"`)
          .toContain(key)
      }
    }
  })

  it('disabled buttons should be false', () => {
    // Honduras disables G-L
    const honduras = CONFIGS[COUNTRIES.honduras]
    expect(honduras.G).toBe(false)
    expect(honduras.H).toBe(false)
    expect(honduras.I).toBe(false)
    expect(honduras.J).toBe(false)
    expect(honduras.K).toBe(false)
    expect(honduras.L).toBe(false)
  })

  it('overrides with roadType should use valid TYPES values', () => {
    const validTypes = Object.values(TYPES)
    for (const [countryId, buttons] of Object.entries(CONFIGS)) {
      for (const [key, override] of Object.entries(buttons)) {
        if (override === false) continue
        if (override.attributes?.roadType !== undefined) {
          expect(validTypes, `country ${countryId} button ${key} has invalid roadType`)
            .toContain(override.attributes.roadType)
        }
      }
    }
  })
})
