# iancenao

一个纯静态的网址导航。四个文件就能跑：`index.html`、`app.css`、`app.js`、`catalog.json`。没有构建步骤、没有后端进程、没有数据库，Nginx 或任何静态托管直接发送即可。

界面仿 [0x3.com](https://0x3.com) 国际版，链接目录整理自它的公开订阅数据。

## 特点

- **零构建**：克隆下来就能打开，不需要 npm、Go、打包器。
- **零后端**：网址和设置只存在浏览器的 `localStorage`，服务器不保存任何个人数据。
- **两套目录**：`catalog.json`（全球，19 个搜索引擎）与 `catalog-zh.json`（中国大陆，追加 12 个中文引擎）。
- **就地编辑**：点右下角「设置」进入编辑态，链接框变虚线，点一下即可改名/改网址；六列布局保持不变。
- **10 种风格**：月灰、浪花、远山、素白、青川、荔枝、深海、水墨、炭黑、月夜；浪花与远山带动态背景。
- **自托管图标**：`icons/` 收录 376 个域名图标，文件名用哈希，避免路径里出现域名。

## 目录

```text
.
├── index.html          页面骨架
├── app.css             全部样式（含 10 套主题变量）
├── app.js              渲染、设置、编辑、搜索、订阅逻辑
├── catalog.json        全球目录
├── catalog-zh.json     中国大陆目录
├── icon-map.json       域名 → 图标文件映射
├── favicon.ico         站点图标
├── icons/              自托管图标（哈希文件名）
├── banners/            页脚横幅
├── deploy/nginx.conf   容器与反向代理用的 Nginx 配置
├── Dockerfile
├── compose.yaml
├── scripts/            维护脚本（新增域名时补图标）
└── .github/workflows/  手动发布 GHCR 镜像
```

## 部署

### 1. 静态托管 / GitHub Pages

仓库根目录就是网站根目录。Pages 选择 `Deploy from a branch` → `main` → `/ (root)`，不需要 Actions。

自定义域名时在根目录加一个 `CNAME` 文件写域名，再配 DNS。

### 2. 现有 Nginx

把整个仓库放进一个目录，`root` 指过去即可：

```nginx
server {
    listen 80;
    server_name nav.example.com;
    root /srv/iancenao;
    index index.html;
    location / { try_files $uri $uri/ /index.html; }
}
```

页面全部使用相对路径，放在子路径（如 `/demo/`）下也能正常工作。

### 3. Docker

```bash
docker build -t ihomepage .
docker run -d --name ihomepage-nav -p 127.0.0.1:11192:80 ihomepage
```

或使用已发布的镜像：

```bash
docker compose up -d
```

`compose.yaml` 默认只绑回环地址 `127.0.0.1:11192`，由本机 HTTPS 反向代理对外提供服务。

## 使用

- **加网址**：设置 → 点某个链接 → 改名称和网址 → 保存。每行最多 6 个，满了会出现「+」新建一行。
- **加分组**：设置 → 分类底部「+」。
- **分类**：左侧竖排分类来自 `catalog.json` 的 `categories`，编辑态下可改名或删除。
- **搜索引擎**：0x3 原本的 19 个；订阅「中国大陆」时追加淘宝、京东、微博、知乎、豆瓣、头条、腾讯视频、爱奇艺、优酷、芒果TV、Bilibili、AcFun。
- **恢复默认**：设置 → 恢复初始设置，清除本浏览器的修改。
- **换横幅**：替换 `banners/wide.jpg` 与 `narrow.jpg`，或把设置里的「图片横幅」关掉。
- **改样式后**：`index.html` 里 `app.css` / `app.js` 带 `?v=` 版本号，改完这两个文件记得一起改，浏览器才会立刻拿到新版本。

## 图标

图标优先使用 `icon-map.json` 里映射的本地文件，失败时回退到站点自己的 `favicon.ico`，再回退到名称首字。

新增域名后补图标：

```bash
node scripts/fetch-icons.js
```

脚本会读取两份目录，找出还没有图标的域名，从 `https://0x3.com/icon` 拉取，并按域名哈希命名。仓库已包含全部图标，这一步不是安装前置。

## 数据与隐私

- 没有服务端存储、没有统计、没有账号。
- 所有修改只写入浏览器本地存储；清除站点数据即恢复默认目录。
- 唯一的对外请求是搜索联想（谷歌、百度、必应、雅虎、搜狗各自的 JSONP 接口），可在设置里关闭。

## 说明

界面与交互参考 [0x3.com](https://0x3.com)，链接目录与图标抓取自它的公开订阅数据。图标与商标归各自所有者，本仓库仅作个人导航用途。若需公开分发，建议替换 `banners/` 与 `icons/` 中来自第三方的素材。

未附带开源许可证，默认保留所有权利。如需授权请自行添加 LICENSE。
