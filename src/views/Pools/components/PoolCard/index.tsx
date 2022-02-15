import BigNumber from 'bignumber.js'
import React from 'react'
import { CardBody, Flex, Text, Tag, LockIcon, CardRibbon } from '@pancakeswap/uikit'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useTranslation } from 'contexts/Localization'
import { BIG_ZERO } from 'utils/bigNumber'
import { createGlobalStyle } from 'styled-components'
import { DeserializedPool } from 'state/types'
import AprRow from './AprRow'
import { StyledCard } from './StyledCard'
import CardFooter from './CardFooter'
import StyledCardHeader from './StyledCardHeader'
import CardActions from './CardActions'

const GlobalStyles = createGlobalStyle`
  .pool-card {
    background-color: #20252d;
  }
`;
const PoolCard: React.FC<{ pool: DeserializedPool; account: string }> = ({ pool, account }) => {
  const { sousId, stakingToken, earningToken, isFinished, userData, harvestInterval } = pool
  const { t } = useTranslation()
  const stakedBalance = userData?.stakedBalance ? new BigNumber(userData.stakedBalance) : BIG_ZERO
  const accountHasStakedBalance = stakedBalance.gt(0)

  return (
    <StyledCard
      isFinished={isFinished && sousId !== 0}
      ribbon={isFinished && <CardRibbon variantColor="textDisabled" text={t('Finished')} />}
    >
      <GlobalStyles />
      <StyledCardHeader
        isStaking={accountHasStakedBalance}
        earningToken={earningToken}
        stakingToken={stakingToken}
        isFinished={isFinished && sousId !== 0}
      />
      <div className="pool-card">
        <CardBody>
            <AprRow pool={pool} stakedBalance={stakedBalance} />
            <Flex mt="20px" justifyContent="space-between">
              {/* <Text >{`${t('APY')}:`}</Text> */}
              <Text mb="5px" fontSize="16px" color="gold">
                {t('Withdraw Lock')}
              </Text>
              <Tag variant="binance" startIcon={<LockIcon width="14px" color="primary" mr="4px" />}>
                {harvestInterval / 3600 / 24 + t(' D')}
              </Tag>
              {/* <Text mb="5px" fontSize="16px" color="secondary">
                {harvestInterval + t('D')}
              </Text> */}
            </Flex>

            <Flex mt="24px" flexDirection="column">
              {account ? (
                <CardActions pool={pool} stakedBalance={stakedBalance} />
              ) : (
                <>
                  <Text mb="10px" textTransform="uppercase" fontSize="12px" color="gold" bold>
                    {t('Start earning')}
                  </Text>
                  <ConnectWalletButton />
                </>
              )}
            </Flex>
        </CardBody>
        <CardFooter pool={pool} account={account} />
      </div>
    </StyledCard>
  )
}

export default PoolCard
