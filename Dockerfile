FROM nginx:1.27-alpine

LABEL org.opencontainers.image.title="iancenao" \
      org.opencontainers.image.description="Static link dashboard: no build step, no backend, no database." \
      org.opencontainers.image.version="1.0.0" \
      org.opencontainers.image.source="https://github.com/CharlesField19/ihomepage"

COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY index.html app.css app.js catalog.json catalog-zh.json icon-map.json favicon.ico /usr/share/nginx/html/
COPY icons/ /usr/share/nginx/html/icons/
COPY banners/ /usr/share/nginx/html/banners/

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD wget -qO- http://127.0.0.1/index.html >/dev/null || exit 1
