import { CountryConfig } from '../../types'

const hungary: CountryConfig = {
  id: 99,
  name: 'hungary',
  buttons: {
    A: {
      title: 'PR20',
      attributes: {
        fwdSpeedLimit: 20,
        revSpeedLimit: 20,
      },
    },
    B: {
      title: 'PR30',
      attributes: {
        fwdSpeedLimit: 30,
        revSpeedLimit: 30,
      },
    },
    G: {
      title: 'PLR',
      attributes: {
        fwdSpeedLimit: 20,
        revSpeedLimit: 20,
      },
    },
  },
}

export default hungary
