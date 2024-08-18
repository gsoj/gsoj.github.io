export const themeData = JSON.parse("{\"logo\":\"https://vuejs.press/images/hero.png\",\"navbar\":[{\"text\":\"首页\",\"link\":\"/\"},{\"text\":\"学习资源\",\"link\":\"/knowledge/\"},{\"text\":\"个人笔记\",\"link\":\"/notes/\"},{\"text\":\"名人堂\",\"link\":\"/aboutUs\"}],\"sidebar\":{\"/knowledge/\":[{\"text\":\"1_基础算法\",\"collapsable\":false,\"children\":[\"1_基础算法/STL容器.md\",\"1_基础算法/前缀和.md\"]},{\"text\":\"2_字符串\",\"collapsable\":false,\"children\":[\"2_字符串/kmp.md\",\"2_字符串/string.md\"]},{\"text\":\"3_数学\",\"collapsable\":false,\"children\":[\"3_数学/排列组合.md\"]}],\"/notes/\":[{\"text\":\"张三\",\"collapsable\":false,\"children\":[\"张三/Demo2.md\",\"张三/index.md\"]},{\"text\":\"麦文鹏\",\"collapsable\":false,\"children\":[\"麦文鹏/1_前言.md\",\"麦文鹏/2_工具.md\",\"麦文鹏/3_基础算法.md\",\"麦文鹏/4_高级数据结构.md\",\"麦文鹏/5_动态规划.md\",\"麦文鹏/5_玄学算法.md\"]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"repo\":null,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

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
