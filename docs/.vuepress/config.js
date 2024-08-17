import {defaultTheme} from '@vuepress/theme-default'
import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
// 引入 Highlight.js 和样式
export default defineUserConfig({
    lang: 'zh-CN',

    title: 'ZGUC ACM',
    description: 'ZGUC 程序设计竞赛集训队',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    theme: defaultTheme({
        logo: 'https://vuejs.press/images/hero.png',
        navbar: [
            {
                text: "首页",
                link: "/"
            },
            {
                text: "学习资源",
                link: "/knowledge/"
            },
            {
                text: "笔记模板",
                link: "/notes/"
            },
            {
                text: "名人堂",
                link: "/aboutUs"
            }
        ],
        sidebar: {
            '/knowledge/': [
                {
                    text: '学习资源',
                    collapsable: false, // 可选，设置是否可折叠
                    children: [
                        {
                            text: '基础知识',
                            children: [
                                '/knowledge/basic/STL容器.md',
                                '/knowledge/basic/前缀和.md',
                            ]
                        },
                        {
                            text: '字符串',
                            children: [
                                '/knowledge/string/string.md',
                                '/knowledge/string/kmp.md',
                            ]
                        },
                        {
                            text: '数学',
                            children: [
                                '/knowledge/math/排列组合.md'
                            ]
                        },
                    ]
                }
            ],
            '/notes': [
                {
                    text: "个人笔记",
                    collapsable: true,
                    children: [
                        {
                            text: "麦文鹏",
                            collapsable: true,
                            children: [
                                '/notes/麦文鹏/前言.md',
                                '/notes/麦文鹏/工具.md',
                                '/notes/麦文鹏/玄学算法.md',
                                '/notes/麦文鹏/基础算法.md',
                                '/notes/麦文鹏/高级数据结构.md',
                                '/notes/麦文鹏/动态规划.md',
                            ]
                        },
                        {
                            text: "张三",
                            collapsable: false,
                            children: [
                                '/notes/张三/index.md',
                            ]
                        }
                    ]
                }
            ]
        }
    }),
    bundler: viteBundler(),
})
