import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 6,
    lpSymbol: 'BUSD-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 0,
    lpSymbol: 'ZLT-BNB LP',
    lpAddresses: {
      97: '0x3ed8936cAFDF85cfDBa29Fbe5940A5b0524824F4',
      56: '0x87E58e46bE9d00793Ed1CF7c999c51B71923BDa7',
    },
    token: serializedTokens.zlt,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 1,
    lpSymbol: 'ZLT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x87E58e46bE9d00793Ed1CF7c999c51B71923BDa7',
    },
    token: serializedTokens.zlt,
    quoteToken: serializedTokens.wbnb,
  },

  {
    pid: 2,
    lpSymbol: 'ZLT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x87E58e46bE9d00793Ed1CF7c999c51B71923BDa7',
    },
    token: serializedTokens.zlt,
    quoteToken: serializedTokens.wbnb,
  },
  // {
  //   pid: 3,
  //   lpSymbol: 'ZLT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.wbnb,
  //   quoteToken: serializedTokens.busd,
  // },
  // {
  //   pid: 4,
  //   lpSymbol: 'ZLT-DODO LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.dodo,
  //   quoteToken: serializedTokens.mrt,
  // },
  // {
  //   pid: 5,
  //   lpSymbol: 'ZLT-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16',
  //   },
  //   token: serializedTokens.cake,
  //   quoteToken: serializedTokens.mrt,
  // },
  // {
  //   pid: 3,
  //   lpSymbol: 'ZLT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
  //   },
  //   token: serializedTokens.mrt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  
  // {
  //   pid: 4,
  //   lpSymbol: 'ZLT-matic LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
  //   },
  //   token: serializedTokens.mrt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  
  // {
  //   pid: 5,
  //   lpSymbol: 'ZLT-cake LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
  //   },
  //   token: serializedTokens.mrt,
  //   quoteToken: serializedTokens.wbnb,
  // },
  
  // {
  //   pid: 6,
  //   lpSymbol: 'ZLT-shiba LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
  //   },
  //   token: serializedTokens.mrt,
  //   quoteToken: serializedTokens.wbnb,
  // },

  
  // {
  //   pid: 7,
  //   lpSymbol: 'ZLT-FTM LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x5ec2ec1C9d2e6DEba58536c5Ecbe2E955CC4c227',
  //   },
  //   token: serializedTokens.mrt,
  //   quoteToken: serializedTokens.wbnb,
  // },
]

export default farms
