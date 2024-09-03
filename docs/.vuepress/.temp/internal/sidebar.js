export const sidebar = {"/":{"/honor/":{"items":[{"text":"比赛风采","items":["2023-ICPC-hangzhou","2023-ZJCPC"]},{"text":"日常训练","items":["daily"]}],"prefix":"/notes/honor/"}},"__auto__":{}}

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateSidebar) {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ sidebar }) => {
    __VUE_HMR_RUNTIME__.updateSidebar(sidebar)
  })
}
