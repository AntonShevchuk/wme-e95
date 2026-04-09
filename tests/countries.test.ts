import { describe, it, expect } from 'vitest'
import { TYPES } from '../src/types'

import albania from '../src/buttons/countries/albania'
import greece from '../src/buttons/countries/greece'
import honduras from '../src/buttons/countries/honduras'
import hungary from '../src/buttons/countries/hungary'
import portugal from '../src/buttons/countries/portugal'
import ukraine from '../src/buttons/countries/ukraine'

const countries = [albania, greece, honduras, hungary, portugal, ukraine]

describe('Country configs', () => {
  it.each(countries)('$name should have a positive numeric id', (country) => {
    expect(country.id).toBeGreaterThan(0)
    expect(Number.isInteger(country.id)).toBe(true)
  })

  it.each(countries)('$name should have a non-empty name', (country) => {
    expect(country.name.length).toBeGreaterThan(0)
  })

  it('should have unique country IDs', () => {
    const ids = countries.map(c => c.id)
    expect(new Set(ids).size).toBe(ids.length)
  })

  it('should have unique country names', () => {
    const names = countries.map(c => c.name)
    expect(new Set(names).size).toBe(names.length)
  })
})

describe('Greece', () => {
  it('should extend beyond L with extra buttons M-P', () => {
    expect(greece.buttons).toHaveProperty('M')
    expect(greece.buttons).toHaveProperty('N')
    expect(greece.buttons).toHaveProperty('O')
    expect(greece.buttons).toHaveProperty('P')
  })

  it('extra buttons should have title and roadType', () => {
    for (const key of ['M', 'N', 'O', 'P']) {
      const btn = greece.buttons[key]
      expect(btn).not.toBe(false)
      if (btn && btn !== false) {
        expect(btn.title, `Greece button ${key} missing title`).toBeTruthy()
        expect(btn.attributes?.roadType, `Greece button ${key} missing roadType`).toBeDefined()
      }
    }
  })
})

describe('Honduras', () => {
  it('should disable buttons G through L', () => {
    for (const key of ['G', 'H', 'I', 'J', 'K', 'L']) {
      expect(honduras.buttons[key], `Honduras button ${key} should be false`).toBe(false)
    }
  })

  it('active buttons should have detectCity enabled', () => {
    for (const key of ['A', 'B', 'C', 'D', 'E', 'F']) {
      const btn = honduras.buttons[key]
      if (btn && btn !== false) {
        expect(btn.options?.detectCity, `Honduras button ${key} should detect city`).toBe(true)
      }
    }
  })
})

describe('Ukraine', () => {
  it('should add headlights flag to high-speed buttons', () => {
    for (const key of ['H', 'I', 'J', 'K', 'L']) {
      const btn = ukraine.buttons[key]
      if (btn && btn !== false) {
        expect(btn.attributes?.flagAttributes?.headlights,
          `Ukraine button ${key} should have headlights`).toBe(true)
      }
    }
  })

  it('button H should have clearCity option', () => {
    const btn = ukraine.buttons.H
    if (btn && btn !== false) {
      expect(btn.options?.clearCity).toBe(true)
    }
  })
})
