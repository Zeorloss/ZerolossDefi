import BigNumber from 'bignumber.js'
import { SerializedFarm, DeserializedPool, SerializedPool } from 'state/types'
import { deserializeToken } from 'state/user/hooks/helpers'
import { BIG_ZERO } from 'utils/bigNumber'

type UserData =
  | DeserializedPool['userData']
  | {
      allowance: number | string
      stakingTokenBalance: number | string
      stakedBalance: number | string
      pendingReward: number | string
      lastDepositTime: number | string
      canHarvest: boolean
    }

export const transformUserData = (userData: UserData) => {
  return {
    allowance: userData ? new BigNumber(userData.allowance) : BIG_ZERO,
    stakingTokenBalance: userData ? new BigNumber(userData.stakingTokenBalance) : BIG_ZERO,
    stakedBalance: userData ? new BigNumber(userData.stakedBalance) : BIG_ZERO,
    pendingReward: userData ? new BigNumber(userData.pendingReward) : BIG_ZERO,
    lastDepositTime: userData ? new BigNumber(userData.lastDepositTime) : BIG_ZERO,
    canHarvest: userData ? userData.canHarvest : false
  }
}

export const transformPool = (pool: SerializedPool): DeserializedPool => {
  const { totalStaked, stakingLimit, userData, stakingToken, earningToken, ...rest } = pool

  return {
    ...rest,
    stakingToken: deserializeToken(stakingToken),
    earningToken: deserializeToken(earningToken),
    userData: transformUserData(userData),
    totalStaked: new BigNumber(totalStaked),
    stakingLimit: new BigNumber(stakingLimit),
  }
}

export const getTokenPricesFromFarm = (farms: SerializedFarm[]) => {
  return farms.reduce((prices, farm) => {
    const quoteTokenAddress = farm.quoteToken.address.toLocaleLowerCase()
    console.log("xxxquoteTokenAddress: ", quoteTokenAddress);
    const tokenAddress = farm.token.address.toLocaleLowerCase()
    console.log("xxxtokenAddress: ", tokenAddress);
    /* eslint-disable no-param-reassign */
    if (!prices[quoteTokenAddress]) {
      prices[quoteTokenAddress] = new BigNumber(farm.quoteTokenPriceBusd).toNumber()
      console.log("xxxxfarm.quoteTokenPriceBusd:", farm.quoteTokenPriceBusd);
    }
    if (!prices[tokenAddress]) {
      prices[tokenAddress] = new BigNumber(farm.tokenPriceBusd).toNumber()
    }
    /* eslint-enable no-param-reassign */
    console.log("xxxxxxPrice1, Price2:", prices[quoteTokenAddress], prices[tokenAddress]);
    return prices
  }, {})
}
