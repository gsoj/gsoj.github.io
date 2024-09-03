import { defineClientConfig } from "vuepress/client";
import CodeTabs from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/node_modules/@vuepress/helper/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/footnote.scss";
import { useHintContainers } from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/katex/dist/katex.min.css";
import "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/katex.scss";
import Tabs from "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";
import "C:/Users/Mai/Desktop/GOJ/gsoj.github.io/node_modules/vuepress-plugin-md-enhance/lib/client/styles/tasklist.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHintContainers();
  }
});
