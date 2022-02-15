import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'Zeroloss',
  description:
    'The most popular AMM on BSC by user count! Earn CAKE through yield farming or win it in the Lottery, then stake it in Syrup Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by Zeroloss), NFTs, and more, on a platform you can trust.',
  image: 'https://pancakeswap.finance/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('Zero Loss')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('Zero Loss')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('Zero Loss')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('Zero Loss')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('Zero Loss')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('Zero Loss')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('Zero Loss')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('Zero Loss')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('Zero Loss')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('Zero Loss')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('Zero Loss')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('Zero Loss')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('Zero Loss')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('Zero Loss')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('Zero Loss')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('Zero Loss')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('Zero Loss')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('Zero Loss')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('Zero Loss Info & Analytics')}`,
        description: 'View statistics for Zero Loss exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('Zero Loss Info & Analytics')}`,
        description: 'View statistics for Zero Loss exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('Zero Loss Info & Analytics')}`,
        description: 'View statistics for Zero Loss exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('Zero Loss')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('Zero Loss')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Your Profile')} | ${t('Zero Loss')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Pancake Squad')} | ${t('Zero Loss')}`,
      }
    default:
      return null
  }
}
