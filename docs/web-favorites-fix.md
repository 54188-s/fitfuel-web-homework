# 网页版：学号与收藏模块修复

2026-10-17。本独立任务修改当前已打开的课程网页版；Android和小程序未在本步更改。

## 修改与原因

- js/contact-data.js：按作者提供的信息补充作品学号，沿用集中维护的联系方式配置。
- html/*：19个内容页页脚展示学号；联系页移除“未提供”提示；用户中心新增“我的收藏”与“作品信息”。作品作者信息与当前登录用户保持区分。
- css/course.css：选中的收藏按钮用薄荷绿底/深色文字，统一食物卡、动作卡、详情和选择弹窗；新增收藏列表/空状态/窄屏布局；按钮44px以上。
- js/library.js：动作详情补齐aria-pressed并在点击后同步，收藏/取消恢复对应颜色；存储失败显示错误。其他入口已有保存逻辑，缺的是状态样式。
- js/user.js：读取现有动作和食品收藏，展示数量/内容、空状态、查看入口和取消操作；取消后反馈和焦点回到模块标题。
- js/nutrition.js：支持收藏食物入口携带query，打开时直接定位食物搜索，不改变营养算法。
- readme.md、docs/requirements.md：修正学号待填的过时说明。

使用现有存储键，没有复制一份收藏、添加依赖或更改营养/训练算法。按钮选中状态使用[aria-pressed](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-pressed)；功能复用现有HTML/JavaScript，无需额外UI库。

## 实际验证

命令：`D:/767/python3/python.exe -X utf8 work/web_favorites_check.py`。复用已安装Playwright与本机Edge（Apache2.0项目，https://github.com/microsoft/playwright/blob/main/LICENSE），测试没有安装新依赖。

**50项检查全部通过，0浏览器JavaScript错误**：先在未修改快照重现“点击后颜色不变”，再验证修复后的食品/动作/详情/弹窗颜色、取消恢复、刷新保持状态、用户中心两种收藏、食物跳转自动检索、取消后的数量和空状态、实际框架首页内打开模块，以及390/320宽度无横向溢出。检查所有页面本地资源引用和4个修改脚本语法；calculator/data/storage/training/account与本步前字节一致。

全部浏览器操作使用file://本地入口，与用户当前打开方式一致。截图在work/web-favorites-shots，实际查看桌面/小屏模块及选中按钮；补拍模块局部图避免整页截图滚动位置/原页面进入动画干扰。Impeccable检测返回空列表，仅为补充检查，不替代运行。

初次断言因CSS过渡和鼠标hover时机不一致失败；测试等待动画结束并统一鼠标位置后全套通过，没有跳过断言。

## 设计复查、影响与未验证

以现有aria-pressed驱动CSS是更小实现，不重复维护selected类；收藏专区读取相同FitStore键，不新增跨页同步架构。既有storage事件会重绘用户页，当前窗口正常点击立即更新。原收藏数据/数量不迁移、不清理；未对用户实际浏览器存储执行测试，测试在隔离浏览器上下文运行。

规模10倍时，收藏列表全量过滤/重绘和已有localStorage容量会先受影响；后续可以独立安排分页/搜索及存储升级，本轮未擅自重构。现有首页布局/框架集未改。真机微信内置浏览器、Safari/Firefox、禁用存储模式和跨设备同步未验证；收藏仍保存在当前浏览器。

## 回滚与提交

项目无Git仓库，不创建虚构commit。完整网页回滚快照：work/web-favorites-before/site；差异work/web-favorites.diff、变更清单work/web-favorites-changed-files.json。源文件空白检查通过。需要回滚时从快照还原到新的空目录，保留当前浏览器数据。

建议独立提交信息：`fix: show persistent favorite states and add user favorites section`。

当前网页入口仍是outputs/FitFuel-Course-20261014/fitfuel-course/index.html；在原地址刷新即可。无需新安装包。本独立任务完成，后续等待确认。
