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
        roadType: TYPES.STREET,
      },
    },
    E: {
      title: 'ST50',
      attributes: {
        fwdSpeedLimit: 50,
        revSpeedLimit: 50,
        roadType: TYPES.STREET,
      },
    },
    F: {
      title: 'ST90',
      attributes: {
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.STREET,
      },
    },
    J: {
      title: 'PR30',
      options: {},
      attributes: {
        fwdSpeedLimit: 30,
        revSpeedLimit: 30,
        roadType: TYPES.PRIMARY_STREET,
      },
    },
    K: {
      title: 'PR50',
      options: {},
      attributes: {
        fwdSpeedLimit: 50,
        revSpeedLimit: 50,
        roadType: TYPES.PRIMARY_STREET,
      },
    },
    L: {
      title: 'PR90',
      options: {},
      attributes: {
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.PRIMARY_STREET,
      },
    },
    M: {
      title: 'PRV',
      attributes: {
        roadType: TYPES.PRIVATE_ROAD,
      },
    },
    N: {
      title: 'UN',
      options: {},
      attributes: {
        flagAttributes: { unpaved: true },
        roadType: TYPES.STREET,
      },
    },
    O: {
      title: 'UN40',
      attributes: {
        flagAttributes: { unpaved: true },
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.STREET,
      },
    },
    P: {
      title: 'ST',
      options: {},
      attributes: {
        roadType: TYPES.STREET,
      },
    },
  },
}

export default greece
