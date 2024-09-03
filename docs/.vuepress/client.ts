import './styles/index.css'

import {defineClientConfig} from '@vuepress/client'
import Custom from "./components/Custom.vue";

export default defineClientConfig({
    enhance({app}) {
        app.component('demo', Custom)
    },
})