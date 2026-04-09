import { describe, it, expect } from 'vitest'
import { TYPES, TYPE_NAMES } from '../src/types'

describe('TYPES', () => {
  it('should contain all SDK ROAD_TYPE values', () => {
    const expected = [
      'STREET', 'PRIMARY_STREET', 'FREEWAY', 'RAMP', 'WALKING_TRAIL',
      'MAJOR_HIGHWAY', 'MINOR_HIGHWAY', 'OFF_ROAD', 'WALKWAY',
      'PEDESTRIAN_BOARDWALK', 'FERRY', 'STAIRWAY', 'PRIVATE_ROAD',
      'RAILROAD', 'RUNWAY_TAXIWAY', 'PARKING_LOT_ROAD', 'ALLEY',
    ]
    for (const name of expected) {
      expect(TYPES).toHaveProperty(name)
    }
  })

  it('should have unique numeric values', () => {
    const values = Object.values(TYPES)
    expect(new Set(values).size).toBe(values.length)
  })

  it('should have positive integer values', () => {
    for (const [name, value] of Object.entries(TYPES)) {
      expect(value, `${name} should be positive`).toBeGreaterThan(0)
      expect(Number.isInteger(value), `${name} should be integer`).toBe(true)
    }
  })

  it('should match known SDK numeric values', () => {
    expect(TYPES.STREET).toBe(1)
    expect(TYPES.PRIMARY_STREET).toBe(2)
    expect(TYPES.FREEWAY).toBe(3)
    expect(TYPES.PRIVATE_ROAD).toBe(17)
    expect(TYPES.PARKING_LOT_ROAD).toBe(20)
    expect(TYPES.ALLEY).toBe(22)
  })
})

describe('TYPE_NAMES', () => {
  it('should have a name for every TYPES value', () => {
    for (const value of Object.values(TYPES)) {
      expect(TYPE_NAMES).toHaveProperty(String(value))
    }
  })

  it('should return lowercase human-readable names', () => {
    expect(TYPE_NAMES[TYPES.STREET]).toBe('street')
    expect(TYPE_NAMES[TYPES.PRIMARY_STREET]).toBe('primary street')
    expect(TYPE_NAMES[TYPES.PRIVATE_ROAD]).toBe('private road')
    expect(TYPE_NAMES[TYPES.PARKING_LOT_ROAD]).toBe('parking lot road')
  })
})

