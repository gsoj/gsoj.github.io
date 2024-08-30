import {recoTheme} from "vuepress-theme-reco";

export const theme = recoTheme({
    notes: {
        dir: '/notes/', // 声明所有笔记的目录
        link: '/', // 声明所有笔记默认的链接前缀， 默认为 '/'
        notes: [
            {
                dir: '1_基础算法', // 声明笔记的目录，相对于 `notes.dir`
                link: '/basic/', // 声明笔记的链接前缀
                sidebar: [ // 配置侧边栏
                    {
                        text: '简介',
                        icon: 'mdi:language-typescript', // 侧边栏图标
                        items: ['STL容器','前缀和'] // 简化写法，主题会自动补全为 `foo.md`
                    }
                ]
            }
        ]
    }
})
