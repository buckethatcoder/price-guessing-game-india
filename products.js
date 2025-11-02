// Indian e-commerce platforms
const PLATFORMS = ['Amazon', 'Flipkart', 'Myntra', 'Nykaa', 'Tata CLiQ', 'Ajio', 'Croma'];

// Price ranges for different categories (in INR)
const PRICE_RANGES = {
  shoes: { min: 1999, max: 15999 },
  clothes: { min: 799, max: 4999 },
  makeup: { min: 299, max: 3999 },
  skincare: { min: 299, max: 1999 },
  electronics: { min: 999, max: 12999 }
};

// Product name templates
const PRODUCT_NAMES = {
  shoes: [
    'Running Shoes', 'Sneakers', 'Sports Shoes', 'Casual Shoes',
    'Training Shoes', 'Walking Shoes', 'Lifestyle Sneakers', 'Athletic Shoes'
  ],
  clothes: [
    'Slim Fit Shirt', 'Regular Fit Jeans', 'Casual T-Shirt',
    'Formal Shirt', 'Denim Jacket', 'Cotton Kurta', 'Polo T-Shirt', 'Hoodie'
  ],
  makeup: [
    'Matte Lipstick', 'Liquid Foundation', 'Eyeshadow Palette',
    'Kajal Pencil', 'Compact Powder', 'Lip Gloss', 'Mascara', 'Blush Palette'
  ],
  skincare: [
    'Face Serum', 'Moisturizer', 'Face Wash', 'Sunscreen Lotion',
    'Night Cream', 'Vitamin C Serum', 'Hydrating Gel', 'Toner'
  ],
  electronics: [
    'Wireless Earbuds', 'Smart Watch', 'Bluetooth Speaker',
    'Power Bank', 'Wireless Mouse', 'Fitness Tracker', 'Portable Speaker', 'USB Cable'
  ]
};

// Brand names for authenticity
const BRANDS = {
  shoes: ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'Skechers', 'Asics', 'Fila'],
  clothes: ['Levi\'s', 'Allen Solly', 'Van Heusen', 'H&M', 'Zara', 'FabIndia', 'Peter England', 'Arrow'],
  makeup: ['Maybelline', 'Lakme', 'MAC', 'Nykaa', 'Sugar', 'Colorbar', 'L\'Oreal', 'Revlon'],
  skincare: ['Cetaphil', 'Neutrogena', 'The Ordinary', 'Minimalist', 'Plum', 'Mamaearth', 'Biotique', 'Himalaya'],
  electronics: ['boAt', 'JBL', 'Sony', 'Mi', 'Fire-Boltt', 'Noise', 'Logitech', 'Samsung']
};

// Curated image IDs from Picsum Photos for each category
const CATEGORY_IMAGES = {
  shoes: [
    'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1549298916-b41d501d3772?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop'
  ],
  clothes: [
    'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?w=400&h=400&fit=crop'
  ],
  makeup: [
    'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1583241800698-c318662d6f75?w=400&h=400&fit=crop'
  ],
  skincare: [
    'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1570194065650-d99fb4bedf0a?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1556228852-80f3f5e9e6c6?w=400&h=400&fit=crop'
  ],
  electronics: [
    'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&h=400&fit=crop',
    'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400&h=400&fit=crop'
  ]
};

// Generate random price within category range
function generatePrice(category) {
  const range = PRICE_RANGES[category];
  // Generate prices that end in 99, 95, 49, or 00 for realism
  const endings = [99, 95, 49, 0];
  const basePrice = Math.floor(Math.random() * (range.max - range.min) / 100) * 100 + range.min;
  const ending = endings[Math.floor(Math.random() * endings.length)];
  return Math.floor(basePrice / 100) * 100 + ending;
}

// Generate product name
function generateProductName(category) {
  const brand = BRANDS[category][Math.floor(Math.random() * BRANDS[category].length)];
  const productType = PRODUCT_NAMES[category][Math.floor(Math.random() * PRODUCT_NAMES[category].length)];
  return `${brand} ${productType}`;
}

// Generate product description
function generateDescription(category, productName) {
  const descriptions = {
    shoes: [
      'Comfortable and stylish footwear for everyday wear',
      'Premium quality with advanced cushioning technology',
      'Durable construction with breathable material',
      'Perfect for sports and casual activities'
    ],
    clothes: [
      'Premium fabric with comfortable fit',
      'Stylish design for modern wardrobe',
      'Easy care and long-lasting quality',
      'Perfect for casual and formal occasions'
    ],
    makeup: [
      'Long-lasting formula with rich pigmentation',
      'Dermatologically tested and safe for all skin types',
      'Professional quality for flawless finish',
      'Waterproof and smudge-proof formula'
    ],
    skincare: [
      'Clinically tested for all skin types',
      'Natural ingredients for healthy skin',
      'Dermatologist recommended formula',
      'Gentle and effective daily care'
    ],
    electronics: [
      'Advanced technology with premium features',
      'Long battery life and fast charging',
      'Sleek design with superior performance',
      'Latest model with warranty included'
    ]
  };
  
  return descriptions[category][Math.floor(Math.random() * descriptions[category].length)];
}

// Get product image URL
function getProductImageUrl(category, index) {
  const images = CATEGORY_IMAGES[category];
  // Use modulo to cycle through available images
  const imageIndex = index % images.length;
  // Add cache buster to ensure fresh images
  const cacheBuster = Date.now() + Math.random();
  return `${images[imageIndex]}&cache=${cacheBuster}`;
}

// Generate a single product
function generateProduct(category, index) {
  const name = generateProductName(category);
  const price = generatePrice(category);
  const platform = PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)];
  const description = generateDescription(category, name);
  const image = getProductImageUrl(category, index);
  
  return {
    name,
    price,
    image,
    platform,
    description
  };
}

// Get random products for a category (synchronous - no async needed)
function getRandomProducts(category, count = 5) {
  const products = [];
  
  for (let i = 0; i < count; i++) {
    products.push(generateProduct(category, i));
  }
  
  return products;
}

// Preload image to check if it loads
function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      console.log('Image loaded successfully:', url);
      resolve(url);
    };
    img.onerror = (error) => {
      console.error('Image failed to load:', url, error);
      resolve(url); // Resolve anyway to not block the game
    };
    img.src = url;
    
    // Timeout after 5 seconds
    setTimeout(() => {
      console.log('Image load timeout:', url);
      resolve(url);
    }, 5000);
  });
}