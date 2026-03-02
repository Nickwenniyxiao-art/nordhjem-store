/* NordHjem Product Database — 500+ Nordic Furniture Products */
const PRODUCTS = [
  {
    id: 1,
    name: {
      en: 'Ström 3-Seat Sofa',
      zh: '斯特罗姆三人沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1299,
    originalPrice: 1299,
    discount: 0,
    rating: 3.5,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord1x0/600/600', 'https://picsum.photos/seed/nord1x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Ström sofa embodies pure Scandinavian comfort with its deep cushions and clean-lined silhouette. Crafted with a solid beech frame and wrapped in durable linen blend fabric, it anchors any living room with understated elegance.',
      zh: '斯特罗姆三人沙发融合北欧纯粹美学与深邃的坐感，简洁的线条与优质山毛榉框架相得益彰。亚麻混纺面料耐用且透气，为家居空间注入低调优雅。'
    },
    specs: {
      Material: 'Linen blend, solid beech frame',
      Dimensions: 'W220×D90×H82 cm',
      Weight: '48 kg',
      Upholstery: 'Linen blend',
      Frame: 'Solid beech',
      Cushion: 'High-density foam',
      Assembly: 'Required'
    },
    material: {
      en: 'Linen blend, solid beech frame',
      zh: '亚麻混纺面料，实木山毛榉框架'
    },
    dimensions: 'W220×D90×H82 cm',
    weight: '48 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 2,
    name: {
      en: 'Viken Sectional Sofa',
      zh: '维肯转角沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 2499,
    originalPrice: 2499,
    discount: 0,
    rating: 3.7,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord2x0/600/600', 'https://picsum.photos/seed/nord2x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'A generous L-shaped sectional built for Nordic living rooms, the Viken features removable covers and reversible chaise for flexible configuration. Solid oak legs ground the piece with warmth and stability.',
      zh: '维肯转角沙发专为宽敞的北欧客厅打造，可拆洗布套与可翻转贵妃椅让配置灵活多变。实木橡木脚赋予整体温暖稳固的质感。'
    },
    specs: {
      Material: 'Wool fabric, oak legs',
      Dimensions: 'W290×D160×H80 cm',
      Weight: '72 kg',
      Upholstery: '100% wool',
      Frame: 'Solid pine',
      Legs: 'Solid oak',
      Configuration: 'Reversible chaise'
    },
    material: {
      en: 'Wool fabric, oak legs',
      zh: '羊毛织物，橡木脚'
    },
    dimensions: 'W290×D160×H80 cm',
    weight: '72 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 3,
    name: {
      en: 'Lind 2-Seat Loveseat',
      zh: '琳德双人沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 849,
    originalPrice: 849,
    discount: 0,
    rating: 3.8,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord3x0/600/600', 'https://picsum.photos/seed/nord3x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'Compact and inviting, the Lind loveseat is ideal for smaller Nordic-inspired spaces. Its tight-back design and tapered legs give a timeless Scandinavian look without sacrificing comfort.',
      zh: '琳德双人沙发小巧温馨，非常适合北欧风格的小空间。挺括的靠背设计与锥形木腿展现经典北欧美学，兼顾实用与舒适。'
    },
    specs: {
      Material: 'Cotton-linen, beech frame',
      Dimensions: 'W155×D85×H79 cm',
      Weight: '32 kg',
      Upholstery: 'Cotton-linen',
      "Seat depth": '58 cm',
      "Leg material": 'Beech',
      Assembly: 'Required'
    },
    material: {
      en: 'Cotton-linen, beech frame',
      zh: '棉麻混纺，山毛榉框架'
    },
    dimensions: 'W155×D85×H79 cm',
    weight: '32 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 4,
    name: {
      en: 'Fjord Chesterfield Sofa',
      zh: '峡湾切斯特菲尔德沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1799,
    originalPrice: 1799,
    discount: 0,
    rating: 3.9,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord4x0/600/600', 'https://picsum.photos/seed/nord4x1/600/600'],
    badges: ['Sale'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Fjord reimagines the classic chesterfield with Scandinavian restraint—tufted cushions and rolled arms in full-grain leather on solid oak feet. An heirloom-quality piece that improves with age.',
      zh: '峡湾沙发以北欧克制美学重新诠释经典切斯特菲尔德风格，全粒面皮革钮扣软包配合实心橡木脚。是一件随时间愈显韵味的传家之作。'
    },
    specs: {
      Material: 'Full-grain leather, solid oak',
      Dimensions: 'W210×D88×H75 cm',
      Weight: '55 kg',
      Upholstery: 'Full-grain leather',
      Frame: 'Solid hardwood',
      Tufting: 'Deep button',
      Legs: 'Solid oak'
    },
    material: {
      en: 'Full-grain leather, solid oak',
      zh: '全粒面皮革，实心橡木'
    },
    dimensions: 'W210×D88×H75 cm',
    weight: '55 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 5,
    name: {
      en: 'Elsa Modular Sofa',
      zh: '艾尔莎组合沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 3299,
    originalPrice: 3299,
    discount: 0,
    rating: 4.0,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord5x0/600/600', 'https://picsum.photos/seed/nord5x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Elsa modular system lets you design your perfect sofa—from a two-seater to a full sectional. Each module connects seamlessly with hidden magnetic clasps, while the recycled fabric honors Nordic sustainability values.',
      zh: '艾尔莎模块化沙发让您自由设计理想的沙发组合，从双人位到大型转角沙发，各模块通过隐藏磁扣无缝衔接。再生面料彰显北欧可持续生活理念。'
    },
    specs: {
      Material: 'Recycled fabric, metal frame',
      Dimensions: 'W300×D95×H76 cm',
      Weight: '90 kg',
      Modules: 'Individually sold',
      Fabric: 'Recycled polyester',
      Frame: 'Powder-coated steel',
      Connection: 'Magnetic clasp'
    },
    material: {
      en: 'Recycled fabric, metal frame',
      zh: '再生面料，金属框架'
    },
    dimensions: 'W300×D95×H76 cm',
    weight: '90 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 6,
    name: {
      en: 'Tora Low-Profile Sofa',
      zh: '托拉低背沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1099,
    originalPrice: 1220,
    discount: 10,
    rating: 4.1,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord6x0/600/600', 'https://picsum.photos/seed/nord6x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'With its low profile and cloud-soft bouclé upholstery, the Tora sofa brings a relaxed contemporary Nordic feel. Solid walnut legs add a touch of warmth to its plush silhouette.',
      zh: '托拉低背沙发以柔软的布克莱面料和流畅的低矮轮廓，呈现轻松的当代北欧风格。实木胡桃木腿为蓬松的造型增添一丝温暖。'
    },
    specs: {
      Material: 'Bouclé, walnut legs',
      Dimensions: 'W200×D95×H68 cm',
      Weight: '40 kg',
      Upholstery: 'Bouclé',
      Legs: 'Solid walnut',
      "Seat height": '38 cm',
      "Cushion fill": 'Feather blend'
    },
    material: {
      en: 'Bouclé, walnut legs',
      zh: '布克莱面料，胡桃木腿'
    },
    dimensions: 'W200×D95×H68 cm',
    weight: '40 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 7,
    name: {
      en: 'Nora Sofa Bed',
      zh: '诺拉沙发床'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1189,
    originalPrice: 1189,
    discount: 0,
    rating: 4.2,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord7x0/600/600', 'https://picsum.photos/seed/nord7x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Nora combines everyday sofa comfort with a fully flat sleeping surface, perfect for Nordic apartments where space is precious. The click-clack mechanism operates silently and smoothly.',
      zh: '诺拉沙发床将日常沙发与完整卧铺功能合二为一，非常适合寸土寸金的北欧公寓。无声顺滑的折叠机构让转换轻松自如。'
    },
    specs: {
      Material: 'Microfiber, steel mechanism',
      Dimensions: 'W210×D92×H83 cm',
      Weight: '58 kg',
      Upholstery: 'Microfiber',
      "Bed size": '140×195 cm',
      Mechanism: 'Click-clack',
      "Mattress thickness": '10 cm'
    },
    material: {
      en: 'Microfiber, steel mechanism',
      zh: '超细纤维面料，钢制机构'
    },
    dimensions: 'W210×D92×H83 cm',
    weight: '58 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 8,
    name: {
      en: 'Sven Curved Sofa',
      zh: '斯文弧形沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 2199,
    originalPrice: 2585,
    discount: 15,
    rating: 4.3,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord8x0/600/600', 'https://picsum.photos/seed/nord8x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'Sven\'s gentle arc creates a natural gathering space inspired by Nordic communal fire-side seating. Premium velvet in muted Nordic tones drapes over polished chrome legs for a sophisticated look.',
      zh: '斯文弧形沙发的柔和弧度灵感源于北欧围炉而坐的传统，营造自然的聚会空间。哑光北欧色调丝绒搭配抛光镀铬脚，展现精致品位。'
    },
    specs: {
      Material: 'Velvet, chrome legs',
      Dimensions: 'W240×D100×H78 cm',
      Weight: '65 kg',
      Upholstery: 'Premium velvet',
      Legs: 'Polished chrome',
      "Seating capacity": '3-4 persons',
      Cushion: 'Spring-foam hybrid'
    },
    material: {
      en: 'Velvet, chrome legs',
      zh: '丝绒面料，镀铬腿'
    },
    dimensions: 'W240×D100×H78 cm',
    weight: '65 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 9,
    name: {
      en: 'Grön Garden Sofa',
      zh: '格龙花园沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1499,
    originalPrice: 1499,
    discount: 0,
    rating: 4.4,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord9x0/600/600', 'https://picsum.photos/seed/nord9x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Grön blurs the boundary between indoor and outdoor Nordic living. Weatherproof Sunbrella fabric and sustainably sourced teak frame ensure lasting beauty through all seasons.',
      zh: '格龙花园沙发模糊了北欧室内外生活的界限，防晒Sunbrella面料与可持续柚木框架确保全季节持久美观。'
    },
    specs: {
      Material: 'Sunbrella fabric, teak frame',
      Dimensions: 'W195×D88×H75 cm',
      Weight: '45 kg',
      Frame: 'FSC teak',
      Fabric: 'Sunbrella UV-resistant',
      Cushion: 'Quick-dry foam',
      Finish: 'Teak oil'
    },
    material: {
      en: 'Sunbrella fabric, teak frame',
      zh: '户外防晒面料，柚木框架'
    },
    dimensions: 'W195×D88×H75 cm',
    weight: '45 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 10,
    name: {
      en: 'Pax Sleeper Sofa',
      zh: '帕克斯睡眠沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1349,
    originalPrice: 1685,
    discount: 20,
    rating: 4.5,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord10x0/600/600', 'https://picsum.photos/seed/nord10x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'Pax is designed for the modern Nordic home where every piece earns its keep. The innovative pull-out mechanism requires no lifting, and the stain-resistant fabric handles real family life effortlessly.',
      zh: '帕克斯专为注重实用的现代北欧家庭设计，创新拉出式机构无需抬起，防污面料轻松应对家庭日常。'
    },
    specs: {
      Material: 'Stain-resistant fabric, beech',
      Dimensions: 'W218×D93×H85 cm',
      Weight: '62 kg',
      Mechanism: 'Pull-out (no-lift)',
      "Bed size": '135×190 cm',
      Fabric: 'Stain-resistant',
      Frame: 'Solid beech'
    },
    material: {
      en: 'Stain-resistant fabric, beech',
      zh: '防污面料，山毛榉木'
    },
    dimensions: 'W218×D93×H85 cm',
    weight: '62 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 11,
    name: {
      en: 'Asa Accent Sofa',
      zh: '阿莎装饰沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 979,
    originalPrice: 979,
    discount: 0,
    rating: 4.6,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord11x0/600/600', 'https://picsum.photos/seed/nord11x1/600/600'],
    badges: ['Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Asa\'s slender arms and organic cotton upholstery reflect the simplicity and honesty of Scandinavian craft traditions. A sofa that breathes with the space rather than dominating it.',
      zh: '阿莎的细窄扶手与有机棉面料体现斯堪的纳维亚工艺传统的简约与真诚，与空间和谐共生而非独占一方。'
    },
    specs: {
      Material: 'Organic cotton, pine frame',
      Dimensions: 'W180×D82×H77 cm',
      Weight: '36 kg',
      Upholstery: 'Organic cotton',
      Frame: 'FSC pine',
      Legs: 'Solid ash',
      Cushion: 'Natural latex'
    },
    material: {
      en: 'Organic cotton, pine frame',
      zh: '有机棉，松木框架'
    },
    dimensions: 'W180×D82×H77 cm',
    weight: '36 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 12,
    name: {
      en: 'Boda Corner Sofa',
      zh: '博达角落沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 2799,
    originalPrice: 2799,
    discount: 0,
    rating: 4.7,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord12x0/600/600', 'https://picsum.photos/seed/nord12x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'Boda\'s generous corner configuration invites the whole family to relax together in true Nordic hygge style. Chunky oak feet and a textured woven fabric create a grounded, natural aesthetic.',
      zh: '博达转角沙发宽大的L型设计邀请全家人共享北欧hygge时光，粗犷的橡木脚与编织纹理面料营造自然踏实的美学。'
    },
    specs: {
      Material: 'Textured fabric, oak',
      Dimensions: 'W270×D150×H79 cm',
      Weight: '80 kg',
      Configuration: 'Fixed corner',
      Upholstery: 'Textured weave',
      Legs: 'Solid oak',
      Reversible: 'No'
    },
    material: {
      en: 'Textured fabric, oak',
      zh: '纹理面料，橡木'
    },
    dimensions: 'W270×D150×H79 cm',
    weight: '80 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 13,
    name: {
      en: 'Rine Compact Sofa',
      zh: '莱因紧凑型沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 699,
    originalPrice: 930,
    discount: 25,
    rating: 4.8,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord13x0/600/600', 'https://picsum.photos/seed/nord13x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Rine is designed for apartment living—compact enough for a studio yet comfortable enough for everyday use. Its light birch legs keep the visual weight minimal.',
      zh: '莱因沙发专为公寓生活设计，适合单间公寓却足够舒适。浅色桦木腿将视觉重量降至最低。'
    },
    specs: {
      Material: 'Polyester blend, birch',
      Dimensions: 'W165×D80×H76 cm',
      Weight: '28 kg',
      Upholstery: 'Polyester blend',
      Frame: 'Solid birch',
      "Seat height": '42 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Polyester blend, birch',
      zh: '聚酯混纺，桦木'
    },
    dimensions: 'W165×D80×H76 cm',
    weight: '28 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 14,
    name: {
      en: 'Solna Deep-Seat Sofa',
      zh: '索尔纳深坐沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1649,
    originalPrice: 1649,
    discount: 0,
    rating: 4.9,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord14x0/600/600', 'https://picsum.photos/seed/nord14x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'Solna is built for Nordic evenings spent reading or unwinding—its exceptional seat depth and oversized cushions make it the ultimate relaxation station. Chenille upholstery adds a cosy tactile quality.',
      zh: '索尔纳专为北欧长夜读书或放松而生，超宽座深与大号靠垫打造终极放松基地。雪尼尔面料带来温柔的触感。'
    },
    specs: {
      Material: 'Chenille, solid oak',
      Dimensions: 'W225×D105×H80 cm',
      Weight: '52 kg',
      Upholstery: 'Chenille',
      "Seat depth": '72 cm',
      Frame: 'Solid oak',
      Cushion: 'Memory foam + feather'
    },
    material: {
      en: 'Chenille, solid oak',
      zh: '雪尼尔面料，实心橡木'
    },
    dimensions: 'W225×D105×H80 cm',
    weight: '52 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 15,
    name: {
      en: 'Eik Accent Chair',
      zh: '艾克装饰椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 449,
    originalPrice: 640,
    discount: 30,
    rating: 5.0,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord15x0/600/600', 'https://picsum.photos/seed/nord15x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Eik accent chair is a timeless Nordic statement piece. Its curved silhouette and tactile bouclé upholstery pair beautifully with clean Scandinavian interiors, while solid oak legs provide lasting structure.',
      zh: '艾克装饰椅是经典的北欧装饰单品，圆润的轮廓与触感丰富的布克莱面料与北欧简约室内完美搭配，实心橡木腿确保经久耐用。'
    },
    specs: {
      Material: 'Boucle, solid oak',
      Dimensions: 'W75×D78×H82 cm',
      Weight: '14 kg',
      Upholstery: 'Bouclé',
      Legs: 'Solid oak',
      "Seat height": '43 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Boucle, solid oak',
      zh: '布克莱，实心橡木'
    },
    dimensions: 'W75×D78×H82 cm',
    weight: '14 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 16,
    name: {
      en: 'Lars Rocking Chair',
      zh: '拉尔斯摇椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 599,
    originalPrice: 599,
    discount: 0,
    rating: 3.5,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord16x0/600/600', 'https://picsum.photos/seed/nord16x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'Inspired by traditional Nordic rocking chairs, Lars modernises the form with clean angles and premium wool upholstery. The solid beech rockers are shaped to provide a gentle, natural motion.',
      zh: '拉尔斯摇椅灵感源于北欧传统摇椅，以简洁线条和优质羊毛面料演绎现代诠释。实心山毛榉弧形底座提供轻柔自然的摇摆感。'
    },
    specs: {
      Material: 'Wool, solid beech',
      Dimensions: 'W71×D90×H95 cm',
      Weight: '12 kg',
      Upholstery: '100% wool',
      Frame: 'Solid beech',
      "Rocking base": 'Beech',
      Motion: 'Smooth arc'
    },
    material: {
      en: 'Wool, solid beech',
      zh: '羊毛，实心山毛榉'
    },
    dimensions: 'W71×D90×H95 cm',
    weight: '12 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 17,
    name: {
      en: 'Moa Egg Chair',
      zh: '莫阿蛋形椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 799,
    originalPrice: 799,
    discount: 0,
    rating: 3.7,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord17x0/600/600', 'https://picsum.photos/seed/nord17x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Moa is a contemporary take on the iconic pod chair—a self-contained cocoon for reading or meditating. Its swivel base rotates 360° for effortless positioning in any Nordic room.',
      zh: '莫阿是现代版经典茧形椅，为阅读或冥想提供私密包裹空间。可360°旋转的底座让任意朝向调整轻松自如。'
    },
    specs: {
      Material: 'Fabric shell, steel base',
      Dimensions: 'W79×D79×H107 cm',
      Weight: '22 kg',
      Shell: 'Fibreglass + foam',
      Upholstery: 'Fabric',
      Base: 'Polished steel',
      Swivel: '360°'
    },
    material: {
      en: 'Fabric shell, steel base',
      zh: '布面外壳，钢制底座'
    },
    dimensions: 'W79×D79×H107 cm',
    weight: '22 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 18,
    name: {
      en: 'Dag Lounge Chair',
      zh: '达格休闲椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 669,
    originalPrice: 669,
    discount: 0,
    rating: 3.8,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord18x0/600/600', 'https://picsum.photos/seed/nord18x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Dag lounge chair takes its cues from mid-century Nordic design—clean forms, honest materials, and comfort that invites you to stay. Top-grain leather and solid walnut legs are built to last generations.',
      zh: '达格休闲椅承袭中世纪北欧设计基因——干净的造型、真实的材料、令人留恋的舒适感。顶级粒面皮革与实心胡桃木腿历久弥新。'
    },
    specs: {
      Material: 'Leather, walnut',
      Dimensions: 'W78×D82×H78 cm',
      Weight: '16 kg',
      Upholstery: 'Top-grain leather',
      Legs: 'Solid walnut',
      "Seat height": '40 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Leather, walnut',
      zh: '真皮，胡桃木'
    },
    dimensions: 'W78×D82×H78 cm',
    weight: '16 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 19,
    name: {
      en: 'Freia Papasan Chair',
      zh: '弗蕾亚大圆椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 329,
    originalPrice: 385,
    discount: 15,
    rating: 3.9,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord19x0/600/600', 'https://picsum.photos/seed/nord19x1/600/600'],
    badges: ['Sale'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'The Freia papasan brings bohemian Nordic warmth to any space. The hand-woven rattan frame and oversized cotton cushion create an irresistibly cozy reading nook.',
      zh: '弗蕾亚大圆椅为空间带来波西米亚北欧温情，手工编织藤框与超大棉垫打造令人难以抗拒的阅读小角落。'
    },
    specs: {
      Material: 'Cotton cushion, rattan frame',
      Dimensions: 'W95×D95×H86 cm',
      Weight: '10 kg',
      Frame: 'Natural rattan',
      Cushion: 'Thick cotton',
      Diameter: '90 cm',
      "Removable cushion": 'Yes'
    },
    material: {
      en: 'Cotton cushion, rattan frame',
      zh: '棉垫，藤编框架'
    },
    dimensions: 'W95×D95×H86 cm',
    weight: '10 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 20,
    name: {
      en: 'Åsa Wingback Chair',
      zh: '奥莎翼背椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 729,
    originalPrice: 729,
    discount: 0,
    rating: 4.0,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord20x0/600/600', 'https://picsum.photos/seed/nord20x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Åsa wingback offers a dramatic silhouette rooted in Scandinavian design heritage. Plush velvet upholstery and a high, enveloping back create a private reading sanctuary.',
      zh: '奥莎翼背椅以北欧设计传统为根，展现戏剧性的轮廓。华丽丝绒与高耸包裹的靠背营造私密的阅读圣地。'
    },
    specs: {
      Material: 'Velvet, oak',
      Dimensions: 'W73×D80×H110 cm',
      Weight: '18 kg',
      Upholstery: 'Premium velvet',
      Legs: 'Solid oak',
      "Back height": '110 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet, oak',
      zh: '丝绒，橡木'
    },
    dimensions: 'W73×D80×H110 cm',
    weight: '18 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 21,
    name: {
      en: 'Bjørn Bear Chair',
      zh: '比约恩熊椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 519,
    originalPrice: 575,
    discount: 10,
    rating: 4.1,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord21x0/600/600', 'https://picsum.photos/seed/nord21x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'Named for its plush, bear-hug comfort, the Bjørn is upholstered in ultra-soft sherpa fabric that brings tactile warmth to a Nordic room. Chunky pine legs add natural character.',
      zh: '以熊抱般的包裹感命名，比约恩椅以超柔仿羊绒面料带来触感温暖。粗壮的松木腿增添自然个性。'
    },
    specs: {
      Material: 'Sherpa fabric, pine',
      Dimensions: 'W85×D88×H76 cm',
      Weight: '20 kg',
      Upholstery: 'Sherpa',
      Frame: 'Solid pine',
      "Seat depth": '65 cm',
      Cushion: 'High-density foam'
    },
    material: {
      en: 'Sherpa fabric, pine',
      zh: '仿羊绒面料，松木'
    },
    dimensions: 'W85×D88×H76 cm',
    weight: '20 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 22,
    name: {
      en: 'Kira Accent Chair',
      zh: '奇拉装饰椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 389,
    originalPrice: 389,
    discount: 0,
    rating: 4.2,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord22x0/600/600', 'https://picsum.photos/seed/nord22x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'Kira\'s slim profile and textured tweed upholstery make it a versatile companion in any Scandinavian-inspired interior. The powder-coated metal legs add a subtle industrial edge.',
      zh: '奇拉椅轻盈的轮廓与纹理粗花呢面料使其成为北欧风室内的百搭之选，哑光金属腿增添微妙的工业感。'
    },
    specs: {
      Material: 'Tweed, metal legs',
      Dimensions: 'W72×D76×H80 cm',
      Weight: '12 kg',
      Upholstery: 'Tweed blend',
      Legs: 'Powder-coated steel',
      "Seat height": '44 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Tweed, metal legs',
      zh: '粗花呢，金属腿'
    },
    dimensions: 'W72×D76×H80 cm',
    weight: '12 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 23,
    name: {
      en: 'Unn Swivel Chair',
      zh: '乌恩旋转椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 479,
    originalPrice: 479,
    discount: 0,
    rating: 4.3,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord23x0/600/600', 'https://picsum.photos/seed/nord23x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'The Unn swivel chair pairs Nordic comfort with functional flexibility. Its 360° swivel and modern shape work as well at a desk as in a living room.',
      zh: '乌恩旋转椅结合北欧舒适与灵活功能，360°旋转设计既适合书桌旁也适合客厅使用。'
    },
    specs: {
      Material: 'Fabric, chrome base',
      Dimensions: 'W76×D78×H77 cm',
      Weight: '15 kg',
      Upholstery: 'Woven fabric',
      Base: 'Polished chrome',
      Swivel: '360°',
      Assembly: 'Required'
    },
    material: {
      en: 'Fabric, chrome base',
      zh: '面料，镀铬底座'
    },
    dimensions: 'W76×D78×H77 cm',
    weight: '15 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 24,
    name: {
      en: 'Viggo Armchair + Ottoman',
      zh: '维格扶手椅与脚凳'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 899,
    originalPrice: 1500,
    discount: 40,
    rating: 4.4,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord24x0/600/600', 'https://picsum.photos/seed/nord24x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Viggo set pairs a deeply comfortable armchair with a matching ottoman for the ultimate Nordic relaxation experience. Teak legs complement the natural cotton-linen upholstery beautifully.',
      zh: '维格套装将深度舒适的扶手椅与配套脚凳结合，打造终极北欧放松体验。柚木腿与天然棉麻面料相映成趣。'
    },
    specs: {
      Material: 'Cotton-linen, teak',
      Dimensions: 'W80×D84×H78 cm',
      Weight: '22 kg',
      "Set includes": 'Chair + ottoman',
      Upholstery: 'Cotton-linen',
      Legs: 'Solid teak',
      Assembly: 'Required'
    },
    material: {
      en: 'Cotton-linen, teak',
      zh: '棉麻混纺，柚木'
    },
    dimensions: 'W80×D84×H78 cm',
    weight: '22 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 25,
    name: {
      en: 'Lone Reading Chair',
      zh: '隆尼阅读椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 559,
    originalPrice: 559,
    discount: 0,
    rating: 4.5,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord25x0/600/600', 'https://picsum.photos/seed/nord25x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'Lone is designed for long reading sessions with ergonomic lumbar support and a gently reclined back angle. The tactile bouclé finish invites you to settle in.',
      zh: '隆尼阅读椅专为长时间阅读设计，配备人体工学腰部支撑和轻微后倾背角。丰富的布克莱触感让您乐于久坐。'
    },
    specs: {
      Material: 'Boucle, ash wood',
      Dimensions: 'W77×D80×H92 cm',
      Weight: '17 kg',
      Upholstery: 'Bouclé',
      "Lumbar support": 'Built-in',
      Legs: 'Solid ash',
      "Back angle": '105°'
    },
    material: {
      en: 'Boucle, ash wood',
      zh: '布克莱，白蜡木'
    },
    dimensions: 'W77×D80×H92 cm',
    weight: '17 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 26,
    name: {
      en: 'Hilde Tub Chair',
      zh: '希尔德桶形椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.6,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord26x0/600/600', 'https://picsum.photos/seed/nord26x1/600/600'],
    badges: ['Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Hilde tub chair brings soft geometry to Scandinavian interiors. Its rounded shell and plush velvet upholstery are as inviting as a warm embrace.',
      zh: '希尔德桶形椅将柔和几何感带入北欧室内，圆润的外壳与华丽丝绒如温暖拥抱般令人沉醉。'
    },
    specs: {
      Material: 'Velvet, tapered legs',
      Dimensions: 'W72×D69×H74 cm',
      Weight: '11 kg',
      Upholstery: 'Velvet',
      Legs: 'Solid beech, tapered',
      "Seat height": '43 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet, tapered legs',
      zh: '丝绒，锥形腿'
    },
    dimensions: 'W72×D69×H74 cm',
    weight: '11 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 27,
    name: {
      en: 'Nils Cantilever Lounge',
      zh: '尼尔斯悬臂休闲椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 429,
    originalPrice: 535,
    discount: 20,
    rating: 4.7,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord27x0/600/600', 'https://picsum.photos/seed/nord27x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'Inspired by Scandinavian functionalism, the Nils cantilever chair balances on a flowing chrome frame that provides natural flex. The slim profile fits beautifully in minimal Nordic spaces.',
      zh: '灵感源于斯堪的纳维亚功能主义，尼尔斯悬臂椅以流线型镀铬框架提供自然弹性。轻薄的轮廓与极简北欧空间完美融合。'
    },
    specs: {
      Material: 'Fabric, chrome steel',
      Dimensions: 'W62×D88×H78 cm',
      Weight: '9 kg',
      Frame: 'Polished chrome',
      Upholstery: 'Fabric',
      Flex: 'Natural spring',
      Assembly: 'Required'
    },
    material: {
      en: 'Fabric, chrome steel',
      zh: '面料，镀铬钢'
    },
    dimensions: 'W62×D88×H78 cm',
    weight: '9 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 28,
    name: {
      en: 'Saga Club Chair',
      zh: '萨迦会所椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 819,
    originalPrice: 819,
    discount: 0,
    rating: 4.8,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord28x0/600/600', 'https://picsum.photos/seed/nord28x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Saga club chair is a Nordic take on the classic gentleman\'s chair—lower and wider, with broader arms and a more relaxed posture. Patinated full-grain leather develops character over decades of use.',
      zh: '萨迦会所椅是北欧对经典绅士椅的诠释——更低、更宽、更放松的坐姿。全粒面皮革随岁月形成独特包浆。'
    },
    specs: {
      Material: 'Full-grain leather, solid oak',
      Dimensions: 'W82×D84×H77 cm',
      Weight: '24 kg',
      Upholstery: 'Full-grain leather',
      Legs: 'Solid oak',
      "Arm width": '18 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Full-grain leather, solid oak',
      zh: '全粒面皮革，实心橡木'
    },
    dimensions: 'W82×D84×H77 cm',
    weight: '24 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 29,
    name: {
      en: 'Nora Nursing Chair',
      zh: '诺拉哺乳椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 489,
    originalPrice: 489,
    discount: 0,
    rating: 4.9,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord29x0/600/600', 'https://picsum.photos/seed/nord29x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Nora nursing chair was designed with care for both parent and child. Its gentle rocking motion, padded armrests, and removable washable cover make night feeds more comfortable.',
      zh: '诺拉哺乳椅专为父母与婴儿用心设计，轻柔的摇摆、软垫扶手和可拆洗椅套让深夜哺乳更加舒适。'
    },
    specs: {
      Material: 'Organic cotton, beech',
      Dimensions: 'W68×D78×H90 cm',
      Weight: '13 kg',
      Upholstery: 'Organic cotton',
      Frame: 'Solid beech',
      Motion: 'Gliding',
      Cover: 'Removable & washable'
    },
    material: {
      en: 'Organic cotton, beech',
      zh: '有机棉，山毛榉'
    },
    dimensions: 'W68×D78×H90 cm',
    weight: '13 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 30,
    name: {
      en: 'Bjørk Coffee Table',
      zh: '白桦咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 5.0,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord30x0/600/600', 'https://picsum.photos/seed/nord30x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Bjørk coffee table showcases the natural grain of solid oak with a matte lacquer finish that protects without obscuring the wood\'s innate beauty. Its classic proportions suit both modern and traditional Nordic interiors.',
      zh: '白桦咖啡桌以哑光漆保护实心橡木，在不掩盖木材天然纹理的前提下彰显其内在美。经典的比例既适合现代也适合传统北欧室内。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W110×D60×H40 cm',
      Weight: '22 kg',
      Finish: 'Matte lacquer',
      Assembly: 'Minimal',
      Sustainability: 'FSC certified'
    },
    material: {
      en: 'Solid oak, matte lacquer',
      zh: '实心橡木，哑光漆'
    },
    dimensions: 'W110×D60×H40 cm',
    weight: '22 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 31,
    name: {
      en: 'Moss Round Coffee Table',
      zh: '莫斯圆形咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 3.5,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord31x0/600/600', 'https://picsum.photos/seed/nord31x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Moss round coffee table pairs a cool Carrara marble top with a warm brass base for a refined Nordic-contemporary statement. The circular form softens angular furniture arrangements.',
      zh: '莫斯圆形咖啡桌将卡拉拉大理石桌面与黄铜底座结合，展现精致的北欧当代风格。圆形轮廓柔化了棱角分明的家具组合。'
    },
    specs: {
      Material: 'Marble top, brass base',
      Dimensions: 'Ø90×H38 cm',
      Weight: '18 kg',
      Top: 'Carrara marble',
      Base: 'Solid brass',
      Shape: 'Round',
      Assembly: 'Required'
    },
    material: {
      en: 'Marble top, brass base',
      zh: '大理石桌面，黄铜底座'
    },
    dimensions: 'Ø90×H38 cm',
    weight: '18 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 32,
    name: {
      en: 'Frame Nesting Tables',
      zh: '框架嵌套桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 3.7,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord32x0/600/600', 'https://picsum.photos/seed/nord32x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Frame nesting set includes two tables that slide under each other for flexible use. Tempered glass tops and slim powder-coated steel frames bring an airy Nordic-industrial feel.',
      zh: '框架嵌套桌套装含两张可相互叠放的桌子，使用灵活。钢化玻璃桌面与纤薄的粉末涂层钢框架带来轻盈的北欧工业感。'
    },
    specs: {
      Material: 'Tempered glass, steel',
      Dimensions: 'W80×D45×H40 cm',
      Weight: '9 kg',
      Set: '2 tables',
      Top: 'Tempered glass',
      Frame: 'Powder-coated steel',
      Stacking: 'Yes'
    },
    material: {
      en: 'Tempered glass, steel',
      zh: '钢化玻璃，钢'
    },
    dimensions: 'W80×D45×H40 cm',
    weight: '9 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 33,
    name: {
      en: 'Knut Trunk Coffee Table',
      zh: '克努特储物咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 479,
    originalPrice: 479,
    discount: 0,
    rating: 3.8,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord33x0/600/600', 'https://picsum.photos/seed/nord33x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'The Knut blends the practicality of a storage trunk with the function of a coffee table. The linen-lined interior provides hidden storage for throws and magazines, keeping your Nordic living room serene.',
      zh: '克努特将储物箱的实用与咖啡桌的功能完美融合，亚麻衬里内部储物空间可收纳毯子和杂志，维持北欧客厅的整洁宁静。'
    },
    specs: {
      Material: 'Pine, linen lid',
      Dimensions: 'W120×D60×H42 cm',
      Weight: '28 kg',
      "Top material": 'Solid pine',
      Interior: 'Linen-lined',
      Storage: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Pine, linen lid',
      zh: '松木，亚麻盖'
    },
    dimensions: 'W120×D60×H42 cm',
    weight: '28 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 34,
    name: {
      en: 'Tyn Scandinavian Coffee Table',
      zh: '泰恩斯堪的纳维亚咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 319,
    originalPrice: 319,
    discount: 0,
    rating: 3.9,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord34x0/600/600', 'https://picsum.photos/seed/nord34x1/600/600'],
    badges: ['Sale'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'Tyn\'s wide, low profile and natural oiled ash top celebrate the quiet beauty of Scandinavian woodworking. The hairpin legs offer a timeless mid-century touch.',
      zh: '泰恩的宽低轮廓与天然油处理的白蜡木桌面颂扬斯堪的纳维亚木工的静谧之美，发夹腿带来永恒的中世纪风情。'
    },
    specs: {
      Material: 'Solid ash',
      Dimensions: 'W100×D55×H38 cm',
      Weight: '16 kg',
      Finish: 'Natural oil',
      Legs: 'Hairpin, steel',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid ash, natural oil',
      zh: '实心白蜡木，天然油'
    },
    dimensions: 'W100×D55×H38 cm',
    weight: '16 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 35,
    name: {
      en: 'Vipp Marble Coffee Table',
      zh: '维普大理石咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 649,
    originalPrice: 649,
    discount: 0,
    rating: 4.0,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord35x0/600/600', 'https://picsum.photos/seed/nord35x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Vipp makes a bold statement with its rare green marble top and polished brass legs. A sculptural centrepiece for the design-conscious Nordic home.',
      zh: '维普以罕见的绿色大理石桌面和抛光黄铜腿展现大胆宣言，是设计意识强烈的北欧家居的雕塑级主角。'
    },
    specs: {
      Material: 'Green marble, brass legs',
      Dimensions: 'W130×D65×H38 cm',
      Weight: '42 kg',
      Top: 'Marquina green marble',
      Legs: 'Solid brass',
      Shape: 'Rectangular'
    },
    material: {
      en: 'Green marble, brass legs',
      zh: '绿色大理石，黄铜腿'
    },
    dimensions: 'W130×D65×H38 cm',
    weight: '42 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 36,
    name: {
      en: 'Logi Lift-Top Coffee Table',
      zh: '洛吉升降咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 389,
    originalPrice: 430,
    discount: 10,
    rating: 4.1,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord36x0/600/600', 'https://picsum.photos/seed/nord36x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Logi\'s lift-top mechanism raises the surface to desk height for working from the sofa—a practical solution for the modern Nordic home office hybrid lifestyle.',
      zh: '洛吉的升降桌面机构可将桌面升至桌面高度，在沙发旁办公，是现代北欧居家办公混合生活方式的实用解决方案。'
    },
    specs: {
      Material: 'Oak veneer, steel',
      Dimensions: 'W115×D60×H42 cm',
      Weight: '24 kg',
      Top: 'Oak veneer',
      Frame: 'Steel',
      "Lift mechanism": 'Gas-assisted',
      Storage: 'Under-surface shelf'
    },
    material: {
      en: 'Oak veneer, steel',
      zh: '橡木贴皮，钢'
    },
    dimensions: 'W115×D60×H42 cm',
    weight: '24 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 37,
    name: {
      en: 'Floro Glass Coffee Table',
      zh: '弗洛罗玻璃咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 249,
    originalPrice: 249,
    discount: 0,
    rating: 4.2,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord37x0/600/600', 'https://picsum.photos/seed/nord37x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'Floro\'s all-glass construction creates the illusion of floating in space—perfect for smaller Nordic rooms where visual lightness is important. The chrome frame adds a sleek contemporary edge.',
      zh: '弗洛罗全玻璃结构营造漂浮空间的视觉幻觉，非常适合视觉通透感重要的小型北欧房间，镀铬框架增添时尚的当代感。'
    },
    specs: {
      Material: 'Tempered glass, chrome',
      Dimensions: 'W100×D50×H40 cm',
      Weight: '14 kg',
      Top: '12mm tempered glass',
      Frame: 'Chrome steel',
      Assembly: 'Required',
      Shape: 'Rectangular'
    },
    material: {
      en: 'Tempered glass, chrome',
      zh: '钢化玻璃，镀铬'
    },
    dimensions: 'W100×D50×H40 cm',
    weight: '14 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 38,
    name: {
      en: 'Alma Walnut Coffee Table',
      zh: '阿尔玛胡桃木咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 529,
    originalPrice: 620,
    discount: 15,
    rating: 4.3,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord38x0/600/600', 'https://picsum.photos/seed/nord38x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Alma showcases rich walnut grain in a restrained Nordic silhouette. Hand-applied natural oil deepens the wood\'s dark tones and protects it for decades of daily use.',
      zh: '阿尔玛以克制的北欧轮廓展现丰富的胡桃木纹理，手工涂抹的天然油深化木材深色调并提供数十年日常使用的保护。'
    },
    specs: {
      Material: 'Solid American walnut',
      Dimensions: 'W105×D55×H38 cm',
      Weight: '26 kg',
      Finish: 'Hand-oiled',
      Assembly: 'Required',
      Certification: 'FSC'
    },
    material: {
      en: 'Solid walnut, natural oil',
      zh: '实心胡桃木，天然油'
    },
    dimensions: 'W105×D55×H38 cm',
    weight: '26 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 39,
    name: {
      en: 'Pelle Rattan Coffee Table',
      zh: '佩勒藤编咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 279,
    originalPrice: 279,
    discount: 0,
    rating: 4.4,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord39x0/600/600', 'https://picsum.photos/seed/nord39x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'Pelle brings natural Nordic-boho texture to the living room with hand-woven rattan over a bamboo frame. The open weave creates beautiful light patterns throughout the day.',
      zh: '佩勒以手工藤编和竹框架为客厅带来自然的北欧波西米亚质感，镂空编织在日光下创造美丽的光影变化。'
    },
    specs: {
      Material: 'Rattan weave, bamboo legs',
      Dimensions: 'Ø80×H42 cm',
      Weight: '8 kg',
      Frame: 'Bamboo',
      Top: 'Woven rattan',
      Shape: 'Round',
      Assembly: 'Required'
    },
    material: {
      en: 'Rattan weave, bamboo legs',
      zh: '藤编，竹腿'
    },
    dimensions: 'Ø80×H42 cm',
    weight: '8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 40,
    name: {
      en: 'Nord TV Console',
      zh: '北方电视柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 549,
    originalPrice: 685,
    discount: 20,
    rating: 4.5,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord40x0/600/600', 'https://picsum.photos/seed/nord40x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Nord TV console combines Scandinavian clean lines with practical hidden storage. Its sliding doors conceal media equipment while the open shelf displays your favourite Nordic objects.',
      zh: '北方电视柜将北欧简约线条与实用收纳功能完美融合，推拉门遮藏影音设备，开放格展示心爱的北欧装饰品。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W160×D40×H50 cm',
      Weight: '35 kg',
      Doors: 'Sliding',
      "Max TV size": '75"',
      "Cable management": 'Yes'
    },
    material: {
      en: 'Solid oak, sliding doors',
      zh: '实心橡木，推拉门'
    },
    dimensions: 'W160×D40×H50 cm',
    weight: '35 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 41,
    name: {
      en: 'Linné Media Bench',
      zh: '林内媒体边柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 429,
    originalPrice: 429,
    discount: 0,
    rating: 4.6,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord41x0/600/600', 'https://picsum.photos/seed/nord41x1/600/600'],
    badges: ['Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Linné media bench sits close to the floor in classic Nordic style, with soft-close drawers and cable management ports built in. A calm, functional centrepiece for the modern living room.',
      zh: '林内媒体边柜以经典北欧风格紧贴地面，内置阻尼关门抽屉和走线孔，是现代客厅平静实用的核心家具。'
    },
    specs: {
      Material: 'Oak veneer, MDF body',
      Dimensions: 'W180×D40×H48 cm',
      Weight: '30 kg',
      Top: 'Oak veneer',
      Drawers: 'Soft-close',
      "Cable ports": '2×',
      "Max TV size": '70"'
    },
    material: {
      en: 'Oak veneer, MDF body',
      zh: '橡木贴皮，MDF板体'
    },
    dimensions: 'W180×D40×H48 cm',
    weight: '30 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 42,
    name: {
      en: 'Frigg Floating TV Unit',
      zh: '弗丽嘉悬浮电视柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 369,
    originalPrice: 369,
    discount: 0,
    rating: 4.7,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord42x0/600/600', 'https://picsum.photos/seed/nord42x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'Frigg\'s wall-mounted design frees up floor space and creates the illusion of a larger room. Made from knotty solid pine with a natural oil finish, it suits rustic Nordic interiors.',
      zh: '弗丽嘉壁挂设计解放地面空间，营造更大空间的视觉效果。节疤实心松木配天然油处理，适合质朴的北欧室内。'
    },
    specs: {
      Material: 'Knotty solid pine',
      Dimensions: 'W140×D30×H20 cm',
      Weight: '18 kg',
      Mount: 'Wall-mounted',
      Finish: 'Natural oil',
      Installation: 'Hardware included'
    },
    material: {
      en: 'Solid pine, wall-mount',
      zh: '实心松木，壁挂'
    },
    dimensions: 'W140×D30×H20 cm',
    weight: '18 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 43,
    name: {
      en: 'Holt Bookcase',
      zh: '霍尔特书柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 339,
    originalPrice: 450,
    discount: 25,
    rating: 4.8,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord43x0/600/600', 'https://picsum.photos/seed/nord43x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Holt bookcase leans naturally against the wall in a space-saving ladder configuration. Five open shelves provide flexible display and storage for books, plants, and Nordic objects.',
      zh: '霍尔特书柜以节省空间的梯形设计自然倚靠墙壁，五个开放格提供灵活的展示和收纳空间。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W80×D30×H180 cm',
      Weight: '22 kg',
      Shelves: '5',
      Style: 'Ladder',
      Freestanding: 'No (leaning)'
    },
    material: {
      en: 'Solid pine, ladder style',
      zh: '实心松木，梯形风格'
    },
    dimensions: 'W80×D30×H180 cm',
    weight: '22 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 44,
    name: {
      en: 'Berg Tall Bookcase',
      zh: '贝尔格高脚书柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 489,
    originalPrice: 489,
    discount: 0,
    rating: 4.9,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord44x0/600/600', 'https://picsum.photos/seed/nord44x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'Berg\'s tall, slender proportions are designed for high Nordic ceilings. Adjustable birch plywood shelves accommodate everything from coffee table books to vinyl records.',
      zh: '贝尔格高挑纤细的比例专为北欧高挑天花板设计，可调节桦木板搁板可容纳从画册到黑胶唱片的各类物品。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W90×D32×H200 cm',
      Weight: '32 kg',
      Height: '200 cm',
      "Adjustable shelves": 'Yes',
      "Wall fixings": 'Included'
    },
    material: {
      en: 'Birch ply, adjustable shelves',
      zh: '桦木板，可调节搁板'
    },
    dimensions: 'W90×D32×H200 cm',
    weight: '32 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 45,
    name: {
      en: 'Kvist Side Table',
      zh: '克维斯特边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 149,
    originalPrice: 215,
    discount: 30,
    rating: 5.0,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord45x0/600/600', 'https://picsum.photos/seed/nord45x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'Kvist\'s tripod form and solid oak construction make it an elegant minimal accent beside a sofa or bed. The single shelf below provides a spot for books or remotes.',
      zh: '克维斯特的三脚造型与实心橡木构造为沙发或床头提供优雅的极简装饰，下层搁板放置书籍或遥控器。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'Ø45×H55 cm',
      Weight: '4 kg',
      Legs: '3',
      "Lower shelf": 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, three legs',
      zh: '实心橡木，三脚'
    },
    dimensions: 'Ø45×H55 cm',
    weight: '4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 46,
    name: {
      en: 'Luna Marble Side Table',
      zh: '露娜大理石边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 3.5,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord46x0/600/600', 'https://picsum.photos/seed/nord46x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'Luna\'s circular marble top sits on a slender brushed-gold base, adding a touch of mineral luxury to Nordic interiors. Each marble top is unique with its own natural veining.',
      zh: '露娜的圆形大理石桌面立于纤细的拉丝金底座上，为北欧室内增添矿物质感的奢华。每块大理石桌面的天然纹理都是独一无二的。'
    },
    specs: {
      Material: 'Marble top, gold base',
      Dimensions: 'Ø40×H50 cm',
      Weight: '8 kg',
      Top: 'Natural marble',
      Base: 'Brushed gold steel',
      Shape: 'Round',
      Assembly: 'Required'
    },
    material: {
      en: 'Marble top, gold base',
      zh: '大理石桌面，金色底座'
    },
    dimensions: 'Ø40×H50 cm',
    weight: '8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 47,
    name: {
      en: 'Float Side Table',
      zh: '漂浮边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 3.7,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord47x0/600/600', 'https://picsum.photos/seed/nord47x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'Float\'s cantilever design creates the impression of a surface hovering in space—a playful yet functional Nordic form that works as a side table or small display shelf.',
      zh: '漂浮边桌的悬臂设计营造桌面悬浮空间的视觉效果，是既有趣又实用的北欧造型，可用作边桌或小型展示架。'
    },
    specs: {
      Material: 'MDF + steel',
      Dimensions: 'W50×D35×H55 cm',
      Weight: '5 kg',
      Style: 'Cantilever',
      "Wall-mounted": 'No',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, powder-coated steel',
      zh: 'MDF，粉末涂层钢'
    },
    dimensions: 'W50×D35×H55 cm',
    weight: '5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 48,
    name: {
      en: 'Saga Ottoman',
      zh: '萨迦脚凳'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 189,
    originalPrice: 189,
    discount: 0,
    rating: 3.8,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord48x0/600/600', 'https://picsum.photos/seed/nord48x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Saga ottoman doubles as extra seating and a footrest, upholstered in tactile bouclé and raised on solid beech legs. A versatile piece that complements any Nordic sofa.',
      zh: '萨迦脚凳兼作额外座位和脚凳，布克莱面料立于实心山毛榉腿上，是与任何北欧沙发相配的万能单品。'
    },
    specs: {
      Material: 'Boucle, beech legs',
      Dimensions: 'W80×D50×H38 cm',
      Weight: '8 kg',
      Upholstery: 'Bouclé',
      Legs: 'Solid beech',
      "Max weight": '150 kg',
      Assembly: 'Required'
    },
    material: {
      en: 'Boucle, beech legs',
      zh: '布克莱，山毛榉腿'
    },
    dimensions: 'W80×D50×H38 cm',
    weight: '8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 49,
    name: {
      en: 'Stig Storage Ottoman',
      zh: '斯蒂格储物脚凳'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 229,
    originalPrice: 270,
    discount: 15,
    rating: 3.9,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord49x0/600/600', 'https://picsum.photos/seed/nord49x1/600/600'],
    badges: ['Sale'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'Stig\'s removable lid reveals a spacious storage compartment inside—a clever Nordic solution for living rooms that need to stay clutter-free.',
      zh: '斯蒂格可拆卸盖板下方藏有宽大储物空间，是维持北欧客厅整洁的聪明解决方案。'
    },
    specs: {
      Material: 'Faux leather, MDF body',
      Dimensions: 'W90×D55×H40 cm',
      Weight: '12 kg',
      Upholstery: 'Faux leather',
      Storage: 'Yes',
      Lid: 'Removable',
      "Load capacity": '120 kg'
    },
    material: {
      en: 'Faux leather, MDF body',
      zh: '仿皮，MDF板体'
    },
    dimensions: 'W90×D55×H40 cm',
    weight: '12 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 50,
    name: {
      en: 'Mjuk Bean Bag',
      zh: '米尤克豆袋椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bean Bags',
      zh: '懒人沙发'
    },
    price: 159,
    originalPrice: 159,
    discount: 0,
    rating: 4.0,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord50x0/600/600', 'https://picsum.photos/seed/nord50x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Mjuk is the ultimate Nordic lounging companion—oversized, plush, and available in soft Nordic colour tones. The removable velvet cover is machine washable for easy care.',
      zh: '米尤克是终极北欧休闲伴侣——超大号、柔软蓬松，提供北欧柔和色调。可拆卸丝绒外套可机洗，维护轻松。'
    },
    specs: {
      Material: 'Velvet cover, EPS filling',
      Dimensions: 'Ø80×H80 cm',
      Weight: '4 kg',
      Fill: 'Virgin EPS beads',
      Cover: 'Removable velvet',
      Washable: 'Yes',
      "Carrying handle": 'Yes'
    },
    material: {
      en: 'Velvet cover, EPS filling',
      zh: '丝绒外套，EPS填充'
    },
    dimensions: 'Ø80×H80 cm',
    weight: '4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 51,
    name: {
      en: 'Kubb Cube Pouf',
      zh: '库布方形蒲团'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bean Bags',
      zh: '懒人沙发'
    },
    price: 99,
    originalPrice: 110,
    discount: 10,
    rating: 4.1,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord51x0/600/600', 'https://picsum.photos/seed/nord51x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'Kubb\'s chunky knit exterior adds handcraft Nordic warmth to any corner. The firm foam core means it functions equally well as seating or a footrest.',
      zh: '库布的粗犷针织外观为任何角落增添北欧手工温情。坚实的泡沫芯让其同时适合坐和放脚。'
    },
    specs: {
      Material: 'Cotton knit, foam core',
      Dimensions: 'W50×D50×H40 cm',
      Weight: '2 kg',
      Cover: 'Chunky cotton knit',
      Core: 'Solid foam',
      Shape: 'Cube',
      Washable: 'Yes'
    },
    material: {
      en: 'Cotton knit, foam core',
      zh: '棉针织，泡沫芯'
    },
    dimensions: 'W50×D50×H40 cm',
    weight: '2 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 52,
    name: {
      en: 'Kulla 2.5 Sofa',
      zh: '库拉两人半沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1149,
    originalPrice: 1149,
    discount: 0,
    rating: 4.2,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord52x0/600/600', 'https://picsum.photos/seed/nord52x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Kulla 2.5-seater sofa is designed for couples who love stretching out—its extended width allows for a fully horizontal lounge position. Solid ash legs and a textured woven cover bring Nordic nature indoors.',
      zh: '库拉两人半沙发为喜欢横躺的伴侣而设计，加宽尺寸允许完全横躺。实心白蜡木腿与纹理编织套将北欧自然带入室内。'
    },
    specs: {
      Material: 'Textured weave, solid ash',
      Dimensions: 'W190×D88×H80 cm',
      Weight: '44 kg',
      Upholstery: 'Textured weave',
      Frame: 'Solid ash',
      Width: '190 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Textured weave, solid ash',
      zh: '纹理面料，实心白蜡木'
    },
    dimensions: 'W190×D88×H80 cm',
    weight: '44 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 53,
    name: {
      en: 'Moss Velvet Sofa',
      zh: '莫斯丝绒沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1399,
    originalPrice: 1399,
    discount: 0,
    rating: 4.3,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord53x0/600/600', 'https://picsum.photos/seed/nord53x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'Deep forest-green velvet upholstery on solid birch legs—the Moss sofa brings Nordic forest colour into the living room with a contemporary sensibility. Its feather-blend cushions are sumptuously soft.',
      zh: '深森绿色丝绒面料立于实心桦木腿上，莫斯沙发将北欧森林色彩以当代气质带入客厅，羽毛混合坐垫极为柔软。'
    },
    specs: {
      Material: 'Velvet, birch legs',
      Dimensions: 'W215×D92×H78 cm',
      Weight: '50 kg',
      Upholstery: 'Premium velvet',
      Legs: 'Solid birch',
      Cushion: 'Feather blend',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet, birch legs',
      zh: '丝绒，桦木腿'
    },
    dimensions: 'W215×D92×H78 cm',
    weight: '50 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 54,
    name: {
      en: 'Vik 4-Seat Sofa',
      zh: '维克四人沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1999,
    originalPrice: 3330,
    discount: 40,
    rating: 4.4,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord54x0/600/600', 'https://picsum.photos/seed/nord54x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Vik 4-seater accommodates the whole family for movie nights and weekend lounging. Its wide, deep seats and natural linen upholstery embody the relaxed side of Scandinavian living.',
      zh: '维克四人沙发为全家的电影夜和周末休闲提供座位，宽大深邃的座椅和天然亚麻面料体现斯堪的纳维亚生活轻松的一面。'
    },
    specs: {
      Material: 'Linen, walnut legs',
      Dimensions: 'W255×D92×H79 cm',
      Weight: '68 kg',
      Upholstery: 'Natural linen',
      Legs: 'Solid walnut',
      Seats: '4',
      Assembly: 'Required'
    },
    material: {
      en: 'Linen, walnut legs',
      zh: '亚麻，胡桃木腿'
    },
    dimensions: 'W255×D92×H79 cm',
    weight: '68 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 55,
    name: {
      en: 'Dun Cloud Sofa',
      zh: '邓云朵沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 2599,
    originalPrice: 2599,
    discount: 0,
    rating: 4.5,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord55x0/600/600', 'https://picsum.photos/seed/nord55x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Dun cloud sofa earns its name with cushions that feel like sitting on air—an over-stuffed bouclé design with cloud-like proportions. Chrome legs ground the ethereal form.',
      zh: '邓云朵沙发名副其实，坐垫如坐在空气上，过度填充的布克莱设计呈现云朵般的比例，镀铬腿稳定了空灵的造型。'
    },
    specs: {
      Material: 'Bouclé, chrome legs',
      Dimensions: 'W230×D110×H76 cm',
      Weight: '75 kg',
      Upholstery: 'Bouclé',
      Legs: 'Polished chrome',
      "Cushion fill": 'Premium feather',
      Assembly: 'Required'
    },
    material: {
      en: 'Bouclé, chrome legs',
      zh: '布克莱，镀铬腿'
    },
    dimensions: 'W230×D110×H76 cm',
    weight: '75 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 56,
    name: {
      en: 'Strand Beach Sofa',
      zh: '斯特兰德海滩沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1299,
    originalPrice: 1299,
    discount: 0,
    rating: 4.6,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord56x0/600/600', 'https://picsum.photos/seed/nord56x1/600/600'],
    badges: ['Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Strand blurs boundaries between indoor and outdoor Nordic living with weather-resistant outdoor-grade upholstery and FSC teak legs. Perfect for a summer house.',
      zh: '斯特兰德以耐候户外面料和FSC柚木腿模糊北欧室内外生活的界限，非常适合夏日别墅。'
    },
    specs: {
      Material: 'Outdoor-grade fabric, teak',
      Dimensions: 'W220×D100×H75 cm',
      Weight: '48 kg',
      Upholstery: 'Outdoor-grade fabric',
      Legs: 'FSC teak',
      "Weather resistant": 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Outdoor-grade fabric, teak',
      zh: '户外级面料，柚木'
    },
    dimensions: 'W220×D100×H75 cm',
    weight: '48 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 57,
    name: {
      en: 'Berg Barrel Chair',
      zh: '贝尔格桶椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 589,
    originalPrice: 735,
    discount: 20,
    rating: 4.7,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord57x0/600/600', 'https://picsum.photos/seed/nord57x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Berg barrel chair rotates on a solid oak swivel base—perfect for turning to face a conversation partner or the view from a Nordic window. Warm wool upholstery adds tactile appeal.',
      zh: '贝尔格桶椅在实心橡木旋转底座上转动，非常适合转身面向谈话伙伴或北欧窗外的景色，温暖的羊毛面料增添触感吸引力。'
    },
    specs: {
      Material: 'Wool, oak swivel base',
      Dimensions: 'W80×D76×H80 cm',
      Weight: '18 kg',
      Upholstery: '100% wool',
      Base: 'Swivel oak',
      Swivel: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Wool, oak swivel base',
      zh: '羊毛，橡木旋转底座'
    },
    dimensions: 'W80×D76×H80 cm',
    weight: '18 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 58,
    name: {
      en: 'Finn Accent Chair',
      zh: '芬恩装饰椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 469,
    originalPrice: 469,
    discount: 0,
    rating: 4.8,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord58x0/600/600', 'https://picsum.photos/seed/nord58x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Finn\'s herringbone tweed and tapered beech legs reference the heritage of Nordic textile craft. A beautifully made accent chair that serves equally well in a study or living room.',
      zh: '芬恩的人字纹粗花呢与锥形山毛榉腿参考北欧纺织工艺传统，是一把精工制作的装饰椅，适合书房或客厅。'
    },
    specs: {
      Material: 'Herringbone tweed, beech',
      Dimensions: 'W74×D75×H82 cm',
      Weight: '13 kg',
      Upholstery: 'Herringbone tweed',
      Legs: 'Solid beech, tapered',
      "Seat height": '44 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Herringbone tweed, beech',
      zh: '人字纹粗花呢，山毛榉'
    },
    dimensions: 'W74×D75×H82 cm',
    weight: '13 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 59,
    name: {
      en: 'Rest Meditation Chair',
      zh: '瑞斯冥想椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 4.9,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord59x0/600/600', 'https://picsum.photos/seed/nord59x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Rest meditation chair is designed for mindful Nordic living—a low, wide seat inspired by Japanese and Scandinavian zazen culture, upholstered in organic cotton over a sustainable bamboo frame.',
      zh: '瑞斯冥想椅专为有意识的北欧生活设计，低矮宽大的座椅灵感源于日本和斯堪的纳维亚坐禅文化，有机棉面料覆盖可持续竹框架。'
    },
    specs: {
      Material: 'Organic cotton, bamboo',
      Dimensions: 'W75×D80×H72 cm',
      Weight: '10 kg',
      Upholstery: 'Organic cotton',
      Frame: 'Bamboo',
      "Seat height": '32 cm',
      Cushion: 'Natural kapok'
    },
    material: {
      en: 'Organic cotton, bamboo',
      zh: '有机棉，竹'
    },
    dimensions: 'W75×D80×H72 cm',
    weight: '10 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 60,
    name: {
      en: 'Sof Accent Chair',
      zh: '索夫装饰椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 339,
    originalPrice: 339,
    discount: 0,
    rating: 5.0,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord60x0/600/600', 'https://picsum.photos/seed/nord60x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'Sof\'s relaxed washed linen upholstery and natural pine legs capture the effortless Nordic casual aesthetic. An affordable way to bring Scandinavian softness into any room.',
      zh: '索夫的放松水洗亚麻面料与天然松木腿捕捉毫不费力的北欧休闲美学，是将斯堪的纳维亚柔软带入任何房间的实惠方式。'
    },
    specs: {
      Material: 'Washed linen, pine',
      Dimensions: 'W70×D72×H79 cm',
      Weight: '11 kg',
      Upholstery: 'Washed linen',
      Legs: 'Solid pine',
      Assembly: 'Required',
      "Seat depth": '58 cm'
    },
    material: {
      en: 'Washed linen, pine',
      zh: '水洗亚麻，松木'
    },
    dimensions: 'W70×D72×H79 cm',
    weight: '11 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 61,
    name: {
      en: 'Sving Swivel Lounge Chair',
      zh: '斯文格旋转休闲椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 649,
    originalPrice: 649,
    discount: 0,
    rating: 3.5,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord61x0/600/600', 'https://picsum.photos/seed/nord61x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Sving\'s brass swivel base allows 360° rotation while its oversized bouclé cushions invite deep relaxation. A Nordic luxury statement for the living room.',
      zh: '斯文格的黄铜旋转底座允许360°转动，超大布克莱坐垫邀请深度放松，是客厅的北欧奢华宣言。'
    },
    specs: {
      Material: 'Bouclé, brass swivel',
      Dimensions: 'W78×D80×H76 cm',
      Weight: '16 kg',
      Upholstery: 'Bouclé',
      Base: 'Brushed brass swivel',
      Swivel: '360°',
      Assembly: 'Required'
    },
    material: {
      en: 'Bouclé, brass swivel',
      zh: '布克莱，黄铜旋转'
    },
    dimensions: 'W78×D80×H76 cm',
    weight: '16 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 62,
    name: {
      en: 'Petal Coffee Table',
      zh: '花瓣咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 3.7,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord62x0/600/600', 'https://picsum.photos/seed/nord62x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Petal coffee table\'s undulating edge is inspired by natural Nordic landscapes—an organic silhouette carved from a single slab of solid oak that makes a sculptural centrepiece.',
      zh: '花瓣咖啡桌的起伏边缘灵感源于北欧自然地貌，从实心橡木单板雕刻而成的有机轮廓构成雕塑级的视觉中心。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'Ø95×H38 cm',
      Weight: '20 kg',
      Shape: 'Organic round',
      Finish: 'Natural oil',
      Assembly: 'No'
    },
    material: {
      en: 'Solid oak, organic shape',
      zh: '实心橡木，有机造型'
    },
    dimensions: 'Ø95×H38 cm',
    weight: '20 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 63,
    name: {
      en: 'Duo Two-Level Table',
      zh: '杜奥双层桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 289,
    originalPrice: 289,
    discount: 0,
    rating: 3.8,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord63x0/600/600', 'https://picsum.photos/seed/nord63x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'The Duo\'s split-level design provides distinct zones for remote controls and coffee cups above, while magazines and books sit on the lower shelf, keeping Nordic order in the living room.',
      zh: '杜奥的分层设计为遥控器和咖啡杯提供上层区域，杂志和书籍置于下层搁板，在客厅维持北欧秩序。'
    },
    specs: {
      Material: 'Walnut veneer, oak legs',
      Dimensions: 'W100×D50×H45 cm',
      Weight: '16 kg',
      "Top veneer": 'Walnut',
      Legs: 'Solid oak',
      Levels: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Walnut veneer, oak legs',
      zh: '胡桃木贴皮，橡木腿'
    },
    dimensions: 'W100×D50×H45 cm',
    weight: '16 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 64,
    name: {
      en: 'Lav Low Table',
      zh: '拉夫矮桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 219,
    originalPrice: 219,
    discount: 0,
    rating: 3.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord64x0/600/600', 'https://picsum.photos/seed/nord64x1/600/600'],
    badges: ['Sale'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'Lav\'s extra-low silhouette suits floor-level Nordic living arrangements. Square proportions and a clean oak veneer make it a minimal yet functional piece.',
      zh: '拉夫超低的轮廓适合地板级别的北欧生活方式，正方形比例与简洁橡木贴皮打造极简却实用的单品。'
    },
    specs: {
      Material: 'Oak veneer, cube base',
      Dimensions: '90×90×28 cm',
      Weight: '14 kg',
      Top: 'Oak veneer',
      Style: 'Low / Japanese',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, cube base',
      zh: '橡木贴皮，方形底座'
    },
    dimensions: 'W90×D90×H28 cm',
    weight: '14 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 65,
    name: {
      en: 'Teak Slab Table',
      zh: '柚木板桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 749,
    originalPrice: 749,
    discount: 0,
    rating: 4.0,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord65x0/600/600', 'https://picsum.photos/seed/nord65x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'This teak slab coffee table uses a single piece of solid teak with a live edge, celebrating the natural form of the wood. Slender hairpin legs provide a light counterpoint to the heavy slab.',
      zh: '这款柚木板咖啡桌使用单块带自然边缘的实心柚木，颂扬木材的天然形态。纤细的发夹腿为厚重的板材提供轻盈的对比。'
    },
    specs: {
      Material: 'Solid teak',
      Dimensions: 'W110×D60×H40 cm',
      Weight: '32 kg',
      Edge: 'Live edge',
      Legs: 'Hairpin steel',
      Finish: 'Teak oil'
    },
    material: {
      en: 'Solid teak slab, hairpin legs',
      zh: '实心柚木板，发夹腿'
    },
    dimensions: 'W110×D60×H40 cm',
    weight: '32 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 66,
    name: {
      en: 'Wide Media Console',
      zh: '宽体媒体柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 629,
    originalPrice: 700,
    discount: 10,
    rating: 4.1,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord66x0/600/600', 'https://picsum.photos/seed/nord66x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Wide media console spans a full wall in Nordic style with four soft-close doors concealing media equipment and shelving. Adjustable interior shelves accommodate any system configuration.',
      zh: '宽体媒体柜以北欧风格横贯整面墙，四扇阻尼关门遮藏媒体设备和搁架，可调节内部搁板适应任何系统配置。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W180×D45×H55 cm',
      Weight: '40 kg',
      Doors: '4 soft-close',
      "Cable ports": '2',
      "Max TV": '85"'
    },
    material: {
      en: 'Solid oak, 4 doors',
      zh: '实心橡木，四门'
    },
    dimensions: 'W180×D45×H55 cm',
    weight: '40 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 67,
    name: {
      en: 'Low-Line TV Bench',
      zh: '低线电视柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 479,
    originalPrice: 479,
    discount: 0,
    rating: 4.2,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord67x0/600/600', 'https://picsum.photos/seed/nord67x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'Nordic low-line aesthetics at their finest—this walnut veneer TV bench sits close to the floor on tapered solid legs, providing a sleek, unobtrusive foundation for any flat-screen TV.',
      zh: '北欧低矮美学的最佳体现，这款胡桃木贴皮电视柜以锥形实心腿紧贴地面，为任何平板电视提供简洁低调的基础。'
    },
    specs: {
      Material: 'Walnut veneer, tapered legs',
      Dimensions: 'W160×D38×H45 cm',
      Weight: '28 kg',
      Veneer: 'Walnut',
      Legs: 'Tapered solid oak',
      "Height from floor": '45 cm',
      "Max TV": '70"'
    },
    material: {
      en: 'Walnut veneer, tapered legs',
      zh: '胡桃木贴皮，锥形腿'
    },
    dimensions: 'W160×D38×H45 cm',
    weight: '28 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 68,
    name: {
      en: 'TV Unit with Fireplace',
      zh: '带壁炉电视柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 899,
    originalPrice: 1060,
    discount: 15,
    rating: 4.3,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord68x0/600/600', 'https://picsum.photos/seed/nord68x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'This contemporary Nordic TV unit integrates an electric flame-effect fireplace for the warmth and hygge of a traditional hearth without installation complexity.',
      zh: '这款当代北欧电视柜集成电动仿焰壁炉，无需复杂安装即可带来传统炉边的温暖与hygge感。'
    },
    specs: {
      Material: 'MDF',
      Dimensions: 'W180×D40×H60 cm',
      Weight: '55 kg',
      Fireplace: 'Electric flame effect',
      "Heat output": '1500W',
      "Max TV": '75"'
    },
    material: {
      en: 'MDF, electric fireplace',
      zh: 'MDF，电壁炉'
    },
    dimensions: 'W180×D40×H60 cm',
    weight: '55 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 69,
    name: {
      en: 'Leaning Ladder Shelf',
      zh: '倚墙阶梯架'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 4.4,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord69x0/600/600', 'https://picsum.photos/seed/nord69x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'Five progressively wider shelves lean in a ladder formation against the wall—a space-efficient Nordic display system that requires no wall fixing.',
      zh: '五个逐渐变宽的搁板以阶梯形式倚墙而立，是无需固定墙壁的节省空间北欧展示系统。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W70×D38×H180 cm',
      Weight: '14 kg',
      Levels: '5',
      Freestanding: 'Leaning',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, 5 levels',
      zh: '实心松木，五层'
    },
    dimensions: 'W70×D38×H180 cm',
    weight: '14 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 70,
    name: {
      en: 'Cube Bookcase',
      zh: '方格书柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 349,
    originalPrice: 435,
    discount: 20,
    rating: 4.5,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord70x0/600/600', 'https://picsum.photos/seed/nord70x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Cube bookcase arranges storage in a grid of 8 equal compartments—a modular Nordic system that works as bookshelves, display cabinets, or closed storage with optional doors.',
      zh: '方格书柜将储物空间排列为8个等大方格，是一个模块化北欧系统，可用作书架、展示柜或配可选门的封闭储物。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W80×D30×H160 cm',
      Weight: '24 kg',
      Compartments: '8',
      "Optional doors": 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch ply, 8 cubes',
      zh: '桦木板，八格'
    },
    dimensions: 'W80×D30×H160 cm',
    weight: '24 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 71,
    name: {
      en: 'Industrial Pipe Shelf',
      zh: '工业管道书架'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 279,
    originalPrice: 279,
    discount: 0,
    rating: 4.6,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord71x0/600/600', 'https://picsum.photos/seed/nord71x1/600/600'],
    badges: ['Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'Solid pine boards on black iron pipe brackets—the Scandinavian-industrial hybrid bookcase that adds textural contrast to a minimal Nordic space.',
      zh: '实心松木板与黑色铁管托架，斯堪的纳维亚工业混合书架为极简北欧空间增添纹理对比。'
    },
    specs: {
      Material: 'Solid pine + iron',
      Dimensions: 'W100×D25×H160 cm',
      Weight: '16 kg',
      Shelves: '4',
      Style: 'Industrial',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, iron pipe',
      zh: '实心松木，铁管'
    },
    dimensions: 'W100×D25×H160 cm',
    weight: '16 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 72,
    name: {
      en: 'C-Table Laptop Tray',
      zh: 'C型笔记本托桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 4.7,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord72x0/600/600', 'https://picsum.photos/seed/nord72x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The C-table slides neatly under a sofa, positioning a surface exactly where you need it for a laptop, breakfast, or book. A Nordic functional solution in a minimal silhouette.',
      zh: 'C型桌可整洁地滑入沙发下方，将桌面精准定位到您需要的地方以放笔记本、早餐或书，是极简轮廓的北欧实用解决方案。'
    },
    specs: {
      Material: 'MDF, powder-coated steel',
      Dimensions: 'W55×D35×H65 cm',
      Weight: '3 kg',
      Top: 'MDF',
      Frame: 'Powder-coated steel',
      "Slides under sofa": 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, powder-coated steel',
      zh: 'MDF，粉末涂层钢'
    },
    dimensions: 'W55×D35×H65 cm',
    weight: '3 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 73,
    name: {
      en: 'Drum Side Table',
      zh: '鼓形边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 169,
    originalPrice: 225,
    discount: 25,
    rating: 4.8,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord73x0/600/600', 'https://picsum.photos/seed/nord73x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Drum side table\'s cylindrical form is a Nordic take on the classic drum table—a stable, space-efficient surface with hidden storage inside the drum body.',
      zh: '鼓形边桌的圆柱形态是北欧对经典鼓桌的诠释，稳定节省空间的桌面，鼓体内部有隐藏储物空间。'
    },
    specs: {
      Material: 'Oak veneer',
      Dimensions: 'Ø40×H50 cm',
      Weight: '5 kg',
      Shape: 'Cylinder',
      "Hidden storage": 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Oak veneer drum',
      zh: '橡木贴皮鼓形'
    },
    dimensions: 'Ø40×H50 cm',
    weight: '5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 74,
    name: {
      en: 'Plant Stand',
      zh: '植物架边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.9,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord74x0/600/600', 'https://picsum.photos/seed/nord74x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Plant Stand\'s slender single-post design raises a plant or object into prominence. Its minimal footprint and solid oak construction are classically Nordic.',
      zh: '植物架的纤细单柱设计将植物或物品提升至显眼位置，极小的占地面积与实心橡木构造是经典北欧风格。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'Ø30×H70 cm',
      Weight: '2 kg',
      "Top diameter": '30 cm',
      Height: '70 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, single post',
      zh: '实心橡木，单柱'
    },
    dimensions: 'Ø30×H70 cm',
    weight: '2 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 75,
    name: {
      en: 'Round Pouf',
      zh: '圆形蒲团'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 149,
    originalPrice: 215,
    discount: 30,
    rating: 5.0,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord75x0/600/600', 'https://picsum.photos/seed/nord75x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Round Pouf is hand-woven from natural jute with a firm foam interior—an organic Nordic accent for any living room floor. Its neutral tone works with any colour palette.',
      zh: '圆形蒲团以天然黄麻手工编织，内含坚实泡沫，是任何客厅地板的有机北欧装饰品，中性色调适配任何配色方案。'
    },
    specs: {
      Material: 'Natural jute',
      Dimensions: 'Ø50×H38 cm',
      Weight: '4 kg',
      Fill: 'Firm foam',
      Diameter: '50 cm',
      Handwoven: 'Yes'
    },
    material: {
      en: 'Hand-woven jute, foam',
      zh: '手工编织黄麻，泡沫'
    },
    dimensions: 'Ø50×H38 cm',
    weight: '4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 76,
    name: {
      en: 'Velvet Cube Ottoman',
      zh: '丝绒方形脚凳'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 179,
    originalPrice: 179,
    discount: 0,
    rating: 3.5,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord76x0/600/600', 'https://picsum.photos/seed/nord76x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'A perfect square of plush velvet on solid oak legs—the Velvet Cube Ottoman provides additional seating or a stylish footrest in any Nordic living room or bedroom.',
      zh: '在实心橡木腿上完美方形的华丽丝绒，丝绒方形脚凳在任何北欧客厅或卧室提供额外座位或时尚搁脚凳。'
    },
    specs: {
      Material: 'Velvet, oak legs',
      Dimensions: 'W50×D50×H42 cm',
      Weight: '6 kg',
      Upholstery: 'Velvet',
      Legs: 'Solid oak',
      "Load capacity": '120 kg',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet, oak legs',
      zh: '丝绒，橡木腿'
    },
    dimensions: 'W50×D50×H42 cm',
    weight: '6 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 77,
    name: {
      en: 'Linen Floor Cushion',
      zh: '亚麻地板垫'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 3.7,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord77x0/600/600', 'https://picsum.photos/seed/nord77x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Linen Floor Cushion is the most relaxed Nordic seating option—a generous round linen cushion filled with natural kapok for floor-level lounging in Scandinavian style.',
      zh: '亚麻地板垫是最休闲的北欧坐席选择，宽大的圆形亚麻垫填充天然木棉，以斯堪的纳维亚风格在地板上休闲。'
    },
    specs: {
      Material: 'Washed linen, kapok fill',
      Dimensions: 'Ø70×H15 cm',
      Weight: '1.8 kg',
      Cover: 'Washed linen',
      Fill: 'Natural kapok',
      Diameter: '70 cm',
      Washable: 'Cover only'
    },
    material: {
      en: 'Washed linen, kapok fill',
      zh: '水洗亚麻，木棉填充'
    },
    dimensions: 'Ø70×H15 cm',
    weight: '1.8 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 78,
    name: {
      en: 'Giant Bean Bag',
      zh: '超大豆袋椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bean Bags',
      zh: '懒人沙发'
    },
    price: 219,
    originalPrice: 219,
    discount: 0,
    rating: 3.8,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord78x0/600/600', 'https://picsum.photos/seed/nord78x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Giant Bean Bag is a family-sized Nordic lounger—big enough for two adults or a parent with children. Microsuede cover resists stains and is removable for washing.',
      zh: '超大豆袋椅是家庭号北欧躺椅，大到足以容纳两个成人或一个家长与孩子，防污仿麂皮套可拆卸清洗。'
    },
    specs: {
      Material: 'Microsuede, EPS fill',
      Dimensions: 'Ø120×H90 cm',
      Weight: '7 kg',
      Cover: 'Microsuede',
      Fill: 'EPS beads',
      Size: 'XL',
      Washable: 'Cover yes'
    },
    material: {
      en: 'Microsuede, EPS fill',
      zh: '仿麂皮，EPS填充'
    },
    dimensions: 'Ø120×H90 cm',
    weight: '7 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 79,
    name: {
      en: 'Kids Bean Bag',
      zh: '儿童豆袋椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bean Bags',
      zh: '懒人沙发'
    },
    price: 79,
    originalPrice: 95,
    discount: 15,
    rating: 3.9,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord79x0/600/600', 'https://picsum.photos/seed/nord79x1/600/600'],
    badges: ['Sale'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'A child-sized Nordic bean bag in soft cotton canvas with fun Scandinavian geometric patterns. The zipper cover is machine washable for easy maintenance.',
      zh: '儿童号北欧豆袋椅以柔软棉帆布印有有趣的斯堪的纳维亚几何图案，拉链套可机洗便于维护。'
    },
    specs: {
      Material: 'Cotton canvas, EPS',
      Dimensions: 'Ø60×H55 cm',
      Weight: '2.5 kg',
      Cover: 'Cotton canvas',
      Fill: 'EPS beads',
      "Machine washable": 'Yes',
      Age: '3+'
    },
    material: {
      en: 'Cotton canvas, EPS',
      zh: '棉帆布，EPS'
    },
    dimensions: 'Ø60×H55 cm',
    weight: '2.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 80,
    name: {
      en: 'Halvø Peninsula Sofa',
      zh: '哈尔弗岛半岛沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 2899,
    originalPrice: 2899,
    discount: 0,
    rating: 4.0,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord80x0/600/600', 'https://picsum.photos/seed/nord80x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Halvø peninsula sofa creates its own intimate zone within an open-plan Nordic home. Its dramatic peninsula chaise and premium performance fabric make it perfect for families with children and pets.',
      zh: '哈尔弗岛半岛沙发在开放式北欧家居中创造自己的私密区域，戏剧性的半岛贵妃椅与高性能面料使其非常适合有孩子和宠物的家庭。'
    },
    specs: {
      Material: 'Performance fabric, oak',
      Dimensions: 'W310×D170×H78 cm',
      Weight: '88 kg',
      Style: 'Peninsula',
      Fabric: 'Performance weave',
      Legs: 'Solid oak',
      Assembly: 'Required'
    },
    material: {
      en: 'Performance fabric, oak',
      zh: '性能面料，橡木'
    },
    dimensions: 'W310×D170×H78 cm',
    weight: '88 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 81,
    name: {
      en: 'Skum Sofa',
      zh: '斯库姆沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1199,
    originalPrice: 1330,
    discount: 10,
    rating: 4.1,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord81x0/600/600', 'https://picsum.photos/seed/nord81x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'Skum\'s sculptural brass frame elevates this Nordic sofa to a collector\'s piece. The contrast between cool metal and warm bouclé creates an irresistible tactile and visual tension.',
      zh: '斯库姆的雕塑感黄铜框架将这款北欧沙发提升为收藏级单品，冷金属与温暖布克莱之间的对比创造无法抗拒的触感和视觉张力。'
    },
    specs: {
      Material: 'Boucle, brass frame',
      Dimensions: 'W200×D95×H75 cm',
      Weight: '46 kg',
      Frame: 'Brushed brass',
      Upholstery: 'Bouclé',
      Cushion: 'Feather blend',
      Assembly: 'Required'
    },
    material: {
      en: 'Boucle, brass frame',
      zh: '布克莱，黄铜框架'
    },
    dimensions: 'W200×D95×H75 cm',
    weight: '46 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 82,
    name: {
      en: 'Brim Outdoor Sofa',
      zh: '布里姆户外沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1699,
    originalPrice: 1699,
    discount: 0,
    rating: 4.2,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord82x0/600/600', 'https://picsum.photos/seed/nord82x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Brim outdoor sofa is engineered for Nordic coastal living. Its lightweight aluminum frame won\'t rust, and olefin fabric resists UV, mildew, and moisture through all Scandinavian seasons.',
      zh: '布里姆户外沙发专为北欧海滨生活设计，轻量铝框架不会生锈，奥列芬面料抵抗所有斯堪的纳维亚季节的紫外线、霉菌和水分。'
    },
    specs: {
      Material: 'Olefin fabric, aluminum',
      Dimensions: 'W210×D92×H75 cm',
      Weight: '50 kg',
      Frame: 'Powder-coated aluminium',
      Fabric: 'Olefin UV-resistant',
      Weatherproof: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Olefin fabric, aluminum',
      zh: '奥列芬面料，铝'
    },
    dimensions: 'W210×D92×H75 cm',
    weight: '50 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 83,
    name: {
      en: 'Nest Curved Sectional',
      zh: '巢穴弧形组合沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 3799,
    originalPrice: 3799,
    discount: 0,
    rating: 4.3,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord83x0/600/600', 'https://picsum.photos/seed/nord83x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'The Nest curved sectional envelops its occupants in a 270° arc of Nordic comfort—an extraordinary piece for the design-forward home that wants to define its living space as an experience.',
      zh: '巢穴弧形组合沙发以270°北欧舒适弧线包裹其使用者，是设计前沿家居中将生活空间定义为体验的非凡单品。'
    },
    specs: {
      Material: 'Wool blend, oak legs',
      Dimensions: 'W350×D195×H76 cm',
      Weight: '105 kg',
      Configuration: '270° arc',
      Upholstery: 'Wool blend',
      Legs: 'Solid oak',
      Assembly: 'Professional recommended'
    },
    material: {
      en: 'Wool blend, oak legs',
      zh: '羊毛混纺，橡木腿'
    },
    dimensions: 'W350×D195×H76 cm',
    weight: '105 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 84,
    name: {
      en: 'Luna Accent Chair',
      zh: '露娜装饰椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 419,
    originalPrice: 700,
    discount: 40,
    rating: 4.4,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord84x0/600/600', 'https://picsum.photos/seed/nord84x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'Luna\'s clean linen upholstery and natural birch legs are as pure as a Nordic morning. This accent chair works as a bedroom reading spot, living room extra seat, or hallway greeter.',
      zh: '露娜的干净亚麻面料和天然桦木腿如北欧清晨一样纯粹，这款装饰椅可作为卧室阅读角、客厅额外座位或走廊迎客椅。'
    },
    specs: {
      Material: 'Linen, natural birch',
      Dimensions: 'W72×D76×H80 cm',
      Weight: '12 kg',
      Upholstery: 'Washed linen',
      Legs: 'Solid birch',
      "Seat height": '44 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Linen, natural birch',
      zh: '亚麻，天然桦木'
    },
    dimensions: 'W72×D76×H80 cm',
    weight: '12 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 85,
    name: {
      en: 'Pillow Chair',
      zh: '抱枕椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 559,
    originalPrice: 559,
    discount: 0,
    rating: 4.5,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord85x0/600/600', 'https://picsum.photos/seed/nord85x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'All cushion, all comfort—the Pillow Chair\'s oversized wraparound cushion on four solid oak legs is the Nordic answer to maximum relaxation in minimal form.',
      zh: '全是坐垫，全是舒适，抱枕椅的超大环绕坐垫立于四根实心橡木腿上，是以最少形式实现最大放松的北欧答案。'
    },
    specs: {
      Material: 'Oversized cushion, oak',
      Dimensions: 'W82×D86×H74 cm',
      Weight: '17 kg',
      Upholstery: 'Sherpa + bouclé blend',
      Legs: 'Solid oak',
      "Seat depth": '70 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Oversized cushion, oak',
      zh: '超大坐垫，橡木'
    },
    dimensions: 'W82×D86×H74 cm',
    weight: '17 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 86,
    name: {
      en: 'Minimal Accent Chair',
      zh: '极简装饰椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 369,
    originalPrice: 369,
    discount: 0,
    rating: 4.6,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord86x0/600/600', 'https://picsum.photos/seed/nord86x1/600/600'],
    badges: ['Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'True Nordic minimalism in a chair—the Minimal Accent Chair has just what is needed and nothing more. Cotton upholstery, tapered beech legs, and a frame designed to be unseen.',
      zh: '椅子中真正的北欧极简主义，极简装饰椅只有所需要的一切，没有多余的东西。棉质面料、锥形山毛榉腿和设计为隐形的框架。'
    },
    specs: {
      Material: 'Cotton, tapered beech',
      Dimensions: 'W70×D74×H78 cm',
      Weight: '10 kg',
      Upholstery: '100% cotton',
      Legs: 'Tapered beech',
      Style: 'Minimal',
      Assembly: 'Required'
    },
    material: {
      en: 'Cotton, tapered beech',
      zh: '棉质，锥形山毛榉'
    },
    dimensions: 'W70×D74×H78 cm',
    weight: '10 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 87,
    name: {
      en: 'Geo Coffee Table',
      zh: '几何咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 379,
    originalPrice: 475,
    discount: 20,
    rating: 4.7,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord87x0/600/600', 'https://picsum.photos/seed/nord87x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Geo coffee table\'s base is constructed from intersecting solid oak members in a geometric pattern—a sculptural Nordic conversation piece that supports a clean oak plank top.',
      zh: '几何咖啡桌的底座由交叉实心橡木构件以几何图案构造，是支撑干净橡木板桌面的雕塑感北欧谈话焦点。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W110×D60×H42 cm',
      Weight: '24 kg',
      Base: 'Geometric',
      Finish: 'Natural oil',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, geometric base',
      zh: '实心橡木，几何底座'
    },
    dimensions: 'W110×D60×H42 cm',
    weight: '24 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 88,
    name: {
      en: 'Stack Side Coffee Tables',
      zh: '叠放侧面咖啡桌组'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 259,
    originalPrice: 259,
    discount: 0,
    rating: 4.8,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord88x0/600/600', 'https://picsum.photos/seed/nord88x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'A pair of nesting circular coffee tables in powder-coated steel—use them together as a wide surface or separately as side tables. Space-efficient Nordic versatility.',
      zh: '粉末涂层钢的一对嵌套圆形咖啡桌，可组合使用作为宽阔桌面或分开作为边桌，节省空间的北欧多功能性。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'Ø50-70×H38-45 cm',
      Weight: '11 kg',
      Set: '2 round tables',
      Nesting: 'Yes',
      Colors: 'Multiple'
    },
    material: {
      en: 'Powder-coated steel, set of 2',
      zh: '粉末涂层钢，两件套'
    },
    dimensions: 'Ø50-70×H38-45 cm',
    weight: '11 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 89,
    name: {
      en: 'Scandinavian Open Shelf TV',
      zh: '北欧开放格电视架'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.9,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord89x0/600/600', 'https://picsum.photos/seed/nord89x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Scandinavian Open Shelf TV unit proves that open storage can be organised and beautiful—three pine tiers display media equipment and Nordic objects without concealment.',
      zh: '北欧开放格电视架证明开放储物可以整洁美观，三层松木搁架展示媒体设备和北欧装饰品，无需遮藏。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W160×D35×H50 cm',
      Weight: '22 kg',
      Shelves: '3 open',
      Style: 'Open',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, open shelves',
      zh: '实心松木，开放格'
    },
    dimensions: 'W160×D35×H50 cm',
    weight: '22 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 90,
    name: {
      en: 'Adjustable Modular Shelf',
      zh: '可调节模块书架'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 449,
    originalPrice: 449,
    discount: 0,
    rating: 5.0,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord90x0/600/600', 'https://picsum.photos/seed/nord90x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Adjustable Modular Shelf uses a steel upright system to support birch ply shelves at any height—a classic Nordic approach to adaptable, long-lasting storage.',
      zh: '可调节模块书架使用钢立柱系统支撑任意高度的桦木板搁架，是可适应、长久耐用储物的经典北欧方式。'
    },
    specs: {
      Material: 'Birch ply + steel',
      Dimensions: 'W120×D30×H180 cm',
      Weight: '30 kg',
      Shelves: 'Adjustable',
      Width: '120 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch ply, steel uprights',
      zh: '桦木板，钢立柱'
    },
    dimensions: 'W120×D30×H180 cm',
    weight: '30 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 91,
    name: {
      en: 'Round Footstool',
      zh: '圆形脚凳'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 139,
    originalPrice: 139,
    discount: 0,
    rating: 3.5,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord91x0/600/600', 'https://picsum.photos/seed/nord91x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'A classic round Nordic footstool in genuine leather with turned wooden legs—an enduring companion for any armchair or sofa. Padded for comfort, crafted for longevity.',
      zh: '圆形真皮北欧脚凳配旋制木腿，是任何扶手椅或沙发的持久伴侣，软垫舒适，工艺经久。'
    },
    specs: {
      Material: 'Leather, turned legs',
      Dimensions: 'Ø45×H35 cm',
      Weight: '3.5 kg',
      Upholstery: 'Genuine leather',
      Legs: 'Turned wood',
      Diameter: '45 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Leather, turned legs',
      zh: '皮革，旋制腿'
    },
    dimensions: 'Ø45×H35 cm',
    weight: '3.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 92,
    name: {
      en: 'Nested Coffee Table Trio',
      zh: '嵌套咖啡桌三件套'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 339,
    originalPrice: 339,
    discount: 0,
    rating: 3.7,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord92x0/600/600', 'https://picsum.photos/seed/nord92x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'Three tables that nest together for flexible Nordic living—use separately as side tables, bring together as one large surface for entertaining. Oak veneer tops on minimal steel frames.',
      zh: '三张嵌套桌为灵活北欧生活设计，可分开用作边桌，也可组合成一个大桌面用于娱乐，极简钢框架上的橡木贴皮桌面。'
    },
    specs: {
      Material: 'Oak veneer + steel',
      Dimensions: 'Various',
      Weight: '14 kg',
      Set: '3 tables',
      Nesting: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, steel, 3 tables',
      zh: '橡木贴皮，钢，三件套'
    },
    dimensions: 'Various',
    weight: '14 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 93,
    name: {
      en: 'Hygge Sectional',
      zh: '海格转角沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 2199,
    originalPrice: 2199,
    discount: 0,
    rating: 3.8,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord93x0/600/600', 'https://picsum.photos/seed/nord93x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'Designed entirely around the Danish concept of hygge, this sectional creates an intimate gathering space that encourages deep conversation and collective relaxation.',
      zh: '完全围绕丹麦hygge概念设计，这款转角沙发营造鼓励深度交流和集体放松的亲密聚会空间。'
    },
    specs: {
      Material: 'Velvet, oak legs',
      Dimensions: 'W280×D150×H80 cm',
      Weight: '78 kg',
      Style: 'L-sectional',
      Upholstery: 'Velvet',
      Legs: 'Solid oak',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet, oak legs',
      zh: '丝绒，橡木腿'
    },
    dimensions: 'W280×D150×H80 cm',
    weight: '78 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 94,
    name: {
      en: 'Studio Loveseat',
      zh: '工作室双人沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 799,
    originalPrice: 799,
    discount: 0,
    rating: 3.9,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord94x0/600/600', 'https://picsum.photos/seed/nord94x1/600/600'],
    badges: ['Sale'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Studio Loveseat is a minimal Nordic seating solution ideal for small apartments and studios. Its compact size and clean lines make it a perfect city-living piece.',
      zh: '工作室双人沙发是小型公寓和单间公寓的极简北欧座椅解决方案，紧凑的尺寸和简洁的线条使其成为理想的城市生活单品。'
    },
    specs: {
      Material: 'Cotton, pine',
      Dimensions: 'W145×D80×H78 cm',
      Weight: '30 kg',
      Upholstery: 'Cotton',
      Frame: 'Solid pine',
      Size: '2-seater',
      Assembly: 'Required'
    },
    material: {
      en: 'Cotton, pine',
      zh: '棉质，松木'
    },
    dimensions: 'W145×D80×H78 cm',
    weight: '30 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 95,
    name: {
      en: 'Orbit Swivel Armchair',
      zh: '轨道旋转扶手椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 599,
    originalPrice: 599,
    discount: 0,
    rating: 4.0,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord95x0/600/600', 'https://picsum.photos/seed/nord95x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Orbit swivel armchair orbits the room with effortless grace—its 360° polished chrome base and cloud-soft bouclé upholstery create a Nordic focal point for any living room.',
      zh: '轨道旋转扶手椅以轻盈优雅环绕房间，360°抛光镀铬底座和柔软的布克莱面料为任何客厅创造北欧视觉焦点。'
    },
    specs: {
      Material: 'Boucle, chrome swivel base',
      Dimensions: 'W76×D80×H80 cm',
      Weight: '17 kg',
      Upholstery: 'Bouclé',
      Base: 'Chrome swivel',
      Swivel: '360°',
      Assembly: 'Required'
    },
    material: {
      en: 'Boucle, chrome swivel base',
      zh: '布克莱，镀铬旋转底座'
    },
    dimensions: 'W76×D80×H80 cm',
    weight: '17 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 96,
    name: {
      en: 'High Back Chair',
      zh: '高背椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 689,
    originalPrice: 765,
    discount: 10,
    rating: 4.1,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord96x0/600/600', 'https://picsum.photos/seed/nord96x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The High Back Chair\'s protective wings and tall back create a private Nordic enclave within any living room—perfect for reading, thinking, or simply existing in one\'s own space.',
      zh: '高背椅的保护性侧翼和高背在任何客厅中创造私密的北欧小世界，非常适合阅读、思考或单纯享受自己的空间。'
    },
    specs: {
      Material: 'Linen, tall back, oak',
      Dimensions: 'W72×D78×H110 cm',
      Weight: '16 kg',
      Upholstery: 'Natural linen',
      "Back height": '110 cm',
      Legs: 'Solid oak',
      Assembly: 'Required'
    },
    material: {
      en: 'Linen, tall back, oak',
      zh: '亚麻，高背，橡木'
    },
    dimensions: 'W72×D78×H110 cm',
    weight: '16 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 97,
    name: {
      en: 'Ash Wood Side Table',
      zh: '白蜡木边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 159,
    originalPrice: 159,
    discount: 0,
    rating: 4.2,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord97x0/600/600', 'https://picsum.photos/seed/nord97x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Ash Wood Side Table\'s two tiers provide a practical surface above and display shelf below—the light natural colour of ash suits bright Nordic interiors.',
      zh: '白蜡木边桌的双层设计提供上方实用桌面和下方展示搁板，白蜡木的浅自然色调适合明亮的北欧室内。'
    },
    specs: {
      Material: 'Solid ash',
      Dimensions: 'W50×D35×H55 cm',
      Weight: '5.5 kg',
      Tiers: '2',
      Color: 'Natural ash',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid ash, two tiers',
      zh: '实心白蜡木，双层'
    },
    dimensions: 'W50×D35×H55 cm',
    weight: '5.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 98,
    name: {
      en: 'Black Marble Coffee Table',
      zh: '黑色大理石咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 729,
    originalPrice: 860,
    discount: 15,
    rating: 4.3,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord98x0/600/600', 'https://picsum.photos/seed/nord98x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Black Marble Coffee Table is a dramatic Nordic luxury statement—Belgian black marble top on polished brass legs creates a striking contrast that anchors any sophisticated living room.',
      zh: '黑色大理石咖啡桌是戏剧性的北欧奢华宣言，比利时黑色大理石桌面立于抛光黄铜腿上，形成鲜明对比，稳定任何精致的客厅。'
    },
    specs: {
      Material: 'Black marble, brass legs',
      Dimensions: 'W120×D60×H42 cm',
      Weight: '48 kg',
      Top: 'Belgian black marble',
      Legs: 'Polished brass',
      Shape: 'Rectangular'
    },
    material: {
      en: 'Black marble, brass legs',
      zh: '黑色大理石，黄铜腿'
    },
    dimensions: 'W120×D60×H42 cm',
    weight: '48 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 99,
    name: {
      en: 'TV Unit Teak',
      zh: '柚木电视柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 689,
    originalPrice: 689,
    discount: 0,
    rating: 4.4,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord99x0/600/600', 'https://picsum.photos/seed/nord99x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'Warm FSC teak with two soft-close cabinet doors—this TV unit brings natural Nordic luxury to the living room while hiding media equipment in sustainably sourced wood.',
      zh: '两扇阻尼关门的温暖FSC柚木，这款电视柜以可持续采购木材将天然北欧奢华带入客厅，同时隐藏媒体设备。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W160×D42×H55 cm',
      Weight: '42 kg',
      Doors: '2 soft-close',
      "Max TV": '75"',
      Assembly: 'Required'
    },
    material: {
      en: 'FSC teak, 2 doors',
      zh: 'FSC柚木，两门'
    },
    dimensions: 'W160×D42×H55 cm',
    weight: '42 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 100,
    name: {
      en: 'Coastal Sofa White',
      zh: '海岸白色沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1499,
    originalPrice: 1875,
    discount: 20,
    rating: 4.5,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord100x0/600/600', 'https://picsum.photos/seed/nord100x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Coastal Sofa in crisp white linen captures the light, airy spirit of Nordic coastal homes. Birch legs and removable washable covers make it a practical choice for bright Scandinavian rooms.',
      zh: '海岸白色沙发的洁白亚麻捕捉北欧海滨家居的明亮通透精神，桦木腿和可拆洗套使其成为明亮北欧房间的实用选择。'
    },
    specs: {
      Material: 'White linen, birch legs',
      Dimensions: 'W210×D95×H78 cm',
      Weight: '52 kg',
      Upholstery: 'White linen',
      Legs: 'Solid birch',
      Cover: 'Removable washable',
      Assembly: 'Required'
    },
    material: {
      en: 'White linen, birch legs',
      zh: '白色亚麻，桦木腿'
    },
    dimensions: 'W210×D95×H78 cm',
    weight: '52 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 101,
    name: {
      en: 'Jewel Tone Accent Chair',
      zh: '宝石色装饰椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 529,
    originalPrice: 529,
    discount: 0,
    rating: 4.6,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord101x0/600/600', 'https://picsum.photos/seed/nord101x1/600/600'],
    badges: ['Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'A moment of Nordic luxury in a jewel-toned velvet accent chair—deep sapphire, emerald, or ruby on slender brushed-gold legs, adding a rich focal point to any Scandinavian interior.',
      zh: '宝石色丝绒装饰椅的北欧奢华瞬间，深蓝宝石、翡翠或红宝石色调立于纤细的拉丝金腿上，为任何斯堪的纳维亚室内增添丰富视觉焦点。'
    },
    specs: {
      Material: 'Velvet jewel tone, gold legs',
      Dimensions: 'W74×D76×H82 cm',
      Weight: '13 kg',
      Upholstery: 'Jewel-tone velvet',
      Legs: 'Brushed gold steel',
      "Seat height": '43 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet jewel tone, gold legs',
      zh: '宝石色丝绒，金色腿'
    },
    dimensions: 'W74×D76×H82 cm',
    weight: '13 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 102,
    name: {
      en: 'Woven Pendant Side Table',
      zh: '编织吊坠边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 139,
    originalPrice: 139,
    discount: 0,
    rating: 4.7,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord102x0/600/600', 'https://picsum.photos/seed/nord102x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Woven Pendant Side Table brings Nordic-boho texture to the living room with its hand-woven rattan top on slim steel pin legs—a natural, organic accent piece.',
      zh: '编织吊坠边桌以手工藤编桌面立于纤细钢针腿上，为客厅带来北欧波西米亚质感，是自然有机的装饰单品。'
    },
    specs: {
      Material: 'Rattan weave top, steel legs',
      Dimensions: 'Ø38×H55 cm',
      Weight: '3 kg',
      Top: 'Woven rattan',
      Legs: 'Steel pin legs',
      Shape: 'Round',
      Assembly: 'Required'
    },
    material: {
      en: 'Rattan weave top, steel legs',
      zh: '藤编桌面，钢腿'
    },
    dimensions: 'Ø38×H55 cm',
    weight: '3 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 103,
    name: {
      en: 'Concrete Look Coffee Table',
      zh: '混凝土外观咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 299,
    originalPrice: 400,
    discount: 25,
    rating: 4.8,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord103x0/600/600', 'https://picsum.photos/seed/nord103x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Concrete Look Coffee Table delivers Nordic-industrial aesthetics with practical lightweight construction—a concrete-effect tabletop on solid oak legs that weighs a fraction of real concrete.',
      zh: '混凝土外观咖啡桌以实用的轻量构造实现北欧工业美学，实心橡木腿上的混凝土效果桌面重量仅为真正混凝土的一小部分。'
    },
    specs: {
      Material: 'Concrete-effect top, oak legs',
      Dimensions: 'W100×D55×H40 cm',
      Weight: '22 kg',
      Top: 'Concrete-effect laminate',
      Legs: 'Solid oak',
      Assembly: 'Required'
    },
    material: {
      en: 'Concrete-effect top, oak legs',
      zh: '混凝土效果桌面，橡木腿'
    },
    dimensions: 'W100×D55×H40 cm',
    weight: '22 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 104,
    name: {
      en: 'Scallop Chair',
      zh: '扇贝椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 449,
    originalPrice: 449,
    discount: 0,
    rating: 4.9,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord104x0/600/600', 'https://picsum.photos/seed/nord104x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Scallop Chair\'s gently fanned back echoes the organic curves of a Nordic seashell—an accent chair that is as much sculpture as it is seating.',
      zh: '扇贝椅轻柔展开的椅背呼应北欧贝壳的有机曲线，是一把与其说是座椅不如说是雕塑的装饰椅。'
    },
    specs: {
      Material: 'Boucle, scallop shell back',
      Dimensions: 'W76×D74×H78 cm',
      Weight: '12 kg',
      Back: 'Scallop form',
      Upholstery: 'Bouclé',
      Legs: 'Solid oak',
      Assembly: 'Required'
    },
    material: {
      en: 'Boucle, scallop shell back',
      zh: '布克莱，扇贝背'
    },
    dimensions: 'W76×D74×H78 cm',
    weight: '12 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 105,
    name: {
      en: 'TV Unit White Oak',
      zh: '白橡木电视柜'
    },
    category: 'Living Room',
    subcategory: {
      en: 'TV Stands',
      zh: '电视柜'
    },
    price: 499,
    originalPrice: 715,
    discount: 30,
    rating: 5.0,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord105x0/600/600', 'https://picsum.photos/seed/nord105x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'White oak veneer with push-to-open door panels—a clean Nordic TV unit that suits bright, light-filled Scandinavian rooms where oak warmth meets white freshness.',
      zh: '白橡木贴皮配按压开门板，干净的北欧电视柜非常适合橡木温暖与白色清新相遇的明亮北欧房间。'
    },
    specs: {
      Material: 'White oak veneer, push doors',
      Dimensions: 'W160×D40×H52 cm',
      Weight: '32 kg',
      Veneer: 'White oak',
      Opening: 'Push-to-open',
      "Max TV": '70"',
      Assembly: 'Required'
    },
    material: {
      en: 'White oak veneer, push doors',
      zh: '白橡木贴皮，按压门'
    },
    dimensions: 'W160×D40×H52 cm',
    weight: '32 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 106,
    name: {
      en: 'Velvet Ottoman Bench',
      zh: '丝绒脚凳长凳'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 3.5,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord106x0/600/600', 'https://picsum.photos/seed/nord106x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Velvet Ottoman Bench works at the foot of a bed, as a coffee table, or as extra seating in a dining room—a versatile Nordic velvet piece with solid tapered wood legs.',
      zh: '丝绒脚凳长凳可用于床尾、咖啡桌或餐厅额外座椅，是配实心锥形木腿的多功能北欧丝绒单品。'
    },
    specs: {
      Material: 'Velvet, wooden legs',
      Dimensions: 'W100×D40×H42 cm',
      Weight: '12 kg',
      Upholstery: 'Velvet',
      Legs: 'Tapered solid wood',
      Length: '100 cm',
      Load: '120 kg'
    },
    material: {
      en: 'Velvet, wooden legs',
      zh: '丝绒，木腿'
    },
    dimensions: 'W100×D40×H42 cm',
    weight: '12 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 107,
    name: {
      en: 'Sherpa Sofa',
      zh: '舍尔巴沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1599,
    originalPrice: 1599,
    discount: 0,
    rating: 3.7,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord107x0/600/600', 'https://picsum.photos/seed/nord107x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The ultra-plush Sherpa sofa wraps you in cloud-soft comfort—its oversized sherpa cushions and solid oak legs create the ultimate Nordic winter lounging experience.',
      zh: '超柔软的舍尔巴沙发以云朵般的舒适将您包裹，超大仿羊绒坐垫与实心橡木腿打造终极北欧冬季休闲体验。'
    },
    specs: {
      Material: 'Sherpa fabric, oak legs',
      Dimensions: 'W215×D98×H78 cm',
      Weight: '55 kg',
      Upholstery: 'Sherpa',
      Legs: 'Solid oak',
      Cushion: 'Extra-plush',
      Assembly: 'Required'
    },
    material: {
      en: 'Sherpa fabric, oak legs',
      zh: '仿羊绒面料，橡木腿'
    },
    dimensions: 'W215×D98×H78 cm',
    weight: '55 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 108,
    name: {
      en: 'Rattan Armchair',
      zh: '藤椅'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Armchairs',
      zh: '扶手椅'
    },
    price: 329,
    originalPrice: 329,
    discount: 0,
    rating: 3.8,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord108x0/600/600', 'https://picsum.photos/seed/nord108x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Rattan Armchair brings natural Nordic-coastal texture to the living room with its hand-woven rattan body and a comfortable removable cushion in natural linen.',
      zh: '藤椅以手工藤编身体和天然亚麻可拆卸坐垫为客厅带来天然北欧海滨质感。'
    },
    specs: {
      Material: 'Natural rattan',
      Dimensions: 'W75×D80×H85 cm',
      Weight: '10 kg',
      Cushion: 'Linen (included)',
      Assembly: 'No',
      Style: 'Boho Nordic'
    },
    material: {
      en: 'Natural rattan, cushion',
      zh: '天然藤编，坐垫'
    },
    dimensions: 'W75×D80×H85 cm',
    weight: '10 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 109,
    name: {
      en: 'Ladder Bookshelf White',
      zh: '白色梯形书架'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 199,
    originalPrice: 235,
    discount: 15,
    rating: 3.9,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord109x0/600/600', 'https://picsum.photos/seed/nord109x1/600/600'],
    badges: ['Sale'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'A space-saving white ladder bookshelf in MDF—its leaning design needs no wall fixing and the white finish keeps the room feeling bright and open in true Nordic style.',
      zh: '节省空间的白色MDF梯形书架，倚墙设计无需固定墙壁，白色表面保持房间明亮开阔的真北欧风格。'
    },
    specs: {
      Material: 'MDF white',
      Dimensions: 'W60×D38×H170 cm',
      Weight: '11 kg',
      Shelves: '5',
      Style: 'Ladder leaning',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF white, ladder style',
      zh: 'MDF白色，梯形风格'
    },
    dimensions: 'W60×D38×H170 cm',
    weight: '11 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 110,
    name: {
      en: 'Marble Effect Side Table',
      zh: '大理石效果边桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Side Tables',
      zh: '边桌'
    },
    price: 119,
    originalPrice: 119,
    discount: 0,
    rating: 4.0,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord110x0/600/600', 'https://picsum.photos/seed/nord110x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Marble Effect Side Table delivers the luxury aesthetic of real marble at a fraction of the weight and cost—its faux marble top and brushed-gold base make a Nordic glamour statement.',
      zh: '大理石效果边桌以仿大理石桌面和拉丝金色底座以真大理石一小部分的重量和成本实现奢华美学。'
    },
    specs: {
      Material: 'Faux marble top, gold base',
      Dimensions: 'Ø40×H50 cm',
      Weight: '5 kg',
      Top: 'Faux marble',
      Base: 'Brushed gold',
      Shape: 'Round',
      Assembly: 'Required'
    },
    material: {
      en: 'Faux marble top, gold base',
      zh: '仿大理石桌面，金色底座'
    },
    dimensions: 'Ø40×H50 cm',
    weight: '5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 111,
    name: {
      en: 'Living Room Pouf',
      zh: '客厅蒲团'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Ottomans',
      zh: '脚凳'
    },
    price: 119,
    originalPrice: 130,
    discount: 10,
    rating: 4.1,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord111x0/600/600', 'https://picsum.photos/seed/nord111x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'A Nordic-style knitted cotton pouf that works as a footrest, side table, or extra seat. Its dense knit and firm fill provide lasting shape in any living room arrangement.',
      zh: '北欧风格针织棉蒲团可用作脚凳、边桌或额外座椅，致密的针织和坚实的填充在任何客厅布置中保持持久形状。'
    },
    specs: {
      Material: 'Knitted cotton',
      Dimensions: 'Ø50×H35 cm',
      Weight: '3 kg',
      Fill: 'Firm foam core',
      Diameter: '50 cm',
      "Multi-use": 'Yes'
    },
    material: {
      en: 'Knitted cotton, solid fill',
      zh: '针织棉，实心填充'
    },
    dimensions: 'Ø50×H35 cm',
    weight: '3 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 112,
    name: {
      en: 'Havnen Bed Frame',
      zh: '哈文床架'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 899,
    originalPrice: 899,
    discount: 0,
    rating: 4.2,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord112x0/600/600', 'https://picsum.photos/seed/nord112x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Havnen bed frame celebrates the natural beauty of solid oak with visible joinery and clean Nordic lines. The integrated slatted base supports any mattress without the need for a box spring.',
      zh: '哈文床架以可见的榫卯工艺和简洁的北欧线条展现实心橡木的天然之美，内置板条底座无需弹簧床垫。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W160×L200×H90 cm',
      Weight: '42 kg',
      Size: 'Queen / King',
      Slats: 'Solid birch',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, slatted base',
      zh: '实心橡木，板条底座'
    },
    dimensions: 'W160×L200×H90 cm',
    weight: '42 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 113,
    name: {
      en: 'Søvn Platform Bed',
      zh: '瑟文平台床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1199,
    originalPrice: 1199,
    discount: 0,
    rating: 4.3,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord113x0/600/600', 'https://picsum.photos/seed/nord113x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'Søvn\'s ultra-low platform design brings a Japanese-Nordic zen quality to the bedroom. Solid walnut construction ensures each piece has its own unique grain character.',
      zh: '瑟文超低平台设计为卧室带来日式北欧禅意，实心胡桃木确保每件作品都有独特的纹理个性。'
    },
    specs: {
      Material: 'Solid walnut',
      Dimensions: 'W180×L200×H28 cm',
      Weight: '55 kg',
      Style: 'Platform',
      "Height (floor)": '28 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid walnut, low profile',
      zh: '实心胡桃木，低矮轮廓'
    },
    dimensions: 'W180×L200×H28 cm',
    weight: '55 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 114,
    name: {
      en: 'Drøm Upholstered Bed',
      zh: '德龙软包床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1349,
    originalPrice: 2250,
    discount: 40,
    rating: 4.4,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord114x0/600/600', 'https://picsum.photos/seed/nord114x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Drøm upholstered bed features a tall padded headboard in natural linen for reading in bed in true Nordic style. The solid oak legs elevate the frame with warmth and craftsmanship.',
      zh: '德龙软包床的天然亚麻高靠背专为北欧风格的床上阅读而设计，实心橡木腿以温暖的工艺感提升整体。'
    },
    specs: {
      Material: 'Linen headboard, oak legs',
      Dimensions: 'W160×L200×H110 cm',
      Weight: '68 kg',
      Headboard: 'Linen upholstered',
      Frame: 'Solid oak',
      Size: 'Queen',
      Assembly: 'Required'
    },
    material: {
      en: 'Linen headboard, oak legs',
      zh: '亚麻软包床头，橡木腿'
    },
    dimensions: 'W160×L200×H110 cm',
    weight: '68 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 115,
    name: {
      en: 'Birk Storage Bed',
      zh: '伯克储物床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1649,
    originalPrice: 1649,
    discount: 0,
    rating: 4.5,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord115x0/600/600', 'https://picsum.photos/seed/nord115x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'Birk\'s hydraulic lift mechanism provides access to a generous under-bed storage area—a Nordic space-saving solution for smaller bedrooms. The oak veneer exterior maintains a premium look.',
      zh: '伯克的液压升降机构提供充裕的床下储物空间，是小型卧室的北欧节省空间方案，橡木贴皮外观保持高档质感。'
    },
    specs: {
      Material: 'Oak veneer, hydraulic storage',
      Dimensions: 'W160×L200×H85 cm',
      Weight: '78 kg',
      Storage: 'Hydraulic lift',
      Volume: '200 L',
      Veneer: 'Oak',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, hydraulic storage',
      zh: '橡木贴皮，液压储物'
    },
    dimensions: 'W160×L200×H85 cm',
    weight: '78 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 116,
    name: {
      en: 'Freja Canopy Bed',
      zh: '弗蕾雅天蓬床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 2199,
    originalPrice: 2199,
    discount: 0,
    rating: 4.6,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord116x0/600/600', 'https://picsum.photos/seed/nord116x1/600/600'],
    badges: ['Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Freja four-poster creates an intimate Nordic sanctuary. Solid oak posts support a draping linen canopy that filters soft morning light with natural grace.',
      zh: '弗蕾雅四柱天蓬床营造私密的北欧圣地，实心橡木柱支撑垂挂的亚麻天篷，以自然优雅过滤晨光。'
    },
    specs: {
      Material: 'Solid oak posts, linen canopy',
      Dimensions: 'W160×L200×H210 cm',
      Weight: '72 kg',
      Posts: 'Solid oak',
      Canopy: 'Linen (included)',
      Size: 'Queen / King',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak posts, linen canopy',
      zh: '实心橡木柱，亚麻天篷'
    },
    dimensions: 'W160×L200×H210 cm',
    weight: '72 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 117,
    name: {
      en: 'Vik Trundle Bed',
      zh: '维克子母床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 799,
    originalPrice: 1000,
    discount: 20,
    rating: 4.7,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord117x0/600/600', 'https://picsum.photos/seed/nord117x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Vik is ideal for children\'s rooms or guest rooms—a full single bed with a pull-out trundle for sleepovers. Nordic pine construction is sturdy and timeless.',
      zh: '维克非常适合儿童房或客房，一张完整单人床配抽拉式子床，专为留宿友人设计。北欧松木构造坚固且经典。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W90×L200×H45 cm',
      Weight: '38 kg',
      "Main bed": 'Single',
      Trundle: 'Single (pull-out)',
      "Max weight": '120 kg'
    },
    material: {
      en: 'Pine, pull-out trundle',
      zh: '松木，拉出式子床'
    },
    dimensions: 'W90×L200×H45 cm',
    weight: '38 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 118,
    name: {
      en: 'Bunk Bed Loke',
      zh: '洛凯双层床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 999,
    originalPrice: 999,
    discount: 0,
    rating: 4.8,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord118x0/600/600', 'https://picsum.photos/seed/nord118x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'Loke\'s solid birch bunk bed features integrated safety rails and a sturdy fixed ladder—built with Nordic precision for a child\'s active lifestyle.',
      zh: '洛凯实心桦木双层床配备内置安全护栏和坚固固定梯子，以北欧精准工艺为孩子的活跃生活而生。'
    },
    specs: {
      Material: 'Solid birch',
      Dimensions: 'W90×L200×H165 cm',
      Weight: '48 kg',
      "Safety rails": 'Upper bunk',
      Ladder: 'Fixed',
      "Max weight per bunk": '120 kg'
    },
    material: {
      en: 'Solid birch, safety rails',
      zh: '实心桦木，安全护栏'
    },
    dimensions: 'W90×L200×H165 cm',
    weight: '48 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 119,
    name: {
      en: 'Hygge Daybed',
      zh: '海格贵妃床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 849,
    originalPrice: 849,
    discount: 0,
    rating: 4.9,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord119x0/600/600', 'https://picsum.photos/seed/nord119x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Hygge daybed is the Nordic answer to the chaise longue—perfect for afternoon naps or sitting upright to read. Its linen upholstery and pine base make it equally at home in bedroom or living area.',
      zh: '海格贵妃床是北欧版贵妃椅，完美适合午睡或坐直阅读，亚麻面料与松木底座无论在卧室还是客厅都同样自然。'
    },
    specs: {
      Material: 'Linen, solid pine',
      Dimensions: 'W90×L200×H70 cm',
      Weight: '28 kg',
      Upholstery: 'Linen',
      Base: 'Solid pine',
      Converts: 'No',
      "Mattress included": 'No'
    },
    material: {
      en: 'Linen, solid pine',
      zh: '亚麻，实心松木'
    },
    dimensions: 'W90×L200×H70 cm',
    weight: '28 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 120,
    name: {
      en: 'Lykta Nightstand',
      zh: '吕克塔床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 189,
    originalPrice: 189,
    discount: 0,
    rating: 5.0,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord120x0/600/600', 'https://picsum.photos/seed/nord120x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Lykta nightstand offers everything you need bedside—a single soft-close drawer for essentials and an open shelf for books. Solid oak construction ensures generations of use.',
      zh: '吕克塔床头柜提供床边所需一切——放置必需品的阻尼关门单抽屉和放书的开放搁板，实心橡木确保数代耐用。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W45×D38×H55 cm',
      Weight: '8 kg',
      Drawer: '1 (soft-close)',
      "Open shelf": '1',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, single drawer',
      zh: '实心橡木，单抽屉'
    },
    dimensions: 'W45×D38×H55 cm',
    weight: '8 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 121,
    name: {
      en: 'Tind Wall-Mount Nightstand',
      zh: '提恩德壁挂床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 3.5,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord121x0/600/600', 'https://picsum.photos/seed/nord121x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'Tind\'s floating wall-mount design keeps the bedroom floor clear and creates a light, airy Nordic aesthetic. A single shelf and small drawer provide essential bedside storage.',
      zh: '提恩德壁挂设计保持卧室地面整洁，营造轻盈通透的北欧美感，单搁板和小抽屉提供基本的床边储物。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W40×D25×H30 cm',
      Weight: '5 kg',
      Mount: 'Wall (hardware included)',
      Drawer: '1',
      Finish: 'White oil'
    },
    material: {
      en: 'Solid pine, floating',
      zh: '实心松木，悬浮'
    },
    dimensions: 'W40×D25×H30 cm',
    weight: '5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 122,
    name: {
      en: 'Birch Nightstand',
      zh: '白桦床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 159,
    originalPrice: 159,
    discount: 0,
    rating: 3.7,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord122x0/600/600', 'https://picsum.photos/seed/nord122x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'This birch plywood nightstand brings Scandinavian design simplicity to the bedroom. Two spacious drawers on smooth runners provide ample storage, while the minimal form never overwhelms.',
      zh: '这款桦木夹板床头柜将斯堪的纳维亚设计简约带入卧室，两个在顺滑滑轨上运行的宽大抽屉提供充足储物空间。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W50×D40×H50 cm',
      Weight: '9 kg',
      Drawers: '2',
      Runners: 'Smooth glide',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch ply, two drawers',
      zh: '桦木板，双抽屉'
    },
    dimensions: 'W50×D40×H50 cm',
    weight: '9 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 123,
    name: {
      en: 'Stolt 6-Drawer Dresser',
      zh: '斯托尔特六抽斗柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 649,
    originalPrice: 649,
    discount: 0,
    rating: 3.8,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord123x0/600/600', 'https://picsum.photos/seed/nord123x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'The Stolt dresser stores a full wardrobe in six generously proportioned drawers, each with solid brass bar handles that develop a beautiful patina over time.',
      zh: '斯托尔特斗柜在六个宽大抽屉中储存一整衣橱，每个抽屉配备随时间愈显韵味的实心黄铜条形拉手。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W120×D45×H80 cm',
      Weight: '42 kg',
      Drawers: '6',
      Handles: 'Solid brass',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, brass handles',
      zh: '实心橡木，黄铜拉手'
    },
    dimensions: 'W120×D45×H80 cm',
    weight: '42 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 124,
    name: {
      en: 'Alma Chest of Drawers',
      zh: '阿尔玛胸柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 479,
    originalPrice: 479,
    discount: 0,
    rating: 3.9,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord124x0/600/600', 'https://picsum.photos/seed/nord124x1/600/600'],
    badges: ['Sale'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'Alma\'s tall, narrow proportions are designed for compact Nordic bedrooms. Five deep drawers on smooth metal runners provide excellent storage without taking up precious floor space.',
      zh: '阿尔玛高挑纤细的比例专为紧凑的北欧卧室设计，五个深抽屉在顺滑金属滑轨上运行，在不占用宝贵地面空间的前提下提供出色储物。'
    },
    specs: {
      Material: 'Birch',
      Dimensions: 'W80×D45×H120 cm',
      Weight: '34 kg',
      Drawers: '5',
      Runners: 'Metal',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch, minimal hardware',
      zh: '桦木，极简五金'
    },
    dimensions: 'W80×D45×H120 cm',
    weight: '34 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 125,
    name: {
      en: 'Hjem Wardrobe',
      zh: '海恩衣柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 1299,
    originalPrice: 1299,
    discount: 0,
    rating: 4.0,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord125x0/600/600', 'https://picsum.photos/seed/nord125x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Hjem wardrobe provides a complete bedroom storage solution with hanging rails, adjustable shelves, and integrated drawers. Solid pine construction makes it a lasting investment.',
      zh: '海恩衣柜通过挂衣杆、可调节搁板和内置抽屉提供完整的卧室储物方案，实心松木构造是经久耐用的投资。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W200×D60×H220 cm',
      Weight: '95 kg',
      Doors: 'Soft-close',
      Interior: 'Hanging + shelves + drawers',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, soft-close doors',
      zh: '实心松木，阻尼关门'
    },
    dimensions: 'W200×D60×H220 cm',
    weight: '95 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 126,
    name: {
      en: 'Mörk Sliding Wardrobe',
      zh: '莫克推拉门衣柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 1799,
    originalPrice: 2000,
    discount: 10,
    rating: 4.1,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord126x0/600/600', 'https://picsum.photos/seed/nord126x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'Mörk\'s mirrored sliding doors visually double the size of any bedroom while concealing a fully fitted wardrobe interior. The mirror-door design is a Nordic space-maximising classic.',
      zh: '莫克的镜面推拉门在视觉上将卧室空间放大一倍，同时隐藏内部完善的衣柜配置，镜面门设计是北欧空间最大化的经典方案。'
    },
    specs: {
      Material: 'MDF',
      Dimensions: 'W240×D60×H220 cm',
      Weight: '110 kg',
      Doors: 'Mirrored sliding',
      Interior: 'Fully fitted',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, mirrored doors',
      zh: 'MDF，镜面推拉门'
    },
    dimensions: 'W240×D60×H220 cm',
    weight: '110 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 127,
    name: {
      en: 'Dröm Memory Foam Mattress',
      zh: '德龙记忆棉床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 799,
    originalPrice: 799,
    discount: 0,
    rating: 4.2,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord127x0/600/600', 'https://picsum.photos/seed/nord127x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Dröm mattress combines a pressure-relieving memory foam layer with a breathable Tencel cover for a perfectly balanced Nordic sleep experience. Certified free of harmful substances.',
      zh: '德龙床垫将减压记忆棉层与透气天丝外套结合，打造完美平衡的北欧睡眠体验，经有害物质无害认证。'
    },
    specs: {
      Material: 'Memory foam, breathable cover',
      Dimensions: '160×200 cm',
      Weight: '28 kg',
      Type: 'Memory foam',
      Firmness: 'Medium',
      Cover: 'Tencel',
      Certification: 'OEKO-TEX'
    },
    material: {
      en: 'Memory foam, breathable cover',
      zh: '记忆棉，透气外套'
    },
    dimensions: '160×200 cm',
    weight: '28 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 128,
    name: {
      en: 'Fjell Pocket Spring Mattress',
      zh: '菲尔袋装弹簧床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 999,
    originalPrice: 1175,
    discount: 15,
    rating: 4.3,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord128x0/600/600', 'https://picsum.photos/seed/nord128x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'Fjell\'s individually wrapped pocket springs respond to every movement independently, while the natural latex comfort layer adds gentle pressure relief. Ideal for couples with different sleep preferences.',
      zh: '菲尔的独立袋装弹簧对每个动作单独响应，天然乳胶舒适层提供温柔减压，非常适合睡眠偏好不同的伴侣。'
    },
    specs: {
      Material: 'Pocket springs, latex top',
      Dimensions: '160×200 cm',
      Weight: '32 kg',
      Type: 'Pocket spring + latex',
      "Spring count": '1000 (Queen)',
      Firmness: 'Medium-firm',
      Certification: 'OEKO-TEX'
    },
    material: {
      en: 'Pocket springs, latex top',
      zh: '袋装弹簧，乳胶层'
    },
    dimensions: '160×200 cm',
    weight: '32 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 129,
    name: {
      en: 'Speil Vanity Desk',
      zh: '斯派尔梳妆台'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Vanities',
      zh: '梳妆台'
    },
    price: 449,
    originalPrice: 449,
    discount: 0,
    rating: 4.4,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord129x0/600/600', 'https://picsum.photos/seed/nord129x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Speil vanity desk blends Nordic minimalism with feminine grace—its arched brass mirror and drawer-equipped ash desk create a beautiful morning ritual space.',
      zh: '斯派尔梳妆台融合北欧极简与女性优雅，拱形黄铜镜与带抽屉的白蜡木桌面打造美好的晨间仪式空间。'
    },
    specs: {
      Material: 'Solid ash',
      Dimensions: 'W90×D40×H75 cm',
      Weight: '22 kg',
      Mirror: 'Brass-framed',
      Drawers: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid ash, brass mirror',
      zh: '实心白蜡木，黄铜镜'
    },
    dimensions: 'W90×D40×H75 cm',
    weight: '22 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 130,
    name: {
      en: 'Oval Stand Mirror',
      zh: '椭圆落地镜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mirrors',
      zh: '镜子'
    },
    price: 299,
    originalPrice: 375,
    discount: 20,
    rating: 4.5,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord130x0/600/600', 'https://picsum.photos/seed/nord130x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'This full-length oval mirror leans naturally against the wall or stands independently on its base, making it versatile for any Nordic bedroom or dressing area.',
      zh: '这款全身椭圆镜可自然倚墙而立或独立站立，非常适合北欧卧室或更衣区。'
    },
    specs: {
      Material: 'Solid pine, tilt adjust',
      Dimensions: 'W60×D5×H170 cm',
      Weight: '12 kg',
      Frame: 'Solid pine',
      Height: '170 cm',
      "Adjustable tilt": 'Yes',
      Freestanding: 'Yes'
    },
    material: {
      en: 'Solid pine, tilt adjust',
      zh: '实心松木，可倾斜调节'
    },
    dimensions: 'W60×D5×H170 cm',
    weight: '12 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 131,
    name: {
      en: 'Ek Solid Oak Bed',
      zh: '艾克实心橡木床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1099,
    originalPrice: 1099,
    discount: 0,
    rating: 4.6,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord131x0/600/600', 'https://picsum.photos/seed/nord131x1/600/600'],
    badges: ['Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Ek bed\'s angled legs give it a distinctive Nordic leaning silhouette—a subtle design detail that references traditional Scandinavian timber joinery.',
      zh: '艾克床的斜角腿赋予其独特的北欧倾斜轮廓，一个微妙的设计细节参考了传统斯堪的纳维亚木材榫卯。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W140×L200×H85 cm',
      Weight: '48 kg',
      Size: 'Double',
      Legs: 'Angled',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, angled legs',
      zh: '实心橡木，斜角腿'
    },
    dimensions: 'W140×L200×H85 cm',
    weight: '48 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 132,
    name: {
      en: 'Birch Single Bed',
      zh: '白桦单人床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 599,
    originalPrice: 599,
    discount: 0,
    rating: 4.7,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord132x0/600/600', 'https://picsum.photos/seed/nord132x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'A clean, simple Nordic single bed in solid birch—perfect for guest rooms, children\'s rooms, or first apartments. The slatted base accommodates any mattress without the need for a box spring.',
      zh: '实心桦木简洁干净的北欧单人床，非常适合客房、儿童房或初次独立公寓，板条底座无需弹簧床垫。'
    },
    specs: {
      Material: 'Solid birch',
      Dimensions: 'W90×L200×H75 cm',
      Weight: '28 kg',
      Size: 'Single',
      Slats: 'Included',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid birch, slats',
      zh: '实心桦木，床板条'
    },
    dimensions: 'W90×L200×H75 cm',
    weight: '28 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 133,
    name: {
      en: 'Metal Industrial Bed',
      zh: '金属工业床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 749,
    originalPrice: 1000,
    discount: 25,
    rating: 4.8,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord133x0/600/600', 'https://picsum.photos/seed/nord133x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Metal bed frame brings a Nordic-industrial edge to the bedroom with its powder-coated steel construction and geometric headboard. A rugged yet refined sleeping frame.',
      zh: '金属床架以粉末涂层钢构造和几何床头板为卧室带来北欧工业感，是粗犷而精致的睡眠框架。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W160×L200×H90 cm',
      Weight: '35 kg',
      Headboard: 'Geometric',
      Size: 'Queen',
      Assembly: 'Required'
    },
    material: {
      en: 'Powder-coated steel, wood slats',
      zh: '粉末涂层钢，木板条'
    },
    dimensions: 'W160×L200×H90 cm',
    weight: '35 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 134,
    name: {
      en: 'Kids Bed with Canopy',
      zh: '带天篷儿童床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 699,
    originalPrice: 699,
    discount: 0,
    rating: 4.9,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord134x0/600/600', 'https://picsum.photos/seed/nord134x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'A magical Nordic playhouse bed for children—solid pine construction with a dreamy cotton canopy that turns bedtime into an adventure. Safe, sturdy, and certified.',
      zh: '神奇的北欧儿童游戏屋床，实心松木配梦幻棉质天篷将就寝时间变成冒险，安全坚固且经认证。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W90×L200×H160 cm',
      Weight: '22 kg',
      Canopy: 'Cotton (included)',
      Size: 'Single',
      Safety: 'EN747 certified'
    },
    material: {
      en: 'Solid pine, cotton canopy',
      zh: '实心松木，棉质天篷'
    },
    dimensions: 'W90×L200×H160 cm',
    weight: '22 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 135,
    name: {
      en: 'King Size Platform Bed',
      zh: '特大号平台床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1549,
    originalPrice: 2215,
    discount: 30,
    rating: 5.0,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord135x0/600/600', 'https://picsum.photos/seed/nord135x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'Our largest platform bed in solid walnut—the ultimate Nordic luxury sleeping experience for those who value space and material quality above all else.',
      zh: '我们最大的实心胡桃木平台床，是将空间和材料品质置于首位的终极北欧奢华睡眠体验。'
    },
    specs: {
      Material: 'Solid walnut',
      Dimensions: 'W180×L210×H32 cm',
      Weight: '65 kg',
      Size: 'Super King',
      Style: 'Platform',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid walnut, king size',
      zh: '实心胡桃木，特大号'
    },
    dimensions: 'W180×L210×H32 cm',
    weight: '65 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 136,
    name: {
      en: 'Adjustable Base Bed',
      zh: '可调节底座床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 2499,
    originalPrice: 2499,
    discount: 0,
    rating: 3.5,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord136x0/600/600', 'https://picsum.photos/seed/nord136x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Adjustable Base Bed allows head and foot elevation at the touch of a button—a Scandinavian wellness investment for those who read, work, or sleep at customised angles.',
      zh: '可调节底座床允许轻触按钮升高头部和脚部，是为喜欢在自定义角度阅读、工作或睡眠的人准备的斯堪的纳维亚健康投资。'
    },
    specs: {
      Material: 'Upholstered, motorised base',
      Dimensions: 'W160×L200×H35-60 cm',
      Weight: '88 kg',
      Base: 'Motorised zero-gravity',
      Upholstery: 'Fabric',
      Size: 'Queen',
      Remote: 'Wireless'
    },
    material: {
      en: 'Upholstered, motorised base',
      zh: '软包，电动底座'
    },
    dimensions: 'W160×L200×H35-60 cm',
    weight: '88 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 137,
    name: {
      en: 'Floating Pair Nightstands',
      zh: '悬浮配对床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 279,
    originalPrice: 279,
    discount: 0,
    rating: 3.7,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord137x0/600/600', 'https://picsum.photos/seed/nord137x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'A matching pair of wall-mounted nightstands in oak plywood—bought together for perfect symmetry. Each has a single drawer and open shelf to keep bedside essentials organised.',
      zh: '一对匹配的橡木夹板壁挂床头柜，成对购买以实现完美对称。每个有一个抽屉和开放搁板整理床头必需品。'
    },
    specs: {
      Material: 'Oak ply',
      Dimensions: 'W40×D28×H30 cm each',
      Weight: '5 kg each',
      "Sold as": 'Pair (2 units)',
      Mounting: 'Wall',
      Drawer: '1 each'
    },
    material: {
      en: 'Oak ply, wall-mount pair',
      zh: '橡木板，壁挂套装'
    },
    dimensions: 'W40×D28×H30 cm each',
    weight: '5 kg each',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 138,
    name: {
      en: 'Nordic Brass Nightstand',
      zh: '北欧黄铜床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 3.8,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord138x0/600/600', 'https://picsum.photos/seed/nord138x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'Solid oak drawers on polished brass legs—a Nordic jewel for the bedside. The warm contrast between the oak and brass creates a refined bedroom composition.',
      zh: '实心橡木抽屉立于抛光黄铜腿上，是床头边的北欧珠宝，橡木与黄铜之间的温暖对比创造精致的卧室构图。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W45×D35×H55 cm',
      Weight: '9 kg',
      Legs: 'Polished brass',
      Drawers: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak, brass legs',
      zh: '橡木，黄铜腿'
    },
    dimensions: 'W45×D35×H55 cm',
    weight: '9 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 139,
    name: {
      en: 'Scandinavian Bedside Table',
      zh: '斯堪的纳维亚床头桌'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头桌'
    },
    price: 169,
    originalPrice: 200,
    discount: 15,
    rating: 3.9,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord139x0/600/600', 'https://picsum.photos/seed/nord139x1/600/600'],
    badges: ['Sale'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'A bright white Nordic bedside table on hairpin legs—clean, airy, and affordable. The single drawer keeps the bedside surface clear while providing essential storage beneath.',
      zh: '发夹腿上明亮的白色北欧床头桌，简洁通透且实惠。单个抽屉保持床头桌面整洁，同时在下方提供必要的储物空间。'
    },
    specs: {
      Material: 'White laminate',
      Dimensions: 'W50×D40×H52 cm',
      Weight: '8 kg',
      Legs: 'Hairpin steel',
      Drawer: '1',
      Assembly: 'Required'
    },
    material: {
      en: 'White laminate, hairpin legs',
      zh: '白色贴面，发夹腿'
    },
    dimensions: 'W50×D40×H52 cm',
    weight: '8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 140,
    name: {
      en: 'Tall Boy Dresser',
      zh: '高斗柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 549,
    originalPrice: 549,
    discount: 0,
    rating: 4.0,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord140x0/600/600', 'https://picsum.photos/seed/nord140x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Tall Boy dresser maximises bedroom storage within a narrow footprint—five generous drawers in solid oak with integrated handles that maintain a clean Nordic silhouette.',
      zh: '高斗柜在狭窄的占地面积内最大化卧室储物，实心橡木的五个宽大抽屉配集成拉手，保持干净的北欧轮廓。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W60×D45×H130 cm',
      Weight: '38 kg',
      Drawers: '5',
      Width: '60 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, 5 drawers',
      zh: '实心橡木，五抽屉'
    },
    dimensions: 'W60×D45×H130 cm',
    weight: '38 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 141,
    name: {
      en: 'Low Wide Dresser',
      zh: '低宽斗柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 699,
    originalPrice: 775,
    discount: 10,
    rating: 4.1,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord141x0/600/600', 'https://picsum.photos/seed/nord141x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Low Wide dresser doubles as a TV console or display surface—its wide, low proportions suit any Nordic bedroom while six deep drawers store a full wardrobe.',
      zh: '低宽斗柜兼作电视柜或展示面，宽低的比例适合任何北欧卧室，六个深抽屉存储整个衣橱。'
    },
    specs: {
      Material: 'Walnut veneer, 6 drawers',
      Dimensions: 'W140×D45×H80 cm',
      Weight: '48 kg',
      Veneer: 'Walnut',
      Drawers: '6',
      "Top surface": 'Clear for display',
      Assembly: 'Required'
    },
    material: {
      en: 'Walnut veneer, 6 drawers',
      zh: '胡桃木贴皮，六抽屉'
    },
    dimensions: 'W140×D45×H80 cm',
    weight: '48 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 142,
    name: {
      en: 'Compact Single Wardrobe',
      zh: '紧凑单门衣柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 699,
    originalPrice: 699,
    discount: 0,
    rating: 4.2,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord142x0/600/600', 'https://picsum.photos/seed/nord142x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'A compact single-door wardrobe ideal for small Nordic bedrooms or as a dedicated coat storage solution. Clean lines and birch ply construction are quintessentially Scandinavian.',
      zh: '紧凑的单门衣柜非常适合小型北欧卧室或作为专用外套储物解决方案，简洁的线条和桦木板构造是典型的斯堪的纳维亚风格。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W80×D55×H200 cm',
      Weight: '48 kg',
      Doors: '1',
      Interior: 'Hanging + shelf',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch ply, hinged door',
      zh: '桦木板，铰链门'
    },
    dimensions: 'W80×D55×H200 cm',
    weight: '48 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 143,
    name: {
      en: 'Open Wardrobe Frame',
      zh: '开放式衣橱框架'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 4.3,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord143x0/600/600', 'https://picsum.photos/seed/nord143x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'An open wardrobe frame in the Nordic tradition of transparent living—no doors, no hiding, just beautifully displayed clothing on a powder-coated steel rail system with wooden shelves.',
      zh: '开放式衣橱框架体现北欧透明生活传统，没有门，没有隐藏，只是在粉末涂层钢轨系统与木质搁板上美丽展示的衣物。'
    },
    specs: {
      Material: 'Steel + wood',
      Dimensions: 'W120×D45×H200 cm',
      Weight: '38 kg',
      Style: 'Open',
      "Hanging rail": 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Steel frame, open system',
      zh: '钢制框架，开放系统'
    },
    dimensions: 'W120×D45×H200 cm',
    weight: '38 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 144,
    name: {
      en: 'Natural Latex Mattress',
      zh: '天然乳胶床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 1199,
    originalPrice: 2000,
    discount: 40,
    rating: 4.4,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord144x0/600/600', 'https://picsum.photos/seed/nord144x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Natural Latex Mattress uses pure Talalay latex for responsive, pressure-relieving support that adapts to every sleeping position. The organic cotton cover is breathable and sustainably produced.',
      zh: '天然乳胶床垫使用纯Talalay乳胶提供响应性、减压支撑，适应每种睡姿，有机棉套透气且可持续生产。'
    },
    specs: {
      Material: 'Natural Talalay latex, cotton cover',
      Dimensions: '160×200 cm',
      Weight: '25 kg',
      Type: 'Natural latex',
      Firmness: 'Medium',
      Cover: 'Organic cotton',
      Certification: 'OEKO-TEX + GOTS'
    },
    material: {
      en: 'Natural Talalay latex, cotton cover',
      zh: '天然Talalay乳胶，棉质套'
    },
    dimensions: '160×200 cm',
    weight: '25 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 145,
    name: {
      en: 'Hybrid Foam Spring Mattress',
      zh: '混合泡沫弹簧床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 849,
    originalPrice: 849,
    discount: 0,
    rating: 4.5,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord145x0/600/600', 'https://picsum.photos/seed/nord145x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Hybrid mattress combines the contouring comfort of foam with the responsive support of pocket springs—a balanced Nordic sleep solution for all sleeping positions.',
      zh: '混合床垫将泡沫的塑形舒适与袋装弹簧的响应支撑相结合，是适合所有睡姿的平衡北欧睡眠解决方案。'
    },
    specs: {
      Material: 'Hybrid foam + springs',
      Dimensions: '160×200 cm',
      Weight: '30 kg',
      Type: 'Hybrid',
      "Comfort layer": 'Memory foam',
      Springs: 'Pocket',
      Warranty: '10 years'
    },
    material: {
      en: 'Hybrid foam + springs',
      zh: '混合泡沫+弹簧'
    },
    dimensions: '160×200 cm',
    weight: '30 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 146,
    name: {
      en: 'Children\'s Foam Mattress',
      zh: '儿童泡沫床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.6,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord146x0/600/600', 'https://picsum.photos/seed/nord146x1/600/600'],
    badges: ['Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Children\'s foam mattress is designed for growing Nordic children—CertiPUR certified foam for safe sleeping, with a removable waterproof cover for practical parent-friendly maintenance.',
      zh: '儿童泡沫床垫专为成长中的北欧儿童设计，CertiPUR认证泡沫提供安全睡眠，可拆卸防水套便于家长维护。'
    },
    specs: {
      Material: 'CertiPUR foam, waterproof cover',
      Dimensions: '90×200 cm',
      Weight: '10 kg',
      Type: 'Foam',
      Certification: 'CertiPUR',
      Cover: 'Waterproof + removable',
      Size: 'Single'
    },
    material: {
      en: 'CertiPUR foam, waterproof cover',
      zh: 'CertiPUR泡沫，防水套'
    },
    dimensions: '90×200 cm',
    weight: '10 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 147,
    name: {
      en: 'Mirrored Dressing Table',
      zh: '镜面梳妆桌'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Vanities',
      zh: '梳妆台'
    },
    price: 529,
    originalPrice: 660,
    discount: 20,
    rating: 4.7,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord147x0/600/600', 'https://picsum.photos/seed/nord147x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Mirrored Dressing Table brings glamorous Nordic light to the bedroom with its fully mirrored surfaces and chrome hardware. A Hollywood-inspired piece with Scandinavian restraint.',
      zh: '镜面梳妆桌以全镜面和镀铬五金为卧室带来迷人的北欧光芒，是好莱坞灵感与斯堪的纳维亚克制结合的作品。'
    },
    specs: {
      Material: 'Mirrored glass + chrome',
      Dimensions: 'W100×D45×H75 cm',
      Weight: '28 kg',
      Drawers: '3',
      Mirror: 'Mounted',
      Assembly: 'Required'
    },
    material: {
      en: 'Mirrored glass, chrome',
      zh: '镜面玻璃，镀铬'
    },
    dimensions: 'W100×D45×H75 cm',
    weight: '28 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 148,
    name: {
      en: 'Round Gold Mirror',
      zh: '圆形金色镜子'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mirrors',
      zh: '镜子'
    },
    price: 189,
    originalPrice: 189,
    discount: 0,
    rating: 4.8,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord148x0/600/600', 'https://picsum.photos/seed/nord148x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Round Gold Mirror is a Nordic sun-inspired wall piece—polished brass frame around a clear mirror that catches and amplifies natural light throughout the day.',
      zh: '圆形金色镜子是受北欧太阳启发的墙饰，抛光黄铜框围绕透明镜面，全天捕捉并放大自然光。'
    },
    specs: {
      Material: 'Solid brass frame, circle',
      Dimensions: 'Ø80×H5 cm',
      Weight: '6 kg',
      Frame: 'Solid brass',
      Shape: 'Round',
      Diameter: '80 cm',
      Hanging: 'D-ring included'
    },
    material: {
      en: 'Solid brass frame, circle',
      zh: '实心黄铜框，圆形'
    },
    dimensions: 'Ø80×H5 cm',
    weight: '6 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 149,
    name: {
      en: 'Full-Length Arch Mirror',
      zh: '全身拱形镜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mirrors',
      zh: '镜子'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.9,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord149x0/600/600', 'https://picsum.photos/seed/nord149x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Full-Length Arch Mirror\'s sweeping arched oak frame is a Nordic statement piece for any bedroom or hallway. The proportions are carefully calculated to reflect the full human figure in flattering light.',
      zh: '全身拱形镜的弧形橡木框架是任何卧室或走廊的北欧宣言单品，比例经过精心计算，以讨喜的光线映照完整人形。'
    },
    specs: {
      Material: 'Solid oak arch frame',
      Dimensions: 'W70×H170 cm',
      Weight: '15 kg',
      Frame: 'Solid oak',
      Height: '170 cm',
      Width: '70 cm',
      "Lean or hang": 'Both'
    },
    material: {
      en: 'Solid oak arch frame',
      zh: '实心橡木拱形框'
    },
    dimensions: 'W70×H170 cm',
    weight: '15 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 150,
    name: {
      en: 'Antique Nordic Mirror',
      zh: '古朴北欧镜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mirrors',
      zh: '镜子'
    },
    price: 249,
    originalPrice: 249,
    discount: 0,
    rating: 5.0,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord150x0/600/600', 'https://picsum.photos/seed/nord150x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'This Nordic mirror\'s distressed oak frame gives it a heritage quality—as if it has been passed down through generations of Scandinavian households, each layer of patina telling a new story.',
      zh: '这款北欧镜的仿旧橡木框架赋予其传承品质，仿佛经几代斯堪的纳维亚家庭传承，每层包浆都讲述新故事。'
    },
    specs: {
      Material: 'Distressed oak frame',
      Dimensions: 'W60×H90 cm',
      Weight: '8 kg',
      Frame: 'Distressed oak',
      Size: '60×90 cm',
      Hang: 'Vertical or horizontal',
      Style: 'Vintage Nordic'
    },
    material: {
      en: 'Distressed oak frame',
      zh: '仿旧处理橡木框'
    },
    dimensions: 'W60×H90 cm',
    weight: '8 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 151,
    name: {
      en: 'Princess Single Bed',
      zh: '公主单人床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 849,
    originalPrice: 849,
    discount: 0,
    rating: 3.5,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord151x0/600/600', 'https://picsum.photos/seed/nord151x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Princess Single Bed is a fairy-tale Nordic piece for children\'s rooms—solid pine with carved headboard details and a safe, sturdy frame that grows with your child.',
      zh: '公主单人床是儿童房的童话北欧单品，实心松木配雕刻床头板细节和安全坚固的框架，随孩子成长。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W90×L200×H160 cm',
      Weight: '32 kg',
      Size: 'Single',
      Headboard: 'Carved',
      Safety: 'EN747 certified'
    },
    material: {
      en: 'Solid pine, carved details',
      zh: '实心松木，雕刻细节'
    },
    dimensions: 'W90×L200×H160 cm',
    weight: '32 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 152,
    name: {
      en: 'Leather Headboard Bed',
      zh: '皮革床头板床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1449,
    originalPrice: 1449,
    discount: 0,
    rating: 3.7,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord152x0/600/600', 'https://picsum.photos/seed/nord152x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The full-grain leather upholstered headboard gives this bed a Nordic-luxe hotel feeling—every stitch is hand-finished and the leather develops a beautiful patina over years of use.',
      zh: '全粒面皮革软包床头板赋予这张床北欧奢华酒店的感觉，每针缝线都是手工完成的，皮革随使用年限形成美丽的包浆。'
    },
    specs: {
      Material: 'Full-grain leather headboard, oak',
      Dimensions: 'W160×L200×H95 cm',
      Weight: '60 kg',
      Headboard: 'Full-grain leather',
      Frame: 'Solid oak',
      Size: 'Queen',
      Assembly: 'Required'
    },
    material: {
      en: 'Full-grain leather headboard, oak',
      zh: '全粒面皮革床头板，橡木'
    },
    dimensions: 'W160×L200×H95 cm',
    weight: '60 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 153,
    name: {
      en: 'Day Bed Trundle',
      zh: '白天贵妃床子母组合'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1099,
    originalPrice: 1099,
    discount: 0,
    rating: 3.8,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord153x0/600/600', 'https://picsum.photos/seed/nord153x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'A Nordic multitasker: use the Daybed as a sofa during the day and extend the hidden trundle for overnight guests at night. Both frames in solid oak with linen cushions.',
      zh: '北欧多功能：白天将贵妃床用作沙发，晚上伸展隐藏的子母床供夜宿客人使用，两个框架均为带亚麻坐垫的实心橡木。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W90×L200×H70 cm',
      Weight: '42 kg',
      Main: 'Single bed/sofa',
      Trundle: 'Single (pull-out)',
      Assembly: 'Required'
    },
    material: {
      en: 'Linen, solid oak, trundle',
      zh: '亚麻，实心橡木，子母'
    },
    dimensions: 'W90×L200×H70 cm',
    weight: '42 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 154,
    name: {
      en: 'Wall Bed Cabinet',
      zh: '壁床柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 2299,
    originalPrice: 2299,
    discount: 0,
    rating: 3.9,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord154x0/600/600', 'https://picsum.photos/seed/nord154x1/600/600'],
    badges: ['Sale'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Wall Bed Cabinet conceals a full double mattress behind cabinet doors—the ultimate Nordic space-saving solution for studios and guest rooms that transforms from wardrobe to bedroom in seconds.',
      zh: '壁床柜在柜门后隐藏一张完整双人床垫，是公寓和客房的终极北欧节省空间解决方案，几秒内从衣柜变为卧室。'
    },
    specs: {
      Material: 'MDF, fold-down bed',
      Dimensions: 'W140×D42×H220 cm',
      Weight: '95 kg',
      "Bed size": 'Double',
      Cabinet: 'Full height with doors',
      Mattress: 'Included',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, fold-down bed',
      zh: 'MDF，折叠床'
    },
    dimensions: 'W140×D42×H220 cm',
    weight: '95 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 155,
    name: {
      en: 'Bamboo Nightstand',
      zh: '竹制床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 4.0,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord155x0/600/600', 'https://picsum.photos/seed/nord155x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Bamboo Nightstand is a sustainable Nordic choice for the bedroom—solid bamboo construction, a smooth drawer, and an open lower shelf create a functional yet beautiful bedside companion.',
      zh: '竹制床头柜是卧室的可持续北欧选择，实心竹构造、顺滑抽屉和开放下层搁板创造实用而美观的床边伴侣。'
    },
    specs: {
      Material: 'Solid bamboo',
      Dimensions: 'W40×D35×H50 cm',
      Weight: '5 kg',
      Drawer: '1',
      Shelf: '1',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid bamboo, 1 drawer',
      zh: '实心竹，单抽屉'
    },
    dimensions: 'W40×D35×H50 cm',
    weight: '5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 156,
    name: {
      en: 'Mirrored Nightstand',
      zh: '镜面床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 199,
    originalPrice: 220,
    discount: 10,
    rating: 4.1,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord156x0/600/600', 'https://picsum.photos/seed/nord156x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Mirrored Nightstand catches and reflects Nordic candlelight for a magical bedroom atmosphere. Two drawers keep bedside essentials tidy within a glamorous glass exterior.',
      zh: '镜面床头柜捕捉并反射北欧烛光，营造神奇的卧室氛围，两个抽屉在迷人的玻璃外表内保持床头必需品整洁。'
    },
    specs: {
      Material: 'Mirrored glass',
      Dimensions: 'W45×D40×H55 cm',
      Weight: '12 kg',
      Legs: 'Chrome',
      Drawers: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Mirrored glass, chrome',
      zh: '镜面玻璃，镀铬'
    },
    dimensions: 'W45×D40×H55 cm',
    weight: '12 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 157,
    name: {
      en: 'Painted White Dresser',
      zh: '白色涂漆斗柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 4.2,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord157x0/600/600', 'https://picsum.photos/seed/nord157x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Painted White Dresser is a Scandinavian bedroom staple—clean white, soft-close drawers, and a minimalist design that works in any Nordic colour scheme from crisp white to deep forest green.',
      zh: '白色涂漆斗柜是北欧卧室主力，干净的白色、阻尼关门抽屉和极简设计适配从纯白到深森绿的任何北欧配色方案。'
    },
    specs: {
      Material: 'MDF',
      Dimensions: 'W100×D45×H90 cm',
      Weight: '35 kg',
      Finish: 'Painted white',
      Drawers: '4 soft-close',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, painted white, 4 drawers',
      zh: 'MDF，白色涂漆，四抽屉'
    },
    dimensions: 'W100×D45×H90 cm',
    weight: '35 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 158,
    name: {
      en: 'Wood and Steel Dresser',
      zh: '木钢斗柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 589,
    originalPrice: 695,
    discount: 15,
    rating: 4.3,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord158x0/600/600', 'https://picsum.photos/seed/nord158x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'Solid oak drawer fronts float within a powder-coated steel frame—a Nordic-industrial dresser that combines the warmth of natural wood with the precision of engineered metal.',
      zh: '实心橡木抽屉面板悬浮于粉末涂层钢框架内，是结合天然木材温暖与工程金属精准的北欧工业斗柜。'
    },
    specs: {
      Material: 'Solid oak drawers, steel frame',
      Dimensions: 'W110×D45×H85 cm',
      Weight: '38 kg',
      Drawers: 'Solid oak fronts',
      Frame: 'Powder-coated steel',
      Runners: 'Metal soft-close',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak drawers, steel frame',
      zh: '实心橡木抽屉，钢框架'
    },
    dimensions: 'W110×D45×H85 cm',
    weight: '38 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 159,
    name: {
      en: 'Ultra Firm Ortho Mattress',
      zh: '超硬矫形床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 699,
    originalPrice: 699,
    discount: 0,
    rating: 4.4,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord159x0/600/600', 'https://picsum.photos/seed/nord159x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Ultra Firm Ortho Mattress is designed for Nordic sleepers who prefer strong spinal support—high-density orthopaedic foam with a breathable organic cotton cover.',
      zh: '超硬矫形床垫专为偏好强脊椎支撑的北欧睡眠者设计，高密度矫形泡沫配透气有机棉套。'
    },
    specs: {
      Material: 'Orthopaedic foam, firm',
      Dimensions: '160×200 cm',
      Weight: '26 kg',
      Type: 'Orthopaedic foam',
      Firmness: 'Firm',
      Cover: 'Organic cotton',
      Certification: 'OEKO-TEX'
    },
    material: {
      en: 'Orthopaedic foam, firm',
      zh: '矫形泡沫，硬质'
    },
    dimensions: '160×200 cm',
    weight: '26 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 160,
    name: {
      en: 'Kids Bunk Mattress',
      zh: '儿童双层床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 199,
    originalPrice: 250,
    discount: 20,
    rating: 4.5,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord160x0/600/600', 'https://picsum.photos/seed/nord160x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Kids Bunk Mattress is designed thin enough for safety on an upper bunk while providing comfortable Nordic sleep for growing children. CertiPUR certified foam is free of harmful substances.',
      zh: '儿童双层床垫设计得足够薄以在上铺保持安全，同时为成长中的孩子提供舒适的北欧睡眠，CertiPUR认证泡沫不含有害物质。'
    },
    specs: {
      Material: 'Hypoallergenic foam, slim',
      Dimensions: '90×200 cm',
      Weight: '9 kg',
      Type: 'Foam',
      Thickness: '15 cm',
      Certification: 'CertiPUR',
      Size: 'Single'
    },
    material: {
      en: 'Hypoallergenic foam, slim',
      zh: '低过敏原泡沫，纤薄'
    },
    dimensions: '90×200 cm',
    weight: '9 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 161,
    name: {
      en: 'Black Frame Mirror',
      zh: '黑框镜子'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mirrors',
      zh: '镜子'
    },
    price: 179,
    originalPrice: 179,
    discount: 0,
    rating: 4.6,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord161x0/600/600', 'https://picsum.photos/seed/nord161x1/600/600'],
    badges: ['Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Black Frame Mirror is a graphic Nordic statement—a simple rectangular mirror in a bold powder-coated steel frame that creates strong visual contrast against white Nordic walls.',
      zh: '黑框镜子是图形化的北欧宣言，简单的矩形镜子在大胆的粉末涂层钢框中，在白色北欧墙壁上创造强烈的视觉对比。'
    },
    specs: {
      Material: 'Powder-coated steel frame',
      Dimensions: 'W60×H90 cm',
      Weight: '7 kg',
      Frame: 'Powder-coated steel',
      Size: '60×90 cm',
      Hang: 'Vertical or horizontal',
      Style: 'Minimal graphic'
    },
    material: {
      en: 'Powder-coated steel frame',
      zh: '粉末涂层钢框'
    },
    dimensions: 'W60×H90 cm',
    weight: '7 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 162,
    name: {
      en: 'Triptych Dressing Mirror',
      zh: '三联梳妆镜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mirrors',
      zh: '镜子'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.7,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord162x0/600/600', 'https://picsum.photos/seed/nord162x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Triptych Dressing Mirror\'s three hinged panels allow for angled viewing—a practical Nordic dressing solution that doubles as a sculptural bedroom room divider.',
      zh: '三联梳妆镜的三个铰链面板允许角度查看，是实用的北欧梳妆方案，同时兼作雕塑感卧室隔断。'
    },
    specs: {
      Material: 'Solid oak, 3-panel',
      Dimensions: 'W90×H160 cm',
      Weight: '16 kg',
      Frame: 'Solid oak',
      Panels: '3 hinged',
      Height: '160 cm',
      Freestanding: 'Yes'
    },
    material: {
      en: 'Solid oak, 3-panel',
      zh: '实心橡木，三联'
    },
    dimensions: 'W90×H160 cm',
    weight: '16 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 163,
    name: {
      en: 'Wooden Slatted Bed',
      zh: '木质板条床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 799,
    originalPrice: 1065,
    discount: 25,
    rating: 4.8,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord163x0/600/600', 'https://picsum.photos/seed/nord163x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Wooden Slatted Bed\'s architectural headboard of vertical ash slats creates a light, airy Nordic pattern that reads as both headboard and room divider from the other side.',
      zh: '木质板条床的垂直白蜡木板条建筑感床头板创造轻盈通透的北欧图案，从另一侧既可作为床头板也可作为房间隔断。'
    },
    specs: {
      Material: 'Solid ash',
      Dimensions: 'W140×L200×H80 cm',
      Weight: '38 kg',
      Style: 'Slatted headboard',
      Size: 'Double',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid ash, visible slat headboard',
      zh: '实心白蜡木，可见板条床头'
    },
    dimensions: 'W140×L200×H80 cm',
    weight: '38 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 164,
    name: {
      en: 'Upholstered Storage Bed',
      zh: '软包储物床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1799,
    originalPrice: 1799,
    discount: 0,
    rating: 4.9,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord164x0/600/600', 'https://picsum.photos/seed/nord164x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'A king-size luxury with premium velvet headboard and hydraulic under-bed storage—the ultimate Nordic bedroom statement that combines materiality, comfort, and practical function.',
      zh: '特大号豪华床配优质丝绒床头和液压床下储物，结合材质、舒适与实用功能的终极北欧卧室宣言。'
    },
    specs: {
      Material: 'Velvet headboard, hydraulic',
      Dimensions: 'W180×L200×H90 cm',
      Weight: '85 kg',
      Headboard: 'Velvet upholstered',
      Storage: 'Hydraulic lift',
      Size: 'King',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet headboard, hydraulic',
      zh: '丝绒床头，液压'
    },
    dimensions: 'W180×L200×H90 cm',
    weight: '85 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 165,
    name: {
      en: 'Dresser with Mirror',
      zh: '带镜斗柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 749,
    originalPrice: 1070,
    discount: 30,
    rating: 5.0,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord165x0/600/600', 'https://picsum.photos/seed/nord165x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Dresser with Mirror combines five spacious drawers with an integrated dressing mirror—a Nordic bedroom centrepiece that reduces clutter by combining two essential functions.',
      zh: '带镜斗柜将五个宽大抽屉与集成梳妆镜结合，是通过合并两个基本功能减少杂乱的北欧卧室核心家具。'
    },
    specs: {
      Material: 'Oak',
      Dimensions: 'W100×D45×H175 cm',
      Weight: '52 kg',
      Drawers: '5',
      Mirror: 'Attached',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak, attached mirror, 5 drawers',
      zh: '橡木，附带镜子，五抽屉'
    },
    dimensions: 'W100×D45×H175 cm',
    weight: '52 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 166,
    name: {
      en: 'Wardrobe with Drawers',
      zh: '带抽屉衣柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 1499,
    originalPrice: 1499,
    discount: 0,
    rating: 3.5,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord166x0/600/600', 'https://picsum.photos/seed/nord166x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Wardrobe with Drawers is a complete Nordic bedroom storage solution—two hanging sections with a deep drawer tower in between handles a whole wardrobe with Scandinavian efficiency.',
      zh: '带抽屉衣柜是完整的北欧卧室储物解决方案，两个挂衣区中间夹着深抽屉塔，以斯堪的纳维亚效率处理整个衣橱。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W160×D58×H220 cm',
      Weight: '80 kg',
      "Hanging sections": '2',
      Drawers: '4',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch ply, drawers + hanging',
      zh: '桦木板，抽屉+挂衣'
    },
    dimensions: 'W160×D58×H220 cm',
    weight: '80 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 167,
    name: {
      en: 'Pillow Top Mattress',
      zh: '枕顶床垫'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 1099,
    originalPrice: 1099,
    discount: 0,
    rating: 3.7,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord167x0/600/600', 'https://picsum.photos/seed/nord167x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Pillow Top Mattress adds an extra layer of plush Nordic sleeping luxury—individually wrapped pocket springs with a generous quilted pillow top for ultimate cloud-like comfort.',
      zh: '枕顶床垫增添额外一层丰盈的北欧睡眠奢华，独立袋装弹簧配宽大的绗缝枕顶实现终极云朵般舒适。'
    },
    specs: {
      Material: 'Pillow-top + pocket springs',
      Dimensions: '160×200 cm',
      Weight: '34 kg',
      Type: 'Pillow-top + pocket springs',
      Firmness: 'Medium-plush',
      Cover: 'Quilted',
      Warranty: '10 years'
    },
    material: {
      en: 'Pillow-top + pocket springs',
      zh: '枕顶+袋装弹簧'
    },
    dimensions: '160×200 cm',
    weight: '34 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 168,
    name: {
      en: 'Nordic Poster Bed',
      zh: '北欧四柱床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1699,
    originalPrice: 1699,
    discount: 0,
    rating: 3.8,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord168x0/600/600', 'https://picsum.photos/seed/nord168x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Nordic Poster Bed\'s four solid birch posts create a frame that can be dressed with curtains, fairy lights, or left clean for a minimal Scandinavian statement.',
      zh: '北欧四柱床的四根实心桦木柱创造可以装饰窗帘、串灯或保持干净作为极简北欧宣言的框架。'
    },
    specs: {
      Material: 'Solid birch',
      Dimensions: 'W160×L200×H180 cm',
      Weight: '68 kg',
      Style: 'Four-poster',
      Size: 'Queen',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid birch four-poster',
      zh: '实心桦木四柱'
    },
    dimensions: 'W160×L200×H180 cm',
    weight: '68 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 169,
    name: {
      en: 'Linen Chest',
      zh: '亚麻储物箱'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Dressers',
      zh: '斗柜'
    },
    price: 299,
    originalPrice: 350,
    discount: 15,
    rating: 3.9,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord169x0/600/600', 'https://picsum.photos/seed/nord169x1/600/600'],
    badges: ['Sale'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'The Linen Chest is a Nordic bedroom essential—a beautiful linen-covered storage box that sits at the foot of the bed and stores extra blankets, pillows, and bed linen.',
      zh: '亚麻储物箱是北欧卧室必备，放置于床尾的美丽亚麻覆盖储物箱，存放额外毯子、枕头和床上用品。'
    },
    specs: {
      Material: 'MDF + linen',
      Dimensions: 'W90×D45×H52 cm',
      Weight: '18 kg',
      Lid: 'Hinged',
      Volume: 'Large',
      Assembly: 'No'
    },
    material: {
      en: 'Linen-covered MDF, hinged lid',
      zh: '亚麻覆盖MDF，铰链盖'
    },
    dimensions: 'W90×D45×H52 cm',
    weight: '18 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 170,
    name: {
      en: 'Japanese Platform Bed',
      zh: '日式平台床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 899,
    originalPrice: 899,
    discount: 0,
    rating: 4.0,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord170x0/600/600', 'https://picsum.photos/seed/nord170x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Japanese Platform Bed draws on the tradition of Nordic-Japanese design minimalism—an ultra-low solid pine frame that sits just 25 cm from the floor for a Zen sleeping experience.',
      zh: '日式平台床汲取北欧日式设计极简主义传统，超低的实心松木框架距地面仅25厘米，提供禅意睡眠体验。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W160×L200×H25 cm',
      Weight: '48 kg',
      "Height from floor": '25 cm',
      Style: 'Japanese platform',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, ultra-low platform',
      zh: '实心松木，超低平台'
    },
    dimensions: 'W160×L200×H25 cm',
    weight: '48 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 171,
    name: {
      en: 'Rattan Pendant Bedside',
      zh: '藤编悬挂床头柜'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 109,
    originalPrice: 120,
    discount: 10,
    rating: 4.1,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord171x0/600/600', 'https://picsum.photos/seed/nord171x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Rattan Hanging Bedside Tray suspends from the ceiling beside the bed, holding books, phone, and a glass of water without occupying precious floor space.',
      zh: '藤编悬挂床头托盘从天花板悬挂于床旁，存放书籍、手机和一杯水，不占用宝贵的地面空间。'
    },
    specs: {
      Material: 'Rattan',
      Dimensions: 'Ø40×H15 cm',
      Weight: '1 kg',
      Hanging: 'Ceiling mount',
      Diameter: '40 cm',
      For: 'Books + small items'
    },
    material: {
      en: 'Rattan, hanging bedside tray',
      zh: '藤编，悬挂床头托盘'
    },
    dimensions: 'Ø40×H15 cm',
    weight: '1 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 172,
    name: {
      en: 'Kids Cabin Bed',
      zh: '儿童阁楼床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1199,
    originalPrice: 1199,
    discount: 0,
    rating: 4.2,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord172x0/600/600', 'https://picsum.photos/seed/nord172x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Kids Cabin Bed transforms a child\'s room into an adventure space—solid pine construction with a raised sleeping platform, integrated slide or ladder, and under-bed play area.',
      zh: '儿童阁楼床将儿童房变成冒险空间，实心松木构造配升高睡眠平台、集成滑梯或梯子和床下游乐区。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W90×L200×H160 cm',
      Weight: '52 kg',
      Style: 'Cabin/loft',
      Slide: 'Optional',
      Safety: 'EN747 certified'
    },
    material: {
      en: 'Solid pine, cabin design',
      zh: '实心松木，阁楼设计'
    },
    dimensions: 'W90×L200×H160 cm',
    weight: '52 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 173,
    name: {
      en: 'Capsule Wardrobe Organiser',
      zh: '胶囊衣橱整理'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 179,
    originalPrice: 179,
    discount: 0,
    rating: 4.3,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord173x0/600/600', 'https://picsum.photos/seed/nord173x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'The Capsule Wardrobe Organiser is a minimalist Nordic open clothes rail—chrome steel uprights with hanging rails and shelves designed for a curated, clutter-free capsule wardrobe.',
      zh: '胶囊衣橱整理是极简北欧开放衣架，带挂衣杆和搁架的镀铬钢立柱专为精选无杂乱的胶囊衣橱设计。'
    },
    specs: {
      Material: 'Chrome steel',
      Dimensions: 'W80×D50×H170 cm',
      Weight: '22 kg',
      Style: 'Open rail',
      Hanging: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Chrome steel, open system',
      zh: '镀铬钢，开放系统'
    },
    dimensions: 'W80×D50×H170 cm',
    weight: '22 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 174,
    name: {
      en: 'Bedside Reading Light',
      zh: '床头阅读灯'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Nightstands',
      zh: '床头柜'
    },
    price: 89,
    originalPrice: 150,
    discount: 40,
    rating: 4.4,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord174x0/600/600', 'https://picsum.photos/seed/nord174x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Bedside Reading Light clips to any headboard or nightstand, positioning warm adjustable LED light exactly where you need it for Nordic late-night reading.',
      zh: '床头阅读灯夹于任何床头板或床头柜上，将温暖可调节LED光线精准定位至北欧深夜阅读所需之处。'
    },
    specs: {
      Material: 'Clip-on LED, bedside',
      Dimensions: 'W25×D15×H45 cm',
      Weight: '0.7 kg',
      Type: 'Clip-on LED',
      "Color temp": 'Adjustable 2700-6500K',
      "USB powered": 'Yes',
      "Flexible neck": 'Yes'
    },
    material: {
      en: 'Clip-on LED, bedside',
      zh: '夹持LED，床头'
    },
    dimensions: 'W25×D15×H45 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 175,
    name: {
      en: 'Holm Oak Dining Table',
      zh: '霍尔姆橡木餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 1199,
    originalPrice: 1199,
    discount: 0,
    rating: 4.5,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord175x0/600/600', 'https://picsum.photos/seed/nord175x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Holm dining table is a celebration of solid oak—its wide planks showcase natural grain and knots that tell the story of the tree. Designed to gather family and friends in the Nordic tradition.',
      zh: '霍尔姆餐桌是对实心橡木的礼赞，宽幅板面展现天然纹理与木节，诉说树木的故事。专为在北欧传统中汇聚家人与朋友而设计。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W180×D90×H74 cm',
      Weight: '68 kg',
      Finish: 'Natural oil',
      Seats: '6-8',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, natural oil',
      zh: '实心橡木，天然油'
    },
    dimensions: 'W180×D90×H74 cm',
    weight: '68 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 176,
    name: {
      en: 'Rund Round Dining Table',
      zh: '伦德圆形餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 899,
    originalPrice: 899,
    discount: 0,
    rating: 4.6,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord176x0/600/600', 'https://picsum.photos/seed/nord176x1/600/600'],
    badges: ['Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Rund\'s circular form promotes equal conversation, perfectly embodying the Nordic democratic dining tradition. A dramatic marble top pairs with a sculptural solid walnut pedestal base.',
      zh: '伦德的圆形设计促进平等交流，完美体现北欧民主的餐桌传统，精彩的大理石桌面搭配雕塑感实心胡桃木底座。'
    },
    specs: {
      Material: 'Marble top, walnut base',
      Dimensions: 'Ø130×H74 cm',
      Weight: '45 kg',
      Top: 'Marble',
      Base: 'Solid walnut',
      Shape: 'Round',
      Seats: '4-6'
    },
    material: {
      en: 'Marble top, walnut base',
      zh: '大理石桌面，胡桃木底座'
    },
    dimensions: 'Ø130×H74 cm',
    weight: '45 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 177,
    name: {
      en: 'Extend Extendable Table',
      zh: '伸缩延伸餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 1499,
    originalPrice: 1875,
    discount: 20,
    rating: 4.7,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord177x0/600/600', 'https://picsum.photos/seed/nord177x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Extend table grows with your needs—a central butterfly extension mechanism adds 80 cm to accommodate larger gatherings with no extra parts to store.',
      zh: '伸缩餐桌随需求成长，中央蝴蝶延伸机构无需额外零件储存，即可增加80厘米以容纳更大聚会。'
    },
    specs: {
      Material: 'Solid beech',
      Dimensions: 'W140-220×D90×H74 cm',
      Weight: '72 kg',
      "Extended length": '220 cm',
      Extension: 'Butterfly leaf',
      Seats: '4-8'
    },
    material: {
      en: 'Solid beech, extension leaf',
      zh: '实心山毛榉，延伸板'
    },
    dimensions: 'W140-220×D90×H74 cm',
    weight: '72 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 178,
    name: {
      en: 'Björk Trestle Table',
      zh: '白桦木锯架餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 699,
    originalPrice: 699,
    discount: 0,
    rating: 4.8,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord178x0/600/600', 'https://picsum.photos/seed/nord178x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Björk trestle table draws on traditional Nordic workshop aesthetics, with a thick pine plank top and sturdy solid oak trestle bases that can be dismantled for easy moving.',
      zh: '白桦锯架餐桌汲取北欧传统工坊美学，厚实松木板桌面搭配坚固的实心橡木锯架底座，可拆卸便于搬移。'
    },
    specs: {
      Material: 'Pine top, oak trestles',
      Dimensions: 'W160×D80×H74 cm',
      Weight: '35 kg',
      Top: 'Solid pine',
      Base: 'Solid oak trestles',
      Disassembles: 'Yes',
      Seats: '4-6'
    },
    material: {
      en: 'Pine top, oak trestles',
      zh: '松木桌面，橡木锯架'
    },
    dimensions: 'W160×D80×H74 cm',
    weight: '35 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 179,
    name: {
      en: 'Kyst Coastal Dining Table',
      zh: '科斯特海滨餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 849,
    originalPrice: 849,
    discount: 0,
    rating: 4.9,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord179x0/600/600', 'https://picsum.photos/seed/nord179x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Kyst\'s bleached oak surface and clean white structure capture the light, airy feeling of Nordic coastal homes. The timeless form pairs with any dining chair style.',
      zh: '科斯特的漂白橡木桌面和洁白框架捕捉北欧海滨家居的明亮通透感，经典造型与任何餐椅风格相配。'
    },
    specs: {
      Material: 'Bleached oak',
      Dimensions: 'W160×D90×H74 cm',
      Weight: '40 kg',
      Legs: 'Powder-coated steel',
      Seats: '6',
      Assembly: 'Required'
    },
    material: {
      en: 'Bleached oak, white',
      zh: '漂白橡木，白色'
    },
    dimensions: 'W160×D90×H74 cm',
    weight: '40 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 180,
    name: {
      en: 'Lana Oval Dining Table',
      zh: '拉娜椭圆餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 1349,
    originalPrice: 1349,
    discount: 0,
    rating: 5.0,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord180x0/600/600', 'https://picsum.photos/seed/nord180x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'Lana\'s oval form is the most social of table shapes—no sharp corners and a continuous curve that makes everyone feel central. Solid walnut brings warmth and luxury.',
      zh: '拉娜的椭圆形是最具社交感的桌型，没有尖角，连续的曲线让每个人都感觉身处中心，实心胡桃木带来温暖与奢华。'
    },
    specs: {
      Material: 'Solid walnut',
      Dimensions: 'W200×D95×H74 cm',
      Weight: '60 kg',
      Shape: 'Oval',
      Seats: '6-8',
      Finish: 'Natural oil'
    },
    material: {
      en: 'Solid walnut',
      zh: '实心胡桃木'
    },
    dimensions: 'W200×D95×H74 cm',
    weight: '60 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 181,
    name: {
      en: 'Arne Dining Chair',
      zh: '阿恩餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 249,
    originalPrice: 249,
    discount: 0,
    rating: 3.5,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord181x0/600/600', 'https://picsum.photos/seed/nord181x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Arne is a modern interpretation of a Nordic classic—its cane back provides lightness and ventilation while solid oak legs ensure lasting durability. Stackable for easy storage.',
      zh: '阿恩是北欧经典的现代诠释，藤编背提供轻盈感与透气性，实心橡木腿确保经久耐用，可叠放便于储存。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W50×D52×H82 cm',
      Weight: '5.5 kg',
      Back: 'Cane weave',
      Stackable: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, cane back',
      zh: '实心橡木，藤编背'
    },
    dimensions: 'W50×D52×H82 cm',
    weight: '5.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 182,
    name: {
      en: 'Saga Upholstered Dining Chair',
      zh: '萨迦软包餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 319,
    originalPrice: 319,
    discount: 0,
    rating: 3.7,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord182x0/600/600', 'https://picsum.photos/seed/nord182x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Saga brings living room comfort to the dining table. Its fully upholstered seat and back in plush velvet make extended dinner conversations a pleasure.',
      zh: '萨迦将客厅舒适带入餐桌，全软包的丝绒椅座和椅背让漫长的餐后聊天成为享受。'
    },
    specs: {
      Material: 'Velvet, solid oak',
      Dimensions: 'W52×D55×H85 cm',
      Weight: '7 kg',
      Upholstery: 'Premium velvet',
      Legs: 'Solid oak',
      "Seat height": '47 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet, solid oak',
      zh: '丝绒，实心橡木'
    },
    dimensions: 'W52×D55×H85 cm',
    weight: '7 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 183,
    name: {
      en: 'Kinn Wooden Chair',
      zh: '金恩木椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 179,
    originalPrice: 179,
    discount: 0,
    rating: 3.8,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord183x0/600/600', 'https://picsum.photos/seed/nord183x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'Kinn celebrates the enduring appeal of all-wood Scandinavian chair design. Its gentle curves are shaped for comfortable sitting, and the solid beech construction will last a lifetime.',
      zh: '金恩颂扬北欧全木椅设计的持久魅力，轻柔的曲线塑造舒适坐感，实心山毛榉构造可用一生。'
    },
    specs: {
      Material: 'Solid beech',
      Dimensions: 'W47×D50×H80 cm',
      Weight: '4.2 kg',
      Finish: 'Natural lacquer',
      Stackable: 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Solid beech, all-wood',
      zh: '实心山毛榉，全木'
    },
    dimensions: 'W47×D50×H80 cm',
    weight: '4.2 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 184,
    name: {
      en: 'Hay-Style Wire Chair',
      zh: '线椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 3.9,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord184x0/600/600', 'https://picsum.photos/seed/nord184x1/600/600'],
    badges: ['Sale'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'This wire chair is a Scandinavian icon updated for the modern home—the open steel wire construction is both visually light and surprisingly comfortable with its subtle seat flex.',
      zh: '线椅是为现代家居更新的北欧图标，开放钢线构造在视觉上轻盈，细微的椅座弹性出人意料地舒适。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W50×D52×H80 cm',
      Weight: '3 kg',
      Style: 'Wire',
      Stackable: 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Powder-coated steel wire',
      zh: '粉末涂层钢线'
    },
    dimensions: 'W50×D52×H80 cm',
    weight: '3 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 185,
    name: {
      en: 'Stol Bench',
      zh: '斯托尔长凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.0,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord185x0/600/600', 'https://picsum.photos/seed/nord185x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Stol bench brings flexible Nordic seating to the dining table—it can seat three, slide under the table when not in use, and move easily around the home.',
      zh: '斯托尔长凳为餐桌提供灵活的北欧坐席，可坐三人，不用时可推入桌下，且易于在家中移动。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W160×D38×H45 cm',
      Weight: '12 kg',
      Length: '160 cm',
      "Seat height": '45 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak bench',
      zh: '实心橡木长凳'
    },
    dimensions: 'W160×D38×H45 cm',
    weight: '12 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 186,
    name: {
      en: 'Vik Bar Stool',
      zh: '维克吧台凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 179,
    originalPrice: 200,
    discount: 10,
    rating: 4.1,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord186x0/600/600', 'https://picsum.photos/seed/nord186x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Vik bar stool adjusts to fit counter or bar height with a simple gas-lift mechanism. Its clean lines and solid oak seat complement any Scandinavian kitchen.',
      zh: '维克吧凳通过简单的气动升降机构调节台面或吧台高度，简洁的线条与实心橡木椅座与任何北欧厨房相配。'
    },
    specs: {
      Material: 'Solid oak seat',
      Dimensions: 'W40×D40×H74 cm',
      Weight: '4 kg',
      "Height range": '60-80 cm',
      Mechanism: 'Gas lift',
      Footrest: 'Yes'
    },
    material: {
      en: 'Solid oak, adjustable height',
      zh: '实心橡木，可调节高度'
    },
    dimensions: 'W40×D40×H74 cm',
    weight: '4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 187,
    name: {
      en: 'Rema Swivel Stool',
      zh: '雷玛旋转高凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 219,
    originalPrice: 219,
    discount: 0,
    rating: 4.2,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord187x0/600/600', 'https://picsum.photos/seed/nord187x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Rema swivel stool brings Nordic-contemporary style to the kitchen island. Its 360° swivel and adjustable height work across bar and counter applications.',
      zh: '雷玛旋转高凳为厨房岛台带来北欧当代风格，360°旋转与可调节高度适用于吧台和台面各种场合。'
    },
    specs: {
      Material: 'Faux leather, chrome base',
      Dimensions: 'W44×D44×H76 cm',
      Weight: '5 kg',
      Seat: 'Faux leather',
      Base: 'Chrome',
      Swivel: '360°',
      "Height range": '58-78 cm'
    },
    material: {
      en: 'Faux leather, chrome base',
      zh: '仿皮，镀铬底座'
    },
    dimensions: 'W44×D44×H76 cm',
    weight: '5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 188,
    name: {
      en: 'Ryd Sideboard',
      zh: '吕德餐边柜'
    },
    category: 'Dining',
    subcategory: {
      en: 'Sideboards',
      zh: '餐边柜'
    },
    price: 799,
    originalPrice: 940,
    discount: 15,
    rating: 4.3,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord188x0/600/600', 'https://picsum.photos/seed/nord188x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Ryd sideboard provides generous dining room storage behind its elegant sliding oak doors, with an open shelf at the top for displaying Nordic objects.',
      zh: '吕德餐边柜在优雅的推拉橡木门后提供充裕的餐厅储物空间，顶部开放搁板展示北欧装饰品。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W160×D45×H75 cm',
      Weight: '48 kg',
      Doors: 'Sliding',
      Shelves: 'Adjustable',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, sliding doors',
      zh: '实心橡木，推拉门'
    },
    dimensions: 'W160×D45×H75 cm',
    weight: '48 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 189,
    name: {
      en: 'Bod Buffet Cabinet',
      zh: '博德餐柜'
    },
    category: 'Dining',
    subcategory: {
      en: 'Sideboards',
      zh: '餐边柜'
    },
    price: 969,
    originalPrice: 969,
    discount: 0,
    rating: 4.4,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord189x0/600/600', 'https://picsum.photos/seed/nord189x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Bod\'s generous proportions serve a dining room or hallway equally well. Soft-close cabinet doors and deep drawers handle everything from tablecloths to tableware.',
      zh: '博德宽大的尺寸同样适合餐厅或玄关，阻尼关门柜门和深抽屉可收纳桌布到餐具的一切物品。'
    },
    specs: {
      Material: 'Walnut veneer, soft-close',
      Dimensions: 'W200×D50×H85 cm',
      Weight: '65 kg',
      Veneer: 'American walnut',
      Doors: 'Soft-close',
      Drawers: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Walnut veneer, soft-close',
      zh: '胡桃木贴皮，阻尼关门'
    },
    dimensions: 'W200×D50×H85 cm',
    weight: '65 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 190,
    name: {
      en: 'Gin Bar Cart',
      zh: '杜松子酒吧车'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Carts',
      zh: '吧车'
    },
    price: 249,
    originalPrice: 310,
    discount: 20,
    rating: 4.5,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord190x0/600/600', 'https://picsum.photos/seed/nord190x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Gin bar cart is a Nordic entertainer\'s essential—solid oak shelves on polished brass wheels that roll effortlessly from kitchen to dining room for cocktail service.',
      zh: '杜松子酒吧车是北欧娱乐必备，实心橡木搁板配抛光黄铜轮，轻松从厨房滚至餐厅提供鸡尾酒服务。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W60×D40×H90 cm',
      Weight: '10 kg',
      Wheels: 'Brass, locking',
      Shelves: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, brass wheels',
      zh: '实心橡木，黄铜轮'
    },
    dimensions: 'W60×D40×H90 cm',
    weight: '10 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 191,
    name: {
      en: 'Concrete Dining Table',
      zh: '混凝土餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 1799,
    originalPrice: 1799,
    discount: 0,
    rating: 4.6,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord191x0/600/600', 'https://picsum.photos/seed/nord191x1/600/600'],
    badges: ['Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Concrete Dining Table pairs a smooth fibre-reinforced concrete top with solid oak legs—a striking Nordic-industrial combination that anchors a dining room with raw elemental beauty.',
      zh: '混凝土餐桌将光滑的纤维增强混凝土桌面与实心橡木腿搭配，是一个将原始元素之美固定于餐厅的北欧工业组合。'
    },
    specs: {
      Material: 'Fibre concrete top, oak legs',
      Dimensions: 'W200×D90×H74 cm',
      Weight: '85 kg',
      Top: 'Fibre concrete',
      Legs: 'Solid oak',
      Seats: '6-8'
    },
    material: {
      en: 'Fibre concrete top, oak legs',
      zh: '纤维混凝土桌面，橡木腿'
    },
    dimensions: 'W200×D90×H74 cm',
    weight: '85 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 192,
    name: {
      en: 'Glass Top Dining Table',
      zh: '玻璃桌面餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 799,
    originalPrice: 799,
    discount: 0,
    rating: 4.7,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord192x0/600/600', 'https://picsum.photos/seed/nord192x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Glass Top Dining Table brings an airy Nordic lightness to the dining room. A 15mm tempered glass top on a sculptural solid walnut base creates a visually weightless composition.',
      zh: '玻璃桌面餐桌为餐厅带来通透的北欧轻盈感，15毫米钢化玻璃桌面立于雕塑感实心胡桃木底座上，创造视觉上无重量的构图。'
    },
    specs: {
      Material: 'Tempered glass, walnut base',
      Dimensions: 'W160×D80×H74 cm',
      Weight: '35 kg',
      Top: '15mm tempered glass',
      Base: 'Solid walnut',
      Shape: 'Rectangular',
      Seats: '4-6'
    },
    material: {
      en: 'Tempered glass, walnut base',
      zh: '钢化玻璃，胡桃木底座'
    },
    dimensions: 'W160×D80×H74 cm',
    weight: '35 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 193,
    name: {
      en: 'Live Edge Dining Table',
      zh: '活边餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 2499,
    originalPrice: 3330,
    discount: 25,
    rating: 4.8,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord193x0/600/600', 'https://picsum.photos/seed/nord193x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'Each Live Edge Dining Table is a unique piece of Nordic nature art—a solid walnut slab preserving the natural edge of the tree forms the top, supported by a minimal steel base.',
      zh: '每张活边餐桌都是一件独特的北欧自然艺术品，保留树木天然边缘的实心胡桃木板构成桌面，由极简钢铁底座支撑。'
    },
    specs: {
      Material: 'Live edge walnut slab',
      Dimensions: 'W200×D90×H74 cm',
      Weight: '75 kg',
      Top: 'Solid walnut slab',
      Edge: 'Natural live edge',
      Base: 'Powder-coated steel',
      Unique: 'Each piece varies'
    },
    material: {
      en: 'Live edge walnut slab',
      zh: '活边胡桃木板'
    },
    dimensions: 'W200×D90×H74 cm',
    weight: '75 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 194,
    name: {
      en: 'Farmhouse Pine Table',
      zh: '农舍松木桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 649,
    originalPrice: 649,
    discount: 0,
    rating: 4.9,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord194x0/600/600', 'https://picsum.photos/seed/nord194x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Farmhouse Pine Table is inspired by traditional Nordic rural dining—thick solid pine planks and cross-leg construction create a sturdy, characterful table that fits a Nordic country kitchen.',
      zh: '农舍松木桌灵感源于传统北欧农村就餐，厚实的实心松木板和十字腿构造打造坚固有个性的桌子，适合北欧乡村厨房。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W180×D90×H74 cm',
      Weight: '48 kg',
      Style: 'Farmhouse',
      Legs: 'Cross',
      Seats: '6-8'
    },
    material: {
      en: 'Solid pine, cross legs',
      zh: '实心松木，十字腿'
    },
    dimensions: 'W180×D90×H74 cm',
    weight: '48 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 195,
    name: {
      en: 'Compact Apartment Table',
      zh: '紧凑公寓餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 399,
    originalPrice: 570,
    discount: 30,
    rating: 5.0,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord195x0/600/600', 'https://picsum.photos/seed/nord195x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Compact Apartment Table is designed for Nordic urban living—proportioned for 2-4 people in a small dining area, with clean birch ply construction and tapered legs.',
      zh: '紧凑公寓餐桌专为北欧城市生活设计，为小型用餐区的2-4人设计比例，桦木板构造配锥形腿。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: '100×70 cm',
      Weight: '22 kg',
      Seats: '2-4',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch ply, tapered legs',
      zh: '桦木板，锥形腿'
    },
    dimensions: 'W100×D70×H74 cm',
    weight: '22 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 196,
    name: {
      en: 'Mesh Dining Chair',
      zh: '网状餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 3.5,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord196x0/600/600', 'https://picsum.photos/seed/nord196x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Mesh Dining Chair is a contemporary Nordic classic—its moulded polypropylene mesh seat and back flex with the body while remaining supremely lightweight and stackable.',
      zh: '网状餐椅是当代北欧经典，模塑聚丙烯网座椅和椅背随身体弯曲，同时保持超轻且可叠放。'
    },
    specs: {
      Material: 'Polypropylene + steel',
      Dimensions: 'W48×D52×H82 cm',
      Weight: '4.5 kg',
      Stackable: 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Polypropylene mesh, steel',
      zh: '聚丙烯网，钢'
    },
    dimensions: 'W48×D52×H82 cm',
    weight: '4.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 197,
    name: {
      en: 'Leather Dining Chair',
      zh: '皮革餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 369,
    originalPrice: 369,
    discount: 0,
    rating: 3.7,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord197x0/600/600', 'https://picsum.photos/seed/nord197x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'PU leather upholstery and solid oak legs give this dining chair a premium Nordic hotel aesthetic. Easy to wipe clean and fade-resistant—ideal for families.',
      zh: 'PU皮革面料和实心橡木腿赋予这款餐椅高级北欧酒店美感，易于擦拭且不褪色，非常适合家庭使用。'
    },
    specs: {
      Material: 'PU leather, solid oak',
      Dimensions: 'W52×D55×H85 cm',
      Weight: '7.5 kg',
      Upholstery: 'PU leather',
      Legs: 'Solid oak',
      "Seat height": '47 cm',
      "Easy-clean": 'Yes'
    },
    material: {
      en: 'PU leather, solid oak',
      zh: 'PU皮革，实心橡木'
    },
    dimensions: 'W52×D55×H85 cm',
    weight: '7.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 198,
    name: {
      en: 'Solid Pine Dining Chair',
      zh: '实心松木餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 3.8,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord198x0/600/600', 'https://picsum.photos/seed/nord198x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'This all-solid-pine dining chair is an honest, durable Nordic choice. The natural grain of the pine gives each chair a unique character, and they stack neatly for smaller spaces.',
      zh: '这款全实心松木餐椅是诚实耐用的北欧选择，松木的天然纹理给每把椅子独特个性，且可整洁叠放于小空间。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W46×D50×H85 cm',
      Weight: '3.8 kg',
      Finish: 'Natural lacquer',
      Stackable: 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Solid pine, all-wood',
      zh: '实心松木，全木'
    },
    dimensions: 'W46×D50×H85 cm',
    weight: '3.8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 199,
    name: {
      en: 'Upholstered Armchair Dining',
      zh: '软包扶手餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 289,
    originalPrice: 340,
    discount: 15,
    rating: 3.9,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord199x0/600/600', 'https://picsum.photos/seed/nord199x1/600/600'],
    badges: ['Sale'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'Add lounge chair comfort to the dining table with this upholstered armchair dining chair. Bouclé upholstery and solid beech arms create a Nordic luxury dining experience.',
      zh: '以这款软包扶手餐椅为餐桌增添休闲椅舒适感，布克莱面料和实心山毛榉扶手创造北欧奢华就餐体验。'
    },
    specs: {
      Material: 'Boucle, beech arms',
      Dimensions: 'W57×D58×H90 cm',
      Weight: '8 kg',
      Upholstery: 'Bouclé',
      Arms: 'Solid beech',
      "Seat height": '47 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Boucle, beech arms',
      zh: '布克莱，山毛榉扶手'
    },
    dimensions: 'W57×D58×H90 cm',
    weight: '8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 200,
    name: {
      en: 'Scandinavian Tulip Chair',
      zh: '斯堪的纳维亚郁金香椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 239,
    originalPrice: 239,
    discount: 0,
    rating: 4.0,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord200x0/600/600', 'https://picsum.photos/seed/nord200x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'A Nordic interpretation of the iconic tulip chair—a moulded polypropylene shell on a single powder-coated aluminum pedestal base. Elegant, functional, and stackable.',
      zh: '北欧对标志性郁金香椅的诠释，模塑聚丙烯外壳立于单根粉末涂层铝底座上，优雅、实用且可叠放。'
    },
    specs: {
      Material: 'Moulded shell, pedestal base',
      Dimensions: 'Ø52×H82 cm',
      Weight: '6 kg',
      Shell: 'Polypropylene',
      Base: 'Aluminium',
      Stackable: 'Yes'
    },
    material: {
      en: 'Moulded shell, pedestal base',
      zh: '模塑外壳，底座'
    },
    dimensions: 'Ø52×H82 cm',
    weight: '6 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 201,
    name: {
      en: 'Solid Oak Bar Stool',
      zh: '实心橡木吧凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 199,
    originalPrice: 220,
    discount: 10,
    rating: 4.1,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord201x0/600/600', 'https://picsum.photos/seed/nord201x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'Simple and beautiful—this solid oak bar stool needs no adjustment mechanism because its proportions are calibrated for standard bar height. A Nordic classic that improves with age.',
      zh: '简单而美丽，这款实心橡木吧凳不需要调节机构，因为其比例专为标准吧台高度校准，是随时间愈发迷人的北欧经典。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W42×D42×H75 cm',
      Weight: '5 kg',
      Height: '75 cm',
      Finish: 'Natural oil',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, fixed height',
      zh: '实心橡木，固定高度'
    },
    dimensions: 'W42×D42×H75 cm',
    weight: '5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 202,
    name: {
      en: 'Rattan Bar Stool',
      zh: '藤编吧凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 169,
    originalPrice: 169,
    discount: 0,
    rating: 4.2,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord202x0/600/600', 'https://picsum.photos/seed/nord202x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'Hand-woven rattan seat on slim metal legs—a Nordic-boho bar stool that adds natural texture to a kitchen island or breakfast bar.',
      zh: '手工藤编座面立于纤细金属腿上，是为厨房岛台或早餐吧台增添天然纹理的北欧波西米亚吧凳。'
    },
    specs: {
      Material: 'Rattan weave, metal legs',
      Dimensions: 'W45×D45×H74 cm',
      Weight: '4 kg',
      Seat: 'Rattan weave',
      Legs: 'Powder-coated steel',
      Height: '74 cm',
      Footrest: 'Yes'
    },
    material: {
      en: 'Rattan weave, metal legs',
      zh: '藤编，金属腿'
    },
    dimensions: 'W45×D45×H74 cm',
    weight: '4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 203,
    name: {
      en: 'Backless Counter Stool',
      zh: '无背台面凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 139,
    originalPrice: 139,
    discount: 0,
    rating: 4.3,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord203x0/600/600', 'https://picsum.photos/seed/nord203x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'A simple Nordic round-top counter stool in solid pine—no back, no fuss. Stackable and lightweight, it is ideal for kitchen islands where space flexibility matters.',
      zh: '实心松木无背简约北欧圆顶台面凳，没有靠背，没有麻烦，可叠放且轻便，非常适合空间灵活性重要的厨房岛台。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'Ø35×H65 cm',
      Weight: '4 kg',
      Height: '65 cm',
      Stackable: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine round seat',
      zh: '实心松木圆座'
    },
    dimensions: 'Ø35×H65 cm',
    weight: '4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 204,
    name: {
      en: 'Scandinavian Narrow Sideboard',
      zh: '北欧窄型边柜'
    },
    category: 'Dining',
    subcategory: {
      en: 'Sideboards',
      zh: '餐边柜'
    },
    price: 599,
    originalPrice: 1000,
    discount: 40,
    rating: 4.4,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord204x0/600/600', 'https://picsum.photos/seed/nord204x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Scandinavian Narrow Sideboard fits into tight dining rooms and hallways with its compact 38 cm depth. Two doors conceal shelving that handles everything from tableware to household admin files.',
      zh: '北欧窄型边柜以紧凑的38厘米深度适合狭小的餐厅和走廊，两扇门遮藏的搁架可处理从餐具到家庭文件的一切。'
    },
    specs: {
      Material: 'Oak veneer, 2 doors',
      Dimensions: 'W120×D38×H75 cm',
      Weight: '38 kg',
      Veneer: 'Oak',
      Depth: '38 cm',
      Doors: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, 2 doors',
      zh: '橡木贴皮，两门'
    },
    dimensions: 'W120×D38×H75 cm',
    weight: '38 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 205,
    name: {
      en: 'Hinge Open Sideboard',
      zh: '翻转开门餐边柜'
    },
    category: 'Dining',
    subcategory: {
      en: 'Sideboards',
      zh: '餐边柜'
    },
    price: 849,
    originalPrice: 849,
    discount: 0,
    rating: 4.5,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord205x0/600/600', 'https://picsum.photos/seed/nord205x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Hinge Open Sideboard\'s push-to-open mechanism means no visible handles—a seamless Nordic surface that conceals a generously proportioned interior with adjustable shelving.',
      zh: '翻转开门餐边柜的按压开门机构意味着无可见拉手，无缝的北欧表面隐藏着配可调节搁架的宽大内部空间。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W160×D40×H80 cm',
      Weight: '52 kg',
      Opening: 'Push-to-open',
      Shelves: 'Adjustable',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, push-open',
      zh: '实心橡木，按压开门'
    },
    dimensions: 'W160×D40×H80 cm',
    weight: '52 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 206,
    name: {
      en: 'Brass Drinks Trolley',
      zh: '黄铜饮品推车'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Carts',
      zh: '吧车'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.6,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord206x0/600/600', 'https://picsum.photos/seed/nord206x1/600/600'],
    badges: ['Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Brass Drinks Trolley elevates pre-dinner drinks to a Nordic ritual. Polished brass frame and smoked glass shelves create a sophisticated mobile drinks station.',
      zh: '黄铜饮品推车将餐前饮品提升为北欧仪式，抛光黄铜框架和烟灰玻璃搁板打造精致的移动饮品站。'
    },
    specs: {
      Material: 'Brass frame, glass shelves',
      Dimensions: 'W65×D45×H95 cm',
      Weight: '14 kg',
      Frame: 'Polished brass',
      Shelves: 'Smoked glass',
      Wheels: 'Locking',
      Assembly: 'Required'
    },
    material: {
      en: 'Brass frame, glass shelves',
      zh: '黄铜框架，玻璃搁板'
    },
    dimensions: 'W65×D45×H95 cm',
    weight: '14 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 207,
    name: {
      en: 'Rustic Drinks Cart',
      zh: '质朴饮品车'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Carts',
      zh: '吧车'
    },
    price: 189,
    originalPrice: 235,
    discount: 20,
    rating: 4.7,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord207x0/600/600', 'https://picsum.photos/seed/nord207x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'A Nordic farmhouse-style drinks cart in solid pine with aged iron wheels. Its rustic charm suits a country house or any Scandinavian interior that values the beauty of natural materials.',
      zh: '实心松木配仿旧铁轮的北欧农舍风饮品车，质朴的魅力适合乡村别墅或任何重视天然材料之美的北欧室内。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W55×D35×H85 cm',
      Weight: '8 kg',
      Wheels: 'Iron (decorative + functional)',
      Shelves: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, iron wheels',
      zh: '实心松木，铁轮'
    },
    dimensions: 'W55×D35×H85 cm',
    weight: '8 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 208,
    name: {
      en: 'Industrial Dining Table',
      zh: '工业餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 999,
    originalPrice: 999,
    discount: 0,
    rating: 4.8,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord208x0/600/600', 'https://picsum.photos/seed/nord208x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Industrial Dining Table pairs a thick solid pine plank top with sturdy black powder-coated steel legs—a Nordic-industrial design that works in everything from loft apartments to country kitchens.',
      zh: '工业餐桌将厚实的实心松木板桌面与坚固的黑色粉末涂层钢腿搭配，是从loft公寓到乡村厨房皆适用的北欧工业设计。'
    },
    specs: {
      Material: 'Solid pine, black steel legs',
      Dimensions: 'W180×D80×H74 cm',
      Weight: '55 kg',
      Top: 'Solid pine',
      Legs: 'Powder-coated steel',
      Seats: '6',
      Style: 'Industrial'
    },
    material: {
      en: 'Solid pine, black steel legs',
      zh: '实心松木，黑色钢腿'
    },
    dimensions: 'W180×D80×H74 cm',
    weight: '55 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 209,
    name: {
      en: 'Nordic Kitchen Table',
      zh: '北欧厨房桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 499,
    originalPrice: 499,
    discount: 0,
    rating: 4.9,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord209x0/600/600', 'https://picsum.photos/seed/nord209x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'A simple Nordic kitchen table for everyday family meals—birch plywood with a natural oil finish that develops character with daily use. Compact enough for most kitchens.',
      zh: '简单的北欧厨房桌用于日常家庭用餐，天然油处理的桦木夹板随日常使用形成独特个性，足够紧凑适合大多数厨房。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W120×D75×H74 cm',
      Weight: '28 kg',
      Finish: 'Natural oil',
      Seats: '4',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch ply, natural finish',
      zh: '桦木板，天然处理'
    },
    dimensions: 'W120×D75×H74 cm',
    weight: '28 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 210,
    name: {
      en: 'Teak Indoor Dining Table',
      zh: '柚木室内餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 1499,
    originalPrice: 1499,
    discount: 0,
    rating: 5.0,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord210x0/600/600', 'https://picsum.photos/seed/nord210x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Teak Indoor Dining Table brings the warmth of sustainably sourced teak indoors. Smooth-planed surfaces and tight joinery reflect Nordic precision woodworking.',
      zh: '柚木室内餐桌将可持续采购的柚木温暖带入室内，平整刨面和紧密的榫卯工艺体现北欧精准木工技艺。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W180×D90×H74 cm',
      Weight: '65 kg',
      Finish: 'Danish oil',
      Seats: '6-8',
      Assembly: 'Required'
    },
    material: {
      en: 'FSC teak, indoor grade',
      zh: 'FSC柚木，室内级'
    },
    dimensions: 'W180×D90×H74 cm',
    weight: '65 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 211,
    name: {
      en: 'Crossback Chair',
      zh: '十字背椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 159,
    originalPrice: 159,
    discount: 0,
    rating: 3.5,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord211x0/600/600', 'https://picsum.photos/seed/nord211x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Crossback Chair is a Nordic farmhouse dining icon—solid pine with a distinctive crossed-bar back that is stackable and extremely durable. A timeless choice for any kitchen.',
      zh: '十字背椅是北欧农舍餐椅图标，实心松木配独特的十字杆背，可叠放且极为耐用，是任何厨房的永恒之选。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W48×D52×H88 cm',
      Weight: '4 kg',
      Style: 'Crossback',
      Stackable: 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Solid pine, cross back',
      zh: '实心松木，十字背'
    },
    dimensions: 'W48×D52×H88 cm',
    weight: '4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 212,
    name: {
      en: 'Wishbone Style Chair',
      zh: 'Y形背椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 219,
    originalPrice: 219,
    discount: 0,
    rating: 3.7,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord212x0/600/600', 'https://picsum.photos/seed/nord212x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'A Nordic icon—the wishbone-shaped back in solid beech with a hand-woven paper cord seat. This chair has been celebrated in Scandinavian design history for decades.',
      zh: '北欧图标，实心山毛榉Y形背配手工编织纸绳坐面，这把椅子在斯堪的纳维亚设计史上已被推崇数十年。'
    },
    specs: {
      Material: 'Solid beech',
      Dimensions: 'W51×D52×H76 cm',
      Weight: '3.5 kg',
      Seat: 'Woven paper cord',
      Style: 'Wishbone',
      Handcraft: 'Woven seat'
    },
    material: {
      en: 'Solid beech, woven seat',
      zh: '实心山毛榉，编织坐面'
    },
    dimensions: 'W51×D52×H76 cm',
    weight: '3.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 213,
    name: {
      en: 'Ghost Chair',
      zh: '幽灵椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 189,
    originalPrice: 189,
    discount: 0,
    rating: 3.8,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord213x0/600/600', 'https://picsum.photos/seed/nord213x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'The transparent polycarbonate Ghost Chair is a Nordic space-maximizing trick—it disappears visually into any dining room, making the room feel larger and lighter.',
      zh: '透明聚碳酸酯幽灵椅是北欧空间最大化妙招，在视觉上消失于任何餐厅，使房间感觉更大更通透。'
    },
    specs: {
      Material: 'Polycarbonate',
      Dimensions: 'W53×D52×H76 cm',
      Weight: '4 kg',
      Color: 'Clear',
      Stackable: 'Yes',
      Weatherproof: 'Light indoor use'
    },
    material: {
      en: 'Polycarbonate, transparent',
      zh: '聚碳酸酯，透明'
    },
    dimensions: 'W53×D52×H76 cm',
    weight: '4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 214,
    name: {
      en: 'Velvet Dining Chair Set',
      zh: '丝绒餐椅套装'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 599,
    originalPrice: 599,
    discount: 0,
    rating: 3.9,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord214x0/600/600', 'https://picsum.photos/seed/nord214x1/600/600'],
    badges: ['Sale'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'Four matching dining chairs upholstered in plush velvet with solid oak legs—a complete set for a Nordic dining table. Mix-and-match colours are available for a modern eclectic look.',
      zh: '四把匹配的华丽丝绒实心橡木腿餐椅，是北欧餐桌的完整套装，可搭配不同颜色呈现现代折衷风格。'
    },
    specs: {
      Material: 'Set of 4 velvet chairs',
      Dimensions: 'W50×D55×H85 cm each',
      Weight: '7 kg each',
      Set: '4 chairs',
      Upholstery: 'Premium velvet',
      Legs: 'Solid oak',
      Assembly: 'Required'
    },
    material: {
      en: 'Set of 4 velvet chairs',
      zh: '四件套丝绒椅'
    },
    dimensions: 'W50×D55×H85 cm each',
    weight: '7 kg each',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 215,
    name: {
      en: 'Industrial Pipe Stool',
      zh: '工业管道高凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 4.0,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord215x0/600/600', 'https://picsum.photos/seed/nord215x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Industrial Pipe Stool\'s round solid pine seat on black iron pipe legs brings Nordic-industrial character to any kitchen island. Footrest rings at multiple heights suit different users.',
      zh: '工业管道高凳的圆形实心松木座面立于黑铁管腿上，为任何厨房岛台带来北欧工业个性，多高度脚踏圈适合不同用户。'
    },
    specs: {
      Material: 'Solid pine, black pipe',
      Dimensions: 'W36×D36×H75 cm',
      Weight: '4 kg',
      Seat: 'Solid pine',
      Legs: 'Black iron pipe',
      Footrest: 'Multi-height rings',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, black pipe',
      zh: '实心松木，黑铁管'
    },
    dimensions: 'W36×D36×H75 cm',
    weight: '4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 216,
    name: {
      en: 'Velvet Counter Stool',
      zh: '丝绒台面凳'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 199,
    originalPrice: 220,
    discount: 10,
    rating: 4.1,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord216x0/600/600', 'https://picsum.photos/seed/nord216x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'Velvet seat upholstery on polished gold legs—this counter stool brings Nordic glamour to kitchen islands and breakfast bars. The back support makes long breakfasts more comfortable.',
      zh: '抛光金色腿上的丝绒座面，这款台面凳为厨房岛台和早餐吧带来北欧魅力，靠背支撑使漫长的早餐更加舒适。'
    },
    specs: {
      Material: 'Velvet seat, gold legs',
      Dimensions: 'W43×D45×H65 cm',
      Weight: '5.5 kg',
      Seat: 'Velvet upholstered',
      Legs: 'Polished gold steel',
      Height: '65 cm',
      Backrest: 'Yes'
    },
    material: {
      en: 'Velvet seat, gold legs',
      zh: '丝绒座面，金色腿'
    },
    dimensions: 'W43×D45×H65 cm',
    weight: '5.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 217,
    name: {
      en: 'Vintage Oak Sideboard',
      zh: '复古橡木餐边柜'
    },
    category: 'Dining',
    subcategory: {
      en: 'Sideboards',
      zh: '餐边柜'
    },
    price: 1099,
    originalPrice: 1099,
    discount: 0,
    rating: 4.2,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord217x0/600/600', 'https://picsum.photos/seed/nord217x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Vintage Oak Sideboard\'s rattan panel doors bring natural Nordic-boho texture to the dining room. Solid oak frame and adjustable interior shelves combine craft and function.',
      zh: '复古橡木餐边柜的藤编面板门为餐厅带来天然北欧波西米亚质感，实心橡木框架和可调节内部搁架结合工艺与功能。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W180×D50×H80 cm',
      Weight: '62 kg',
      Doors: 'Rattan panel',
      Shelves: 'Adjustable',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, rattan doors',
      zh: '实心橡木，藤编门'
    },
    dimensions: 'W180×D50×H80 cm',
    weight: '62 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 218,
    name: {
      en: 'Concrete Base Dining Table',
      zh: '混凝土底座餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 1299,
    originalPrice: 1530,
    discount: 15,
    rating: 4.3,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord218x0/600/600', 'https://picsum.photos/seed/nord218x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Concrete Base Dining Table pairs a warm solid oak top with a weighty cast concrete pedestal—a striking Nordic material contrast that grounds the dining room with elemental authority.',
      zh: '混凝土底座餐桌将温暖的实心橡木桌面与厚重的铸造混凝土底座结合，鲜明的北欧材料对比以元素级权威稳定餐厅。'
    },
    specs: {
      Material: 'Oak top, cast concrete base',
      Dimensions: 'W180×D90×H74 cm',
      Weight: '72 kg',
      Top: 'Solid oak',
      Base: 'Cast concrete',
      Seats: '6'
    },
    material: {
      en: 'Oak top, cast concrete base',
      zh: '橡木桌面，铸造混凝土底座'
    },
    dimensions: 'W180×D90×H74 cm',
    weight: '72 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 219,
    name: {
      en: 'Petite Cafe Table',
      zh: '小型咖啡厅桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.4,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord219x0/600/600', 'https://picsum.photos/seed/nord219x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'A small Nordic cafe-style round table in solid beech—perfect for morning coffee, breakfast for two, or small apartment dining. Its simple form is endlessly versatile.',
      zh: '实心山毛榉的小型北欧咖啡厅风格圆桌，非常适合晨间咖啡、两人早餐或小型公寓就餐，简单的造型具有无限的多功能性。'
    },
    specs: {
      Material: 'Solid beech',
      Dimensions: 'Ø70×H74 cm',
      Weight: '12 kg',
      Diameter: '70 cm',
      Seats: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid beech, round',
      zh: '实心山毛榉，圆形'
    },
    dimensions: 'Ø70×H74 cm',
    weight: '12 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 220,
    name: {
      en: 'Nordic Rattan Chair',
      zh: '北欧藤椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 189,
    originalPrice: 235,
    discount: 20,
    rating: 4.5,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord220x0/600/600', 'https://picsum.photos/seed/nord220x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Nordic Rattan Chair\'s woven rattan back panel adds natural texture and lightness to the dining room. Solid oak legs provide a warm, sturdy foundation.',
      zh: '北欧藤椅的编织藤编背板为餐厅增添天然纹理和轻盈感，实心橡木腿提供温暖坚固的基础。'
    },
    specs: {
      Material: 'Rattan back, solid oak legs',
      Dimensions: 'W52×D55×H85 cm',
      Weight: '4 kg',
      Back: 'Rattan weave',
      Legs: 'Solid oak',
      "Seat height": '47 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Rattan back, solid oak legs',
      zh: '藤编背，实心橡木腿'
    },
    dimensions: 'W52×D55×H85 cm',
    weight: '4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 221,
    name: {
      en: 'Tub Dining Chair',
      zh: '桶形餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 259,
    originalPrice: 259,
    discount: 0,
    rating: 4.6,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord221x0/600/600', 'https://picsum.photos/seed/nord221x1/600/600'],
    badges: ['Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Tub Dining Chair brings living room comfort to the table—its round, enveloping form in plush velvet turns mealtimes into a luxurious Nordic experience.',
      zh: '桶形餐椅将客厅舒适带入餐桌，华丽丝绒的圆润包裹形态将进餐时间变为奢华的北欧体验。'
    },
    specs: {
      Material: 'Velvet, tapered legs',
      Dimensions: 'W55×D55×H78 cm',
      Weight: '6.5 kg',
      Upholstery: 'Velvet',
      Legs: 'Tapered solid wood',
      "Seat height": '47 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Velvet, tapered legs',
      zh: '丝绒，锥形腿'
    },
    dimensions: 'W55×D55×H78 cm',
    weight: '6.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 222,
    name: {
      en: 'Dining Set Table & 4 Chairs',
      zh: '餐桌椅套装四件'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Sets',
      zh: '餐厅套装'
    },
    price: 1899,
    originalPrice: 1899,
    discount: 0,
    rating: 4.7,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord222x0/600/600', 'https://picsum.photos/seed/nord222x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'A complete Nordic dining set—a solid oak table with four matching solid oak chairs, ready to create a beautiful Scandinavian dining space from day one.',
      zh: '完整的北欧餐桌椅套装，实心橡木桌配四把匹配的实心橡木椅，从第一天起就打造美丽的斯堪的纳维亚就餐空间。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W140×D80×H74 cm',
      Weight: '85 kg',
      Includes: 'Table + 4 chairs',
      Seats: '4',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak table + 4 chairs',
      zh: '实心橡木桌+四椅'
    },
    dimensions: 'W140×D80×H74 cm',
    weight: '85 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 223,
    name: {
      en: 'High Dining Table Set',
      zh: '高吧台餐桌套装'
    },
    category: 'Dining',
    subcategory: {
      en: 'Bar Stools',
      zh: '吧凳'
    },
    price: 1299,
    originalPrice: 1730,
    discount: 25,
    rating: 4.8,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord223x0/600/600', 'https://picsum.photos/seed/nord223x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'A Nordic bar-height dining set that transforms kitchen entertaining—solid oak high table with four matching counter stools creates an informal, convivial dining experience.',
      zh: '北欧吧台高度就餐套装改变厨房娱乐方式，实心橡木高桌配四把匹配台面凳创造随意欢聚的就餐体验。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W120×D60×H90 cm',
      Weight: '55 kg',
      Includes: 'Table + 4 stools',
      Height: 'Bar height',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak table + 4 bar stools',
      zh: '橡木桌+四吧凳'
    },
    dimensions: 'W120×D60×H90 cm',
    weight: '55 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 224,
    name: {
      en: 'Tulip Style Round Table',
      zh: '郁金香圆桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 799,
    originalPrice: 799,
    discount: 0,
    rating: 4.9,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord224x0/600/600', 'https://picsum.photos/seed/nord224x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'A Nordic-contemporary take on the iconic pedestal round table—Carrara marble top on a single fluted column base in matte white. Seats four in elegant Scandinavian simplicity.',
      zh: '对标志性底座圆桌的北欧当代诠释，卡拉拉大理石桌面立于哑光白色单槽柱底座上，以优雅的斯堪的纳维亚简约容纳四人。'
    },
    specs: {
      Material: 'Marble top, pedestal base',
      Dimensions: 'Ø120×H74 cm',
      Weight: '38 kg',
      Top: 'Carrara marble',
      Base: 'Fluted column',
      Seats: '4',
      Color: 'Marble + white'
    },
    material: {
      en: 'Marble top, pedestal base',
      zh: '大理石桌面，底座'
    },
    dimensions: 'Ø120×H74 cm',
    weight: '38 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 225,
    name: {
      en: 'Nordic Bar Cabinet',
      zh: '北欧酒柜'
    },
    category: 'Dining',
    subcategory: {
      en: 'Sideboards',
      zh: '餐边柜'
    },
    price: 649,
    originalPrice: 925,
    discount: 30,
    rating: 5.0,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord225x0/600/600', 'https://picsum.photos/seed/nord225x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Nordic Bar Cabinet showcases a curated spirit collection behind two glass doors on solid oak. Integrated wine rack and adjustable shelves make it a complete home bar solution.',
      zh: '北欧酒柜在实心橡木的两扇玻璃门后展示精选烈酒收藏，集成酒架和可调节搁板使其成为完整的家庭酒吧解决方案。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W80×D40×H100 cm',
      Weight: '38 kg',
      Doors: 'Glass',
      "Wine rack": 'Integrated',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, glass doors',
      zh: '实心橡木，玻璃门'
    },
    dimensions: 'W80×D40×H100 cm',
    weight: '38 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 226,
    name: {
      en: 'Butterfly Chair Dining',
      zh: '蝴蝶餐椅'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 3.5,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord226x0/600/600', 'https://picsum.photos/seed/nord226x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Butterfly Chair adapted for dining—a leather sling seat on a powder-coated steel frame with a back support that gives Nordic relaxed dining a sculptural edge.',
      zh: '为就餐改编的蝴蝶椅，粉末涂层钢框架上的皮革悬挂座面配靠背支撑，赋予北欧轻松就餐雕塑感。'
    },
    specs: {
      Material: 'Leather sling, powder-coated frame',
      Dimensions: 'W56×D58×H80 cm',
      Weight: '5 kg',
      Seat: 'Leather sling',
      Frame: 'Powder-coated steel',
      Assembly: 'Easy',
      Style: 'Mid-century Nordic'
    },
    material: {
      en: 'Leather sling, powder-coated frame',
      zh: '皮革悬挂，粉末涂层框架'
    },
    dimensions: 'W56×D58×H80 cm',
    weight: '5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 227,
    name: {
      en: 'Counter Height Table',
      zh: '台面高度餐桌'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Tables',
      zh: '餐桌'
    },
    price: 549,
    originalPrice: 549,
    discount: 0,
    rating: 3.7,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord227x0/600/600', 'https://picsum.photos/seed/nord227x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Counter Height Table works at kitchen island height for casual Nordic dining and cooking—solid oak top on four sturdy turned legs.',
      zh: '台面高度餐桌在厨房岛台高度工作，适合休闲北欧就餐和烹饪，坚固旋制腿上的实心橡木桌面。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W120×D70×H90 cm',
      Weight: '32 kg',
      Height: '90 cm',
      Style: 'Counter height',
      Seats: '4-6'
    },
    material: {
      en: 'Solid oak, counter height',
      zh: '实心橡木，台面高度'
    },
    dimensions: 'W120×D70×H90 cm',
    weight: '32 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 228,
    name: {
      en: 'Arbeid Standing Desk',
      zh: '阿贝德升降桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 1299,
    originalPrice: 1299,
    discount: 0,
    rating: 3.8,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord228x0/600/600', 'https://picsum.photos/seed/nord228x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Arbeid electric standing desk allows effortless height adjustment at the touch of a button—a Nordic wellness investment for modern knowledge workers. Solid oak top completes the premium feel.',
      zh: '阿贝德电动升降桌允许轻触按钮即可轻松调节高度，是现代知识工作者的北欧健康投资，实心橡木桌面提升高端质感。'
    },
    specs: {
      Material: 'Solid oak top, steel frame',
      Dimensions: 'W140×D70×H72-120 cm',
      Weight: '38 kg',
      Top: 'Solid oak',
      Frame: 'Powder-coated steel',
      "Height range": '72-120 cm',
      Motor: 'Dual motor, quiet'
    },
    material: {
      en: 'Solid oak top, steel frame',
      zh: '实心橡木桌面，钢制框架'
    },
    dimensions: 'W140×D70×H72-120 cm',
    weight: '38 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 229,
    name: {
      en: 'Hjern Home Office Desk',
      zh: '海恩居家办公桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 549,
    originalPrice: 645,
    discount: 15,
    rating: 3.9,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord229x0/600/600', 'https://picsum.photos/seed/nord229x1/600/600'],
    badges: ['Sale'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'The Hjern is designed around the realities of working from home—an integrated cable management tray keeps your workspace serene, while a solid oak top provides a warm, productive surface.',
      zh: '海恩专为居家办公现实需求设计，内置走线盘保持工作空间整洁，实心橡木桌面提供温暖且有效率的工作界面。'
    },
    specs: {
      Material: 'Solid oak, integrated cable',
      Dimensions: 'W140×D60×H74 cm',
      Weight: '28 kg',
      Top: 'Solid oak',
      "Cable management": 'Built-in tray',
      Drawers: '1',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak, integrated cable',
      zh: '实心橡木，集成走线'
    },
    dimensions: 'W140×D60×H74 cm',
    weight: '28 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 230,
    name: {
      en: 'Slim Secretary Desk',
      zh: '修长秘书台'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 4.0,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord230x0/600/600', 'https://picsum.photos/seed/nord230x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Slim secretary desk folds neatly against the wall when not in use—a space-saving Nordic solution for apartments. The drop-down lid reveals a compact workstation with cubbies and a writing surface.',
      zh: '修长秘书台不用时紧贴墙壁折叠，是公寓的节省空间北欧方案，翻盖式设计打开后露出带格子收纳和书写面的紧凑工作站。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W80×D40×H75 cm',
      Weight: '15 kg',
      "Open size": 'W80×D60 cm',
      Storage: 'Cubbies + small drawers',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch, fold-down lid',
      zh: '桦木，折叠盖'
    },
    dimensions: 'W80×D40×H75 cm',
    weight: '15 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 231,
    name: {
      en: 'Corner L-Desk',
      zh: 'L形角落桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 749,
    originalPrice: 830,
    discount: 10,
    rating: 4.1,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord231x0/600/600', 'https://picsum.photos/seed/nord231x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Corner L-Desk maximises office productivity by providing a generous work surface in an efficient L-configuration. Oak veneer brings Nordic warmth to the home office.',
      zh: 'L形角落桌以高效的L形配置提供宽阔的工作界面，最大化办公效率，橡木贴皮为家庭办公室带来北欧温暖。'
    },
    specs: {
      Material: 'Oak veneer, L-shape',
      Dimensions: 'W160×D120×H74 cm',
      Weight: '42 kg',
      Top: 'Oak veneer',
      Configuration: 'L-shape',
      "Cable access": 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, L-shape',
      zh: '橡木贴皮，L形'
    },
    dimensions: 'W160×D120×H74 cm',
    weight: '42 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 232,
    name: {
      en: 'Skrive Writing Desk',
      zh: '斯克里弗写字台'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 329,
    originalPrice: 329,
    discount: 0,
    rating: 4.2,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord232x0/600/600', 'https://picsum.photos/seed/nord232x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Skrive is a simple, beautiful writing desk inspired by Scandinavian school furniture. Solid pine and hairpin legs make it light enough to move from room to room.',
      zh: '斯克里弗是一款受北欧校园家具启发的简约美丽写字台，实心松木与发夹腿使其轻便易于在房间间移动。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W100×D50×H75 cm',
      Weight: '18 kg',
      Legs: 'Hairpin steel',
      Assembly: 'Required',
      Drawer: '1'
    },
    material: {
      en: 'Solid pine, hairpin legs',
      zh: '实心松木，发夹腿'
    },
    dimensions: 'W100×D50×H75 cm',
    weight: '18 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 233,
    name: {
      en: 'Rygg Ergonomic Chair',
      zh: '里格人体工学椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 799,
    originalPrice: 799,
    discount: 0,
    rating: 4.3,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord233x0/600/600', 'https://picsum.photos/seed/nord233x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'The Rygg ergonomic chair supports Nordic working culture values—health, comfort, and longevity. Its breathable mesh back and adjustable lumbar support reduce fatigue during long working sessions.',
      zh: '里格人体工学椅支持北欧工作文化价值观——健康、舒适与持久，透气网背和可调节腰部支撑减少长时间工作的疲劳。'
    },
    specs: {
      Material: 'Mesh back, foam seat',
      Dimensions: 'W66×D62×H90-105 cm',
      Weight: '15 kg',
      Back: 'Breathable mesh',
      Lumbar: 'Adjustable',
      Armrests: '4D adjustable',
      Warranty: '5 years'
    },
    material: {
      en: 'Mesh back, foam seat',
      zh: '网背，泡沫坐面'
    },
    dimensions: 'W66×D62×H90-105 cm',
    weight: '15 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 234,
    name: {
      en: 'Stol Office Chair',
      zh: '斯托尔办公椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 449,
    originalPrice: 750,
    discount: 40,
    rating: 4.4,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord234x0/600/600', 'https://picsum.photos/seed/nord234x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Stol blends Nordic aesthetics with office functionality—a handsome fabric-upholstered chair with a 5-star chrome base and adjustable seat height. Both stylish and supportive.',
      zh: '斯托尔融合北欧美学与办公功能，布面坐面配五爪镀铬底座和可调节座高，既美观又有支撑性。'
    },
    specs: {
      Material: 'Fabric seat, chrome base',
      Dimensions: 'W62×D60×H87-100 cm',
      Weight: '13 kg',
      Upholstery: 'Woven fabric',
      Base: 'Chrome',
      Height: 'Adjustable',
      Tilt: 'Reclining'
    },
    material: {
      en: 'Fabric seat, chrome base',
      zh: '布面坐面，镀铬底座'
    },
    dimensions: 'W62×D60×H87-100 cm',
    weight: '13 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 235,
    name: {
      en: 'Barn Task Chair',
      zh: '巴恩任务椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.5,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord235x0/600/600', 'https://picsum.photos/seed/nord235x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Barn task chair is an affordable entry into Nordic ergonomic design. Its breathable mesh seat and adjustable armrests support a healthy posture through a full working day.',
      zh: '巴恩任务椅是实惠的北欧人体工学设计入门款，透气网座和可调节扶手为全天工作提供健康姿势支撑。'
    },
    specs: {
      Material: 'Mesh, plastic shell',
      Dimensions: 'W60×D58×H82-96 cm',
      Weight: '11 kg',
      Back: 'Mesh',
      Armrests: 'Adjustable',
      Height: 'Gas lift',
      Warranty: '2 years'
    },
    material: {
      en: 'Mesh, plastic shell',
      zh: '网布，塑料外壳'
    },
    dimensions: 'W60×D58×H82-96 cm',
    weight: '11 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 236,
    name: {
      en: 'Akt Filing Cabinet',
      zh: '阿克特文件柜'
    },
    category: 'Office',
    subcategory: {
      en: 'Filing Cabinets',
      zh: '文件柜'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.6,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord236x0/600/600', 'https://picsum.photos/seed/nord236x1/600/600'],
    badges: ['Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Akt filing cabinet stores A4 and letter-size documents in two lockable drawers. Its powder-coated steel construction and casters make it a mobile Nordic home office companion.',
      zh: '阿克特文件柜在两个可锁抽屉中存放A4和信函尺寸文件，粉末涂层钢构造和脚轮使其成为移动的北欧家庭办公伴侣。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W42×D55×H60 cm',
      Weight: '22 kg',
      Drawers: '2 (lockable)',
      Casters: '4 (2 locking)',
      "File size": 'A4/Letter'
    },
    material: {
      en: 'Steel, 2 drawers',
      zh: '钢制，双抽屉'
    },
    dimensions: 'W42×D55×H60 cm',
    weight: '22 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 237,
    name: {
      en: 'Vy Monitor Stand',
      zh: '维伊显示器支架'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 99,
    originalPrice: 125,
    discount: 20,
    rating: 4.7,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord237x0/600/600', 'https://picsum.photos/seed/nord237x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Vy monitor stand raises your screen to an ergonomic eye level while providing a neat drawer below for stationery. Solid bamboo construction is both sustainable and beautiful.',
      zh: '维伊显示器支架将屏幕抬升至人体工学视线高度，下方整洁的抽屉存放文具。实心竹构造既可持续又美观。'
    },
    specs: {
      Material: 'Solid bamboo',
      Dimensions: 'W50×D24×H11 cm',
      Weight: '2.5 kg',
      Drawer: '1',
      "Max load": '15 kg',
      Assembly: 'No'
    },
    material: {
      en: 'Solid bamboo',
      zh: '实心竹'
    },
    dimensions: 'W50×D24×H11 cm',
    weight: '2.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 238,
    name: {
      en: 'Sokkel Bookcase',
      zh: '索科尔书架'
    },
    category: 'Office',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 279,
    originalPrice: 279,
    discount: 0,
    rating: 4.8,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord238x0/600/600', 'https://picsum.photos/seed/nord238x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Sokkel office bookcase provides accessible storage for reference books, files, and desk accessories. Adjustable pine shelves adapt to items of varying heights.',
      zh: '索科尔办公书架为参考书、文件和桌面配件提供易取的储物空间，可调节松木搁板适应不同高度的物品。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W80×D28×H150 cm',
      Weight: '18 kg',
      Shelves: '4 (adjustable)',
      Assembly: 'Required',
      "Wall fixing": 'Recommended'
    },
    material: {
      en: 'Solid pine, 4 shelves',
      zh: '实心松木，四层搁板'
    },
    dimensions: 'W80×D28×H150 cm',
    weight: '18 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 239,
    name: {
      en: 'Lyse Desk Lamp',
      zh: '吕色台灯'
    },
    category: 'Office',
    subcategory: {
      en: 'Desk Lamps',
      zh: '台灯'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.9,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord239x0/600/600', 'https://picsum.photos/seed/nord239x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Lyse desk lamp provides focused Nordic light for reading and working. Its adjustable arm and 360° rotating head adapt to any task, while LED bulb technology ensures efficiency.',
      zh: '吕色台灯为阅读和工作提供专注的北欧照明，可调节臂和360°旋转灯头适应任何任务，LED灯泡技术确保节能。'
    },
    specs: {
      Material: 'Brushed steel, LED',
      Dimensions: 'W25×D15×H45 cm',
      Weight: '0.8 kg',
      "Light source": 'LED',
      Arm: 'Adjustable',
      Head: '360° rotating',
      Power: 'USB-C charging base'
    },
    material: {
      en: 'Brushed steel, LED',
      zh: '拉丝钢，LED'
    },
    dimensions: 'W25×D15×H45 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 240,
    name: {
      en: 'Bord Reading Lamp',
      zh: '博德阅读台灯'
    },
    category: 'Office',
    subcategory: {
      en: 'Desk Lamps',
      zh: '台灯'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 5.0,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord240x0/600/600', 'https://picsum.photos/seed/nord240x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Bord reading lamp pairs a solid brass stem with a hand-stitched fabric shade for warm, diffuse Nordic light. An elegant companion for a writing desk or bedside table.',
      zh: '博德阅读台灯以实心黄铜杆配手缝布艺灯罩，提供温暖柔和的北欧照明，是书桌或床头桌的优雅伴侣。'
    },
    specs: {
      Material: 'Solid brass + fabric',
      Dimensions: 'W30×D20×H55 cm',
      Weight: '1.2 kg',
      Bulb: 'E27 (included)',
      "Shade diameter": '22 cm',
      Switch: 'Touch dimmer'
    },
    material: {
      en: 'Solid brass, fabric shade',
      zh: '实心黄铜，布艺灯罩'
    },
    dimensions: 'W30×D20×H55 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 241,
    name: {
      en: 'Wall-Mounted Fold Desk',
      zh: '壁挂折叠桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 249,
    originalPrice: 249,
    discount: 0,
    rating: 3.5,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord241x0/600/600', 'https://picsum.photos/seed/nord241x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Wall-Mounted Fold Desk folds flat against the wall when not in use—disappearing entirely from sight. Ideal for Nordic apartments where every square metre counts.',
      zh: '壁挂折叠桌不用时平折靠墙，完全从视野消失，非常适合每平方米都重要的北欧公寓。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W80×D40×H75 cm',
      Weight: '12 kg',
      Mount: 'Wall-mounted',
      "Folded depth": '8 cm',
      "Open size": 'W80×D40 cm'
    },
    material: {
      en: 'Birch ply, fold-down',
      zh: '桦木板，折叠'
    },
    dimensions: 'W80×D40×H75 cm',
    weight: '12 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 242,
    name: {
      en: 'Concrete Look Desk',
      zh: '混凝土感桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 429,
    originalPrice: 429,
    discount: 0,
    rating: 3.7,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord242x0/600/600', 'https://picsum.photos/seed/nord242x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Concrete Look Desk brings Nordic-industrial aesthetics to the home office. Its concrete-effect laminate top on a sturdy steel frame creates a serious, focused workspace.',
      zh: '混凝土感桌为家庭办公室带来北欧工业美学，坚固钢框架上的混凝土效果贴面桌面创造严肃专注的工作空间。'
    },
    specs: {
      Material: 'Concrete-effect laminate, steel',
      Dimensions: 'W130×D65×H74 cm',
      Weight: '32 kg',
      Top: 'Concrete-effect laminate',
      Frame: 'Powder-coated steel',
      Drawers: '1',
      Assembly: 'Required'
    },
    material: {
      en: 'Concrete-effect laminate, steel',
      zh: '混凝土效果贴面，钢'
    },
    dimensions: 'W130×D65×H74 cm',
    weight: '32 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 243,
    name: {
      en: 'Designer Writing Desk',
      zh: '设计师写字桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 699,
    originalPrice: 699,
    discount: 0,
    rating: 3.8,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord243x0/600/600', 'https://picsum.photos/seed/nord243x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'The Designer Writing Desk is an artisan piece for those who take their workspace as seriously as their living space. Solid walnut on polished brass legs—Nordic luxury for the home office.',
      zh: '设计师写字桌是为那些像对待生活空间一样认真对待工作空间的人准备的工匠作品，抛光黄铜腿上的实心胡桃木，是家庭办公室的北欧奢华。'
    },
    specs: {
      Material: 'Solid walnut',
      Dimensions: 'W140×D60×H73 cm',
      Weight: '32 kg',
      Legs: 'Polished brass',
      Drawers: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid walnut, brass legs',
      zh: '实心胡桃木，黄铜腿'
    },
    dimensions: 'W140×D60×H73 cm',
    weight: '32 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 244,
    name: {
      en: 'Dual Monitor Desk',
      zh: '双显示器桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 649,
    originalPrice: 649,
    discount: 0,
    rating: 3.9,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord244x0/600/600', 'https://picsum.photos/seed/nord244x1/600/600'],
    badges: ['Sale'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Dual Monitor Desk is purpose-built for the modern Nordic home office with dual screens—a wide surface, integrated cable management, and a monitor platform built into the rear panel.',
      zh: '双显示器桌专为现代北欧家庭办公室的双屏设置而建，宽阔的桌面、集成走线管理和内置于后面板的显示器平台。'
    },
    specs: {
      Material: 'Oak veneer, integrated management',
      Dimensions: 'W160×D70×H74 cm',
      Weight: '35 kg',
      Top: 'Oak veneer',
      Width: '160 cm',
      "Cable management": 'Integrated',
      "Monitor platform": 'Built-in'
    },
    material: {
      en: 'Oak veneer, integrated management',
      zh: '橡木贴皮，集成管理'
    },
    dimensions: 'W160×D70×H74 cm',
    weight: '35 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 245,
    name: {
      en: 'Bamboo Standing Desk',
      zh: '竹制升降桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 899,
    originalPrice: 899,
    discount: 0,
    rating: 4.0,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord245x0/600/600', 'https://picsum.photos/seed/nord245x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'A sustainable Nordic standing desk in solid bamboo—one of the fastest-growing renewable materials. Electric height adjustment from sitting to standing with a quiet dual motor.',
      zh: '可持续的实心竹北欧升降桌，竹子是生长最快的可再生材料之一，安静的双电机实现从坐姿到站姿的电动高度调节。'
    },
    specs: {
      Material: 'Solid bamboo, electric',
      Dimensions: 'W120×D60×H72-118 cm',
      Weight: '28 kg',
      Top: 'Solid bamboo',
      "Height range": '72-118 cm',
      Motor: 'Dual motor',
      Certification: 'FSC bamboo'
    },
    material: {
      en: 'Solid bamboo, electric',
      zh: '实心竹，电动'
    },
    dimensions: 'W120×D60×H72-118 cm',
    weight: '28 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 246,
    name: {
      en: 'Mesh Premium Chair',
      zh: '高级网椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 999,
    originalPrice: 1110,
    discount: 10,
    rating: 4.1,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord246x0/600/600', 'https://picsum.photos/seed/nord246x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Mesh Premium is the Nordic ergonomic chair for those who spend 8+ hours at a desk. Full-body mesh support, 4D armrests, and a lumbar system that adjusts to your exact spine.',
      zh: '高级网椅是为每天在桌旁度过8小时以上的人准备的北欧人体工学椅，全身网状支撑、4D扶手和精确适应脊柱的腰部系统。'
    },
    specs: {
      Material: 'Full mesh, aluminium base',
      Dimensions: 'W68×D65×H95-110 cm',
      Weight: '18 kg',
      Back: 'Full mesh',
      Armrests: '4D adjustable',
      Lumbar: 'Custom adjustable',
      Warranty: '7 years'
    },
    material: {
      en: 'Full mesh, aluminium base',
      zh: '全网，铝合金底座'
    },
    dimensions: 'W68×D65×H95-110 cm',
    weight: '18 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 247,
    name: {
      en: 'Saddle Stool',
      zh: '马鞍凳'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.2,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord247x0/600/600', 'https://picsum.photos/seed/nord247x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Saddle Stool promotes an active sitting posture that engages core muscles—a Scandinavian health approach to desk work. The tilted saddle seat reduces lower back pressure by up to 30%.',
      zh: '马鞍凳提倡激活核心肌群的积极坐姿，是北欧对桌面工作的健康态度，倾斜的马鞍座可将腰部压力减少多达30%。'
    },
    specs: {
      Material: 'Saddle seat, gas lift',
      Dimensions: 'W40×D35×H55-75 cm',
      Weight: '7 kg',
      Seat: 'Ergonomic saddle',
      "Height range": '55-75 cm',
      "Core engagement": 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Saddle seat, gas lift',
      zh: '马鞍座，气动升降'
    },
    dimensions: 'W40×D35×H55-75 cm',
    weight: '7 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 248,
    name: {
      en: 'Kneeling Chair',
      zh: '跪姿椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 249,
    originalPrice: 295,
    discount: 15,
    rating: 4.3,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord248x0/600/600', 'https://picsum.photos/seed/nord248x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Kneeling Chair redistributes weight between buttocks and knees to promote an open hip angle and naturally upright spine—a traditional Scandinavian ergonomic solution.',
      zh: '跪姿椅将重量重新分配于臀部和膝盖之间，以促进开放的髋关节角度和自然直立的脊柱，是传统的斯堪的纳维亚人体工学解决方案。'
    },
    specs: {
      Material: 'Foam padding, birch frame',
      Dimensions: 'W48×D65×H50-65 cm',
      Weight: '7 kg',
      Frame: 'Birch',
      Padding: 'High-density foam',
      Height: 'Adjustable',
      Spine: 'Naturally aligned'
    },
    material: {
      en: 'Foam padding, birch frame',
      zh: '泡沫软垫，桦木框架'
    },
    dimensions: 'W48×D65×H50-65 cm',
    weight: '7 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 249,
    name: {
      en: 'Oak Pedestal Cabinet',
      zh: '橡木底柜'
    },
    category: 'Office',
    subcategory: {
      en: 'Filing Cabinets',
      zh: '文件柜'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.4,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord249x0/600/600', 'https://picsum.photos/seed/nord249x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Oak Pedestal Cabinet rolls under a desk on casters and provides three lockable drawers for important documents. Its solid oak construction keeps it beautiful on the desktop surface too.',
      zh: '橡木底柜在脚轮上滑入桌下，提供三个可锁抽屉存放重要文件，实心橡木构造使其在桌面上同样美观。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W42×D55×H70 cm',
      Weight: '28 kg',
      Drawers: '3 lockable',
      Casters: 'Yes',
      "File size": 'A4'
    },
    material: {
      en: 'Solid oak, 3 drawers',
      zh: '实心橡木，三抽屉'
    },
    dimensions: 'W42×D55×H70 cm',
    weight: '28 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 250,
    name: {
      en: 'Floating Monitor Arm',
      zh: '悬浮显示器臂'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 149,
    originalPrice: 185,
    discount: 20,
    rating: 4.5,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord250x0/600/600', 'https://picsum.photos/seed/nord250x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Floating Monitor Arm clamps to any desk and allows full articulation of your screen—height, tilt, and rotation—freeing up valuable Nordic desk space.',
      zh: '悬浮显示器臂夹在任何桌子上，允许屏幕的完整铰接——高度、倾斜和旋转，释放宝贵的北欧桌面空间。'
    },
    specs: {
      Material: 'Aluminium',
      Dimensions: 'W35×D25×H40 cm',
      Weight: '2 kg',
      Clamp: 'Desk mount',
      Articulation: 'Full (height/tilt/rotate)',
      "Max load": '8 kg'
    },
    material: {
      en: 'Aluminium, desk clamp',
      zh: '铝合金，桌夹'
    },
    dimensions: 'W35×D25×H40 cm',
    weight: '2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 251,
    name: {
      en: 'Walnut Office Bookcase',
      zh: '胡桃木办公书架'
    },
    category: 'Office',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 499,
    originalPrice: 499,
    discount: 0,
    rating: 4.6,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord251x0/600/600', 'https://picsum.photos/seed/nord251x1/600/600'],
    badges: ['Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Walnut Office Bookcase with glass doors is a premium home office statement piece. Walnut veneer and brushed brass handles create a Nordic executive aesthetic.',
      zh: '胡桃木办公书架配玻璃门是高级家庭办公室的宣言单品，胡桃木贴皮与拉丝黄铜拉手创造北欧行政美学。'
    },
    specs: {
      Material: 'Walnut veneer, glass doors',
      Dimensions: 'W100×D32×H200 cm',
      Weight: '40 kg',
      Veneer: 'Walnut',
      Doors: 'Glass with brass handles',
      Height: '200 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Walnut veneer, glass doors',
      zh: '胡桃木贴皮，玻璃门'
    },
    dimensions: 'W100×D32×H200 cm',
    weight: '40 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 252,
    name: {
      en: 'Adjustable Height Desk',
      zh: '可调高度桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 449,
    originalPrice: 449,
    discount: 0,
    rating: 4.7,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord252x0/600/600', 'https://picsum.photos/seed/nord252x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Adjustable Height Desk uses a smooth hand-crank mechanism for height adjustment from sitting to standing—no electricity required. Walnut veneer top with cable management grommets.',
      zh: '可调高度桌使用顺滑手摇机构从坐姿调节至站姿，无需电力，胡桃木贴皮桌面配走线孔。'
    },
    specs: {
      Material: 'Walnut veneer, hand crank',
      Dimensions: 'W120×D60×H72-108 cm',
      Weight: '28 kg',
      Top: 'Walnut veneer',
      Mechanism: 'Hand crank',
      "Height range": '72-108 cm',
      "Cable management": 'Grommets'
    },
    material: {
      en: 'Walnut veneer, hand crank',
      zh: '胡桃木贴皮，手摇'
    },
    dimensions: 'W120×D60×H72-108 cm',
    weight: '28 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 253,
    name: {
      en: 'Kids Study Desk',
      zh: '儿童学习桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 249,
    originalPrice: 330,
    discount: 25,
    rating: 4.8,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord253x0/600/600', 'https://picsum.photos/seed/nord253x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'A simple, solid pine study desk designed for Nordic children—robust enough for homework, art projects, and years of after-school use. A drawer keeps stationery organised.',
      zh: '简单的实心松木学习桌专为北欧儿童设计，坚固耐用，适合家庭作业、艺术项目和多年课后使用，抽屉整理文具。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W90×D50×H75 cm',
      Weight: '16 kg',
      Drawer: '1',
      "Target age": '6-16',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, single drawer',
      zh: '实心松木，单抽屉'
    },
    dimensions: 'W90×D50×H75 cm',
    weight: '16 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 254,
    name: {
      en: 'Executive Leather Desk',
      zh: '行政皮革桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 1299,
    originalPrice: 1299,
    discount: 0,
    rating: 4.9,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord254x0/600/600', 'https://picsum.photos/seed/nord254x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Executive Leather Desk is a Nordic power piece—a wide solid oak frame with a hand-stitched leather writing inlay and integrated cable management for a tidy, professional surface.',
      zh: '行政皮革桌是北欧权威单品，宽阔实心橡木框架配手缝皮革书写嵌板和集成走线管理，打造整洁专业的桌面。'
    },
    specs: {
      Material: 'Leather inlay, oak legs',
      Dimensions: 'W180×D80×H76 cm',
      Weight: '65 kg',
      Top: 'Leather inlay + oak',
      Legs: 'Solid oak',
      "Cable management": 'Integrated',
      Drawers: '2'
    },
    material: {
      en: 'Leather inlay, oak legs',
      zh: '皮革嵌板，橡木腿'
    },
    dimensions: 'W180×D80×H76 cm',
    weight: '65 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 255,
    name: {
      en: 'Leather Executive Chair',
      zh: '皮革行政椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 649,
    originalPrice: 925,
    discount: 30,
    rating: 5.0,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord255x0/600/600', 'https://picsum.photos/seed/nord255x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Leather Executive Chair brings Nordic boardroom confidence to the home office. Full genuine leather upholstery and a 5-star chrome base signal quality and craftsmanship.',
      zh: '皮革行政椅将北欧董事会室的自信带入家庭办公室，全真皮面料和五爪镀铬底座彰显品质和工艺。'
    },
    specs: {
      Material: 'Genuine leather, chrome base',
      Dimensions: 'W68×D65×H93-105 cm',
      Weight: '18 kg',
      Upholstery: 'Genuine leather',
      Base: 'Chrome',
      Armrests: 'Adjustable',
      Warranty: '3 years'
    },
    material: {
      en: 'Genuine leather, chrome base',
      zh: '真皮，镀铬底座'
    },
    dimensions: 'W68×D65×H93-105 cm',
    weight: '18 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 256,
    name: {
      en: 'Active Sitting Stool',
      zh: '主动坐姿凳'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 3.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord256x0/600/600', 'https://picsum.photos/seed/nord256x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Active Sitting Stool encourages micro-movements while working—its wobble base engages core muscles and promotes blood circulation for healthier Nordic desk work.',
      zh: '主动坐姿凳在工作时鼓励微动作，晃动底座激活核心肌群并促进血液循环，使北欧桌面工作更健康。'
    },
    specs: {
      Material: 'Balance stool, wobble base',
      Dimensions: 'Ø35×H55-75 cm',
      Weight: '5 kg',
      Seat: 'Cushioned round',
      Base: 'Wobble (360° tilt)',
      Height: 'Adjustable',
      "Core engagement": 'Yes'
    },
    material: {
      en: 'Balance stool, wobble base',
      zh: '平衡凳，晃动底座'
    },
    dimensions: 'Ø35×H55-75 cm',
    weight: '5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 257,
    name: {
      en: 'Gaming Chair Nordic',
      zh: '北欧电竞椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 549,
    originalPrice: 549,
    discount: 0,
    rating: 3.7,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord257x0/600/600', 'https://picsum.photos/seed/nord257x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Gaming Chair Nordic combines race-car inspired ergonomics with Scandinavian colour restraint—black and grey PU leather with adjustable lumbar and neck pillows for marathon sessions.',
      zh: '北欧电竞椅结合赛车灵感人体工学与斯堪的纳维亚色彩克制，黑灰PU皮革配可调节腰部和颈部枕头，适合马拉松式游戏。'
    },
    specs: {
      Material: 'PU leather, racing style',
      Dimensions: 'W70×D68×H120-130 cm',
      Weight: '22 kg',
      Upholstery: 'PU leather',
      Recline: 'Up to 160°',
      Armrests: '4D',
      "Lumbar pillow": 'Adjustable'
    },
    material: {
      en: 'PU leather, racing style',
      zh: 'PU皮革，赛车风格'
    },
    dimensions: 'W70×D68×H120-130 cm',
    weight: '22 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 258,
    name: {
      en: 'Clamp Desk Lamp',
      zh: '夹持台灯'
    },
    category: 'Office',
    subcategory: {
      en: 'Desk Lamps',
      zh: '台灯'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 3.8,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord258x0/600/600', 'https://picsum.photos/seed/nord258x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Clamp Desk Lamp attaches to any desk edge and frees up the surface below. Its flexible arm and 360° rotating head position Nordic task light precisely where needed.',
      zh: '夹持台灯附着于任何桌子边缘，释放下方桌面，可弯曲臂和360°旋转灯头将北欧任务照明精准定位到所需位置。'
    },
    specs: {
      Material: 'Clamp-on, adjustable arm',
      Dimensions: 'W30×D15×H45 cm',
      Weight: '0.7 kg',
      Mount: 'Clamp',
      Arm: 'Flexible',
      Head: '360° rotating',
      Power: 'USB'
    },
    material: {
      en: 'Clamp-on, adjustable arm',
      zh: '夹持式，可调节臂'
    },
    dimensions: 'W30×D15×H45 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 259,
    name: {
      en: 'Corner Standing Desk',
      zh: '转角升降桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 1799,
    originalPrice: 2115,
    discount: 15,
    rating: 3.9,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord259x0/600/600', 'https://picsum.photos/seed/nord259x1/600/600'],
    badges: ['Sale'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'The Corner Standing Desk is the ultimate Nordic home office setup—a large L-shaped work surface with dual motor height adjustment that transitions from sitting to standing with precision.',
      zh: '转角升降桌是终极北欧家庭办公设置，大型L形工作面配双电机精准高度调节，从坐姿转换至站姿。'
    },
    specs: {
      Material: 'L-shape, electric, oak top',
      Dimensions: 'W180×D120×H72-118 cm',
      Weight: '62 kg',
      Top: 'Solid oak',
      Shape: 'L-shape',
      "Height range": '72-118 cm',
      Motor: 'Dual motor'
    },
    material: {
      en: 'L-shape, electric, oak top',
      zh: 'L形，电动，橡木桌面'
    },
    dimensions: 'W180×D120×H72-118 cm',
    weight: '62 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 260,
    name: {
      en: 'Floating Shelf Desk',
      zh: '悬浮搁板桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.0,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord260x0/600/600', 'https://picsum.photos/seed/nord260x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Floating Shelf Desk is the most space-efficient Nordic work solution—a wall-mounted solid oak shelf at standing or sitting desk height creates a minimal workspace anywhere.',
      zh: '悬浮搁板桌是最节省空间的北欧工作解决方案，站立或坐姿高度的壁挂实心橡木搁板在任何地方创造极简工作空间。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W100×D35×H20 cm',
      Weight: '8 kg',
      Mount: 'Wall-mounted',
      Depth: '35 cm',
      Height: 'Choose at install'
    },
    material: {
      en: 'Oak, wall-mount desk shelf',
      zh: '橡木，壁挂桌搁板'
    },
    dimensions: 'W100×D35×H20 cm',
    weight: '8 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 261,
    name: {
      en: 'Posture Chair',
      zh: '姿势椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 379,
    originalPrice: 420,
    discount: 10,
    rating: 4.1,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord261x0/600/600', 'https://picsum.photos/seed/nord261x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Posture Chair features a forward-tilting seat and a supportive backrest angle calibrated for Nordic workers who spend long hours at a desk—reducing lower back strain by design.',
      zh: '姿势椅具有前倾坐面和支撑性靠背角度，专为在桌旁长时间工作的北欧人员设计，通过设计减少腰部劳损。'
    },
    specs: {
      Material: 'Breathable fabric',
      Dimensions: 'W58×D60×H88-100 cm',
      Weight: '11 kg',
      Seat: 'Forward-tilt',
      Backrest: 'Adjustable angle',
      Warranty: '3 years'
    },
    material: {
      en: 'Ergonomic posture, fabric',
      zh: '人体工学姿势，面料'
    },
    dimensions: 'W58×D60×H88-100 cm',
    weight: '11 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 262,
    name: {
      en: 'Bookshelf Desk Combo',
      zh: '书架桌组合'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 849,
    originalPrice: 849,
    discount: 0,
    rating: 4.2,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord262x0/600/600', 'https://picsum.photos/seed/nord262x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Bookshelf Desk Combo integrates a full-height bookshelf with a writing desk in a single compact Nordic unit—ideal for home offices that need to maximise every square metre.',
      zh: '书架桌组合将全高书架与写字桌整合于单一紧凑的北欧单元中，非常适合需要最大化每平方米的家庭办公室。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'W120×D55×H180 cm',
      Weight: '48 kg',
      "Desk width": '120 cm',
      "Shelf height": 'Full',
      Assembly: 'Required'
    },
    material: {
      en: 'Birch, integrated bookshelf',
      zh: '桦木，集成书架'
    },
    dimensions: 'W120×D55×H180 cm',
    weight: '48 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 263,
    name: {
      en: 'Wireless Charging Desk Pad',
      zh: '无线充电桌垫'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.3,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord263x0/600/600', 'https://picsum.photos/seed/nord263x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'The Wireless Charging Desk Pad is a Nordic smart-desk essential—a large vegan leather mat with an integrated wireless charging zone keeps the desk tidy and your devices powered.',
      zh: '无线充电桌垫是北欧智能桌面必备，集成无线充电区的大型素皮垫保持桌面整洁，同时为设备充电。'
    },
    specs: {
      Material: 'Vegan leather',
      Dimensions: 'W60×D30×H3 cm',
      Weight: '0.6 kg',
      "Wireless charging": 'Qi compatible',
      Size: '60×30 cm',
      "USB port": 'Yes'
    },
    material: {
      en: 'Vegan leather, wireless charging',
      zh: '素皮，无线充电'
    },
    dimensions: 'W60×D30×H3 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 264,
    name: {
      en: 'Foldable Laptop Stand',
      zh: '折叠笔记本支架'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 69,
    originalPrice: 115,
    discount: 40,
    rating: 4.4,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord264x0/600/600', 'https://picsum.photos/seed/nord264x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Foldable Laptop Stand is a Nordic home office essential—lightweight aluminium folds flat for travel and elevates any laptop to an ergonomic viewing angle to reduce neck strain.',
      zh: '折叠笔记本支架是北欧家庭办公必备，轻量铝合金可平折旅行，将任何笔记本提升至人体工学观看角度以减少颈部劳损。'
    },
    specs: {
      Material: 'Aluminium',
      Dimensions: 'W27×D22×H15 cm',
      Weight: '0.8 kg',
      Foldable: 'Yes',
      Angle: '6 levels',
      Compatible: 'All laptops'
    },
    material: {
      en: 'Aluminium, portable',
      zh: '铝合金，便携'
    },
    dimensions: 'W27×D22×H15 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 265,
    name: {
      en: 'Task Chair Minimalist',
      zh: '极简任务椅'
    },
    category: 'Office',
    subcategory: {
      en: 'Office Chairs',
      zh: '办公椅'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.5,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord265x0/600/600', 'https://picsum.photos/seed/nord265x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Minimalist Task Chair delivers essential ergonomic support in a clean Nordic form—breathable mesh back and a comfortable fabric seat without complex adjustment mechanisms.',
      zh: '极简任务椅以干净的北欧形态提供基本的人体工学支撑，透气网背和舒适的面料座面，没有复杂的调节机构。'
    },
    specs: {
      Material: 'Mesh back, fabric seat',
      Dimensions: 'W60×D58×H80-94 cm',
      Weight: '10 kg',
      Back: 'Mesh',
      Seat: 'Fabric',
      Height: 'Gas lift',
      Style: 'Minimalist'
    },
    material: {
      en: 'Mesh back, fabric seat',
      zh: '网背，面料座面'
    },
    dimensions: 'W60×D58×H80-94 cm',
    weight: '10 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 266,
    name: {
      en: 'Desk Organiser Set',
      zh: '桌面整理套装'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.6,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord266x0/600/600', 'https://picsum.photos/seed/nord266x1/600/600'],
    badges: ['Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'Five coordinated solid oak desk accessories—pencil cup, phone stand, card holder, tray, and cable organiser—that bring Nordic order and warmth to any work surface.',
      zh: '五件协调的实心橡木桌面配件，铅笔杯、手机支架、名片架、托盘和走线整理，为任何工作面带来北欧秩序和温暖。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'Various',
      Weight: '1 kg',
      Set: '5 pieces',
      Includes: 'Pencil cup, phone stand, card holder, tray, cable organiser',
      Assembly: 'No'
    },
    material: {
      en: 'Solid oak organiser set, 5 pcs',
      zh: '实心橡木整理套装，五件'
    },
    dimensions: 'Various',
    weight: '1 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 267,
    name: {
      en: 'Sit-Stand Converter',
      zh: '坐站转换器'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 199,
    originalPrice: 250,
    discount: 20,
    rating: 4.7,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord267x0/600/600', 'https://picsum.photos/seed/nord267x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Sit-Stand Converter sits on any existing desk and converts it into a standing desk—a cost-effective Nordic ergonomic upgrade that lifts the monitor and keyboard together.',
      zh: '坐站转换器放置于任何现有桌子上，将其转换为升降桌，是一种将显示器和键盘一起抬升的经济实惠的北欧人体工学升级。'
    },
    specs: {
      Material: 'Adjustable desktop converter',
      Dimensions: 'W70×D40×H40 cm',
      Weight: '8 kg',
      Type: 'Desktop converter',
      "Lift range": '15-40 cm',
      Surface: 'Dual level',
      Assembly: 'No'
    },
    material: {
      en: 'Adjustable desktop converter',
      zh: '可调节桌面转换器'
    },
    dimensions: 'W70×D40×H40 cm',
    weight: '8 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 268,
    name: {
      en: 'Cable Management Box',
      zh: '走线管理盒'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.8,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord268x0/600/600', 'https://picsum.photos/seed/nord268x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Bamboo Cable Management Box hides power strips and tangled cables in a clean Nordic bamboo enclosure—transforming a messy desk into a serene Scandinavian workspace.',
      zh: '竹制走线管理盒将电源板和缠绕电缆隐藏在干净的北欧竹制围栏中，将杂乱的桌面转变为宁静的斯堪的纳维亚工作空间。'
    },
    specs: {
      Material: 'Solid bamboo',
      Dimensions: 'W30×D13×H8 cm',
      Weight: '0.5 kg',
      Hides: 'Power strip + cables',
      Ventilation: 'Slotted',
      Assembly: 'No'
    },
    material: {
      en: 'Bamboo cable box',
      zh: '竹制走线盒'
    },
    dimensions: 'W30×D13×H8 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 269,
    name: {
      en: 'Freja Pendant Light',
      zh: '弗蕾雅吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 4.9,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord269x0/600/600', 'https://picsum.photos/seed/nord269x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Freja pendant is a Nordic lighting icon—its hemispherical shade diffuses light evenly across the dining table or kitchen island. Available in soft matte colours inspired by Scandinavian nature.',
      zh: '弗蕾雅吊灯是北欧照明图标，半球形灯罩将光线均匀散布于餐桌或厨房岛台，提供受斯堪的纳维亚自然启发的柔和哑光色彩。'
    },
    specs: {
      Material: 'Spun aluminum',
      Dimensions: 'Ø45×H30 cm',
      Weight: '1.5 kg',
      "Shade diameter": '45 cm',
      Bulb: 'E27',
      "Cord length": 'Adjustable, up to 3m'
    },
    material: {
      en: 'Spun aluminum, matte white',
      zh: '旋压铝，哑光白'
    },
    dimensions: 'Ø45×H30 cm',
    weight: '1.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 270,
    name: {
      en: 'Takke Cluster Pendant',
      zh: '塔克簇状吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 5.0,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord270x0/600/600', 'https://picsum.photos/seed/nord270x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Takke cluster pendant creates a striking Nordic constellation of glass globes suspended on a brass frame. The warm glow through the hand-blown glass creates an intimate dining atmosphere.',
      zh: '塔克簇状吊灯以悬挂在黄铜框架上的玻璃球创造令人印象深刻的北欧星座，手吹玻璃透过的温暖光芒营造亲密的就餐氛围。'
    },
    specs: {
      Material: 'Brass + hand-blown glass',
      Dimensions: 'Ø60×H80 cm',
      Weight: '3 kg',
      Globes: '5',
      Bulb: '5×E14',
      Diameter: '60 cm'
    },
    material: {
      en: 'Brass, glass globes',
      zh: '黄铜，玻璃球'
    },
    dimensions: 'Ø60×H80 cm',
    weight: '3 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 271,
    name: {
      en: 'Krone Rattan Pendant',
      zh: '克罗内藤编吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 3.5,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord271x0/600/600', 'https://picsum.photos/seed/nord271x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Krone rattan pendant brings natural Nordic-boho texture overhead. Hand-woven rattan creates dappled light patterns across ceilings and walls, adding warmth to any room.',
      zh: '克罗内藤编吊灯在头顶带来天然的北欧波西米亚质感，手工藤编在天花板和墙壁上创造斑驳的光影，为任何房间增添温暖。'
    },
    specs: {
      Material: 'Natural rattan',
      Dimensions: 'Ø40×H35 cm',
      Weight: '0.9 kg',
      Bulb: 'E27',
      Cord: 'Fabric-wrapped',
      Diameter: '40 cm'
    },
    material: {
      en: 'Natural rattan weave',
      zh: '天然藤编'
    },
    dimensions: 'Ø40×H35 cm',
    weight: '0.9 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 272,
    name: {
      en: 'Arc Ceiling Light',
      zh: '弧线吸顶灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 179,
    originalPrice: 179,
    discount: 0,
    rating: 3.7,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord272x0/600/600', 'https://picsum.photos/seed/nord272x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Arc ceiling pendant\'s textured steel shade creates interesting shadow patterns when lit, bringing sculptural interest to the Nordic room above.',
      zh: '弧线吸顶灯的纹理钢制灯罩在点亮时创造有趣的阴影图案，为北欧房间带来雕塑感。'
    },
    specs: {
      Material: 'Textured steel',
      Dimensions: 'Ø50×H20 cm',
      Weight: '1.8 kg',
      Diameter: '50 cm',
      Bulb: 'E27',
      Finish: 'Matte black'
    },
    material: {
      en: 'Spun steel, textured',
      zh: '旋压钢，纹理'
    },
    dimensions: 'Ø50×H20 cm',
    weight: '1.8 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 273,
    name: {
      en: 'Nordic Cone Pendant',
      zh: '北欧锥形吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 119,
    originalPrice: 119,
    discount: 0,
    rating: 3.8,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord273x0/600/600', 'https://picsum.photos/seed/nord273x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'A minimalist cone silhouette executed in powder-coated steel—the Scandinavian design principle of maximum effect from minimum form. Perfect above a kitchen table or bedside.',
      zh: '以粉末涂层钢制成的极简锥形轮廓，体现斯堪的纳维亚设计原则——以最少的形式达到最大的效果，非常适合餐桌或床头上方。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'Ø30×H25 cm',
      Weight: '0.7 kg',
      "Shade diameter": '30 cm',
      Cord: 'Textile',
      Bulb: 'E27'
    },
    material: {
      en: 'Powder-coated steel',
      zh: '粉末涂层钢'
    },
    dimensions: 'Ø30×H25 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 274,
    name: {
      en: 'Birch Bulb Pendant',
      zh: '白桦灯泡吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 3.9,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord274x0/600/600', 'https://picsum.photos/seed/nord274x1/600/600'],
    badges: ['Sale'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The simplest Nordic lighting statement—a clear glass globe pendant showcasing a warm Edison filament bulb. Often grouped in multiples for dramatic effect over a dining table.',
      zh: '最简洁的北欧照明表达，透明玻璃球吊灯展示温暖的爱迪生丝灯泡，常多组合用于餐桌上方营造戏剧效果。'
    },
    specs: {
      Material: 'Clear glass, Edison bulb',
      Dimensions: 'Ø12×H15 cm',
      Weight: '0.4 kg',
      Glass: 'Clear borosilicate',
      Bulb: '4W Edison LED (included)',
      "Cord length": '3 m',
      Diameter: '12 cm'
    },
    material: {
      en: 'Clear glass, Edison bulb',
      zh: '透明玻璃，爱迪生灯泡'
    },
    dimensions: 'Ø12×H15 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 275,
    name: {
      en: 'Drum Linen Pendant',
      zh: '鼓形亚麻吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 159,
    originalPrice: 159,
    discount: 0,
    rating: 4.0,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord275x0/600/600', 'https://picsum.photos/seed/nord275x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Drum pendant\'s linen shade diffuses warm ambient light with a gentle Nordic quality. The solid oak ring adds natural warmth that elevates it above a purely utilitarian light.',
      zh: '鼓形吊灯的亚麻灯罩以温柔的北欧质感散发温暖的氛围光，实心橡木环增添自然温暖，使其超越单纯实用的照明。'
    },
    specs: {
      Material: 'Linen shade, oak ring',
      Dimensions: 'Ø50×H25 cm',
      Weight: '1.1 kg',
      Shade: 'Natural linen',
      Ring: 'Solid oak',
      Bulb: 'E27',
      Diameter: '50 cm'
    },
    material: {
      en: 'Linen shade, oak ring',
      zh: '亚麻灯罩，橡木环'
    },
    dimensions: 'Ø50×H25 cm',
    weight: '1.1 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 276,
    name: {
      en: 'Funnel Black Pendant',
      zh: '漏斗型黑色吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 99,
    originalPrice: 110,
    discount: 10,
    rating: 4.1,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord276x0/600/600', 'https://picsum.photos/seed/nord276x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Funnel pendant is a minimal Scandinavian directional light that focuses illumination onto a dining table or work surface below. Matte black finish offers striking contrast.',
      zh: '漏斗型吊灯是极简的北欧定向灯，将照明集中于下方的餐桌或工作面，哑光黑色表面提供鲜明的对比。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'Ø25×H30 cm',
      Weight: '0.6 kg',
      Finish: 'Matte black',
      "Shade diameter": '25 cm',
      Cord: 'Black textile',
      Bulb: 'E27'
    },
    material: {
      en: 'Powder-coated steel',
      zh: '粉末涂层钢'
    },
    dimensions: 'Ø25×H30 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 277,
    name: {
      en: 'Lykt Arc Floor Lamp',
      zh: '吕克特弧形落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.2,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord277x0/600/600', 'https://picsum.photos/seed/nord277x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Lykt arc floor lamp extends a gentle arc over a reading chair or sofa, positioning warm Nordic light exactly where it is needed. A marble base ensures stability without taking up extra floor space.',
      zh: '吕克特弧形落地灯在阅读椅或沙发上方延伸出柔和的弧度，将温暖的北欧光线精准投射到所需位置，大理石底座确保稳定性而不占用额外地面空间。'
    },
    specs: {
      Material: 'Marble base, steel arc',
      Dimensions: 'W120×D35×H185 cm',
      Weight: '8 kg',
      Base: 'Natural marble',
      Arm: 'Steel arc',
      Height: '185 cm',
      Bulb: 'E27'
    },
    material: {
      en: 'Marble base, steel arc',
      zh: '大理石底座，钢弧臂'
    },
    dimensions: 'W120×D35×H185 cm',
    weight: '8 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 278,
    name: {
      en: 'Stav Tripod Floor Lamp',
      zh: '斯塔夫三脚落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 279,
    originalPrice: 330,
    discount: 15,
    rating: 4.3,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord278x0/600/600', 'https://picsum.photos/seed/nord278x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Stav tripod floor lamp is a Nordic living room staple—solid oak legs and a natural linen shade combine the organic warmth of Scandinavian craft with practical ambient lighting.',
      zh: '斯塔夫三脚落地灯是北欧客厅的基础单品，实心橡木腿与天然亚麻灯罩将斯堪的纳维亚工艺的有机温暖与实用的氛围照明相结合。'
    },
    specs: {
      Material: 'Solid oak tripod, linen shade',
      Dimensions: 'W60×D60×H160 cm',
      Weight: '5 kg',
      Legs: 'Solid oak',
      Shade: 'Natural linen',
      Height: '160 cm',
      Bulb: 'E27'
    },
    material: {
      en: 'Solid oak tripod, linen shade',
      zh: '实心橡木三脚架，亚麻灯罩'
    },
    dimensions: 'W60×D60×H160 cm',
    weight: '5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 279,
    name: {
      en: 'Bue Reading Lamp',
      zh: '布埃阅读落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 4.4,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord279x0/600/600', 'https://picsum.photos/seed/nord279x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Bue adjustable floor lamp is designed for focused Nordic reading light. Its long adjustable arm positions the light precisely, while the weighted base keeps everything stable.',
      zh: '布埃可调节落地灯专为专注的北欧阅读照明设计，长可调节臂精准定位灯光，加重底座确保稳定。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W40×D30×H135 cm',
      Weight: '3.5 kg',
      Arm: 'Adjustable',
      "Height range": '120-140 cm',
      Bulb: 'E27'
    },
    material: {
      en: 'Steel, adjustable arm',
      zh: '钢制，可调节臂'
    },
    dimensions: 'W40×D30×H135 cm',
    weight: '3.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 280,
    name: {
      en: 'Pære Table Lamp',
      zh: '帕勒台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 119,
    originalPrice: 150,
    discount: 20,
    rating: 4.5,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord280x0/600/600', 'https://picsum.photos/seed/nord280x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Pære table lamp combines a hand-thrown ceramic base in a muted Nordic glaze with a classic linen drum shade. The result is a warm, characterful light source for any Nordic bedside or shelf.',
      zh: '帕勒台灯将手工拉坯的北欧哑光陶瓷底座与经典亚麻鼓形灯罩结合，是北欧床头或搁架上温暖个性的光源。'
    },
    specs: {
      Material: 'Ceramic base, linen shade',
      Dimensions: 'Ø18×H35 cm',
      Weight: '0.9 kg',
      Base: 'Hand-thrown ceramic',
      Shade: 'Natural linen',
      Bulb: 'E27',
      Switch: 'On-cord'
    },
    material: {
      en: 'Ceramic base, linen shade',
      zh: '陶瓷底座，亚麻灯罩'
    },
    dimensions: 'Ø18×H35 cm',
    weight: '0.9 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 281,
    name: {
      en: 'Globe Table Lamp',
      zh: '球形台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.6,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord281x0/600/600', 'https://picsum.photos/seed/nord281x1/600/600'],
    badges: ['Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Globe table lamp\'s simple opal glass sphere provides 360° warm light in any direction, making it perfect as a bedside or accent lamp in Scandinavian interiors.',
      zh: '球形台灯简单的乳白玻璃球向360°方向提供温暖光线，非常适合作为北欧室内的床头或装饰台灯。'
    },
    specs: {
      Material: 'Opal glass',
      Dimensions: 'Ø22×H30 cm',
      Weight: '0.8 kg',
      Bulb: 'E14',
      Base: 'Marble',
      Switch: 'Touch dimmer'
    },
    material: {
      en: 'Opal glass globe',
      zh: '乳白玻璃球'
    },
    dimensions: 'Ø22×H30 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 282,
    name: {
      en: 'Bue Wall Sconce',
      zh: '布埃壁灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 4.7,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord282x0/600/600', 'https://picsum.photos/seed/nord282x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Bue wall sconce brings warm Nordic atmosphere to a bedroom or hallway. Its brushed brass arm and clear glass shade cast a soft, inviting glow.',
      zh: '布埃壁灯为卧室或走廊带来温暖的北欧氛围，拉丝黄铜臂与透明玻璃灯罩散发柔和迷人的光芒。'
    },
    specs: {
      Material: 'Brass + glass',
      Dimensions: 'W15×D20×H25 cm',
      Weight: '0.6 kg',
      Bulb: 'E14',
      Installation: 'Hardwired',
      "IP rating": 'IP20'
    },
    material: {
      en: 'Brushed brass, glass shade',
      zh: '拉丝黄铜，玻璃灯罩'
    },
    dimensions: 'W15×D20×H25 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 283,
    name: {
      en: 'Stjerne Chandelier',
      zh: '斯蒂尔内枝形吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Chandeliers',
      zh: '枝形吊灯'
    },
    price: 599,
    originalPrice: 800,
    discount: 25,
    rating: 4.8,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord283x0/600/600', 'https://picsum.photos/seed/nord283x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Stjerne chandelier is a statement piece inspired by Nordic star formations. Six curving brass arms each hold a small Edison bulb, creating a warm constellation above dining tables.',
      zh: '斯蒂尔内枝形吊灯是受北欧星座启发的宣言单品，六根弯曲黄铜臂各持一个小爱迪生灯泡，在餐桌上方创造温暖的星座。'
    },
    specs: {
      Material: 'Brushed brass',
      Dimensions: 'Ø70×H60 cm',
      Weight: '6 kg',
      Arms: '6',
      Bulbs: '6×E14',
      Diameter: '70 cm'
    },
    material: {
      en: 'Brushed brass, 6-arm',
      zh: '拉丝黄铜，六臂'
    },
    dimensions: 'Ø70×H60 cm',
    weight: '6 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 284,
    name: {
      en: 'Lys Candleholder',
      zh: '吕斯烛台'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Candle Holders',
      zh: '烛台'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.9,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord284x0/600/600', 'https://picsum.photos/seed/nord284x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Lys candleholder is a Nordic lighting essential—pure solid brass shaped into a minimal taper candle holder. Group multiples together for the signature Scandinavian hygge effect.',
      zh: '吕斯烛台是北欧照明必备，纯实心黄铜塑造极简的柱形烛台。多个组合在一起呈现标志性的北欧hygge效果。'
    },
    specs: {
      Material: 'Solid brass',
      Dimensions: 'Ø8×H15 cm',
      Weight: '0.4 kg',
      "Candle size": '2 cm diameter',
      Finish: 'Polished',
      Set: 'Sold individually'
    },
    material: {
      en: 'Solid brass',
      zh: '实心黄铜'
    },
    dimensions: 'Ø8×H15 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 285,
    name: {
      en: 'Julaften Candle Lantern',
      zh: '圣诞前夜提灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Candle Holders',
      zh: '烛台'
    },
    price: 79,
    originalPrice: 115,
    discount: 30,
    rating: 5.0,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord285x0/600/600', 'https://picsum.photos/seed/nord285x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Julaften lantern brings the warm Nordic tradition of candlelight indoors and out. Its sturdy steel frame and clear glass panels shield the flame from draughts while casting gentle light.',
      zh: '圣诞前夜提灯将北欧烛光的温暖传统带入室内外，坚固的钢框架和透明玻璃板遮挡气流，同时散发温柔的光芒。'
    },
    specs: {
      Material: 'Steel + glass',
      Dimensions: 'W20×D20×H35 cm',
      Weight: '1.2 kg',
      "Indoor/Outdoor": 'Both',
      "Candle type": 'Pillar',
      Finish: 'Matte black'
    },
    material: {
      en: 'Powder-coated steel, glass',
      zh: '粉末涂层钢，玻璃'
    },
    dimensions: 'W20×D20×H35 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 286,
    name: {
      en: 'Stjerne Fairy Lights',
      zh: '斯蒂尔内串灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'String Lights',
      zh: '串灯'
    },
    price: 39,
    originalPrice: 39,
    discount: 0,
    rating: 3.5,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord286x0/600/600', 'https://picsum.photos/seed/nord286x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'Stjerne\'s warm-white copper wire fairy lights are a Nordic decorating essential. The 100 micro-LEDs on flexible copper wire shape easily around headboards, shelves, and windows.',
      zh: '斯蒂尔内铜线串灯是北欧装饰必备，100个暖白微型LED灯珠在柔性铜线上可轻松塑形环绕床头板、搁架和窗户。'
    },
    specs: {
      Material: 'Copper wire, warm LEDs',
      Dimensions: '10 m length',
      Weight: '0.3 kg',
      Bulbs: '100 LED',
      Color: 'Warm white 2700K',
      Wire: 'Copper',
      Power: 'USB'
    },
    material: {
      en: 'Copper wire, warm LEDs',
      zh: '铜线，暖色LED'
    },
    dimensions: '10 m length',
    weight: '0.3 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 287,
    name: {
      en: 'Woven Seagrass Pendant',
      zh: '编织海草吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 3.7,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord287x0/600/600', 'https://picsum.photos/seed/nord287x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'This hand-woven seagrass pendant brings earthy Nordic-coastal character overhead. Each one is unique due to the natural variation in hand-weaving.',
      zh: '这款手工编织海草吊灯在头顶带来朴实的北欧海滨个性，每件作品因手工编织的天然变化而独一无二。'
    },
    specs: {
      Material: 'Natural seagrass',
      Dimensions: 'Ø35×H30 cm',
      Weight: '0.8 kg',
      Bulb: 'E27',
      Cord: 'Fabric-wrapped',
      Handmade: 'Yes'
    },
    material: {
      en: 'Hand-woven seagrass',
      zh: '手工编织海草'
    },
    dimensions: 'Ø35×H30 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 288,
    name: {
      en: 'Metal Mesh Pendant',
      zh: '金属网状吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 3.8,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord288x0/600/600', 'https://picsum.photos/seed/nord288x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'Fine woven steel mesh creates a delicate pattern of light and shadow—a Nordic industrial-minimal statement that suits kitchens, dining rooms, and hallways.',
      zh: '细腻的编织钢网创造精致的光影图案，适合厨房、餐厅和走廊的北欧工业极简宣言。'
    },
    specs: {
      Material: 'Woven steel',
      Dimensions: 'Ø30×H25 cm',
      Weight: '1.2 kg',
      Finish: 'Matte black',
      Bulb: 'E27',
      Diameter: '30 cm'
    },
    material: {
      en: 'Woven steel mesh',
      zh: '编织钢网'
    },
    dimensions: 'Ø30×H25 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 289,
    name: {
      en: 'Schoolhouse Globe Pendant',
      zh: '学校球形吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 109,
    originalPrice: 130,
    discount: 15,
    rating: 3.9,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord289x0/600/600', 'https://picsum.photos/seed/nord289x1/600/600'],
    badges: ['Sale'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'A Nordic interpretation of the classic schoolhouse pendant—opal glass globe with a brass ceiling fitting that adds a warm vintage touch to Scandinavian interiors.',
      zh: '北欧对经典学校球形吊灯的诠释，乳白玻璃球配黄铜吊顶配件，为斯堪的纳维亚室内增添温暖的复古触感。'
    },
    specs: {
      Material: 'Opal glass, brass fitting',
      Dimensions: 'Ø20×H25 cm',
      Weight: '0.7 kg',
      Glass: 'Opal',
      Fitting: 'Brass',
      Bulb: 'E27',
      Style: 'Vintage Nordic'
    },
    material: {
      en: 'Opal glass, brass fitting',
      zh: '乳白玻璃，黄铜配件'
    },
    dimensions: 'Ø20×H25 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 290,
    name: {
      en: 'Rectangle Bar Pendant',
      zh: '矩形条形吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 4.0,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord290x0/600/600', 'https://picsum.photos/seed/nord290x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Rectangle Bar Pendant is ideal above a long dining table—three Edison bulbs on a linear track provide even illumination across the full table length in classic Nordic fashion.',
      zh: '矩形条形吊灯非常适合长餐桌上方，线性轨道上的三个爱迪生灯泡以经典北欧方式为整个桌面长度提供均匀照明。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W60×D10×H8 cm',
      Weight: '2 kg',
      Bulbs: '3×E27',
      Length: '60 cm',
      Finish: 'Matte black'
    },
    material: {
      en: 'Powder-coated steel, 3 bulbs',
      zh: '粉末涂层钢，三灯泡'
    },
    dimensions: 'W60×D10×H8 cm',
    weight: '2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 291,
    name: {
      en: 'Bamboo Pendant Light',
      zh: '竹制吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 119,
    originalPrice: 130,
    discount: 10,
    rating: 4.1,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord291x0/600/600', 'https://picsum.photos/seed/nord291x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Bamboo Pendant\'s hand-woven bamboo shell creates dappled, warm shadows that transform a plain ceiling into a Nordic natural canopy. Sustainably sourced bamboo only.',
      zh: '竹制吊灯的手工编织竹外壳创造斑驳的温暖阴影，将普通天花板变成北欧自然华盖，仅使用可持续采购的竹材。'
    },
    specs: {
      Material: 'Woven bamboo',
      Dimensions: 'Ø40×H35 cm',
      Weight: '0.7 kg',
      Bulb: 'E27',
      Diameter: '40 cm',
      Sustainable: 'FSC bamboo'
    },
    material: {
      en: 'Woven bamboo',
      zh: '编织竹'
    },
    dimensions: 'Ø40×H35 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 292,
    name: {
      en: 'Boom Floor Lamp',
      zh: '悬臂落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 4.2,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord292x0/600/600', 'https://picsum.photos/seed/nord292x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Boom floor lamp\'s long adjustable arm positions bright Nordic task lighting exactly where needed—over a reading chair, dining table, or work surface with effortless precision.',
      zh: '悬臂落地灯的长可调节臂将明亮的北欧任务照明精准定位到需要的地方，在阅读椅、餐桌或工作面上轻松精准。'
    },
    specs: {
      Material: 'Brushed steel',
      Dimensions: 'W90×D35×H150 cm',
      Weight: '6 kg',
      Arm: 'Adjustable boom',
      Height: '150 cm',
      Bulb: 'E27'
    },
    material: {
      en: 'Brushed steel, adjustable boom',
      zh: '拉丝钢，可调节悬臂'
    },
    dimensions: 'W90×D35×H150 cm',
    weight: '6 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 293,
    name: {
      en: 'Slim LED Floor Lamp',
      zh: '纤薄LED落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 179,
    originalPrice: 179,
    discount: 0,
    rating: 4.3,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord293x0/600/600', 'https://picsum.photos/seed/nord293x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'A modern Nordic take on the floor lamp—slim aluminium profile with integrated LED strip that provides soft, glare-free upward light for ambient Nordic atmosphere.',
      zh: '落地灯的现代北欧诠释，纤薄铝合金轮廓配集成LED灯带提供柔和无眩光的向上光线，营造北欧氛围。'
    },
    specs: {
      Material: 'Aluminium',
      Dimensions: 'W25×D25×H160 cm',
      Weight: '4 kg',
      "Light source": 'Integrated LED',
      "Color temp": '2700K warm',
      Dimmer: 'Touch'
    },
    material: {
      en: 'Aluminium, integrated LED',
      zh: '铝合金，集成LED'
    },
    dimensions: 'W25×D25×H160 cm',
    weight: '4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 294,
    name: {
      en: 'Rattan Globe Floor Lamp',
      zh: '藤编球形落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 249,
    originalPrice: 415,
    discount: 40,
    rating: 4.4,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord294x0/600/600', 'https://picsum.photos/seed/nord294x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'A Nordic-boho statement floor lamp—the oversized woven rattan globe creates dramatic patterned shadows while the solid wood base provides stable grounding.',
      zh: '北欧波西米亚宣言落地灯，超大编织藤编球创造戏剧性的图案阴影，实木底座提供稳定的基础。'
    },
    specs: {
      Material: 'Woven rattan globe, wood base',
      Dimensions: 'W55×D55×H160 cm',
      Weight: '5 kg',
      Shade: 'Woven rattan',
      Base: 'Solid wood',
      Height: '160 cm',
      Bulb: 'E27'
    },
    material: {
      en: 'Woven rattan globe, wood base',
      zh: '编织藤编球，木底座'
    },
    dimensions: 'W55×D55×H160 cm',
    weight: '5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 295,
    name: {
      en: 'Marble Table Lamp',
      zh: '大理石台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 4.5,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord295x0/600/600', 'https://picsum.photos/seed/nord295x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'Natural marble base in Nordic white or black and a linen shade—a refined material pairing that adds quiet luxury to any Scandinavian bedside or shelf.',
      zh: '天然大理石底座在北欧白色或黑色与亚麻灯罩中，是一种精致的材料搭配，为任何斯堪的纳维亚床头或搁架增添低调奢华。'
    },
    specs: {
      Material: 'Marble base, fabric shade',
      Dimensions: 'Ø15×H40 cm',
      Weight: '1.4 kg',
      Base: 'Natural marble',
      Shade: 'Linen',
      Bulb: 'E27',
      Switch: 'On-cord'
    },
    material: {
      en: 'Marble base, fabric shade',
      zh: '大理石底座，布艺灯罩'
    },
    dimensions: 'Ø15×H40 cm',
    weight: '1.4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 296,
    name: {
      en: 'Concrete Table Lamp',
      zh: '混凝土台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 4.6,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord296x0/600/600', 'https://picsum.photos/seed/nord296x1/600/600'],
    badges: ['Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Concrete Table Lamp brings Nordic industrial texture to the bedside or desk. Each hand-cast concrete base has its own unique surface texture from the casting process.',
      zh: '混凝土台灯为床头或书桌带来北欧工业质感，每个手工铸造的混凝土底座都有来自铸造过程的独特表面纹理。'
    },
    specs: {
      Material: 'Cast concrete base, fabric shade',
      Dimensions: 'Ø12×H30 cm',
      Weight: '1.2 kg',
      Base: 'Hand-cast concrete',
      Shade: 'Linen',
      Bulb: 'E27',
      Handmade: 'Yes'
    },
    material: {
      en: 'Cast concrete base, fabric shade',
      zh: '铸造混凝土底座，布艺灯罩'
    },
    dimensions: 'Ø12×H30 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 297,
    name: {
      en: 'Touch Dimmer Lamp',
      zh: '触控调光台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 139,
    originalPrice: 175,
    discount: 20,
    rating: 4.7,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord297x0/600/600', 'https://picsum.photos/seed/nord297x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Touch Dimmer Lamp adjusts through four brightness levels with a tap of the base—perfect for Nordic evenings where you progress from reading brightness to bedtime glow.',
      zh: '触控调光台灯通过轻触底座在四个亮度等级间调节，非常适合从阅读亮度到就寝夜光的北欧夜晚渐进过渡。'
    },
    specs: {
      Material: 'Ceramic, touch dimmer',
      Dimensions: 'Ø18×H38 cm',
      Weight: '1.0 kg',
      Base: 'Ceramic',
      Shade: 'Linen',
      Dimmer: '4-level touch',
      Bulb: 'E27 LED'
    },
    material: {
      en: 'Ceramic, touch dimmer',
      zh: '陶瓷，触控调光'
    },
    dimensions: 'Ø18×H38 cm',
    weight: '1.0 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 298,
    name: {
      en: 'Black Iron Sconce',
      zh: '黑铁壁灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 119,
    originalPrice: 119,
    discount: 0,
    rating: 4.8,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord298x0/600/600', 'https://picsum.photos/seed/nord298x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Black Iron Sconce is a Scandinavian-industrial essential—a minimal folded iron arm holds an exposed Edison bulb for warm, characterful light against any Nordic wall.',
      zh: '黑铁壁灯是斯堪的纳维亚工业必备，极简折叠铁臂托举裸露的爱迪生灯泡，在任何北欧墙壁上投射温暖个性的光芒。'
    },
    specs: {
      Material: 'Black iron',
      Dimensions: 'W20×D25×H30 cm',
      Weight: '0.8 kg',
      Bulb: 'E14 exposed',
      Install: 'Hardwired',
      Style: 'Industrial'
    },
    material: {
      en: 'Black iron, exposed bulb',
      zh: '黑铁，裸露灯泡'
    },
    dimensions: 'W20×D25×H30 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 299,
    name: {
      en: 'Swing Arm Sconce',
      zh: '摇臂壁灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 159,
    originalPrice: 159,
    discount: 0,
    rating: 4.9,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord299x0/600/600', 'https://picsum.photos/seed/nord299x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Swing Arm Sconce brings Nordic bedside reading functionality to the wall—its adjustable arm positions the light precisely while keeping the bedside table clear.',
      zh: '摇臂壁灯将北欧床头阅读功能引入墙壁，可调节臂精准定位灯光，同时保持床头桌面整洁。'
    },
    specs: {
      Material: 'Brushed brass',
      Dimensions: 'W40×D25×H40 cm',
      Weight: '0.9 kg',
      Arm: 'Swing arm adjustable',
      Bulb: 'E14',
      Install: 'Hardwired'
    },
    material: {
      en: 'Brushed brass, adjustable arm',
      zh: '拉丝黄铜，可调节臂'
    },
    dimensions: 'W40×D25×H40 cm',
    weight: '0.9 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 300,
    name: {
      en: 'Sputnik Chandelier',
      zh: '斯普特尼克吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Chandeliers',
      zh: '枝形吊灯'
    },
    price: 799,
    originalPrice: 799,
    discount: 0,
    rating: 5.0,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord300x0/600/600', 'https://picsum.photos/seed/nord300x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Sputnik chandelier is a mid-century Nordic statement—12 brass arms radiate outward like a Nordic star in every direction, each ending in a frosted glass globe.',
      zh: '斯普特尼克吊灯是中世纪北欧宣言，12根黄铜臂向各方向放射如北欧星辰，每根末端是一个磨砂玻璃球。'
    },
    specs: {
      Material: 'Polished brass',
      Dimensions: 'Ø60×H60 cm',
      Weight: '8 kg',
      Arms: '12',
      Globes: '12 frosted glass',
      Diameter: '60 cm'
    },
    material: {
      en: 'Polished brass, 12-arm sputnik',
      zh: '抛光黄铜，十二臂'
    },
    dimensions: 'Ø60×H60 cm',
    weight: '8 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 301,
    name: {
      en: 'Terrazzo Candleholder',
      zh: '水磨石烛台'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Candle Holders',
      zh: '烛台'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 3.5,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord301x0/600/600', 'https://picsum.photos/seed/nord301x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'A Nordic dining table essential—the Terrazzo candleholder is cast from colourful terrazzo aggregate in soft pastel tones that complement any Scandinavian table setting.',
      zh: '北欧餐桌必备，水磨石烛台以柔和粉彩色调的彩色水磨石骨料铸造，与任何斯堪的纳维亚餐桌摆设相配。'
    },
    specs: {
      Material: 'Terrazzo',
      Dimensions: 'Ø10×H12 cm',
      Weight: '0.6 kg',
      "Candle size": '2 cm',
      Colors: 'Multiple pastel',
      Handcast: 'Yes'
    },
    material: {
      en: 'Terrazzo, taper candle',
      zh: '水磨石，柱形蜡烛'
    },
    dimensions: 'Ø10×H12 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 302,
    name: {
      en: 'Outdoor String Lights',
      zh: '户外串灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'String Lights',
      zh: '串灯'
    },
    price: 59,
    originalPrice: 59,
    discount: 0,
    rating: 3.7,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord302x0/600/600', 'https://picsum.photos/seed/nord302x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'Nordic summer evenings deserve the warm glow of outdoor string lights. These weatherproof Edison-style bulbs on a heavy-duty cable create a magical Nordic garden atmosphere.',
      zh: '北欧夏日傍晚值得户外串灯的温暖光晕，防水爱迪生风格灯泡在重型电缆上创造神奇的北欧花园氛围。'
    },
    specs: {
      Material: 'Weatherproof, warm LED',
      Dimensions: '15 m length',
      Weight: '0.5 kg',
      Bulbs: '20 LED',
      Length: '15 m',
      "IP rating": 'IP44',
      Style: 'Edison globe'
    },
    material: {
      en: 'Weatherproof, warm LED',
      zh: '防水，暖色LED'
    },
    dimensions: '15 m length',
    weight: '0.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 303,
    name: {
      en: 'Smoke Glass Pendant',
      zh: '烟灰玻璃吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 189,
    originalPrice: 189,
    discount: 0,
    rating: 3.8,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord303x0/600/600', 'https://picsum.photos/seed/nord303x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'Smoked glass and polished brass—a Nordic art deco-inspired pendant that casts warm, amber-tinted light through its darkened globe for intimate dining atmosphere.',
      zh: '烟灰玻璃与抛光黄铜，受北欧装饰艺术启发的吊灯，通过深色球体投射温暖的琥珀色光芒，营造亲密的就餐氛围。'
    },
    specs: {
      Material: 'Smoked glass, brass',
      Dimensions: 'Ø25×H30 cm',
      Weight: '1.0 kg',
      Glass: 'Smoked',
      Fitting: 'Polished brass',
      Bulb: 'E27',
      Diameter: '25 cm'
    },
    material: {
      en: 'Smoked glass, brass',
      zh: '烟灰玻璃，黄铜'
    },
    dimensions: 'Ø25×H30 cm',
    weight: '1.0 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 304,
    name: {
      en: 'Industrial Cage Pendant',
      zh: '工业笼形吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 3.9,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord304x0/600/600', 'https://picsum.photos/seed/nord304x1/600/600'],
    badges: ['Sale'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Industrial Cage Pendant is a Nordic kitchen and dining essential—a black steel wire cage that exposes an Edison filament bulb for warm, textured industrial light.',
      zh: '工业笼形吊灯是北欧厨房和餐厅的必备，黑色钢丝笼展露爱迪生丝灯泡，发出温暖有质感的工业光芒。'
    },
    specs: {
      Material: 'Black steel',
      Dimensions: 'Ø20×H25 cm',
      Weight: '0.6 kg',
      Bulb: 'E27 Edison',
      Style: 'Industrial',
      Cord: 'Black textile'
    },
    material: {
      en: 'Black steel cage, Edison',
      zh: '黑钢笼，爱迪生灯泡'
    },
    dimensions: 'Ø20×H25 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 305,
    name: {
      en: 'Nordic Star Pendant',
      zh: '北欧星形吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 139,
    originalPrice: 139,
    discount: 0,
    rating: 4.0,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord305x0/600/600', 'https://picsum.photos/seed/nord305x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'Inspired by traditional Nordic Christmas star lanterns, this metal star pendant casts beautiful star-patterned shadows across walls and ceilings year-round.',
      zh: '受北欧传统圣诞星形灯笼启发，这款金属星形吊灯全年在墙壁和天花板上投射美丽的星形图案阴影。'
    },
    specs: {
      Material: 'Powder-coated metal',
      Dimensions: 'Ø30×H30 cm',
      Weight: '0.9 kg',
      Pattern: 'Star cutout',
      Bulb: 'E27',
      "Year-round": 'Yes'
    },
    material: {
      en: 'Metal star, warm light',
      zh: '金属星形，暖光'
    },
    dimensions: 'Ø30×H30 cm',
    weight: '0.9 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 306,
    name: {
      en: 'Designer Floor Lamp',
      zh: '设计师落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 449,
    originalPrice: 500,
    discount: 10,
    rating: 4.1,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord306x0/600/600', 'https://picsum.photos/seed/nord306x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Designer Floor Lamp is a Nordic luxury statement piece—natural marble base, solid brass stem, and a hand-stitched linen shade for warm directional light.',
      zh: '设计师落地灯是北欧奢华宣言单品，天然大理石底座、实心黄铜杆和手缝亚麻灯罩提供温暖的定向光。'
    },
    specs: {
      Material: 'Marble base, brass stem',
      Dimensions: 'W30×D30×H175 cm',
      Weight: '6 kg',
      Base: 'Natural marble',
      Stem: 'Solid brass',
      Shade: 'Hand-stitched linen',
      Bulb: 'E27'
    },
    material: {
      en: 'Marble base, brass stem',
      zh: '大理石底座，黄铜杆'
    },
    dimensions: 'W30×D30×H175 cm',
    weight: '6 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 307,
    name: {
      en: 'Pharmacy Floor Lamp',
      zh: '药房落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 4.2,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord307x0/600/600', 'https://picsum.photos/seed/nord307x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The classic Nordic pharmacy lamp updated with a heavy marble base for stability. Its fully adjustable head and arm position bright task light wherever it is needed.',
      zh: '经典北欧药房灯以重质大理石底座更新提升稳定性，完全可调节的灯头和灯臂将明亮的任务光定位到任何需要的地方。'
    },
    specs: {
      Material: 'Adjustable head, chrome',
      Dimensions: 'W30×D30×H150 cm',
      Weight: '4 kg',
      Base: 'Marble',
      Arm: 'Fully adjustable',
      Style: 'Pharmacy',
      Bulb: 'E27'
    },
    material: {
      en: 'Adjustable head, chrome',
      zh: '可调节灯头，镀铬'
    },
    dimensions: 'W30×D30×H150 cm',
    weight: '4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 308,
    name: {
      en: 'Wabi-Sabi Lamp',
      zh: '侘寂台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 109,
    originalPrice: 130,
    discount: 15,
    rating: 4.3,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord308x0/600/600', 'https://picsum.photos/seed/nord308x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Wabi-Sabi Lamp celebrates the Nordic-Japanese philosophy of finding beauty in imperfection—its hand-thrown ceramic base has intentional irregularities and a flowing reactive glaze.',
      zh: '侘寂台灯颂扬北欧日式哲学——在不完美中发现美，手工拉坯陶瓷底座有意为之的不规则性与流动的反应釉。'
    },
    specs: {
      Material: 'Irregular ceramic, natural glaze',
      Dimensions: 'Ø14×H32 cm',
      Weight: '1.0 kg',
      Base: 'Hand-thrown ceramic',
      Glaze: 'Reactive (unique)',
      Shade: 'Washi paper',
      Philosophy: 'Wabi-sabi'
    },
    material: {
      en: 'Irregular ceramic, natural glaze',
      zh: '不规则陶瓷，天然釉'
    },
    dimensions: 'Ø14×H32 cm',
    weight: '1.0 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 309,
    name: {
      en: 'Kids Night Lamp',
      zh: '儿童夜灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.4,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord309x0/600/600', 'https://picsum.photos/seed/nord309x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'A soft silicone Nordic night lamp for children\'s rooms—squeeze it to turn on, squeeze again to cycle through warm dimness levels. USB rechargeable, no cables needed at bedtime.',
      zh: '儿童房柔软硅胶北欧夜灯，挤压开启，再次挤压循环暖色亮度等级，USB充电，就寝时无需电缆。'
    },
    specs: {
      Material: 'Food-grade silicone',
      Dimensions: 'Ø10×H20 cm',
      Weight: '0.5 kg',
      Dimmer: '3 levels (squeeze)',
      "USB rechargeable": 'Yes',
      Safe: 'Child-safe'
    },
    material: {
      en: 'Silicone, warm glow',
      zh: '硅胶，暖光'
    },
    dimensions: 'Ø10×H20 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 310,
    name: {
      en: 'Arc Table Lamp',
      zh: '弧形台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 159,
    originalPrice: 200,
    discount: 20,
    rating: 4.5,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord310x0/600/600', 'https://picsum.photos/seed/nord310x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Arc Table Lamp\'s elegant bent brass stem positions the shade at a natural reading angle—designed for bedside tables where Nordic clarity and warmth are most needed.',
      zh: '弧形台灯优雅弯曲的黄铜杆将灯罩定位于自然的阅读角度，专为最需要北欧清晰与温暖的床头桌设计。'
    },
    specs: {
      Material: 'Brass arc, linen shade',
      Dimensions: 'W25×D15×H50 cm',
      Weight: '1.1 kg',
      Stem: 'Bent brass',
      Shade: 'Natural linen',
      Bulb: 'E27',
      Switch: 'On-cord'
    },
    material: {
      en: 'Brass arc, linen shade',
      zh: '黄铜弧，亚麻罩'
    },
    dimensions: 'W25×D15×H50 cm',
    weight: '1.1 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 311,
    name: {
      en: 'Rattan Wall Sconce',
      zh: '藤编壁灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 109,
    originalPrice: 109,
    discount: 0,
    rating: 4.6,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord311x0/600/600', 'https://picsum.photos/seed/nord311x1/600/600'],
    badges: ['Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Rattan Wall Sconce combines natural Nordic-boho texture with the warmth of brass hardware—a bathroom or bedroom wall light that creates beautiful dappled light patterns.',
      zh: '藤编壁灯将天然北欧波西米亚质感与黄铜五金的温暖结合，是浴室或卧室壁灯，创造美丽的斑驳光影图案。'
    },
    specs: {
      Material: 'Rattan shade, brass arm',
      Dimensions: 'Ø20×D15×H25 cm',
      Weight: '0.7 kg',
      Shade: 'Natural rattan',
      Arm: 'Brass',
      Bulb: 'G9',
      "IP rating": 'IP20'
    },
    material: {
      en: 'Rattan shade, brass arm',
      zh: '藤编灯罩，黄铜臂'
    },
    dimensions: 'Ø20×D15×H25 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 312,
    name: {
      en: 'Dome Wall Sconce',
      zh: '穹顶壁灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 119,
    originalPrice: 119,
    discount: 0,
    rating: 4.7,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord312x0/600/600', 'https://picsum.photos/seed/nord312x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'A Scandinavian half-dome sconce that directs light both up and down the wall for dramatic Nordic ambient lighting. Powder-coated aluminum in crisp white or matte black.',
      zh: '斯堪的纳维亚半球壁灯将光线向上和向下投射于墙壁，营造戏剧性的北欧环境照明，亮白或哑光黑色粉末涂层铝。'
    },
    specs: {
      Material: 'Spun aluminium',
      Dimensions: 'W18×D22×H22 cm',
      Weight: '0.7 kg',
      "Light direction": 'Up/down',
      Bulb: 'G9',
      Install: 'Hardwired'
    },
    material: {
      en: 'Spun aluminum dome',
      zh: '旋压铝穹顶'
    },
    dimensions: 'W18×D22×H22 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 313,
    name: {
      en: 'Linen Drum Chandelier',
      zh: '亚麻鼓形吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Chandeliers',
      zh: '枝形吊灯'
    },
    price: 449,
    originalPrice: 600,
    discount: 25,
    rating: 4.8,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord313x0/600/600', 'https://picsum.photos/seed/nord313x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Linen Drum Chandelier provides soft, diffused Nordic ambience over a dining table or in a living room. The wide linen shade creates an even wash of warm light.',
      zh: '亚麻鼓形吊灯在餐桌上方或客厅中提供柔和、漫射的北欧氛围，宽大的亚麻灯罩创造均匀的暖光光晕。'
    },
    specs: {
      Material: 'Linen drum shade, brass frame',
      Dimensions: 'Ø70×H40 cm',
      Weight: '4 kg',
      Shade: 'Natural linen',
      Frame: 'Brass',
      Diameter: '70 cm',
      Bulbs: '3×E27'
    },
    material: {
      en: 'Linen drum shade, brass frame',
      zh: '亚麻鼓形灯罩，黄铜框'
    },
    dimensions: 'Ø70×H40 cm',
    weight: '4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 314,
    name: {
      en: 'Curtain Light',
      zh: '帘式灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'String Lights',
      zh: '串灯'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.9,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord314x0/600/600', 'https://picsum.photos/seed/nord314x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'A Nordic window light curtain—300 warm white micro-LEDs on a 3×1m net create a cosy Nordic atmosphere reminiscent of softly lit Scandinavian evenings.',
      zh: '北欧窗帘灯，3×1米网格上的300个暖白微型LED创造温馨的北欧氛围，令人联想到柔光的斯堪的纳维亚夜晚。'
    },
    specs: {
      Material: 'Curtain of warm LEDs',
      Dimensions: 'W3×H1 m',
      Weight: '0.4 kg',
      LEDs: '300',
      Size: '3×1 m',
      Color: 'Warm white',
      Controller: '8 modes'
    },
    material: {
      en: 'Curtain of warm LEDs',
      zh: '暖色LED灯帘'
    },
    dimensions: 'W3×H1 m',
    weight: '0.4 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 315,
    name: {
      en: 'Geo Pendant Light',
      zh: '几何吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 169,
    originalPrice: 240,
    discount: 30,
    rating: 5.0,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord315x0/600/600', 'https://picsum.photos/seed/nord315x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Geo pendant\'s faceted geometric form catches light from multiple angles, creating a Nordic light sculpture that is as beautiful unlit as lit. Brushed gold finish.',
      zh: '几何吊灯的切面几何形态从多个角度捕捉光线，创造北欧光雕塑，不亮时与点亮时同样美丽，拉丝金色表面。'
    },
    specs: {
      Material: 'Faceted steel',
      Dimensions: 'Ø30×H25 cm',
      Weight: '1.2 kg',
      Finish: 'Brushed gold',
      Bulb: 'E27',
      Diameter: '30 cm'
    },
    material: {
      en: 'Faceted metal, gold finish',
      zh: '切面金属，金色表面'
    },
    dimensions: 'Ø30×H25 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 316,
    name: {
      en: 'Paper Pendant Light',
      zh: '纸质吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 3.5,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord316x0/600/600', 'https://picsum.photos/seed/nord316x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Paper Pendant\'s rice paper diffuses light into a warm, glowing sphere—a Nordic-Japanese lantern aesthetic that brings zen calm to any room.',
      zh: '纸质吊灯的宣纸将光线散漫为温暖发光的球体，北欧日式灯笼美学为任何房间带来禅意平静。'
    },
    specs: {
      Material: 'Rice paper + bamboo',
      Dimensions: 'Ø40×H30 cm',
      Weight: '0.4 kg',
      Bulb: 'E27',
      Diameter: '40 cm',
      Assembly: 'Easy self-assembly'
    },
    material: {
      en: 'Rice paper, bamboo frame',
      zh: '宣纸，竹框'
    },
    dimensions: 'Ø40×H30 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 317,
    name: {
      en: 'Nordlux Style Wall Light',
      zh: '北欧风壁灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 139,
    originalPrice: 139,
    discount: 0,
    rating: 3.7,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord317x0/600/600', 'https://picsum.photos/seed/nord317x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'This wall sconce pairs a polished chrome arm with a frosted opal glass globe—a Nordic interpretation of the classic wall globe light that suits both modern and traditional interiors.',
      zh: '这款壁灯将抛光镀铬臂与磨砂乳白玻璃球搭配，是适合现代和传统室内的经典墙面球灯的北欧诠释。'
    },
    specs: {
      Material: 'Chrome + glass',
      Dimensions: 'W20×D18×H28 cm',
      Weight: '0.9 kg',
      Bulb: 'G9',
      Globe: 'Opal frosted',
      Install: 'Hardwired'
    },
    material: {
      en: 'Chrome, opal glass globe',
      zh: '镀铬，乳白玻璃球'
    },
    dimensions: 'W20×D18×H28 cm',
    weight: '0.9 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 318,
    name: {
      en: 'Track Lighting System',
      zh: '轨道照明系统'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 3.8,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord318x0/600/600', 'https://picsum.photos/seed/nord318x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Nordic Track Lighting System is flexible modern lighting—a 1-metre ceiling track with three adjustable spotlights that each rotate individually to highlight artwork, dining tables, or kitchen work zones.',
      zh: '北欧轨道照明系统是灵活的现代照明，1米天花板轨道配三个可单独旋转的可调节聚光灯，照亮艺术品、餐桌或厨房工作区。'
    },
    specs: {
      Material: 'Adjustable track, 3 spotlights',
      Dimensions: 'L100 cm track',
      Weight: '3 kg',
      Track: '1 m',
      Spotlights: '3 (adjustable)',
      Bulb: 'GU10 LED',
      Style: 'Ceiling track'
    },
    material: {
      en: 'Adjustable track, 3 spotlights',
      zh: '可调节轨道，三个聚光灯'
    },
    dimensions: 'L100 cm track',
    weight: '3 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 319,
    name: {
      en: 'Nordic LED Bulb Set',
      zh: '北欧LED灯泡套装'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Candle Holders',
      zh: '烛台'
    },
    price: 35,
    originalPrice: 40,
    discount: 15,
    rating: 3.9,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord319x0/600/600', 'https://picsum.photos/seed/nord319x1/600/600'],
    badges: ['Sale'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'A set of four warm 2700K LED bulbs in classic Nordic candelabra shapes—long-lasting, low energy, and designed to complement Scandinavian pendant and table lamp designs.',
      zh: '四件套2700K暖白LED灯泡，经典北欧烛台形状，长寿命、低能耗，设计为搭配斯堪的纳维亚吊灯和台灯。'
    },
    specs: {
      Material: 'Set of 4 warm LED bulbs',
      Dimensions: 'E27 bulbs',
      Weight: '0.3 kg',
      Set: '4 bulbs',
      "Color temp": '2700K warm',
      Base: 'E27',
      Lifespan: '25,000 hrs'
    },
    material: {
      en: 'Set of 4 warm LED bulbs',
      zh: '四件套暖色LED灯泡'
    },
    dimensions: 'E27 bulbs',
    weight: '0.3 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 320,
    name: {
      en: 'Hexagon Wall Light',
      zh: '六边形壁灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 4.0,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord320x0/600/600', 'https://picsum.photos/seed/nord320x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Hexagon Wall Light is a Nordic geometric statement—a brass-framed hexagonal form with a frosted glass insert that produces warm, patterned light across the wall.',
      zh: '六边形壁灯是北欧几何宣言，黄铜框架六边形与磨砂玻璃嵌件在墙面上产生温暖的图案光芒。'
    },
    specs: {
      Material: 'Brass + frosted glass',
      Dimensions: 'W22×D12×H25 cm',
      Weight: '1 kg',
      Shape: 'Hexagon',
      Bulb: 'G9',
      Install: 'Hardwired'
    },
    material: {
      en: 'Geometric hexagon, brass',
      zh: '几何六边形，黄铜'
    },
    dimensions: 'W22×D12×H25 cm',
    weight: '1 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 321,
    name: {
      en: 'Cone Pendant Cluster',
      zh: '锥形簇状吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 349,
    originalPrice: 390,
    discount: 10,
    rating: 4.1,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord321x0/600/600', 'https://picsum.photos/seed/nord321x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'Five slender cones of different lengths cluster on a single ceiling canopy—the Cone Cluster pendant creates a Nordic sculptural lighting moment above any dining or living space.',
      zh: '五个不同长度的纤细锥形汇聚于单个天花板底座，锥形簇状吊灯在任何就餐或起居空间上方创造北欧雕塑照明时刻。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'Ø80×H60 cm',
      Weight: '4 kg',
      Cones: '5 (varied lengths)',
      Bulb: '5×E14',
      Canopy: 'Single ceiling mount'
    },
    material: {
      en: '5-cone cluster, powder coat',
      zh: '五锥形簇状，粉末涂层'
    },
    dimensions: 'Ø80×H60 cm',
    weight: '4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 322,
    name: {
      en: 'Nordic Wall Lantern',
      zh: '北欧壁灯笼'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Wall Sconces',
      zh: '壁灯'
    },
    price: 159,
    originalPrice: 159,
    discount: 0,
    rating: 4.2,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord322x0/600/600', 'https://picsum.photos/seed/nord322x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Nordic Wall Lantern brings traditional Scandinavian lantern warmth to exterior walls, entrances, and hallways. Black powder-coated steel and clear glass panels are weatherproof rated.',
      zh: '北欧壁灯笼将传统斯堪的纳维亚灯笼温暖带入外墙、入口和走廊，黑色粉末涂层钢和透明玻璃板达到防水等级。'
    },
    specs: {
      Material: 'Black steel + glass',
      Dimensions: 'W18×D25×H35 cm',
      Weight: '1.2 kg',
      "IP rating": 'IP44',
      Bulb: 'E27',
      "Indoor/Outdoor": 'Both'
    },
    material: {
      en: 'Black steel, glass panels',
      zh: '黑钢，玻璃板'
    },
    dimensions: 'W18×D25×H35 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 323,
    name: {
      en: 'Ceramic Lamp Base',
      zh: '陶瓷灯底座'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 75,
    originalPrice: 75,
    discount: 0,
    rating: 4.3,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord323x0/600/600', 'https://picsum.photos/seed/nord323x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'A hand-thrown Nordic ceramic lamp base sold without shade—pair it with your choice of linen, paper, or rattan shade to create a bespoke Nordic table lamp.',
      zh: '手工拉坯北欧陶瓷灯底座不含灯罩出售，与您选择的亚麻、纸质或藤编灯罩搭配，创造定制的北欧台灯。'
    },
    specs: {
      Material: 'Hand-thrown ceramic',
      Dimensions: 'Ø12×H28 cm',
      Weight: '0.9 kg',
      Shade: 'Not included',
      Bulb: 'E27',
      Handmade: 'Yes'
    },
    material: {
      en: 'Hand-thrown ceramic, base only',
      zh: '手工拉坯陶瓷，仅底座'
    },
    dimensions: 'Ø12×H28 cm',
    weight: '0.9 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 324,
    name: {
      en: 'Blomst Ceramic Vase',
      zh: '布隆斯特陶瓷花瓶'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 59,
    originalPrice: 100,
    discount: 40,
    rating: 4.4,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord324x0/600/600', 'https://picsum.photos/seed/nord324x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Blomst vase is hand-thrown by Scandinavian potters from fine stoneware clay and glazed in muted Nordic tones. Each piece is unique with its own subtle variations in form and glaze.',
      zh: '布隆斯特花瓶由北欧陶艺师以细腻炻器黏土手工拉坯，施以北欧哑光釉色，每件作品都有独特微妙的形态与釉色变化。'
    },
    specs: {
      Material: 'Stoneware',
      Dimensions: 'Ø12×H25 cm',
      Weight: '0.6 kg',
      Finish: 'Matte glaze',
      Waterproof: 'Yes',
      Handmade: 'Yes'
    },
    material: {
      en: 'Hand-thrown stoneware',
      zh: '手工拉坯炻器'
    },
    dimensions: 'Ø12×H25 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 325,
    name: {
      en: 'Nordic Glass Vase',
      zh: '北欧玻璃花瓶'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.5,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord325x0/600/600', 'https://picsum.photos/seed/nord325x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'This hand-blown glass vase captures the clarity and lightness of Scandinavian design. Its simple silhouette looks beautiful with a single stem or a wild meadow bouquet.',
      zh: '这款手吹玻璃花瓶捕捉斯堪的纳维亚设计的通透与轻盈，简单的轮廓无论配单支花茎还是野花束都美不胜收。'
    },
    specs: {
      Material: 'Borosilicate glass',
      Dimensions: 'Ø10×H20 cm',
      Weight: '0.3 kg',
      "Mouth diameter": '4 cm',
      Handmade: 'Yes',
      "Dishwasher safe": 'No'
    },
    material: {
      en: 'Hand-blown borosilicate glass',
      zh: '手吹硼硅玻璃'
    },
    dimensions: 'Ø10×H20 cm',
    weight: '0.3 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 326,
    name: {
      en: 'Birch Bud Vase Set',
      zh: '白桦小口花瓶套装'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.6,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord326x0/600/600', 'https://picsum.photos/seed/nord326x1/600/600'],
    badges: ['Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'A set of three minimalist bud vases in Nordic white ceramic—perfect for displaying individual stems on a shelf or dining table. Their varied heights create a natural grouping.',
      zh: '三件极简北欧白色陶瓷小口花瓶套装，非常适合在搁架或餐桌上展示单支花茎，高低各异的高度自然成组。'
    },
    specs: {
      Material: 'White ceramic',
      Dimensions: 'Ø6×H12 cm each',
      Weight: '0.4 kg',
      Set: '3 vases',
      Heights: '10 / 12 / 15 cm',
      Handmade: 'Yes'
    },
    material: {
      en: 'White ceramic set of 3',
      zh: '白色陶瓷三件套'
    },
    dimensions: 'Ø6×H12 cm each',
    weight: '0.4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 327,
    name: {
      en: 'Hygge Knit Cushion',
      zh: '海格针织抱枕'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 45,
    originalPrice: 55,
    discount: 20,
    rating: 4.7,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord327x0/600/600', 'https://picsum.photos/seed/nord327x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Hygge knit cushion adds instant Nordic warmth to any sofa or armchair. Its chunky cotton knit cover has a satisfying tactile quality, and the removable cover is machine washable.',
      zh: '海格针织抱枕为任何沙发或扶手椅立即增添北欧温暖，粗棉针织套触感令人满足，可拆卸套可机洗。'
    },
    specs: {
      Material: 'Chunky knit cotton cover',
      Dimensions: 'W50×H50 cm',
      Weight: '0.6 kg',
      Cover: 'Chunky cotton knit',
      Fill: 'Polyester fiber',
      Size: '50×50 cm',
      Washable: 'Cover yes'
    },
    material: {
      en: 'Chunky knit cotton cover',
      zh: '粗针织棉套'
    },
    dimensions: 'W50×H50 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 328,
    name: {
      en: 'Flock Linen Cushion',
      zh: '弗洛克亚麻抱枕'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 35,
    originalPrice: 35,
    discount: 0,
    rating: 4.8,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord328x0/600/600', 'https://picsum.photos/seed/nord328x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'Flock\'s washed linen cushion cover has the beautifully relaxed texture that defines Nordic casual living. The inner feather pad ensures lasting plumpness.',
      zh: '弗洛克水洗亚麻抱枕套具有定义北欧休闲生活的美丽放松质感，内置羽毛垫确保持久丰盈。'
    },
    specs: {
      Material: 'Washed linen cover',
      Dimensions: 'W45×H45 cm',
      Weight: '0.4 kg',
      Cover: 'Washed linen',
      Fill: 'Duck feather',
      Closure: 'Hidden zip',
      Washable: 'Cover yes'
    },
    material: {
      en: 'Washed linen cover',
      zh: '水洗亚麻套'
    },
    dimensions: 'W45×H45 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 329,
    name: {
      en: 'Embroidered Folk Cushion',
      zh: '刺绣民俗抱枕'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 4.9,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord329x0/600/600', 'https://picsum.photos/seed/nord329x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'This cushion celebrates Nordic folk embroidery traditions with hand-stitched floral motifs on natural cotton. Each piece is a small work of art that tells a Nordic story.',
      zh: '这款抱枕以天然棉上的手工花卉刺绣颂扬北欧民俗刺绣传统，每件作品都是讲述北欧故事的小型艺术品。'
    },
    specs: {
      Material: 'Cotton with folk embroidery',
      Dimensions: 'W50×H50 cm',
      Weight: '0.5 kg',
      Cover: 'Cotton with embroidery',
      Fill: 'Polyester',
      Handcraft: 'Hand-embroidered',
      Size: '50×50 cm'
    },
    material: {
      en: 'Cotton with folk embroidery',
      zh: '棉质民俗刺绣'
    },
    dimensions: 'W50×H50 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 330,
    name: {
      en: 'Ull Wool Throw',
      zh: '乌勒羊毛毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 5.0,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord330x0/600/600', 'https://picsum.photos/seed/nord330x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Ull merino wool throw is the definitive Nordic comfort accessory—lightweight yet incredibly warm, it wraps around shoulders for reading or drapes over a sofa arm with effortless style.',
      zh: '乌勒美利奴羊毛毯是北欧舒适配件的终极代表，轻盈却温暖，可绕肩阅读或轻松搭在沙发扶手上。'
    },
    specs: {
      Material: '100% merino wool',
      Dimensions: '130×180 cm',
      Weight: '0.9 kg',
      Care: 'Hand wash cold',
      Origin: 'Denmark'
    },
    material: {
      en: '100% merino wool',
      zh: '100%美利奴羊毛'
    },
    dimensions: 'W130×L180 cm',
    weight: '0.9 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 331,
    name: {
      en: 'Strik Chunky Knit Blanket',
      zh: '斯特里克粗织毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 3.5,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord331x0/600/600', 'https://picsum.photos/seed/nord331x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Strik chunky knit blanket is a Scandinavian cosy-season staple—its oversized stitches create an airy yet warming layer perfect for sofa evenings in the Nordic darkness.',
      zh: '斯特里克粗织毯是斯堪的纳维亚舒适季节的必备单品，超大针脚创造通透却保暖的层次，非常适合北欧黑暗中的沙发夜晚。'
    },
    specs: {
      Material: 'Merino-acrylic blend',
      Dimensions: 'W120×L150 cm',
      Weight: '1.4 kg',
      Size: '120×150 cm',
      Care: 'Hand wash'
    },
    material: {
      en: 'Chunky merino blend',
      zh: '粗织美利奴混纺'
    },
    dimensions: 'W120×L150 cm',
    weight: '1.4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 332,
    name: {
      en: 'Jord Wool Rug',
      zh: '约德羊毛地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 3.7,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord332x0/600/600', 'https://picsum.photos/seed/nord332x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Jord rug is hand-woven using traditional Scandinavian flat-weave techniques in natural undyed wool. Its subtle texture and neutral tones ground any Nordic room with organic warmth.',
      zh: '约德地毯采用传统斯堪的纳维亚平纹编织技术以天然未染色羊毛手工编织，细腻的纹理和中性色调以有机温暖稳定任何北欧房间。'
    },
    specs: {
      Material: '100% wool',
      Dimensions: 'W160×L230 cm',
      Weight: '5 kg',
      Technique: 'Flat-weave',
      Size: '160×230 cm',
      Backing: 'Cotton'
    },
    material: {
      en: 'Hand-woven wool',
      zh: '手织羊毛'
    },
    dimensions: 'W160×L230 cm',
    weight: '5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 333,
    name: {
      en: 'Mönster Geometric Rug',
      zh: '芒斯特几何地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 3.8,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord333x0/600/600', 'https://picsum.photos/seed/nord333x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'Mönster\'s bold geometric pattern is inspired by traditional Nordic textile arts. The cotton construction is durable and easy to clean, making it ideal for high-traffic areas.',
      zh: '芒斯特的大胆几何图案灵感源于北欧传统纺织艺术，棉质构造耐用且易于清洗，非常适合高通行区域。'
    },
    specs: {
      Material: '100% cotton',
      Dimensions: 'W140×L200 cm',
      Weight: '3.5 kg',
      Pattern: 'Geometric',
      "Pile height": 'Low',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Cotton, printed geometric',
      zh: '棉质，印花几何'
    },
    dimensions: 'W140×L200 cm',
    weight: '3.5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 334,
    name: {
      en: 'Silke Shaggy Rug',
      zh: '希尔科长绒地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 249,
    originalPrice: 249,
    discount: 0,
    rating: 3.9,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord334x0/600/600', 'https://picsum.photos/seed/nord334x1/600/600'],
    badges: ['Sale'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Silke shaggy rug brings Nordic underfoot luxury to any room. Its thick high-pile polyester creates an irresistibly soft surface that invites bare feet.',
      zh: '希尔科长绒地毯为任何房间带来北欧脚感奢华，厚实的高绒聚酯创造出令人难以抗拒的柔软表面，邀请赤足踩踏。'
    },
    specs: {
      Material: 'Polyester high-pile',
      Dimensions: 'W140×L200 cm',
      Weight: '6 kg',
      "Pile height": '40 mm',
      "Anti-slip": 'Backing included',
      "Machine washable": 'No'
    },
    material: {
      en: 'High-pile polyester',
      zh: '高绒聚酯'
    },
    dimensions: 'W140×L200 cm',
    weight: '6 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 335,
    name: {
      en: 'Print Nord Art Print',
      zh: '北欧艺术印刷'
    },
    category: 'Decor',
    subcategory: {
      en: 'Wall Art',
      zh: '墙饰'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.0,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord335x0/600/600', 'https://picsum.photos/seed/nord335x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'Original Scandinavian-inspired artwork reproduced as a high-quality giclée print on 200 gsm fine art paper. Ships unframed, ready to be paired with a simple Nordic frame.',
      zh: '北欧风格原创艺术作品以高质量喷墨印刷方式印刷在200克重艺术纸上，不带框发货，可搭配简约北欧相框。'
    },
    specs: {
      Material: 'Giclée print on fine art paper',
      Dimensions: 'W40×H50 cm',
      Weight: '0.2 kg',
      "Print type": 'Giclée',
      Paper: '200 gsm fine art',
      Frame: 'Not included',
      Size: '40×50 cm'
    },
    material: {
      en: 'Giclée print on fine art paper',
      zh: '艺术纸喷墨印刷'
    },
    dimensions: 'W40×H50 cm',
    weight: '0.2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 336,
    name: {
      en: 'Tid Wall Clock',
      zh: '提德挂钟'
    },
    category: 'Decor',
    subcategory: {
      en: 'Clocks',
      zh: '挂钟'
    },
    price: 79,
    originalPrice: 90,
    discount: 10,
    rating: 4.1,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord336x0/600/600', 'https://picsum.photos/seed/nord336x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Tid wall clock celebrates Scandinavian typographic design with clean numerals on a solid oak face and a silent quartz movement that won\'t disturb Nordic nights.',
      zh: '提德挂钟以干净数字印于实心橡木表盘上颂扬斯堪的纳维亚字体设计，静音石英机芯不会打扰北欧之夜。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'Ø30×H4 cm',
      Weight: '0.5 kg',
      Movement: 'Silent quartz',
      Diameter: '30 cm',
      Battery: '1×AA'
    },
    material: {
      en: 'Solid oak, silent movement',
      zh: '实心橡木，静音机芯'
    },
    dimensions: 'Ø30×H4 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 337,
    name: {
      en: 'Voks Scented Candle',
      zh: '沃克斯香氛蜡烛'
    },
    category: 'Decor',
    subcategory: {
      en: 'Candles',
      zh: '蜡烛'
    },
    price: 35,
    originalPrice: 35,
    discount: 0,
    rating: 4.2,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord337x0/600/600', 'https://picsum.photos/seed/nord337x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'Hand-poured soy wax candle scented with Nordic forest notes of pine, birch, and earth. The natural soy wax burns cleanly and lasts approximately 50 hours.',
      zh: '手工浇注大豆蜡烛，带有松木、桦树和泥土的北欧森林香调，天然大豆蜡燃烧纯净，可持续约50小时。'
    },
    specs: {
      Material: 'Soy wax, Nordic forest scent',
      Dimensions: 'Ø8×H10 cm',
      Weight: '0.3 kg',
      Wax: 'Natural soy',
      Scent: 'Nordic Forest',
      "Burn time": '~50 hrs',
      Wick: 'Cotton'
    },
    material: {
      en: 'Soy wax, Nordic forest scent',
      zh: '大豆蜡，北欧森林香'
    },
    dimensions: 'Ø8×H10 cm',
    weight: '0.3 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 338,
    name: {
      en: 'Ramme Oak Frame',
      zh: '拉梅橡木相框'
    },
    category: 'Decor',
    subcategory: {
      en: 'Picture Frames',
      zh: '相框'
    },
    price: 39,
    originalPrice: 45,
    discount: 15,
    rating: 4.3,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord338x0/600/600', 'https://picsum.photos/seed/nord338x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'The Ramme photo frame embodies Nordic simplicity—solid oak with a minimal moulding profile and UV-protective glass. Available in multiple sizes for building a Nordic gallery wall.',
      zh: '拉梅相框体现北欧简约，实心橡木配极简线脚轮廓和防紫外线玻璃，提供多种尺寸可用于打造北欧照片墙。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W21×H26 cm',
      Weight: '0.3 kg',
      Glass: 'UV-protective',
      "Fits photo": 'A5 (148×210 mm)',
      Orientation: 'Portrait or landscape'
    },
    material: {
      en: 'Solid oak, simple moulding',
      zh: '实心橡木，简约线脚'
    },
    dimensions: 'W21×H26 cm',
    weight: '0.3 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 339,
    name: {
      en: 'Potte Ceramic Planter',
      zh: '波泰陶瓷花盆'
    },
    category: 'Decor',
    subcategory: {
      en: 'Planters',
      zh: '花盆'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.4,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord339x0/600/600', 'https://picsum.photos/seed/nord339x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Potte planter is hand-thrown in the Scandinavian craft tradition from earthy stoneware clay with a reactive glaze that creates unique surface patterns on every piece.',
      zh: '波泰花盆以斯堪的纳维亚工艺传统手工拉坯，粗陶泥质的反应釉在每件作品上创造独特的表面图案。'
    },
    specs: {
      Material: 'Stoneware',
      Dimensions: 'Ø18×H20 cm',
      Weight: '0.8 kg',
      "Drainage hole": 'Yes',
      Glaze: 'Reactive',
      "Plant-safe": 'Yes'
    },
    material: {
      en: 'Hand-thrown stoneware',
      zh: '手工拉坯炻器'
    },
    dimensions: 'Ø18×H20 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 340,
    name: {
      en: 'Tall Neck Vase',
      zh: '高颈花瓶'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 69,
    originalPrice: 85,
    discount: 20,
    rating: 4.5,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord340x0/600/600', 'https://picsum.photos/seed/nord340x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Tall Neck Vase\'s elongated form is perfect for architectural single stems—dried pampas grass, eucalyptus, or a single architectural flower in the Nordic minimal style.',
      zh: '高颈花瓶的细长造型非常适合建筑感的单支花茎，芒草、桉树叶或北欧极简风格的单朵建筑感花卉。'
    },
    specs: {
      Material: 'Stoneware',
      Dimensions: 'Ø10×H35 cm',
      Weight: '0.5 kg',
      Height: '35 cm',
      "Neck diameter": '3 cm',
      Waterproof: 'Yes'
    },
    material: {
      en: 'Stoneware, tall neck',
      zh: '炻器，高颈'
    },
    dimensions: 'Ø10×H35 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 341,
    name: {
      en: 'Squash Vase',
      zh: '葫芦花瓶'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 4.6,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord341x0/600/600', 'https://picsum.photos/seed/nord341x1/600/600'],
    badges: ['Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Squash Vase\'s organic squash-like silhouette is a playful yet refined Nordic form—hand-thrown in a natural speckled glaze that complements dried or fresh flowers equally.',
      zh: '葫芦花瓶的有机南瓜状轮廓是俏皮而精致的北欧形态，以与干花或鲜花同样相配的天然斑点釉手工拉坯。'
    },
    specs: {
      Material: 'Stoneware',
      Dimensions: 'Ø15×H20 cm',
      Weight: '0.5 kg',
      Glaze: 'Natural speckled',
      Handmade: 'Yes',
      Waterproof: 'Yes'
    },
    material: {
      en: 'Hand-thrown ceramic',
      zh: '手工拉坯陶瓷'
    },
    dimensions: 'Ø15×H20 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 342,
    name: {
      en: 'Nordic Knot Cushion',
      zh: '北欧绳结抱枕'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.7,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord342x0/600/600', 'https://picsum.photos/seed/nord342x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'Hand-knotted macramé cotton gives this cushion cover Nordic-boho charm. The three-dimensional knotted texture adds depth to any sofa or armchair.',
      zh: '手工打结的棉质麦克拉梅赋予这款抱枕套北欧波西米亚魅力，立体的打结纹理为任何沙发或扶手椅增添层次感。'
    },
    specs: {
      Material: 'Macramé cotton cover',
      Dimensions: 'W45×H45 cm',
      Weight: '0.5 kg',
      Cover: 'Macramé cotton',
      Fill: 'Polyester',
      Size: '45×45 cm',
      Handmade: 'Yes'
    },
    material: {
      en: 'Macramé cotton cover',
      zh: '棉质麦克拉梅套'
    },
    dimensions: 'W45×H45 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 343,
    name: {
      en: 'Colour Block Cushion',
      zh: '色块抱枕'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 39,
    originalPrice: 50,
    discount: 25,
    rating: 4.8,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord343x0/600/600', 'https://picsum.photos/seed/nord343x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'Inspired by Nordic folk textile patterns, this rectangular cushion features bold colour block panels in classic Scandinavian tones—versatile for any Nordic interior.',
      zh: '受北欧民俗纺织图案启发，这款长方形抱枕以经典斯堪的纳维亚色调的大胆色块面板为特色，适配任何北欧室内。'
    },
    specs: {
      Material: 'Cotton canvas, colour blocks',
      Dimensions: 'W50×H30 cm',
      Weight: '0.4 kg',
      Cover: 'Cotton canvas',
      Style: 'Colour block',
      Size: '50×30 cm',
      Washable: 'Cover only'
    },
    material: {
      en: 'Cotton canvas, colour blocks',
      zh: '棉帆布，色块'
    },
    dimensions: 'W50×H30 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 344,
    name: {
      en: 'Alpaca Throw',
      zh: '羊驼毛毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 169,
    originalPrice: 169,
    discount: 0,
    rating: 4.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord344x0/600/600', 'https://picsum.photos/seed/nord344x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'Baby alpaca fibre is softer than cashmere and almost as warm as wool—the Alpaca Throw is a Nordic luxury comfort accessory in a natural undyed tone that suits any interior.',
      zh: '婴儿羊驼纤维比羊绒更柔软，几乎与羊毛一样温暖，羊驼毛毯是天然未染色调的北欧奢华舒适配件，适合任何室内。'
    },
    specs: {
      Material: '100% baby alpaca',
      Dimensions: 'W130×L180 cm',
      Weight: '0.8 kg',
      Size: '130×180 cm',
      Hypoallergenic: 'Yes',
      Care: 'Dry clean'
    },
    material: {
      en: '100% baby alpaca',
      zh: '100%婴儿羊驼毛'
    },
    dimensions: 'W130×L180 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 345,
    name: {
      en: 'Cotton Muslin Throw',
      zh: '棉质平纹布毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 59,
    originalPrice: 85,
    discount: 30,
    rating: 5.0,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord345x0/600/600', 'https://picsum.photos/seed/nord345x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'A lightweight Nordic summer throw in 100% cotton muslin—perfect for warm evenings or as a beach blanket for Nordic coastal living. Machine washable and quick-drying.',
      zh: '100%棉质平纹细布的轻盈北欧夏季毯，非常适合温暖的傍晚或北欧海滨生活的沙滩毯，可机洗且快干。'
    },
    specs: {
      Material: '100% cotton',
      Dimensions: 'W120×L150 cm',
      Weight: 'Lightweight',
      "Machine washable": 'Yes',
      Size: '120×150 cm'
    },
    material: {
      en: '100% cotton muslin',
      zh: '100%棉质平纹细布'
    },
    dimensions: 'W120×L150 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 346,
    name: {
      en: 'Striped Cotton Rug',
      zh: '条纹棉质地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 3.5,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord346x0/600/600', 'https://picsum.photos/seed/nord346x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'Classic Nordic stripes in flat-weave cotton—a timeless pattern that suits any Scandinavian interior from coastal to forest themes. Reversible for double the lifespan.',
      zh: '平纹棉质经典北欧条纹，适合从海滨到森林主题的任何斯堪的纳维亚室内的永恒图案，可翻转使用以延长两倍使用寿命。'
    },
    specs: {
      Material: '100% cotton',
      Dimensions: 'W140×L200 cm',
      Weight: '3 kg',
      Pattern: 'Stripes',
      Reversible: 'Yes',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Flat-weave cotton stripes',
      zh: '平纹棉质条纹'
    },
    dimensions: 'W140×L200 cm',
    weight: '3 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 347,
    name: {
      en: 'Jute Natural Rug',
      zh: '黄麻天然地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 179,
    originalPrice: 179,
    discount: 0,
    rating: 3.7,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord347x0/600/600', 'https://picsum.photos/seed/nord347x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Jute Natural Rug celebrates raw Nordic earth tones in a rough, natural weave that adds organic texture underfoot. A sustainable choice from a fast-growing natural fibre.',
      zh: '黄麻天然地毯以粗糙的天然编织颂扬原始北欧大地色调，为脚下增添有机质感，是来自快速生长天然纤维的可持续选择。'
    },
    specs: {
      Material: 'Natural jute',
      Dimensions: 'W160×L230 cm',
      Weight: '4.5 kg',
      Style: 'Flatweave',
      Size: '160×230 cm',
      "Non-slip pad": 'Recommended'
    },
    material: {
      en: 'Natural jute weave',
      zh: '天然黄麻编织'
    },
    dimensions: 'W160×L230 cm',
    weight: '4.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 348,
    name: {
      en: 'Kilim Nordic Rug',
      zh: '基里姆北欧地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 269,
    originalPrice: 269,
    discount: 0,
    rating: 3.8,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord348x0/600/600', 'https://picsum.photos/seed/nord348x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'A Nordic take on the traditional kilim rug—hand-woven in Scandinavia-inspired geometric patterns using natural wool in undyed earth tones. A unique piece of weavable art.',
      zh: '传统基里姆地毯的北欧诠释，以未染色大地色调的天然羊毛手织斯堪的纳维亚风格几何图案，是独特的可织艺术品。'
    },
    specs: {
      Material: 'Natural wool',
      Dimensions: 'W140×L200 cm',
      Weight: '4 kg',
      Technique: 'Kilim flat-weave',
      Size: '140×200 cm',
      Handmade: 'Yes'
    },
    material: {
      en: 'Hand-woven wool kilim',
      zh: '手织羊毛基里姆'
    },
    dimensions: 'W140×L200 cm',
    weight: '4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 349,
    name: {
      en: 'Nordic Poster Set',
      zh: '北欧海报套装'
    },
    category: 'Decor',
    subcategory: {
      en: 'Wall Art',
      zh: '墙饰'
    },
    price: 89,
    originalPrice: 105,
    discount: 15,
    rating: 3.9,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord349x0/600/600', 'https://picsum.photos/seed/nord349x1/600/600'],
    badges: ['Sale'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'A curated set of three Nordic-inspired art prints—botanical, landscape, and typographic—designed to work together on a gallery wall. Printed on 200 gsm fine art paper.',
      zh: '精选的三件套北欧风格艺术印刷，包括植物、风景和字体，设计为在照片墙上协调展示，印刷于200克重艺术纸。'
    },
    specs: {
      Material: 'Set of 3 giclée prints',
      Dimensions: 'W30×H40 cm each',
      Weight: '0.3 kg',
      Set: '3 prints',
      "Print type": 'Giclée',
      Paper: '200 gsm',
      Frame: 'Not included'
    },
    material: {
      en: 'Set of 3 giclée prints',
      zh: '三件套喷墨印刷'
    },
    dimensions: 'W30×H40 cm each',
    weight: '0.3 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 350,
    name: {
      en: 'Minimalist Wall Clock',
      zh: '极简挂钟'
    },
    category: 'Decor',
    subcategory: {
      en: 'Clocks',
      zh: '挂钟'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 4.0,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord350x0/600/600', 'https://picsum.photos/seed/nord350x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Minimalist Wall Clock is a clean Nordic statement—powder-coated steel with spare numerals at 12, 3, 6, and 9 only. Its restrained design lets the room breathe.',
      zh: '极简挂钟是干净的北欧宣言，粉末涂层钢仅在12、3、6、9位置标注极简数字，克制的设计让房间自由呼吸。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'Ø40×H5 cm',
      Weight: '0.7 kg',
      Movement: 'Silent quartz',
      Diameter: '40 cm',
      Battery: '1×AA'
    },
    material: {
      en: 'Steel, minimal numerals',
      zh: '钢制，极简数字'
    },
    dimensions: 'Ø40×H5 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 351,
    name: {
      en: 'Wooden Clock',
      zh: '木质壁钟'
    },
    category: 'Decor',
    subcategory: {
      en: 'Clocks',
      zh: '挂钟'
    },
    price: 69,
    originalPrice: 75,
    discount: 10,
    rating: 4.1,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord351x0/600/600', 'https://picsum.photos/seed/nord351x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Wooden Clock\'s laser-cut birch ply face reveals the natural grain of the wood as the clock face—a Nordic celebration of material honesty in functional objects.',
      zh: '木质壁钟的激光切割桦木板表盘将木材天然纹理展现为时钟表面，是对功能物品材料诚实性的北欧颂扬。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'Ø25×H5 cm',
      Weight: '0.4 kg',
      Movement: 'Silent quartz',
      Diameter: '25 cm',
      Hands: 'Minimal steel'
    },
    material: {
      en: 'Birch ply face, natural',
      zh: '桦木板表盘，天然'
    },
    dimensions: 'Ø25×H5 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 352,
    name: {
      en: 'Nordic Forest Pillar Candle',
      zh: '北欧森林柱形蜡烛'
    },
    category: 'Decor',
    subcategory: {
      en: 'Candles',
      zh: '蜡烛'
    },
    price: 29,
    originalPrice: 29,
    discount: 0,
    rating: 4.2,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord352x0/600/600', 'https://picsum.photos/seed/nord352x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'A hand-poured solid pillar candle scented with Nordic pine and spruce essential oils—the smell of a Scandinavian forest bottled as a home fragrance.',
      zh: '手工浇注的实心柱形蜡烛，带有北欧松木和云杉精油香气，是装瓶的斯堪的纳维亚森林香气。'
    },
    specs: {
      Material: 'Soy wax pillar, pine scent',
      Dimensions: 'Ø8×H15 cm',
      Weight: '0.4 kg',
      Wax: 'Soy pillar',
      Scent: 'Pine + spruce',
      "Burn time": '~30 hrs',
      Wick: 'Cotton'
    },
    material: {
      en: 'Soy wax pillar, pine scent',
      zh: '大豆蜡柱，松木香'
    },
    dimensions: 'Ø8×H15 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 353,
    name: {
      en: 'Hygge Candle Set',
      zh: '海格蜡烛套装'
    },
    category: 'Decor',
    subcategory: {
      en: 'Candles',
      zh: '蜡烛'
    },
    price: 65,
    originalPrice: 65,
    discount: 0,
    rating: 4.3,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord353x0/600/600', 'https://picsum.photos/seed/nord353x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'A curated set of four Nordic hygge candles in complementary scents—pine, birch, sea salt, and vanilla—in reusable ceramic vessels that become Nordic plant pots after burning.',
      zh: '精选四件套北欧hygge蜡烛，松木、桦树、海盐和香草互补香调，装在燃尽后可用作北欧花盆的可重复使用陶瓷容器中。'
    },
    specs: {
      Material: 'Set of 4 soy candles',
      Dimensions: 'varied',
      Weight: '1 kg',
      Set: '4 candles',
      Scents: 'Pine, birch, sea salt, vanilla',
      Vessel: 'Reusable ceramic',
      "Total burn time": '~200 hrs'
    },
    material: {
      en: 'Set of 4 soy candles',
      zh: '四件套大豆蜡烛'
    },
    dimensions: 'varied',
    weight: '1 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 354,
    name: {
      en: 'Gallery Wall Set',
      zh: '照片墙套装'
    },
    category: 'Decor',
    subcategory: {
      en: 'Picture Frames',
      zh: '相框'
    },
    price: 89,
    originalPrice: 150,
    discount: 40,
    rating: 4.4,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord354x0/600/600', 'https://picsum.photos/seed/nord354x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'A carefully proportioned set of six solid oak frames in varying sizes—designed for an effortless Nordic gallery wall. The matching wood tone creates cohesion across the display.',
      zh: '六件精心比例设计的不同尺寸实心橡木相框套装，专为轻松打造北欧照片墙而设计，统一的木色调在展示中创造凝聚感。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'Multiple sizes',
      Weight: '1 kg',
      Set: '6 frames',
      Sizes: 'A6, A5, A4 (×2 each)',
      Glass: 'UV protective'
    },
    material: {
      en: 'Set of 6 oak frames',
      zh: '六件套橡木相框'
    },
    dimensions: 'Multiple sizes',
    weight: '1 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 355,
    name: {
      en: 'Tall Pedestal Planter',
      zh: '高脚底座花盆'
    },
    category: 'Decor',
    subcategory: {
      en: 'Planters',
      zh: '花盆'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.5,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord355x0/600/600', 'https://picsum.photos/seed/nord355x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Tall Pedestal Planter elevates trailing plants or small trees to a prominent Nordic display position. The ceramic bowl sits on a solid wood pedestal that adds warmth and height.',
      zh: '高脚底座花盆将垂挂植物或小树提升至显著的北欧展示位置，陶瓷碗坐落于增添温暖与高度的实心木底座上。'
    },
    specs: {
      Material: 'Ceramic planter on wood stand',
      Dimensions: 'Ø20×H60 cm',
      Weight: '2 kg',
      Bowl: 'Ceramic',
      Stand: 'Solid wood',
      Height: '60 cm',
      Drainage: 'Yes'
    },
    material: {
      en: 'Ceramic planter on wood stand',
      zh: '陶瓷花盆，木底座'
    },
    dimensions: 'Ø20×H60 cm',
    weight: '2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 356,
    name: {
      en: 'Hanging Macramé Planter',
      zh: '悬挂麦克拉梅花盆挂'
    },
    category: 'Decor',
    subcategory: {
      en: 'Planters',
      zh: '花盆'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.6,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord356x0/600/600', 'https://picsum.photos/seed/nord356x1/600/600'],
    badges: ['Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'The Hanging Macramé Planter suspends a small ceramic pot in a hand-knotted cotton cradle—a Nordic-boho way to bring greenery to ceiling height without taking up floor space.',
      zh: '悬挂麦克拉梅花盆挂将小陶瓷盆悬吊在手工打结的棉质支架中，是不占地面空间将绿植延伸至天花高度的北欧波西米亚方式。'
    },
    specs: {
      Material: 'Cotton macramé, ceramic pot',
      Dimensions: 'Ø15×H40 cm',
      Weight: '0.3 kg',
      Hanger: 'Cotton macramé',
      Pot: 'Ceramic (included)',
      Diameter: '15 cm',
      Handmade: 'Yes'
    },
    material: {
      en: 'Cotton macramé, ceramic pot',
      zh: '棉质麦克拉梅，陶瓷盆'
    },
    dimensions: 'Ø15×H40 cm',
    weight: '0.3 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 357,
    name: {
      en: 'Concrete Vase',
      zh: '混凝土花瓶'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 49,
    originalPrice: 60,
    discount: 20,
    rating: 4.7,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord357x0/600/600', 'https://picsum.photos/seed/nord357x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'Each Concrete Vase is hand-cast and slightly unique—an industrial Nordic aesthetic in functional form. Waterproof interior coating makes it safe for fresh flowers.',
      zh: '每个混凝土花瓶都是手工铸造且略有独特，功能形态中的工业北欧美学，防水内涂层使其适合鲜花。'
    },
    specs: {
      Material: 'Hand-cast concrete',
      Dimensions: 'Ø10×H18 cm',
      Weight: '0.7 kg',
      Coating: 'Waterproof interior',
      Handmade: 'Yes',
      Height: '18 cm'
    },
    material: {
      en: 'Hand-cast concrete',
      zh: '手工铸造混凝土'
    },
    dimensions: 'Ø10×H18 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 358,
    name: {
      en: 'Terracotta Vase',
      zh: '赤陶花瓶'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 39,
    originalPrice: 39,
    discount: 0,
    rating: 4.8,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord358x0/600/600', 'https://picsum.photos/seed/nord358x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Terracotta Vase celebrates the unpolished, earthy aesthetic of Nordic craft—hand-formed from red clay with a deliberate rustic glaze that captures the beauty of imperfection.',
      zh: '赤陶花瓶颂扬北欧工艺的未经抛光、朴实美学，红泥土手工成型，有意为之的质朴釉捕捉不完美之美。'
    },
    specs: {
      Material: 'Terracotta',
      Dimensions: 'Ø12×H16 cm',
      Weight: '0.5 kg',
      Glaze: 'Rustic matte',
      Handformed: 'Yes',
      Waterproof: 'Yes'
    },
    material: {
      en: 'Terracotta, rustic glaze',
      zh: '赤陶，质朴釉'
    },
    dimensions: 'Ø12×H16 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 359,
    name: {
      en: 'Stripe Linen Cushion',
      zh: '条纹亚麻抱枕'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 42,
    originalPrice: 42,
    discount: 0,
    rating: 4.9,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord359x0/600/600', 'https://picsum.photos/seed/nord359x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'Classic Nordic stripes on a natural linen cushion—a timeless combination that complements any Scandinavian interior. The removable cover is machine washable.',
      zh: '天然亚麻抱枕上的经典北欧条纹，与任何斯堪的纳维亚室内相配的永恒组合，可拆卸套可机洗。'
    },
    specs: {
      Material: 'Striped linen cover',
      Dimensions: 'W50×H50 cm',
      Weight: '0.5 kg',
      Cover: 'Striped linen',
      Fill: 'Duck feather',
      Washable: 'Cover only',
      Size: '50×50 cm'
    },
    material: {
      en: 'Striped linen cover',
      zh: '条纹亚麻套'
    },
    dimensions: 'W50×H50 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 360,
    name: {
      en: 'Nordic Patchwork Cushion',
      zh: '北欧拼布抱枕'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 5.0,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord360x0/600/600', 'https://picsum.photos/seed/nord360x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'A handcrafted patchwork cushion made from offcuts of Nordic wool fabric—a sustainable approach to Nordic textile art that celebrates variety and craft.',
      zh: '由北欧羊毛面料边角料制成的手工拼布抱枕，是颂扬多样性和工艺的可持续北欧纺织艺术方式。'
    },
    specs: {
      Material: 'Patchwork wool cover',
      Dimensions: 'W50×H50 cm',
      Weight: '0.5 kg',
      Cover: 'Patchwork wool',
      Fill: 'Polyester',
      Handcraft: 'Patchwork',
      Sustainable: 'Yes'
    },
    material: {
      en: 'Patchwork wool cover',
      zh: '拼布羊毛套'
    },
    dimensions: 'W50×H50 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 361,
    name: {
      en: 'Nordic Plaid Throw',
      zh: '北欧格纹毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 3.5,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord361x0/600/600', 'https://picsum.photos/seed/nord361x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Nordic Plaid Throw in soft cotton flannel brings the warmth of classic Scandinavian cabin culture to any sofa or armchair. Its traditional tartan-inspired pattern is woven in Nordic colours.',
      zh: '柔软棉法兰绒北欧格纹毯将经典斯堪的纳维亚小屋文化的温暖带入任何沙发或扶手椅，传统格子布启发的图案以北欧色彩编织。'
    },
    specs: {
      Material: 'Cotton flannel',
      Dimensions: 'W130×L180 cm',
      Weight: '0.8 kg',
      Pattern: 'Nordic plaid',
      Size: '130×180 cm',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Cotton flannel plaid',
      zh: '棉法兰绒格纹'
    },
    dimensions: 'W130×L180 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 362,
    name: {
      en: 'Linen Waffle Throw',
      zh: '亚麻华夫格毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 69,
    originalPrice: 69,
    discount: 0,
    rating: 3.7,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord362x0/600/600', 'https://picsum.photos/seed/nord362x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Linen Waffle Throw\'s airy waffle texture makes it perfect for transitional Nordic seasons—light enough for summer, textural enough for autumn. A year-round companion.',
      zh: '亚麻华夫格毯的通透华夫格质感使其非常适合北欧过渡季节，足够轻盈适合夏天，足够有质感适合秋天，是全年伴侣。'
    },
    specs: {
      Material: '100% linen',
      Dimensions: 'W120×L150 cm',
      Weight: '0.7 kg',
      Texture: 'Waffle weave',
      Size: '120×150 cm',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Waffle-weave linen',
      zh: '华夫格亚麻'
    },
    dimensions: 'W120×L150 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 363,
    name: {
      en: 'Cowhide Rug',
      zh: '牛皮地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 3.8,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord363x0/600/600', 'https://picsum.photos/seed/nord363x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'The Natural Cowhide Rug is a Nordic statement piece—each one is unique in its patterning and size. The natural hide brings organic warmth to hardwood Nordic floors.',
      zh: '天然牛皮地毯是北欧宣言单品，每件在图案和尺寸上都是独一无二的，天然皮革为北欧硬木地板带来有机温暖。'
    },
    specs: {
      Material: 'Natural cowhide',
      Dimensions: 'Approx 150×200 cm',
      Weight: '4 kg',
      Size: 'Approx 150×200 cm',
      Unique: 'Each varies',
      Care: 'Spot clean'
    },
    material: {
      en: 'Natural cowhide',
      zh: '天然牛皮'
    },
    dimensions: 'Approx 150×200 cm',
    weight: '4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 364,
    name: {
      en: 'Braided Wool Rug',
      zh: '编织羊毛地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 229,
    originalPrice: 229,
    discount: 0,
    rating: 3.9,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord364x0/600/600', 'https://picsum.photos/seed/nord364x1/600/600'],
    badges: ['Sale'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Braided Wool Rug is a Nordic country craft tradition—natural undyed wool braided into a cosy round rug that brings organic warmth to any floor.',
      zh: '编织羊毛地毯是北欧乡村工艺传统，天然未染色羊毛编织成舒适的圆形地毯，为任何地板带来有机温暖。'
    },
    specs: {
      Material: 'Natural wool',
      Dimensions: 'Ø140 cm',
      Weight: '4 kg',
      Shape: 'Round',
      Diameter: '140 cm',
      Handmade: 'Yes'
    },
    material: {
      en: 'Braided natural wool',
      zh: '编织天然羊毛'
    },
    dimensions: 'Ø140 cm',
    weight: '4 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 365,
    name: {
      en: 'Landscape Photography Print',
      zh: '风景摄影印刷'
    },
    category: 'Decor',
    subcategory: {
      en: 'Wall Art',
      zh: '墙饰'
    },
    price: 59,
    originalPrice: 59,
    discount: 0,
    rating: 4.0,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord365x0/600/600', 'https://picsum.photos/seed/nord365x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'A high-quality photographic print of iconic Nordic landscape—fjords, birch forests, or northern lights—printed on museum-quality cotton rag paper for lasting vibrancy.',
      zh: '北欧标志性风景的高质量摄影印刷，峡湾、桦树林或北极光，印刷在博物馆级棉纸上，色彩持久鲜艳。'
    },
    specs: {
      Material: 'Nordic landscape print',
      Dimensions: 'W50×H70 cm',
      Weight: '0.2 kg',
      "Print type": 'Photographic',
      Paper: 'Cotton rag museum quality',
      Size: '50×70 cm',
      Frame: 'Not included'
    },
    material: {
      en: 'Nordic landscape print',
      zh: '北欧风景印刷'
    },
    dimensions: 'W50×H70 cm',
    weight: '0.2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 366,
    name: {
      en: 'Embossed Metal Wall Art',
      zh: '压花金属墙饰'
    },
    category: 'Decor',
    subcategory: {
      en: 'Wall Art',
      zh: '墙饰'
    },
    price: 89,
    originalPrice: 100,
    discount: 10,
    rating: 4.1,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord366x0/600/600', 'https://picsum.photos/seed/nord366x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Embossed Metal Wall Art piece features Nordic geometric motifs hand-pressed into brushed aluminum—a modern interpretation of Scandinavian metal craft traditions.',
      zh: '压花金属墙饰以手工压制于拉丝铝上的北欧几何图案为特色，是斯堪的纳维亚金属工艺传统的现代诠释。'
    },
    specs: {
      Material: 'Brushed aluminium',
      Dimensions: 'W60×H40 cm',
      Weight: '0.8 kg',
      Technique: 'Embossed',
      Hanging: 'D-ring',
      Style: 'Nordic geometric'
    },
    material: {
      en: 'Brushed aluminum, embossed',
      zh: '拉丝铝，压花'
    },
    dimensions: 'W60×H40 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 367,
    name: {
      en: 'LED Digital Clock',
      zh: 'LED数字钟'
    },
    category: 'Decor',
    subcategory: {
      en: 'Clocks',
      zh: '挂钟'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.2,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord367x0/600/600', 'https://picsum.photos/seed/nord367x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'A minimal Nordic digital wall clock with a clean LED display in warm amber—shows time and temperature with a simple, readable Nordic typographic approach.',
      zh: '极简北欧数字墙钟，干净的暖琥珀色LED显示，以简单易读的北欧字体方式显示时间和温度。'
    },
    specs: {
      Material: 'Aluminium',
      Dimensions: 'W30×H10×H8 cm',
      Weight: '0.5 kg',
      Display: 'LED warm amber',
      Shows: 'Time + temperature',
      Power: 'USB'
    },
    material: {
      en: 'Aluminium, LED display',
      zh: '铝，LED显示'
    },
    dimensions: 'W30×H10×H8 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 368,
    name: {
      en: 'Geo Planter Set',
      zh: '几何花盆套装'
    },
    category: 'Decor',
    subcategory: {
      en: 'Planters',
      zh: '花盆'
    },
    price: 69,
    originalPrice: 80,
    discount: 15,
    rating: 4.3,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord368x0/600/600', 'https://picsum.photos/seed/nord368x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'Three angular geometric concrete planters in a Nordic minimal style—hand-cast and slightly unique in each finish. Group together for a dramatic Nordic nature display.',
      zh: '三个北欧极简风格的角形几何混凝土花盆，手工铸造，每件在表面处理上略有独特，组合在一起形成戏剧性的北欧自然展示。'
    },
    specs: {
      Material: 'Concrete',
      Dimensions: 'varied',
      Weight: '1.5 kg',
      Set: '3 planters',
      Sizes: 'S/M/L',
      Drainage: 'Yes'
    },
    material: {
      en: 'Set of 3 geometric concrete',
      zh: '三件套几何混凝土'
    },
    dimensions: 'varied',
    weight: '1.5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 369,
    name: {
      en: 'Dried Pampas Arrangement',
      zh: '干燥蒲苇草花艺'
    },
    category: 'Decor',
    subcategory: {
      en: 'Planters',
      zh: '花盆'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.4,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord369x0/600/600', 'https://picsum.photos/seed/nord369x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'A curated Nordic dried arrangement in a hand-thrown stoneware vase—pampas grass, dried wildflowers, and eucalyptus in muted Nordic tones. Ready to display, lasts for years.',
      zh: '精选北欧干燥花艺，手工拉坯炻器花瓶中的蒲苇草、干燥野花和桉树叶，采用北欧哑光色调，即可展示，持久数年。'
    },
    specs: {
      Material: 'Dried pampas + ceramic vase',
      Dimensions: 'Various',
      Weight: '0.5 kg',
      Contents: 'Pampas + dried flowers',
      Vase: 'Handmade stoneware',
      Style: 'Nordic natural',
      Lasting: 'Years'
    },
    material: {
      en: 'Dried pampas + ceramic vase',
      zh: '干燥蒲苇草+陶瓷花瓶'
    },
    dimensions: 'Various',
    weight: '0.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 370,
    name: {
      en: 'Nordic Photo Wall Kit',
      zh: '北欧照片墙套件'
    },
    category: 'Decor',
    subcategory: {
      en: 'Picture Frames',
      zh: '相框'
    },
    price: 119,
    originalPrice: 150,
    discount: 20,
    rating: 4.5,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord370x0/600/600', 'https://picsum.photos/seed/nord370x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Nordic Photo Wall Kit contains ten assorted solid oak frames with templates and hanging hardware—everything needed to create a beautiful Scandinavian gallery wall effortlessly.',
      zh: '北欧照片墙套件包含十个不同尺寸的实心橡木相框，附模板和悬挂五金，轻松打造美丽的斯堪的纳维亚照片墙所需一切。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'Multiple sizes',
      Weight: '1.5 kg',
      Set: '10 frames',
      Includes: 'Templates + hardware',
      Sizes: 'Assorted'
    },
    material: {
      en: 'Gallery wall kit, 10 frames',
      zh: '照片墙套件，十相框'
    },
    dimensions: 'Multiple sizes',
    weight: '1.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 371,
    name: {
      en: 'Tray Serving Board',
      zh: '托盘砧板'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 4.6,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord371x0/600/600', 'https://picsum.photos/seed/nord371x1/600/600'],
    badges: ['Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'A dual-purpose solid walnut serving tray that works equally well as a cutting board and a decorative Nordic kitchen display. Walnut\'s natural oils resist bacteria.',
      zh: '双用途实心胡桃木托盘，同样适合用作砧板和装饰性北欧厨房展示，胡桃木的天然油脂能抵抗细菌。'
    },
    specs: {
      Material: 'Solid walnut',
      Dimensions: 'W40×D25×H3 cm',
      Weight: '0.8 kg',
      Size: '40×25 cm',
      Use: 'Serving + display',
      Care: 'Oil occasionally'
    },
    material: {
      en: 'Solid walnut serving tray',
      zh: '实心胡桃木托盘'
    },
    dimensions: 'W40×D25×H3 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 372,
    name: {
      en: 'Wool Bunting',
      zh: '羊毛彩旗'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.7,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord372x0/600/600', 'https://picsum.photos/seed/nord372x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'Nordic felt wool pennants strung on a cotton cord—a simple, handmade Nordic decoration for children\'s rooms, living rooms, or outdoor celebrations.',
      zh: '棉绳上串着北欧毛毡羊毛三角旗，是儿童房、客厅或户外庆典的简单手工北欧装饰。'
    },
    specs: {
      Material: 'Felt wool + cotton cord',
      Dimensions: '3 m length',
      Weight: '0.3 kg',
      Length: '3 m',
      Style: 'Nordic pennants',
      Handmade: 'Yes'
    },
    material: {
      en: 'Felt wool pennants',
      zh: '毛毡羊毛三角旗'
    },
    dimensions: '3 m length',
    weight: '0.3 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 373,
    name: {
      en: 'Incense Burner',
      zh: '香炉'
    },
    category: 'Decor',
    subcategory: {
      en: 'Candles',
      zh: '蜡烛'
    },
    price: 45,
    originalPrice: 60,
    discount: 25,
    rating: 4.8,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord373x0/600/600', 'https://picsum.photos/seed/nord373x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'A minimal Nordic incense burner in solid ash wood—a clean geometric form that holds incense sticks and catches ash with Scandinavian precision and material honesty.',
      zh: '实心白蜡木极简北欧香炉，干净的几何形态以斯堪的纳维亚精准和材料诚实握住香棒并接住灰烬。'
    },
    specs: {
      Material: 'Solid ash',
      Dimensions: 'W15×D8×H8 cm',
      Weight: '0.4 kg',
      Use: 'Incense sticks',
      "Ash catch": 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Solid ash, incense stick',
      zh: '实心白蜡木，香棒'
    },
    dimensions: 'W15×D8×H8 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 374,
    name: {
      en: 'Scented Wax Melt Set',
      zh: '香氛蜡片套装'
    },
    category: 'Decor',
    subcategory: {
      en: 'Candles',
      zh: '蜡烛'
    },
    price: 29,
    originalPrice: 29,
    discount: 0,
    rating: 4.9,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord374x0/600/600', 'https://picsum.photos/seed/nord374x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'Eight Nordic-scented soy wax melt discs—pine, birch tar, sea mist, and lavender—for use in any wax warmer. A clean, smoke-free Nordic fragrance experience.',
      zh: '八件套北欧香调大豆蜡片，松木、桦木焦油、海雾和薰衣草，用于任何蜡片加热器，干净无烟的北欧香氛体验。'
    },
    specs: {
      Material: 'Set of 8 wax melts',
      Dimensions: 'Varies',
      Weight: '0.3 kg',
      Scents: 'Pine, birch tar, sea mist, lavender',
      Wax: 'Natural soy',
      Set: '8 discs',
      Compatible: 'All wax warmers'
    },
    material: {
      en: 'Set of 8 wax melts',
      zh: '八件套蜡片'
    },
    dimensions: 'Varies',
    weight: '0.3 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 375,
    name: {
      en: 'Pebble Tray',
      zh: '鹅卵石托盘'
    },
    category: 'Decor',
    subcategory: {
      en: 'Clocks',
      zh: '挂钟'
    },
    price: 39,
    originalPrice: 55,
    discount: 30,
    rating: 5.0,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord375x0/600/600', 'https://picsum.photos/seed/nord375x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'A shallow marble tray filled with smooth natural pebbles—a Nordic nature-inspired desk or bathroom accessory that brings the calm of a Scandinavian shoreline indoors.',
      zh: '装有光滑天然鹅卵石的浅大理石托盘，受北欧自然启发的桌面或浴室配件，将斯堪的纳维亚海滨的平静带入室内。'
    },
    specs: {
      Material: 'Marble tray + natural pebbles',
      Dimensions: 'W25×D15×H3 cm',
      Weight: '0.6 kg',
      Size: '25×15 cm',
      Use: 'Desk / bathroom decor',
      Style: 'Nature'
    },
    material: {
      en: 'Marble pebble tray',
      zh: '大理石鹅卵石托盘'
    },
    dimensions: 'W25×D15×H3 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 376,
    name: {
      en: 'Driftwood Candle Holder',
      zh: '漂流木烛台'
    },
    category: 'Decor',
    subcategory: {
      en: 'Candle Holders',
      zh: '烛台'
    },
    price: 65,
    originalPrice: 65,
    discount: 0,
    rating: 3.5,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord376x0/600/600', 'https://picsum.photos/seed/nord376x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'Each Driftwood Candle Holder is a unique piece of Nordic coastal nature—sun-bleached natural driftwood with three candle holes that celebrates the material\'s own organic beauty.',
      zh: '每个漂流木烛台都是独特的北欧海岸自然作品，带三个烛孔的日晒天然漂流木颂扬材料自身的有机之美。'
    },
    specs: {
      Material: 'Natural driftwood',
      Dimensions: 'W30×D10×H8 cm',
      Weight: '0.5 kg',
      Candles: '3 taper candles',
      Unique: 'Each varies',
      Style: 'Coastal Nordic'
    },
    material: {
      en: 'Natural driftwood, 3 candle holes',
      zh: '天然漂流木，三烛孔'
    },
    dimensions: 'W30×D10×H8 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 377,
    name: {
      en: 'Abstract Ceramic Bowl',
      zh: '抽象陶瓷碗'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 3.7,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord377x0/600/600', 'https://picsum.photos/seed/nord377x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'A wide, shallow hand-thrown stoneware bowl for displaying Nordic objects—pebbles, seaglass, dried flowers, or fruit. The reactive glaze creates unique surface patterns.',
      zh: '宽浅的手工拉坯炻器碗用于展示北欧物品，鹅卵石、海玻璃、干花或水果，反应釉创造独特的表面图案。'
    },
    specs: {
      Material: 'Stoneware',
      Dimensions: 'Ø20×H8 cm',
      Weight: '0.5 kg',
      Type: 'Wide bowl / display',
      Glaze: 'Reactive',
      Handmade: 'Yes'
    },
    material: {
      en: 'Hand-thrown stoneware bowl',
      zh: '手工拉坯炻器碗'
    },
    dimensions: 'Ø20×H8 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 378,
    name: {
      en: 'Nordic Textile Wall Hanging',
      zh: '北欧纺织品墙挂'
    },
    category: 'Decor',
    subcategory: {
      en: 'Wall Art',
      zh: '墙饰'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 3.8,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord378x0/600/600', 'https://picsum.photos/seed/nord378x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Nordic Textile Wall Hanging is a modern interpretation of Scandinavian weaving traditions—hand-woven geometric cotton with natural fringe, hung on a solid oak rod.',
      zh: '北欧纺织品墙挂是斯堪的纳维亚编织传统的现代诠释，手工编织几何棉质配天然流苏，悬挂于实心橡木杆上。'
    },
    specs: {
      Material: 'Cotton weave',
      Dimensions: 'W50×H80 cm',
      Weight: '0.6 kg',
      Hanger: 'Solid oak rod',
      Width: '50 cm',
      Handmade: 'Yes'
    },
    material: {
      en: 'Hand-woven cotton wall hanging',
      zh: '手工编织棉质墙挂'
    },
    dimensions: 'W50×H80 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 379,
    name: {
      en: 'Woven Wool Pillow Cover',
      zh: '编织羊毛枕套'
    },
    category: 'Decor',
    subcategory: {
      en: 'Cushions',
      zh: '抱枕'
    },
    price: 49,
    originalPrice: 60,
    discount: 15,
    rating: 3.9,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord379x0/600/600', 'https://picsum.photos/seed/nord379x1/600/600'],
    badges: ['Sale'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'Traditional Nordic woven wool in a geometric pattern—this cushion cover celebrates centuries of Scandinavian textile craft with its intricate loom-woven design.',
      zh: '传统北欧编织羊毛几何图案，这款枕套以其复杂的机织设计颂扬数百年的斯堪的纳维亚纺织工艺。'
    },
    specs: {
      Material: 'Woven wool cover',
      Dimensions: 'W50×H50 cm',
      Weight: '0.4 kg',
      Cover: 'Woven wool',
      Pattern: 'Nordic geometric',
      Closure: 'Zip',
      Handwoven: 'Yes'
    },
    material: {
      en: 'Woven wool cover',
      zh: '编织羊毛套'
    },
    dimensions: 'W50×H50 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 380,
    name: {
      en: 'Felted Wool Rug Runner',
      zh: '毛毡羊毛地毯条'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 4.0,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord380x0/600/600', 'https://picsum.photos/seed/nord380x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Felted Wool Runner brings Nordic warmth to hallways, kitchens, and bathrooms. Its dense felted wool construction is naturally stain-resistant and comfortable underfoot.',
      zh: '毛毡羊毛条形地毯为走廊、厨房和浴室带来北欧温暖，致密的毛毡羊毛构造天然抗污且脚感舒适。'
    },
    specs: {
      Material: 'Felted wool',
      Dimensions: 'W70×L200 cm',
      Weight: '2.5 kg',
      Size: '70×200 cm',
      Style: 'Runner',
      Care: 'Spot clean or dry clean'
    },
    material: {
      en: 'Felted wool runner',
      zh: '毛毡羊毛条形地毯'
    },
    dimensions: 'W70×L200 cm',
    weight: '2.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 381,
    name: {
      en: 'Terracotta Pot Set',
      zh: '赤陶盆套装'
    },
    category: 'Decor',
    subcategory: {
      en: 'Planters',
      zh: '花盆'
    },
    price: 69,
    originalPrice: 75,
    discount: 10,
    rating: 4.1,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord381x0/600/600', 'https://picsum.photos/seed/nord381x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'Three classic terracotta pots in graduating sizes—unglazed natural clay in the Nordic tradition of celebrating raw materials. Perfect for herbs, succulents, and indoor plants.',
      zh: '三个经典赤陶盆渐进尺寸，未上釉的天然泥土体现北欧颂扬原始材料的传统，非常适合香草、多肉植物和室内植物。'
    },
    specs: {
      Material: 'Unglazed terracotta',
      Dimensions: 'varied',
      Weight: '1.5 kg',
      Set: '3 pots',
      Sizes: 'S/M/L',
      Drainage: 'Yes'
    },
    material: {
      en: 'Set of 3 terracotta pots',
      zh: '三件套赤陶盆'
    },
    dimensions: 'varied',
    weight: '1.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 382,
    name: {
      en: 'Nordic Wreath',
      zh: '北欧花环'
    },
    category: 'Decor',
    subcategory: {
      en: 'Wall Art',
      zh: '墙饰'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 4.2,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord382x0/600/600', 'https://picsum.photos/seed/nord382x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Nordic Wreath is a year-round Scandinavian home decoration—dried wildflowers, eucalyptus, and cotton stems arranged in a circular form and hung on a cotton cord.',
      zh: '北欧花环是全年斯堪的纳维亚家居装饰，干燥野花、桉树叶和棉花杆以圆形排列，悬挂于棉绳上。'
    },
    specs: {
      Material: 'Dried botanicals',
      Dimensions: 'Ø40 cm',
      Weight: '0.4 kg',
      Diameter: '40 cm',
      Cord: 'Cotton',
      "Year-round": 'Yes'
    },
    material: {
      en: 'Dried botanicals, cotton cord',
      zh: '干燥植物，棉绳'
    },
    dimensions: 'Ø40 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 383,
    name: {
      en: 'Linen Table Runner',
      zh: '亚麻桌旗'
    },
    category: 'Decor',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 29,
    originalPrice: 29,
    discount: 0,
    rating: 4.3,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord383x0/600/600', 'https://picsum.photos/seed/nord383x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'The Nordic Linen Table Runner dresses any dining table for casual and formal occasions—natural, stonewashed linen in muted Nordic tones that become more beautiful with every wash.',
      zh: '北欧亚麻桌旗为任何餐桌装扮休闲和正式场合，天然水洗亚麻以北欧哑光色调在每次洗涤后变得更加美丽。'
    },
    specs: {
      Material: '100% linen',
      Dimensions: 'W40×L150 cm',
      Weight: '0.3 kg',
      Size: '40×150 cm',
      Stonewashed: 'Yes',
      "Machine washable": 'Yes'
    },
    material: {
      en: '100% linen table runner',
      zh: '100%亚麻桌旗'
    },
    dimensions: 'W40×L150 cm',
    weight: '0.3 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 384,
    name: {
      en: 'Reindeer Hide Rug',
      zh: '驯鹿皮地毯'
    },
    category: 'Decor',
    subcategory: {
      en: 'Rugs',
      zh: '地毯'
    },
    price: 299,
    originalPrice: 500,
    discount: 40,
    rating: 4.4,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord384x0/600/600', 'https://picsum.photos/seed/nord384x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'A natural Nordic reindeer hide rug—a traditional Scandinavian material that brings the wilderness of the North into any home. Ethically sourced and unique.',
      zh: '天然北欧驯鹿皮地毯，将北方荒野带入任何家居的传统斯堪的纳维亚材料，道德采购且独一无二。'
    },
    specs: {
      Material: 'Natural reindeer hide',
      Dimensions: 'Approx 100×150 cm',
      Weight: '3 kg',
      Unique: 'Each varies',
      Sourcing: 'Ethical',
      Care: 'Spot clean'
    },
    material: {
      en: 'Natural reindeer hide',
      zh: '天然驯鹿皮'
    },
    dimensions: 'Approx 100×150 cm',
    weight: '3 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 385,
    name: {
      en: 'Geometric Mirror',
      zh: '几何镜'
    },
    category: 'Decor',
    subcategory: {
      en: 'Clocks',
      zh: '挂钟'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 4.5,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord385x0/600/600', 'https://picsum.photos/seed/nord385x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Geometric Mirror\'s angular brass frame creates a bold Nordic graphic statement on any wall—its irregular polygon form adds architectural interest beyond pure reflection.',
      zh: '几何镜的角形黄铜框架在任何墙面上创造大胆的北欧图形宣言，不规则多边形形态在纯粹反射之外增添建筑趣味。'
    },
    specs: {
      Material: 'Geometric frame, brass',
      Dimensions: 'W50×H70 cm',
      Weight: '4 kg',
      Frame: 'Brass-tone steel',
      Shape: 'Geometric polygon',
      Size: '50×70 cm',
      Hanging: 'D-ring'
    },
    material: {
      en: 'Geometric frame, brass',
      zh: '几何框架，黄铜'
    },
    dimensions: 'W50×H70 cm',
    weight: '4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 386,
    name: {
      en: 'Teak Armchair',
      zh: '柚木扶手椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 4.6,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord386x0/600/600', 'https://picsum.photos/seed/nord386x1/600/600'],
    badges: ['Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'This teak armchair is crafted from sustainably certified teak—one of the most weather-resistant woods available. The classic slatted design improves with age and seasonal oiling.',
      zh: '这款柚木扶手椅以可持续认证柚木打造，是最耐候的木材之一，经典的板条设计随岁月和季节性打油愈发美观。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W65×D80×H87 cm',
      Weight: '8 kg',
      Fittings: '316 stainless steel',
      Finish: 'Untreated (oil separately)',
      Assembly: 'Required'
    },
    material: {
      en: 'FSC teak, stainless fittings',
      zh: 'FSC柚木，不锈钢配件'
    },
    dimensions: 'W65×D80×H87 cm',
    weight: '8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 387,
    name: {
      en: 'Stack Patio Chair',
      zh: '斯塔克露台椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 149,
    originalPrice: 185,
    discount: 20,
    rating: 4.7,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord387x0/600/600', 'https://picsum.photos/seed/nord387x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Stack patio chair is light enough to carry with one hand yet sturdy enough for year-round outdoor use. Powder-coated aluminum means no rust and minimal maintenance.',
      zh: '斯塔克露台椅轻到单手可提，却足够坚固全年户外使用，粉末涂层铝意味着不生锈且维护极少。'
    },
    specs: {
      Material: 'Powder-coated aluminum',
      Dimensions: 'W57×D58×H82 cm',
      Weight: '5 kg',
      Stackable: 'Yes',
      "Max weight": '150 kg',
      Weatherproof: 'Yes'
    },
    material: {
      en: 'Powder-coated aluminum',
      zh: '粉末涂层铝'
    },
    dimensions: 'W57×D58×H82 cm',
    weight: '5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 388,
    name: {
      en: 'Hage Rocking Chair',
      zh: '哈格户外摇椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 489,
    originalPrice: 489,
    discount: 0,
    rating: 4.8,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord388x0/600/600', 'https://picsum.photos/seed/nord388x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Hage outdoor rocking chair invites long summer evenings on Nordic terraces and garden decks. Solid teak construction needs only annual oiling to maintain its golden hue.',
      zh: '哈格户外摇椅邀请人们在北欧露台和花园甲板上享受漫长的夏日傍晚，实心柚木构造仅需年度打油保持金色色调。'
    },
    specs: {
      Material: 'Solid FSC teak',
      Dimensions: 'W67×D100×H95 cm',
      Weight: '12 kg',
      Finish: 'Natural (oil recommended)',
      "Max weight": '150 kg',
      Assembly: 'Required'
    },
    material: {
      en: 'FSC teak solid',
      zh: 'FSC实心柚木'
    },
    dimensions: 'W67×D100×H95 cm',
    weight: '12 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 389,
    name: {
      en: 'Teak Garden Table',
      zh: '柚木花园桌'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 599,
    originalPrice: 599,
    discount: 0,
    rating: 4.9,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord389x0/600/600', 'https://picsum.photos/seed/nord389x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'This solid teak garden table is built for Nordic outdoor entertaining. It folds flat for compact winter storage and the sustainably sourced teak weathers to a beautiful silver-grey if left untreated.',
      zh: '这款实心柚木花园桌专为北欧户外娱乐而建，可平折以紧凑储存过冬，可持续采购的柚木若不处理会风化为美丽的银灰色。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W150×D90×H74 cm',
      Weight: '28 kg',
      Foldable: 'Yes',
      Assembly: 'Minimal',
      Seats: '6'
    },
    material: {
      en: 'FSC teak, folding',
      zh: 'FSC柚木，折叠式'
    },
    dimensions: 'W150×D90×H74 cm',
    weight: '28 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 390,
    name: {
      en: 'Hage Bistro Table',
      zh: '哈格小酒馆桌'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 5.0,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord390x0/600/600', 'https://picsum.photos/seed/nord390x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The compact Hage bistro table is perfect for a Nordic balcony or small terrace. Its stackable legs fold for easy storage and the UV-stable powder coating resists Nordic weather.',
      zh: '紧凑的哈格小酒馆桌非常适合北欧阳台或小露台，可叠放的腿部折叠便于储存，抗紫外线粉末涂层抵御北欧天气。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'Ø60×H72 cm',
      Weight: '6 kg',
      Diameter: '60 cm',
      Foldable: 'Yes',
      Weatherproof: 'Yes'
    },
    material: {
      en: 'Powder-coated steel',
      zh: '粉末涂层钢'
    },
    dimensions: 'Ø60×H72 cm',
    weight: '6 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 391,
    name: {
      en: 'Bris Sun Lounger',
      zh: '布里斯躺椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Sun Loungers',
      zh: '躺椅'
    },
    price: 699,
    originalPrice: 699,
    discount: 0,
    rating: 3.5,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord391x0/600/600', 'https://picsum.photos/seed/nord391x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Bris sun lounger reclines to five positions for the perfect Nordic summer afternoon angle. FSC teak construction ages beautifully and withstands all Nordic outdoor conditions.',
      zh: '布里斯躺椅可调节为五个角度，适合完美的北欧夏日午后，FSC柚木构造随时间优雅老化，抵御所有北欧户外条件。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W70×D185×H35 cm',
      Weight: '14 kg',
      Positions: '5 reclining',
      Cushion: 'Not included',
      Assembly: 'Required'
    },
    material: {
      en: 'Teak, adjustable back',
      zh: '柚木，可调节靠背'
    },
    dimensions: 'W70×D185×H35 cm',
    weight: '14 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 392,
    name: {
      en: 'Stor Outdoor Planter',
      zh: '斯托尔户外花盆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 3.7,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord392x0/600/600', 'https://picsum.photos/seed/nord392x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Stor planter\'s sleek fibreglass construction is indistinguishable from concrete at a fraction of the weight—perfect for Nordic terraces and balconies where weight limits apply.',
      zh: '斯托尔花盆的光滑玻璃纤维构造与混凝土外观难以区分，重量却仅有后者的一小部分，非常适合有重量限制的北欧露台和阳台。'
    },
    specs: {
      Material: 'Fibreglass',
      Dimensions: 'Ø40×H40 cm',
      Weight: '4 kg',
      Drainage: 'Yes',
      "Frost-resistant": 'Yes',
      "UV-stable": 'Yes'
    },
    material: {
      en: 'Weatherproof fibreglass',
      zh: '耐候玻璃纤维'
    },
    dimensions: 'Ø40×H40 cm',
    weight: '4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 393,
    name: {
      en: 'Korg Wicker Planter',
      zh: '科格柳编花盆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 3.8,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord393x0/600/600', 'https://picsum.photos/seed/nord393x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'A natural seagrass wicker basket with a removable waterproof plastic liner—the ideal Nordic planter for covered terraces, pergolas, or indoor-outdoor living spaces.',
      zh: '天然海草柳编篮配可拆卸防水塑料内衬，是有遮蔽的露台、棚架或室内外过渡空间的理想北欧花盆。'
    },
    specs: {
      Material: 'Seagrass + plastic liner',
      Dimensions: 'Ø35×H35 cm',
      Weight: '1.2 kg',
      Liner: 'Removable',
      "Indoor/Outdoor": 'Covered outdoor',
      Shape: 'Round'
    },
    material: {
      en: 'Seagrass weave, plastic liner',
      zh: '海草编织，塑料内衬'
    },
    dimensions: 'Ø35×H35 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 394,
    name: {
      en: 'Utepute Outdoor Cushion',
      zh: '乌特普特户外坐垫'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Cushions',
      zh: '户外坐垫'
    },
    price: 59,
    originalPrice: 59,
    discount: 0,
    rating: 3.9,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord394x0/600/600', 'https://picsum.photos/seed/nord394x1/600/600'],
    badges: ['Sale'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Utepute outdoor cushion is filled with quick-dry foam and covered in UV-resistant Sunbrella fabric—the Nordic answer to outdoor comfort that lasts multiple summers.',
      zh: '乌特普特户外坐垫填充快干泡沫，覆以防紫外线Sunbrella面料，是可持续多个夏季的北欧户外舒适方案。'
    },
    specs: {
      Material: 'Sunbrella outdoor fabric',
      Dimensions: 'W50×H50 cm',
      Weight: '0.8 kg',
      Cover: 'Sunbrella UV-resistant',
      Fill: 'Quick-dry foam',
      Size: '50×50 cm',
      "Machine washable": 'Cover only'
    },
    material: {
      en: 'Sunbrella outdoor fabric',
      zh: '户外防晒面料'
    },
    dimensions: 'W50×H50 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 395,
    name: {
      en: 'Parasoll Cantilever Umbrella',
      zh: '帕拉索尔悬臂遮阳伞'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Umbrellas',
      zh: '遮阳伞'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.0,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord395x0/600/600', 'https://picsum.photos/seed/nord395x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Parasoll cantilever umbrella shades a large area without a central pole getting in the way. Its Sunbrella canopy filters 98% of UV rays while the rotating function follows the sun.',
      zh: '帕拉索尔悬臂遮阳伞无需中心柱即可为大面积遮阳，Sunbrella伞面过滤98%紫外线，旋转功能可追随太阳方向。'
    },
    specs: {
      Material: 'Sunbrella canopy, aluminum pole',
      Dimensions: 'Ø300×H280 cm',
      Weight: '22 kg',
      Canopy: 'Sunbrella',
      Diameter: '300 cm',
      "UV protection": '98%',
      Rotation: '360°'
    },
    material: {
      en: 'Sunbrella canopy, aluminum pole',
      zh: '防晒伞面，铝杆'
    },
    dimensions: 'Ø300×H280 cm',
    weight: '22 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 396,
    name: {
      en: 'Ild Fire Pit',
      zh: '伊尔德火盆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Fire Pits',
      zh: '火盆'
    },
    price: 299,
    originalPrice: 330,
    discount: 10,
    rating: 4.1,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord396x0/600/600', 'https://picsum.photos/seed/nord396x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'The Ild fire pit is crafted from self-patinating Corten steel that develops a rich rust-brown appearance over time—a Nordic approach to material beauty through weathering.',
      zh: '伊尔德火盆以自然成锈的耐候钢打造，随时间发展出丰富的锈棕色外观，体现北欧通过风化展现材料之美的理念。'
    },
    specs: {
      Material: 'Corten steel',
      Dimensions: 'Ø60×H45 cm',
      Weight: '18 kg',
      Diameter: '60 cm',
      "Wood burning": 'Yes',
      "Spark screen": 'Included'
    },
    material: {
      en: 'Corten steel',
      zh: '耐候钢'
    },
    dimensions: 'Ø60×H45 cm',
    weight: '18 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 397,
    name: {
      en: 'Folding Bistro Chair',
      zh: '折叠小酒馆椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.2,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord397x0/600/600', 'https://picsum.photos/seed/nord397x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Folding Bistro Chair is a Nordic balcony and café essential—lightweight powder-coated steel that folds flat for easy winter storage. Available in classic Nordic colours.',
      zh: '折叠小酒馆椅是北欧阳台和咖啡馆的必备，轻便的粉末涂层钢可平折便于冬季储存，提供经典北欧色彩选择。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W44×D50×H82 cm',
      Weight: '3.5 kg',
      Foldable: 'Yes',
      Weatherproof: 'Yes'
    },
    material: {
      en: 'Powder-coated steel, folding',
      zh: '粉末涂层钢，折叠'
    },
    dimensions: 'W44×D50×H82 cm',
    weight: '3.5 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 398,
    name: {
      en: 'Rope Weave Chair',
      zh: '绳编椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 329,
    originalPrice: 385,
    discount: 15,
    rating: 4.3,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord398x0/600/600', 'https://picsum.photos/seed/nord398x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'Premium hand-woven rope over a powder-coated aluminum frame—the Rope Weave Chair is designed for all-weather Nordic outdoor use and provides exceptional comfort with its ergonomic back curve.',
      zh: '粉末涂层铝框架上的高级手工编织绳，绳编椅专为全天候北欧户外使用而设计，人体工学的背部曲线提供卓越舒适感。'
    },
    specs: {
      Material: 'Powder-coated aluminum, rope',
      Dimensions: 'W62×D68×H85 cm',
      Weight: '8 kg',
      Frame: 'Powder-coated aluminium',
      Weave: 'Hand-woven rope',
      Weatherproof: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Powder-coated aluminum, rope',
      zh: '粉末涂层铝，绳编'
    },
    dimensions: 'W62×D68×H85 cm',
    weight: '8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 399,
    name: {
      en: 'Adirondack Nordic Chair',
      zh: '阿迪朗达克北欧椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 279,
    originalPrice: 279,
    discount: 0,
    rating: 4.4,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord399x0/600/600', 'https://picsum.photos/seed/nord399x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Adirondack Chair reimagined in Nordic style—FSC pine with a natural finish, wide flat armrests perfect for a coffee cup, and a deeply reclined seat ideal for summer afternoon relaxation.',
      zh: '北欧风格重新诠释的阿迪朗达克椅，FSC松木天然处理，宽大平坦的扶手非常适合放咖啡杯，深度后倾的座椅非常适合夏日午后放松。'
    },
    specs: {
      Material: 'FSC pine',
      Dimensions: 'W76×D90×H95 cm',
      Weight: '11 kg',
      Style: 'Adirondack',
      Finish: 'Natural oil',
      Assembly: 'Required'
    },
    material: {
      en: 'FSC pine, wide arms',
      zh: 'FSC松木，宽扶手'
    },
    dimensions: 'W76×D90×H95 cm',
    weight: '11 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 400,
    name: {
      en: 'Extendable Garden Table',
      zh: '可延伸花园桌'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 799,
    originalPrice: 1000,
    discount: 20,
    rating: 4.5,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord400x0/600/600', 'https://picsum.photos/seed/nord400x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Extendable Garden Table grows from a 6-seat to an 8-seat table at the pull of its butterfly extension leaf—ideal for Nordic summer entertaining with varying guest numbers.',
      zh: '可延伸花园桌只需拉开蝴蝶延伸板，即可从六人桌增大为八人桌，非常适合人数不定的北欧夏日娱乐。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W140-200×D90×H74 cm',
      Weight: '35 kg',
      "Extended length": '200 cm',
      Seats: '6-8',
      Foldable: 'No'
    },
    material: {
      en: 'FSC teak, butterfly extension',
      zh: 'FSC柚木，蝴蝶延伸'
    },
    dimensions: 'W140-200×D90×H74 cm',
    weight: '35 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 401,
    name: {
      en: 'Mosaic Bistro Table',
      zh: '马赛克小酒馆桌'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 249,
    originalPrice: 249,
    discount: 0,
    rating: 4.6,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord401x0/600/600', 'https://picsum.photos/seed/nord401x1/600/600'],
    badges: ['Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'A Nordic interpretation of the classic Mediterranean bistro table—hand-laid mosaic tile top on a sturdy wrought iron base, designed to add colour and character to outdoor dining.',
      zh: '北欧对经典地中海小酒馆桌的诠释，手工铺设的马赛克瓷砖桌面立于坚固的熟铁底座上，为户外就餐增添色彩和个性。'
    },
    specs: {
      Material: 'Mosaic top, iron base',
      Dimensions: 'Ø70×H72 cm',
      Weight: '8 kg',
      Top: 'Hand-laid mosaic tile',
      Base: 'Wrought iron',
      Diameter: '70 cm',
      "Weather resistant": 'Yes'
    },
    material: {
      en: 'Mosaic top, iron base',
      zh: '马赛克桌面，铁底座'
    },
    dimensions: 'Ø70×H72 cm',
    weight: '8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 402,
    name: {
      en: 'Double Sun Lounger',
      zh: '双人躺椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Sun Loungers',
      zh: '躺椅'
    },
    price: 999,
    originalPrice: 999,
    discount: 0,
    rating: 4.7,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord402x0/600/600', 'https://picsum.photos/seed/nord402x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Double Sun Lounger is the Nordic outdoor luxury experience—a full double-width teak deck chair perfect for sharing Nordic summer afternoons with someone you love.',
      zh: '双人躺椅是北欧户外奢华体验，完整双人宽度的柚木甲板椅，非常适合与心爱的人共享北欧夏日午后。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W130×D185×H35 cm',
      Weight: '28 kg',
      Width: 'Double (130 cm)',
      Positions: '5 reclining',
      Assembly: 'Required'
    },
    material: {
      en: 'Teak double width',
      zh: '柚木双人宽度'
    },
    dimensions: 'W130×D185×H35 cm',
    weight: '28 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 403,
    name: {
      en: 'Window Box Planter',
      zh: '窗台花盆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 69,
    originalPrice: 90,
    discount: 25,
    rating: 4.8,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord403x0/600/600', 'https://picsum.photos/seed/nord403x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Window Box Planter brings Nordic garden colour to balcony railings and window sills. Weatherproof fibreglass with drainage holes and a matching saucer.',
      zh: '窗台花盆将北欧花园色彩带到阳台栏杆和窗台，附带排水孔和配套托盘的防水玻璃纤维。'
    },
    specs: {
      Material: 'Fibreglass',
      Dimensions: 'W60×D18×H20 cm',
      Weight: '2.5 kg',
      Drainage: 'Yes',
      Mounting: 'Railing bracket or freestanding',
      "Frost-resistant": 'Yes'
    },
    material: {
      en: 'Fibreglass window box',
      zh: '玻璃纤维窗台盆'
    },
    dimensions: 'W60×D18×H20 cm',
    weight: '2.5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 404,
    name: {
      en: 'Tall Column Planter',
      zh: '高柱形花盆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 119,
    originalPrice: 119,
    discount: 0,
    rating: 4.9,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord404x0/600/600', 'https://picsum.photos/seed/nord404x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Tall Column Planter makes a dramatic vertical statement in Nordic gardens and terraces. Concrete-look fibreglass at a fraction of the weight, with an inner drainage system.',
      zh: '高柱形花盆在北欧花园和露台上营造戏剧性的垂直感，混凝土外观玻璃纤维仅有后者一小部分的重量，带内置排水系统。'
    },
    specs: {
      Material: 'Fibreglass',
      Dimensions: 'Ø30×H80 cm',
      Weight: '6 kg',
      Shape: 'Column',
      Height: '80 cm',
      "Frost-resistant": 'Yes'
    },
    material: {
      en: 'Concrete-look fibreglass',
      zh: '混凝土外观玻璃纤维'
    },
    dimensions: 'Ø30×H80 cm',
    weight: '6 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 405,
    name: {
      en: 'Beach Umbrella',
      zh: '沙滩伞'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Umbrellas',
      zh: '遮阳伞'
    },
    price: 79,
    originalPrice: 115,
    discount: 30,
    rating: 5.0,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord405x0/600/600', 'https://picsum.photos/seed/nord405x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'A simple Nordic beach umbrella in cotton canvas—its classic striped pattern and natural wood pole bring Scandinavian coastal charm to any beach or garden.',
      zh: '简单的棉帆布北欧沙滩伞，经典条纹图案和天然木杆为任何海滩或花园带来斯堪的纳维亚海滨魅力。'
    },
    specs: {
      Material: 'Cotton canvas',
      Dimensions: 'Ø180×H200 cm',
      Weight: '2 kg',
      Pole: 'Wood',
      Diameter: '180 cm',
      Pattern: 'Nordic stripes'
    },
    material: {
      en: 'Cotton canvas, wood pole',
      zh: '棉帆布，木杆'
    },
    dimensions: 'Ø180×H200 cm',
    weight: '2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 406,
    name: {
      en: 'Portable Fire Bowl',
      zh: '便携火碗'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Fire Pits',
      zh: '火盆'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 3.5,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord406x0/600/600', 'https://picsum.photos/seed/nord406x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Portable Fire Bowl is a compact Nordic fire feature perfect for small terraces and balconies. Corten steel ages to a beautiful patina and can be carried to any outdoor space.',
      zh: '便携火碗是紧凑的北欧火焰装置，非常适合小露台和阳台，耐候钢随时间形成美丽的包浆，可携带至任何户外空间。'
    },
    specs: {
      Material: 'Corten steel',
      Dimensions: 'Ø45×H30 cm',
      Weight: '8 kg',
      Diameter: '45 cm',
      Portable: 'Yes',
      "Wood burning": 'Yes'
    },
    material: {
      en: 'Corten steel, portable',
      zh: '耐候钢，便携'
    },
    dimensions: 'Ø45×H30 cm',
    weight: '8 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 407,
    name: {
      en: 'Cast Iron Fire Pit',
      zh: '铸铁火盆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Fire Pits',
      zh: '火盆'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 3.7,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord407x0/600/600', 'https://picsum.photos/seed/nord407x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Cast Iron Fire Pit doubles as a BBQ grill with its included cooking grate—a Nordic multi-function outdoor feature for year-round entertaining and al fresco cooking.',
      zh: '铸铁火盆配附带的烤架兼作烧烤炉，是用于全年娱乐和户外烹饪的北欧多功能户外装置。'
    },
    specs: {
      Material: 'Cast iron',
      Dimensions: 'Ø70×H50 cm',
      Weight: '32 kg',
      "Grill grate": 'Included',
      Diameter: '70 cm',
      Legs: '4 (included)'
    },
    material: {
      en: 'Cast iron with grate',
      zh: '带烤架的铸铁'
    },
    dimensions: 'Ø70×H50 cm',
    weight: '32 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 408,
    name: {
      en: 'Reclining Patio Chair',
      zh: '可调躺椅露台椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 299,
    originalPrice: 299,
    discount: 0,
    rating: 3.8,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord408x0/600/600', 'https://picsum.photos/seed/nord408x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Reclining Patio Chair adjusts to multiple recline positions via a simple lever, making it as useful for working outside as for sunbathing. Lightweight aluminum and quick-dry Textilene.',
      zh: '可调躺椅通过简单的杠杆调节为多个后倾位置，既适合户外工作也适合日光浴，轻量铝材和快干特力纶面料。'
    },
    specs: {
      Material: 'Textilene, aluminum',
      Dimensions: 'W65×D100×H90 cm',
      Weight: '9 kg',
      Frame: 'Powder-coated aluminium',
      Fabric: 'Textilene',
      Recline: 'Multi-position',
      Foldable: 'Yes'
    },
    material: {
      en: 'Textilene, aluminum',
      zh: '特力纶，铝'
    },
    dimensions: 'W65×D100×H90 cm',
    weight: '9 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 409,
    name: {
      en: 'Hanging Egg Chair Outdoor',
      zh: '户外吊蛋椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 599,
    originalPrice: 705,
    discount: 15,
    rating: 3.9,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord409x0/600/600', 'https://picsum.photos/seed/nord409x1/600/600'],
    badges: ['Sale'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'The Outdoor Hanging Egg Chair is the ultimate Nordic garden luxury—a cocoon of all-weather wicker suspended from a powder-coated steel stand, gently swaying with the summer breeze.',
      zh: '户外吊蛋椅是北欧花园的终极奢华，全天候柳编茧形椅悬挂于粉末涂层钢架上，随夏日微风轻轻摇摆。'
    },
    specs: {
      Material: 'Wicker, steel frame',
      Dimensions: 'Ø110×H130 cm',
      Weight: '22 kg',
      Frame: 'Powder-coated steel',
      Weave: 'All-weather wicker',
      Cushion: 'Quick-dry (included)',
      Weatherproof: 'Yes'
    },
    material: {
      en: 'Wicker, steel frame',
      zh: '柳编，钢框架'
    },
    dimensions: 'Ø110×H130 cm',
    weight: '22 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 410,
    name: {
      en: 'Pedestal Garden Table',
      zh: '底座花园桌'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.0,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord410x0/600/600', 'https://picsum.photos/seed/nord410x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Pedestal Garden Table on a single central column base is ideal for small Nordic terraces—it seats four without corner legs getting in the way, and the aluminium never rusts.',
      zh: '底座花园桌以单中心柱底座非常适合小型北欧露台，无需担心桌角阻碍可容纳四人，铝材永不生锈。'
    },
    specs: {
      Material: 'Powder-coated aluminium',
      Dimensions: 'Ø100×H74 cm',
      Weight: '20 kg',
      Shape: 'Round',
      Seats: '4',
      Weatherproof: 'Yes'
    },
    material: {
      en: 'Powder-coated aluminum, round',
      zh: '粉末涂层铝，圆形'
    },
    dimensions: 'Ø100×H74 cm',
    weight: '20 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 411,
    name: {
      en: 'Fabric Sun Lounger',
      zh: '布艺躺椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Sun Loungers',
      zh: '躺椅'
    },
    price: 449,
    originalPrice: 500,
    discount: 10,
    rating: 4.1,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord411x0/600/600', 'https://picsum.photos/seed/nord411x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Fabric Sun Lounger\'s breathable Textilene weave allows air circulation to keep you cool on Nordic summer days. Aluminium frame is lightweight and rust-proof.',
      zh: '布艺躺椅的透气特力纶编织允许空气流通，在北欧夏日保持凉爽，铝制框架轻便且防锈。'
    },
    specs: {
      Material: 'Textilene, aluminum',
      Dimensions: 'W70×D185×H35 cm',
      Weight: '12 kg',
      Frame: 'Powder-coated aluminium',
      Fabric: 'Textilene',
      Positions: '5',
      Foldable: 'Yes'
    },
    material: {
      en: 'Textilene, aluminum',
      zh: '特力纶，铝'
    },
    dimensions: 'W70×D185×H35 cm',
    weight: '12 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 412,
    name: {
      en: 'Raised Garden Bed',
      zh: '升高花床'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 4.2,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord412x0/600/600', 'https://picsum.photos/seed/nord412x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Raised Garden Bed is a Nordic kitchen garden essential—FSC cedar naturally resists decay and insects. Grow herbs, vegetables, and flowers at a comfortable working height.',
      zh: '升高花床是北欧厨房花园的必备，FSC雪松天然抵抗腐烂和昆虫，在舒适的工作高度种植香草、蔬菜和花卉。'
    },
    specs: {
      Material: 'FSC cedar',
      Dimensions: 'W120×D60×H45 cm',
      Weight: '18 kg',
      Assembly: 'No tools needed',
      Depth: '30 cm usable',
      Drainage: 'Yes'
    },
    material: {
      en: 'FSC cedar, no-tools assembly',
      zh: 'FSC雪松，无工具组装'
    },
    dimensions: 'W120×D60×H45 cm',
    weight: '18 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 413,
    name: {
      en: 'Striped Outdoor Cushion',
      zh: '条纹户外坐垫'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Cushions',
      zh: '户外坐垫'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.3,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord413x0/600/600', 'https://picsum.photos/seed/nord413x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'Classic Nordic stripes in all-weather Sunbrella fabric—this outdoor cushion brings Scandinavian coastal pattern to any garden chair, bench, or sun lounger.',
      zh: '全天候Sunbrella面料的经典北欧条纹，这款户外坐垫为任何花园椅、长凳或躺椅带来斯堪的纳维亚海岸图案。'
    },
    specs: {
      Material: 'Sunbrella striped fabric',
      Dimensions: 'W50×H50 cm',
      Weight: '0.8 kg',
      Cover: 'Sunbrella UV-resistant',
      Pattern: 'Nordic stripes',
      Fill: 'Quick-dry foam',
      "Machine washable": 'Cover only'
    },
    material: {
      en: 'Sunbrella striped fabric',
      zh: '防晒条纹面料'
    },
    dimensions: 'W50×H50 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 414,
    name: {
      en: 'Tabletop Fire Bowl',
      zh: '桌面火碗'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Fire Pits',
      zh: '火盆'
    },
    price: 89,
    originalPrice: 150,
    discount: 40,
    rating: 4.4,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord414x0/600/600', 'https://picsum.photos/seed/nord414x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Tabletop Fire Bowl burns clean bio-ethanol fuel with no smoke or ash—a Nordic dinner party essential that creates real firelight atmosphere on any table.',
      zh: '桌面火碗燃烧清洁的生物乙醇燃料，无烟无灰，是任何桌面营造真实火光氛围的北欧晚宴必备。'
    },
    specs: {
      Material: 'Stainless steel',
      Dimensions: 'Ø25×H15 cm',
      Weight: '2.5 kg',
      Fuel: 'Bio-ethanol',
      Smoke: 'None',
      Diameter: '25 cm'
    },
    material: {
      en: 'Stainless steel, bio-ethanol',
      zh: '不锈钢，生物乙醇'
    },
    dimensions: 'Ø25×H15 cm',
    weight: '2.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 415,
    name: {
      en: 'Outdoor Umbrella Base',
      zh: '户外伞座'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Umbrellas',
      zh: '遮阳伞'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.5,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord415x0/600/600', 'https://picsum.photos/seed/nord415x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Cast Iron Umbrella Base provides rock-solid stability for market umbrellas in Nordic outdoor conditions. The 18 kg weight prevents tipping even in strong coastal winds.',
      zh: '铸铁伞座为北欧户外条件下的市场伞提供坚如磐石的稳定性，18公斤的重量即使在强劲的海岸风中也能防止倾翻。'
    },
    specs: {
      Material: 'Cast iron',
      Dimensions: 'Ø40×H20 cm',
      Weight: '18 kg',
      "Pole diameter": '38-48 mm',
      Stability: 'High wind rated'
    },
    material: {
      en: 'Cast iron, heavy base',
      zh: '铸铁，重型底座'
    },
    dimensions: 'Ø40×H20 cm',
    weight: '18 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 416,
    name: {
      en: 'Nordic Garden Sofa Set',
      zh: '北欧花园沙发套装'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 2499,
    originalPrice: 2499,
    discount: 0,
    rating: 4.6,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord416x0/600/600', 'https://picsum.photos/seed/nord416x1/600/600'],
    badges: ['Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'A complete Nordic outdoor living set—FSC teak sofa, two armchairs, and a coffee table with premium Sunbrella cushions. Ready to create an outdoor Nordic living room.',
      zh: '完整的北欧户外生活套装，FSC柚木沙发、两把扶手椅和咖啡桌配优质Sunbrella坐垫，打造户外北欧客厅。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'Various',
      Weight: '95 kg',
      Includes: 'Sofa + 2 armchairs + table',
      Cushions: 'Sunbrella (included)',
      Assembly: 'Required'
    },
    material: {
      en: 'Teak + sunbrella, full set',
      zh: '柚木+防晒面料，全套'
    },
    dimensions: 'Various',
    weight: '95 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 417,
    name: {
      en: 'Folding Garden Table Set',
      zh: '折叠花园桌椅套装'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 349,
    originalPrice: 435,
    discount: 20,
    rating: 4.7,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord417x0/600/600', 'https://picsum.photos/seed/nord417x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'A space-saving Nordic balcony set—a folding table and two chairs that collapse flat for winter storage. Perfect for compact city terraces and small gardens.',
      zh: '节省空间的北欧阳台套装，折叠桌和两把椅子可平折冬季储存，非常适合紧凑的城市露台和小花园。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W80×D80×H72 cm',
      Weight: '14 kg',
      Set: 'Table + 2 chairs',
      Foldable: 'Yes',
      Assembly: 'Minimal'
    },
    material: {
      en: 'Powder-coated steel, 2 chairs',
      zh: '粉末涂层钢，两把椅'
    },
    dimensions: 'W80×D80×H72 cm',
    weight: '14 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 418,
    name: {
      en: 'Outdoor Side Table',
      zh: '户外边桌'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.8,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord418x0/600/600', 'https://picsum.photos/seed/nord418x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'A lightweight Nordic outdoor side table that moves effortlessly around the terrace or garden. Its stackable design makes winter storage simple.',
      zh: '轻量北欧户外边桌在露台或花园中轻松移动，可叠放设计使冬季储存简便。'
    },
    specs: {
      Material: 'Powder-coated aluminium',
      Dimensions: 'Ø40×H50 cm',
      Weight: '3 kg',
      Stackable: 'Yes',
      Weatherproof: 'Yes',
      Assembly: 'No'
    },
    material: {
      en: 'Powder-coated aluminum',
      zh: '粉末涂层铝'
    },
    dimensions: 'Ø40×H50 cm',
    weight: '3 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 419,
    name: {
      en: 'Shade Sail',
      zh: '遮阳帆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Umbrellas',
      zh: '遮阳伞'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 4.9,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord419x0/600/600', 'https://picsum.photos/seed/nord419x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Nordic Shade Sail blocks up to 95% of UV radiation over a large outdoor area. Its HDPE fabric is breathable, water-repellent, and available in natural Nordic tones.',
      zh: '北欧遮阳帆阻挡大面积户外区域高达95%的紫外线，高密度聚乙烯面料透气、防水，提供天然北欧色调。'
    },
    specs: {
      Material: 'HDPE',
      Dimensions: '400×400 cm',
      Weight: '2 kg',
      "UV protection": '95%',
      Size: '4×4 m',
      Breathable: 'Yes'
    },
    material: {
      en: 'HDPE, triangle shade sail',
      zh: '高密度聚乙烯，三角遮阳帆'
    },
    dimensions: '400×400 cm',
    weight: '2 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 420,
    name: {
      en: 'Outdoor Storage Box',
      zh: '户外储物箱'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 5.0,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord420x0/600/600', 'https://picsum.photos/seed/nord420x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Outdoor Storage Box stores cushions, gardening tools, and outdoor accessories in a weatherproof resin wicker box that looks beautiful on any Nordic terrace.',
      zh: '户外储物箱将坐垫、园艺工具和户外配件存储于看起来美观的防水树脂柳编箱中，适合任何北欧露台。'
    },
    specs: {
      Material: 'Resin wicker',
      Dimensions: 'W120×D55×H60 cm',
      Weight: '18 kg',
      Weatherproof: 'Yes',
      Volume: '200 L',
      Lid: 'Gas-assisted'
    },
    material: {
      en: 'Weatherproof resin wicker',
      zh: '耐候树脂柳编'
    },
    dimensions: 'W120×D55×H60 cm',
    weight: '18 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 421,
    name: {
      en: 'Outdoor Rug',
      zh: '户外地毯'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Cushions',
      zh: '户外坐垫'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 3.5,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord421x0/600/600', 'https://picsum.photos/seed/nord421x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Outdoor Rug in Nordic geometric patterns is made from recycled plastic bottles—a sustainable Scandinavian choice that withstands all weather while looking beautiful on any terrace.',
      zh: '北欧几何图案户外地毯由再生塑料瓶制成，在任何露台上既耐候又美观的可持续斯堪的纳维亚选择。'
    },
    specs: {
      Material: 'Recycled PET plastic',
      Dimensions: 'W160×L230 cm',
      Weight: '3 kg',
      Pattern: 'Nordic geometric',
      Weatherproof: 'Yes',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Recycled plastic, outdoor',
      zh: '再生塑料，户外'
    },
    dimensions: 'W160×L230 cm',
    weight: '3 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 422,
    name: {
      en: 'Garden Lantern',
      zh: '花园提灯'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Umbrellas',
      zh: '遮阳伞'
    },
    price: 69,
    originalPrice: 69,
    discount: 0,
    rating: 3.7,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord422x0/600/600', 'https://picsum.photos/seed/nord422x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Garden Lantern adds Nordic warmth to outdoor evenings—galvanized steel and clear glass panels create a classic Scandinavian lantern that protects the flame in light wind.',
      zh: '花园提灯为户外夜晚增添北欧温暖，镀锌钢和透明玻璃板创造在轻风中保护火焰的经典斯堪的纳维亚提灯。'
    },
    specs: {
      Material: 'Galvanised steel + glass',
      Dimensions: 'W20×D20×H45 cm',
      Weight: '2 kg',
      Height: '45 cm',
      "Candle type": 'Pillar',
      Weatherproof: 'Covered outdoor'
    },
    material: {
      en: 'Galvanized steel, glass',
      zh: '镀锌钢，玻璃'
    },
    dimensions: 'W20×D20×H45 cm',
    weight: '2 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 423,
    name: {
      en: 'Bistro Set Rattan',
      zh: '藤编小酒馆套装'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 449,
    originalPrice: 449,
    discount: 0,
    rating: 3.8,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord423x0/600/600', 'https://picsum.photos/seed/nord423x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'A complete Nordic outdoor bistro set in all-weather rattan—round table and two armchairs with removable cushions for breakfasts and lunches on any Nordic terrace.',
      zh: '三件套全天候藤编北欧户外小酒馆套装，圆桌和两把带可拆卸坐垫的扶手椅，适合任何北欧露台的早餐和午餐。'
    },
    specs: {
      Material: 'All-weather rattan',
      Dimensions: 'Table Ø65 + 2 chairs',
      Weight: '18 kg',
      Set: 'Table + 2 chairs',
      Cushions: 'Included (removable)',
      Assembly: 'Required'
    },
    material: {
      en: 'All-weather rattan, 3-piece',
      zh: '全天候藤编，三件套'
    },
    dimensions: 'Table Ø65 + 2 chairs',
    weight: '18 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 424,
    name: {
      en: 'Hanging Planter Trio',
      zh: '悬挂花盆三件套'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 59,
    originalPrice: 59,
    discount: 0,
    rating: 3.9,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord424x0/600/600', 'https://picsum.photos/seed/nord424x1/600/600'],
    badges: ['Sale'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'Three hemp rope hanging planters in graduating sizes—a Nordic indoor-outdoor plant display system that elevates greenery to eye level on any wall, fence, or branch.',
      zh: '三个渐进尺寸的麻绳悬挂花盆，是将绿植提升至任何墙壁、围栏或树枝上视线高度的北欧室内外植物展示系统。'
    },
    specs: {
      Material: 'Hemp rope + ceramic pot',
      Dimensions: 'Ø15 cm each',
      Weight: '0.6 kg',
      Set: '3 planters',
      Sizes: 'S/M/L',
      "Indoor/Outdoor": 'Both'
    },
    material: {
      en: 'Rope hanging planters, set of 3',
      zh: '绳挂花盆，三件套'
    },
    dimensions: 'Ø15 cm each',
    weight: '0.6 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 425,
    name: {
      en: 'Teak Sun Lounger Cushion',
      zh: '柚木躺椅坐垫'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Cushions',
      zh: '户外坐垫'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.0,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord425x0/600/600', 'https://picsum.photos/seed/nord425x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'A full-length Sunbrella sun lounger cushion for Nordic teak outdoor furniture—UV-resistant, quick-drying, and available in classic Nordic blue, white, and grey tones.',
      zh: '北欧柚木户外家具的全长Sunbrella躺椅坐垫，防紫外线、快干，提供经典北欧蓝色、白色和灰色色调。'
    },
    specs: {
      Material: 'Sunbrella fabric',
      Dimensions: 'W60×L185 cm',
      Weight: '2 kg',
      Size: '60×185 cm',
      Fill: 'Quick-dry foam',
      "UV resistant": 'Yes'
    },
    material: {
      en: 'Sunbrella full-length cushion',
      zh: '防晒全长坐垫'
    },
    dimensions: 'W60×L185 cm',
    weight: '2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 426,
    name: {
      en: 'Outdoor Folding Chair',
      zh: '户外折叠椅'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Outdoor Chairs',
      zh: '户外椅'
    },
    price: 79,
    originalPrice: 90,
    discount: 10,
    rating: 4.1,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord426x0/600/600', 'https://picsum.photos/seed/nord426x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'A simple, sturdy Nordic folding chair for gardens, camping, and terraces. Lightweight powder-coated steel folds flat in seconds for easy transport and storage.',
      zh: '简单坚固的北欧折叠椅适合花园、露营和露台，轻便的粉末涂层钢几秒内平折，便于运输和储存。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W52×D55×H85 cm',
      Weight: '3 kg',
      Foldable: 'Yes',
      "Max load": '120 kg'
    },
    material: {
      en: 'Powder-coated steel, folding',
      zh: '粉末涂层钢，折叠'
    },
    dimensions: 'W52×D55×H85 cm',
    weight: '3 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 427,
    name: {
      en: 'Sko Hallway Shoe Rack',
      zh: '斯科走廊鞋架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Shoe Racks',
      zh: '鞋架'
    },
    price: 119,
    originalPrice: 119,
    discount: 0,
    rating: 4.2,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord427x0/600/600', 'https://picsum.photos/seed/nord427x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Sko hallway shoe rack is a compact Nordic entrance solution. Four tiers store up to 8 pairs, and its slim profile fits neatly beside any Nordic door without blocking passage.',
      zh: '斯科走廊鞋架是紧凑的北欧入口解决方案，四层可存放最多八双鞋，纤薄的轮廓紧贴任何北欧门旁而不阻碍通行。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W80×D25×H90 cm',
      Weight: '7 kg',
      Tiers: '4',
      "Pairs capacity": '~8 pairs',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, 4-tier',
      zh: '实心松木，四层'
    },
    dimensions: 'W80×D25×H90 cm',
    weight: '7 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 428,
    name: {
      en: 'Bench Shoe Storage',
      zh: '长凳鞋柜'
    },
    category: 'Storage',
    subcategory: {
      en: 'Shoe Racks',
      zh: '鞋架'
    },
    price: 189,
    originalPrice: 220,
    discount: 15,
    rating: 4.3,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord428x0/600/600', 'https://picsum.photos/seed/nord428x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'This hallway bench conceals shoe storage under its hinged seat—a clever Nordic dual-function design that provides a place to sit when putting on shoes while keeping the entrance tidy.',
      zh: '这款门廊长凳在翻盖座下隐藏鞋柜储物，是聪明的北欧双功能设计，在穿鞋时提供坐处，同时保持入口整洁。'
    },
    specs: {
      Material: 'Oak veneer, hinged seat',
      Dimensions: 'W80×D35×H45 cm',
      Weight: '12 kg',
      Top: 'Oak veneer',
      Storage: 'Under-lid',
      "Pairs capacity": '6-8',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, hinged seat',
      zh: '橡木贴皮，翻盖座'
    },
    dimensions: 'W80×D35×H45 cm',
    weight: '12 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 429,
    name: {
      en: 'Hatt Coat Rack',
      zh: '哈特衣帽架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Coat Racks',
      zh: '衣帽架'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 4.4,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord429x0/600/600', 'https://picsum.photos/seed/nord429x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Hatt coat rack stands elegantly in any Nordic hallway, with 8 solid oak hooks at varying heights accommodating coats, bags, scarves, and keys. The weighted base ensures stability.',
      zh: '哈特衣帽架优雅地矗立于任何北欧走廊，八个不同高度的实心橡木挂钩可挂外套、包袋、围巾和钥匙，加重底座确保稳定。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W60×D30×H180 cm',
      Weight: '8 kg',
      Hooks: '8',
      Style: 'Freestanding',
      Base: 'Weighted'
    },
    material: {
      en: 'Solid oak, 8 hooks',
      zh: '实心橡木，八挂钩'
    },
    dimensions: 'W60×D30×H180 cm',
    weight: '8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 430,
    name: {
      en: 'Vägg Wall Hook Set',
      zh: '瓦格壁挂钩套装'
    },
    category: 'Storage',
    subcategory: {
      en: 'Coat Racks',
      zh: '衣帽架'
    },
    price: 49,
    originalPrice: 60,
    discount: 20,
    rating: 4.5,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord430x0/600/600', 'https://picsum.photos/seed/nord430x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Vägg wall hook set installs easily with three screws to deliver five beautiful solid brass hooks. The minimal Nordic form suits any hallway, bathroom, or kitchen.',
      zh: '瓦格壁挂钩套装仅需三颗螺丝即可安装，提供五个精美的实心黄铜挂钩，极简的北欧造型适合任何走廊、浴室或厨房。'
    },
    specs: {
      Material: 'Solid brass',
      Dimensions: 'W60×D8×H10 cm',
      Weight: '0.5 kg',
      Hooks: '5',
      Mounting: '3 screws',
      Finish: 'Polished brass'
    },
    material: {
      en: 'Solid brass, 5 hooks',
      zh: '实心黄铜，五挂钩'
    },
    dimensions: 'W60×D8×H10 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 431,
    name: {
      en: 'Korg Seagrass Basket',
      zh: '科格海草篮'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 39,
    originalPrice: 39,
    discount: 0,
    rating: 4.6,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord431x0/600/600', 'https://picsum.photos/seed/nord431x1/600/600'],
    badges: ['Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'Hand-woven from natural seagrass by skilled artisans, this Nordic storage basket is beautiful enough to display and practical enough for blankets, toys, or laundry.',
      zh: '由熟练工匠以天然海草手工编织，这款北欧储物篮兼具展示美感和存放毯子、玩具或洗衣的实用性。'
    },
    specs: {
      Material: 'Natural seagrass',
      Dimensions: 'Ø30×H25 cm',
      Weight: '0.5 kg',
      Handles: 'Yes',
      "Sizes available": 'S / M / L',
      Handmade: 'Yes'
    },
    material: {
      en: 'Hand-woven seagrass',
      zh: '手工编织海草'
    },
    dimensions: 'Ø30×H25 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 432,
    name: {
      en: 'Oppbevaring Cotton Basket',
      zh: '奥普贝瓦宁棉质篮'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 29,
    originalPrice: 29,
    discount: 0,
    rating: 4.7,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord432x0/600/600', 'https://picsum.photos/seed/nord432x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Oppbevaring chunky rope basket is a Nordic nursery and bathroom essential. Machine-washable cotton rope construction handles everything from bath toys to spare toilet rolls.',
      zh: '奥普贝瓦宁粗绳篮是北欧婴儿房和浴室的必备单品，可机洗棉绳构造可存放从浴室玩具到备用卫生纸卷的各类物品。'
    },
    specs: {
      Material: 'Cotton rope',
      Dimensions: 'Ø28×H30 cm',
      Weight: '0.4 kg',
      "Machine washable": 'Yes',
      Handles: 'Yes',
      Sizes: 'S / M / L'
    },
    material: {
      en: 'Chunky cotton rope',
      zh: '粗棉绳'
    },
    dimensions: 'Ø28×H30 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 433,
    name: {
      en: 'Box Lid Storage Box',
      zh: '博克斯有盖储物盒'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 55,
    originalPrice: 75,
    discount: 25,
    rating: 4.8,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord433x0/600/600', 'https://picsum.photos/seed/nord433x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Box Lid storage box combines a soft felt body with a solid oak lid—a Nordic design pairing that looks beautiful on shelves or desks while hiding away small clutter.',
      zh: '博克斯储物盒将柔软毛毡盒体与实心橡木盖结合，是摆放在搁架或桌上既美观又能隐藏小杂物的北欧设计组合。'
    },
    specs: {
      Material: 'Felt, solid oak lid',
      Dimensions: 'W40×D28×H20 cm',
      Weight: '0.8 kg',
      Body: 'Felt',
      Lid: 'Solid oak',
      Sizes: 'S / M / L',
      Assembly: 'No'
    },
    material: {
      en: 'Felt, solid oak lid',
      zh: '毛毡，实心橡木盖'
    },
    dimensions: 'W40×D28×H20 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 434,
    name: {
      en: 'Peg Oak Hook',
      zh: '佩格橡木挂钩'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 19,
    originalPrice: 19,
    discount: 0,
    rating: 4.9,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord434x0/600/600', 'https://picsum.photos/seed/nord434x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'The simplest Nordic wall hook—a solid oak Shaker-inspired peg that installs in seconds. Group multiples in a row for a classic Scandinavian wall hook rail.',
      zh: '最简洁的北欧壁钩，受震颤派风格启发的实心橡木木钉，几秒内即可安装，多个成排打造经典斯堪的纳维亚挂钩条。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W4×D6×H12 cm',
      Weight: '0.1 kg',
      Finish: 'Natural oil',
      Mounting: '1 screw',
      Load: '5 kg'
    },
    material: {
      en: 'Solid oak peg',
      zh: '实心橡木木钉'
    },
    dimensions: 'W4×D6×H12 cm',
    weight: '0.1 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 435,
    name: {
      en: 'Nøkkel Key Holder',
      zh: '诺克尔钥匙挂架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Key Holders',
      zh: '钥匙挂架'
    },
    price: 35,
    originalPrice: 50,
    discount: 30,
    rating: 5.0,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord435x0/600/600', 'https://picsum.photos/seed/nord435x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'The Nøkkel key holder is a small but essential piece of Nordic entrance organisation. Three brass hooks hold keys, and a small shelf above is perfect for reminders or a small plant.',
      zh: '诺克尔钥匙挂架是北欧入口组织的小却必不可少的单品，三个黄铜钩挂钥匙，上方小搁板完美放置提醒事项或小植物。'
    },
    specs: {
      Material: 'Solid oak + brass',
      Dimensions: 'W20×D5×H10 cm',
      Weight: '0.2 kg',
      Hooks: '3',
      Shelf: 'Yes',
      Mounting: '2 screws'
    },
    material: {
      en: 'Solid oak, brass hooks',
      zh: '实心橡木，黄铜钩'
    },
    dimensions: 'W20×D5×H10 cm',
    weight: '0.2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 436,
    name: {
      en: 'Bad Bathroom Shelf',
      zh: '巴德浴室搁架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 3.5,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord436x0/600/600', 'https://picsum.photos/seed/nord436x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Bad bathroom shelf is crafted from naturally water-resistant teak for lasting beauty in wet environments. Two tiers hold toiletries, candles, and plants with Nordic serenity.',
      zh: '巴德浴室搁架以天然耐水柚木打造，在潮湿环境中持久美观，两层搁板以北欧宁静感放置盥洗用品、蜡烛和植物。'
    },
    specs: {
      Material: 'Teak',
      Dimensions: 'W60×D12×H25 cm',
      Weight: '2 kg',
      Tiers: '2',
      Mount: 'Wall (hardware included)',
      "IP rating": 'Bathroom safe'
    },
    material: {
      en: 'Teak, wall-mount',
      zh: '柚木，壁挂'
    },
    dimensions: 'W60×D12×H25 cm',
    weight: '2 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 437,
    name: {
      en: 'Rulla Towel Ladder',
      zh: '鲁拉毛巾梯'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 3.7,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord437x0/600/600', 'https://picsum.photos/seed/nord437x1/600/600'],
    badges: ['New'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Rulla towel ladder leans naturally against the bathroom wall, holding multiple towels or robes in a minimal Nordic manner. Solid bamboo is naturally moisture-resistant.',
      zh: '鲁拉毛巾梯自然倚靠浴室墙壁，以极简的北欧方式悬挂多条毛巾或浴袍，实心竹天然抗湿。'
    },
    specs: {
      Material: 'Solid bamboo',
      Dimensions: 'W40×D5×H150 cm',
      Weight: '3 kg',
      Rungs: '5',
      Style: 'Leaning ladder',
      Base: 'Anti-slip pads'
    },
    material: {
      en: 'Solid bamboo, lean ladder',
      zh: '实心竹，倚墙梯形'
    },
    dimensions: 'W40×D5×H150 cm',
    weight: '3 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 438,
    name: {
      en: 'Cabinet Shoe Storage',
      zh: '橱柜鞋柜'
    },
    category: 'Storage',
    subcategory: {
      en: 'Shoe Racks',
      zh: '鞋架'
    },
    price: 249,
    originalPrice: 249,
    discount: 0,
    rating: 3.8,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord438x0/600/600', 'https://picsum.photos/seed/nord438x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Cabinet Shoe Storage conceals up to 12 pairs of shoes behind two slim doors—a clean Nordic entrance solution that disguises functional storage as a handsome hallway cabinet.',
      zh: '橱柜鞋柜在两扇纤薄门后隐藏最多12双鞋，是将功能性储物伪装为精致走廊柜的干净北欧入口解决方案。'
    },
    specs: {
      Material: 'Oak veneer',
      Dimensions: 'W80×D35×H120 cm',
      Weight: '28 kg',
      Pairs: '~12',
      Doors: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, 2 doors',
      zh: '橡木贴皮，两门'
    },
    dimensions: 'W80×D35×H120 cm',
    weight: '28 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 439,
    name: {
      en: 'Tiered Shoe Tower',
      zh: '层叠鞋塔'
    },
    category: 'Storage',
    subcategory: {
      en: 'Shoe Racks',
      zh: '鞋架'
    },
    price: 89,
    originalPrice: 105,
    discount: 15,
    rating: 3.9,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord439x0/600/600', 'https://picsum.photos/seed/nord439x1/600/600'],
    badges: ['Sale'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'The Tiered Shoe Tower rotates 360° for easy access to every pair—a space-saving Nordic solution that holds 8 pairs in a minimal floor footprint.',
      zh: '层叠鞋塔可360°旋转方便取用每双鞋，是在最小地面占地面积内存放8双鞋的节省空间北欧解决方案。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W30×D55×H100 cm',
      Weight: '5 kg',
      Pairs: '~8',
      Rotating: '360°',
      Assembly: 'Required'
    },
    material: {
      en: 'Steel, rotating',
      zh: '钢制，旋转'
    },
    dimensions: 'W30×D55×H100 cm',
    weight: '5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 440,
    name: {
      en: 'Peg Rail Long',
      zh: '长挂钩条'
    },
    category: 'Storage',
    subcategory: {
      en: 'Coat Racks',
      zh: '衣帽架'
    },
    price: 69,
    originalPrice: 69,
    discount: 0,
    rating: 4.0,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord440x0/600/600', 'https://picsum.photos/seed/nord440x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Long Peg Rail is a Nordic hallway classic—six solid oak Shaker-inspired pegs on a wall-mounted oak rail that creates a beautiful and highly functional entrance display.',
      zh: '长挂钩条是北欧走廊经典，六个受震颤派启发的实心橡木木钉安装于橡木壁挂条上，创造美观且高度功能性的入口展示。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W120×D8×H10 cm',
      Weight: '0.8 kg',
      Pegs: '6',
      Length: '120 cm',
      Mount: 'Wall (hardware included)'
    },
    material: {
      en: 'Solid oak rail, 6 pegs',
      zh: '实心橡木条，六个木钉'
    },
    dimensions: 'W120×D8×H10 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 441,
    name: {
      en: 'Umbrella Stand',
      zh: '雨伞架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Coat Racks',
      zh: '衣帽架'
    },
    price: 59,
    originalPrice: 65,
    discount: 10,
    rating: 4.1,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord441x0/600/600', 'https://picsum.photos/seed/nord441x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'A sleek Nordic umbrella stand in powder-coated steel with an integrated drip tray to keep the hallway floor dry. Slim enough to fit beside any door without obstruction.',
      zh: '粉末涂层钢制简洁北欧雨伞架，配集成接水盘保持走廊地板干燥，足够纤薄可放置于任何门旁而不阻碍通行。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'Ø20×H50 cm',
      Weight: '1.5 kg',
      "Drip tray": 'Removable',
      Capacity: '6-8 umbrellas',
      Assembly: 'No'
    },
    material: {
      en: 'Powder-coated steel, drip tray',
      zh: '粉末涂层钢，接水盘'
    },
    dimensions: 'Ø20×H50 cm',
    weight: '1.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 442,
    name: {
      en: 'Laundry Hamper',
      zh: '脏衣篓'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 4.2,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord442x0/600/600', 'https://picsum.photos/seed/nord442x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'The Laundry Hamper keeps the bedroom tidy with its tall woven rattan body and lift-off lid—a Nordic alternative to the plastic laundry basket that looks beautiful on display.',
      zh: '脏衣篓以其高大的编织藤编身体和揭盖保持卧室整洁，是可美观展示的北欧替代塑料洗衣篮方案。'
    },
    specs: {
      Material: 'Rattan',
      Dimensions: 'Ø40×H60 cm',
      Weight: '1 kg',
      Lid: 'Yes (removable)',
      Capacity: '60 L',
      Use: 'Laundry / storage'
    },
    material: {
      en: 'Woven rattan, lid',
      zh: '编织藤编，带盖'
    },
    dimensions: 'Ø40×H60 cm',
    weight: '1 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 443,
    name: {
      en: 'Market Tote Basket',
      zh: '市场购物篮'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 35,
    originalPrice: 35,
    discount: 0,
    rating: 4.3,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord443x0/600/600', 'https://picsum.photos/seed/nord443x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'A Nordic market basket in hand-woven seagrass with leather handles—equally at home on a kitchen shelf, beside a sofa, or on a bicycle to the weekend market.',
      zh: '手工编织海草配皮革把手的北欧市场购物篮，同样适合放在厨房架、沙发旁或骑车去周末市场。'
    },
    specs: {
      Material: 'Seagrass + leather handles',
      Dimensions: 'W40×D20×H35 cm',
      Weight: '0.5 kg',
      Handles: 'Yes',
      Size: 'Medium',
      Handwoven: 'Yes'
    },
    material: {
      en: 'Woven seagrass, leather handle',
      zh: '编织海草，皮革把手'
    },
    dimensions: 'W40×D20×H35 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 444,
    name: {
      en: 'Lid Box Stacking Set',
      zh: '叠放储物盒套装'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 79,
    originalPrice: 130,
    discount: 40,
    rating: 4.4,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord444x0/600/600', 'https://picsum.photos/seed/nord444x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'Three nesting birch plywood boxes with lids—a Nordic office and bedroom organisation system that stacks neatly to save space while looking beautiful on a shelf.',
      zh: '三件相互嵌套的带盖桦木夹板盒，是北欧办公室和卧室整理系统，可整洁叠放节省空间，同时在搁架上美观展示。'
    },
    specs: {
      Material: 'Birch ply',
      Dimensions: 'varied',
      Weight: '1.5 kg',
      Set: '3 sizes (S/M/L)',
      Lids: 'Yes',
      Stackable: 'Yes'
    },
    material: {
      en: 'Set of 3 birch ply boxes',
      zh: '三件套桦木板盒'
    },
    dimensions: 'varied',
    weight: '1.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 445,
    name: {
      en: 'Under-Bed Storage',
      zh: '床下储物盒'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 65,
    originalPrice: 65,
    discount: 0,
    rating: 4.5,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord445x0/600/600', 'https://picsum.photos/seed/nord445x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Under-Bed Storage box maximises unused space below a Nordic bed frame. Its low profile, cotton canvas construction, and dual zipper closure make it both functional and beautiful.',
      zh: '床下储物盒最大化北欧床架下未使用的空间，低矮的轮廓、棉帆布构造和双拉链封口兼具实用与美观。'
    },
    specs: {
      Material: 'Cotton canvas',
      Dimensions: 'W60×D40×H18 cm',
      Weight: '1.5 kg',
      Height: '18 cm',
      Zipper: 'Dual zipper',
      Handles: 'Yes'
    },
    material: {
      en: 'Cotton canvas, low profile',
      zh: '棉帆布，低矮'
    },
    dimensions: 'W60×D40×H18 cm',
    weight: '1.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 446,
    name: {
      en: 'Brass Numbered Hook',
      zh: '黄铜编号挂钩'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 25,
    originalPrice: 25,
    discount: 0,
    rating: 4.6,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord446x0/600/600', 'https://picsum.photos/seed/nord446x1/600/600'],
    badges: ['Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'A single solid brass hook engraved with a number 1-9—a Nordic design detail that turns simple hooks into a graphic wall element. Collect multiples for a numbered hook rail.',
      zh: '刻有1-9号码的单个实心黄铜挂钩，是将简单挂钩转化为图形墙壁元素的北欧设计细节，收集多个打造编号挂钩条。'
    },
    specs: {
      Material: 'Solid brass',
      Dimensions: 'W5×D8×H12 cm',
      Weight: '0.15 kg',
      Numbered: '1-9 available',
      Load: '5 kg',
      Mounting: '1 screw'
    },
    material: {
      en: 'Solid brass, numbered',
      zh: '实心黄铜，编号'
    },
    dimensions: 'W5×D8×H12 cm',
    weight: '0.15 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 447,
    name: {
      en: 'Magnetic Key Rail',
      zh: '磁性钥匙条'
    },
    category: 'Storage',
    subcategory: {
      en: 'Key Holders',
      zh: '钥匙挂架'
    },
    price: 29,
    originalPrice: 35,
    discount: 20,
    rating: 4.7,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord447x0/600/600', 'https://picsum.photos/seed/nord447x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'The Magnetic Key Rail holds keys on five strong neodymium magnets embedded in a solid oak strip—a minimal Nordic approach to hallway organisation.',
      zh: '磁性钥匙条以嵌入实心橡木条的五个强力钕铁硼磁铁固定钥匙，是走廊整理的极简北欧方式。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W20×D3×H5 cm',
      Weight: '0.2 kg',
      Magnets: '5 neodymium',
      Mount: 'Wall (adhesive or screw)',
      Length: '20 cm'
    },
    material: {
      en: 'Solid oak, 5 magnets',
      zh: '实心橡木，五磁铁'
    },
    dimensions: 'W20×D3×H5 cm',
    weight: '0.2 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 448,
    name: {
      en: 'Over Toilet Cabinet',
      zh: '马桶上方储物柜'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 4.8,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord448x0/600/600', 'https://picsum.photos/seed/nord448x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Over Toilet Cabinet transforms wasted space above the toilet into useful Nordic storage. Two adjustable shelves behind a mirrored door organise bathroom essentials with Scandinavian efficiency.',
      zh: '马桶上方储物柜将马桶上方浪费的空间变成有用的北欧储物，镜面门后的两个可调节搁板以斯堪的纳维亚效率整理浴室必需品。'
    },
    specs: {
      Material: 'MDF',
      Dimensions: 'W60×D20×H80 cm',
      Weight: '14 kg',
      Door: 'Mirrored',
      Shelves: '2 adjustable',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, 2 shelves',
      zh: 'MDF，两层搁板'
    },
    dimensions: 'W60×D20×H80 cm',
    weight: '14 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 449,
    name: {
      en: 'Bamboo Bathroom Organiser',
      zh: '竹制浴室整理架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.9,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord449x0/600/600', 'https://picsum.photos/seed/nord449x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'The Bamboo Bathroom Organiser sits on a countertop or shelf to bring Nordic order to skincare routines and bathroom essentials. Naturally moisture-resistant bamboo suits wet environments.',
      zh: '竹制浴室整理架放置于台面或搁架上，为护肤程序和浴室必需品带来北欧秩序，天然抗湿竹材适合潮湿环境。'
    },
    specs: {
      Material: 'Solid bamboo',
      Dimensions: 'W30×D10×H40 cm',
      Weight: '0.6 kg',
      Tiers: '3',
      Width: '30 cm',
      "Moisture resistant": 'Yes'
    },
    material: {
      en: 'Solid bamboo, 3 tiers',
      zh: '实心竹，三层'
    },
    dimensions: 'W30×D10×H40 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 450,
    name: {
      en: 'Pull-Out Shoe Drawer',
      zh: '拉出式鞋抽屉'
    },
    category: 'Storage',
    subcategory: {
      en: 'Shoe Racks',
      zh: '鞋架'
    },
    price: 139,
    originalPrice: 139,
    discount: 0,
    rating: 5.0,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord450x0/600/600', 'https://picsum.photos/seed/nord450x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'The Pull-Out Shoe Drawer fits neatly under a hallway bench or console table—two pull-out trays each hold 4 pairs of shoes and slide smoothly on metal runners.',
      zh: '拉出式鞋抽屉整洁地放置于走廊长凳或控制台桌下，两个拉出托盘各可放4双鞋，在金属滑轨上顺滑滑动。'
    },
    specs: {
      Material: 'Oak veneer',
      Dimensions: 'W80×D30×H50 cm',
      Weight: '10 kg',
      Trays: '2 pull-out',
      "Pairs capacity": '~8',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, pull-out trays',
      zh: '橡木贴皮，拉出托盘'
    },
    dimensions: 'W80×D30×H50 cm',
    weight: '10 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 451,
    name: {
      en: 'Kids Coat Rack',
      zh: '儿童衣帽架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Coat Racks',
      zh: '衣帽架'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 3.5,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord451x0/600/600', 'https://picsum.photos/seed/nord451x1/600/600'],
    badges: [],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'Designed for small Nordic coat-hangers—the Kids Coat Rack has hooks at child height so little ones can hang their own coats and bags independently from early on.',
      zh: '专为小型北欧挂钩设计，儿童衣帽架有儿童高度的挂钩，让小朋友从小就能独立挂自己的外套和包袋。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W60×D25×H120 cm',
      Weight: '5 kg',
      "Hook height": '80-110 cm',
      Hooks: '4',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid pine, low hooks',
      zh: '实心松木，低挂钩'
    },
    dimensions: 'W60×D25×H120 cm',
    weight: '5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 452,
    name: {
      en: 'Rustic Antler Hooks',
      zh: '质朴鹿角挂钩'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 65,
    originalPrice: 65,
    discount: 0,
    rating: 3.7,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord452x0/600/600', 'https://picsum.photos/seed/nord452x1/600/600'],
    badges: ['New'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Rustic Antler Hook set is a Nordic cabin essential—cast iron in the shape of natural antler branches, with four hooks that hold coats, hats, and scarves with character.',
      zh: '质朴鹿角挂钩套装是北欧小屋必备，铸铁塑造天然鹿角枝条形状，四个挂钩以有个性的方式悬挂外套、帽子和围巾。'
    },
    specs: {
      Material: 'Cast iron',
      Dimensions: 'W50×D10×H20 cm',
      Weight: '0.6 kg',
      Hooks: '4',
      Style: 'Rustic antler',
      Mounting: '3 screws'
    },
    material: {
      en: 'Cast iron antler, 4 hooks',
      zh: '铸铁鹿角，四挂钩'
    },
    dimensions: 'W50×D10×H20 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 453,
    name: {
      en: 'Newspaper Basket',
      zh: '报纸篮'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 3.8,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord453x0/600/600', 'https://picsum.photos/seed/nord453x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'A Nordic living room essential—the Newspaper Basket holds papers, remote controls, and small items in a tightly woven paper rope construction that is both light and sturdy.',
      zh: '北欧客厅必备，报纸篮以紧密编织纸绳构造存放报纸、遥控器和小物品，轻盈且坚固。'
    },
    specs: {
      Material: 'Paper rope',
      Dimensions: 'W30×D30×H40 cm',
      Weight: '0.5 kg',
      Size: '30×30×40 cm',
      Handles: 'Yes',
      Scandinavian: 'Yes'
    },
    material: {
      en: 'Woven paper rope',
      zh: '编织纸绳'
    },
    dimensions: 'W30×D30×H40 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 454,
    name: {
      en: 'Toy Storage Basket',
      zh: '玩具储物篮'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 55,
    originalPrice: 55,
    discount: 0,
    rating: 3.9,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord454x0/600/600', 'https://picsum.photos/seed/nord454x1/600/600'],
    badges: ['Sale'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Toy Storage Basket is a Nordic nursery essential—a collapsible cotton canvas bin that keeps children\'s rooms tidy and folds flat when not in use.',
      zh: '玩具储物篮是北欧婴儿房必备，可折叠棉帆布桶保持儿童房整洁，不用时可平折。'
    },
    specs: {
      Material: 'Cotton canvas',
      Dimensions: 'W45×D35×H35 cm',
      Weight: '0.8 kg',
      Collapsible: 'Yes',
      Handles: 'Yes',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Cotton canvas, toy storage',
      zh: '棉帆布，玩具储物'
    },
    dimensions: 'W45×D35×H35 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 455,
    name: {
      en: 'Rattan Storage Box',
      zh: '藤编储物盒'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.0,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord455x0/600/600', 'https://picsum.photos/seed/nord455x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'The Rattan Storage Box is a Nordic living room essential—hand-woven rattan with a hinged lid conceals remote controls, cables, and small clutter in organic Nordic style.',
      zh: '藤编储物盒是北欧客厅必备，带铰链盖的手工藤编以有机北欧风格遮藏遥控器、电缆和小杂物。'
    },
    specs: {
      Material: 'Natural rattan',
      Dimensions: 'W35×D25×H25 cm',
      Weight: '0.6 kg',
      Lid: 'Hinged',
      Size: '35×25×25 cm',
      Handwoven: 'Yes'
    },
    material: {
      en: 'Rattan weave, hinged lid',
      zh: '藤编，铰链盖'
    },
    dimensions: 'W35×D25×H25 cm',
    weight: '0.6 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 456,
    name: {
      en: 'Leather Box',
      zh: '皮革盒'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 79,
    originalPrice: 90,
    discount: 10,
    rating: 4.1,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord456x0/600/600', 'https://picsum.photos/seed/nord456x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'A genuine leather storage box with a fitted lid—a Nordic luxury desk accessory for storing cufflinks, cards, jewellery, or any small precious objects in style.',
      zh: '带配合盖的真皮储物盒，是以风格存放袖扣、卡片、珠宝或任何小贵重物品的北欧奢华桌面配件。'
    },
    specs: {
      Material: 'Genuine leather',
      Dimensions: 'W30×D20×H15 cm',
      Weight: '0.5 kg',
      Lid: 'Fitted snap closure',
      Size: '30×20×15 cm',
      Use: 'Desk/jewellery'
    },
    material: {
      en: 'Genuine leather, gift box style',
      zh: '真皮，礼盒风格'
    },
    dimensions: 'W30×D20×H15 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 457,
    name: {
      en: 'Minimalist Wall Rail',
      zh: '极简壁轨'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 4.2,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord457x0/600/600', 'https://picsum.photos/seed/nord457x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Minimalist Wall Rail is a long Shaker-inspired peg rail in solid oak that can be installed in hallways, kitchens, or bathrooms. Eight hooks at equal spacing provide generous hanging capacity.',
      zh: '极简壁轨是实心橡木长款受震颤派启发的挂钩条，可安装于走廊、厨房或浴室，八个等距挂钩提供宽裕的悬挂容量。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W100×D5×H10 cm',
      Weight: '0.8 kg',
      Length: '100 cm',
      Hooks: '8',
      Mount: 'Wall screws'
    },
    material: {
      en: 'Solid oak, 8 hooks',
      zh: '实心橡木，八挂钩'
    },
    dimensions: 'W100×D5×H10 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 458,
    name: {
      en: 'Ceramic Knob Hook',
      zh: '陶瓷旋钮挂钩'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 22,
    originalPrice: 25,
    discount: 15,
    rating: 4.3,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord458x0/600/600', 'https://picsum.photos/seed/nord458x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'A single Nordic-style ceramic knob hook for walls, kitchens, and bathrooms—hand-glazed in Nordic earth tones with a polished brass screw fitting. Collect multiples for a wall display.',
      zh: '墙壁、厨房和浴室用的单个北欧风格陶瓷旋钮挂钩，以北欧大地色调手工上釉配抛光黄铜螺丝配件，收集多个打造墙面展示。'
    },
    specs: {
      Material: 'Ceramic + brass',
      Dimensions: 'W5×D8×H8 cm',
      Weight: '0.15 kg',
      Glaze: 'Nordic earth tones',
      Load: '3 kg',
      Handglazed: 'Yes'
    },
    material: {
      en: 'Ceramic knob, brass screw',
      zh: '陶瓷旋钮，黄铜螺丝'
    },
    dimensions: 'W5×D8×H8 cm',
    weight: '0.15 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 459,
    name: {
      en: 'Teak Shower Shelf',
      zh: '柚木淋浴架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 4.4,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord459x0/600/600', 'https://picsum.photos/seed/nord459x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Teak Shower Shelf mounts in a shower or bathroom corner, holding shampoos, soaps, and razors. FSC teak is naturally water-resistant and improves with age in wet environments.',
      zh: '柚木淋浴架安装于淋浴或浴室角落，存放洗发水、肥皂和剃须刀，FSC柚木天然抗水，在潮湿环境中随时间愈发美观。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W25×D10×H60 cm',
      Weight: '1.5 kg',
      Mount: 'Corner (suction or drill)',
      Drainage: 'Slotted',
      "IP rating": 'Bathroom safe'
    },
    material: {
      en: 'FSC teak, corner shelf',
      zh: 'FSC柚木，转角架'
    },
    dimensions: 'W25×D10×H60 cm',
    weight: '1.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 460,
    name: {
      en: 'Mirror Cabinet Bathroom',
      zh: '浴室镜柜'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 199,
    originalPrice: 250,
    discount: 20,
    rating: 4.5,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord460x0/600/600', 'https://picsum.photos/seed/nord460x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'The Mirror Cabinet Bathroom doubles as a mirror and storage cabinet—medicine, toiletries, and small items behind the mirror keep the bathroom surface clean in Nordic style.',
      zh: '浴室镜柜兼作镜子和储物柜，镜子后的药品、盥洗用品和小物品以北欧风格保持浴室桌面整洁。'
    },
    specs: {
      Material: 'MDF',
      Dimensions: 'W60×D14×H70 cm',
      Weight: '18 kg',
      Mirror: 'Front door',
      Shelves: '2',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, mirror front, 2 shelves',
      zh: 'MDF，镜面前板，两层搁板'
    },
    dimensions: 'W60×D14×H70 cm',
    weight: '18 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 461,
    name: {
      en: 'Freestanding Towel Rail',
      zh: '独立毛巾架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.6,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord461x0/600/600', 'https://picsum.photos/seed/nord461x1/600/600'],
    badges: ['Limited'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'The Freestanding Towel Rail holds three towels on solid bamboo rails without any wall mounting—perfect for Nordic bathrooms where you want flexible positioning.',
      zh: '独立毛巾架在实心竹横杆上悬挂三条毛巾，无需任何墙壁安装，非常适合需要灵活定位的北欧浴室。'
    },
    specs: {
      Material: 'Solid bamboo',
      Dimensions: 'W45×D25×H90 cm',
      Weight: '2.5 kg',
      Rails: '3',
      Freestanding: 'Yes',
      Base: 'Anti-slip pads'
    },
    material: {
      en: 'Solid bamboo, 3 rails',
      zh: '实心竹，三横杆'
    },
    dimensions: 'W45×D25×H90 cm',
    weight: '2.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 462,
    name: {
      en: 'Entry Organiser Cabinet',
      zh: '入口整理柜'
    },
    category: 'Storage',
    subcategory: {
      en: 'Shoe Racks',
      zh: '鞋架'
    },
    price: 349,
    originalPrice: 349,
    discount: 0,
    rating: 4.7,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord462x0/600/600', 'https://picsum.photos/seed/nord462x1/600/600'],
    badges: [],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'The Entry Organiser Cabinet provides complete hallway storage in a slim full-height cabinet—shoe storage below, coat hanging in the middle, and shelf space at the top for bags and hats.',
      zh: '入口整理柜在纤薄的全高柜子中提供完整的走廊储物，下方鞋柜、中间挂衣、顶部搁板放包袋和帽子。'
    },
    specs: {
      Material: 'Oak veneer',
      Dimensions: 'W80×D35×H180 cm',
      Weight: '38 kg',
      Sections: 'Shoes + hanging + shelf',
      Height: '180 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'Oak veneer, full-height',
      zh: '橡木贴皮，全高'
    },
    dimensions: 'W80×D35×H180 cm',
    weight: '38 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 463,
    name: {
      en: 'Pegboard System',
      zh: '钉板系统'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 129,
    originalPrice: 170,
    discount: 25,
    rating: 4.8,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord463x0/600/600', 'https://picsum.photos/seed/nord463x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'The Nordic Pegboard System is a flexible wall organisation tool—a steel pegboard with a set of hooks, shelves, and brackets that can be rearranged to meet changing storage needs.',
      zh: '北欧钉板系统是灵活的墙面组织工具，钢制钉板配一套挂钩、搁板和支架，可重新排列以满足不断变化的储物需求。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W60×H80 cm',
      Weight: '2 kg',
      Accessories: 'Hooks + shelves + brackets',
      Size: '60×80 cm',
      Flexible: 'Yes'
    },
    material: {
      en: 'Powder-coated steel pegboard',
      zh: '粉末涂层钢钉板'
    },
    dimensions: 'W60×H80 cm',
    weight: '2 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 464,
    name: {
      en: 'Wardrobe Organiser Set',
      zh: '衣柜整理套装'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 99,
    originalPrice: 99,
    discount: 0,
    rating: 4.9,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord464x0/600/600', 'https://picsum.photos/seed/nord464x1/600/600'],
    badges: ['New'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'Eight felt organisers—drawer dividers, tie boxes, and shelf compartments—designed to bring Nordic order to any wardrobe interior. The soft grey felt complements any wood interior.',
      zh: '八件毛毡整理件，抽屉分格、领带盒和搁架分格，设计为为任何衣柜内部带来北欧秩序，柔软的灰色毛毡与任何木质内部相配。'
    },
    specs: {
      Material: 'Felt',
      Dimensions: 'Various',
      Weight: '2 kg',
      Set: '8 pieces',
      Colors: 'Nordic grey',
      Use: 'Wardrobe interior'
    },
    material: {
      en: 'Felt organiser set, 8 pieces',
      zh: '毛毡整理套装，八件'
    },
    dimensions: 'Various',
    weight: '2 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 465,
    name: {
      en: 'Double Hook Rail',
      zh: '双钩条'
    },
    category: 'Storage',
    subcategory: {
      en: 'Coat Racks',
      zh: '衣帽架'
    },
    price: 55,
    originalPrice: 80,
    discount: 30,
    rating: 5.0,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord465x0/600/600', 'https://picsum.photos/seed/nord465x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'Double hooks rather than single—the Nordic Double Hook Rail accommodates coats plus a bag or scarf on each hook position, doubling the hanging capacity of a standard rail.',
      zh: '双钩而非单钩，北欧双钩条在每个挂钩位置容纳外套加包袋或围巾，将标准挂钩条的悬挂容量翻倍。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W60×D8×H8 cm',
      Weight: '0.4 kg',
      Hooks: '4 (double-height)',
      Length: '60 cm',
      Mount: 'Wall screws'
    },
    material: {
      en: 'Solid pine, double peg',
      zh: '实心松木，双钩'
    },
    dimensions: 'W60×D8×H8 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 466,
    name: {
      en: 'Bathroom Vanity Organiser',
      zh: '浴室梳妆台整理架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 65,
    originalPrice: 65,
    discount: 0,
    rating: 3.5,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord466x0/600/600', 'https://picsum.photos/seed/nord466x1/600/600'],
    badges: [],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The clear acrylic Bathroom Vanity Organiser brings Nordic clarity to the countertop—visible storage for skincare products, brushes, and cotton items with clean geometric compartments.',
      zh: '透明亚克力浴室梳妆台整理架为台面带来北欧通透感，干净的几何格子为护肤品、刷子和棉质物品提供可见储物。'
    },
    specs: {
      Material: 'Clear acrylic',
      Dimensions: 'W35×D15×H30 cm',
      Weight: '0.5 kg',
      Compartments: 'Multiple',
      Countertop: 'Yes',
      Washable: 'Yes'
    },
    material: {
      en: 'Acrylic, countertop organiser',
      zh: '亚克力，台面整理'
    },
    dimensions: 'W35×D15×H30 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 467,
    name: {
      en: 'Laundry Sorter 3-Bag',
      zh: '三格分类洗衣架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 89,
    originalPrice: 89,
    discount: 0,
    rating: 3.7,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord467x0/600/600', 'https://picsum.photos/seed/nord467x1/600/600'],
    badges: ['New'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Laundry Sorter makes pre-sorting laundry simple—three removable canvas bags on a bamboo frame sort whites, colours, and delicates in true Nordic organised fashion.',
      zh: '三格分类洗衣架使预分类洗衣变得简单，竹框架上的三个可拆卸帆布袋以真正的北欧整洁方式分类白色、彩色和精细衣物。'
    },
    specs: {
      Material: 'Canvas bags, bamboo frame',
      Dimensions: 'W75×D35×H100 cm',
      Weight: '4 kg',
      Frame: 'Bamboo',
      Bags: '3 removable canvas',
      Sort: '3 categories',
      Assembly: 'Required'
    },
    material: {
      en: 'Canvas bags, bamboo frame',
      zh: '帆布袋，竹框架'
    },
    dimensions: 'W75×D35×H100 cm',
    weight: '4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 468,
    name: {
      en: 'Sliding Door Wardrobe',
      zh: '推拉门衣柜'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wardrobes',
      zh: '衣柜'
    },
    price: 2199,
    originalPrice: 2199,
    discount: 0,
    rating: 3.8,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord468x0/600/600', 'https://picsum.photos/seed/nord468x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'This floor-to-ceiling sliding door wardrobe maximises a bedroom wall with four large mirror panels that make the room appear twice as large—a Nordic space-transformation solution.',
      zh: '这款地到天花板推拉门衣柜以四块大镜面板最大化卧室墙面，使房间看起来两倍大，是北欧空间改造解决方案。'
    },
    specs: {
      Material: 'MDF',
      Dimensions: 'W300×D65×H230 cm',
      Weight: '150 kg',
      Doors: '4 mirror sliding',
      Height: '230 cm (floor-to-ceiling)',
      Assembly: 'Required'
    },
    material: {
      en: 'MDF, 4-panel mirror sliding',
      zh: 'MDF，四板镜面推拉'
    },
    dimensions: 'W300×D65×H230 cm',
    weight: '150 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 469,
    name: {
      en: 'Wooden Crate Storage',
      zh: '木箱储物'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 35,
    originalPrice: 40,
    discount: 15,
    rating: 3.9,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord469x0/600/600', 'https://picsum.photos/seed/nord469x1/600/600'],
    badges: ['Sale'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'Simple solid pine crates stacked or arranged individually—a Nordic farmhouse storage and display solution that works in kitchens, living rooms, or children\'s rooms.',
      zh: '简单的实心松木箱可叠放或单独排列，适合厨房、客厅或儿童房的北欧农舍储物和展示解决方案。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'W30×D20×H15 cm',
      Weight: '0.8 kg',
      Size: '30×20×15 cm',
      Stackable: 'Yes',
      Use: 'Storage + display'
    },
    material: {
      en: 'Solid pine crate',
      zh: '实心松木箱'
    },
    dimensions: 'W30×D20×H15 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 470,
    name: {
      en: 'Over-Door Organiser',
      zh: '门后整理架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 39,
    originalPrice: 39,
    discount: 0,
    rating: 4.0,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord470x0/600/600', 'https://picsum.photos/seed/nord470x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'The Over-Door Organiser hangs over any standard door without drilling—four hooks provide easy access storage for coats, bags, and accessories in a Nordic minimal steel design.',
      zh: '门后整理架无需钻孔挂于任何标准门上，四个挂钩以北欧极简钢铁设计为外套、包袋和配件提供便捷储物。'
    },
    specs: {
      Material: 'Powder-coated steel',
      Dimensions: 'W35×D8×H60 cm',
      Weight: '1 kg',
      Hooks: '4',
      "No drill": 'Yes',
      Load: '15 kg per hook'
    },
    material: {
      en: 'Steel, over-door hooks',
      zh: '钢制，门后挂钩'
    },
    dimensions: 'W35×D8×H60 cm',
    weight: '1 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 471,
    name: {
      en: 'Rope Hanging Shelf',
      zh: '绳挂搁板'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bookcases',
      zh: '书柜'
    },
    price: 89,
    originalPrice: 100,
    discount: 10,
    rating: 4.1,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord471x0/600/600', 'https://picsum.photos/seed/nord471x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Rope Hanging Shelf suspends from the ceiling on four hemp ropes—a Nordic-boho display shelf that floats gracefully with any gentle movement, adding life to the room.',
      zh: '绳挂搁板以四根麻绳从天花板悬挂，是随任何轻微动作优雅漂浮、为房间增添生气的北欧波西米亚展示架。'
    },
    specs: {
      Material: 'Solid pine + hemp',
      Dimensions: 'W60×D20×H50 cm',
      Weight: '3 kg',
      Ropes: '4',
      Hanging: 'Ceiling mount',
      Shelves: '2'
    },
    material: {
      en: 'Solid pine, hemp rope',
      zh: '实心松木，麻绳'
    },
    dimensions: 'W60×D20×H50 cm',
    weight: '3 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 472,
    name: {
      en: 'Felt Drawer Dividers',
      zh: '毛毡抽屉分格'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 25,
    originalPrice: 25,
    discount: 0,
    rating: 4.2,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord472x0/600/600', 'https://picsum.photos/seed/nord472x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'Adjustable felt drawer dividers in Nordic grey—a simple Scandinavian solution for keeping desk and bedroom drawers organised without damaging the wood surfaces.',
      zh: '可调节北欧灰色毛毡抽屉分格，是保持桌面和卧室抽屉整洁而不损坏木质表面的简单斯堪的纳维亚解决方案。'
    },
    specs: {
      Material: 'Felt',
      Dimensions: 'Adjustable',
      Weight: '0.2 kg',
      Adjustable: 'Yes',
      Color: 'Nordic grey',
      Drawers: 'For most standard drawers'
    },
    material: {
      en: 'Felt drawer organiser set',
      zh: '毛毡抽屉整理套装'
    },
    dimensions: 'Adjustable',
    weight: '0.2 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 473,
    name: {
      en: 'Decorative Hooks Set',
      zh: '装饰挂钩套装'
    },
    category: 'Storage',
    subcategory: {
      en: 'Wall Hooks',
      zh: '壁钩'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.3,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord473x0/600/600', 'https://picsum.photos/seed/nord473x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'Four brushed-gold Nordic wall hooks sold as a set—elegant enough to display jewellery and scarves, strong enough to hold winter coats.',
      zh: '四件套拉丝金北欧壁钩套装，足够优雅展示珠宝和围巾，足够坚固悬挂冬季外套。'
    },
    specs: {
      Material: 'Brushed gold steel',
      Dimensions: 'W6×D8×H12 cm each',
      Weight: '0.4 kg',
      Set: '4 hooks',
      Load: '5 kg each',
      Finish: 'Brushed gold'
    },
    material: {
      en: 'Set of 4 gold hooks',
      zh: '四件套金色挂钩'
    },
    dimensions: 'W6×D8×H12 cm each',
    weight: '0.4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 474,
    name: {
      en: 'Stair Basket Storage',
      zh: '楼梯储物篮'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 65,
    originalPrice: 110,
    discount: 40,
    rating: 4.4,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord474x0/600/600', 'https://picsum.photos/seed/nord474x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'The Stair Basket is designed for Nordic homes with stairs—a flat-base basket that sits securely on stair treads to collect items needing to go up or down.',
      zh: '楼梯篮专为有楼梯的北欧家居设计，平底篮安全放置于楼梯踏板上，收集需要上下楼的物品。'
    },
    specs: {
      Material: 'Natural seagrass',
      Dimensions: 'W35×D25×H20 cm',
      Weight: '0.7 kg',
      Base: 'Flat (stair-safe)',
      Handle: 'Yes',
      Size: 'Medium'
    },
    material: {
      en: 'Natural seagrass stair basket',
      zh: '天然海草楼梯篮'
    },
    dimensions: 'W35×D25×H20 cm',
    weight: '0.7 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 475,
    name: {
      en: 'Key Board Organiser',
      zh: '钥匙板整理架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Key Holders',
      zh: '钥匙挂架'
    },
    price: 49,
    originalPrice: 49,
    discount: 0,
    rating: 4.5,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord475x0/600/600', 'https://picsum.photos/seed/nord475x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-4 weeks',
    brand: 'Ljus Home',
    description: {
      en: 'The Key Board Organiser combines a row of oak pegs with a magnetic tray for mail and a small shelf for sunglasses—the complete Nordic hallway organisation solution.',
      zh: '钥匙板整理架将一排橡木钉与邮件磁性托盘和太阳镜小搁板结合，是完整的北欧走廊组织解决方案。'
    },
    specs: {
      Material: 'Solid oak',
      Dimensions: 'W30×D8×H25 cm',
      Weight: '0.5 kg',
      Features: 'Pegs + magnetic tray + shelf',
      Mount: 'Wall screws',
      Assembly: 'No'
    },
    material: {
      en: 'Oak board, magnetic tray',
      zh: '橡木板，磁性托盘'
    },
    dimensions: 'W30×D8×H25 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 476,
    name: {
      en: 'Plinth Coffee Table',
      zh: '台基咖啡桌'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Coffee Tables',
      zh: '咖啡桌'
    },
    price: 449,
    originalPrice: 449,
    discount: 0,
    rating: 4.6,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1615529182904-14819c35db37?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord476x0/600/600', 'https://picsum.photos/seed/nord476x1/600/600'],
    badges: ['Limited'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: 'In stock',
    brand: 'Fröja',
    description: {
      en: 'A sculptural Nordic statement—a solid concrete plinth top in natural grey on a minimal powder-coated steel frame, creating an elemental focal point in any living room.',
      zh: '雕塑感北欧宣言，天然灰色实心混凝土台基桌面立于极简粉末涂层钢框架上，在任何客厅创造元素级视觉焦点。'
    },
    specs: {
      Material: 'Solid concrete plinth top, steel',
      Dimensions: 'W90×D90×H38 cm',
      Weight: '28 kg',
      Top: 'Cast concrete',
      Frame: 'Powder-coated steel',
      Shape: 'Square'
    },
    material: {
      en: 'Solid concrete plinth top, steel',
      zh: '实心混凝土台基桌面，钢'
    },
    dimensions: 'W90×D90×H38 cm',
    weight: '28 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 477,
    name: {
      en: 'Linen Tufted Sofa',
      zh: '亚麻钮扣沙发'
    },
    category: 'Living Room',
    subcategory: {
      en: 'Sofas',
      zh: '沙发'
    },
    price: 1699,
    originalPrice: 2125,
    discount: 20,
    rating: 4.7,
    reviewCount: 12,
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1506439773649-6e0eb8cfb237?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord477x0/600/600', 'https://picsum.photos/seed/nord477x1/600/600'],
    badges: [],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: 'Ships in 3 days',
    brand: 'Åland Living',
    description: {
      en: 'Deep tufting in natural linen brings a heritage Nordic quality to this three-seater sofa. Solid oak legs complete a piece that honours the tradition of quality Scandinavian furniture making.',
      zh: '天然亚麻深度钮扣为这款三人沙发带来传统北欧品质，实心橡木腿完成一件尊重高品质斯堪的纳维亚家具制造传统的作品。'
    },
    specs: {
      Material: 'Tufted linen, solid oak',
      Dimensions: 'W200×D88×H80 cm',
      Weight: '48 kg',
      Upholstery: 'Tufted linen',
      Legs: 'Solid oak',
      Tufting: 'Deep button',
      Assembly: 'Required'
    },
    material: {
      en: 'Tufted linen, solid oak',
      zh: '钮扣亚麻，实心橡木'
    },
    dimensions: 'W200×D88×H80 cm',
    weight: '48 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 478,
    name: {
      en: 'Quilted Headboard Bed',
      zh: '绗缝床头板床'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Bed Frames',
      zh: '床架'
    },
    price: 1249,
    originalPrice: 1249,
    discount: 0,
    rating: 4.8,
    reviewCount: 34,
    image: 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord478x0/600/600', 'https://picsum.photos/seed/nord478x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'Next day',
    brand: 'Tvist Studio',
    description: {
      en: 'The Quilted Headboard Bed\'s diamond-quilted velvet headboard brings Nordic luxury hotel aesthetics to the bedroom—a sumptuous backdrop for morning reading and evening relaxation.',
      zh: '绗缝床头板床的菱形绗缝丝绒床头板将北欧豪华酒店美学带入卧室，是晨间阅读和傍晚放松的奢华背景。'
    },
    specs: {
      Material: 'Quilted velvet headboard, beech',
      Dimensions: 'W160×L200×H100 cm',
      Weight: '62 kg',
      Headboard: 'Quilted velvet',
      Frame: 'Solid beech',
      Pattern: 'Diamond quilt',
      Assembly: 'Required'
    },
    material: {
      en: 'Quilted velvet headboard, beech',
      zh: '绗缝丝绒床头板，山毛榉'
    },
    dimensions: 'W160×L200×H100 cm',
    weight: '62 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 479,
    name: {
      en: 'Wood Bead Curtain',
      zh: '木珠门帘'
    },
    category: 'Decor',
    subcategory: {
      en: 'Decor',
      zh: '装饰'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.9,
    reviewCount: 56,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord479x0/600/600', 'https://picsum.photos/seed/nord479x1/600/600'],
    badges: ['New'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '7-10 days',
    brand: 'Vinter & Vår',
    description: {
      en: 'A Nordic-boho room divider and window dressing—natural wood beads on cotton cord create a light-filtering screen that adds organic texture to any Scandinavian space.',
      zh: '北欧波西米亚房间隔断和窗帘，棉绳上的天然木珠创造过滤光线的屏风，为任何斯堪的纳维亚空间增添有机质感。'
    },
    specs: {
      Material: 'Wood beads + cotton',
      Dimensions: 'W90×H200 cm',
      Weight: '0.8 kg',
      Width: '90 cm',
      Use: 'Room divider / window dressing',
      Style: 'Nordic boho'
    },
    material: {
      en: 'Natural wood beads, cotton cord',
      zh: '天然木珠，棉绳'
    },
    dimensions: 'W90×H200 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 480,
    name: {
      en: 'White Dining Chair Set',
      zh: '白色餐椅套装'
    },
    category: 'Dining',
    subcategory: {
      en: 'Dining Chairs',
      zh: '餐椅'
    },
    price: 649,
    originalPrice: 649,
    discount: 0,
    rating: 5.0,
    reviewCount: 89,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord480x0/600/600', 'https://picsum.photos/seed/nord480x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '4-6 days',
    brand: 'Eken Design',
    description: {
      en: 'Four crisp white dining chairs in solid beech—a Nordic essential for bright, Scandi-style dining rooms. The white finish reflects light and pairs with any dining table colour.',
      zh: '四把洁白实心山毛榉餐椅，是明亮北欧风餐厅的必备单品，白色表面反射光线，与任何颜色的餐桌相配。'
    },
    specs: {
      Material: 'Solid beech',
      Dimensions: 'W48×D52×H82 cm each',
      Weight: '5 kg each',
      Set: '4 chairs',
      Finish: 'White',
      Stackable: 'Yes'
    },
    material: {
      en: 'Set of 4 white beech chairs',
      zh: '四件套白色山毛榉椅'
    },
    dimensions: 'W48×D52×H82 cm each',
    weight: '5 kg each',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 481,
    name: {
      en: 'Walnut Sideboard Long',
      zh: '胡桃木长型餐边柜'
    },
    category: 'Dining',
    subcategory: {
      en: 'Sideboards',
      zh: '餐边柜'
    },
    price: 1199,
    originalPrice: 1199,
    discount: 0,
    rating: 3.5,
    reviewCount: 123,
    image: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord481x0/600/600', 'https://picsum.photos/seed/nord481x1/600/600'],
    badges: [],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '2-3 days',
    brand: 'NordHjem Studio',
    description: {
      en: 'The long Walnut Sideboard is a dining room centrepiece—solid walnut with four push-to-open doors concealing generous adjustable storage. A timeless investment in Nordic craftsmanship.',
      zh: '胡桃木长型餐边柜是餐厅中心，实心胡桃木配四扇按压开门遮藏宽大的可调节储物，是北欧工艺的永恒投资。'
    },
    specs: {
      Material: 'Solid walnut',
      Dimensions: 'W200×D45×H78 cm',
      Weight: '70 kg',
      Doors: '4 push-to-open',
      Interior: 'Adjustable shelves',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid walnut, 4 doors',
      zh: '实心胡桃木，四门'
    },
    dimensions: 'W200×D45×H78 cm',
    weight: '70 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 482,
    name: {
      en: 'Trestle Desk Oak',
      zh: '橡木锯架桌'
    },
    category: 'Office',
    subcategory: {
      en: 'Desks',
      zh: '书桌'
    },
    price: 499,
    originalPrice: 499,
    discount: 0,
    rating: 3.7,
    reviewCount: 200,
    image: 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord482x0/600/600', 'https://picsum.photos/seed/nord482x1/600/600'],
    badges: ['New'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '3-5 days',
    brand: 'Fjällbo',
    description: {
      en: 'The Trestle Desk is a Nordic workshop icon adapted for the home office—a thick solid oak plank top on two A-frame trestle supports that can be dismantled when moving.',
      zh: '锯架桌是为家庭办公室改编的北欧工坊图标，厚实的实心橡木板桌面立于两个可搬移时拆卸的A形锯架支撑上。'
    },
    specs: {
      Material: 'Solid oak top, trestle legs',
      Dimensions: 'W140×D65×H74 cm',
      Weight: '30 kg',
      Top: 'Solid oak plank',
      Base: 'Oak trestles',
      Dismountable: 'Yes',
      Assembly: 'Required'
    },
    material: {
      en: 'Solid oak top, trestle legs',
      zh: '实心橡木桌面，锯架腿'
    },
    dimensions: 'W140×D65×H74 cm',
    weight: '30 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 483,
    name: {
      en: 'Marble Arc Floor Lamp',
      zh: '大理石弧形落地灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Floor Lamps',
      zh: '落地灯'
    },
    price: 399,
    originalPrice: 399,
    discount: 0,
    rating: 3.8,
    reviewCount: 345,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord483x0/600/600', 'https://picsum.photos/seed/nord483x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '5-7 days',
    brand: 'Björkudden',
    description: {
      en: 'The most elegant of Nordic floor lamps—a white Carrara marble base supports a slender brass arc that curves overhead to position the linen shade perfectly for reading.',
      zh: '最优雅的北欧落地灯，白色卡拉拉大理石底座支撑纤细的黄铜弧曲线，将亚麻灯罩完美定位以便阅读。'
    },
    specs: {
      Material: 'White marble base, brass arc',
      Dimensions: 'W100×D35×H175 cm',
      Weight: '9 kg',
      Base: 'Carrara marble',
      Arc: 'Solid brass',
      Shade: 'Natural linen',
      Bulb: 'E27'
    },
    material: {
      en: 'White marble base, brass arc',
      zh: '白色大理石底座，黄铜弧'
    },
    dimensions: 'W100×D35×H175 cm',
    weight: '9 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 484,
    name: {
      en: 'Mushroom Table Lamp',
      zh: '蘑菇台灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Table Lamps',
      zh: '台灯'
    },
    price: 129,
    originalPrice: 129,
    discount: 0,
    rating: 3.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord484x0/600/600', 'https://picsum.photos/seed/nord484x1/600/600'],
    badges: ['Sale'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '1-2 weeks',
    brand: 'Skog & Hem',
    description: {
      en: 'The Mushroom Table Lamp\'s dome-shaped frosted glass shade glows warmly in every direction—a Nordic mid-century-inspired form that has become a modern Scandinavian classic.',
      zh: '蘑菇台灯的穹形磨砂玻璃灯罩向各方向温暖发光，受北欧中世纪启发的形态已成为现代斯堪的纳维亚经典。'
    },
    specs: {
      Material: 'Frosted glass mushroom shade',
      Dimensions: 'Ø20×H35 cm',
      Weight: '1.1 kg',
      Shade: 'Frosted glass',
      Base: 'Marble or oak',
      Bulb: 'E27',
      Style: 'Mid-century Nordic'
    },
    material: {
      en: 'Frosted glass mushroom shade',
      zh: '磨砂玻璃蘑菇灯罩'
    },
    dimensions: 'Ø20×H35 cm',
    weight: '1.1 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 485,
    name: {
      en: 'Paper Lantern Set',
      zh: '纸灯笼套装'
    },
    category: 'Lighting',
    subcategory: {
      en: 'String Lights',
      zh: '串灯'
    },
    price: 39,
    originalPrice: 39,
    discount: 0,
    rating: 4.0,
    reviewCount: 789,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord485x0/600/600', 'https://picsum.photos/seed/nord485x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-4 weeks',
    brand: 'Hygge Living',
    description: {
      en: 'Five Nordic paper lanterns in muted natural tones—hang them at varying heights for a Scandinavian-inspired bedroom or living room canopy of gentle light.',
      zh: '五个北欧纸灯笼以哑光天然色调，在不同高度悬挂，打造北欧风格卧室或客厅的柔和光晕天幕。'
    },
    specs: {
      Material: 'Rice paper',
      Dimensions: 'Various sizes',
      Weight: '0.3 kg',
      Set: '5 lanterns',
      Color: 'Natural muted tones',
      Use: 'String light or candle lantern'
    },
    material: {
      en: 'Set of 5 paper lanterns',
      zh: '五件套纸灯笼'
    },
    dimensions: 'Various sizes',
    weight: '0.3 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 486,
    name: {
      en: 'Geometric Planter Trio',
      zh: '几何花盆三件套'
    },
    category: 'Decor',
    subcategory: {
      en: 'Planters',
      zh: '花盆'
    },
    price: 59,
    originalPrice: 65,
    discount: 10,
    rating: 4.1,
    reviewCount: 1023,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord486x0/600/600', 'https://picsum.photos/seed/nord486x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: 'In stock',
    brand: 'Dansk Craft',
    description: {
      en: 'Three hexagonal ceramic planters in graduated sizes with minimal Nordic geometric detailing—perfect for displaying succulents, cacti, or small herbs on a windowsill or shelf.',
      zh: '三个渐进尺寸的六边形陶瓷花盆配极简北欧几何细节，非常适合在窗台或搁架上展示多肉植物、仙人掌或小香草。'
    },
    specs: {
      Material: 'Ceramic',
      Dimensions: 'varied',
      Weight: '1 kg',
      Set: '3 planters',
      Shape: 'Hexagonal',
      Drainage: 'Yes'
    },
    material: {
      en: 'Set of 3 geometric ceramic',
      zh: '三件套几何陶瓷'
    },
    dimensions: 'varied',
    weight: '1 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 487,
    name: {
      en: 'Coat Tree',
      zh: '落地衣架'
    },
    category: 'Storage',
    subcategory: {
      en: 'Coat Racks',
      zh: '衣帽架'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.2,
    reviewCount: 1500,
    image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord487x0/600/600', 'https://picsum.photos/seed/nord487x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: 'Ships in 3 days',
    brand: 'Norr Design',
    description: {
      en: 'The Nordic Coat Tree stands like a minimalist forest element in any hallway—eight sturdy solid pine hooks on a central pole provide generous hanging for the whole household.',
      zh: '北欧落地衣架如极简的森林元素矗立于任何走廊，中心柱上的八个坚固实心松木挂钩为整个家庭提供充裕的悬挂空间。'
    },
    specs: {
      Material: 'Solid pine',
      Dimensions: 'Ø35×H180 cm',
      Weight: '6 kg',
      Hooks: '8',
      Style: 'Tree/coat stand',
      Base: 'Weighted cast iron'
    },
    material: {
      en: 'Solid pine, 8-hook tree',
      zh: '实心松木，八钩树形'
    },
    dimensions: 'Ø35×H180 cm',
    weight: '6 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 488,
    name: {
      en: 'Linen Closet Organiser',
      zh: '亚麻衣柜整理盒'
    },
    category: 'Storage',
    subcategory: {
      en: 'Storage Boxes',
      zh: '储物盒'
    },
    price: 79,
    originalPrice: 95,
    discount: 15,
    rating: 4.3,
    reviewCount: 2100,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord488x0/600/600', 'https://picsum.photos/seed/nord488x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'Next day',
    brand: 'Havsten',
    description: {
      en: 'Three coordinated linen storage boxes with cotton rope handles—a Nordic bedroom and wardrobe organisation system that keeps shelves tidy while looking beautiful.',
      zh: '三件协调的亚麻储物盒配棉绳把手，是保持搁架整洁同时美观的北欧卧室和衣柜整理系统。'
    },
    specs: {
      Material: 'Linen + cotton rope',
      Dimensions: 'W40×D30×H20 cm',
      Weight: '0.8 kg',
      Set: '3 boxes',
      Sizes: 'S/M/L',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Set of 3 linen boxes',
      zh: '三件套亚麻盒'
    },
    dimensions: 'W40×D30×H20 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 489,
    name: {
      en: 'Outdoor Dining Set 6',
      zh: '六人户外餐桌椅套装'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Garden Tables',
      zh: '花园桌'
    },
    price: 1499,
    originalPrice: 1499,
    discount: 0,
    rating: 4.4,
    reviewCount: 3200,
    image: 'https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord489x0/600/600', 'https://picsum.photos/seed/nord489x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: '7-10 days',
    brand: 'Kvist & Gren',
    description: {
      en: 'A complete Nordic outdoor dining experience—FSC teak table with six matching teak dining chairs and Sunbrella cushions. Ready for summer al fresco dining on any Nordic terrace.',
      zh: '完整的北欧户外就餐体验，FSC柚木桌配六把匹配的柚木餐椅和Sunbrella坐垫，适合任何北欧露台的夏日露天就餐。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W180×D90×H74 cm',
      Weight: '75 kg',
      Includes: 'Table + 6 chairs + cushions',
      Cushions: 'Sunbrella',
      Assembly: 'Required'
    },
    material: {
      en: 'Teak table + 6 chairs',
      zh: '柚木桌+六椅'
    },
    dimensions: 'W180×D90×H74 cm',
    weight: '75 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 490,
    name: {
      en: 'Solar Garden Lights',
      zh: '太阳能花园灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'String Lights',
      zh: '串灯'
    },
    price: 49,
    originalPrice: 60,
    discount: 20,
    rating: 4.5,
    reviewCount: 4800,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord490x0/600/600', 'https://picsum.photos/seed/nord490x1/600/600'],
    badges: ['Sale', 'Free Shipping'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: '4-6 days',
    brand: 'Ljus Home',
    description: {
      en: 'No cables, no electricity—these Nordic solar garden lights charge silently during the day and create warm ambient light for Nordic outdoor evenings automatically at dusk.',
      zh: '无电缆无电力，这些北欧太阳能花园灯在白天静静充电，在黄昏时自动为北欧户外夜晚创造温暖的氛围光。'
    },
    specs: {
      Material: 'Solar LED string, warm white',
      Dimensions: '10 m length',
      Weight: '0.5 kg',
      Power: 'Solar',
      LEDs: '50',
      Length: '10 m',
      "Auto on": 'Dusk sensor'
    },
    material: {
      en: 'Solar LED string, warm white',
      zh: '太阳能LED串灯，暖白'
    },
    dimensions: '10 m length',
    weight: '0.5 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 491,
    name: {
      en: 'Linen Bedding Set',
      zh: '亚麻床上用品套装'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Mattresses',
      zh: '床垫'
    },
    price: 199,
    originalPrice: 199,
    discount: 0,
    rating: 4.6,
    reviewCount: 6500,
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1560448205-17d3a46c84de?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord491x0/600/600', 'https://picsum.photos/seed/nord491x1/600/600'],
    badges: ['Limited'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '2-3 days',
    brand: 'Fröja',
    description: {
      en: 'A complete stone-washed linen bedding set in Nordic earth tones—duvet cover, two pillowcases, and a flat sheet in 100% French linen that softens with every wash.',
      zh: '完整的水洗亚麻床上用品套装，北欧大地色调，包括被套、两个枕套和100%法国亚麻床单，每次洗涤后更加柔软。'
    },
    specs: {
      Material: '100% French linen',
      Dimensions: 'Double/Queen',
      Weight: '1.2 kg',
      Set: 'Duvet cover + 2 pillowcases + flat sheet',
      Stonewashed: 'Yes',
      "Machine washable": 'Yes'
    },
    material: {
      en: 'Stone-washed linen set',
      zh: '水洗亚麻套装'
    },
    dimensions: 'Double/Queen',
    weight: '1.2 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 492,
    name: {
      en: 'Knitted Blanket Throw',
      zh: '针织毯'
    },
    category: 'Bedroom',
    subcategory: {
      en: 'Throws',
      zh: '毯子'
    },
    price: 95,
    originalPrice: 95,
    discount: 0,
    rating: 4.7,
    reviewCount: 8000,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord492x0/600/600', 'https://picsum.photos/seed/nord492x1/600/600'],
    badges: [],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '3-5 days',
    brand: 'Åland Living',
    description: {
      en: 'A hand-arm-knitted merino throw in oversized Nordic stitches—the ultimate cosy companion for Scandinavian winter evenings. Each one is individually crafted.',
      zh: '手臂编织的美利奴毯，超大北欧针脚，是斯堪的纳维亚冬夜的终极舒适伴侣，每件都是单独制作的。'
    },
    specs: {
      Material: 'Merino wool',
      Dimensions: 'W120×L150 cm',
      Weight: '1.2 kg',
      Stitch: 'Arm-knit oversized',
      Size: '120×150 cm',
      Handmade: 'Yes'
    },
    material: {
      en: 'Merino knit, chunky stitch',
      zh: '美利奴针织，粗针脚'
    },
    dimensions: 'W120×L150 cm',
    weight: '1.2 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 493,
    name: {
      en: 'Paper Washi Pendant',
      zh: '和纸吊灯'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Pendant Lights',
      zh: '吊灯'
    },
    price: 99,
    originalPrice: 130,
    discount: 25,
    rating: 4.8,
    reviewCount: 7,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord493x0/600/600', 'https://picsum.photos/seed/nord493x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '5-7 days',
    brand: 'Tvist Studio',
    description: {
      en: 'A Nordic-Japanese pendant light using traditional Japanese washi paper over a bamboo armature—its warm diffused glow is the embodiment of Nordic hygge and Japanese wabi-sabi combined.',
      zh: '传统日本和纸覆盖竹骨架的北欧日式吊灯，温暖的漫射光芒是北欧hygge与日式侘寂结合的体现。'
    },
    specs: {
      Material: 'Washi paper shade, bamboo',
      Dimensions: 'Ø35×H28 cm',
      Weight: '0.4 kg',
      Shade: 'Washi paper',
      Frame: 'Bamboo',
      Bulb: 'E27',
      Style: 'Nordic-Japanese'
    },
    material: {
      en: 'Washi paper shade, bamboo',
      zh: '和纸灯罩，竹'
    },
    dimensions: 'Ø35×H28 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 494,
    name: {
      en: 'Seashell Display Tray',
      zh: '贝壳展示托盘'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 35,
    originalPrice: 35,
    discount: 0,
    rating: 4.9,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord494x0/600/600', 'https://picsum.photos/seed/nord494x1/600/600'],
    badges: ['New'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '1-2 weeks',
    brand: 'Vinter & Vår',
    description: {
      en: 'A shallow bleached wood tray perfect for displaying Nordic coastal collections—seashells, pebbles, driftwood fragments, and candles for a Scandinavian shore tableau.',
      zh: '浅色漂白木托盘，非常适合展示北欧海岸收藏，贝壳、鹅卵石、漂流木碎片和蜡烛组成斯堪的纳维亚海岸场景。'
    },
    specs: {
      Material: 'Bleached wood',
      Dimensions: 'W25×D15×H4 cm',
      Weight: '0.5 kg',
      Size: '25×15 cm',
      Use: 'Display tray',
      Style: 'Coastal Nordic'
    },
    material: {
      en: 'Natural bleached wood tray',
      zh: '天然漂白木托盘'
    },
    dimensions: 'W25×D15×H4 cm',
    weight: '0.5 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 495,
    name: {
      en: 'Botanical Print Trio',
      zh: '植物印刷三件套'
    },
    category: 'Decor',
    subcategory: {
      en: 'Wall Art',
      zh: '墙饰'
    },
    price: 75,
    originalPrice: 105,
    discount: 30,
    rating: 5.0,
    reviewCount: 22,
    image: 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord495x0/600/600', 'https://picsum.photos/seed/nord495x1/600/600'],
    badges: [],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '2-4 weeks',
    brand: 'Eken Design',
    description: {
      en: 'Three coordinated botanical art prints inspired by Nordic wild plants—fern, birch, and moss—printed on 200 gsm fine art paper. Perfect for a Nordic gallery wall grouping.',
      zh: '三件协调的植物艺术印刷，灵感源于北欧野生植物，蕨类、桦树和苔藓，印刷于200克重艺术纸，非常适合北欧照片墙组合。'
    },
    specs: {
      Material: 'Set of 3 botanical prints',
      Dimensions: 'W30×H40 cm each',
      Weight: '0.3 kg',
      Set: '3 prints',
      Plants: 'Fern, birch, moss',
      Paper: '200 gsm',
      Frame: 'Not included'
    },
    material: {
      en: 'Set of 3 botanical prints',
      zh: '三件套植物印刷'
    },
    dimensions: 'W30×H40 cm each',
    weight: '0.3 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 496,
    name: {
      en: 'Monitor Light Bar',
      zh: '显示器灯条'
    },
    category: 'Office',
    subcategory: {
      en: 'Desk Lamps',
      zh: '台灯'
    },
    price: 69,
    originalPrice: 69,
    discount: 0,
    rating: 3.5,
    reviewCount: 43,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord496x0/600/600', 'https://picsum.photos/seed/nord496x1/600/600'],
    badges: [],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: 'In stock',
    brand: 'NordHjem Studio',
    description: {
      en: 'The Monitor Light Bar clips to the top of any monitor and projects light downward onto the desk without glare or screen reflections—a Nordic ergonomic lighting essential.',
      zh: '显示器灯条夹于任何显示器顶部，向下投射光线到桌面而不产生眩光或屏幕反射，是北欧人体工学照明必备。'
    },
    specs: {
      Material: 'LED monitor light, USB',
      Dimensions: 'W45×D8×H4 cm',
      Weight: '0.4 kg',
      Mount: 'Monitor clip',
      "Light direction": 'Downward (no glare)',
      Power: 'USB',
      "Color temp": 'Adjustable'
    },
    material: {
      en: 'LED monitor light, USB',
      zh: 'LED显示器灯条，USB'
    },
    dimensions: 'W45×D8×H4 cm',
    weight: '0.4 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 497,
    name: {
      en: 'Book Ends Set',
      zh: '书挡套装'
    },
    category: 'Office',
    subcategory: {
      en: 'Monitor Stands',
      zh: '显示器支架'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 3.7,
    reviewCount: 67,
    image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1616627547584-bf28cee262db?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord497x0/600/600', 'https://picsum.photos/seed/nord497x1/600/600'],
    badges: ['New'],
    colors: ['#F5F0E8', '#2C2C2C', '#8B7355'],
    colorNames: {
      en: ['Ivory', 'Charcoal', 'Teak'],
      zh: ['象牙白', '炭灰', '柚木色']
    },
    delivery: 'Ships in 3 days',
    brand: 'Fjällbo',
    description: {
      en: 'A pair of Nordic marble bookends in natural black or white marble—solid, heavy, and beautiful objects that keep books upright while doubling as desk sculptures.',
      zh: '一对北欧大理石书挡，天然黑色或白色大理石，坚固厚重且美丽，在保持书籍直立的同时兼作桌面雕塑。'
    },
    specs: {
      Material: 'Natural marble',
      Dimensions: 'W8×D12×H18 cm each',
      Weight: '1.2 kg each',
      Set: '2 bookends',
      Colors: 'Black or white marble'
    },
    material: {
      en: 'Set of 2 marble bookends',
      zh: '两件套大理石书挡'
    },
    dimensions: 'W8×D12×H18 cm each',
    weight: '1.2 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 498,
    name: {
      en: 'Teak Planter Box',
      zh: '柚木花盆盒'
    },
    category: 'Decor',
    subcategory: {
      en: 'Outdoor Planters',
      zh: '户外花盆'
    },
    price: 149,
    originalPrice: 149,
    discount: 0,
    rating: 3.8,
    reviewCount: 150,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord498x0/600/600', 'https://picsum.photos/seed/nord498x1/600/600'],
    badges: ['Best Seller'],
    colors: ['#FFFFFF', '#1A1A1A', '#C4A882'],
    colorNames: {
      en: ['White', 'Black', 'Sand'],
      zh: ['纯白', '纯黑', '沙色']
    },
    delivery: 'Next day',
    brand: 'Björkudden',
    description: {
      en: 'The Teak Planter Box is a window ledge and balcony railing essential for Nordic herb gardens. FSC teak weathers naturally and the open slat bottom allows perfect drainage.',
      zh: '柚木花盆盒是北欧香草花园的窗台和阳台栏杆必备，FSC柚木自然老化，开放式板条底部允许完美排水。'
    },
    specs: {
      Material: 'FSC teak',
      Dimensions: 'W60×D20×H25 cm',
      Weight: '8 kg',
      Drainage: 'Slatted bottom',
      Size: '60×20×25 cm',
      Assembly: 'Required'
    },
    material: {
      en: 'FSC teak planter box',
      zh: 'FSC柚木花盆盒'
    },
    dimensions: 'W60×D20×H25 cm',
    weight: '8 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 499,
    name: {
      en: 'Copper Fire Pit',
      zh: '铜火盆'
    },
    category: 'Outdoor',
    subcategory: {
      en: 'Fire Pits',
      zh: '火盆'
    },
    price: 349,
    originalPrice: 410,
    discount: 15,
    rating: 3.9,
    reviewCount: 280,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600573472592-401b489a3cdc?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord499x0/600/600', 'https://picsum.photos/seed/nord499x1/600/600'],
    badges: ['Sale'],
    colors: ['#E8DDD0', '#4A4A4A', '#6B8E6E'],
    colorNames: {
      en: ['Linen', 'Dark Gray', 'Forest'],
      zh: ['亚麻', '深灰', '森林绿']
    },
    delivery: '7-10 days',
    brand: 'Skog & Hem',
    description: {
      en: 'The Copper Fire Pit develops a rich patina over time, transforming from bright copper to deep green in the Nordic outdoor tradition of embracing natural material change.',
      zh: '铜火盆随时间发展出丰富的铜绿，从明亮铜色转变为深绿色，体现北欧户外接受天然材料变化的传统。'
    },
    specs: {
      Material: 'Copper bowl + steel tripod',
      Dimensions: 'Ø55×H40 cm',
      Weight: '15 kg',
      Diameter: '55 cm',
      Patina: 'Develops naturally',
      "Wood burning": 'Yes'
    },
    material: {
      en: 'Copper bowl, steel tripod',
      zh: '铜碗，钢三脚架'
    },
    dimensions: 'Ø55×H40 cm',
    weight: '15 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  },
  {
    id: 500,
    name: {
      en: 'Laundry Basket with Lid',
      zh: '带盖洗衣篮'
    },
    category: 'Storage',
    subcategory: {
      en: 'Baskets',
      zh: '篮子'
    },
    price: 79,
    originalPrice: 79,
    discount: 0,
    rating: 4.0,
    reviewCount: 430,
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord500x0/600/600', 'https://picsum.photos/seed/nord500x1/600/600'],
    badges: ['Free Shipping'],
    colors: ['#D4C5B0', '#2E4057', '#8B4513'],
    colorNames: {
      en: ['Beige', 'Navy', 'Walnut'],
      zh: ['米色', '深蓝', '胡桃木']
    },
    delivery: '4-6 days',
    brand: 'Hygge Living',
    description: {
      en: 'A generous woven rattan laundry basket with a hinged lid—the Nordic answer to bathroom and bedroom clutter that hides the laundry while looking beautiful.',
      zh: '宽大的编织藤编洗衣篮配铰链盖，是浴室和卧室杂乱的北欧答案，在保持美观的同时隐藏洗衣。'
    },
    specs: {
      Material: 'Woven rattan',
      Dimensions: 'Ø45×H65 cm',
      Weight: '2 kg',
      Lid: 'Hinged',
      Capacity: '80 L',
      Handles: 'Yes'
    },
    material: {
      en: 'Woven rattan, hinged lid',
      zh: '编织藤编，铰链盖'
    },
    dimensions: 'Ø45×H65 cm',
    weight: '2 kg',
    origin: {
      en: 'Iceland',
      zh: '冰岛'
    },
  },
  {
    id: 501,
    name: {
      en: 'Bathroom Storage Tower',
      zh: '浴室储物塔'
    },
    category: 'Storage',
    subcategory: {
      en: 'Bathroom Storage',
      zh: '浴室收纳'
    },
    price: 129,
    originalPrice: 145,
    discount: 10,
    rating: 4.1,
    reviewCount: 620,
    image: 'https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord501x0/600/600', 'https://picsum.photos/seed/nord501x1/600/600'],
    badges: ['New', 'Free Shipping'],
    colors: ['#F0EBE3', '#5C4033', '#A8B5A2'],
    colorNames: {
      en: ['Cream', 'Brown', 'Sage'],
      zh: ['奶油', '棕色', '鼠尾草']
    },
    delivery: '2-3 days',
    brand: 'Dansk Craft',
    description: {
      en: 'The Bathroom Storage Tower provides four-tier storage in a small bathroom footprint—open shelves and a cabinet below keep towels, toiletries, and supplies neatly organised.',
      zh: '浴室储物塔在小浴室占地面积中提供四层储物，上方开放搁架和下方柜子整洁整理毛巾、盥洗用品和耗材。'
    },
    specs: {
      Material: 'MDF white',
      Dimensions: 'W35×D33×H120 cm',
      Weight: '14 kg',
      Shelves: '4 (mix of open + cabinet)',
      Assembly: 'Required',
      "IP rating": 'Bathroom safe'
    },
    material: {
      en: 'MDF white, 4 shelves',
      zh: 'MDF白色，四层搁板'
    },
    dimensions: 'W35×D33×H120 cm',
    weight: '14 kg',
    origin: {
      en: 'Sweden',
      zh: '瑞典'
    },
  },
  {
    id: 502,
    name: {
      en: 'Nordic Christmas Ornament Set',
      zh: '北欧圣诞装饰套装'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Candles',
      zh: '蜡烛'
    },
    price: 45,
    originalPrice: 45,
    discount: 0,
    rating: 4.2,
    reviewCount: 910,
    image: 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord502x0/600/600', 'https://picsum.photos/seed/nord502x1/600/600'],
    badges: ['Sale', 'Limited'],
    colors: ['#FAFAFA', '#3D3D3D', '#B8860B'],
    colorNames: {
      en: ['Snow', 'Graphite', 'Brass'],
      zh: ['雪白', '石墨', '黄铜']
    },
    delivery: '3-5 days',
    brand: 'Norr Design',
    description: {
      en: 'Twelve hand-painted Nordic folk-pattern ceramic ornaments—reindeer, snowflakes, and Christmas trees in traditional Scandinavian red and white. A festive heirloom collection.',
      zh: '十二件手绘北欧民俗图案陶瓷装饰，驯鹿、雪花和圣诞树以传统斯堪的纳维亚红白色调，是节日传家收藏。'
    },
    specs: {
      Material: 'Ceramic',
      Dimensions: 'Various',
      Weight: '0.4 kg',
      Set: '12 ornaments',
      Pattern: 'Nordic folk',
      Handpainted: 'Yes'
    },
    material: {
      en: 'Set of 12 ceramic ornaments',
      zh: '十二件套陶瓷装饰'
    },
    dimensions: 'Various',
    weight: '0.4 kg',
    origin: {
      en: 'Denmark',
      zh: '丹麦'
    },
  },
  {
    id: 503,
    name: {
      en: 'Acorn Candle Holder Set',
      zh: '橡果烛台套装'
    },
    category: 'Lighting',
    subcategory: {
      en: 'Candle Holders',
      zh: '烛台'
    },
    price: 39,
    originalPrice: 39,
    discount: 0,
    rating: 4.3,
    reviewCount: 1800,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1507473885765-e6ed057ab6fe?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord503x0/600/600', 'https://picsum.photos/seed/nord503x1/600/600'],
    badges: ['Best Seller', 'Free Shipping'],
    colors: ['#E5DFD8', '#1C3A2E', '#CD853F'],
    colorNames: {
      en: ['Oat', 'Emerald', 'Oak'],
      zh: ['燕麦', '翡翠', '橡木']
    },
    delivery: '5-7 days',
    brand: 'Havsten',
    description: {
      en: 'Three small brass acorn-shaped taper candle holders—a whimsical Nordic nature reference that celebrates the forest materials at the heart of Scandinavian design.',
      zh: '三个小黄铜橡果形柱形烛台，是颂扬斯堪的纳维亚设计核心森林材料的异想北欧自然参考。'
    },
    specs: {
      Material: 'Solid brass',
      Dimensions: 'Ø5×H8 cm each',
      Weight: '0.4 kg',
      Set: '3 holders',
      "Candle size": 'Taper (1 cm)',
      Style: 'Nordic nature'
    },
    material: {
      en: 'Set of 3 brass acorn holders',
      zh: '三件套黄铜橡果烛台'
    },
    dimensions: 'Ø5×H8 cm each',
    weight: '0.4 kg',
    origin: {
      en: 'Finland',
      zh: '芬兰'
    },
  },
  {
    id: 504,
    name: {
      en: 'Glass Globe Vase Large',
      zh: '大型玻璃球花瓶'
    },
    category: 'Decor',
    subcategory: {
      en: 'Vases',
      zh: '花瓶'
    },
    price: 79,
    originalPrice: 130,
    discount: 40,
    rating: 4.4,
    reviewCount: 2700,
    image: 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop',
    images: ['https://images.unsplash.com/photo-1612196808214-b8e1d6145a8c?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1600166898405-da9535204843?w=600&h=600&fit=crop', 'https://images.unsplash.com/photo-1618220179428-22790b461013?w=600&h=600&fit=crop', 'https://picsum.photos/seed/nord504x0/600/600', 'https://picsum.photos/seed/nord504x1/600/600'],
    badges: ['New', 'Best Seller'],
    colors: ['#F8F4EE', '#2F4538', '#9E8B6E'],
    colorNames: {
      en: ['Pearl', 'Pine', 'Caramel'],
      zh: ['珍珠', '松木', '焦糖']
    },
    delivery: '1-2 weeks',
    brand: 'Kvist & Gren',
    description: {
      en: 'A large hand-blown clear glass globe vase—a Nordic lighting and botanical statement piece that catches natural light beautifully when filled with water and floating flowers.',
      zh: '大型手吹透明玻璃球花瓶，装满水和漂浮花朵后能美丽捕捉自然光的北欧照明和植物宣言单品。'
    },
    specs: {
      Material: 'Hand-blown borosilicate',
      Dimensions: 'Ø25×H25 cm',
      Weight: '0.8 kg',
      Shape: 'Globe',
      Diameter: '25 cm',
      Waterproof: 'Yes'
    },
    material: {
      en: 'Hand-blown clear glass globe',
      zh: '手吹透明玻璃球'
    },
    dimensions: 'Ø25×H25 cm',
    weight: '0.8 kg',
    origin: {
      en: 'Norway',
      zh: '挪威'
    },
  }
];
