export const SETTINGS = {
  styleContext: {
    color: (context: any) => {
      const style = context?.feature?.properties?.style
      if (!style) return style
      return style?.color
    },
  },
  styleRules: [
    {
      predicate: (properties: any) => properties.styleName === 'stylePolyline',
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
}

export const LAYERS: Record<string, any> = {
  speedLimit: {
    enabled: false,
    color: '#f00',
    callback: function (segment: any) {
      if (segment.isAtoB && !segment.fwdSpeedLimit) return true
      if (segment.isBtoA && !segment.revSpeedLimit) return true
      return segment.isTwoWay && (!segment.fwdSpeedLimit || !segment.revSpeedLimit)
    },
  },
  headlights: {
    enabled: false,
    color: '#88ffee',
    callback: (segment: any) => segment.flagAttributes.headlights,
  },
}
