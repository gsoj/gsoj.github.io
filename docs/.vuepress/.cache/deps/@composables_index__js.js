import {
  useRouter
} from "./chunk-MFXJQUVH.js";
import "./chunk-UKCZNIRO.js";
import {
  throttle
} from "./chunk-IGL3VGCY.js";
import {
  computed,
  getCurrentInstance,
  inject,
  onMounted,
  ref
} from "./chunk-PAUCAATC.js";
import {
  __publicField
} from "./chunk-UVKRO5ER.js";

// node_modules/vuepress-theme-reco/lib/client/composables/useMobile.js
var MOBILE_DESKTOP_BREAKPOINT = 719;
var isMobile = ref(false);
function useMobile() {
  const handleLinksWrapWidth = () => {
    isMobile.value = window.innerWidth <= MOBILE_DESKTOP_BREAKPOINT;
  };
  onMounted(() => {
    handleLinksWrapWidth();
    window.addEventListener("resize", handleLinksWrapWidth, false);
    window.addEventListener("orientationchange", handleLinksWrapWidth, false);
  });
  return { isMobile };
}

// node_modules/vuepress-theme-reco/lib/client/composables/getNavLink.js
import { resolveRoute } from "vuepress/client";
var getNavLink = (config) => {
  const { notFound, meta, path } = resolveRoute(config);
  return notFound ? { text: path, link: path } : {
    text: meta.title || path,
    link: path
  };
};

// node_modules/vuepress-theme-reco/lib/client/composables/useInstance.js
function useInstance() {
  const vm = getCurrentInstance();
  if (!vm)
    throw new Error("must be called in setup");
  const instance = vm || {};
  return instance;
}

// node_modules/vuepress-theme-reco/lib/client/composables/usePageData.js
import { usePageData as _usePageData, usePageFrontmatter as _usePageFrontmatter } from "vuepress/client";
var usePageData = () => _usePageData();
var usePageFrontmatter = () => _usePageFrontmatter();

// node_modules/vuepress-theme-reco/lib/client/composables/useMagicCard.js
var MouseMove = class {
  constructor() {
    __publicField(this, "cards");
    this.cards = [];
  }
  init() {
    this.getCardNodes();
    this.initMouseMoveObserver();
  }
  initMouseMoveObserver() {
    window.removeEventListener("mousemove", () => {
    });
    window.addEventListener("mousemove", throttle((event) => {
      const x = event.pageX;
      const y = event.pageY;
      this._setMouseLocationToCard(x, y);
    }, 50));
  }
  getCardNodes() {
    const cards = document.querySelectorAll(".magic-card");
    this.cards = cards;
    cards.forEach((card) => {
      card.setAttribute("data-x", card.offsetLeft);
      card.setAttribute("data-y", card.offsetTop);
      card.setAttribute("data-width", card.clientWidth);
      card.setAttribute("data-height", card.clientHeight);
    });
  }
  _setMouseLocationToCard(mouseX, mouseY) {
    this.cards.forEach((card) => {
      const { x: cardX, y: cardY, width, height } = card.dataset;
      const x = Math.floor(mouseX - cardX);
      const y = Math.floor(mouseY - cardY);
      card.style.setProperty("--x", `${x}px`);
      card.style.setProperty("--y", `${y}px`);
    });
  }
};
var mouseMove = new MouseMove();
function useMagicCard() {
  const initMagicCard = () => {
    mouseMove.init();
  };
  return { initMagicCard };
}

// node_modules/vuepress-theme-reco/lib/client/composables/useThemeData.js
import { useThemeData as _useThemeData, useThemeLocaleData as _useThemeLocaleData } from "@vuepress/plugin-theme-data/client";
var useThemeData = () => _useThemeData();
var useThemeLocaleData = () => _useThemeLocaleData();

// node_modules/vuepress-theme-reco/lib/client/composables/useSeriesData.js
var isOpenSeries = ref(false);
var useSeriesData = () => {
  const seriesItems = useSeriesItems();
  const isShowSeries = computed(() => seriesItems.value.length > 0 && isOpenSeries);
  const toggleSeries = (to) => {
    isOpenSeries.value = typeof to === "boolean" ? to : !isOpenSeries.value;
    document.body.style.overflowY = isOpenSeries.value ? "hidden" : "auto";
  };
  return { isOpenSeries, isShowSeries, toggleSeries };
};

// node_modules/vuepress-theme-reco/lib/client/composables/useSortSeries.js
var isLetterOrNumberReg = (str) => {
  return /^[0-9a-zA-Z]+$/.test(str);
};
var isAllChineseStr = (str) => {
  return /^[\u4E00-\u9FA5]+$/.test(str);
};
var splitStringByNumber = (str, sortByNumericalSize = false) => {
  let strArr = [];
  const REG_STRING_NUMBER_PARTS = /\d+|\D+/g;
  const arr = str.match(REG_STRING_NUMBER_PARTS);
  for (let i = 0; i < arr.length; i++) {
    const splitStr = arr[i];
    if (isNaN(splitStr)) {
      strArr = strArr.concat(splitStr.split(""));
    } else {
      if (!sortByNumericalSize) {
        strArr = strArr.concat(splitStr.split(""));
      } else {
        strArr.push(splitStr);
      }
    }
  }
  return strArr;
};
var compare = (a, b, sortByNumericalSize = true) => {
  if (isLetterOrNumberReg(a) && isLetterOrNumberReg(b)) {
    return a.localeCompare(b, "zh-Hans-CN", { numeric: true });
  }
  if (isAllChineseStr(a) && isAllChineseStr(b)) {
    return a.localeCompare(b, "zh-Hans-CN", { numeric: true });
  }
  const arrA = splitStringByNumber(a, sortByNumericalSize);
  const arrB = splitStringByNumber(b, sortByNumericalSize);
  let result = 0;
  const length = Math.min(arrA.length, arrB.length);
  for (let i = 0; i < length; i++) {
    const charA = arrA[i];
    const charB = arrB[i];
    if (!isAllChineseStr(charA) && isAllChineseStr(charB)) {
      return -1;
    }
    if (isAllChineseStr(charA) && !isAllChineseStr(charB)) {
      return 1;
    }
    if (isAllChineseStr(charA) && isAllChineseStr(charB)) {
      result = charA.localeCompare(charB, "zh-Hans-CN");
    } else {
      result = charA.localeCompare(charB, "zh-Hans-CN", { numeric: true });
    }
    if (result !== 0) {
      return result;
    }
  }
  if (arrA.length > arrB.length)
    return 1;
  if (arrA.length < arrB.length)
    return -1;
  return 0;
};
function sortSeries(arr) {
  const a = arr.sort((a2, b) => {
    if (a2.children)
      sortSeries(a2.children);
    if (b.children)
      sortSeries(b.children);
    return compare(a2.text, b.text, true);
  });
  return a;
}
function useSortSeries() {
  return { sortSeries };
}

// node_modules/vuepress-theme-reco/lib/client/composables/useMobileMenus.js
var isOpenMobileMenus = ref(false);
var useMobileMenus = () => {
  const toggleMobileMenus = (to) => {
    isOpenMobileMenus.value = typeof to === "boolean" ? to : !isOpenMobileMenus.value;
  };
  return { isOpenMobileMenus, toggleMobileMenus };
};

// node_modules/vuepress-theme-reco/lib/client/composables/usePageCatalog.js
import { usePageFrontmatter as usePageFrontmatter2 } from "vuepress/client";
var catalogSymbol = Symbol("catalog");
var usePageCatalog = () => {
  const frontmatter = usePageFrontmatter2();
  const catalog = inject(catalogSymbol);
  if (!catalog) {
    throw new Error("usePageCatalog() is called without provider.");
  }
  const isShowCatalog = computed(() => catalog.value.length > 0 && frontmatter.value.home !== true);
  return { catalog, isShowCatalog };
};
var headerToCatalogItem = (header) => ({
  text: header.title,
  link: `#${header.slug}`,
  level: header.level,
  children: headersToCatalog(header.children)
});
var headersToCatalog = (headers) => headers.map((header) => headerToCatalogItem(header));

// node_modules/vuepress-theme-reco/lib/client/composables/useSeriesItems.js
import { isPlainObject, isString, resolveLocalePath } from "vuepress/shared";
import { useExtendPageData } from "@vuepress-reco/vuepress-plugin-page/composables";
import { useRoute, usePageFrontmatter as usePageFrontmatter3 } from "vuepress/client";
var useSeriesItems = () => {
  const route = useRoute();
  const { series } = useExtendPageData();
  const themeLocal = useThemeLocaleData();
  const frontmatter = usePageFrontmatter3();
  const seriesItems = computed(() => resolveSeriesItems(frontmatter.value, themeLocal.value, route, series));
  if (!seriesItems) {
    throw new Error("useSeriesItems() is called without provider.");
  }
  return seriesItems;
};
var resolveSeriesItems = (frontmatter, themeLocal, route, autoSeries) => {
  let seriesConfig = themeLocal.series ?? {};
  seriesConfig = {
    ...autoSeries,
    ...seriesConfig
  };
  if (frontmatter.home) {
    return [];
  }
  if (isPlainObject(seriesConfig)) {
    return resolveMultiSeriesItems(seriesConfig, route);
  }
  return [];
};
var resolveArraySeriesItems = (seriesPath, seriesConfig) => {
  const handleChildItem = (item) => {
    let childItem;
    if (isString(item)) {
      const link = item.includes(seriesPath) ? item : `${seriesPath}${item}`;
      childItem = getNavLink(link);
    } else {
      childItem = item;
    }
    return childItem;
  };
  return seriesConfig.map((item) => {
    if (isString(item)) {
      const link = item.includes(seriesPath) ? item : `${seriesPath}${item}`;
      return getNavLink(link);
    }
    return {
      ...item,
      // @ts-ignore
      children: item.children.map((subItem) => handleChildItem(subItem))
    };
  });
};
var resolveMultiSeriesItems = (seriesConfig, route) => {
  const seriesPath = resolveLocalePath(seriesConfig, decodeURIComponent(route.path));
  const matchedSeriesConfig = seriesConfig[seriesPath] ?? [];
  return resolveArraySeriesItems(seriesPath, matchedSeriesConfig);
};

// node_modules/vuepress-theme-reco/lib/client/composables/useScrollPromise.js
var promise = null;
var promiseResolve = null;
var scrollPromise = {
  wait: () => promise,
  pending: () => {
    promise = new Promise((resolve) => promiseResolve = resolve);
  },
  resolve: () => {
    promiseResolve == null ? void 0 : promiseResolve();
    promise = null;
    promiseResolve = null;
  }
};
var useScrollPromise = () => scrollPromise;

// node_modules/vuepress-theme-reco/lib/client/composables/useScrollDirection.js
var direction = ref("");
var scrollY = ref(0);
function useScrollDirection() {
  let startY = 0, endY = 0;
  onMounted(() => {
    window.addEventListener("touchstart", (e) => {
      const touch = e.touches[0];
      startY = Number(touch.pageY);
    });
    window.addEventListener("scroll", throttle((e) => {
      endY = window.scrollY;
      if (endY - startY < 0) {
        direction.value = "top";
      } else if (endY - startY > 0) {
        direction.value = "bottom";
      } else {
        direction.value = "";
      }
      startY = endY;
      scrollY.value = endY;
    }, 300));
  });
  return { direction, scrollY };
}

// node_modules/vuepress-theme-reco/lib/client/composables/useResolveRouteWithRedirect.js
import { isFunction, isString as isString2 } from "vuepress/shared";
var useResolveRouteWithRedirect = (router, ...args) => {
  const router1 = useRouter();
  const route = router1.resolve(...args);
  const lastMatched = route.matched[route.matched.length - 1];
  if (!(lastMatched == null ? void 0 : lastMatched.redirect)) {
    return route;
  }
  const { redirect } = lastMatched;
  const resolvedRedirect = isFunction(redirect) ? redirect(route) : redirect;
  const resolvedRedirectObj = isString2(resolvedRedirect) ? { path: resolvedRedirect } : resolvedRedirect;
  return useResolveRouteWithRedirect(router, {
    hash: route.hash,
    query: route.query,
    // @ts-ignore
    params: route.params,
    ...resolvedRedirectObj
  });
};
export {
  catalogSymbol,
  getNavLink,
  headersToCatalog,
  useInstance,
  useMagicCard,
  useMobile,
  useMobileMenus,
  usePageCatalog,
  usePageData,
  usePageFrontmatter,
  useResolveRouteWithRedirect,
  useScrollDirection,
  useScrollPromise,
  useSeriesData,
  useSeriesItems,
  useSortSeries,
  useThemeData,
  useThemeLocaleData
};
//# sourceMappingURL=@composables_index__js.js.map
