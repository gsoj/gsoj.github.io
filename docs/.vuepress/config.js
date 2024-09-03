import {defineUserConfig} from 'vuepress/cli'
import {viteBundler} from '@vuepress/bundler-vite'
import {gitPlugin} from '@vuepress/plugin-git'
import {plumeTheme} from 'vuepress-theme-plume'

export default defineUserConfig({
    lang: 'zh-CN',

    title: 'ZGUC ACM',
    description: 'ZGUC 程序设计竞赛集训队',
    editLinks: true,
    editLinkText: '编辑此页',
    lastUpdated: '上次更新',
    theme: plumeTheme({}),

    bundler: viteBundler(),
    plugins: [
        gitPlugin({
            createdTime: true,
            updatedTime: true,
            contributors: true
        }),
    ],
})
