#!/bin/bash
# ============================================
# NordHjem Store - GitHub Repository Setup
# ============================================
# This script downloads the complete project files
# and pushes them to the GitHub repository.
#
# Usage: bash setup-repo.sh
# Prerequisites: git must be configured with GitHub access
# ============================================

set -e

REPO_URL="https://github.com/Nickwenniyxiao-art/nordhjem-store.git"
S3_BASE="https://sites.pplx.app/sites/proxy/eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwcmVmaXgiOiJ3ZWIvZGlyZWN0LWZpbGVzL2NvbXB1dGVyLzY0NTY0NGQyLTRlMWItNDQxNS04MjYyLTJmMmQ2Y2I2ZmE0MC9lY29tbWVyY2Utc3RvcmUvIiwic2lkIjoiNjQ1NjQ0ZDItNGUxYi00NDE1LTgyNjItMmYyZDZjYjZmYTQwIiwiZXhwIjoxNzcyNTI0NTc0fQ.-GkswpwmdHcY6d1zUs0VbhHIekq1qctg7gB30Hw7lbM/web/direct-files/computer/645644d2-4e1b-4415-8262-2f2d6cb6fa40/ecommerce-store"

echo "=== NordHjem Store - Repository Setup ==="

# Step 1: Clone the repository
echo ""
echo "[1/4] Cloning repository..."
rm -rf nordhjem-store
git clone "$REPO_URL"
cd nordhjem-store

# Step 2: Download all project files from S3
echo ""
echo "[2/4] Downloading project files..."

FILES="index.html base.css style.css app.js products-data.js deploy.sh nginx.conf README.md"

for file in $FILES; do
    echo "  Downloading $file..."
    curl -sL "${S3_BASE}/${file}" -o "$file"
    if [ -f "$file" ]; then
        size=$(wc -c < "$file")
        echo "    ✓ $file ($size bytes)"
    else
        echo "    ✗ Failed to download $file"
        exit 1
    fi
done

# Step 3: Verify files
echo ""
echo "[3/4] Verifying files..."
echo "  app.js: $(wc -c < app.js) bytes (expected ~147975)"
echo "  products-data.js: $(wc -c < products-data.js) bytes (expected ~952677)"
echo "  style.css: $(wc -c < style.css) bytes (expected ~71239)"

# Step 4: Commit and push
echo ""
echo "[4/4] Committing and pushing to GitHub..."
git add -A
git commit -m "Add complete NordHjem Store frontend - 504 products, 17 pages, full i18n (EN/ZH)"
git push origin main

echo ""
echo "=== ✓ Repository setup complete! ==="
echo "Repository: https://github.com/Nickwenniyxiao-art/nordhjem-store"