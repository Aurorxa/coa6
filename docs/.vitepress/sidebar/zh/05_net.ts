import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../../utils/constant'
// 中文侧边栏
export const zhNetSidebar: DefaultTheme.Sidebar = {
  '/05_net/': [
    {
      text: '计算机网络基础',
      collapsed: true,
      items: [
        { text: 'abc', link: `/05_net/` },
      ]
    },
  ],
}
