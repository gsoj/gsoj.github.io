export const redirects = JSON.parse("{\"/aboutUs.html\":\"/article/yx7dzzm5/\",\"/get-started.html\":\"/article/fj900mle/\",\"/goj.html\":\"/article/pecxq1b0/\"}")

export const routes = Object.fromEntries([
  ["/article/yx7dzzm5/", { loader: () => import(/* webpackChunkName: "article_yx7dzzm5_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/article/yx7dzzm5/index.html.js"), meta: {"title":"我们"} }],
  ["/article/fj900mle/", { loader: () => import(/* webpackChunkName: "article_fj900mle_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/article/fj900mle/index.html.js"), meta: {"title":"get-started"} }],
  ["/article/pecxq1b0/", { loader: () => import(/* webpackChunkName: "article_pecxq1b0_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/article/pecxq1b0/index.html.js"), meta: {"title":"goj"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/knowledge/", { loader: () => import(/* webpackChunkName: "knowledge_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/index.html.js"), meta: {"title":"导读"} }],
  ["/notes/", { loader: () => import(/* webpackChunkName: "notes_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/index.html.js"), meta: {"title":""} }],
  ["/knowledge/1_%E5%9F%BA%E7%A1%80%E7%AE%97%E6%B3%95/STL%E5%AE%B9%E5%99%A8.html", { loader: () => import(/* webpackChunkName: "knowledge_1_基础算法_STL容器.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/1_基础算法/STL容器.html.js"), meta: {"title":"STL容器"} }],
  ["/knowledge/1_%E5%9F%BA%E7%A1%80%E7%AE%97%E6%B3%95/%E5%89%8D%E7%BC%80%E5%92%8C.html", { loader: () => import(/* webpackChunkName: "knowledge_1_基础算法_前缀和.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/1_基础算法/前缀和.html.js"), meta: {"title":"前缀和"} }],
  ["/knowledge/2_%E5%AD%97%E7%AC%A6%E4%B8%B2/kmp.html", { loader: () => import(/* webpackChunkName: "knowledge_2_字符串_kmp.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/2_字符串/kmp.html.js"), meta: {"title":"KMP算法"} }],
  ["/knowledge/2_%E5%AD%97%E7%AC%A6%E4%B8%B2/string.html", { loader: () => import(/* webpackChunkName: "knowledge_2_字符串_string.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/2_字符串/string.html.js"), meta: {"title":"string"} }],
  ["/knowledge/3_%E6%95%B0%E5%AD%A6/%E6%8E%92%E5%88%97%E7%BB%84%E5%90%88.html", { loader: () => import(/* webpackChunkName: "knowledge_3_数学_排列组合.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/3_数学/排列组合.html.js"), meta: {"title":"排列组合"} }],
  ["/notes/%E5%BC%A0%E4%B8%89/Demo2.html", { loader: () => import(/* webpackChunkName: "notes_张三_Demo2.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/张三/Demo2.html.js"), meta: {"title":"自动配置侧边栏"} }],
  ["/notes/%E5%BC%A0%E4%B8%89/", { loader: () => import(/* webpackChunkName: "notes_张三_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/张三/index.html.js"), meta: {"title":"Demo"} }],
  ["/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/1_%E5%89%8D%E8%A8%80.html", { loader: () => import(/* webpackChunkName: "notes_麦文鹏_1_前言.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/麦文鹏/1_前言.html.js"), meta: {"title":"前言"} }],
  ["/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/2_%E5%B7%A5%E5%85%B7.html", { loader: () => import(/* webpackChunkName: "notes_麦文鹏_2_工具.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/麦文鹏/2_工具.html.js"), meta: {"title":"工具"} }],
  ["/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/3_%E5%9F%BA%E7%A1%80%E7%AE%97%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "notes_麦文鹏_3_基础算法.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/麦文鹏/3_基础算法.html.js"), meta: {"title":"基础算法"} }],
  ["/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/4_%E9%AB%98%E7%BA%A7%E6%95%B0%E6%8D%AE%E7%BB%93%E6%9E%84.html", { loader: () => import(/* webpackChunkName: "notes_麦文鹏_4_高级数据结构.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/麦文鹏/4_高级数据结构.html.js"), meta: {"title":"高级数据结构"} }],
  ["/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/5_%E5%8A%A8%E6%80%81%E8%A7%84%E5%88%92.html", { loader: () => import(/* webpackChunkName: "notes_麦文鹏_5_动态规划.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/麦文鹏/5_动态规划.html.js"), meta: {"title":"动态规划"} }],
  ["/notes/%E9%BA%A6%E6%96%87%E9%B9%8F/5_%E7%8E%84%E5%AD%A6%E7%AE%97%E6%B3%95.html", { loader: () => import(/* webpackChunkName: "notes_麦文鹏_5_玄学算法.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/notes/麦文鹏/5_玄学算法.html.js"), meta: {"title":"玄学算法,"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
