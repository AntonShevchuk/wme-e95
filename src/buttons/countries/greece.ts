import { CountryConfig, TYPES } from '../../types'

const greece: CountryConfig = {
  id: 85,
  name: 'greece',
  buttons: {
    D: {
      title: 'ST30',
      attributes: {
        fwdSpeedLimit: 30,
        revSpeedLimit: 30,
        roadType: TYPES.street,
      },
    },
    E: {
      title: 'ST50',
      attributes: {
        fwdSpeedLimit: 50,
        revSpeedLimit: 50,
        roadType: TYPES.street,
      },
    },
    F: {
      title: 'ST90',
      attributes: {
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.street,
      },
    },
    J: {
      title: 'PR30',
      options: {},
      attributes: {
        fwdSpeedLimit: 30,
        revSpeedLimit: 30,
        roadType: TYPES.primary,
      },
    },
    K: {
      title: 'PR50',
      options: {},
      attributes: {
        fwdSpeedLimit: 50,
        revSpeedLimit: 50,
        roadType: TYPES.primary,
      },
    },
    L: {
      title: 'PR90',
      options: {},
      attributes: {
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.primary,
      },
    },
    M: {
      title: 'PRV',
      attributes: {
        roadType: TYPES.private,
      },
    },
    N: {
      title: 'UN',
      options: {},
      attributes: {
        flagAttributes: { unpaved: true },
        roadType: TYPES.street,
      },
    },
    O: {
      title: 'UN40',
      attributes: {
        flagAttributes: { unpaved: true },
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.street,
      },
    },
    P: {
      title: 'ST',
      options: {},
      attributes: {
        roadType: TYPES.street,
      },
    },
  },
}

export default greece
