import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../../utils/constant'
// 中文侧边栏
export const zhOsSidebar: DefaultTheme.Sidebar = {
  '/04_os/': [
    {
      text: '操作系统基础',
      collapsed: true,
      items: [
        { text: 'abc', link: `/04_os/` },
      ]
    },
  ],
}
