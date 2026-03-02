#!/bin/bash
set -e
echo "========================================="
echo "  NordHjem 电商站 - 一键部署脚本"
echo "========================================="
apt update -y && apt install -y nginx
SITE_DIR="/var/www/nordhjem"
mkdir -p $SITE_DIR
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cp "$SCRIPT_DIR/index.html" "$SCRIPT_DIR/base.css" "$SCRIPT_DIR/style.css" "$SCRIPT_DIR/app.js" "$SCRIPT_DIR/products-data.js" $SITE_DIR/
chown -R www-data:www-data $SITE_DIR 2>/dev/null || true
chmod -R 755 $SITE_DIR

cat > /etc/nginx/conf.d/nordhjem.conf << 'EOF'
server {
    listen 80 default_server;
    listen [::]:80 default_server;
    server_name _;
    root /var/www/nordhjem;
    index index.html;
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/javascript application/javascript application/json;
    location ~* \.(css|js)$ { expires 7d; add_header Cache-Control "public, immutable"; }
    location / { try_files $uri $uri/ /index.html; }
}
EOF

rm -f /etc/nginx/sites-enabled/default
nginx -t && systemctl enable nginx && systemctl restart nginx
echo "✅ 部署完成！访问 http://$(curl -s ifconfig.me)"
