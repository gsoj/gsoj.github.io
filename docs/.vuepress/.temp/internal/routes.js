export const redirects = JSON.parse("{\"/aboutUs.html\":\"/article/yx7dzzm5/\",\"/get-started.html\":\"/article/fj900mle/\",\"/goj.html\":\"/article/pecxq1b0/\",\"/index_temp.html\":\"/article/p7c48pyv/\",\"/notes/honor/2023-ICPC-hangzhou.html\":\"/honor/nt5obxjd/\",\"/notes/honor/2023-ZJCPC.html\":\"/honor/4a1m81h1/\",\"/notes/honor/daily.html\":\"/honor/8tyv4xbh/\"}")

export const routes = Object.fromEntries([
  ["/article/yx7dzzm5/", { loader: () => import(/* webpackChunkName: "article_yx7dzzm5_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/article/yx7dzzm5/index.html.js"), meta: {"title":"我们"} }],
  ["/article/fj900mle/", { loader: () => import(/* webpackChunkName: "article_fj900mle_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/article/fj900mle/index.html.js"), meta: {"title":"get-started"} }],
  ["/article/pecxq1b0/", { loader: () => import(/* webpackChunkName: "article_pecxq1b0_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/article/pecxq1b0/index.html.js"), meta: {"title":"goj"} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":""} }],
  ["/article/p7c48pyv/", { loader: () => import(/* webpackChunkName: "article_p7c48pyv_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/article/p7c48pyv/index.html.js"), meta: {"title":"Home"} }],
  ["/honor/nt5obxjd/", { loader: () => import(/* webpackChunkName: "honor_nt5obxjd_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/honor/nt5obxjd/index.html.js"), meta: {"title":"2023-ICPC-Hangzhou"} }],
  ["/honor/4a1m81h1/", { loader: () => import(/* webpackChunkName: "honor_4a1m81h1_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/honor/4a1m81h1/index.html.js"), meta: {"title":"2023-ZJCPC"} }],
  ["/honor/8tyv4xbh/", { loader: () => import(/* webpackChunkName: "honor_8tyv4xbh_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/honor/8tyv4xbh/index.html.js"), meta: {"title":"我们的日常"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
  ["/blog/", { loader: () => import(/* webpackChunkName: "blog_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/blog/index.html.js"), meta: {"title":"博客"} }],
  ["/blog/tags/", { loader: () => import(/* webpackChunkName: "blog_tags_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/blog/tags/index.html.js"), meta: {"title":"标签"} }],
  ["/blog/archives/", { loader: () => import(/* webpackChunkName: "blog_archives_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/blog/archives/index.html.js"), meta: {"title":"归档"} }],
  ["/blog/categories/", { loader: () => import(/* webpackChunkName: "blog_categories_index.html" */"C:/Users/Mai/Desktop/GOJ/gsoj.github.io/docs/.vuepress/.temp/pages/blog/categories/index.html.js"), meta: {"title":"分类"} }],
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
