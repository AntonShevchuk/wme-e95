export const TYPES: Record<string, number> = {
  street: 1,
  primary: 2,
  freeway: 3,
  ramp: 4,
  trail: 5,
  major: 6,
  minor: 7,
  offroad: 8,
  walkway: 9,
  boardwalk: 10,
  ferry: 15,
  stairway: 16,
  private: 17,
  railroad: 18,
  runway: 19,
  parking: 20,
  narrow: 22,
}

export const COLORS: Record<string, string> = {
  '1': '#ffffeb',
  '2': '#f0ea58',
  '3': '#bd74c9',
  '4': '#ababab',
  '5': '#ffffff',
  '6': '#45b1c8',
  '7': '#63b27f',
  '8': '#867342',
  '17': '#beba6c',
  '20': '#ababab',
}

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
