import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../../utils/constant'
// 中文侧边栏
export const zhDpSidebar: DefaultTheme.Sidebar = {
  '/06_dp/': [
    {
      text: '设计模式基础',
      collapsed: true,
      items: [
        { text: 'abc', link: `/06_dp/` },
      ]
    },
  ],
}
