// Product search queries for each category
const CATEGORY_QUERIES = {
  shoes: ['nike+shoes', 'adidas+sneakers', 'running+shoes', 'sports+shoes', 'casual+sneakers'],
  clothes: ['mens+shirt', 'jeans+denim', 'tshirt', 'jacket', 'formal+wear'],
  makeup: ['lipstick', 'foundation', 'eyeshadow', 'mascara', 'makeup'],
  skincare: ['skincare+serum', 'face+cream', 'cleanser', 'sunscreen', 'moisturizer'],
  electronics: ['wireless+earbuds', 'smartwatch', 'bluetooth+speaker', 'power+bank', 'tech+gadgets']
};

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

// Get product image URL using Unsplash Source (no API key needed)
function getProductImageUrl(category, index) {
  const queries = CATEGORY_QUERIES[category];
  const query = queries[index % queries.length];
  // Add timestamp to ensure different images each time
  const timestamp = Date.now();
  const randomSeed = Math.floor(Math.random() * 10000);
  return `https://source.unsplash.com/400x400/?${query}&t=${timestamp}&sig=${randomSeed}`;
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
    img.onload = () => resolve(url);
    img.onerror = () => {
      console.warn('Image failed to load:', url);
      resolve(url); // Resolve anyway to not block the game
    };
    img.src = url;
    
    // Timeout after 5 seconds
    setTimeout(() => resolve(url), 5000);
  });
}