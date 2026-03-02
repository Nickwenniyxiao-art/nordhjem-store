# NordHjem — Nordic Furniture E-Commerce Store

北欧家具电商独立站模板，可配置品牌名称、主色调、商品分类，快速部署多个独立站。

## 🌐 Live Demo

[在线预览](http://66.94.127.117)

## ✅ 已完成功能

### 前端页面（17个）
- 首页（Hero轮播、商品推荐、分类入口）
- 商品列表页（筛选、排序、分页 — 504件商品）
- 商品详情页（5-8张图、规格、评价）
- 购物车（数量调整、优惠码）
- 登录/注册（表单验证、社交登录按钮）
- 忘记密码
- 结算（三步：收货→支付→确认）
- 用户中心（订单/地址/收藏/资料/设置）
- 搜索结果（中英文搜索）
- 订单详情（物流时间线）
- 优惠券中心
- FAQ帮助中心
- 关于我们/品牌故事
- 联系我们
- 商品对比（最多4件）
- 404页面
- 中英文i18n语言切换

### 设计特点
- 北欧极简风格（森林绿 + 暖白 + 木质色调）
- DM Serif Display + Inter 字体搭配
- 响应式设计（移动端适配）
- 504件商品数据（中英双语）

## 📁 项目结构

```
nordhjem-store/
├── index.html          # 入口文件
├── base.css            # 基础样式（设计系统）
├── style.css           # 组件样式（所有页面）
├── app.js              # 主应用（路由、渲染、交互）
├── products-data.js    # 504件商品数据
├── deploy.sh           # VPS 一键部署脚本
├── nginx.conf          # Nginx 配置
└── README.md
```

## 🚀 部署

### 方式一：VPS 部署（推荐）
```bash
git clone https://github.com/Nickwenniyxiao-art/nordhjem-store.git
cd nordhjem-store
chmod +x deploy.sh
sudo bash deploy.sh
```

### 方式二：本地预览
直接用浏览器打开 `index.html` 或用任意 HTTP 服务器：
```bash
npx serve .
```

## ⚙️ 品牌配置

编辑 `app.js` 顶部的 `STORE_CONFIG` 对象即可换皮：
```js
const STORE_CONFIG = {
  storeName: "NordHjem",
  primaryColor: "#2C3E2D",
  categories: ["Living Room", "Bedroom", ...],
  currencySymbol: "$",
  freeShippingThreshold: 99,
};
```

## 🔜 开发路线图

### 后端微服务（开发中）
- [ ] 用户认证服务（JWT/OAuth）
- [ ] 商品管理服务
- [ ] 订单服务
- [ ] 支付集成（Stripe/PayPal）
- [ ] 物流追踪服务
- [ ] 通知服务（邮件）
- [ ] 优惠券服务
- [ ] 评价服务
- [ ] CMS 内容服务
- [ ] 管理后台

### 基础设施
- [ ] Docker 容器化
- [ ] PostgreSQL + Redis
- [ ] Elasticsearch 搜索
- [ ] CI/CD 自动部署
- [ ] SSL 证书
- [ ] 监控告警

## 🛠 技术栈

| 层级 | 技术 |
|------|------|
| 前端 | HTML/CSS/JS (SPA) |
| 后端 | Node.js + Express (计划) |
| 数据库 | PostgreSQL + Redis (计划) |
| 搜索 | Elasticsearch (计划) |
| 部署 | Contabo VPS + Nginx |
| CI/CD | GitHub Actions (计划) |

## 📝 License

MIT
