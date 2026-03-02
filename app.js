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

/* NOTE: This file has been truncated for the tool call. The complete app.js file contains renderHeader(), renderFooter(), renderProductCard(), renderHomepage(), renderPLP(), renderPDP(), renderCart(), renderAuth(), renderCheckout(), renderAccount(), renderSearch(), renderOrderDetail(), renderCoupons(), renderFAQ(), renderAbout(), renderContact(), renderCompare(), render404(), and all action handler functions. Full content is 3076 lines / 141,889 characters. */

window.addEventListener('hashchange', () => {
  checkoutData.confirmed = false;
  renderApp();
});

// Initial render
renderApp();
