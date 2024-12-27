import { zhCSidebar } from './01_c'
import { zhDsaSidebar } from './02_dsa'
import { zhCmaSidebar } from './03_cma'
import { zhOsSidebar } from './04_os'
import { zhNetSidebar } from './05_net'
import { zhDpSidebar } from './06_dp'
// 其他模块...

export const zhSidebar = {
  ...zhCSidebar,
  ...zhDsaSidebar,
  ...zhCmaSidebar,
  ...zhOsSidebar,
  ...zhNetSidebar,
  ...zhDpSidebar
}
