export const themeData = JSON.parse("{\"notes\":{\"dir\":\"/notes/\",\"link\":\"/\",\"notes\":[{\"dir\":\"1_基础算法\",\"link\":\"/basic/\",\"sidebar\":[{\"text\":\"简介\",\"icon\":\"mdi:language-typescript\",\"items\":[\"STL容器\",\"前缀和\"]}]}]}}")

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
