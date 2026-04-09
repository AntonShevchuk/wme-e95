import { CountryConfig, TYPES } from '../../types'

const honduras: CountryConfig = {
  id: 97,
  name: 'honduras',
  buttons: {
    A: {
      title: 'PR',
      options: {
        detectCity: true,
      },
      attributes: {
        fwdSpeedLimit: 20,
        revSpeedLimit: 20,
        roadType: TYPES.PRIVATE_ROAD,
        lockRank: 2,
      },
    },
    B: {
      title: 'PLR',
      options: {
        detectCity: true,
      },
      attributes: {
        fwdSpeedLimit: 20,
        revSpeedLimit: 20,
        roadType: TYPES.PARKING_LOT_ROAD,
        lockRank: 2,
      },
    },
    C: {
      title: 'StU',
      options: {
        detectCity: true,
      },
      attributes: {
        flagAttributes: { unpaved: true },
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.STREET,
        lockRank: 2,
      },
    },
    D: {
      title: 'StP',
      options: {
        detectCity: true,
      },
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.STREET,
        lockRank: 2,
      },
    },
    E: {
      title: 'PSU',
      options: {
        detectCity: true,
      },
      attributes: {
        flagAttributes: { unpaved: true },
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.PRIMARY_STREET,
        lockRank: 3,
      },
    },
    F: {
      title: 'PSP',
      options: {
        detectCity: true,
      },
      attributes: {
        fwdSpeedLimit: 40,
        revSpeedLimit: 40,
        roadType: TYPES.PRIMARY_STREET,
        lockRank: 3,
      },
    },
    G: false,
    H: false,
    I: false,
    J: false,
    K: false,
    L: false,
  },
}

export default honduras
