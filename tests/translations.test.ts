import { describe, it, expect } from 'vitest'
import { NAME } from '../src/name'
import { TRANSLATION } from '../src/translations'

describe('NAME', () => {
  it('should be a non-empty string', () => {
    expect(NAME).toBe('E95')
  })
})

describe('TRANSLATION', () => {
  it('should have English as default', () => {
    expect(TRANSLATION).toHaveProperty('en')
  })

  it('should have Ukrainian and Russian', () => {
    expect(TRANSLATION).toHaveProperty('uk')
    expect(TRANSLATION).toHaveProperty('ru')
  })

  const requiredKeys = ['title', 'description', 'help', 'config', 'buttons', 'layers']
  const locales = ['en', 'uk', 'ru']

  it.each(locales)('%s should have all required keys', (locale) => {
    for (const key of requiredKeys) {
      expect(TRANSLATION[locale], `${locale} missing ${key}`).toHaveProperty(key)
    }
  })

  it.each(locales)('%s should have layer translations', (locale) => {
    expect(TRANSLATION[locale].layers).toHaveProperty('speedLimit')
    expect(TRANSLATION[locale].layers).toHaveProperty('headlights')
  })

  it('all translations should have the same structure as English', () => {
    const enKeys = Object.keys(TRANSLATION.en)
    for (const locale of ['uk', 'ru']) {
      const localeKeys = Object.keys(TRANSLATION[locale])
      expect(localeKeys, `${locale} keys mismatch`).toEqual(enKeys)
    }
  })
})
