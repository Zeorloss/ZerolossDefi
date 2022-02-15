import { MenuItemsType, DropdownMenuItemType } from '@pancakeswap/uikit'
import { ContextApi } from 'contexts/Localization/types'
import { nftsBaseUrl } from 'views/Nft/market/constants'

export type ConfigMenuItemsType = MenuItemsType & { hideSubNav?: boolean }

const config: (t: ContextApi['t']) => ConfigMenuItemsType[] = (t) => [
  {
    label: t('Home'),
    // href: 'https://metarewardstoken.com/',
    href: 'https://zeroloss-front.herokuapp.com/',
    target: 'blank'
    // icon: 'Earn',
  },
  {
    label: t('Farms'),
    href: '/farms',
    icon: 'Earn',
    showItemsOnMobile: false,
  },
  {
    label: t('Pools'),
    href: '/pools',
    icon: 'Swap',
    showItemsOnMobile: false,
  },
  
  {
    label: "Trade",
    href: "/swap",
    icon: "Swap",
    // items: [
    //   {
    //     label: "Exchange",
    //     href: "https://exchange.pancakeswap.finance",
    //   },
    //   {
    //     label: "Liquidity",
    //     href: "https://exchange.pancakeswap.finance/#/pool",
    //   },
    // ],
  },

  {
    label: t('Earn'),
    href: '/',
    icon: 'Earn',
    showItemsOnMobile: true,
    items: [
      {
        label: t('Feast'),
        href: '/farms',
      },
      {
        label: t('Stake pools'),
        href: '/pools',
      },
    ],
  },
  {
    label: t('Win'),
    href: '/prediction',
    icon: 'Trophy',
    // items: [
    //   {
    //     label: t('Prediction (BETA)'),
    //     href: '/prediction',
    //   },
    //   {
    //     label: t('Lottery'),
    //     href: '/lottery',
    //   },
    // ],
  },
  {
    label: t('NFT'),
    href: `${nftsBaseUrl}`,
    icon: 'Nft',
    // items: [
    //   {
    //     label: t('Overview'),
    //     href: `${nftsBaseUrl}`,
    //   },
    //   {
    //     label: t('Collections'),
    //     href: `${nftsBaseUrl}/collections`,
    //   },
    // ],
  },
  {
    label: '',
    href: '/info',
    icon: 'More',
    hideSubNav: true,
    items: [
      {
        label: t('Info'),
        href: '/info',
      },
      {
        label: t('IZO'),
        href: '/IZO',
      },
      {
        label: t('Voting'),
        href: '/voting',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Leaderboard'),
        href: '/teams',
      },
      {
        type: DropdownMenuItemType.DIVIDER,
      },
      {
        label: t('Blog'),
        // href: 'https://medium.com/pancakeswap',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
      {
        label: t('Docs'),
        // href: 'https://docs.pancakeswap.finance',
        type: DropdownMenuItemType.EXTERNAL_LINK,
      },
    ],
  },
  
]

export default config
