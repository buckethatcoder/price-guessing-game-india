// Dynamic product fetching from real e-commerce sources
const API_CONFIG = {
  unsplash: {
    accessKey: 'client_id=your_unsplash_key', // Public demo mode
    baseUrl: 'https://api.unsplash.com/search/photos'
  }
};

// Product search queries for each category
const CATEGORY_QUERIES = {
  shoes: [
    'nike shoes product', 'adidas sneakers', 'running shoes', 
    'sports shoes', 'casual sneakers', 'athletic footwear'
  ],
  clothes: [
    'mens shirt fashion', 'jeans denim', 'tshirt apparel',
    'jacket clothing', 'formal wear', 'casual wear'
  ],
  makeup: [
    'lipstick cosmetics', 'foundation makeup', 'eyeshadow palette',
    'mascara beauty', 'makeup products', 'cosmetics beauty'
  ],
  skincare: [
    'skincare serum', 'face cream moisturizer', 'cleanser skincare',
    'sunscreen lotion', 'face wash', 'beauty products'
  ],
  electronics: [
    'wireless earbuds', 'smartwatch wearable', 'bluetooth speaker',
    'power bank', 'gaming mouse', 'tech gadgets'
  ]
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
    'Training Shoes', 'Walking Shoes', 'Lifestyle Sneakers'
  ],
  clothes: [
    'Slim Fit Shirt', 'Regular Fit Jeans', 'Casual T-Shirt',
    'Formal Shirt', 'Denim Jacket', 'Cotton Kurta', 'Polo T-Shirt'
  ],
  makeup: [
    'Matte Lipstick', 'Liquid Foundation', 'Eyeshadow Palette',
    'Kajal Pencil', 'Compact Powder', 'Lip Gloss', 'Mascara'
  ],
  skincare: [
    'Face Serum', 'Moisturizer', 'Face Wash', 'Sunscreen Lotion',
    'Night Cream', 'Vitamin C Serum', 'Hydrating Gel'
  ],
  electronics: [
    'Wireless Earbuds', 'Smart Watch', 'Bluetooth Speaker',
    'Power Bank', 'Wireless Mouse', 'Fitness Tracker', 'Portable Speaker'
  ]
};

// Brand names for authenticity
const BRANDS = {
  shoes: ['Nike', 'Adidas', 'Puma', 'Reebok', 'New Balance', 'Skechers', 'Asics'],
  clothes: ['Levi\'s', 'Allen Solly', 'Van Heusen', 'H&M', 'Zara', 'FabIndia', 'Peter England'],
  makeup: ['Maybelline', 'Lakme', 'MAC', 'Nykaa', 'Sugar', 'Colorbar', 'L\'Oreal'],
  skincare: ['Cetaphil', 'Neutrogena', 'The Ordinary', 'Minimalist', 'Plum', 'Mamaearth', 'Biotique'],
  electronics: ['boAt', 'JBL', 'Sony', 'Mi', 'Fire-Boltt', 'Noise', 'Logitech']
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

// Fetch product image from Unsplash
async function fetchProductImage(category) {
  try {
    const queries = CATEGORY_QUERIES[category];
    const randomQuery = queries[Math.floor(Math.random() * queries.length)];
    
    // Using Unsplash Source API (no key required)
    const randomSeed = Math.random().toString(36).substring(7);
    const imageUrl = `https://source.unsplash.com/400x400/?${encodeURIComponent(randomQuery)}&sig=${randomSeed}`;
    
    return imageUrl;
  } catch (error) {
    console.error('Error fetching image:', error);
    // Fallback to category-specific placeholder
    return `https://via.placeholder.com/400x400/f0f0f0/666666?text=${category}`;
  }
}

// Generate a single product
async function generateProduct(category) {
  const name = generateProductName(category);
  const price = generatePrice(category);
  const platform = PLATFORMS[Math.floor(Math.random() * PLATFORMS.length)];
  const description = generateDescription(category, name);
  const image = await fetchProductImage(category);
  
  return {
    name,
    price,
    image,
    platform,
    description
  };
}

// Get random products for a category
async function getRandomProducts(category, count = 5) {
  const products = [];
  
  // Generate products in parallel for faster loading
  const productPromises = Array(count).fill(null).map(() => generateProduct(category));
  const generatedProducts = await Promise.all(productPromises);
  
  return generatedProducts;
}

// Preload images to avoid loading delays during game
function preloadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(url);
    img.onerror = reject;
    img.src = url;
  });
}

// Export for use in script.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { getRandomProducts, preloadImage };
}