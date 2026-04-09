import { describe, it, expect } from 'vitest'
import { LAYERS, SETTINGS } from '../src/layers'

describe('LAYERS', () => {
  it('should have speedLimit and headlights layers', () => {
    expect(LAYERS).toHaveProperty('speedLimit')
    expect(LAYERS).toHaveProperty('headlights')
  })

  it('each layer should have enabled, color, and callback', () => {
    for (const [name, layer] of Object.entries(LAYERS)) {
      expect(layer, `${name} missing enabled`).toHaveProperty('enabled')
      expect(layer.color, `${name} missing color`).toBeTruthy()
      expect(typeof layer.callback, `${name} callback should be function`).toBe('function')
    }
  })

  it('layers should be disabled by default', () => {
    for (const [name, layer] of Object.entries(LAYERS)) {
      expect(layer.enabled, `${name} should be disabled by default`).toBe(false)
    }
  })
})

describe('speedLimit callback', () => {
  const cb = LAYERS.speedLimit.callback

  it('should detect missing fwd speed limit on A-to-B segment', () => {
    expect(cb({ isAtoB: true, isBtoA: false, isTwoWay: false, fwdSpeedLimit: 0, revSpeedLimit: 0 })).toBe(true)
    expect(cb({ isAtoB: true, isBtoA: false, isTwoWay: false, fwdSpeedLimit: null, revSpeedLimit: 0 })).toBe(true)
  })

  it('should not flag A-to-B segment with fwd speed limit set', () => {
    expect(cb({ isAtoB: true, isBtoA: false, isTwoWay: false, fwdSpeedLimit: 50, revSpeedLimit: 0 })).toBe(false)
  })

  it('should detect missing rev speed limit on B-to-A segment', () => {
    expect(cb({ isAtoB: false, isBtoA: true, isTwoWay: false, fwdSpeedLimit: 0, revSpeedLimit: 0 })).toBe(true)
    expect(cb({ isAtoB: false, isBtoA: true, isTwoWay: false, fwdSpeedLimit: 0, revSpeedLimit: null })).toBe(true)
  })

  it('should not flag B-to-A segment with rev speed limit set', () => {
    expect(cb({ isAtoB: false, isBtoA: true, isTwoWay: false, fwdSpeedLimit: 0, revSpeedLimit: 50 })).toBe(false)
  })

  it('should detect missing fwd speed limit on two-way segment', () => {
    expect(cb({ isAtoB: false, isBtoA: false, isTwoWay: true, fwdSpeedLimit: 0, revSpeedLimit: 50 })).toBe(true)
  })

  it('should detect missing rev speed limit on two-way segment', () => {
    expect(cb({ isAtoB: false, isBtoA: false, isTwoWay: true, fwdSpeedLimit: 50, revSpeedLimit: 0 })).toBe(true)
  })

  it('should not flag two-way segment with both limits set', () => {
    expect(cb({ isAtoB: false, isBtoA: false, isTwoWay: true, fwdSpeedLimit: 50, revSpeedLimit: 50 })).toBe(false)
  })
})

describe('headlights callback', () => {
  const cb = LAYERS.headlights.callback

  it('should detect segments with headlights flag', () => {
    expect(cb({ flagAttributes: { headlights: true } })).toBe(true)
  })

  it('should not flag segments without headlights', () => {
    expect(cb({ flagAttributes: { headlights: false } })).toBe(false)
  })
})

describe('SETTINGS', () => {
  it('should have styleRules array', () => {
    expect(Array.isArray(SETTINGS.styleRules)).toBe(true)
    expect(SETTINGS.styleRules.length).toBeGreaterThan(0)
  })

  it('should have styleContext with color function', () => {
    expect(typeof SETTINGS.styleContext.color).toBe('function')
  })

  it('styleContext.color should extract color from feature properties', () => {
    const color = SETTINGS.styleContext.color({
      feature: { properties: { style: { color: '#ff0000' } } }
    })
    expect(color).toBe('#ff0000')
  })

  it('styleContext.color should handle missing properties', () => {
    expect(SETTINGS.styleContext.color({})).toBeUndefined()
    expect(SETTINGS.styleContext.color(null)).toBeUndefined()
  })
})
