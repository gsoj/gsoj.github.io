export const redirects = JSON.parse("{\"/get-started.html\":\"/article/qfhu4vbn/\",\"/goj.html\":\"/article/pecxq1b0/\",\"/notes/maiwenpeng.html\":\"/article/86jgqtbc/\"}")

export const routes = Object.fromEntries([
  ["/article/qfhu4vbn/", { loader: () => import(/* webpackChunkName: "article_qfhu4vbn_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/article/qfhu4vbn/index.html.js"), meta: {"title":"get-started"} }],
  ["/article/pecxq1b0/", { loader: () => import(/* webpackChunkName: "article_pecxq1b0_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/article/pecxq1b0/index.html.js"), meta: {"title":"goj"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/knowledge/basic.html", { loader: () => import(/* webpackChunkName: "knowledge_basic.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/basic.html.js"), meta: {"title":"基础知识"} }],
  ["/knowledge/math.html", { loader: () => import(/* webpackChunkName: "knowledge_math.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/math.html.js"), meta: {"title":"数学"} }],
  ["/knowledge/string.html", { loader: () => import(/* webpackChunkName: "knowledge_string.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/knowledge/string.html.js"), meta: {"title":"字符串"} }],
  ["/article/86jgqtbc/", { loader: () => import(/* webpackChunkName: "article_86jgqtbc_index.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/article/86jgqtbc/index.html.js"), meta: {"title":"maiwenpeng"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/aboutUs.html", { loader: () => import(/* webpackChunkName: "aboutUs.html" */"C:/Users/Mai/Desktop/GOJ-HOME/vuepress-starter/docs/.vuepress/.temp/pages/aboutUs.html.js"), meta: {"title":"我们"} }],
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
