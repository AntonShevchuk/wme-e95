declare class WMEBase {
  constructor(name: string, options?: any)
  name: string
  id: string
  wmeSDK: any
  settings: any
  log(...args: any[]): void
  group(...args: any[]): void
  groupEnd(): void
  getAllSegments(): any[]
  getSelectedSegments(): any[]
}

declare class WMEUI {
  static addTranslation(name: string, translation: any): void
  static addStyle(style: string): void
}

declare class WMEUIHelper {
  constructor(name: string)
  createTab(title: string, options: any): any
}

declare class WMEUIHelperControlButton {
  constructor(id: string, key: string, title: string, description: string, callback: () => void)
  html(): HTMLElement
}

declare const Tools: {
  mergeDeep<T>(...objects: any[]): T
}

declare const I18n: {
  t(key: string): any
}

declare const turf: {
  lineString(coordinates: any[], properties?: any, options?: any): any
}

declare const Container: any
declare const Settings: any
declare const SimpleCache: any
