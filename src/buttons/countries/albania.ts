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
        roadType: TYPES.parking,
        lockRank: 0,
      },
    },
    B: {
      title: 'Pr40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.private,
        lockRank: 1,
      },
    },
    C: {
      title: 'St40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.street,
        lockRank: 1,
      },
    },
    D: {
      title: 'PS40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.primary,
        lockRank: 1,
      },
    },
    E: {
      title: 'mH40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.minor,
        lockRank: 2,
      },
    },
    F: {
      title: 'MH40',
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.major,
        lockRank: 3,
      },
    },
    G: {
      title: 'FW90',
      attributes: {
        fwdSpeedLimit: 90,
        revSpeedLimit: 90,
        roadType: TYPES.freeway,
        lockRank: 4,
      },
    },
    H: {
      title: 'Pr80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.private,
        lockRank: 1,
      },
    },
    I: {
      title: 'St80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.street,
        lockRank: 1,
      },
    },
    J: {
      title: 'PS80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.primary,
        lockRank: 1,
      },
    },
    K: {
      title: 'mH80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.minor,
        lockRank: 2,
      },
    },
    L: {
      title: 'MH80',
      attributes: {
        fwdSpeedLimit: 80,
        revSpeedLimit: 80,
        roadType: TYPES.major,
        lockRank: 3,
      },
    },
  },
}

export default albania
