import { DefaultTheme } from 'vitepress'

// 中文导航
export const zhNav: DefaultTheme.NavItem[] = [
  { text: '🏠首页', link: '/' },
  {
    text: '⚙️计组6件套', items: [
      { text: 'C 语言', link: '/01_c/01_c-basic/01_xdx/' },
      { text: '数据结构和算法', link: '/02_dsa/' },
      { text: '计算机组成原理', link: '/03_cma/' },
      { text: '操作系统', link: '/04_os/' },
      { text: '计算机网络', link: '/05_net/' },
      { text: '设计模式', link: '/06_dp/' },
    ]
  },
  { text: '🍉主站', link: 'https://weiweixu.cn' },
  { text: '🌟关于我', link: '/about/' },
]