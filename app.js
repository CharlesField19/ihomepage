const STORAGE_KEY = "nav-demo-intl-v1";
const WORDMARK = "iancenao";

const ENGINES = [
  { id: "google", zh: "谷歌", en: "Google", host: "www.google.com", url: "https://www.google.com/search?q={q}" },
  { id: "bing", zh: "必应", en: "Bing", host: "www.bing.com", url: "https://www.bing.com/search?q={q}" },
  { id: "baidu", zh: "百度", en: "Baidu", host: "www.baidu.com", url: "https://www.baidu.com/s?tn=15007414_5_dg&wd={q}" },
  { id: "sogou", zh: "搜狗", en: "Sogou", host: "www.sogou.com", url: "https://www.sogou.com/web?query={q}" },
  { id: "360", zh: "360 搜索", en: "360 Search", host: "www.so.com", url: "https://www.so.com/s?q={q}" },
  { id: "yahoo", zh: "雅虎", en: "Yahoo", host: "search.yahoo.com", url: "https://search.yahoo.com/search?p={q}" },
  { id: "duckduckgo", zh: "DuckDuckGo", en: "DuckDuckGo", host: "duckduckgo.com", url: "https://duckduckgo.com/?q={q}" },
  { id: "ecosia", zh: "Ecosia", en: "Ecosia", host: "www.ecosia.org", url: "https://www.ecosia.org/search?q={q}" },
  { id: "wikipedia", zh: "维基百科", en: "Wikipedia", host: "wikipedia.org", url: "https://wikipedia.org/w/index.php?search={q}" },
  { id: "youtube", zh: "YouTube", en: "YouTube", host: "www.youtube.com", url: "https://www.youtube.com/results?search_query={q}" },
  { id: "twitter", zh: "推特", en: "Twitter", host: "twitter.com", url: "https://twitter.com/search?q={q}" },
  { id: "facebook", zh: "Facebook", en: "Facebook", host: "www.facebook.com", url: "https://www.facebook.com/search/top/?q={q}" },
  { id: "instagram", zh: "Instagram", en: "Instagram", host: "www.instagram.com", url: "https://www.instagram.com/explore/tags/{q}" },
  { id: "pinterest", zh: "Pinterest", en: "Pinterest", host: "www.pinterest.com", url: "https://www.pinterest.com/search/pins/?q={q}" },
  { id: "amazon", zh: "亚马逊", en: "Amazon", host: "www.amazon.com", url: "https://www.amazon.com/s?field-keywords={q}" },
  { id: "linkedin", zh: "领英", en: "LinkedIn", host: "www.linkedin.com", url: "https://www.linkedin.com/search/results/index/?keywords={q}" },
  { id: "github", zh: "GitHub", en: "GitHub", host: "github.com", url: "https://github.com/search?q={q}" },
  { id: "stackoverflow", zh: "Stack Overflow", en: "Stack Overflow", host: "stackoverflow.com", url: "https://stackoverflow.com/search?q={q}" },
  { id: "reddit", zh: "Reddit", en: "Reddit", host: "www.reddit.com", url: "https://www.reddit.com/search?q={q}" }
];

/* 0x3 appends these when the mainland catalog is subscribed */
const CN_ENGINES = [
  { id: "taobao", zh: "淘宝", en: "Taobao", host: "s.taobao.com", url: "https://s.taobao.com/search?q={q}", cn: true },
  { id: "jd", zh: "京东", en: "JD", host: "search.jd.com", url: "https://search.jd.com/Search?keyword={q}", cn: true },
  { id: "weibo", zh: "微博", en: "Weibo", host: "s.weibo.com", url: "https://s.weibo.com/weibo?q={q}", cn: true },
  { id: "zhihu", zh: "知乎", en: "Zhihu", host: "www.zhihu.com", url: "https://www.zhihu.com/search?&q={q}", cn: true },
  { id: "douban", zh: "豆瓣", en: "Douban", host: "www.douban.com", url: "https://www.douban.com/search?q={q}", cn: true },
  { id: "toutiao", zh: "今日头条", en: "Toutiao", host: "www.toutiao.com", url: "https://www.toutiao.com/search/?keyword={q}", cn: true },
  { id: "tencentvideo", zh: "腾讯视频", en: "Tencent Video", host: "v.qq.com", url: "https://v.qq.com/x/search/?q={q}", cn: true },
  { id: "iqiyi", zh: "爱奇艺", en: "iQiyi", host: "so.iqiyi.com", url: "https://so.iqiyi.com/so/q_{q}", cn: true },
  { id: "youku", zh: "优酷", en: "Youku", host: "so.youku.com", url: "https://so.youku.com/search_video/q_{q}", cn: true },
  { id: "mgtv", zh: "芒果TV", en: "Mango TV", host: "so.mgtv.com", url: "https://so.mgtv.com/so?k={q}", cn: true },
  { id: "bilibili", zh: "Bilibili", en: "Bilibili", host: "search.bilibili.com", url: "https://search.bilibili.com/all?keyword={q}", cn: true },
  { id: "acfun", zh: "AcFun", en: "AcFun", host: "www.acfun.cn", url: "https://www.acfun.cn/search/?type=complex&keyword={q}", cn: true }
];

const THEMES = ["moon", "wave", "mountain", "pure", "cyan", "lychee", "ocean", "ink", "charcoal", "moonlit"];

const TEXT = {
  en: {
    language: "Language", subscribe: "Link Subscribe", theme: "Theme", colormode: "Color Mode",
    search: "Search Engine", suggestions: "Autocomplete", newtab: "Link Target", siteicon: "Link Icon", banners: "Banners",
    save: "Save", reset: "Reset All Settings", about: "About", setting: "Setting",
    light: "Light theme", dark: "Dark theme", english: "English", chinese: "简体中文", system: "System",
    global: "Worldwide", mainland: "Mainland China",
    moon: "Moon", wave: "Wave", mountain: "Mountain", pure: "Pure",
    cyan: "Cyan", lychee: "Lychee", ocean: "Ocean", ink: "Ink", charcoal: "Charcoal", moonlit: "Moonlit",
    lightMode: "Light", darkMode: "Dark", off: "Off", on: "On", fade: "Fade", color: "Color",
    gray: "Gray", hide: "Hide", delete: "Delete", name: "Name", url: "URL", untitled: "Untitled",
    newLink: "New", newRow: "New group", addLink: "Add link", addRow: "Add group",
    saved: "Saved in this browser.", resetConfirm: "Reset this browser to the default links and settings?",
    empty: "This category has no links.",
    searchLabel: "Search", aboutTitle: "About",
    aboutBody: "iancenao is a link dashboard built from four static files: HTML, CSS, a script and a JSON catalog. There is no server-side storage, no database and no background process. Every change you make lives only in this browser's local storage, so clearing site data restores the default catalog.",
    aboutData: "Links and settings never leave your device. Icon images are served from this site; unfetched icons fall back to the site's own favicon, then to the link's first letter.",
    aboutClose: "Close"
  },
  "zh-CN": {
    language: "网站语言", subscribe: "链接订阅", theme: "风格样式", colormode: "主题模式",
    search: "搜索引擎", suggestions: "搜索联想", newtab: "链接方式", siteicon: "网站图标", banners: "图片横幅",
    save: "保存", reset: "恢复初始设置", about: "关于", setting: "设置",
    light: "日间", dark: "夜间", english: "English", chinese: "简体中文", system: "跟随系统",
    global: "全球", mainland: "中国大陆",
    moon: "月灰", wave: "浪花", mountain: "远山", pure: "素白",
    cyan: "青川", lychee: "荔枝", ocean: "深海", ink: "水墨", charcoal: "炭黑", moonlit: "月夜",
    lightMode: "日间模式", darkMode: "夜间模式", off: "关闭", on: "开启", fade: "舒适", color: "全彩",
    gray: "灰白", hide: "隐藏", delete: "删除", name: "名称", url: "网址", untitled: "未命名",
    newLink: "新网址", newRow: "新分组", addLink: "添加网址", addRow: "添加分组",
    saved: "已保存在这台浏览器。", resetConfirm: "清除这台浏览器的修改，恢复默认目录？",
    empty: "这个分类还没有网址。",
    searchLabel: "搜索", aboutTitle: "关于 iancenao",
    aboutBody: "iancenao 是一个纯静态的网址导航，只由四个文件组成：HTML、样式表、脚本和一份 JSON 目录。没有服务端存储、没有数据库、也没有常驻后台进程。你的所有修改只保存在这台浏览器的本地存储里，清除站点数据就会回到默认目录。",
    aboutData: "网址与设置不会离开你的设备。图标优先由本站提供；未收录的图标会回退到站点自身的 favicon，最后显示名称首字。",
    aboutClose: "关闭"
  }
};

const app = document.querySelector("#app");
let catalog = { wordmark: WORDMARK, categories: [] };
let iconMap = {};
let activeId = "";
let engineOpen = false;
let editing = false;
let aboutOpen = false;
let editor = null;
let statusText = "";

const preferences = {
  language: "en",
  subscribe: "en",
  theme: "moon",
  colormode: "auto",
  search: "google",
  suggestions: true,
  newTab: true,
  siteicon: "fade",
  banners: true
};

function uid(prefix) {
  return `${prefix}-${Date.now().toString(36)}-${Math.random().toString(36).slice(2, 6)}`;
}

function readStored() {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "null");
  } catch {
    return null;
  }
}

function saveStored() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ preferences, catalog }));
}

function language() {
  if (preferences.language === "zh-CN") return "zh-CN";
  if (preferences.language === "en") return "en";
  return navigator.language.toLowerCase().startsWith("zh") ? "zh-CN" : "en";
}
function t(key) { return TEXT[language()][key] || TEXT.en[key] || key; }
function engineName(item) { return language() === "zh-CN" ? item.zh : item.en; }
function themeName(id) { return t(id); }

function darkMode() {
  return preferences.colormode === "dark"
    || (preferences.colormode === "auto" && matchMedia("(prefers-color-scheme: dark)").matches);
}

function applyTheme() {
  const root = document.documentElement;
  root.lang = language() === "zh-CN" ? "zh-CN" : "en";
  root.dataset.style = preferences.theme || "moon";
  root.dataset.colorMode = darkMode() ? "dark" : "light";
  root.dataset.layout = preferences.theme === "wave" || preferences.theme === "mountain" ? "mini" : "normal";
}

function hostname(url) {
  try { return new URL(url).hostname; } catch { return ""; }
}

function iconSources(url) {
  const host = hostname(url);
  if (!host) return [];
  return [iconMap[host], `https://0x3.com/icon?host=${encodeURIComponent(host)}`, `https://${host}/favicon.ico`].filter(Boolean);
}

function iconHtml(url, letter, size) {
  const sources = iconSources(url);
  if (!sources.length) return `<i class="mark">${escapeHtml(letter || "?")}</i>`;
  const [first, ...rest] = sources;
  return `<img src="${escapeHtml(first)}" data-fallbacks="${escapeHtml(rest.join("|"))}" data-letter="${escapeHtml(letter || "")}" alt="" width="${size}" height="${size}" loading="lazy" referrerpolicy="no-referrer" onerror="failIcon(this)">`;
}

function failIcon(img) {
  const next = (img.dataset.fallbacks || "").split("|").filter(Boolean);
  if (next.length) {
    img.dataset.fallbacks = next.slice(1).join("|");
    img.src = next[0];
    return;
  }
  const mark = document.createElement("i");
  mark.className = "mark";
  mark.textContent = img.dataset.letter || "";
  img.replaceWith(mark);
}

function availableEngines() {
  return ENGINES.concat(CN_ENGINES.filter((item) => preferences.subscribe === "zh-CN"));
}
function engine() {
  const list = availableEngines();
  return list.find((item) => item.id === preferences.search) || list[0];
}
function colorModeLabel() {
  if (preferences.colormode === "auto") return t("system");
  return darkMode() ? t("dark") : t("light");
}
function colorModeIcon() {
  if (preferences.colormode === "auto") return "◐";
  return darkMode() ? "☾" : "☀";
}

function engineUrl(term) {
  return engine().url.replace("{q}", encodeURIComponent(term));
}

function engineParts(item) {
  const [rawBase, query] = item.url.split("?");
  const base = rawBase.replace("{q}", "").replace(/\/$/, "");
  const param = (query || "").split("&").find((part) => part.includes("{q}"))?.split("=")[0] || "q";
  return { base, param };
}

function capRows() {
  catalog.categories.forEach((category) => {
    const extra = [];
    category.rows.forEach((row) => {
      if (row.links.length > 6) extra.push(...row.links.splice(6));
    });
    while (extra.length) category.rows.push({ id: uid("row"), name: "", links: extra.splice(0, 6) });
  });
}

function normalizeUrl(value) {
  const text = value.trim();
  if (!text) return "";
  return /^https?:\/\//i.test(text) ? text : `https://${text}`;
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[char]));
}

function findLink(categoryId, rowId, linkId) {
  return catalog.categories.find((item) => item.id === categoryId)?.rows.find((item) => item.id === rowId)?.links.find((item) => item.id === linkId);
}

function linkChip(category, row, link) {
  const key = `${category.id}:${row.id}:${link.id}`;
  const icon = preferences.siteicon === "none" ? "" : iconHtml(link.url, String(link.name || "?").slice(0, 1), 16);
  if (!editing) {
    return `<a class="link" href="${escapeHtml(link.url)}"${preferences.newTab ? ' target="_blank" rel="noopener noreferrer"' : ""} title="${escapeHtml(link.name)}">${icon}<span>${escapeHtml(link.name)}</span></a>`;
  }
  const open = editor?.categoryId === category.id && editor?.rowId === row.id && editor?.linkId === link.id;
  return `<span class="chip-wrap">${open ? `<form class="editor" data-editor="${key}"><input name="name" aria-label="${t("name")}" value="${escapeHtml(link.name)}" maxlength="40"><input name="url" aria-label="${t("url")}" value="${escapeHtml(link.url)}" inputmode="url" autocapitalize="none" spellcheck="false"><div class="editor-actions"><button class="button primary" type="submit">${t("save")}</button><button class="text-button" type="button" data-delete-link="${key}">${t("delete")}</button></div></form>` : ""}<button class="edit-chip" type="button" data-edit-link="${key}">${icon}<span>${escapeHtml(link.name || t("untitled"))}</span></button></span>`;
}

function rowLabel(category, row) {
  if (!editing) return `<div class="row-label">${escapeHtml(row.name)}</div>`;
  const open = editor?.type === "row" && editor.categoryId === category.id && editor.rowId === row.id;
  return `<div class="row-label"><button class="row-edit" type="button" data-edit-row="${category.id}:${row.id}">${escapeHtml(row.name || t("untitled"))}</button>${open ? `<form class="editor row-editor" data-row-editor="${category.id}:${row.id}"><input name="name" aria-label="${t("name")}" value="${escapeHtml(row.name)}" maxlength="40"><div class="editor-actions"><button class="button primary" type="submit">${t("save")}</button><button class="text-button" type="button" data-delete-row="${category.id}:${row.id}">${t("delete")}</button></div></form>` : ""}</div>`;
}

function preferencePanel() {
  if (!editing) return "";
  const select = (id, label, options, value) => `<label>${label}<select id="${id}">${options.map(([optionValue, text]) => `<option value="${optionValue}"${optionValue === value ? " selected" : ""}>${text}</option>`).join("")}</select></label>`;
  return `<section class="pref-panel" aria-label="${t("setting")}">
    <div class="pref-grid">
      ${select("language", t("language"), [["auto", t("system")], ["en", t("english")], ["zh-CN", t("chinese")]], preferences.language)}
      ${select("subscribe", t("subscribe"), [["en", t("global")], ["zh-CN", t("mainland")]], preferences.subscribe)}
      ${select("theme", t("theme"), THEMES.map((id) => [id, themeName(id)]), preferences.theme)}
      ${select("colormode", t("colormode"), [["auto", t("system")], ["light", t("lightMode")], ["dark", t("darkMode")]], preferences.colormode)}
      ${select("search", t("search"), availableEngines().map((item) => [item.id, engineName(item)]), preferences.search)}
      ${select("suggestions", t("suggestions"), [["on", t("on")], ["off", t("off")]], preferences.suggestions ? "on" : "off")}
      ${select("new-tab", t("newtab"), [["on", t("on")], ["off", t("off")]], preferences.newTab ? "on" : "off")}
      ${select("siteicon", t("siteicon"), [["fade", t("fade")], ["color", t("color")], ["gray", t("gray")], ["none", t("hide")]], preferences.siteicon)}
      ${select("banners", t("banners"), [["on", t("on")], ["off", t("off")]], preferences.banners ? "on" : "off")}
    </div>
    <div class="panel-actions"><button class="text-button" type="button" id="restore">${t("reset")}</button><button class="button primary" type="button" id="save-prefs">${t("save")}</button></div>
    <p class="status" role="status">${escapeHtml(statusText)}</p>
  </section>`;
}

function aboutPanel() {
  if (!aboutOpen) return "";
  return `<div class="about-backdrop" data-close-about><section class="about-panel" role="dialog" aria-modal="true" aria-labelledby="about-title">
    <h2 id="about-title">${escapeHtml(t("aboutTitle"))}</h2>
    <p>${escapeHtml(t("aboutBody"))}</p>
    <p>${escapeHtml(t("aboutData"))}</p>
    <div class="about-actions"><span>© tianchenghao.com</span><button class="button" type="button" data-close-about>${t("aboutClose")}</button></div>
  </section></div>`;
}

function engineMenu(selected) {
  if (!engineOpen) return "";
  return `<div class="engine-menu" id="engine-menu" role="listbox">${availableEngines().map((item) => `<button type="button" role="option" data-engine="${item.id}" aria-selected="${item.id === selected.id}">${iconHtml("https://" + item.host, engineName(item).slice(0, 1), 16)}<span>${escapeHtml(engineName(item))}</span></button>`).join("")}</div>`;
}

function homeView() {
  const current = catalog.categories.find((item) => item.id === activeId) || catalog.categories[0];
  activeId = current ? current.id : "";
  const selected = engine();
  const parts = engineParts(selected);
  const rows = current ? current.rows : [];
  return `
    <section class="search-wrap" aria-label="${t("searchLabel")}">
      <form class="search" id="search-form" action="${escapeHtml(parts.base)}" method="get"${preferences.newTab ? ' target="_blank" rel="noopener"' : ""}>
        <button class="engine" type="button" aria-expanded="${engineOpen}" aria-controls="engine-menu" aria-label="${t("search")}">${iconHtml("https://" + selected.host, engineName(selected).slice(0, 1), 28)} <small>⌄</small></button>
        ${engineMenu(selected)}
        <input id="search-input" name="${parts.param}" type="search" aria-label="${t("searchLabel")}" autocomplete="${preferences.suggestions ? "on" : "off"}">
        <div class="suggest" id="suggest" hidden></div>
        <button class="search-submit" type="submit" aria-label="${t("searchLabel")}"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="6.5"/><path d="m16 16 4.5 4.5"/></svg></button>
      </form>
    </section>
    <section class="catalog${editing ? " editing" : ""}" aria-label="${t("setting")}">
      <div class="categories" role="group" aria-label="分类">${catalog.categories.map((item) => `<button type="button" data-category="${item.id}" aria-pressed="${item.id === activeId}">${escapeHtml(item.name)}</button>`).join("")}</div>
      <div class="matrix icons-${escapeHtml(preferences.siteicon)}">${rows.length ? rows.map((row) => `<div class="row">${rowLabel(current, row)}<div class="cells">${row.links.slice(0, 6).map((link) => linkChip(current, row, link)).join("")}</div>${editing && row.links.length < 6 ? `<button class="add-chip" type="button" data-add-link="${current.id}:${row.id}" aria-label="${t("addLink")}">+</button>` : ""}</div>`).join("") : `<p class="empty">${t("empty")}</p>`}${editing ? `<button class="add-row" type="button" id="add-row" aria-label="${t("addRow")}">+</button>` : ""}</div>
    </section>
    ${preferencePanel()}
    ${preferences.banners && !editing ? '<div class="banners" aria-hidden="true"><div class="banner banner-wide"></div><div class="banner banner-narrow"></div></div>' : ""}
    <footer class="footer"><span>© tianchenghao.com</span><nav aria-label="${t("about")}"><button type="button" id="footer-about">${t("about")}</button><button type="button" id="footer-edit">${t("setting")}</button><button type="button" id="theme-toggle"><span aria-hidden="true">${colorModeIcon()}</span> ${colorModeLabel()}</button></nav><span class="footer-note"></span></footer>
    ${aboutPanel()}`;
}

function render() {
  document.querySelector(".wordmark").textContent = WORDMARK;
  document.querySelector("#edit-toggle")?.setAttribute("aria-pressed", String(editing));
  applyTheme();
  try {
    app.innerHTML = homeView();
  } catch (error) {
    app.textContent = language() === "zh-CN" ? "页面加载失败，请刷新。" : "This page failed to load. Refresh and try again.";
    console.error(error);
    return;
  }
  document.querySelector(".editor input")?.focus();
  startThemeCanvas();
}

function toggleEdit() {
  editing = !editing;
  editor = null;
  engineOpen = false;
  aboutOpen = false;
  history.replaceState(null, "", editing ? "#settings" : location.pathname);
  render();
}

function readPreferences() {
  const value = (id) => document.querySelector(`#${id}`)?.value;
  if (!value("theme")) return;
  const previousSubscribe = preferences.subscribe;
  preferences.language = value("language");
  preferences.subscribe = value("subscribe");
  preferences.theme = value("theme");
  preferences.colormode = value("colormode");
  preferences.search = value("search");
  preferences.suggestions = value("suggestions") === "on";
  preferences.newTab = value("new-tab") === "on";
  preferences.siteicon = value("siteicon");
  preferences.banners = value("banners") === "on";
  return previousSubscribe;
}

async function loadEdition(edition) {
  const file = edition === "zh-CN" ? "catalog-zh.json" : "catalog.json";
  const data = await fetch(file).then((response) => response.json()).catch(() => null);
  if (!data?.categories) return;
  catalog = data;
  activeId = "";
  capRows();
  saveStored();
  render();
}

/* theme canvas: wave / mountain backgrounds */
let canvasFrame = 0;
function stopThemeCanvas() {
  if (canvasFrame) cancelAnimationFrame(canvasFrame);
  canvasFrame = 0;
}
function startThemeCanvas() {
  stopThemeCanvas();
  const style = preferences.theme;
  const old = document.querySelector("#theme-canvas");
  if (style !== "wave" && style !== "mountain") { old?.remove(); return; }
  const canvas = old || document.createElement("canvas");
  canvas.id = "theme-canvas";
  canvas.setAttribute("aria-hidden", "true");
  if (!old) document.body.prepend(canvas);
  const ctx = canvas.getContext("2d");
  const dark = darkMode();
  const base = getComputedStyle(document.documentElement).getPropertyValue("--page").trim() || (dark ? "#161616" : "#ededed");
  const tone = getComputedStyle(document.documentElement).getPropertyValue("--line").trim() || (dark ? "#333" : "#d0d0d0");
  const layers = style === "mountain"
    ? [{ amp: 110, step: 0.0024, speed: 0.0025, y: 0.78, color: tone, alpha: 0.55 }, { amp: 80, step: 0.0038, speed: 0.0016, y: 0.86, color: base, alpha: 0.9 }]
    : [{ amp: 46, step: 0.0032, speed: 0.0032, y: 0.8, color: tone, alpha: 0.35 }, { amp: 62, step: 0.0021, speed: 0.0022, y: 0.88, color: tone, alpha: 0.5 }, { amp: 30, step: 0.0048, speed: 0.0014, y: 0.93, color: base, alpha: 0.75 }, { amp: 78, step: 0.0014, speed: 0.001, y: 0.97, color: base, alpha: 0.95 }];
  let offset = 0;
  const draw = () => {
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const w = canvas.clientWidth || window.innerWidth;
    const h = canvas.clientHeight || window.innerHeight;
    if (canvas.width !== Math.floor(w * dpr) || canvas.height !== Math.floor(h * dpr)) {
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
    }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.clearRect(0, 0, w, h);
    for (const layer of layers) {
      ctx.beginPath();
      ctx.moveTo(0, h);
      for (let x = 0; x <= w; x += 8) {
        const y = layer.y * h + Math.sin((x + offset * layer.speed * 900) * layer.step) * layer.amp
          + Math.sin((x * 0.41 + offset * layer.speed * 500) * layer.step * 1.7) * layer.amp * 0.45;
        ctx.lineTo(x, y);
      }
      ctx.lineTo(w, h);
      ctx.closePath();
      ctx.globalAlpha = layer.alpha;
      ctx.fillStyle = layer.color;
      ctx.fill();
    }
    ctx.globalAlpha = 1;
  };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduced) { draw(); return; }
  let tick = 0;
  const loop = () => {
    canvasFrame = requestAnimationFrame(loop);
    if (tick++ % 2) return;
    offset += 1;
    draw();
  };
  loop();
}
matchMedia("(prefers-color-scheme: dark)").addEventListener?.("change", () => { if (preferences.colormode === "auto") render(); });

/* suggestions */
const SUGGEST = {
  google: (q, cb) => `https://suggestqueries.google.com/complete/search?client=chrome&q=${q}&callback=${cb}`,
  baidu: (q, cb) => `https://suggestion.baidu.com/su?wd=${q}&cb=${cb}`,
  bing: (q, cb) => `https://api.bing.com/qsonhs.aspx?type=cb&cb=${cb}&q=${q}`,
  yahoo: (q, cb) => `https://ff.search.yahoo.com/gossip?output=jsonp&command=${q}&callback=${cb}`,
  sogou: (q, cb) => `https://wap.sogou.com/web/sugg/?key=${q}&cb=${cb}`
};
const SUGGEST_PARSE = {
  google: (data) => (Array.isArray(data) ? data[1] : []),
  baidu: (data) => data?.s || [],
  bing: (data) => (data?.AS?.Results || []).flatMap((r) => (r.Suggests || []).map((s) => s.Txt)),
  yahoo: (data) => (Array.isArray(data) ? data[1] || [] : data?.r || []),
  sogou: (data) => (Array.isArray(data) ? data[1] || [] : data?.s || data?.result || [])
};

function requestSuggestions(query, box) {
  const id = engine().id;
  const build = SUGGEST[id];
  if (!build) { box.hidden = true; return; }
  const callback = "navSuggest";
  window[callback] = (data) => {
    const items = (SUGGEST_PARSE[id] ? SUGGEST_PARSE[id](data) : []) || [];
    const unique = [...new Set(items.filter((item) => typeof item === "string"))].slice(0, 7);
    box.innerHTML = unique.map((item) => `<button type="button" data-suggest="${escapeHtml(item)}">${escapeHtml(item)}</button>`).join("");
    box.hidden = !unique.length;
  };
  document.getElementById("suggest-jsonp")?.remove();
  const script = document.createElement("script");
  script.id = "suggest-jsonp";
  script.src = build(encodeURIComponent(query), callback);
  script.onerror = () => { box.hidden = true; };
  document.body.appendChild(script);
}

document.addEventListener("submit", (event) => {
  const linkForm = event.target.closest("[data-editor]");
  const rowForm = event.target.closest("[data-row-editor]");
  const searchForm = event.target.closest("#search-form");
  if (searchForm) {
    const input = searchForm.querySelector("#search-input");
    const term = input?.value.trim();
    if (!term) { event.preventDefault(); return; }
    event.preventDefault();
    const target = engineUrl(term);
    if (preferences.newTab) window.open(target, "_blank", "noopener");
    else location.href = target;
    return;
  }
  if (!linkForm && !rowForm) return;
  event.preventDefault();
  if (rowForm) {
    const [categoryId, rowId] = rowForm.dataset.rowEditor.split(":");
    const row = catalog.categories.find((item) => item.id === categoryId)?.rows.find((item) => item.id === rowId);
    if (row) row.name = rowForm.elements.name.value.trim() || t("untitled");
  } else {
    const [categoryId, rowId, linkId] = linkForm.dataset.editor.split(":");
    const link = findLink(categoryId, rowId, linkId);
    if (link) {
      link.name = linkForm.elements.name.value.trim() || t("untitled");
      link.url = normalizeUrl(linkForm.elements.url.value);
    }
  }
  editor = null;
  saveStored();
  statusText = t("saved");
  render();
});

document.addEventListener("change", (event) => {
  if (!event.target.closest(".pref-panel")) return;
  const beforeSubscribe = preferences.subscribe;
  readPreferences();
  if (preferences.subscribe !== beforeSubscribe) {
    loadEdition(preferences.subscribe);
    return;
  }
  saveStored();
  statusText = t("saved");
  render();
});

document.querySelector("#edit-toggle").addEventListener("click", toggleEdit);

document.addEventListener("input", (event) => {
  if (event.target.id !== "search-input") return;
  const box = document.querySelector("#suggest");
  if (!box) return;
  const query = event.target.value.trim();
  if (!preferences.suggestions || !query) { box.hidden = true; return; }
  requestSuggestions(query, box);
});

document.addEventListener("click", (event) => {
  if (event.target.closest("[data-close-about]")) {
    aboutOpen = false;
    render();
    return;
  }
  if (event.target.id === "footer-about") {
    aboutOpen = true;
    editing = false;
    render();
    return;
  }
  if (event.target.id === "footer-edit") {
    toggleEdit();
    return;
  }
  const editLink = event.target.closest("[data-edit-link]");
  if (editLink) {
    const [categoryId, rowId, linkId] = editLink.dataset.editLink.split(":");
    editor = { categoryId, rowId, linkId };
    render();
    return;
  }
  const addLink = event.target.closest("[data-add-link]");
  if (addLink) {
    const [categoryId, rowId] = addLink.dataset.addLink.split(":");
    const row = catalog.categories.find((item) => item.id === categoryId)?.rows.find((item) => item.id === rowId);
    if (!row || row.links.length >= 6) return;
    const link = { id: uid("link"), name: t("newLink"), url: "https://" };
    row.links.push(link);
    editor = { categoryId, rowId, linkId: link.id };
    saveStored();
    render();
    return;
  }
  const deleteLink = event.target.closest("[data-delete-link]");
  if (deleteLink) {
    const [categoryId, rowId, linkId] = deleteLink.dataset.deleteLink.split(":");
    const row = catalog.categories.find((item) => item.id === categoryId)?.rows.find((item) => item.id === rowId);
    if (row) row.links = row.links.filter((item) => item.id !== linkId);
    editor = null;
    saveStored();
    render();
    return;
  }
  if (event.target.id === "add-row") {
    const category = catalog.categories.find((item) => item.id === activeId);
    if (!category) return;
    const row = { id: uid("row"), name: t("newRow"), links: [] };
    category.rows.push(row);
    editor = { type: "row", categoryId: category.id, rowId: row.id };
    saveStored();
    render();
    return;
  }
  const editRow = event.target.closest("[data-edit-row]");
  if (editRow) {
    const [categoryId, rowId] = editRow.dataset.editRow.split(":");
    editor = { type: "row", categoryId, rowId };
    render();
    return;
  }
  const deleteRow = event.target.closest("[data-delete-row]");
  if (deleteRow) {
    const [categoryId, rowId] = deleteRow.dataset.deleteRow.split(":");
    const category = catalog.categories.find((item) => item.id === categoryId);
    if (category) category.rows = category.rows.filter((item) => item.id !== rowId);
    editor = null;
    saveStored();
    render();
    return;
  }
  if (event.target.id === "save-prefs") {
    readPreferences();
    saveStored();
    editing = false;
    editor = null;
    statusText = t("saved");
    history.replaceState(null, "", location.pathname);
    render();
    return;
  }
  const categoryButton = event.target.closest("[data-category]");
  if (categoryButton) {
    activeId = categoryButton.dataset.category;
    editor = null;
    engineOpen = false;
    render();
    return;
  }
  const suggestButton = event.target.closest("[data-suggest]");
  if (suggestButton) {
    const input = document.querySelector("#search-input");
    if (input) input.value = suggestButton.dataset.suggest;
    document.querySelector("#suggest").hidden = true;
    document.querySelector("#search-form")?.requestSubmit();
    return;
  }
  const engineButton = event.target.closest("[data-engine]");
  if (engineButton) {
    preferences.search = engineButton.dataset.engine;
    engineOpen = false;
    saveStored();
    render();
    return;
  }
  if (event.target.closest(".engine")) {
    engineOpen = !engineOpen;
    render();
    return;
  }
  if (engineOpen && !event.target.closest(".engine-menu")) {
    engineOpen = false;
    render();
    return;
  }
  if (event.target.id === "theme-toggle") {
    const order = ["auto", "dark", "light"];
    preferences.colormode = order[(order.indexOf(preferences.colormode) + 1) % order.length];
    saveStored();
    render();
    return;
  }
  if (event.target.id === "restore" && confirm(t("resetConfirm"))) {
    localStorage.removeItem(STORAGE_KEY);
    location.reload();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key !== "Escape") return;
  if (aboutOpen) { aboutOpen = false; render(); }
  else if (engineOpen) { engineOpen = false; render(); }
});

window.addEventListener("hashchange", render);

const stored = readStored();
if (stored?.preferences) {
  Object.assign(preferences, stored.preferences);
  /* earlier build defaulted to auto language and a customize subscription */
  if (stored.preferences.language === "auto") preferences.language = "en";
  if (!["en", "zh-CN"].includes(preferences.subscribe)) preferences.subscribe = "en";
}
if (stored?.catalog?.categories) {
  catalog = stored.catalog;
  
  capRows();
}

Promise.all([
  fetch(preferences.subscribe === "zh-CN" ? "catalog-zh.json" : "catalog.json").then((response) => response.json()).catch(() => null),
  fetch("icon-map.json").then((response) => response.json()).catch(() => ({}))
]).then(([data, map]) => {
  iconMap = map || {};
  if (data?.categories && !stored?.catalog?.categories) catalog = data;
  else if (data?.wordmark) catalog.wordmark = catalog.wordmark || data.wordmark;
  if (location.hash === "#settings") editing = true;
}).finally(render);
