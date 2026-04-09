/**
 * Road types matching SDK.ROAD_TYPE enum values
 * @see https://www.waze.com/editor/sdk/variables/index.SDK.ROAD_TYPE.html
 */
export const TYPES = {
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
} as const

export const TYPE_NAMES: Record<number, string> = Object.fromEntries(
  Object.entries(TYPES).map(([name, id]) => [id, name.toLowerCase().replace(/_/g, ' ')])
)

export interface ButtonAttributes {
  fwdSpeedLimit?: number
  revSpeedLimit?: number
  roadType?: number
  lockRank?: number
  flagAttributes?: Record<string, boolean>
}

export interface ButtonOptions {
  detectCity?: boolean
  clearCity?: boolean
  cityId?: number | null
}

export interface ButtonConfig {
  title: string
  shortcut?: string | null
  options?: ButtonOptions
  attributes: ButtonAttributes
}

// Country overrides are partial — they rely on Tools.mergeDeep to merge into defaults at runtime.
export type ButtonOverride = Partial<ButtonConfig>

export interface CountryConfig {
  id: number
  name: string
  buttons: Record<string, ButtonOverride | false>
}
