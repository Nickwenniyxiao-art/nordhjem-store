/* ============================================================
   NordHjem — app.js
   Full i18n e-commerce application
   ============================================================ */

/* ============================================================
   I18N DICTIONARY
   ============================================================ */
const I18N = {
  en: {
    nav_home: "Home", nav_shop: "Shop", nav_search: "Search", nav_cart: "Cart",
    nav_signin: "Sign In", nav_account: "My Account", nav_signout: "Sign Out",
    nav_wishlist: "Wishlist", nav_orders: "Orders",
    free_shipping_banner: "Free shipping on orders over $99",
    handcrafted_banner: "Handcrafted in Scandinavia",
    search_placeholder: "Search products...",
    hero_subtitle_1: "NEW COLLECTION 2026", hero_title_1: "Where Simplicity Becomes Beauty",
    hero_desc_1: "Scandinavian furniture crafted to last a lifetime — designed to inspire every morning.",
    hero_cta_1: "Explore Collection",
    hero_subtitle_2: "TIMELESS DESIGN", hero_title_2: "Nordic Craftsmanship Redefined",
    hero_desc_2: "Each piece tells a story of precision, natural materials, and enduring beauty.",
    hero_cta_2: "Shop Best Sellers",
    hero_subtitle_3: "SPRING 2026", hero_title_3: "Bring the Outdoors In",
    hero_desc_3: "Biophilic design elements that connect your space with the natural world.",
    hero_cta_3: "View New Arrivals",
    section_new_arrivals: "New Arrivals", section_best_sellers: "Best Sellers",
    section_shop_by_room: "Shop by Room", section_design_stories: "Design Stories",
    shop_all: "Shop All", view_all: "View All",
    add_to_cart: "Add to Cart", added_to_cart: "Added to Cart", quick_view: "Quick View",
    showing_results: "Showing {count} results",
    sort_by: "Sort by", sort_featured: "Featured", sort_price_low: "Price: Low to High",
    sort_price_high: "Price: High to Low", sort_rating: "Highest Rated", sort_newest: "Newest",
    filter_price: "Price Range", filter_brand: "Brand", filter_rating: "Rating",
    filter_shipping: "Free Shipping Only", filter_clear: "Clear All", filter_apply: "Apply Filters",
    no_results: "No products found",
    reviews: "reviews", write_review: "Write a Review", in_stock: "In Stock",
    out_of_stock: "Out of Stock", quantity: "Quantity",
    add_to_wishlist: "Add to Wishlist", remove_from_wishlist: "Remove from Wishlist",
    free_delivery: "FREE Delivery", delivery_estimate: "Estimated delivery",
    returns_policy: "30-day hassle-free returns",
    tab_description: "Description", tab_specs: "Specifications", tab_reviews: "Reviews",
    you_may_also_like: "You May Also Like", compare: "Compare",
    cart_title: "Shopping Cart", cart_empty: "Your cart is empty",
    cart_empty_desc: "Looks like you haven't added anything yet. Start exploring our collection.",
    start_shopping: "Start Shopping", continue_shopping: "Continue Shopping",
    subtotal: "Subtotal", shipping: "Shipping", shipping_free: "FREE",
    shipping_calculated: "Calculated at checkout", tax: "Estimated Tax",
    order_total: "Order Total", promo_code: "Promo Code", apply: "Apply",
    proceed_checkout: "Proceed to Checkout", remove: "Remove",
    free_shipping_progress: "Add {amount} more for free shipping",
    free_shipping_earned: "You've earned free shipping!",
    sign_in: "Sign In", create_account: "Create Account", email: "Email",
    password: "Password", confirm_password: "Confirm Password",
    first_name: "First Name", last_name: "Last Name", remember_me: "Remember me",
    forgot_password: "Forgot password?", or_continue_with: "Or continue with",
    agree_terms: "I agree to the Terms & Conditions",
    already_have_account: "Already have an account?",
    dont_have_account: "Don't have an account?",
    login_success: "Welcome back!", register_success: "Account created successfully!",
    forgot_password_title: "Reset Password",
    forgot_password_desc: "Enter your email and we'll send you a reset link.",
    send_reset_link: "Send Reset Link", back_to_login: "Back to Sign In",
    reset_link_sent: "Reset link sent! Check your email.",
    checkout_title: "Checkout", step_shipping: "Shipping",
    step_payment: "Payment", step_review: "Review",
    contact_info: "Contact Information", shipping_address: "Shipping Address",
    address_line1: "Address", address_line2: "Apartment, suite, etc. (optional)",
    city: "City", state: "State / Province", zip: "ZIP / Postal Code",
    country: "Country", phone: "Phone", shipping_method: "Shipping Method",
    shipping_standard: "Standard Shipping", shipping_standard_desc: "5-7 business days",
    shipping_express: "Express Shipping", shipping_express_desc: "2-3 business days",
    shipping_priority: "Priority Shipping", shipping_priority_desc: "1-2 business days",
    continue_to_payment: "Continue to Payment", continue_to_review: "Continue to Review",
    payment_method: "Payment Method", credit_card: "Credit Card",
    card_number: "Card Number", expiry: "Expiry (MM/YY)", cvc: "CVC",
    cardholder: "Cardholder Name", billing_same: "Same as shipping address",
    order_summary: "Order Summary", place_order: "Place Order",
    order_confirmed: "Order Confirmed!", order_confirmed_desc: "Your order has been placed successfully.",
    order_number: "Order Number", back: "Back",
    account_title: "My Account", account_dashboard: "Dashboard",
    account_orders: "Orders", account_addresses: "Addresses",
    account_wishlist: "Wishlist", account_profile: "Profile", account_settings: "Settings",
    welcome_back: "Welcome back", recent_orders: "Recent Orders",
    order_status_processing: "Processing", order_status_shipped: "Shipped",
    order_status_delivered: "Delivered", order_status_cancelled: "Cancelled",
    order_date: "Order Date", order_total_label: "Total", view_details: "View Details",
    tracking_number: "Tracking Number", add_address: "Add New Address",
    edit: "Edit", delete: "Delete", default_address: "Default",
    save: "Save", cancel: "Cancel", change_password: "Change Password",
    current_password: "Current Password", new_password: "New Password",
    newsletter_pref: "Newsletter Preferences", notification_pref: "Notification Preferences",
    language: "Language", currency: "Currency",
    search_results: "Search Results", search_results_for: "Results for \"{query}\"",
    no_search_results: "No results found for \"{query}\"",
    search_suggestion: "Try different keywords or browse our categories",
    review_title: "Write a Review", review_rating: "Your Rating",
    review_comment: "Your Review", review_name: "Your Name",
    review_submit: "Submit Review", review_success: "Thank you for your review!",
    review_helpful: "Helpful", verified_purchase: "Verified Purchase",
    coupon_center: "Coupon Center", coupon_available: "Available Coupons",
    coupon_code: "Code", coupon_claim: "Claim", coupon_claimed: "Claimed",
    coupon_expires: "Expires", coupon_min_order: "Min. order", my_coupons: "My Coupons",
    faq_title: "Help Center", faq_search: "How can we help you?",
    faq_shipping_title: "Shipping & Delivery", faq_returns_title: "Returns & Exchanges",
    faq_payment_title: "Payment & Pricing", faq_product_title: "Product Information",
    faq_account_title: "Account & Orders",
    about_title: "Our Story", about_subtitle: "Scandinavian Design Philosophy",
    sustainability_title: "Sustainability", craftsmanship_title: "Craftsmanship",
    contact_title: "Contact Us", contact_name: "Your Name", contact_email: "Your Email",
    contact_subject: "Subject", contact_message: "Message", contact_send: "Send Message",
    contact_sent: "Message sent! We'll reply within 24 hours.",
    contact_phone_label: "Phone", contact_email_label: "Email",
    contact_hours_label: "Hours", contact_address_label: "Visit Us",
    compare_title: "Compare Products", compare_add: "Add to Compare",
    compare_remove: "Remove", compare_empty: "Add products to compare them side by side",
    compare_max: "Maximum 4 products can be compared",
    page_not_found: "Page Not Found",
    page_not_found_desc: "The page you're looking for doesn't exist or has been moved.",
    go_home: "Go Home",
    footer_shop: "Shop", footer_about: "About", footer_help: "Help", footer_connect: "Connect",
    footer_our_story: "Our Story", footer_sustainability: "Sustainability",
    footer_craftsmanship: "Craftsmanship", footer_careers: "Careers",
    footer_contact: "Contact Us", footer_faq: "FAQ",
    footer_shipping_returns: "Shipping & Returns", footer_size_guide: "Size Guide",
    footer_newsletter: "Join our newsletter", footer_newsletter_desc: "Get 10% off your first order",
    footer_newsletter_placeholder: "Enter your email", footer_subscribe: "Subscribe",
    footer_rights: "All rights reserved.",
    cat_living_room: "Living Room", cat_bedroom: "Bedroom", cat_dining: "Dining",
    cat_office: "Office", cat_lighting: "Lighting", cat_decor: "Decor",
    cat_outdoor: "Outdoor", cat_storage: "Storage",
    loading: "Loading...", error: "Something went wrong", retry: "Try Again",
    close: "Close", yes: "Yes", no: "No", items: "items", per_page: "Per page",
    page: "Page", of: "of", previous: "Previous", next: "Next",
    save_changes: "Save Changes", saved: "Saved!",
    privacy_policy: "Privacy Policy", terms_of_use: "Terms of Use", cookie_policy: "Cookie Policy",
    trust_shipping: "Free Shipping over $99", trust_secure: "Secure Checkout",
    trust_returns: "Easy Returns", trust_support: "24/7 Support",
    story_cat_1: "Interior Design", story_cat_2: "Craftsmanship", story_cat_3: "Sustainability",
    story_title_1: "The Art of Nordic Minimalism", story_title_2: "Behind the Craft",
    story_title_3: "Our Sustainable Journey",
    story_excerpt_1: "How we distilled centuries of Scandinavian tradition into a single coherent design language.",
    story_excerpt_2: "A journey into the workshops where each NordHjem piece comes to life.",
    story_excerpt_3: "Our commitment to responsible sourcing and carbon-neutral production.",
  },
  zh: {
    nav_home: "首页", nav_shop: "商城", nav_search: "搜索", nav_cart: "购物车",
    nav_signin: "登录", nav_account: "我的账户", nav_signout: "退出登录",
    nav_wishlist: "收藏夹", nav_orders: "我的订单",
    free_shipping_banner: "满$99包邮", handcrafted_banner: "斯堪的纳维亚手工匠造",
    search_placeholder: "搜索商品...",
    hero_subtitle_1: "2026 新品系列", hero_title_1: "简约之中，自有其美",
    hero_desc_1: "北欧匠心家具，经久耐用，为每一个清晨注入灵感。", hero_cta_1: "探索系列",
    hero_subtitle_2: "永恒设计", hero_title_2: "重新定义北欧工艺",
    hero_desc_2: "每一件作品都承载着精准、天然材料与持久美感的故事。", hero_cta_2: "热销推荐",
    hero_subtitle_3: "2026春季", hero_title_3: "将自然带入室内",
    hero_desc_3: "仿生设计元素，让您的空间与自然世界相连。", hero_cta_3: "查看新品",
    section_new_arrivals: "新品上市", section_best_sellers: "热销推荐",
    section_shop_by_room: "按空间选购", section_design_stories: "设计故事",
    shop_all: "查看全部", view_all: "查看全部",
    add_to_cart: "加入购物车", added_to_cart: "已加入购物车", quick_view: "快速预览",
    showing_results: "共 {count} 件商品",
    sort_by: "排序方式", sort_featured: "推荐", sort_price_low: "价格从低到高",
    sort_price_high: "价格从高到低", sort_rating: "评分最高", sort_newest: "最新上架",
    filter_price: "价格范围", filter_brand: "品牌", filter_rating: "评分",
    filter_shipping: "仅看包邮商品", filter_clear: "清除全部", filter_apply: "应用筛选",
    no_results: "未找到相关商品",
    reviews: "条评价", write_review: "写评价", in_stock: "有货",
    out_of_stock: "缺货", quantity: "数量",
    add_to_wishlist: "加入收藏", remove_from_wishlist: "取消收藏",
    free_delivery: "免费配送", delivery_estimate: "预计送达",
    returns_policy: "30天无忧退换",
    tab_description: "商品描述", tab_specs: "规格参数", tab_reviews: "用户评价",
    you_may_also_like: "猜你喜欢", compare: "加入对比",
    cart_title: "购物车", cart_empty: "购物车是空的",
    cart_empty_desc: "看起来你还没有添加任何商品，快去逛逛吧。",
    start_shopping: "去逛逛", continue_shopping: "继续购物",
    subtotal: "小计", shipping: "运费", shipping_free: "免运费",
    shipping_calculated: "结算时计算", tax: "预估税费",
    order_total: "订单总计", promo_code: "优惠码", apply: "使用",
    proceed_checkout: "去结算", remove: "删除",
    free_shipping_progress: "再加 {amount} 即可免运费", free_shipping_earned: "已享受免运费！",
    sign_in: "登录", create_account: "注册", email: "邮箱",
    password: "密码", confirm_password: "确认密码",
    first_name: "名", last_name: "姓", remember_me: "记住我",
    forgot_password: "忘记密码？", or_continue_with: "或通过以下方式",
    agree_terms: "我同意条款与条件", already_have_account: "已有账户？",
    dont_have_account: "还没有账户？", login_success: "欢迎回来！", register_success: "注册成功！",
    forgot_password_title: "重置密码",
    forgot_password_desc: "输入你的邮箱，我们将发送重置链接。",
    send_reset_link: "发送重置链接", back_to_login: "返回登录",
    reset_link_sent: "重置链接已发送，请检查邮箱。",
    checkout_title: "结算", step_shipping: "收货信息",
    step_payment: "支付方式", step_review: "确认订单",
    contact_info: "联系方式", shipping_address: "收货地址",
    address_line1: "详细地址", address_line2: "公寓、门牌号等（选填）",
    city: "城市", state: "省/州", zip: "邮编", country: "国家/地区", phone: "电话",
    shipping_method: "配送方式", shipping_standard: "标准配送",
    shipping_standard_desc: "5-7个工作日", shipping_express: "快速配送",
    shipping_express_desc: "2-3个工作日", shipping_priority: "优先配送",
    shipping_priority_desc: "1-2个工作日",
    continue_to_payment: "继续填写支付信息", continue_to_review: "确认订单信息",
    payment_method: "支付方式", credit_card: "信用卡",
    card_number: "卡号", expiry: "有效期 (MM/YY)", cvc: "安全码",
    cardholder: "持卡人姓名", billing_same: "账单地址与收货地址相同",
    order_summary: "订单摘要", place_order: "提交订单",
    order_confirmed: "下单成功！", order_confirmed_desc: "您的订单已成功提交。",
    order_number: "订单号", back: "返回",
    account_title: "我的账户", account_dashboard: "概览",
    account_orders: "订单", account_addresses: "地址",
    account_wishlist: "收藏夹", account_profile: "个人资料", account_settings: "设置",
    welcome_back: "欢迎回来", recent_orders: "最近订单",
    order_status_processing: "处理中", order_status_shipped: "已发货",
    order_status_delivered: "已送达", order_status_cancelled: "已取消",
    order_date: "下单日期", order_total_label: "金额", view_details: "查看详情",
    tracking_number: "物流单号", add_address: "添加新地址",
    edit: "编辑", delete: "删除", default_address: "默认",
    save: "保存", cancel: "取消", change_password: "修改密码",
    current_password: "当前密码", new_password: "新密码",
    newsletter_pref: "邮件订阅", notification_pref: "通知设置",
    language: "语言", currency: "货币",
    search_results: "搜索结果", search_results_for: "\u201c{query}\u201d 的搜索结果",
    no_search_results: "未找到 \u201c{query}\u201d 的相关结果",
    search_suggestion: "试试其他关键词或浏览我们的分类",
    review_title: "写评价", review_rating: "您的评分",
    review_comment: "评价内容", review_name: "您的昵称",
    review_submit: "提交评价", review_success: "感谢您的评价！",
    review_helpful: "有帮助", verified_purchase: "已购买",
    coupon_center: "优惠券中心", coupon_available: "可领取优惠券",
    coupon_code: "优惠码", coupon_claim: "领取", coupon_claimed: "已领取",
    coupon_expires: "有效期至", coupon_min_order: "最低消费", my_coupons: "我的优惠券",
    faq_title: "帮助中心", faq_search: "有什么可以帮助您？",
    faq_shipping_title: "配送与物流", faq_returns_title: "退换货",
    faq_payment_title: "支付与价格", faq_product_title: "商品信息",
    faq_account_title: "账户与订单",
    about_title: "我们的故事", about_subtitle: "北欧设计哲学",
    sustainability_title: "可持续发展", craftsmanship_title: "匠心工艺",
    contact_title: "联系我们", contact_name: "您的姓名", contact_email: "您的邮箱",
    contact_subject: "主题", contact_message: "留言内容", contact_send: "发送留言",
    contact_sent: "留言已发送，我们将在24小时内回复。",
    contact_phone_label: "电话", contact_email_label: "邮箱",
    contact_hours_label: "工作时间", contact_address_label: "访问我们",
    compare_title: "商品对比", compare_add: "加入对比",
    compare_remove: "移除", compare_empty: "添加商品进行对比",
    compare_max: "最多可对比4件商品",
    page_not_found: "页面未找到",
    page_not_found_desc: "您访问的页面不存在或已被移动。", go_home: "返回首页",
    footer_shop: "商城", footer_about: "关于", footer_help: "帮助", footer_connect: "关注我们",
    footer_our_story: "品牌故事", footer_sustainability: "可持续发展",
    footer_craftsmanship: "匠心工艺", footer_careers: "加入我们",
    footer_contact: "联系我们", footer_faq: "常见问题",
    footer_shipping_returns: "配送与退换", footer_size_guide: "尺寸指南",
    footer_newsletter: "订阅邮件", footer_newsletter_desc: "首单立享9折优惠",
    footer_newsletter_placeholder: "输入邮箱地址", footer_subscribe: "订阅",
    footer_rights: "版权所有",
    cat_living_room: "客厅", cat_bedroom: "卧室", cat_dining: "餐厅",
    cat_office: "办公", cat_lighting: "灯具", cat_decor: "装饰",
    cat_outdoor: "户外", cat_storage: "收纳",
    loading: "加载中...", error: "出了点问题", retry: "重试",
    close: "关闭", yes: "是", no: "否", items: "件商品", per_page: "每页显示",
    page: "第", of: "/", previous: "上一页", next: "下一页",
    save_changes: "保存更改", saved: "已保存！",
    privacy_policy: "隐私政策", terms_of_use: "使用条款", cookie_policy: "Cookie 政策",
    trust_shipping: "满$99包邮", trust_secure: "安全结算",
    trust_returns: "轻松退换", trust_support: "全天候支持",
    story_cat_1: "室内设计", story_cat_2: "工艺精髓", story_cat_3: "可持续",
    story_title_1: "北欧极简艺术", story_title_2: "匠心背后", story_title_3: "我们的可持续之旅",
    story_excerpt_1: "我们如何将几个世纪的斯堪的纳维亚传统提炼为一种统一的设计语言。",
    story_excerpt_2: "走进每件NordHjem作品诞生的工坊。",
    story_excerpt_3: "我们对负责任采购和碳中和生产的承诺。",
  }
};

/* ============================================================
   HELPERS
   ============================================================ */
let currentLang = 'en';
function t(key, params) {
  let text = I18N[currentLang]?.[key] || I18N['en']?.[key] || key;
  if (params) Object.keys(params).forEach(k => { text = text.replace(`{${k}}`, params[k]); });
  return text;
}
function p(field) {
  if (!field) return '';
  if (typeof field === 'string') return field;
  return field[currentLang] || field['en'] || '';
}
function esc(s) {
  return String(s || '').replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function formatPrice(n) { return '$' + Number(n).toFixed(2); }

function showToast(msg, type = '') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = 'toast' + (type ? ' toast-' + type : '');
  toast.textContent = msg;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.animation = 'toastOut 0.3s ease forwards';
    setTimeout(() => toast.remove(), 300);
  }, 2800);
}

function renderStars(rating) {
  let html = '<span class="stars">';
  for (let i = 1; i <= 5; i++) {
    if (rating >= i) html += '★';
    else if (rating >= i - 0.5) html += '½';
    else html += '☆';
  }
  html += '</span>';
  return html;
}

/* ============================================================
   APP STATE
   ============================================================ */
let cart = [];
let wishlist = [];
let compareList = [];
let currentUser = null;
let orders = [];
let addresses = [];
let claimedCoupons = [];
let appliedPromo = null;
let accountSection = 'dashboard';
let checkoutStep = 1;
let checkoutData = {};

/* ============================================================
   ROUTER
   ============================================================ */
function getRoute() {
  const hash = window.location.hash || '#/';
  const [path, query] = hash.split('?');
  const parts = path.replace('#/', '').split('/');
  return { path, query: query || '', parts };
}

function navigate(hash) {
  window.location.hash = hash;
}

function renderApp() {
  const { path, parts } = getRoute();
  const app = document.getElementById('app');

  // Always render header + footer
  let pageHTML = '';

  if (path === '#/' || path === '#') {
    pageHTML = renderHomepage();
  } else if (parts[0] === 'category') {
    const catName = decodeURIComponent(parts.slice(1).join('/'));
    pageHTML = renderPLP(catName);
  } else if (parts[0] === 'product' && parts[1]) {
    pageHTML = renderPDP(parseInt(parts[1]));
  } else if (parts[0] === 'cart') {
    pageHTML = renderCart();
  } else if (parts[0] === 'auth') {
    pageHTML = renderAuth();
  } else if (parts[0] === 'forgot-password') {
    pageHTML = renderForgotPassword();
  } else if (parts[0] === 'checkout') {
    pageHTML = renderCheckout();
  } else if (parts[0] === 'account') {
    pageHTML = renderAccount();
  } else if (parts[0] === 'search') {
    const qParam = getRoute().query;
    const q = qParam ? decodeURIComponent(qParam.replace('q=', '')) : '';
    pageHTML = renderSearch(q);
  } else if (parts[0] === 'order' && parts[1]) {
    pageHTML = renderOrderDetail(parts[1]);
  } else if (parts[0] === 'coupons') {
    pageHTML = renderCoupons();
  } else if (parts[0] === 'faq') {
    pageHTML = renderFAQ();
  } else if (parts[0] === 'about') {
    pageHTML = renderAbout();
  } else if (parts[0] === 'contact') {
    pageHTML = renderContact();
  } else if (parts[0] === 'compare') {
    pageHTML = renderCompare();
  } else {
    pageHTML = render404();
  }

  app.innerHTML = renderHeader() + '<main>' + pageHTML + '</main>' + renderFooter();
  initComponents();
  window.scrollTo({ top: 0, behavior: 'instant' });
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initBackToTop();
}

/* ============================================================
   CATEGORY CONFIG
   ============================================================ */
const CATEGORIES = [
  { key: 'Living Room', i18n: 'cat_living_room', icon: '🛋️',
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=800&fit=crop' },
  { key: 'Bedroom', i18n: 'cat_bedroom', icon: '🛏️',
    image: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&h=800&fit=crop' },
  { key: 'Dining', i18n: 'cat_dining', icon: '🍽️',
    image: 'https://images.unsplash.com/photo-1615968679312-9b7ed9f04e79?w=600&h=800&fit=crop' },
  { key: 'Office', i18n: 'cat_office', icon: '💼',
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=800&fit=crop' },
  { key: 'Lighting', i18n: 'cat_lighting', icon: '💡',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=600&h=800&fit=crop' },
  { key: 'Decor', i18n: 'cat_decor', icon: '🏺',
    image: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=600&h=800&fit=crop' },
  { key: 'Outdoor', i18n: 'cat_outdoor', icon: '🌿',
    image: 'https://images.unsplash.com/photo-1600210492493-0946911123ea?w=600&h=800&fit=crop' },
  { key: 'Storage', i18n: 'cat_storage', icon: '📦',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=800&fit=crop' },
];

/* ============================================================
   HEADER
   ============================================================ */
function renderHeader() {
  const cartCount = cart.reduce((s, i) => s + i.qty, 0);
  const isLoggedIn = !!currentUser;
  return `
<header class="site-header" id="site-header">
  <div class="header-topbar">
    <span class="topbar-item"><i data-lucide="truck" style="display:inline-block;width:14px;height:14px;vertical-align:middle;margin-right:4px;"></i>${t('free_shipping_banner')}</span>
    <span class="topbar-item">✦</span>
    <span class="topbar-item">${t('handcrafted_banner')}</span>
  </div>
  <div class="header-main">
    <a class="header-logo" href="#/" onclick="navigate('#/');return false;">NordHjem</a>
    <nav class="header-nav">
      <a class="nav-link" onclick="navigate('#/');">${t('nav_home')}</a>
      <div class="nav-dropdown">
        <a class="nav-link">${t('nav_shop')} ▾</a>
        <div class="nav-dropdown-menu">
          ${CATEGORIES.map(c => `
          <div class="dropdown-cat-item" onclick="navigate('#/category/${encodeURIComponent(c.key)}');">
            <div class="dropdown-cat-icon">${c.icon}</div>
            <span class="dropdown-cat-name">${t(c.i18n)}</span>
          </div>`).join('')}
        </div>
      </div>
    </nav>
    <div class="header-actions">
      <div class="lang-switcher">
        <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="setLang('en')">EN</button>
        <button class="lang-btn ${currentLang === 'zh' ? 'active' : ''}" onclick="setLang('zh')">中文</button>
      </div>
      <button class="header-action-btn" onclick="toggleSearch()" aria-label="${t('nav_search')}">
        <i data-lucide="search"></i>
      </button>
      ${isLoggedIn ? `
      <div class="user-dropdown">
        <button class="header-action-btn" aria-label="${t('nav_account')}">
          <i data-lucide="user"></i>
        </button>
        <div class="user-dropdown-menu">
          <div class="user-dropdown-item" onclick="navigate('#/account');">
            <i data-lucide="user"></i> ${t('nav_account')}
          </div>
          <div class="user-dropdown-item" onclick="navigate('#/account'); accountSection='orders';">
            <i data-lucide="package"></i> ${t('nav_orders')}
          </div>
          <div class="user-dropdown-item" onclick="navigate('#/account'); accountSection='wishlist';">
            <i data-lucide="heart"></i> ${t('nav_wishlist')}
          </div>
          <hr class="user-dropdown-divider">
          <div class="user-dropdown-item" onclick="doSignOut();">
            <i data-lucide="log-out"></i> ${t('nav_signout')}
          </div>
        </div>
      </div>` : `
      <button class="header-action-btn" onclick="navigate('#/auth');" aria-label="${t('nav_signin')}">
        <i data-lucide="user"></i>
      </button>`}
      <button class="header-action-btn" onclick="navigate('#/cart');" aria-label="${t('nav_cart')}" style="position:relative;">
        <i data-lucide="shopping-bag"></i>
        ${cartCount > 0 ? `<span class="cart-badge">${cartCount}</span>` : ''}
      </button>
      <button class="hamburger" onclick="openMobileMenu()" aria-label="Menu">
        <i data-lucide="menu"></i>
      </button>
    </div>
  </div>
</header>

<!-- Mobile Menu -->
<div class="mobile-menu" id="mobile-menu" onclick="closeMobileMenu(event)">
  <div class="mobile-menu-panel">
    <div class="mobile-menu-header">
      <span style="font-family:var(--font-display);font-size:1.4rem;color:var(--primary)">NordHjem</span>
      <button class="mobile-menu-close" onclick="closeMobileMenuDirect()"><i data-lucide="x"></i></button>
    </div>
    <div class="lang-switcher" style="margin-bottom:var(--space-5)">
      <button class="lang-btn ${currentLang === 'en' ? 'active' : ''}" onclick="setLang('en')">EN</button>
      <button class="lang-btn ${currentLang === 'zh' ? 'active' : ''}" onclick="setLang('zh')">中文</button>
    </div>
    <div class="mobile-nav-link" onclick="navigate('#/');closeMobileMenuDirect();">
      <i data-lucide="home"></i> ${t('nav_home')}
    </div>
    ${CATEGORIES.map(c => `
    <div class="mobile-nav-link" onclick="navigate('#/category/${encodeURIComponent(c.key)}');closeMobileMenuDirect();">
      <span>${c.icon}</span> ${t(c.i18n)}
    </div>`).join('')}
    <div class="mobile-nav-divider"></div>
    <div class="mobile-nav-link" onclick="navigate('#/cart');closeMobileMenuDirect();">
      <i data-lucide="shopping-bag"></i> ${t('nav_cart')} ${cartCount > 0 ? `(${cartCount})` : ''}
    </div>
    ${isLoggedIn ? `
    <div class="mobile-nav-link" onclick="navigate('#/account');closeMobileMenuDirect();">
      <i data-lucide="user"></i> ${t('nav_account')}
    </div>
    <div class="mobile-nav-link" onclick="doSignOut();closeMobileMenuDirect();">
      <i data-lucide="log-out"></i> ${t('nav_signout')}
    </div>` : `
    <div class="mobile-nav-link" onclick="navigate('#/auth');closeMobileMenuDirect();">
      <i data-lucide="user"></i> ${t('nav_signin')}
    </div>`}
    <div class="mobile-nav-divider"></div>
    <div class="mobile-nav-link" onclick="navigate('#/faq');closeMobileMenuDirect();">
      <i data-lucide="help-circle"></i> ${t('faq_title')}
    </div>
    <div class="mobile-nav-link" onclick="navigate('#/contact');closeMobileMenuDirect();">
      <i data-lucide="mail"></i> ${t('contact_title')}
    </div>
  </div>
</div>

<!-- Search Overlay -->
<div class="search-overlay" id="search-overlay" onclick="closeSearch(event)">
  <div class="search-box">
    <div class="search-input-row">
      <i data-lucide="search"></i>
      <input class="search-input-field" id="search-field" type="text"
        placeholder="${t('search_placeholder')}"
        onkeydown="handleSearchKey(event)">
      <button onclick="closeSearchDirect()" style="color:var(--text-muted);padding:4px;">
        <i data-lucide="x" style="width:20px;height:20px;display:block;"></i>
      </button>
    </div>
  </div>
</div>`;
}

/* ============================================================
   FOOTER
   ============================================================ */
function renderFooter() {
  return `
<footer class="site-footer">
  <div class="footer-grid">
    <div class="footer-brand-col">
      <span class="footer-logo">NordHjem</span>
      <p class="footer-brand-tagline">Scandinavian design for modern living. Crafted with care, built to last.</p>
      <div class="payment-icons">
        <span class="payment-icon">VISA</span>
        <span class="payment-icon">MC</span>
        <span class="payment-icon">AMEX</span>
        <span class="payment-icon">PayPal</span>
        <span class="payment-icon">ApplePay</span>
      </div>
    </div>
    <div>
      <p class="footer-heading">${t('footer_shop')}</p>
      <div class="footer-links">
        ${CATEGORIES.map(c => `<a class="footer-link" onclick="navigate('#/category/${encodeURIComponent(c.key)}')">${t(c.i18n)}</a>`).join('')}
      </div>
    </div>
    <div>
      <p class="footer-heading">${t('footer_about')}</p>
      <div class="footer-links">
        <a class="footer-link" onclick="navigate('#/about')">${t('footer_our_story')}</a>
        <a class="footer-link" onclick="navigate('#/about')">${t('footer_sustainability')}</a>
        <a class="footer-link" onclick="navigate('#/about')">${t('footer_craftsmanship')}</a>
        <a class="footer-link" onclick="navigate('#/about')">${t('footer_careers')}</a>
      </div>
      <p class="footer-heading" style="margin-top:var(--space-6)">${t('footer_help')}</p>
      <div class="footer-links">
        <a class="footer-link" onclick="navigate('#/contact')">${t('footer_contact')}</a>
        <a class="footer-link" onclick="navigate('#/faq')">${t('footer_faq')}</a>
        <a class="footer-link" onclick="navigate('#/faq')">${t('footer_shipping_returns')}</a>
        <a class="footer-link" onclick="navigate('#/faq')">${t('footer_size_guide')}</a>
      </div>
    </div>
    <div>
      <p class="footer-heading">${t('footer_connect')}</p>
      <p style="font-size:var(--text-sm);color:rgba(255,255,255,0.7);margin-bottom:var(--space-2)">${t('footer_newsletter_desc')}</p>
      <div class="newsletter-form">
        <input class="newsletter-input" type="email" placeholder="${t('footer_newsletter_placeholder')}" id="footer-email">
        <button class="newsletter-btn" onclick="subscribeNewsletter()">${t('footer_subscribe')}</button>
      </div>
      <div class="footer-links" style="margin-top:var(--space-5)">
        <a class="footer-link" onclick="navigate('#/coupons')">${t('coupon_center')}</a>
        <a class="footer-link" onclick="navigate('#/compare')">${t('compare_title')}</a>
      </div>
    </div>
  </div>
  <hr class="footer-divider">
  <div class="footer-bottom">
    <span class="footer-copyright">© 2026 NordHjem. ${t('footer_rights')}</span>
    <div class="footer-legal-links">
      <a class="footer-legal-link">${t('privacy_policy')}</a>
      <a class="footer-legal-link">${t('terms_of_use')}</a>
      <a class="footer-legal-link">${t('cookie_policy')}</a>
    </div>
  </div>
</footer>`;
}

/* ============================================================
   PRODUCT CARD
   ============================================================ */
function renderProductCard(product) {
  const isWishlisted = wishlist.includes(product.id);
  const isCompared = compareList.includes(product.id);
  const hasDiscount = product.discount > 0;
  const badgesHTML = (product.badges || []).map(b => {
    const cls = b === 'Sale' ? 'badge-sale' : b === 'New' ? 'badge-new' : b === 'Best Seller' ? 'badge-best' : 'badge-default';
    const label = b === 'Sale' ? `${product.discount}% OFF` : (currentLang === 'zh' ? (b === 'New' ? '新品' : b === 'Best Seller' ? '热销' : b) : b);
    return `<span class="badge ${cls}">${label}</span>`;
  }).join('');

  const colorNames = Array.isArray(product.colorNames?.en) ? product.colorNames : null;
  const colors = product.colors || [];

  return `
<div class="product-card" onclick="navigate('#/product/${product.id}')">
  <div class="product-card-image-wrap">
    <img class="product-card-img" src="${esc(product.image)}" alt="${esc(p(product.name))}" loading="lazy"
         onerror="this.src='https://picsum.photos/seed/p${product.id}/600/600'">
    ${badgesHTML ? `<div class="product-card-badges">${badgesHTML}</div>` : ''}
    <button class="product-card-wishlist ${isWishlisted ? 'wishlisted' : ''}"
      onclick="event.stopPropagation();toggleWishlist(${product.id})"
      aria-label="${t('add_to_wishlist')}">
      <i data-lucide="heart" style="fill:${isWishlisted ? 'var(--sale)' : 'none'}"></i>
    </button>
    <button class="product-card-compare ${isCompared ? 'compared' : ''}"
      onclick="event.stopPropagation();toggleCompare(${product.id})">
      <i data-lucide="bar-chart-2" style="width:10px;height:10px;display:inline-block"></i>
      ${t('compare')}
    </button>
    <button class="product-card-atc" onclick="event.stopPropagation();addToCart(${product.id})">
      ${t('add_to_cart')}
    </button>
  </div>
  <div class="product-card-body">
    <p class="product-card-brand">${esc(product.brand)}</p>
    <h3 class="product-card-name">${esc(p(product.name))}</h3>
    <div class="product-card-rating">
      ${renderStars(product.rating)}
      <span class="rating-count">(${product.reviewCount})</span>
    </div>
    <div class="product-card-price">
      <span class="price-current ${hasDiscount ? 'sale' : ''}">${formatPrice(product.price)}</span>
      ${hasDiscount ? `<span class="price-original">${formatPrice(product.originalPrice)}</span>
        <span class="price-discount">-${product.discount}%</span>` : ''}
    </div>
    ${colors.length > 0 ? `<div class="product-card-colors">${colors.map(c => `<div class="color-swatch" style="background:${c}" title="${c}"></div>`).join('')}</div>` : ''}
  </div>
</div>`;
}


/* ============================================================
   HOMEPAGE
   ============================================================ */
function renderHomepage() {
  const heroSlides = [
    { img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&h=600&fit=crop',
      sub: t('hero_subtitle_1'), title: t('hero_title_1'), desc: t('hero_desc_1'), cta: t('hero_cta_1'), link: '#/category/Living Room' },
    { img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&h=600&fit=crop',
      sub: t('hero_subtitle_2'), title: t('hero_title_2'), desc: t('hero_desc_2'), cta: t('hero_cta_2'), link: '#/category/Bedroom' },
    { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&h=600&fit=crop',
      sub: t('hero_subtitle_3'), title: t('hero_title_3'), desc: t('hero_desc_3'), cta: t('hero_cta_3'), link: '#/category/Outdoor' },
  ];

  const newArrivals = PRODUCTS.filter(pr => (pr.badges||[]).includes('New')).slice(0,12);
  const bestSellers = PRODUCTS.filter(pr => (pr.badges||[]).some(b => b === 'Best Seller' || b === 'Best Seller')).slice(0,8);
  const featured8 = PRODUCTS.slice(0, 8);

  return `
<!-- Hero Carousel -->
<section class="hero" id="hero">
  <div class="hero-slides" id="hero-slides">
    ${heroSlides.map((slide, i) => `
    <div class="hero-slide">
      <img class="hero-image" src="${slide.img}" alt="${esc(slide.title)}" loading="${i===0?'eager':'lazy'}">
      <div class="hero-content">
        <div class="hero-text">
          <p class="hero-eyebrow">${esc(slide.sub)}</p>
          <h1 class="hero-title">${esc(slide.title)}</h1>
          <p class="hero-desc">${esc(slide.desc)}</p>
          <a class="hero-cta" onclick="navigate('${slide.link}');">${esc(slide.cta)}</a>
        </div>
      </div>
    </div>`).join('')}
  </div>
  <button class="hero-arrow prev" onclick="heroSlide(-1)" aria-label="Previous">
    <i data-lucide="chevron-left"></i>
  </button>
  <button class="hero-arrow next" onclick="heroSlide(1)" aria-label="Next">
    <i data-lucide="chevron-right"></i>
  </button>
  <div class="hero-controls" id="hero-dots">
    ${heroSlides.map((_, i) => `<button class="hero-dot ${i===0?'active':''}" onclick="goToSlide(${i})" aria-label="Slide ${i+1}"></button>`).join('')}
  </div>
</section>

<!-- Trust Bar -->
<section class="trust-bar">
  <div class="trust-bar-inner">
    <div class="trust-item"><i data-lucide="truck"></i><span>${t('trust_shipping')}</span></div>
    <div class="trust-item"><i data-lucide="shield-check"></i><span>${t('trust_secure')}</span></div>
    <div class="trust-item"><i data-lucide="refresh-cw"></i><span>${t('trust_returns')}</span></div>
    <div class="trust-item"><i data-lucide="headphones"></i><span>${t('trust_support')}</span></div>
  </div>
</section>

<!-- New Arrivals -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">${t('section_new_arrivals')}</h2>
      <a class="btn btn-ghost btn-sm" onclick="navigate('#/category/Living Room');">${t('view_all')}</a>
    </div>
    <div class="product-row-scroll">
      ${(newArrivals.length > 0 ? newArrivals : PRODUCTS.slice(0,12)).map(pr => renderProductCard(pr)).join('')}
    </div>
  </div>
</section>

<!-- Best Sellers -->
<section class="section" style="background:var(--surface-2);padding-top:var(--space-16);padding-bottom:var(--space-16)">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">${t('section_best_sellers')}</h2>
      <a class="btn btn-ghost btn-sm" onclick="navigate('#/category/Living Room');">${t('shop_all')}</a>
    </div>
    <div class="products-grid">
      ${(bestSellers.length > 0 ? bestSellers : PRODUCTS.slice(12,20)).map(pr => renderProductCard(pr)).join('')}
    </div>
  </div>
</section>

<!-- Shop by Room -->
<section class="section">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">${t('section_shop_by_room')}</h2>
    </div>
    <div class="room-grid">
      ${CATEGORIES.map(c => `
      <div class="room-card" onclick="navigate('#/category/${encodeURIComponent(c.key)}');">
        <img src="${c.image}" alt="${t(c.i18n)}" loading="lazy"
             onerror="this.src='https://picsum.photos/seed/${c.key}/600/800'">
        <div class="room-card-label">
          <h3>${t(c.i18n)}</h3>
          <span>${t('shop_all')}</span>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Design Stories -->
<section class="section" style="background:var(--surface-2)">
  <div class="container">
    <div class="section-header">
      <h2 class="section-title">${t('section_design_stories')}</h2>
    </div>
    <div class="stories-grid">
      ${[
        { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop', cat: t('story_cat_1'), title: t('story_title_1'), excerpt: t('story_excerpt_1') },
        { img: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=400&fit=crop', cat: t('story_cat_2'), title: t('story_title_2'), excerpt: t('story_excerpt_2') },
        { img: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=600&h=400&fit=crop', cat: t('story_cat_3'), title: t('story_title_3'), excerpt: t('story_excerpt_3') },
      ].map(s => `
      <div class="story-card" onclick="navigate('#/about');">
        <div class="story-card-image"><img src="${s.img}" alt="${esc(s.title)}" loading="lazy"></div>
        <div class="story-card-body">
          <p class="story-category">${esc(s.cat)}</p>
          <h3 class="story-card-title">${esc(s.title)}</h3>
          <p class="story-card-excerpt">${esc(s.excerpt)}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Newsletter Section -->
<section class="newsletter-section">
  <div class="container">
    <h2 class="section-title">${t('footer_newsletter')}</h2>
    <p>${t('footer_newsletter_desc')}</p>
    <div class="newsletter-form-inline">
      <input type="email" placeholder="${t('footer_newsletter_placeholder')}" id="nl-email" class="input">
      <button class="btn btn-accent" onclick="subscribeNewsletter()">${t('footer_subscribe')}</button>
    </div>
  </div>
</section>`;
}

/* ============================================================
   PLP — Product Listing
   ============================================================ */
let plpFilters = { priceMin: 0, priceMax: 99999, brands: [], rating: 0, freeShipping: false };
let plpSort = 'featured';
let plpPage = 1;
const PLP_PER_PAGE = 24;

function renderPLP(catName) {
  // Detect page from URL query
  const queryStr = getRoute().query;
  const pageMatch = queryStr.match(/page=(\d+)/);
  if (pageMatch) plpPage = parseInt(pageMatch[1]);
  else plpPage = 1;

  const allCat = PRODUCTS.filter(pr => pr.category === catName);
  const allBrands = [...new Set(allCat.map(pr => pr.brand))].sort();

  let filtered = allCat.filter(pr => {
    if (pr.price < plpFilters.priceMin || pr.price > plpFilters.priceMax) return false;
    if (plpFilters.brands.length > 0 && !plpFilters.brands.includes(pr.brand)) return false;
    if (plpFilters.rating > 0 && pr.rating < plpFilters.rating) return false;
    return true;
  });

  // Sort
  if (plpSort === 'price_low')  filtered.sort((a,b) => a.price - b.price);
  else if (plpSort === 'price_high') filtered.sort((a,b) => b.price - a.price);
  else if (plpSort === 'rating') filtered.sort((a,b) => b.rating - a.rating);
  else if (plpSort === 'newest') filtered.sort((a,b) => b.id - a.id);

  const totalPages = Math.ceil(filtered.length / PLP_PER_PAGE);
  const pageProducts = filtered.slice((plpPage-1)*PLP_PER_PAGE, plpPage*PLP_PER_PAGE);

  const catObj = CATEGORIES.find(c => c.key === catName);
  const catLabel = catObj ? t(catObj.i18n) : catName;

  return `
<!-- PLP Header -->
<div class="plp-header">
  <div class="container">
    <div class="breadcrumb">
      <a onclick="navigate('#/');">${t('nav_home')}</a>
      <span class="sep">›</span>
      <span class="current">${esc(catLabel)}</span>
    </div>
    <h1 class="plp-title">${esc(catLabel)}</h1>
    <p style="color:var(--text-secondary);font-size:var(--text-sm)">${t('showing_results', {count: filtered.length})}</p>
  </div>
</div>

<div class="container">
  <div class="plp-layout">
    <!-- Sidebar -->
    <aside class="filter-sidebar" id="filter-sidebar">
      ${renderFilterSidebar(allBrands)}
    </aside>

    <!-- Main -->
    <div>
      <!-- Sort bar -->
      <div class="plp-sort-bar">
        <p class="plp-count">${t('showing_results', {count: filtered.length})}</p>
        <div style="display:flex;align-items:center;gap:var(--space-3);flex-wrap:wrap;">
          <button class="filter-mobile-btn" onclick="openFilterDrawer()">
            <i data-lucide="sliders-horizontal" style="width:16px;height:16px;display:inline-block;"></i>
            ${t('filter_apply')}
          </button>
          <select class="sort-select" onchange="plpSort=this.value;renderPLPInPlace('${esc(catName)}')">
            <option value="featured" ${plpSort==='featured'?'selected':''}>${t('sort_featured')}</option>
            <option value="price_low" ${plpSort==='price_low'?'selected':''}>${t('sort_price_low')}</option>
            <option value="price_high" ${plpSort==='price_high'?'selected':''}>${t('sort_price_high')}</option>
            <option value="rating" ${plpSort==='rating'?'selected':''}>${t('sort_rating')}</option>
            <option value="newest" ${plpSort==='newest'?'selected':''}>${t('sort_newest')}</option>
          </select>
        </div>
      </div>

      <!-- Grid -->
      ${pageProducts.length > 0
        ? `<div class="products-grid">${pageProducts.map(pr => renderProductCard(pr)).join('')}</div>`
        : `<div style="text-align:center;padding:var(--space-16);color:var(--text-muted)">
             <i data-lucide="search" style="width:48px;height:48px;margin-bottom:var(--space-4);display:block;margin-left:auto;margin-right:auto;"></i>
             <p>${t('no_results')}</p>
           </div>`}

      <!-- Pagination -->
      ${totalPages > 1 ? renderPagination(plpPage, totalPages, catName) : ''}
    </div>
  </div>
</div>

<!-- Filter Drawer (mobile) -->
<div class="filter-drawer" id="filter-drawer" onclick="closeFilterDrawerOutside(event)">
  <div class="filter-drawer-panel">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-5)">
      <strong>${t('filter_apply')}</strong>
      <button onclick="closeFilterDrawer()" style="cursor:pointer;background:none;border:none;color:var(--text-muted)">
        <i data-lucide="x"></i>
      </button>
    </div>
    ${renderFilterSidebar(allBrands)}
  </div>
</div>`;
}

function renderFilterSidebar(allBrands) {
  return `
  <div class="filter-section">
    <div class="filter-section-header">
      <span>${t('filter_price')}</span>
    </div>
    <div class="price-range-inputs">
      <input type="number" placeholder="Min $" value="${plpFilters.priceMin||''}"
        oninput="plpFilters.priceMin=+this.value||0"
        style="padding:8px;border:1.5px solid var(--border-strong);border-radius:var(--radius-md);width:100%;font-size:var(--text-sm);outline:none;">
      <input type="number" placeholder="Max $" value="${plpFilters.priceMax<99999?plpFilters.priceMax:''}"
        oninput="plpFilters.priceMax=+this.value||99999"
        style="padding:8px;border:1.5px solid var(--border-strong);border-radius:var(--radius-md);width:100%;font-size:var(--text-sm);outline:none;">
    </div>
  </div>
  <div class="filter-section">
    <div class="filter-section-header"><span>${t('filter_brand')}</span></div>
    <div class="filter-checkbox-list">
      ${allBrands.slice(0,10).map(b => `
      <label class="filter-checkbox">
        <input type="checkbox" ${plpFilters.brands.includes(b)?'checked':''}
          onchange="toggleBrandFilter('${esc(b)}')">
        ${esc(b)}
      </label>`).join('')}
    </div>
  </div>
  <div class="filter-section">
    <div class="filter-section-header"><span>${t('filter_rating')}</span></div>
    ${[4,3,2,1].map(r => `
    <label class="rating-filter-row ${plpFilters.rating===r?'active':''}">
      <input type="radio" name="ratingFilter" ${plpFilters.rating===r?'checked':''}
        onchange="plpFilters.rating=${r}" style="accent-color:var(--primary)">
      ${renderStars(r)} <span style="font-size:var(--text-xs);color:var(--text-muted)">&amp; up</span>
    </label>`).join('')}
  </div>
  <div class="filter-section">
    <label class="filter-toggle" onclick="plpFilters.freeShipping=!plpFilters.freeShipping">
      <div class="toggle-switch ${plpFilters.freeShipping?'on':''}"></div>
      <span style="font-size:var(--text-sm)">${t('filter_shipping')}</span>
    </label>
  </div>
  <div class="filter-actions">
    <button class="btn btn-primary btn-sm" style="flex:1" onclick="applyFilters()">${t('filter_apply')}</button>
    <button class="btn btn-ghost btn-sm" onclick="clearFilters()">${t('filter_clear')}</button>
  </div>`;
}

function renderPagination(current, total, catName) {
  const pages = [];
  if (total <= 7) {
    for (let i = 1; i <= total; i++) pages.push(i);
  } else {
    pages.push(1);
    if (current > 3) pages.push('...');
    for (let i = Math.max(2, current-1); i <= Math.min(total-1, current+1); i++) pages.push(i);
    if (current < total-2) pages.push('...');
    pages.push(total);
  }

  return `
<div class="pagination">
  <button class="page-btn" ${current===1?'disabled':''} onclick="goToPage(${current-1},'${esc(catName)}')">
    ‹ ${t('previous')}
  </button>
  ${pages.map(p => p === '...'
    ? `<span class="page-btn" style="pointer-events:none;border:none">…</span>`
    : `<button class="page-btn ${p===current?'active':''}" onclick="goToPage(${p},'${esc(catName)}')">${p}</button>`
  ).join('')}
  <button class="page-btn" ${current===total?'disabled':''} onclick="goToPage(${current+1},'${esc(catName)}')">
    ${t('next')} ›
  </button>
</div>`;
}

/* ============================================================
   PDP — Product Detail
   ============================================================ */
let pdpState = { imgIdx: 0, qty: 1, colorIdx: 0, tab: 'description', reviewRating: 5 };

function renderPDP(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return render404();

  const related = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id).slice(0,8);
  const images = product.images || [product.image];
  const colorNames = product.colorNames ? (product.colorNames[currentLang] || product.colorNames.en || []) : [];
  const colors = product.colors || [];
  const isWishlisted = wishlist.includes(product.id);
  const hasDiscount = product.discount > 0;
  const catObj = CATEGORIES.find(c => c.key === product.category);

  // Generate mock reviews
  const mockReviews = generateMockReviews(product);

  return `
<div class="container">
  <div style="padding:var(--space-6) 0 0">
    <div class="breadcrumb">
      <a onclick="navigate('#/');">${t('nav_home')}</a>
      <span class="sep">›</span>
      <a onclick="navigate('#/category/${encodeURIComponent(product.category)}')">${catObj ? t(catObj.i18n) : product.category}</a>
      <span class="sep">›</span>
      <span class="current">${esc(p(product.name))}</span>
    </div>
  </div>

  <div class="pdp-layout">
    <!-- Gallery -->
    <div class="pdp-gallery">
      <div class="pdp-main-image">
        <img id="pdp-main-img"
             src="${esc(images[0])}" alt="${esc(p(product.name))}"
             onerror="this.src='https://picsum.photos/seed/pd${product.id}/600/600'">
      </div>
      <div class="pdp-thumbnails">
        ${images.slice(0,8).map((img,i) => `
        <div class="pdp-thumb ${i===0?'active':''}" onclick="switchPDPImage('${esc(img)}',this)">
          <img src="${esc(img)}" alt="" loading="lazy"
               onerror="this.src='https://picsum.photos/seed/th${product.id}${i}/600/600'">
        </div>`).join('')}
      </div>
    </div>

    <!-- Info -->
    <div class="pdp-info">
      <p class="pdp-brand">${esc(product.brand)}</p>
      <h1 class="pdp-name">${esc(p(product.name))}</h1>

      <div class="pdp-rating">
        ${renderStars(product.rating)}
        <span style="font-size:var(--text-sm);font-weight:600">${product.rating}</span>
        <span style="font-size:var(--text-sm);color:var(--text-muted)">(${product.reviewCount} ${t('reviews')})</span>
        <button class="pdp-write-review" onclick="switchTab('reviews')">${t('write_review')}</button>
      </div>

      <div class="pdp-price">
        <span class="price-current ${hasDiscount?'sale':''}" style="font-size:var(--text-2xl);font-weight:700">${formatPrice(product.price)}</span>
        ${hasDiscount ? `
        <span class="price-original" style="font-size:var(--text-lg)">${formatPrice(product.originalPrice)}</span>
        <span class="price-discount">-${product.discount}%</span>` : ''}
      </div>

      <div class="pdp-divider"></div>

      ${colors.length > 0 ? `
      <div style="margin-bottom:var(--space-5)">
        <p class="pdp-label" id="pdp-color-label">${colorNames[0] || ''}</p>
        <div class="pdp-colors">
          ${colors.map((c,i) => `
          <div class="pdp-color-swatch ${i===0?'active':''}" style="background:${c}"
            title="${colorNames[i]||c}"
            onclick="selectPDPColor(this,${i},${JSON.stringify(colorNames)})">
          </div>`).join('')}
        </div>
      </div>` : ''}

      <div>
        <p class="pdp-label">${t('quantity')}</p>
        <div class="quantity-selector" style="margin-bottom:var(--space-5)">
          <button class="qty-btn" onclick="changePDPQty(-1)">−</button>
          <input class="qty-input" type="number" id="pdp-qty" value="1" min="1" max="99">
          <button class="qty-btn" onclick="changePDPQty(1)">+</button>
        </div>
      </div>

      <div class="pdp-actions">
        <button class="btn btn-primary btn-lg" onclick="addToCartPDP(${product.id})">
          <i data-lucide="shopping-bag" style="width:18px;height:18px;display:inline-block"></i>
          ${t('add_to_cart')}
        </button>
        <button class="btn btn-ghost btn-lg ${isWishlisted?'btn-primary':''}"
          id="pdp-wishlist-btn"
          onclick="toggleWishlistPDP(${product.id})"
          aria-label="${t('add_to_wishlist')}">
          <i data-lucide="heart" style="width:18px;height:18px;display:inline-block;fill:${isWishlisted?'white':'none'}"></i>
        </button>
      </div>

      <button class="btn btn-ghost btn-sm" onclick="toggleCompare(${product.id})" style="margin-bottom:var(--space-5)">
        <i data-lucide="bar-chart-2" style="width:14px;height:14px;display:inline-block"></i>
        ${t('compare')}
      </button>

      <div class="pdp-delivery-box">
        <div class="pdp-delivery-row">
          <i data-lucide="truck"></i>
          <span><strong>${t('free_delivery')}</strong> — ${t('delivery_estimate')} ${product.delivery || '3-5 days'}</span>
        </div>
        <div class="pdp-delivery-row">
          <i data-lucide="refresh-cw"></i>
          <span>${t('returns_policy')}</span>
        </div>
        <div class="pdp-delivery-row">
          <i data-lucide="shield-check"></i>
          <span>${currentLang === 'zh' ? '安全支付保障' : 'Secure payment guaranteed'}</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Tabs -->
  <div class="pdp-tabs">
    <div class="tabs-nav">
      <button class="tab-btn active" onclick="switchTab('description')" id="tab-description">${t('tab_description')}</button>
      <button class="tab-btn" onclick="switchTab('specs')" id="tab-specs">${t('tab_specs')}</button>
      <button class="tab-btn" onclick="switchTab('reviews')" id="tab-reviews">${t('tab_reviews')} (${product.reviewCount})</button>
    </div>
    <div class="tab-panel active" id="panel-description">
      <p style="font-size:var(--text-md);line-height:1.8;color:var(--text-secondary);max-width:75ch">${esc(p(product.description))}</p>
      ${product.material ? `<p style="margin-top:var(--space-4);font-size:var(--text-sm);color:var(--text-secondary)"><strong>${currentLang==='zh'?'材质':'Material'}:</strong> ${esc(p(product.material))}</p>` : ''}
      ${product.dimensions ? `<p style="font-size:var(--text-sm);color:var(--text-secondary)"><strong>${currentLang==='zh'?'尺寸':'Dimensions'}:</strong> ${esc(product.dimensions)}</p>` : ''}
      ${product.origin ? `<p style="font-size:var(--text-sm);color:var(--text-secondary)"><strong>${currentLang==='zh'?'产地':'Origin'}:</strong> ${esc(p(product.origin))}</p>` : ''}
    </div>
    <div class="tab-panel" id="panel-specs">
      <table class="specs-table">
        <tbody>
          ${Object.entries(product.specs || {}).map(([k,v]) => `
          <tr><td>${esc(k)}</td><td>${esc(v)}</td></tr>`).join('')}
          ${product.dimensions ? `<tr><td>Dimensions</td><td>${esc(product.dimensions)}</td></tr>` : ''}
          ${product.weight ? `<tr><td>Weight</td><td>${esc(product.weight)}</td></tr>` : ''}
          ${product.origin ? `<tr><td>Origin</td><td>${esc(p(product.origin))}</td></tr>` : ''}
        </tbody>
      </table>
    </div>
    <div class="tab-panel" id="panel-reviews">
      <!-- Review form -->
      <div class="review-form">
        <h3>${t('review_title')}</h3>
        <p class="pdp-label">${t('review_rating')}</p>
        <div class="star-rating-input" id="star-input">
          ${[1,2,3,4,5].map(i => `<button class="star-input-btn ${i<=5?'active':''}" onclick="setReviewStar(${i})" data-star="${i}">★</button>`).join('')}
        </div>
        <div class="form-group" style="margin-top:var(--space-3)">
          <label class="form-label">${t('review_name')}</label>
          <input class="input" id="review-name" type="text">
        </div>
        <div class="form-group">
          <label class="form-label">${t('review_comment')}</label>
          <textarea class="input" id="review-comment" rows="4" style="resize:vertical;min-height:100px"></textarea>
        </div>
        <button class="btn btn-primary" onclick="submitReview(${product.id})">${t('review_submit')}</button>
      </div>

      <!-- Reviews List -->
      <div id="reviews-list">
        ${mockReviews.map(rv => `
        <div class="review-item">
          <div class="review-header">
            <div>
              <span class="reviewer-name">${esc(rv.name)}</span>
              ${renderStars(rv.rating)}
              <span class="review-date" style="margin-left:var(--space-2)">${rv.date}</span>
              ${rv.verified ? `<span class="verified-badge" style="margin-left:var(--space-2)"><i data-lucide="check-circle" style="width:12px;height:12px;display:inline-block"></i>${t('verified_purchase')}</span>` : ''}
            </div>
          </div>
          <p class="review-comment">${esc(rv.comment)}</p>
          <button class="helpful-btn">
            <i data-lucide="thumbs-up" style="width:12px;height:12px;display:inline-block"></i>
            ${t('review_helpful')} (${rv.helpful})
          </button>
        </div>`).join('')}
      </div>
    </div>
  </div>

  <!-- You May Also Like -->
  ${related.length > 0 ? `
  <section class="section" style="padding-top:var(--space-12)">
    <div class="section-header">
      <h2 class="section-title">${t('you_may_also_like')}</h2>
    </div>
    <div class="product-row-scroll">
      ${related.map(pr => renderProductCard(pr)).join('')}
    </div>
  </section>` : ''}
</div>`;
}

function generateMockReviews(product) {
  const names = ['Emma L.','James K.','Sofia A.','Liang W.','Anders H.','Maria G.'];
  const comments = {
    en: [
      'Absolutely stunning piece. The quality exceeded my expectations and it fits perfectly in my space.',
      'Beautiful craftsmanship and the delivery was fast. Would definitely recommend to friends.',
      'Elegant design, exactly as pictured. Solid build quality and easy to assemble.',
      'Worth every penny. The materials feel premium and the colour is perfect.',
    ],
    zh: [
      '非常漂亮的设计，质量超出预期，在我的空间里完美契合。',
      '工艺精美，发货迅速。绝对会向朋友推荐。',
      '优雅的设计，和图片完全一致。做工扎实，安装简便。',
      '物有所值，材质感觉非常高档，颜色也很完美。',
    ]
  };
  const count = Math.min(product.reviewCount, 4);
  const reviews = [];
  for (let i = 0; i < count; i++) {
    const comArr = comments[currentLang] || comments.en;
    reviews.push({
      name: names[i % names.length],
      rating: Math.max(3, Math.round(product.rating) + (i === 0 ? 1 : i === 1 ? 0 : -1)),
      date: `${['Jan','Feb','Mar','Apr','May','Jun'][i % 6]} ${10 + i}, 2026`,
      comment: comArr[i % comArr.length],
      verified: i < 3,
      helpful: Math.floor(Math.random() * 30),
    });
  }
  return reviews;
}


/* ============================================================
   CART
   ============================================================ */
function renderCart() {
  if (cart.length === 0) {
    return `
<div class="container">
  <div style="padding:var(--space-8) 0">
    <h1 style="font-family:var(--font-display);font-size:var(--text-3xl);margin-bottom:var(--space-8)">${t('cart_title')}</h1>
    <div class="cart-empty">
      <div class="cart-empty-icon"><i data-lucide="shopping-bag"></i></div>
      <h2>${t('cart_empty')}</h2>
      <p>${t('cart_empty_desc')}</p>
      <button class="btn btn-primary" onclick="navigate('#/')">${t('start_shopping')}</button>
    </div>
    ${renderCartYouMayLike()}
  </div>
</div>`;
  }

  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  const freeShippingThreshold = 99;
  const shippingProgress = Math.min(subtotal / freeShippingThreshold * 100, 100);
  const shipping = subtotal >= freeShippingThreshold ? 0 : 8.99;
  const tax = subtotal * 0.08;
  let discount = 0;
  if (appliedPromo === 'NORDIC20') discount = subtotal * 0.2;
  const total = subtotal - discount + shipping + tax;

  return `
<div class="container">
  <div style="padding:var(--space-8) 0">
    <h1 style="font-family:var(--font-display);font-size:var(--text-3xl);margin-bottom:var(--space-6)">${t('cart_title')}</h1>
    <div class="cart-layout">
      <!-- Cart Items -->
      <div>
        <!-- Free Shipping Progress -->
        <div class="shipping-progress-bar">
          ${subtotal >= freeShippingThreshold
            ? `<p class="shipping-progress-text" style="color:var(--primary-light)">🎉 ${t('free_shipping_earned')}</p>`
            : `<p class="shipping-progress-text">${t('free_shipping_progress', {amount: formatPrice(freeShippingThreshold - subtotal)})}</p>`
          }
          <div class="progress-track"><div class="progress-fill" style="width:${shippingProgress}%"></div></div>
        </div>

        ${cart.map(item => {
          const product = PRODUCTS.find(p => p.id === item.productId);
          if (!product) return '';
          return `
          <div class="cart-item">
            <div class="cart-item-image" onclick="navigate('#/product/${item.productId}')" style="cursor:pointer">
              <img src="${esc(item.image)}" alt="${esc(item.name)}"
                   onerror="this.src='https://picsum.photos/seed/c${item.productId}/300/300'">
            </div>
            <div>
              <p class="cart-item-name">${esc(item.name)}</p>
              <p class="cart-item-meta">${item.color ? item.color : ''}</p>
              <div class="quantity-selector" style="margin-top:var(--space-2)">
                <button class="qty-btn" onclick="updateCartQty(${item.productId},-1)">−</button>
                <input class="qty-input" type="number" value="${item.qty}" min="1" max="99"
                  onchange="setCartQty(${item.productId},+this.value)">
                <button class="qty-btn" onclick="updateCartQty(${item.productId},1)">+</button>
              </div>
            </div>
            <div style="text-align:right">
              <p class="cart-item-price">${formatPrice(item.price * item.qty)}</p>
              <p style="font-size:var(--text-xs);color:var(--text-muted)">${formatPrice(item.price)} ${currentLang==='zh'?'每件':'each'}</p>
              <button class="cart-item-remove" onclick="removeFromCart(${item.productId})">
                <i data-lucide="trash-2" style="width:12px;height:12px;display:inline-block"></i>
                ${t('remove')}
              </button>
            </div>
          </div>`;
        }).join('')}

        <div style="margin-top:var(--space-5)">
          <a class="btn btn-ghost btn-sm" onclick="navigate('#/');">
            <i data-lucide="arrow-left" style="width:14px;height:14px;display:inline-block"></i>
            ${t('continue_shopping')}
          </a>
        </div>
      </div>

      <!-- Order Summary -->
      <div>
        <div class="order-summary-card">
          <h2 class="order-summary-title">${t('order_summary')}</h2>
          <div class="summary-row"><span>${t('subtotal')}</span><span>${formatPrice(subtotal)}</span></div>
          ${discount > 0 ? `<div class="summary-row" style="color:var(--sale)"><span>NORDIC20</span><span>-${formatPrice(discount)}</span></div>` : ''}
          <div class="summary-row">
            <span>${t('shipping')}</span>
            <span>${shipping === 0 ? `<span class="summary-free">${t('shipping_free')}</span>` : formatPrice(shipping)}</span>
          </div>
          <div class="summary-row"><span>${t('tax')}</span><span>${formatPrice(tax)}</span></div>
          <div class="summary-row total"><span>${t('order_total')}</span><span>${formatPrice(total)}</span></div>

          <!-- Promo Code -->
          <div class="promo-input-row">
            <input type="text" placeholder="${t('promo_code')}" id="promo-input"
              value="${appliedPromo||''}" style="text-transform:uppercase">
            <button class="btn btn-ghost btn-sm" onclick="applyPromoCode()">${t('apply')}</button>
          </div>

          <button class="btn btn-primary btn-lg" style="width:100%;margin-top:var(--space-3)"
            onclick="navigate('#/checkout')">
            ${t('proceed_checkout')}
          </button>
        </div>
      </div>
    </div>

    ${renderCartYouMayLike()}
  </div>
</div>`;
}

function renderCartYouMayLike() {
  const similar = PRODUCTS.filter(p => !cart.find(c => c.productId === p.id)).slice(0,8);
  return `
<section class="section" style="padding-top:var(--space-12)">
  <div class="section-header">
    <h2 class="section-title">${t('you_may_also_like')}</h2>
  </div>
  <div class="product-row-scroll">
    ${similar.map(pr => renderProductCard(pr)).join('')}
  </div>
</section>`;
}

/* ============================================================
   AUTH
   ============================================================ */
let authMode = 'signin';

function renderAuth() {
  return `
<div class="auth-page">
  <div class="auth-card">
    <div class="auth-logo">NordHjem</div>
    <div class="auth-tabs">
      <button class="auth-tab ${authMode==='signin'?'active':''}" onclick="authMode='signin';renderApp()">${t('sign_in')}</button>
      <button class="auth-tab ${authMode==='register'?'active':''}" onclick="authMode='register';renderApp()">${t('create_account')}</button>
    </div>
    ${authMode === 'signin' ? renderSignIn() : renderRegister()}
  </div>
</div>`;
}

function renderSignIn() {
  return `
<form onsubmit="doSignIn(event)">
  <div class="form-group">
    <label class="form-label">${t('email')}</label>
    <input class="input" type="email" id="login-email" required placeholder="you@example.com">
  </div>
  <div class="form-group">
    <label class="form-label">${t('password')}</label>
    <div class="password-input-wrap">
      <input class="input" type="password" id="login-password" required placeholder="••••••••">
      <button type="button" class="password-toggle" onclick="togglePwd('login-password',this)">
        <i data-lucide="eye"></i>
      </button>
    </div>
  </div>
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-5)">
    <label class="filter-checkbox">
      <input type="checkbox"> ${t('remember_me')}
    </label>
    <a onclick="navigate('#/forgot-password')" style="font-size:var(--text-sm);color:var(--primary);cursor:pointer;font-weight:600">${t('forgot_password')}</a>
  </div>
  <button class="btn btn-primary btn-lg" style="width:100%" type="submit">${t('sign_in')}</button>
  <div class="auth-divider">${t('or_continue_with')}</div>
  <button type="button" class="social-btn" onclick="doSocialLogin('Google')">
    <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>
    Google
  </button>
</form>
<div class="auth-footer">${t('dont_have_account')} <button onclick="authMode='register';renderApp()">${t('create_account')}</button></div>`;
}

function renderRegister() {
  return `
<form onsubmit="doRegister(event)">
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">${t('first_name')}</label>
      <input class="input" type="text" id="reg-first" required>
    </div>
    <div class="form-group">
      <label class="form-label">${t('last_name')}</label>
      <input class="input" type="text" id="reg-last" required>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">${t('email')}</label>
    <input class="input" type="email" id="reg-email" required>
  </div>
  <div class="form-group">
    <label class="form-label">${t('password')}</label>
    <div class="password-input-wrap">
      <input class="input" type="password" id="reg-password" required minlength="6">
      <button type="button" class="password-toggle" onclick="togglePwd('reg-password',this)">
        <i data-lucide="eye"></i>
      </button>
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">${t('confirm_password')}</label>
    <input class="input" type="password" id="reg-confirm" required>
  </div>
  <label class="form-check" style="margin-bottom:var(--space-5)">
    <input type="checkbox" id="reg-terms" required>
    <span>${t('agree_terms')}</span>
  </label>
  <button class="btn btn-primary btn-lg" style="width:100%" type="submit">${t('create_account')}</button>
</form>
<div class="auth-footer">${t('already_have_account')} <button onclick="authMode='signin';renderApp()">${t('sign_in')}</button></div>`;
}

function renderForgotPassword() {
  return `
<div class="auth-page">
  <div class="auth-card">
    <div class="auth-logo">NordHjem</div>
    <h2 style="font-family:var(--font-display);font-size:var(--text-2xl);margin-bottom:var(--space-3)">${t('forgot_password_title')}</h2>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-6)">${t('forgot_password_desc')}</p>
    <form onsubmit="doForgotPassword(event)">
      <div class="form-group">
        <label class="form-label">${t('email')}</label>
        <input class="input" type="email" id="forgot-email" required>
      </div>
      <button class="btn btn-primary btn-lg" style="width:100%;margin-top:var(--space-3)" type="submit">
        ${t('send_reset_link')}
      </button>
    </form>
    <div class="auth-footer">
      <button onclick="navigate('#/auth')">${t('back_to_login')}</button>
    </div>
  </div>
</div>`;
}


/* ============================================================
   CHECKOUT
   ============================================================ */
function renderCheckout() {
  if (cart.length === 0) { navigate('#/cart'); return ''; }
  if (checkoutStep === 3 && checkoutData.confirmed) return renderOrderSuccess();

  const subtotal = cart.reduce((s,i) => s + i.price * i.qty, 0);
  let discount = appliedPromo === 'NORDIC20' ? subtotal * 0.2 : 0;
  const shipCost = checkoutData.shippingMethod === 'express' ? 19.99 : checkoutData.shippingMethod === 'priority' ? 39.99 : (subtotal >= 99 ? 0 : 8.99);
  const tax = subtotal * 0.08;
  const total = subtotal - discount + shipCost + tax;

  const stepLabels = [t('step_shipping'), t('step_payment'), t('step_review')];

  const summaryHTML = `
<div class="order-summary-card">
  <h2 class="order-summary-title">${t('order_summary')}</h2>
  ${cart.map(item => `
  <div style="display:flex;gap:var(--space-3);margin-bottom:var(--space-3)">
    <img src="${esc(item.image)}" alt="${esc(item.name)}" style="width:60px;height:60px;object-fit:cover;border-radius:var(--radius-md)"
         onerror="this.src='https://picsum.photos/seed/cs${item.productId}/120/120'">
    <div style="flex:1">
      <p style="font-size:var(--text-xs);font-weight:600">${esc(item.name)}</p>
      <p style="font-size:var(--text-xs);color:var(--text-muted)">× ${item.qty}</p>
    </div>
    <span style="font-size:var(--text-sm);font-weight:600">${formatPrice(item.price * item.qty)}</span>
  </div>`).join('')}
  <hr style="border:none;border-top:1px solid var(--border);margin:var(--space-4) 0">
  <div class="summary-row"><span>${t('subtotal')}</span><span>${formatPrice(subtotal)}</span></div>
  ${discount > 0 ? `<div class="summary-row" style="color:var(--sale)"><span>NORDIC20</span><span>-${formatPrice(discount)}</span></div>` : ''}
  <div class="summary-row"><span>${t('shipping')}</span><span>${shipCost === 0 ? `<span class="summary-free">${t('shipping_free')}</span>` : formatPrice(shipCost)}</span></div>
  <div class="summary-row"><span>${t('tax')}</span><span>${formatPrice(tax)}</span></div>
  <div class="summary-row total"><span>${t('order_total')}</span><span>${formatPrice(total)}</span></div>
</div>`;

  let mainHTML = '';
  if (checkoutStep === 1) {
    mainHTML = `
<div class="checkout-section">
  <h2 class="checkout-section-title">${t('contact_info')}</h2>
  <div class="form-group">
    <label class="form-label">${t('email')}</label>
    <input class="input" type="email" id="co-email" value="${currentUser?.email||''}">
  </div>
  <div class="form-group">
    <label class="form-label">${t('phone')}</label>
    <input class="input" type="tel" id="co-phone" value="${checkoutData.phone||''}">
  </div>
</div>
<div class="checkout-section">
  <h2 class="checkout-section-title">${t('shipping_address')}</h2>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">${t('first_name')}</label>
      <input class="input" type="text" id="co-fname" value="${checkoutData.fname||''}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('last_name')}</label>
      <input class="input" type="text" id="co-lname" value="${checkoutData.lname||''}">
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">${t('address_line1')}</label>
    <input class="input" type="text" id="co-addr1" value="${checkoutData.addr1||''}">
  </div>
  <div class="form-group">
    <label class="form-label">${t('address_line2')}</label>
    <input class="input" type="text" id="co-addr2" value="${checkoutData.addr2||''}">
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">${t('city')}</label>
      <input class="input" type="text" id="co-city" value="${checkoutData.city||''}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('state')}</label>
      <input class="input" type="text" id="co-state" value="${checkoutData.state||''}">
    </div>
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">${t('zip')}</label>
      <input class="input" type="text" id="co-zip" value="${checkoutData.zip||''}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('country')}</label>
      <input class="input" type="text" id="co-country" value="${checkoutData.country||'United States'}">
    </div>
  </div>
</div>
<div class="checkout-section">
  <h2 class="checkout-section-title">${t('shipping_method')}</h2>
  ${[
    { val:'standard', name: t('shipping_standard'), desc: t('shipping_standard_desc'), price: subtotal >= 99 ? t('shipping_free') : '$8.99' },
    { val:'express',  name: t('shipping_express'),  desc: t('shipping_express_desc'),  price: '$19.99' },
    { val:'priority', name: t('shipping_priority'), desc: t('shipping_priority_desc'), price: '$39.99' },
  ].map(opt => `
  <label class="shipping-option ${(checkoutData.shippingMethod||'standard')===opt.val?'selected':''}">
    <input type="radio" name="shipping" value="${opt.val}"
      ${(checkoutData.shippingMethod||'standard')===opt.val?'checked':''}
      onchange="checkoutData.shippingMethod='${opt.val}';renderApp()">
    <div class="shipping-option-info">
      <div class="shipping-option-name">${opt.name}</div>
      <div class="shipping-option-desc">${opt.desc}</div>
    </div>
    <span class="shipping-option-price">${opt.price}</span>
  </label>`).join('')}
</div>
<div style="display:flex;gap:var(--space-3);margin-top:var(--space-5)">
  <button class="btn btn-primary btn-lg" style="flex:1" onclick="proceedCheckout(2)">${t('continue_to_payment')}</button>
</div>`;
  } else if (checkoutStep === 2) {
    mainHTML = `
<div class="checkout-section">
  <h2 class="checkout-section-title">${t('payment_method')}</h2>
  <div class="payment-tabs">
    <button class="payment-tab active">${t('credit_card')}</button>
    <button class="payment-tab">PayPal</button>
    <button class="payment-tab">Apple Pay</button>
  </div>
  <div class="form-group">
    <label class="form-label">${t('cardholder')}</label>
    <input class="input" type="text" id="co-cardholder" placeholder="John Smith">
  </div>
  <div class="form-group">
    <label class="form-label">${t('card_number')}</label>
    <input class="input" type="text" id="co-card" placeholder="•••• •••• •••• ••••" maxlength="19"
      oninput="formatCardNumber(this)">
  </div>
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">${t('expiry')}</label>
      <input class="input" type="text" id="co-expiry" placeholder="MM/YY" maxlength="5">
    </div>
    <div class="form-group">
      <label class="form-label">${t('cvc')}</label>
      <input class="input" type="text" id="co-cvc" placeholder="•••" maxlength="4">
    </div>
  </div>
  <label class="form-check" style="margin-top:var(--space-3)">
    <input type="checkbox" checked> ${t('billing_same')}
  </label>
</div>
<div style="display:flex;gap:var(--space-3);margin-top:var(--space-5)">
  <button class="btn btn-ghost" onclick="checkoutStep=1;renderApp()">${t('back')}</button>
  <button class="btn btn-primary btn-lg" style="flex:1" onclick="proceedCheckout(3)">${t('continue_to_review')}</button>
</div>`;
  } else if (checkoutStep === 3) {
    mainHTML = `
<div class="checkout-section">
  <h2 class="checkout-section-title">${t('step_review')}</h2>
  <div style="background:var(--surface-2);border-radius:var(--radius-lg);padding:var(--space-4);margin-bottom:var(--space-4)">
    <p style="font-weight:600;font-size:var(--text-sm);margin-bottom:var(--space-2)">${t('shipping_address')}</p>
    <p style="font-size:var(--text-sm);color:var(--text-secondary)">${checkoutData.fname||'—'} ${checkoutData.lname||''}<br>
      ${checkoutData.addr1||''} ${checkoutData.addr2||''}<br>
      ${checkoutData.city||''}, ${checkoutData.state||''} ${checkoutData.zip||''}<br>
      ${checkoutData.country||''}
    </p>
  </div>
  <div style="background:var(--surface-2);border-radius:var(--radius-lg);padding:var(--space-4)">
    <p style="font-weight:600;font-size:var(--text-sm);margin-bottom:var(--space-2)">${t('payment_method')}</p>
    <p style="font-size:var(--text-sm);color:var(--text-secondary)">${t('credit_card')} •••• 4242</p>
  </div>
</div>
<div style="display:flex;gap:var(--space-3);margin-top:var(--space-5)">
  <button class="btn btn-ghost" onclick="checkoutStep=2;renderApp()">${t('back')}</button>
  <button class="btn btn-primary btn-lg" style="flex:1" onclick="placeOrder()">
    <i data-lucide="lock" style="width:16px;height:16px;display:inline-block"></i>
    ${t('place_order')} — ${formatPrice(total)}
  </button>
</div>`;
  }

  return `
<div class="container">
  <div style="padding:var(--space-6) 0 0">
    <h1 style="font-family:var(--font-display);font-size:var(--text-3xl);margin-bottom:var(--space-6)">${t('checkout_title')}</h1>
    <!-- Step indicator -->
    <div class="checkout-steps" style="margin-bottom:var(--space-8)">
      ${stepLabels.map((label, i) => {
        const step = i + 1;
        const cls = step < checkoutStep ? 'done' : step === checkoutStep ? 'active' : '';
        return `
        <div class="checkout-step ${cls}">
          <div class="step-num">${step < checkoutStep ? '✓' : step}</div>
          <span>${label}</span>
        </div>
        ${i < 2 ? `<div class="step-connector ${step < checkoutStep ? 'done' : ''}"></div>` : ''}`;
      }).join('')}
    </div>
  </div>
  <div class="checkout-layout">
    <div>${mainHTML}</div>
    <div>${summaryHTML}</div>
  </div>
</div>`;
}

function renderOrderSuccess() {
  const orderNum = checkoutData.orderNumber || 'NH-' + Math.floor(Math.random() * 900000 + 100000);
  return `
<div class="container">
  <div class="order-success">
    <div class="success-icon"><i data-lucide="check"></i></div>
    <h1 style="font-family:var(--font-display);font-size:var(--text-3xl);margin-bottom:var(--space-3)">${t('order_confirmed')}</h1>
    <p style="color:var(--text-secondary);margin-bottom:var(--space-3)">${t('order_confirmed_desc')}</p>
    <p style="font-size:var(--text-lg);font-weight:700;color:var(--primary);margin-bottom:var(--space-8)">${t('order_number')}: ${orderNum}</p>
    <div style="display:flex;gap:var(--space-4);justify-content:center;flex-wrap:wrap">
      <button class="btn btn-primary" onclick="navigate('#/account');accountSection='orders'">${t('account_orders')}</button>
      <button class="btn btn-ghost" onclick="navigate('#/')">${t('continue_shopping')}</button>
    </div>
  </div>
</div>`;
}

/* ============================================================
   ACCOUNT
   ============================================================ */
function renderAccount() {
  if (!currentUser) { navigate('#/auth'); return ''; }

  const mockOrders = generateMockOrders();

  const sidebarItems = [
    { key: 'dashboard', icon: 'layout-dashboard', label: t('account_dashboard') },
    { key: 'orders',    icon: 'package',           label: t('account_orders') },
    { key: 'addresses', icon: 'map-pin',            label: t('account_addresses') },
    { key: 'wishlist',  icon: 'heart',              label: t('account_wishlist') },
    { key: 'profile',   icon: 'user',               label: t('account_profile') },
    { key: 'settings',  icon: 'settings',           label: t('account_settings') },
  ];

  const initial = (currentUser.firstName?.[0]||'') + (currentUser.lastName?.[0]||'');

  let contentHTML = '';
  if (accountSection === 'dashboard') contentHTML = renderAccountDashboard(mockOrders, initial);
  else if (accountSection === 'orders') contentHTML = renderAccountOrders(mockOrders);
  else if (accountSection === 'addresses') contentHTML = renderAccountAddresses();
  else if (accountSection === 'wishlist') contentHTML = renderAccountWishlist();
  else if (accountSection === 'profile') contentHTML = renderAccountProfile();
  else if (accountSection === 'settings') contentHTML = renderAccountSettings();

  return `
<div class="container">
  <div class="account-layout">
    <aside class="account-sidebar">
      <div class="account-user-header">
        <div class="account-avatar">${initial || '?'}</div>
        <div class="account-user-name">${currentUser.firstName} ${currentUser.lastName}</div>
        <div class="account-user-email">${currentUser.email}</div>
      </div>
      <nav class="account-nav">
        ${sidebarItems.map(item => `
        <div class="account-nav-item ${accountSection===item.key?'active':''}"
          onclick="accountSection='${item.key}';renderApp()">
          <i data-lucide="${item.icon}"></i>
          ${item.label}
        </div>`).join('')}
        <div class="account-nav-item" style="color:var(--sale)" onclick="doSignOut()">
          <i data-lucide="log-out"></i> ${t('nav_signout')}
        </div>
      </nav>
    </aside>
    <div class="account-content-area">
      ${contentHTML}
    </div>
  </div>
</div>`;
}

function renderAccountDashboard(mockOrders, initial) {
  return `
<div class="account-content-header">
  <h2 class="account-content-title">${t('welcome_back')}, ${currentUser.firstName}!</h2>
</div>
<div class="account-stats">
  <div class="stat-card"><div class="stat-number">${mockOrders.length}</div><div class="stat-label">${t('account_orders')}</div></div>
  <div class="stat-card"><div class="stat-number">${wishlist.length}</div><div class="stat-label">${t('account_wishlist')}</div></div>
  <div class="stat-card"><div class="stat-number">${claimedCoupons.length}</div><div class="stat-label">${t('coupon_center')}</div></div>
</div>
<h3 style="font-weight:600;font-size:var(--text-lg);margin-bottom:var(--space-4)">${t('recent_orders')}</h3>
${renderOrdersTable(mockOrders.slice(0,3))}`;
}

function renderAccountOrders(mockOrders) {
  return `
<div class="account-content-header">
  <h2 class="account-content-title">${t('account_orders')}</h2>
</div>
${renderOrdersTable(mockOrders)}`;
}

function renderOrdersTable(mockOrders) {
  if (mockOrders.length === 0) {
    return `<div style="text-align:center;padding:var(--space-12);color:var(--text-muted)">
      <i data-lucide="package" style="width:48px;height:48px;display:block;margin:0 auto var(--space-4)"></i>
      <p>${currentLang==='zh'?'暂无订单':'No orders yet'}</p>
    </div>`;
  }
  return `<div style="overflow-x:auto">
<table class="orders-table">
  <thead>
    <tr>
      <th>${t('order_number')}</th>
      <th>${t('order_date')}</th>
      <th>Status</th>
      <th>${t('order_total_label')}</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    ${mockOrders.map(o => `
    <tr>
      <td style="font-weight:600">${o.id}</td>
      <td style="color:var(--text-secondary)">${o.date}</td>
      <td><span class="status-badge status-${o.status}">${getStatusLabel(o.status)}</span></td>
      <td style="font-weight:600">${formatPrice(o.total)}</td>
      <td>
        <button class="btn btn-ghost btn-sm" onclick="navigate('#/order/${o.id}')">${t('view_details')}</button>
      </td>
    </tr>`).join('')}
  </tbody>
</table></div>`;
}

function renderAccountAddresses() {
  const mockAddresses = addresses.length > 0 ? addresses : [
    { id:1, name:'Home', address:'123 Nordic St, Apt 4B\nHelsinki, 00100\nFinland', isDefault: true },
  ];
  return `
<div class="account-content-header">
  <h2 class="account-content-title">${t('account_addresses')}</h2>
  <button class="btn btn-primary btn-sm" onclick="showAddressForm()">+ ${t('add_address')}</button>
</div>
<div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:var(--space-4)">
  ${mockAddresses.map(addr => `
  <div style="border:1px solid var(--border);border-radius:var(--radius-lg);padding:var(--space-5)">
    <div style="display:flex;align-items:center;gap:var(--space-2);margin-bottom:var(--space-3)">
      <strong>${addr.name}</strong>
      ${addr.isDefault ? `<span class="badge badge-new" style="font-size:10px">${t('default_address')}</span>` : ''}
    </div>
    <p style="font-size:var(--text-sm);color:var(--text-secondary);white-space:pre-line">${esc(addr.address)}</p>
    <div style="display:flex;gap:var(--space-3);margin-top:var(--space-4)">
      <button class="btn btn-ghost btn-sm">${t('edit')}</button>
      <button class="btn btn-ghost btn-sm" style="color:var(--sale)">${t('delete')}</button>
    </div>
  </div>`).join('')}
</div>`;
}

function renderAccountWishlist() {
  const wishlisted = PRODUCTS.filter(p => wishlist.includes(p.id));
  return `
<div class="account-content-header">
  <h2 class="account-content-title">${t('account_wishlist')}</h2>
</div>
${wishlisted.length === 0
  ? `<div style="text-align:center;padding:var(--space-12);color:var(--text-muted)">
     <i data-lucide="heart" style="width:48px;height:48px;display:block;margin:0 auto var(--space-4)"></i>
     <p>${currentLang==='zh'?'收藏夹为空':'Your wishlist is empty'}</p>
    </div>`
  : `<div class="products-grid" style="grid-template-columns:repeat(auto-fill,minmax(200px,1fr))">${wishlisted.map(pr => renderProductCard(pr)).join('')}</div>`
}`;
}

function renderAccountProfile() {
  return `
<div class="account-content-header">
  <h2 class="account-content-title">${t('account_profile')}</h2>
</div>
<form onsubmit="saveProfile(event)" style="max-width:480px">
  <div class="form-row">
    <div class="form-group">
      <label class="form-label">${t('first_name')}</label>
      <input class="input" type="text" id="prof-first" value="${esc(currentUser.firstName||'')}">
    </div>
    <div class="form-group">
      <label class="form-label">${t('last_name')}</label>
      <input class="input" type="text" id="prof-last" value="${esc(currentUser.lastName||'')}">
    </div>
  </div>
  <div class="form-group">
    <label class="form-label">${t('email')}</label>
    <input class="input" type="email" id="prof-email" value="${esc(currentUser.email||'')}">
  </div>
  <hr class="divider">
  <h3 style="font-weight:600;margin-bottom:var(--space-4)">${t('change_password')}</h3>
  <div class="form-group">
    <label class="form-label">${t('current_password')}</label>
    <input class="input" type="password" placeholder="••••••••">
  </div>
  <div class="form-group">
    <label class="form-label">${t('new_password')}</label>
    <input class="input" type="password" placeholder="••••••••">
  </div>
  <button class="btn btn-primary" type="submit">${t('save_changes')}</button>
</form>`;
}

function renderAccountSettings() {
  return `
<div class="account-content-header">
  <h2 class="account-content-title">${t('account_settings')}</h2>
</div>
<div style="max-width:480px">
  <div style="margin-bottom:var(--space-6)">
    <h3 style="font-weight:600;margin-bottom:var(--space-4)">${t('language')}</h3>
    <div class="lang-switcher" style="width:fit-content">
      <button class="lang-btn ${currentLang==='en'?'active':''}" onclick="setLang('en')">English</button>
      <button class="lang-btn ${currentLang==='zh'?'active':''}" onclick="setLang('zh')">中文</button>
    </div>
  </div>
  <div style="margin-bottom:var(--space-6)">
    <h3 style="font-weight:600;margin-bottom:var(--space-4)">${t('newsletter_pref')}</h3>
    <label class="filter-toggle">
      <div class="toggle-switch on"></div>
      <span style="font-size:var(--text-sm)">${currentLang==='zh'?'接收新品与优惠信息':'Receive new arrivals & promotions'}</span>
    </label>
  </div>
  <div>
    <h3 style="font-weight:600;margin-bottom:var(--space-4)">${t('notification_pref')}</h3>
    <label class="filter-toggle" style="margin-bottom:var(--space-3)">
      <div class="toggle-switch on"></div>
      <span style="font-size:var(--text-sm)">${currentLang==='zh'?'订单状态通知':'Order status notifications'}</span>
    </label>
    <label class="filter-toggle">
      <div class="toggle-switch"></div>
      <span style="font-size:var(--text-sm)">${currentLang==='zh'?'价格变动提醒':'Price drop alerts'}</span>
    </label>
  </div>
</div>`;
}

function generateMockOrders() {
  return [
    { id:'NH-284712', date:'Mar 01, 2026', status:'processing', total: 1299, items: cart.slice(0,1) },
    { id:'NH-274531', date:'Feb 15, 2026', status:'shipped',    total: 459.80, items: [] },
    { id:'NH-261208', date:'Jan 28, 2026', status:'delivered',  total: 789.00, items: [] },
    { id:'NH-248903', date:'Jan 10, 2026', status:'delivered',  total: 224.50, items: [] },
  ];
}

function getStatusLabel(status) {
  const map = { processing: t('order_status_processing'), shipped: t('order_status_shipped'), delivered: t('order_status_delivered'), cancelled: t('order_status_cancelled') };
  return map[status] || status;
}


/* ============================================================
   SEARCH RESULTS
   ============================================================ */
function renderSearch(query) {
  let results = [];
  if (query) {
    const q = query.toLowerCase();
    results = PRODUCTS.filter(pr => {
      const nameEn = (pr.name?.en || '').toLowerCase();
      const nameZh = (pr.name?.zh || '').toLowerCase();
      const brand = (pr.brand || '').toLowerCase();
      const cat = (pr.category || '').toLowerCase();
      const subEn = (pr.subcategory?.en || '').toLowerCase();
      return nameEn.includes(q) || nameZh.includes(q) || brand.includes(q) || cat.includes(q) || subEn.includes(q);
    });
  }

  return `
<div class="container">
  <div class="search-results-header">
    <div class="search-results-query-bar">
      <i data-lucide="search" style="color:var(--text-muted);width:20px;height:20px;flex-shrink:0"></i>
      <input class="input" type="text" id="search-results-input"
        value="${esc(query)}" placeholder="${t('search_placeholder')}"
        onkeydown="if(event.key==='Enter'){navigate('#/search?q='+encodeURIComponent(this.value))}">
    </div>
  </div>
  <h1 style="font-family:var(--font-display);font-size:var(--text-3xl);margin-bottom:var(--space-3)">
    ${query ? t('search_results_for', {query: esc(query)}) : t('search_results')}
  </h1>
  ${results.length === 0 && query
    ? `<div style="text-align:center;padding:var(--space-16);color:var(--text-muted)">
         <i data-lucide="search" style="width:64px;height:64px;display:block;margin:0 auto var(--space-4)"></i>
         <p style="font-size:var(--text-lg);margin-bottom:var(--space-3)">${t('no_search_results', {query: esc(query)})}</p>
         <p style="font-size:var(--text-sm)">${t('search_suggestion')}</p>
       </div>`
    : `<p style="color:var(--text-secondary);margin-bottom:var(--space-6)">${t('showing_results', {count: results.length})}</p>
       <div class="products-grid">${results.slice(0,48).map(pr => renderProductCard(pr)).join('')}</div>`
  }
</div>`;
}

/* ============================================================
   ORDER DETAIL
   ============================================================ */
function renderOrderDetail(orderId) {
  const order = generateMockOrders().find(o => o.id === orderId) || generateMockOrders()[0];
  const statuses = ['processing','shipped','delivered'];
  const statusIdx = statuses.indexOf(order.status);
  const items = cart.length > 0 ? cart : [{ productId: 1, name: p(PRODUCTS[0].name), image: PRODUCTS[0].image, price: PRODUCTS[0].price, qty: 1 }];

  return `
<div class="container">
  <div style="padding:var(--space-8) 0">
    <div class="breadcrumb">
      <a onclick="navigate('#/account');accountSection='orders'">${t('account_orders')}</a>
      <span class="sep">›</span>
      <span class="current">${orderId}</span>
    </div>
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:var(--space-6);flex-wrap:wrap;gap:var(--space-4)">
      <div>
        <h1 style="font-family:var(--font-display);font-size:var(--text-3xl)">${t('order_number')}: ${orderId}</h1>
        <p style="color:var(--text-muted);font-size:var(--text-sm)">${t('order_date')}: ${order.date}</p>
      </div>
      <span class="status-badge status-${order.status}" style="font-size:var(--text-sm);padding:8px 16px">${getStatusLabel(order.status)}</span>
    </div>

    <!-- Timeline -->
    <div class="checkout-section">
      <h2 class="checkout-section-title">${currentLang==='zh'?'物流状态':'Order Status'}</h2>
      <div class="order-timeline">
        ${[
          { label: currentLang==='zh'?'已下单':'Ordered', icon: 'shopping-bag', done: true },
          { label: currentLang==='zh'?'处理中':'Processing', icon: 'package', done: statusIdx >= 0 },
          { label: currentLang==='zh'?'已发货':'Shipped', icon: 'truck', done: statusIdx >= 1 },
          { label: currentLang==='zh'?'已送达':'Delivered', icon: 'check-circle', done: statusIdx >= 2 },
        ].map((step, i) => `
        <div class="timeline-step ${step.done ? (i === statusIdx+1 ? 'current' : 'done') : ''}">
          <div class="timeline-dot"><i data-lucide="${step.icon}"></i></div>
          <div class="timeline-label">${step.label}</div>
        </div>`).join('')}
      </div>
    </div>

    <!-- Items -->
    <div class="checkout-section">
      <h2 class="checkout-section-title">${currentLang==='zh'?'商品列表':'Order Items'}</h2>
      ${items.map(item => `
      <div style="display:flex;gap:var(--space-4);padding:var(--space-4) 0;border-bottom:1px solid var(--border)">
        <img src="${esc(item.image)}" alt="${esc(item.name)}"
             style="width:80px;height:80px;object-fit:cover;border-radius:var(--radius-md)"
             onerror="this.src='https://picsum.photos/seed/od${item.productId}/160/160'">
        <div style="flex:1">
          <p style="font-weight:600;font-size:var(--text-sm)">${esc(item.name)}</p>
          <p style="font-size:var(--text-xs);color:var(--text-muted)">× ${item.qty}</p>
        </div>
        <p style="font-weight:700">${formatPrice(item.price * item.qty)}</p>
      </div>`).join('')}
      <div class="summary-row total" style="margin-top:var(--space-4)">
        <span>${t('order_total')}</span>
        <span>${formatPrice(order.total)}</span>
      </div>
    </div>

    <div style="display:flex;gap:var(--space-4);margin-top:var(--space-5);flex-wrap:wrap">
      <button class="btn btn-primary" onclick="navigate('#/')">${currentLang==='zh'?'再次购买':'Reorder'}</button>
      <button class="btn btn-ghost" onclick="navigate('#/contact')">${currentLang==='zh'?'需要帮助？':'Need Help?'}</button>
    </div>
  </div>
</div>`;
}

/* ============================================================
   COUPON CENTER
   ============================================================ */
const COUPONS = [
  { code:'WELCOME10', amount:'10% OFF', desc: {en:'10% off your first order', zh:'首单9折'}, min: 0, expires:'Jun 30, 2026' },
  { code:'NORDIC20',  amount:'20% OFF', desc: {en:'20% off any order', zh:'全场8折'}, min: 0, expires:'Dec 31, 2026' },
  { code:'FREESHIP',  amount:'Free Shipping', desc: {en:'Free shipping on orders $50+', zh:'满$50免运费'}, min: 50, expires:'Mar 31, 2026' },
  { code:'SUMMER15',  amount:'15% OFF', desc: {en:'15% off outdoor furniture', zh:'户外家具85折'}, min: 0, expires:'Aug 31, 2026' },
  { code:'DECOR10',   amount:'$10 OFF', desc: {en:'$10 off decor over $50', zh:'装饰品满$50减$10'}, min: 50, expires:'Apr 30, 2026' },
];

function renderCoupons() {
  return `
<div class="coupon-hero">
  <div class="container">
    <h1>${t('coupon_center')}</h1>
    <p style="font-size:var(--text-lg);opacity:0.8">${currentLang==='zh'?'专属优惠，限时领取':'Exclusive deals, claim before they expire'}</p>
  </div>
</div>
<div class="container" style="padding-top:var(--space-8);padding-bottom:var(--space-12)">
  <h2 style="font-family:var(--font-display);font-size:var(--text-2xl);margin-bottom:var(--space-5)">${t('coupon_available')}</h2>
  <div class="coupons-grid">
    ${COUPONS.map(c => {
      const claimed = claimedCoupons.includes(c.code);
      return `
      <div class="coupon-card">
        <p class="coupon-amount">${c.amount}</p>
        <p style="font-size:var(--text-sm);color:var(--text-secondary);margin-bottom:var(--space-2)">${p(c.desc)}</p>
        <div class="coupon-code-display">
          <span class="coupon-code-text">${c.code}</span>
          <button onclick="copyCode('${c.code}')" style="cursor:pointer;border:none;background:none;color:var(--primary);font-size:var(--text-xs)">
            <i data-lucide="copy" style="width:14px;height:14px;display:inline-block"></i>
          </button>
        </div>
        <div class="coupon-details">
          ${c.min > 0 ? `<span>${t('coupon_min_order')}: $${c.min}</span>` : ''}
          <span>${t('coupon_expires')}: ${c.expires}</span>
        </div>
        <button class="coupon-btn ${claimed?'claimed':''}" onclick="${claimed?'void(0)':"claimCoupon('" + c.code + "')"}">
          ${claimed ? t('coupon_claimed') : t('coupon_claim')}
        </button>
      </div>`;
    }).join('')}
  </div>
  ${claimedCoupons.length > 0 ? `
  <h2 style="font-family:var(--font-display);font-size:var(--text-2xl);margin-bottom:var(--space-5)">${t('my_coupons')}</h2>
  <div class="coupons-grid">
    ${claimedCoupons.map(code => {
      const c = COUPONS.find(x => x.code === code);
      if (!c) return '';
      return `
      <div class="coupon-card" style="opacity:0.7">
        <p class="coupon-amount">${c.amount}</p>
        <div class="coupon-code-display"><span class="coupon-code-text">${c.code}</span></div>
        <div class="coupon-details"><span>${t('coupon_expires')}: ${c.expires}</span></div>
        <button class="coupon-btn" onclick="applyCoupon('${c.code}')">${currentLang==='zh'?'立即使用':'Use Now'}</button>
      </div>`;
    }).join('')}
  </div>` : ''}
</div>`;
}

/* ============================================================
   FAQ
   ============================================================ */
const FAQ_DATA = {
  en: {
    shipping: {
      title: 'Shipping & Delivery',
      items: [
        { q: 'How long does standard shipping take?', a: 'Standard shipping takes 5–7 business days. Express is 2–3 days and Priority is 1–2 business days. Orders placed before 2pm ship the same day.' },
        { q: 'Do you offer free shipping?', a: 'Yes! All orders over $99 qualify for free standard shipping. Promotions may also offer free shipping codes — check the Coupon Center.' },
        { q: 'Do you ship internationally?', a: 'We currently ship to the US, Canada, UK, EU, and Australia. Duties and import taxes may apply for international orders.' },
        { q: 'How do I track my order?', a: 'Once your order ships, you\'ll receive a confirmation email with your tracking number. You can also track your order in My Account > Orders.' },
      ]
    },
    returns: {
      title: 'Returns & Exchanges',
      items: [
        { q: 'What is your return policy?', a: 'We offer 30-day hassle-free returns on all items. Products must be in original condition and packaging to qualify for a full refund.' },
        { q: 'How do I start a return?', a: 'Go to My Account > Orders > View Details, then click "Request Return". You\'ll receive a prepaid return shipping label within 24 hours.' },
        { q: 'When will I receive my refund?', a: 'Refunds are processed within 3–5 business days of receiving your return. The refund will appear on your original payment method.' },
        { q: 'Can I exchange an item?', a: 'Yes, exchanges are easy. Start a return and place a new order, or contact us to arrange a direct exchange.' },
      ]
    },
    payment: {
      title: 'Payment & Pricing',
      items: [
        { q: 'What payment methods do you accept?', a: 'We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are secured with SSL encryption.' },
        { q: 'Are prices in USD?', a: 'All prices are listed in USD. For international orders, your bank will convert the charge at the current exchange rate.' },
        { q: 'Do you offer price matching?', a: 'We offer a 14-day price guarantee. If the price drops within 14 days of your purchase, contact us for a refund of the difference.' },
        { q: 'How do I apply a promo code?', a: 'Enter your promo code in the cart or at checkout. Codes are case-insensitive. Try NORDIC20 for 20% off your order!' },
      ]
    },
    products: {
      title: 'Product Information',
      items: [
        { q: 'What materials are your products made from?', a: 'We use sustainably sourced solid oak, beech, and pine. Upholstery ranges from linen and wool to premium leather. Every product page lists exact materials.' },
        { q: 'Do products require assembly?', a: 'Most larger items require assembly. Detailed assembly instructions are included in the packaging and also available on each product page.' },
        { q: 'Are color swatches accurate?', a: 'We strive for color accuracy, but monitor calibration may affect perception. We offer free fabric samples for upholstered items — contact us to request.' },
        { q: 'How do I care for my NordHjem furniture?', a: 'We recommend wiping surfaces with a dry cloth and applying natural wood oil every 6–12 months. Avoid direct sunlight and high humidity.' },
      ]
    },
    account: {
      title: 'Account & Orders',
      items: [
        { q: 'How do I create an account?', a: 'Click "Sign In" in the header, then select "Create Account". You\'ll receive a confirmation email. Creating an account lets you track orders and save wishlists.' },
        { q: 'Can I modify or cancel my order?', a: 'Orders can be modified or cancelled within 2 hours of placement. After that, the order enters processing. Contact us immediately if you need changes.' },
        { q: 'How do I change my password?', a: 'Go to My Account > Profile. You can update your password there. If you\'ve forgotten it, use the "Forgot password?" link on the Sign In page.' },
        { q: 'Can I place an order without an account?', a: 'Yes, guest checkout is available. However, creating an account lets you track orders, save addresses, and collect loyalty points.' },
      ]
    },
  },
  zh: {
    shipping: {
      title: '配送与物流',
      items: [
        { q: '标准配送需要多久？', a: '标准配送需5-7个工作日，快速配送2-3天，优先配送1-2天。下午2点前下单当天发货。' },
        { q: '有免运费服务吗？', a: '是的！满$99即享免费标准配送。还可在优惠券中心领取免运费券。' },
        { q: '支持国际配送吗？', a: '我们目前向美国、加拿大、英国、欧盟及澳大利亚发货。国际订单可能涉及关税及进口税。' },
        { q: '如何追踪我的订单？', a: '订单发货后，您将收到含快递单号的确认邮件。也可在"我的账户 > 订单"中查看物流状态。' },
      ]
    },
    returns: {
      title: '退换货',
      items: [
        { q: '退货政策是什么？', a: '我们提供30天无理由退货服务。商品需保持原包装及完好状态，方可申请全额退款。' },
        { q: '如何发起退货？', a: '前往"我的账户 > 订单 > 查看详情"，点击"申请退货"。我们将在24小时内发送预付费退货标签。' },
        { q: '何时收到退款？', a: '收到退货后3-5个工作日内处理退款，款项将退回至原支付方式。' },
        { q: '可以换货吗？', a: '可以！发起退货并重新下单，或直接联系我们安排换货。' },
      ]
    },
    payment: {
      title: '支付与价格',
      items: [
        { q: '支持哪些支付方式？', a: '我们接受Visa、Mastercard、美国运通、PayPal、Apple Pay及Google Pay。所有交易均采用SSL加密保护。' },
        { q: '价格是美元吗？', a: '所有价格以美元标注。国际订单将按您银行的当前汇率转换。' },
        { q: '是否提供价格保护？', a: '我们提供14天价格保护。若购买后14天内价格下调，联系我们即可获得差价退还。' },
        { q: '如何使用优惠码？', a: '在购物车或结算时输入优惠码。不区分大小写。试试NORDIC20，享受全单8折！' },
      ]
    },
    products: {
      title: '商品信息',
      items: [
        { q: '商品使用什么材质？', a: '我们采用可持续来源的实木橡木、山毛榉和松木。内饰材质从亚麻布、羊毛到优质皮革不等，每个商品页面均列明详细材质。' },
        { q: '商品需要组装吗？', a: '大件商品大多需要组装，包装内附详细组装说明，商品页面也可查阅。' },
        { q: '色卡是否准确？', a: '我们力求颜色还原准确，但显示器校准可能影响视觉感受。软包商品可申请免费面料小样，欢迎联系我们。' },
        { q: '如何保养NordHjem家具？', a: '建议使用干布擦拭表面，每6-12个月涂抹一次天然木油。避免阳光直射及高湿度环境。' },
      ]
    },
    account: {
      title: '账户与订单',
      items: [
        { q: '如何创建账户？', a: '点击顶部"登录"，选择"注册"。您将收到一封确认邮件。注册账户后可追踪订单并保存收藏夹。' },
        { q: '可以修改或取消订单吗？', a: '下单后2小时内可修改或取消。之后订单将进入处理流程，请立即联系我们。' },
        { q: '如何修改密码？', a: '前往"我的账户 > 个人资料"即可修改密码。若已忘记，请在登录页使用"忘记密码？"链接。' },
        { q: '不注册可以下单吗？', a: '可以使用访客结算。但注册账户后可追踪订单、保存地址并积累积分。' },
      ]
    },
  }
};

function renderFAQ() {
  const data = FAQ_DATA[currentLang] || FAQ_DATA.en;
  const sections = Object.values(data);
  return `
<div class="faq-hero">
  <div class="container">
    <h1>${t('faq_title')}</h1>
    <div class="faq-search-bar">
      <i data-lucide="search" class="faq-search-icon"></i>
      <input type="text" placeholder="${t('faq_search')}" id="faq-search-input"
        oninput="filterFAQ(this.value)">
    </div>
    <div class="faq-categories">
      <button class="faq-cat-btn active" onclick="scrollToFAQSection(0)">${sections[0].title}</button>
      <button class="faq-cat-btn" onclick="scrollToFAQSection(1)">${sections[1].title}</button>
      <button class="faq-cat-btn" onclick="scrollToFAQSection(2)">${sections[2].title}</button>
      <button class="faq-cat-btn" onclick="scrollToFAQSection(3)">${sections[3].title}</button>
      <button class="faq-cat-btn" onclick="scrollToFAQSection(4)">${sections[4].title}</button>
    </div>
  </div>
</div>
<div class="container" style="padding-top:var(--space-10);padding-bottom:var(--space-12)">
  <div id="faq-sections">
    ${sections.map((sec, si) => `
    <div class="faq-section-item" id="faq-sec-${si}">
      <h2 class="faq-section-title">${sec.title}</h2>
      ${sec.items.map((item, ii) => `
      <div class="accordion-item" id="faq-${si}-${ii}">
        <div class="accordion-header" onclick="toggleAccordion('faq-${si}-${ii}')">
          <span>${esc(item.q)}</span>
          <i data-lucide="chevron-down" class="accordion-icon"></i>
        </div>
        <div class="accordion-body">
          <div class="accordion-content">${esc(item.a)}</div>
        </div>
      </div>`).join('')}
    </div>`).join('')}
  </div>

  <!-- Contact CTA -->
  <div style="background:var(--surface-2);border-radius:var(--radius-xl);padding:var(--space-8);text-align:center;margin-top:var(--space-12)">
    <h3 style="font-family:var(--font-display);font-size:var(--text-2xl);margin-bottom:var(--space-3)">${currentLang==='zh'?'还有疑问？':'Still have questions?'}</h3>
    <p style="color:var(--text-secondary);margin-bottom:var(--space-5)">${currentLang==='zh'?'我们的客服团队随时为您解答':'Our support team is here to help'}</p>
    <button class="btn btn-primary" onclick="navigate('#/contact')">${t('contact_title')}</button>
  </div>
</div>`;
}

/* ============================================================
   ABOUT
   ============================================================ */
function renderAbout() {
  const milestones = currentLang === 'zh' ? [
    { year:'2018', title:'品牌创立', desc:'NordHjem在赫尔辛基创立，致力于将北欧设计理念带入现代家居。' },
    { year:'2019', title:'首家旗舰店', desc:'斯德哥尔摩旗舰店盛大开业，迅速成为设计爱好者的聚集地。' },
    { year:'2020', title:'扩展品类', desc:'推出灯具与装饰品系列，完善全屋解决方案。' },
    { year:'2022', title:'全球电商上线', desc:'电商平台正式上线，服务遍及全球30余个国家。' },
    { year:'2024', title:'可持续承诺', desc:'荣获北欧可持续设计认证，承诺2030年实现碳中和。' },
    { year:'2026', title:'全新篇章', desc:'推出2026春季系列，持续引领北欧设计新风尚。' },
  ] : [
    { year:'2018', title:'Brand Founded', desc:'NordHjem was founded in Helsinki with a mission to bring Scandinavian design principles to modern living spaces worldwide.' },
    { year:'2019', title:'First Flagship Store', desc:'Opened our Stockholm flagship store, which quickly became a destination for design enthusiasts and interior lovers.' },
    { year:'2020', title:'Expanded Collection', desc:'Launched our lighting and decor collections, completing the full-home offering we\'re known for today.' },
    { year:'2022', title:'Global E-Commerce Launch', desc:'Launched our global online platform, bringing Nordic design to 30+ countries and counting.' },
    { year:'2024', title:'Sustainability Commitment', desc:'Achieved Nordic Sustainable Design certification and committed to carbon neutrality by 2030.' },
    { year:'2026', title:'New Chapter', desc:'Launched our Spring 2026 collection, continuing our tradition of timeless, beautiful Scandinavian design.' },
  ];

  const team = [
    { name:'Annika Lindström', role:'Founder & Creative Director', img:'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face' },
    { name:'Erik Johansson',   role:'Head of Design',             img:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face' },
    { name:'Sofia Mäkinen',    role:'Head of Sustainability',     img:'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face' },
    { name:'Lars Bergström',   role:'Master Craftsman',           img:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face' },
  ];

  return `
<!-- Hero -->
<div class="about-hero">
  <img src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&h=600&fit=crop" alt="NordHjem">
  <div class="about-hero-content">
    <h1>${t('about_title')}</h1>
    <p>${t('about_subtitle')}</p>
  </div>
</div>

<!-- Our Story -->
<section class="section">
  <div class="container">
    <div class="about-story-grid">
      <div class="about-story-text">
        <h2>${currentLang==='zh'?'我们的故事':'Our Story'}</h2>
        <p>${currentLang==='zh'
          ?'NordHjem诞生于2018年的赫尔辛基，由一群热爱北欧设计的工匠和设计师共同创立。我们相信，好的设计应当经久耐用、触手可及。'
          :'NordHjem was born in 2018 in Helsinki, founded by craftsmen and designers passionate about Scandinavian design. We believe great design should be enduring and accessible.'}</p>
        <p>${currentLang==='zh'
          ?'每件NordHjem作品都经过精心设计与工艺打磨，使用经认证的可持续材料，在北欧工坊手工制作而成。'
          :'Every NordHjem piece is thoughtfully designed and crafted using certified sustainable materials, handmade in Nordic workshops.'}</p>
        <button class="btn btn-primary" onclick="navigate('#/category/Living Room')" style="margin-top:var(--space-5)">
          ${currentLang==='zh'?'探索系列':'Explore Collection'}
        </button>
      </div>
      <div class="about-story-image">
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=600&h=450&fit=crop" alt="Workshop">
      </div>
    </div>
  </div>
</section>

<!-- Timeline -->
<section class="about-timeline" style="background:var(--surface-2)">
  <div class="container">
    <h2>${currentLang==='zh'?'发展历程':'Our Journey'}</h2>
    <div class="timeline-items">
      ${milestones.map(m => `
      <div class="timeline-item">
        <div class="timeline-year">${m.year}</div>
        <div class="timeline-item-content">
          <h3>${m.title}</h3>
          <p>${m.desc}</p>
        </div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Sustainability -->
<section class="section">
  <div class="container">
    <div style="text-align:center;max-width:640px;margin:0 auto var(--space-12)">
      <h2 style="font-family:var(--font-display);font-size:var(--text-3xl);margin-bottom:var(--space-4)">${t('sustainability_title')}</h2>
      <p style="color:var(--text-secondary);font-size:var(--text-md)">${currentLang==='zh'
        ?'可持续发展是我们一切决策的核心，而非事后附加。从原材料采购到包装与运输，我们持续减少每一步的环境影响。'
        :'Sustainability is at the core of every decision we make — not an afterthought. From material sourcing to packaging and shipping, we work to reduce our impact at every step.'}</p>
    </div>
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:var(--space-6)">
      ${[
        {icon:'tree-pine', title: currentLang==='zh'?'可持续木材':'Sustainable Wood', desc: currentLang==='zh'?'100%来源于经FSC认证的森林':'100% sourced from FSC-certified forests'},
        {icon:'recycle', title: currentLang==='zh'?'零废弃包装':'Zero-Waste Packaging', desc: currentLang==='zh'?'全部包装可回收或可堆肥':'All packaging is recyclable or compostable'},
        {icon:'zap', title: currentLang==='zh'?'碳中和物流':'Carbon-Neutral Shipping', desc: currentLang==='zh'?'所有配送均实现碳抵消':'All deliveries are carbon-offset'},
        {icon:'heart', title: currentLang==='zh'?'公平贸易':'Fair Trade', desc: currentLang==='zh'?'工匠均获公平薪酬与优质工作环境':'Our craftspeople earn fair wages in safe conditions'},
      ].map(item => `
      <div style="text-align:center;padding:var(--space-6);background:var(--surface);border-radius:var(--radius-lg);border:1px solid var(--border)">
        <div style="width:56px;height:56px;background:rgba(44,62,45,0.08);border-radius:var(--radius-full);display:flex;align-items:center;justify-content:center;margin:0 auto var(--space-4)">
          <i data-lucide="${item.icon}" style="width:24px;height:24px;color:var(--primary)"></i>
        </div>
        <h3 style="font-weight:700;font-size:var(--text-base);margin-bottom:var(--space-2)">${item.title}</h3>
        <p style="font-size:var(--text-sm);color:var(--text-secondary)">${item.desc}</p>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- Team -->
<section class="section" style="background:var(--surface-2)">
  <div class="container">
    <h2 style="font-family:var(--font-display);font-size:var(--text-3xl);text-align:center;margin-bottom:var(--space-10)">${currentLang==='zh'?'我们的团队':'Our Team'}</h2>
    <div class="team-grid">
      ${team.map(member => `
      <div class="team-card">
        <div class="team-avatar">
          <img src="${member.img}" alt="${member.name}" onerror="this.src='https://picsum.photos/seed/${encodeURIComponent(member.name)}/200/200'">
        </div>
        <div class="team-name">${member.name}</div>
        <div class="team-role">${member.role}</div>
      </div>`).join('')}
    </div>
  </div>
</section>

<!-- CTA -->
<section class="newsletter-section">
  <div class="container">
    <h2 class="section-title">${currentLang==='zh'?'准备好了吗？':'Ready to Transform Your Space?'}</h2>
    <p>${currentLang==='zh'?'探索我们的完整系列，打造属于你的北欧风情家居':'Explore our full collection and create your own Nordic sanctuary'}</p>
    <button class="btn btn-accent btn-lg" onclick="navigate('#/category/Living Room')">${t('shop_all')}</button>
  </div>
</section>`;
}

/* ============================================================
   CONTACT
   ============================================================ */
function renderContact() {
  return `
<div class="container">
  <div style="padding:var(--space-8) 0 0">
    <h1 style="font-family:var(--font-display);font-size:var(--text-3xl);margin-bottom:var(--space-2)">${t('contact_title')}</h1>
    <p style="color:var(--text-secondary);margin-bottom:var(--space-6)">${currentLang==='zh'?'我们通常在24小时内回复':'We usually respond within 24 hours'}</p>
  </div>
  <div class="contact-layout">
    <div class="contact-form-section">
      <h2 class="contact-form-title">${currentLang==='zh'?'发送消息':'Send us a Message'}</h2>
      <form onsubmit="submitContact(event)">
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">${t('contact_name')}</label>
            <input class="input" type="text" id="contact-name" required>
          </div>
          <div class="form-group">
            <label class="form-label">${t('contact_email')}</label>
            <input class="input" type="email" id="contact-email" required>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label">${t('contact_subject')}</label>
          <select class="input" id="contact-subject" style="cursor:pointer">
            <option>${currentLang==='zh'?'订单问题':'Order Inquiry'}</option>
            <option>${currentLang==='zh'?'商品问题':'Product Question'}</option>
            <option>${currentLang==='zh'?'退换货':'Returns & Exchanges'}</option>
            <option>${currentLang==='zh'?'配送问题':'Shipping Issue'}</option>
            <option>${currentLang==='zh'?'其他':'Other'}</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">${t('contact_message')}</label>
          <textarea class="input" id="contact-message" rows="6" required
            style="resize:vertical;min-height:140px"></textarea>
        </div>
        <button class="btn btn-primary btn-lg" type="submit">
          <i data-lucide="send" style="width:16px;height:16px;display:inline-block"></i>
          ${t('contact_send')}
        </button>
      </form>
    </div>
    <div class="contact-info-section">
      <h2 class="contact-info-title">${currentLang==='zh'?'联系方式':'Get in Touch'}</h2>
      <div class="contact-info-item">
        <div class="contact-info-icon"><i data-lucide="phone"></i></div>
        <div>
          <div class="contact-info-label">${t('contact_phone_label')}</div>
          <div class="contact-info-value">+1 (888) 667-4356</div>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon"><i data-lucide="mail"></i></div>
        <div>
          <div class="contact-info-label">${t('contact_email_label')}</div>
          <div class="contact-info-value">hello@nordhjem.com</div>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon"><i data-lucide="clock"></i></div>
        <div>
          <div class="contact-info-label">${t('contact_hours_label')}</div>
          <div class="contact-info-value">${currentLang==='zh'?'周一至周五 9:00–18:00':'Mon–Fri, 9am–6pm EST'}</div>
        </div>
      </div>
      <div class="contact-info-item">
        <div class="contact-info-icon"><i data-lucide="map-pin"></i></div>
        <div>
          <div class="contact-info-label">${t('contact_address_label')}</div>
          <div class="contact-info-value">Norrsken House<br>Birger Jarlsgatan 57C<br>Stockholm, Sweden</div>
        </div>
      </div>
      <div class="map-placeholder">
        <i data-lucide="map" style="width:24px;height:24px;display:inline-block"></i>
        ${currentLang==='zh'?'地图加载中...':'Map loading...'}
      </div>
    </div>
  </div>
</div>`;
}

/* ============================================================
   COMPARE
   ============================================================ */
function renderCompare() {
  const compareProducts = PRODUCTS.filter(p => compareList.includes(p.id));

  return `
<div class="container">
  <div class="compare-page">
    <div class="compare-header">
      <h1 style="font-family:var(--font-display);font-size:var(--text-3xl)">${t('compare_title')}</h1>
      ${compareProducts.length > 0 ? `<button class="btn btn-ghost btn-sm" onclick="compareList=[];renderApp()">
        ${currentLang==='zh'?'清空对比':'Clear All'}
      </button>` : ''}
    </div>
    ${compareProducts.length === 0 ? `
    <div class="compare-empty">
      <i data-lucide="bar-chart-2"></i>
      <h3 style="font-family:var(--font-display);font-size:var(--text-xl);margin-bottom:var(--space-3)">${t('compare_empty')}</h3>
      <p>${currentLang==='zh'?'在商品卡片或商品详情页点击"加入对比"按钮':'Click "Compare" on any product card or product page'}</p>
      <button class="btn btn-primary" style="margin-top:var(--space-6)" onclick="navigate('#/category/Living Room')">${t('nav_shop')}</button>
    </div>` : `
    <div class="compare-table-wrap">
      <table class="compare-table">
        <thead>
          <tr>
            <th style="background:var(--surface-2);width:140px"></th>
            ${compareProducts.map(pr => `
            <th>
              <div class="compare-col-header" style="position:relative">
                <button class="compare-remove-btn" onclick="toggleCompare(${pr.id})">
                  <i data-lucide="x" style="width:12px;height:12px;display:block"></i>
                </button>
                <img class="compare-product-img" src="${esc(pr.image)}" alt="${esc(p(pr.name))}"
                     onerror="this.src='https://picsum.photos/seed/cmp${pr.id}/400/400'">
                <div class="compare-product-name">${esc(p(pr.name))}</div>
                <div style="font-size:var(--text-lg);font-weight:700;color:var(--primary);text-align:center">${formatPrice(pr.price)}</div>
                ${renderStars(pr.rating)}
              </div>
            </th>`).join('')}
            ${compareProducts.length < 4 ? `<th><div style="display:flex;align-items:center;justify-content:center;height:200px;color:var(--text-muted);cursor:pointer;font-size:var(--text-sm);font-weight:500" onclick="navigate('#/category/Living Room')">+ ${currentLang==='zh'?'添加商品':'Add Product'}</div></th>` : ''}
          </tr>
        </thead>
        <tbody>
          ${[
            { key: 'brand', label: currentLang==='zh'?'品牌':'Brand', fn: pr => pr.brand },
            { key: 'category', label: currentLang==='zh'?'分类':'Category', fn: pr => pr.category },
            { key: 'rating', label: currentLang==='zh'?'评分':'Rating', fn: pr => pr.rating + '/5' },
            { key: 'dimensions', label: currentLang==='zh'?'尺寸':'Dimensions', fn: pr => pr.dimensions || '—' },
            { key: 'material', label: currentLang==='zh'?'材质':'Material', fn: pr => p(pr.material) || '—' },
            { key: 'origin', label: currentLang==='zh'?'产地':'Origin', fn: pr => p(pr.origin) || '—' },
            { key: 'delivery', label: currentLang==='zh'?'配送':'Delivery', fn: pr => pr.delivery || '3-5 days' },
          ].map(row => {
            const vals = compareProducts.map(pr => row.fn(pr));
            const allSame = vals.every(v => v === vals[0]);
            return `
            <tr>
              <td class="spec-label">${row.label}</td>
              ${compareProducts.map(pr => `<td class="${allSame?'':'compare-different'}">${esc(row.fn(pr))}</td>`).join('')}
              ${compareProducts.length < 4 ? '<td></td>' : ''}
            </tr>`;
          }).join('')}
          <tr>
            <td class="spec-label">${currentLang==='zh'?'操作':'Action'}</td>
            ${compareProducts.map(pr => `
            <td style="text-align:center;padding:var(--space-4)">
              <button class="btn btn-primary btn-sm" onclick="addToCart(${pr.id})">${t('add_to_cart')}</button>
            </td>`).join('')}
            ${compareProducts.length < 4 ? '<td></td>' : ''}
          </tr>
        </tbody>
      </table>
    </div>`}
  </div>
</div>`;
}

/* ============================================================
   404
   ============================================================ */
function render404() {
  return `
<div class="page-404">
  <div class="page-404-art">
    <svg width="200" height="120" viewBox="0 0 200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="20" y="40" width="60" height="70" rx="4" fill="var(--primary)"/>
      <rect x="90" y="20" width="50" height="90" rx="4" fill="var(--primary-light)"/>
      <rect x="150" y="50" width="35" height="60" rx="4" fill="var(--accent)"/>
      <rect x="10" y="110" width="185" height="4" rx="2" fill="var(--border-strong)"/>
    </svg>
  </div>
  <h1>${t('page_not_found')}</h1>
  <p>${t('page_not_found_desc')}</p>
  <div class="page-404-actions">
    <button class="btn btn-primary" onclick="navigate('#/')">${t('go_home')}</button>
    <button class="btn btn-ghost" onclick="navigate('#/contact')">${currentLang==='zh'?'联系客服':'Contact Support'}</button>
  </div>
  <div class="page-404-search">
    <i data-lucide="search"></i>
    <input type="text" placeholder="${t('search_placeholder')}"
      onkeydown="if(event.key==='Enter'){navigate('#/search?q='+encodeURIComponent(this.value))}">
  </div>
</div>`;
}


/* ============================================================
   ACTION HANDLERS
   ============================================================ */

// Language
function setLang(lang) {
  currentLang = lang;
  renderApp();
}

// Cart actions
function addToCart(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(i => i.productId === productId);
  if (existing) {
    existing.qty++;
    showToast(p(product.name) + ' — ' + t('added_to_cart'), 'success');
  } else {
    cart.push({
      productId,
      name: p(product.name),
      image: product.image,
      price: product.price,
      qty: 1,
      color: product.colorNames ? (product.colorNames[currentLang] || product.colorNames.en || [])[0] : '',
    });
    showToast(p(product.name) + ' — ' + t('added_to_cart'), 'success');
  }
  // Update cart badge without full re-render
  const badge = document.querySelector('.cart-badge');
  const cartCount = cart.reduce((s,i) => s + i.qty, 0);
  const cartBtn = document.querySelector('[aria-label="' + t('nav_cart') + '"]') || document.querySelector('[aria-label="Cart"]') || document.querySelector('[aria-label="购物车"]');
  if (cartBtn) {
    let b = cartBtn.querySelector('.cart-badge');
    if (!b) { b = document.createElement('span'); b.className = 'cart-badge'; cartBtn.appendChild(b); }
    b.textContent = cartCount;
  }
}

function addToCartPDP(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;
  const qty = parseInt(document.getElementById('pdp-qty')?.value) || 1;
  const existing = cart.find(i => i.productId === productId);
  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({
      productId,
      name: p(product.name),
      image: product.image,
      price: product.price,
      qty: qty,
      color: product.colorNames ? (product.colorNames[currentLang] || product.colorNames.en || [])[0] : '',
    });
  }
  showToast(p(product.name) + ' — ' + t('added_to_cart'), 'success');
}

function removeFromCart(productId) {
  cart = cart.filter(i => i.productId !== productId);
  renderApp();
}

function updateCartQty(productId, delta) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  const input = document.querySelector(`[onchange="setCartQty(${productId},+this.value)"]`);
  if (input) input.value = item.qty;
  // Refresh price displays
  renderApp();
}

function setCartQty(productId, qty) {
  const item = cart.find(i => i.productId === productId);
  if (!item) return;
  item.qty = Math.max(1, Math.min(99, qty || 1));
  renderApp();
}

function applyPromoCode() {
  const code = document.getElementById('promo-input')?.value?.toUpperCase()?.trim();
  if (code === 'NORDIC20') {
    appliedPromo = 'NORDIC20';
    showToast(currentLang === 'zh' ? '优惠码已应用！享受8折优惠' : 'Promo code applied! 20% off', 'success');
    renderApp();
  } else {
    showToast(currentLang === 'zh' ? '优惠码无效' : 'Invalid promo code', 'error');
  }
}

// Wishlist
function toggleWishlist(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast(currentLang === 'zh' ? '已从收藏夹移除' : 'Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast(currentLang === 'zh' ? '已加入收藏夹' : 'Added to wishlist', 'success');
  }
  // Update UI without full re-render
  const btn = document.querySelector(`.product-card-wishlist[onclick*="toggleWishlist(${productId})"]`);
  if (btn) {
    btn.classList.toggle('wishlisted', wishlist.includes(productId));
    const icon = btn.querySelector('svg');
    if (icon) icon.setAttribute('fill', wishlist.includes(productId) ? 'var(--sale)' : 'none');
  }
}

function toggleWishlistPDP(productId) {
  const idx = wishlist.indexOf(productId);
  if (idx >= 0) {
    wishlist.splice(idx, 1);
    showToast(currentLang === 'zh' ? '已从收藏夹移除' : 'Removed from wishlist');
  } else {
    wishlist.push(productId);
    showToast(currentLang === 'zh' ? '已加入收藏夹' : 'Added to wishlist', 'success');
  }
  const btn = document.getElementById('pdp-wishlist-btn');
  if (btn) {
    btn.classList.toggle('btn-primary', wishlist.includes(productId));
    btn.classList.toggle('btn-ghost', !wishlist.includes(productId));
  }
}

// Compare
function toggleCompare(productId) {
  const idx = compareList.indexOf(productId);
  if (idx >= 0) {
    compareList.splice(idx, 1);
    showToast(currentLang === 'zh' ? '已从对比移除' : 'Removed from compare');
  } else if (compareList.length >= 4) {
    showToast(t('compare_max'), 'error');
    return;
  } else {
    compareList.push(productId);
    showToast(currentLang === 'zh' ? '已加入对比' : 'Added to compare', 'success');
  }
}

// Search
function toggleSearch() {
  const overlay = document.getElementById('search-overlay');
  if (overlay) {
    overlay.classList.add('open');
    setTimeout(() => document.getElementById('search-field')?.focus(), 100);
  }
}
function closeSearch(event) {
  if (event.target.id === 'search-overlay') closeSearchDirect();
}
function closeSearchDirect() {
  document.getElementById('search-overlay')?.classList.remove('open');
}
function handleSearchKey(event) {
  if (event.key === 'Escape') closeSearchDirect();
  if (event.key === 'Enter') {
    const q = event.target.value.trim();
    if (q) {
      closeSearchDirect();
      navigate('#/search?q=' + encodeURIComponent(q));
    }
  }
}

// Mobile menu
function openMobileMenu() {
  document.getElementById('mobile-menu')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeMobileMenu(event) {
  if (event.target.id === 'mobile-menu') closeMobileMenuDirect();
}
function closeMobileMenuDirect() {
  document.getElementById('mobile-menu')?.classList.remove('open');
  document.body.style.overflow = '';
}

// Filter drawer
function openFilterDrawer() {
  document.getElementById('filter-drawer')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeFilterDrawer() {
  document.getElementById('filter-drawer')?.classList.remove('open');
  document.body.style.overflow = '';
}
function closeFilterDrawerOutside(event) {
  if (event.target.id === 'filter-drawer') closeFilterDrawer();
}

function toggleBrandFilter(brand) {
  const idx = plpFilters.brands.indexOf(brand);
  if (idx >= 0) plpFilters.brands.splice(idx, 1);
  else plpFilters.brands.push(brand);
}

function applyFilters() {
  plpPage = 1;
  closeFilterDrawer();
  renderApp();
}

function clearFilters() {
  plpFilters = { priceMin: 0, priceMax: 99999, brands: [], rating: 0, freeShipping: false };
  plpSort = 'featured';
  plpPage = 1;
  renderApp();
}

function renderPLPInPlace(catName) {
  plpPage = 1;
  navigate('#/category/' + encodeURIComponent(catName));
}

function goToPage(page, catName) {
  plpPage = page;
  navigate('#/category/' + encodeURIComponent(catName) + '?page=' + page);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// PDP actions
function switchPDPImage(src, thumbEl) {
  const main = document.getElementById('pdp-main-img');
  if (main) main.src = src;
  document.querySelectorAll('.pdp-thumb').forEach(t => t.classList.remove('active'));
  if (thumbEl) thumbEl.classList.add('active');
}

function changePDPQty(delta) {
  const input = document.getElementById('pdp-qty');
  if (!input) return;
  input.value = Math.max(1, Math.min(99, parseInt(input.value) + delta));
}

function selectPDPColor(el, idx, colorNames) {
  document.querySelectorAll('.pdp-color-swatch').forEach(s => s.classList.remove('active'));
  el.classList.add('active');
  const label = document.getElementById('pdp-color-label');
  if (label && colorNames && colorNames[idx]) label.textContent = colorNames[idx];
}

function switchTab(tabName) {
  document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.tab-panel').forEach(p => p.classList.remove('active'));
  document.getElementById('tab-' + tabName)?.classList.add('active');
  document.getElementById('panel-' + tabName)?.classList.add('active');
}

function setReviewStar(rating) {
  document.querySelectorAll('.star-input-btn').forEach((btn, i) => {
    btn.classList.toggle('active', i < rating);
  });
}

function submitReview(productId) {
  const name = document.getElementById('review-name')?.value?.trim();
  const comment = document.getElementById('review-comment')?.value?.trim();
  if (!name || !comment) {
    showToast(currentLang === 'zh' ? '请填写所有字段' : 'Please fill all fields', 'error');
    return;
  }
  showToast(t('review_success'), 'success');
  if (document.getElementById('review-name')) document.getElementById('review-name').value = '';
  if (document.getElementById('review-comment')) document.getElementById('review-comment').value = '';
}

// Auth actions
function doSignIn(event) {
  event.preventDefault();
  const email = document.getElementById('login-email')?.value;
  const password = document.getElementById('login-password')?.value;
  if (!email || !password) return;
  // Mock sign in
  currentUser = {
    firstName: 'Nordic',
    lastName: 'User',
    email: email,
  };
  showToast(t('login_success'), 'success');
  navigate('#/');
}

function doRegister(event) {
  event.preventDefault();
  const first = document.getElementById('reg-first')?.value;
  const last = document.getElementById('reg-last')?.value;
  const email = document.getElementById('reg-email')?.value;
  const pass = document.getElementById('reg-password')?.value;
  const confirm = document.getElementById('reg-confirm')?.value;
  if (pass !== confirm) {
    showToast(currentLang === 'zh' ? '两次密码不一致' : 'Passwords do not match', 'error');
    return;
  }
  currentUser = { firstName: first, lastName: last, email };
  showToast(t('register_success'), 'success');
  navigate('#/');
}

function doSocialLogin(provider) {
  currentUser = { firstName: 'Nordic', lastName: 'User', email: 'user@example.com' };
  showToast(t('login_success'), 'success');
  navigate('#/');
}

function doSignOut() {
  currentUser = null;
  showToast(currentLang === 'zh' ? '已退出登录' : 'Signed out successfully');
  navigate('#/');
}

function doForgotPassword(event) {
  event.preventDefault();
  showToast(t('reset_link_sent'), 'success');
  navigate('#/auth');
}

function togglePwd(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  if (input.type === 'password') {
    input.type = 'text';
    if (btn) btn.innerHTML = '<i data-lucide="eye-off" style="width:18px;height:18px;display:block"></i>';
  } else {
    input.type = 'password';
    if (btn) btn.innerHTML = '<i data-lucide="eye" style="width:18px;height:18px;display:block"></i>';
  }
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Checkout actions
function proceedCheckout(step) {
  if (step === 2) {
    checkoutData.phone = document.getElementById('co-phone')?.value || '';
    checkoutData.fname = document.getElementById('co-fname')?.value || '';
    checkoutData.lname = document.getElementById('co-lname')?.value || '';
    checkoutData.addr1 = document.getElementById('co-addr1')?.value || '';
    checkoutData.addr2 = document.getElementById('co-addr2')?.value || '';
    checkoutData.city = document.getElementById('co-city')?.value || '';
    checkoutData.state = document.getElementById('co-state')?.value || '';
    checkoutData.zip = document.getElementById('co-zip')?.value || '';
    checkoutData.country = document.getElementById('co-country')?.value || '';
  }
  checkoutStep = step;
  renderApp();
}

function formatCardNumber(input) {
  let val = input.value.replace(/\D/g,'').slice(0,16);
  val = val.replace(/(.{4})/g,'$1 ').trim();
  input.value = val;
}

function placeOrder() {
  checkoutData.orderNumber = 'NH-' + Math.floor(Math.random() * 900000 + 100000);
  checkoutData.confirmed = true;
  orders.push({ ...checkoutData, items: [...cart] });
  cart = [];
  appliedPromo = null;
  checkoutStep = 1;
  renderApp();
}

// Account actions
function saveProfile(event) {
  event.preventDefault();
  if (currentUser) {
    currentUser.firstName = document.getElementById('prof-first')?.value || currentUser.firstName;
    currentUser.lastName  = document.getElementById('prof-last')?.value  || currentUser.lastName;
    currentUser.email     = document.getElementById('prof-email')?.value || currentUser.email;
  }
  showToast(t('saved'), 'success');
  renderApp();
}

function showAddressForm() {
  showToast(currentLang === 'zh' ? '地址功能即将上线' : 'Address form coming soon');
}

// FAQ actions
function toggleAccordion(id) {
  const item = document.getElementById(id);
  if (!item) return;
  item.classList.toggle('open');
}

function scrollToFAQSection(idx) {
  document.getElementById(`faq-sec-${idx}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function filterFAQ(query) {
  const q = query.toLowerCase();
  document.querySelectorAll('.accordion-item').forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = q && !text.includes(q) ? 'none' : '';
  });
}

// Coupon actions
function claimCoupon(code) {
  if (!claimedCoupons.includes(code)) {
    claimedCoupons.push(code);
    showToast(currentLang === 'zh' ? '优惠券已领取！' : 'Coupon claimed!', 'success');
    renderApp();
  }
}

function copyCode(code) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(code);
    showToast(currentLang === 'zh' ? `优惠码 ${code} 已复制` : `Code ${code} copied!`, 'success');
  }
}

function applyCoupon(code) {
  appliedPromo = code;
  navigate('#/cart');
  showToast(currentLang === 'zh' ? '优惠码已应用' : 'Coupon applied', 'success');
}

// Contact form
function submitContact(event) {
  event.preventDefault();
  showToast(t('contact_sent'), 'success');
  event.target.reset();
}

// Newsletter
function subscribeNewsletter() {
  const emailEl = document.getElementById('footer-email') || document.getElementById('nl-email');
  if (emailEl?.value?.includes('@')) {
    showToast(currentLang === 'zh' ? '订阅成功！' : 'Subscribed successfully!', 'success');
    emailEl.value = '';
  } else {
    showToast(currentLang === 'zh' ? '请输入有效邮箱' : 'Please enter a valid email', 'error');
  }
}

/* ============================================================
   HERO CAROUSEL
   ============================================================ */
let heroCurrentSlide = 0;
let heroInterval = null;

function goToSlide(idx) {
  const slides = document.getElementById('hero-slides');
  const dots = document.querySelectorAll('.hero-dot');
  if (!slides) return;
  heroCurrentSlide = idx;
  slides.style.transform = `translateX(-${idx * 100}%)`;
  dots.forEach((d, i) => d.classList.toggle('active', i === idx));
}

function heroSlide(dir) {
  const slides = document.getElementById('hero-slides');
  if (!slides) return;
  const count = slides.children.length;
  heroCurrentSlide = (heroCurrentSlide + dir + count) % count;
  goToSlide(heroCurrentSlide);
}

function startHeroAutoPlay() {
  stopHeroAutoPlay();
  heroInterval = setInterval(() => heroSlide(1), 5000);
}
function stopHeroAutoPlay() {
  if (heroInterval) { clearInterval(heroInterval); heroInterval = null; }
}

/* ============================================================
   BACK TO TOP
   ============================================================ */
function initBackToTop() {
  const btn = document.getElementById('back-to-top');
  if (!btn) return;
  const onScroll = () => btn.classList.toggle('visible', window.scrollY > 400);
  window.removeEventListener('scroll', window._bttScroll || (() => {}));
  window._bttScroll = onScroll;
  window.addEventListener('scroll', onScroll, { passive: true });
  btn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}

/* ============================================================
   INIT COMPONENTS
   ============================================================ */
function initComponents() {
  // Hero carousel
  if (document.getElementById('hero-slides')) {
    heroCurrentSlide = 0;
    startHeroAutoPlay();
    const heroEl = document.querySelector('.hero');
    if (heroEl) {
      heroEl.addEventListener('mouseenter', stopHeroAutoPlay);
      heroEl.addEventListener('mouseleave', startHeroAutoPlay);
    }
  }

  // Accordion items (all closed by default, open first)
  // (handled by CSS max-height)

  // Active nav link
  const { path } = getRoute();
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
}

/* ============================================================
   INIT APP
   ============================================================ */
window.addEventListener('hashchange', () => {
  checkoutData.confirmed = false;
  renderApp();
});

// Initial render
renderApp();

