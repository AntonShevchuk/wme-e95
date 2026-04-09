import { CountryConfig, TYPES } from '../../types'

const albania: CountryConfig = {
  id: 2,
  name: 'albania',
  buttons: {
    A: {
      title: 'PLR',
      shortcut: 'A+7',
      options: {
        detectCity: true,
      },
      attributes: {
        fwdSpeedLimit: 5,
        revSpeedLimit: 5,
        roadType: TYPES.PARKING_LOT_ROAD,
        lockRank: 0,
      },
    },
    B: {
      title: 'Pr40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.PRIVATE_ROAD,
        lockRank: 1,
      },
    },
    C: {
      title: 'St40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.STREET,
        lockRank: 1,
      },
    },
    D: {
      title: 'PS40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.PRIMARY_STREET,
        lockRank: 1,
      },
    },
    E: {
      title: 'mH40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.MINOR_HIGHWAY,
        lockRank: 2,
      },
    },
    F: {
      title: 'MH40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.MAJOR_HIGHWAY,
        lockRank: 3,
      },
    },
    G: {
      title: 'FW90',
      attributes: {
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.FREEWAY,
        lockRank: 4,
      },
    },
    H: {
      title: 'Pr80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.PRIVATE_ROAD,
        lockRank: 1,
      },
    },
    I: {
      title: 'St80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.STREET,
        lockRank: 1,
      },
    },
    J: {
      title: 'PS80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.PRIMARY_STREET,
        lockRank: 1,
      },
    },
    K: {
      title: 'mH80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.MINOR_HIGHWAY,
        lockRank: 2,
      },
    },
    L: {
      title: 'MH80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.MAJOR_HIGHWAY,
        lockRank: 3,
      },
    },
  },
}

export default albania
