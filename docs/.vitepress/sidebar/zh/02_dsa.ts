import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../../utils/constant'
// 中文侧边栏
export const zhDsaSidebar: DefaultTheme.Sidebar = {
  '/02_dsa/': [
    {
      text: '数据结构和算法基础',
      collapsed: true,
      items: [
        { text: 'abc', link: `/02_dsa/` },
      ]
    },
  ],
}
