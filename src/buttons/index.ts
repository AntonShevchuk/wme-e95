import { ButtonConfig, ButtonOverride, CountryConfig, TYPES } from '../types'

import albania from './countries/albania'
import greece from './countries/greece'
import honduras from './countries/honduras'
import hungary from './countries/hungary'
import portugal from './countries/portugal'
import ukraine from './countries/ukraine'

const countries: CountryConfig[] = [
  albania, greece, honduras, hungary, portugal, ukraine,
]

export const COUNTRIES: Record<string, number> = {
  none: 0,
  ...Object.fromEntries(countries.map(c => [c.name, c.id])),
}

export const CONFIGS: Record<number, Record<string, ButtonOverride | false>> = {
  0: {},
  ...Object.fromEntries(countries.map(c => [c.id, c.buttons])),
}

export const BUTTONS: Record<string, ButtonConfig> = {
  A: {
    title: 'PR 5',
    shortcut: 'A+1',
    options: {
      detectCity: true,
    },
    attributes: {
      fwdSpeedLimit: 5,
      revSpeedLimit: 5,
      roadType: TYPES.private,
      lockRank: 0,
    },
  },
  B: {
    title: 'PR20',
    shortcut: 'A+2',
    options: {
      detectCity: true,
    },
    attributes: {
      fwdSpeedLimit: 20,
      revSpeedLimit: 20,
      roadType: TYPES.private,
      lockRank: 0,
    },
  },
  C: {
    title: 'PR50',
    shortcut: 'A+3',
    options: {
      detectCity: true,
    },
    attributes: {
      fwdSpeedLimit: 50,
      revSpeedLimit: 50,
      roadType: TYPES.private,
      lockRank: 0,
    },
  },
  D: {
    title: 'St50',
    shortcut: 'A+4',
    options: {
      detectCity: true,
    },
    attributes: {
      fwdSpeedLimit: 50,
      revSpeedLimit: 50,
      roadType: TYPES.street,
      lockRank: 0,
    },
  },
  E: {
    title: 'PS50',
    shortcut: 'A+5',
    options: {
      detectCity: true,
    },
    attributes: {
      fwdSpeedLimit: 50,
      revSpeedLimit: 50,
      roadType: TYPES.primary,
      lockRank: 1,
    },
  },
  F: {
    title: 'mH50',
    shortcut: null,
    options: {
      detectCity: true,
    },
    attributes: {
      fwdSpeedLimit: 50,
      revSpeedLimit: 50,
      roadType: TYPES.minor,
      lockRank: 2,
    },
  },
  G: {
    title: 'PLR',
    shortcut: 'A+6',
    options: {
      detectCity: true,
    },
    attributes: {
      fwdSpeedLimit: 5,
      revSpeedLimit: 5,
      roadType: TYPES.parking,
      lockRank: 0,
    },
  },
  H: {
    title: 'OR',
    shortcut: 'A+7',
    options: {},
    attributes: {
      fwdSpeedLimit: 90,
      revSpeedLimit: 90,
      roadType: TYPES.offroad,
      lockRank: 0,
    },
  },
  I: {
    title: 'PR90',
    shortcut: 'A+8',
    options: {},
    attributes: {
      fwdSpeedLimit: 90,
      revSpeedLimit: 90,
      roadType: TYPES.private,
      lockRank: 0,
    },
  },
  J: {
    title: 'St90',
    shortcut: 'A+9',
    options: {},
    attributes: {
      fwdSpeedLimit: 90,
      revSpeedLimit: 90,
      roadType: TYPES.street,
      lockRank: 0,
    },
  },
  K: {
    title: 'PS90',
    shortcut: 'A+0',
    options: {},
    attributes: {
      fwdSpeedLimit: 90,
      revSpeedLimit: 90,
      roadType: TYPES.primary,
      lockRank: 1,
    },
  },
  L: {
    title: 'mH90',
    shortcut: null,
    options: {},
    attributes: {
      fwdSpeedLimit: 90,
      revSpeedLimit: 90,
      roadType: TYPES.minor,
      lockRank: 2,
    },
  },
}
