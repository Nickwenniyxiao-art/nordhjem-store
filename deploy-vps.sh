#!/bin/bash
# ============================================
# NordHjem Store - VPS Deployment Script
# ============================================
# This script deploys NordHjem Store to a VPS
# from the GitHub repository.
#
# Usage: bash deploy-vps.sh
# Run on the VPS (or via SSH)
# ============================================

set -e

VPS_IP="66.94.127.117"
REPO_URL="https://github.com/Nickwenniyxiao-art/nordhjem-store.git"
SITE_DIR="/var/www/nordhjem"

echo "=== NordHjem Store - VPS Deployment ==="

# Step 1: Update system and install dependencies
echo ""
echo "[1/5] Installing dependencies..."
apt update -y
apt install -y nginx git curl

# Step 2: Clone or update the repository
echo ""
echo "[2/5] Getting latest code from GitHub..."
if [ -d "$SITE_DIR" ]; then
    cd "$SITE_DIR"
    git pull origin main
else
    git clone "$REPO_URL" "$SITE_DIR"
    cd "$SITE_DIR"
fi

# Step 3: Verify key files exist
echo ""
echo "[3/5] Verifying files..."
for file in index.html app.js products-data.js style.css base.css; do
    if [ -f "$file" ]; then
        echo "  ✓ $file ($(wc -c < $file) bytes)"
    else
        echo "  ✗ Missing: $file"
        exit 1
    fi
done

# Step 4: Configure Nginx
echo ""
echo "[4/5] Configuring Nginx..."
cat > /etc/nginx/sites-available/nordhjem << 'NGINX'
server {
    listen 80;
    server_name _;
    root /var/www/nordhjem;
    index index.html;
    
    # Gzip compression
    gzip on;
    gzip_types text/plain text/css application/javascript application/json;
    gzip_min_length 256;
    
    # Cache static assets
    location ~* \.(css|js|jpg|jpeg|png|gif|ico|svg|woff|woff2)$ {
        expires 7d;
        add_header Cache-Control "public, immutable";
    }
    
    # SPA routing - all routes serve index.html
    location / {
        try_files $uri $uri/ /index.html;
    }
}
NGINX

# Enable site
ln -sf /etc/nginx/sites-available/nordhjem /etc/nginx/sites-enabled/nordhjem
rm -f /etc/nginx/sites-enabled/default

# Test and restart Nginx
nginx -t
systemctl restart nginx
systemctl enable nginx

# Step 5: Set permissions
echo ""
echo "[5/5] Setting permissions..."
chown -R www-data:www-data "$SITE_DIR"
chmod -R 755 "$SITE_DIR"

echo ""
echo "=== ✓ Deployment complete! ==="
echo "Site is live at: http://${VPS_IP}"
echo ""
echo "Next steps:"
echo "  1. Point your domain DNS A record to ${VPS_IP}"
echo "  2. Install SSL: apt install certbot python3-certbot-nginx"
echo "  3. Run: certbot --nginx -d yourdomain.com"