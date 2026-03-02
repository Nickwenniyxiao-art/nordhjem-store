# NordHjem Store 🏠

Nordic minimalist furniture e-commerce store - 北欧极简家具电商独立站

## Project Overview

| Feature | Details |
|---------|---------|
| Products | 504 Nordic furniture items |
| Languages | English + 中文 (full i18n) |
| Pages | 17 SPA pages with hash routing |
| Design | Forest green (#2C3E2D) + warm white (#FAFAF8) |
| Fonts | DM Serif Display + Inter |
| Promo Code | NORDIC20 (20% off) |

## Pages

- **Homepage** — Hero, featured products, categories, new arrivals, promotions
- **Category Listing** — Grid/list view, sorting, filtering
- **Product Detail** — Image gallery, specs, reviews, related items
- **Shopping Cart** — Quantity, promo codes, order summary
- **Checkout** — Address, payment form, order review
- **User Center** — Profile, order history, addresses, wishlist
- **Auth** — Login / Register / Forgot Password
- **Search** — Full-text product search with filters
- **Compare** — Side-by-side product comparison
- **Coupons** — Available promotions and coupon codes
- **FAQ / About / Contact** — Informational pages
- **404** — Custom not-found page

## File Structure

```
├── index.html          (entry point)
├── base.css            (design tokens, resets)
├── style.css           (all component styles)
├── app.js              (SPA application logic, 17 pages, i18n)
├── products-data.js    (504 product records with EN/ZH data)
├── setup-repo.sh       (downloads & pushes complete files to this repo)
├── deploy-vps.sh       (deploys to VPS with Nginx)
├── deploy.sh           (legacy deploy script)
└── nginx.conf          (Nginx configuration)
```

## Quick Start

### Option 1: View locally
```bash
git clone https://github.com/Nickwenniyxiao-art/nordhjem-store.git
cd nordhjem-store
# Open index.html in a browser (or use a local server)
python3 -m http.server 8080
```

### Option 2: Deploy to VPS
```bash
# SSH into your VPS, then:
curl -sL https://raw.githubusercontent.com/Nickwenniyxiao-art/nordhjem-store/main/deploy-vps.sh | bash
```

## Setup (First Time)

If the large files (app.js, products-data.js) are missing from the repo, run:
```bash
bash setup-repo.sh
```
This downloads all files from the hosted version and pushes them to GitHub.

## Tech Stack

- Pure HTML/CSS/JS (no framework dependencies)
- SPA with hash-based routing
- CSS Grid + Flexbox responsive layouts
- Google Fonts (DM Serif Display, Inter)
- Bilingual i18n with `t()` and `p()` helper functions

## Deployment Architecture (Planned)

```
┌─────────────┐     ┌──────────────┐     ┌─────────────┐
│   Frontend   │────▶│  API Gateway  │────▶│  Microservices│
│  (This Repo) │     │   (Nginx)     │     │  (Backend)    │
└─────────────┘     └──────────────┘     └─────────────┘
                                              │
                    ┌─────────────────────────┼──────────┐
                    │         │         │      │          │
                 Auth    Products   Orders   Cart    Payments
```

## License

Private - All rights reserved