import { DefaultTheme } from 'vitepress'
import { commonDirectoryName } from '../../utils/constant'
// 中文侧边栏
export const zhCSidebar: DefaultTheme.Sidebar = {
  '/01_c': [
    {
      text: 'C 语言基础',
      collapsed: true,
      items: [
        { text: '计算机软件常识科普', link: `/01_c/01_c-basic/01_${commonDirectoryName}/` },
        { text: '编程基础一', link: `/01_c/01_c-basic/02_${commonDirectoryName}/` },
        { text: '编程基础二', link: `/01_c/01_c-basic/03_${commonDirectoryName}/` },
        { text: 'C 语言入门一', link: `/01_c/01_c-basic/04_${commonDirectoryName}/` },
        { text: 'C 语言入门二', link: `/01_c/01_c-basic/05_${commonDirectoryName}/` },
        { text: '变量和常量', link: `/01_c/01_c-basic/06_${commonDirectoryName}/` },
        { text: '进制', link: `/01_c/01_c-basic/07_${commonDirectoryName}/` },
        { text: '数据类型', link: `/01_c/01_c-basic/08_${commonDirectoryName}/` },
        { text: '运算符', link: `/01_c/01_c-basic/09_${commonDirectoryName}/` },
        { text: 'C 语言中的字符集', link: `/01_c/01_c-basic/10_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'C 语言进阶',
      collapsed: true,
      items: [
        { text: '格式化输入输出', link: `/01_c/02_c-leap/01_${commonDirectoryName}/` },
        { text: '虚拟地址空间', link: `/01_c/02_c-leap/02_${commonDirectoryName}/` },
        { text: '流程控制', link: `/01_c/02_c-leap/03_${commonDirectoryName}/` },
        { text: '内存泄漏和内存溢出', link: `/01_c/02_c-leap/04_${commonDirectoryName}/` },
        { text: '数组一', link: `/01_c/02_c-leap/05_${commonDirectoryName}/` },
        { text: '数组二', link: `/01_c/02_c-leap/06_${commonDirectoryName}/` },
        { text: '指针一', link: `/01_c/02_c-leap/07_${commonDirectoryName}/` },
        { text: '指针二', link: `/01_c/02_c-leap/08_${commonDirectoryName}/` },
        { text: '指针三', link: `/01_c/02_c-leap/09_${commonDirectoryName}/` },
        { text: '变量', link: `/01_c/02_c-leap/10_${commonDirectoryName}/` },
      ]
    },
    {
      text: 'C 语言高级',
      collapsed: true,
      items: [
        { text: '函数一', link: `/01_c/03_c-senior/01_${commonDirectoryName}/` },
        { text: '函数二', link: `/01_c/03_c-senior/02_${commonDirectoryName}/` },
        { text: 'const 关键字', link: `/01_c/03_c-senior/03_${commonDirectoryName}/` },
        { text: '字符串', link: `/01_c/03_c-senior/04_${commonDirectoryName}/` },
        { text: '预处理器', link: `/01_c/03_c-senior/05_${commonDirectoryName}/` },
        { text: '自定义数据类型一', link: `/01_c/03_c-senior/06_${commonDirectoryName}/` },
        { text: '自定义数据类型二', link: `/01_c/03_c-senior/07_${commonDirectoryName}/` },
        { text: '常见的库函数', link: `/01_c/03_c-senior/08_${commonDirectoryName}/` },
        { text: '内存管理', link: `/01_c/03_c-senior/09_${commonDirectoryName}/` },
        { text: '文件操作', link: `/01_c/03_c-senior/10_${commonDirectoryName}/` },
      ]
    }
  ],
}
