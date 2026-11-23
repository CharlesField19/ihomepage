# iancenao

A purely static link dashboard. Four files are enough to run it: `index.html`, `app.css`, `app.js` and `catalog.json`. No build step, no backend process, no database — Nginx or any static host can serve it as-is.

The interface follows the international edition of [0x3.com](https://0x3.com); the catalog is derived from its public subscription data.

## Features

- **No build**: clone and open. No npm, Go or bundler required.
- **No backend**: links and settings live only in the browser's `localStorage`; the server stores nothing about you.
- **Two catalogs**: `catalog.json` (worldwide, 19 search engines) and `catalog-zh.json` (mainland China, adding 12 Chinese engines).
- **In-place editing**: click "Setting" in the footer, link chips turn dashed, then click a chip to rename it or change its URL. The six-column grid never shifts.
- **10 themes**: Moon, Wave, Mountain, Pure, Cyan, Lychee, Ocean, Ink, Charcoal, Moonlit. Wave and Mountain animate their backgrounds.
- **Self-hosted icons**: 376 domain icons in `icons/`, named by hash so no domain ever appears in a path.

## Layout

```text
.
├── index.html          page skeleton
├── app.css             all styles, including the ten theme variable sets
├── app.js              rendering, settings, editing, search, subscription
├── catalog.json        worldwide catalog
├── catalog-zh.json     mainland catalog
├── icon-map.json       host → icon file map
├── favicon.ico         site icon
├── icons/              self-hosted icons, hashed file names
├── banners/            footer banners
├── deploy/nginx.conf   Nginx config for containers and reverse proxies
├── Dockerfile
├── compose.yaml
├── scripts/            maintenance scripts (fetch icons for new hosts)
└── .github/workflows/  manual GHCR image publishing
```

## Deploy

### 1. Static hosting / GitHub Pages

The repository root is the site root. In Pages pick `Deploy from a branch` → `main` → `/ (root)`; no Actions needed.

For a custom domain, add a `CNAME` file containing the domain and point DNS at it.

### 2. Existing Nginx

Drop the repository into a directory and set `root`:

```nginx
server {
    listen 80;
    server_name nav.example.com;
    root /srv/iancenao;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}
```

Every asset path is relative, so serving it under a subpath such as `/demo/` works too.

### 3. Docker

```bash
docker build -t ihomepage .
docker run -d --name ihomepage-nav -p 127.0.0.1:11192:80 ihomepage
```

Or use the published image:

```bash
docker compose up -d
```

`compose.yaml` binds `127.0.0.1:11192` only, expecting a local HTTPS reverse proxy in front.

## Usage

- **Add a link**: Setting → click a link → edit name and URL → Save. Each row holds at most six links; a "+" appears once full.
- **Add a group**: Setting → "+" at the bottom of the active category.
- **Categories**: the vertical list comes from `categories` in `catalog.json`; rename or delete them while editing.
- **Search engines**: the original 19 from 0x3; subscribing to Mainland China adds Taobao, JD, Weibo, Zhihu, Douban, Toutiao, Tencent Video, iQiyi, Youku, Mango TV, Bilibili and AcFun.
- **Reset**: Setting → Reset All Settings clears this browser's changes.
- **Banners**: replace `banners/wide.jpg` and `narrow.jpg`, or turn Banners off in settings.

## Icons

An icon resolves from `icon-map.json` first, then the site's own `favicon.ico`, then the first letter of the name.

After adding new hosts:

```bash
node scripts/fetch-icons.js
```

The script reads both catalogs, finds hosts without icons, fetches them from `https://0x3.com/icon` and stores them under a hashed name. Every icon ships with the repository, so this is maintenance, not an install step.

## Data and privacy

- No server-side storage, no analytics, no accounts.
- All changes are written to browser local storage; clearing site data restores the default catalog.
- The only outbound requests are search suggestions (the JSONP endpoints of Google, Baidu, Bing, Yahoo and Sogou), which settings can disable.

## Notes

The interface and interactions reference [0x3.com](https://0x3.com); the catalog and icons are taken from its public subscription data. Icons and trademarks belong to their respective owners, and this repository is meant for personal navigation. Before redistributing, replace the third-party assets in `banners/` and `icons/`.

No open-source license is included; all rights reserved by default. Add a LICENSE file if you want to grant rights.
