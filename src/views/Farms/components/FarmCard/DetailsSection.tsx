import React from 'react'
import { useTranslation } from 'contexts/Localization'
import styled from 'styled-components'
import { Text, Flex, Button, LinkExternal, Skeleton, Link, useModal } from '@pancakeswap/uikit'
import { DeserializedFarm } from 'state/types'
import EmWithdrawModal from '../EmWithdrawModal'

export interface FarmWithStakedValue extends DeserializedFarm {
  apr?: number
}

export interface ExpandableSectionProps {
  farm: FarmWithStakedValue
  bscScanAddress?: string
  infoAddress?: string
  removed?: boolean
  totalValueFormatted?: string
  totalLpValueFormatted?: string
  lpLabel?: string
  addLiquidityUrl?: string
}

const Wrapper = styled.div`
  margin-top: 24px;
`

const StyledLinkExternal = styled(LinkExternal)`
  font-weight: 400;
`

const DetailsSection: React.FC<ExpandableSectionProps> = ({
  farm,
  bscScanAddress,
  infoAddress,
  removed,
  totalValueFormatted,
  totalLpValueFormatted,
  lpLabel,
  addLiquidityUrl,
}) => {
  const { t } = useTranslation()

  const [onEmergencyWithdraw] = useModal(<EmWithdrawModal PID={farm.pid} />)
  
  return (
    <Wrapper>
      <Flex justifyContent="space-between">
        <Text color="gold">{`Total ${lpLabel} Staked`}:</Text>
        {totalLpValueFormatted ? <Text color="gold">{totalLpValueFormatted}</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      <Flex justifyContent="space-between">
        <Text color="gold">{t('Total Liquidity')}:</Text>
        {totalValueFormatted ? <Text color="gold">{totalValueFormatted}</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      <Flex justifyContent="space-between">
        <Text color="gold">{t('Deposit Fee')}:</Text>
        {'-' ? <Text color="gold">-</Text> : <Skeleton width={75} height={25} />}
      </Flex>
      {!removed && (
        <Flex mb="2px" justifyContent="flex-end">
          <StyledLinkExternal href={addLiquidityUrl}>{`Get ${lpLabel}`}</StyledLinkExternal>
        </Flex>
      )}
      <Flex mb="2px" justifyContent="flex-end">
        <StyledLinkExternal href={bscScanAddress}>{t('View Contract')}</StyledLinkExternal>
      </Flex>
      <Flex mb="2px" justifyContent="flex-end">
        <StyledLinkExternal href={infoAddress}>{t('See Pair Info')}</StyledLinkExternal>
      </Flex>
      <Flex justifyContent="flex-end">
          <Button
            variant="text"
            p="0"
            height="auto"
            onClick={onEmergencyWithdraw}
          >
            <Text color="gold">
              {t('Emergency Withdrawal')}
            </Text>
          </Button>
          
        </Flex>
    </Wrapper>
  )
}

export default DetailsSection
