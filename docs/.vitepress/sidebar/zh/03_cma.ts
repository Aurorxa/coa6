import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../../utils/constant'
// 中文侧边栏
export const zhCmaSidebar: DefaultTheme.Sidebar = {
  '/03_cma/': [
    {
      text: '计算机组成原理基础',
      collapsed: true,
      items: [
        { text: 'abc', link: `/03_cma/` },
      ]
    },
  ],
}
