// Product database for different categories
const productDatabase = {
  shoes: [
    {
      name: "Nike Air Max 270",
      price: 12995,
      image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400",
      platform: "Amazon",
      description: "Men's running shoes with air cushioning technology"
    },
    {
      name: "Adidas Ultraboost 22",
      price: 16999,
      image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=400",
      platform: "Tata CLiQ",
      description: "Premium running shoes with boost technology"
    },
    {
      name: "Puma RS-X Sneakers",
      price: 8999,
      image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=400",
      platform: "Myntra",
      description: "Retro-inspired lifestyle sneakers"
    },
    {
      name: "Reebok Classic Leather",
      price: 5499,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=400",
      platform: "Amazon",
      description: "Classic white leather sneakers"
    },
    {
      name: "New Balance 574",
      price: 7999,
      image: "https://images.unsplash.com/photo-1539185441755-769473a23570?w=400",
      platform: "Ajio",
      description: "Iconic lifestyle sneakers with ENCAP cushioning"
    }
  ],
  clothes: [
    {
      name: "Levi's 511 Slim Fit Jeans",
      price: 3999,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400",
      platform: "Amazon",
      description: "Classic slim fit denim jeans"
    },
    {
      name: "Allen Solly Formal Shirt",
      price: 1499,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400",
      platform: "Myntra",
      description: "Men's regular fit formal shirt"
    },
    {
      name: "Zara Oversized T-Shirt",
      price: 1990,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
      platform: "Tata CLiQ",
      description: "Cotton oversized fit t-shirt"
    },
    {
      name: "H&M Denim Jacket",
      price: 2999,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400",
      platform: "Ajio",
      description: "Classic blue denim jacket"
    },
    {
      name: "FabIndia Kurta",
      price: 1799,
      image: "https://images.unsplash.com/photo-1583391733956-6c78276477e5?w=400",
      platform: "FabIndia",
      description: "Men's cotton kurta with traditional design"
    }
  ],
  makeup: [
    {
      name: "Maybelline Fit Me Foundation",
      price: 499,
      image: "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?w=400",
      platform: "Nykaa",
      description: "Matte + Poreless liquid foundation"
    },
    {
      name: "Lakme 9to5 Lipstick",
      price: 375,
      image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=400",
      platform: "Amazon",
      description: "Long-lasting matte lipstick"
    },
    {
      name: "MAC Ruby Woo Lipstick",
      price: 1900,
      image: "https://images.unsplash.com/photo-1617897903246-719242758050?w=400",
      platform: "Nykaa",
      description: "Iconic red matte lipstick"
    },
    {
      name: "Huda Beauty Eyeshadow Palette",
      price: 3200,
      image: "https://images.unsplash.com/photo-1512496015851-a90fb38ba796?w=400",
      platform: "Sephora",
      description: "18-shade eyeshadow palette"
    },
    {
      name: "Sugar Contour De Force Palette",
      price: 999,
      image: "https://images.unsplash.com/photo-1590393876836-a0a8f9114f9e?w=400",
      platform: "Nykaa",
      description: "Face contouring and highlighting palette"
    }
  ],
  skincare: [
    {
      name: "Cetaphil Gentle Cleanser",
      price: 699,
      image: "https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=400",
      platform: "Amazon",
      description: "Gentle skin cleanser for all skin types"
    },
    {
      name: "The Ordinary Niacinamide Serum",
      price: 599,
      image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=400",
      platform: "Nykaa",
      description: "10% Niacinamide + 1% Zinc serum"
    },
    {
      name: "Neutrogena Hydro Boost",
      price: 849,
      image: "https://images.unsplash.com/photo-1571875257727-256c39da42af?w=400",
      platform: "Amazon",
      description: "Water gel moisturizer with hyaluronic acid"
    },
    {
      name: "Minimalist Vitamin C Serum",
      price: 699,
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=400",
      platform: "Nykaa",
      description: "10% Vitamin C face serum"
    },
    {
      name: "Plum Green Tea Face Wash",
      price: 345,
      image: "https://images.unsplash.com/photo-1556228852-80a5e2c3e2c1?w=400",
      platform: "Amazon",
      description: "Oil-free face wash for acne-prone skin"
    }
  ],
  electronics: [
    {
      name: "boAt Airdopes 141",
      price: 1299,
      image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400",
      platform: "Amazon",
      description: "True wireless earbuds with 42H playback"
    },
    {
      name: "Mi Power Bank 3i 20000mAh",
      price: 1799,
      image: "https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=400",
      platform: "Flipkart",
      description: "Fast charging power bank with dual USB ports"
    },
    {
      name: "Fire-Boltt Smart Watch",
      price: 2499,
      image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=400",
      platform: "Amazon",
      description: "1.69\" display fitness tracker smartwatch"
    },
    {
      name: "JBL Flip 5 Speaker",
      price: 8999,
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=400",
      platform: "Croma",
      description: "Portable waterproof Bluetooth speaker"
    },
    {
      name: "Logitech MX Master 3",
      price: 8995,
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400",
      platform: "Amazon",
      description: "Advanced wireless mouse for productivity"
    }
  ]
};

// Function to get random products from a category
function getRandomProducts(category, count = 5) {
  const products = productDatabase[category];
  const shuffled = [...products].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
}