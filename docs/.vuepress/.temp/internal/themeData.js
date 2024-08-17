export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"学习资源\",\"link\":\"/knowledge/\"},{\"text\":\"笔记模板\",\"link\":\"/notes/\"},{\"text\":\"名人堂\",\"link\":\"/aboutUs\"}],\"sidebar\":{\"/knowledge/\":[{\"text\":\"学习资源\",\"collapsable\":false,\"children\":[{\"text\":\"基础知识\",\"children\":[\"/knowledge/basic/STL容器.md\",\"/knowledge/basic/前缀和.md\"]},{\"text\":\"字符串\",\"children\":[\"/knowledge/string/string.md\",\"/knowledge/string/kmp.md\"]},{\"text\":\"数学\",\"children\":[\"/knowledge/math/排列组合.md\"]}]}],\"/notes\":[{\"text\":\"个人笔记\",\"collapsable\":true,\"children\":[{\"text\":\"麦文鹏\",\"collapsable\":true,\"children\":[\"/notes/麦文鹏/前言.md\",\"/notes/麦文鹏/工具.md\",\"/notes/麦文鹏/玄学算法.md\",\"/notes/麦文鹏/基础算法.md\",\"/notes/麦文鹏/高级数据结构.md\",\"/notes/麦文鹏/动态规划.md\"]},{\"text\":\"张三\",\"collapsable\":false,\"children\":[\"/notes/张三/index.md\"]}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
