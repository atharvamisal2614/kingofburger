export interface Category {
  id: string;
  name: string;
  image: string; // Placeholder for category image path
}

export interface MenuItem {
  id: string;
  name: string;
  price: number;
  category: string;
  isVeg: boolean;
  isAvailable: boolean;
}

const categoryNames = [
  "Burger", "Pizza", "Sandwich (Non Toast)", "Grilled Sandwich (Toast)", 
  "French Fries", "Chaat", "Milkshake"
];

export const categories: Category[] = categoryNames.map((name, index) => ({
  id: `cat_${index + 1}`,
  name,
  image: `/images/categories/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}.png`,
}));

// Dictionary of realistic dish names per category
const realisticDishes: Record<string, string[]> = {
  "Burger": ["Aloo Tikki Burger", "Veggie Burger", "Paneer Burger", "Cheese Burger", "Mushroom Burger", "Double Cheese Burger", "Crispy Veg Burger", "BBQ Veg Burger", "Jumbo Veg Burger", "Spicy Paneer Burger"],
  "Pizza": ["Margherita Pizza", "Farmhouse Pizza", "Veggie Paradise", "Peppy Paneer", "Mexican Green Wave", "Cheese n Corn", "Deluxe Veggie", "Veg Extravaganza", "Tandoori Paneer Pizza", "Four Cheese Pizza"],
  "Sandwich (Non Toast)": ["Veg Club Sandwich", "Coleslaw Sandwich", "Spinach Corn Sandwich", "Chutney Sandwich", "Veg Mayo Sandwich", "Bombay Sandwich", "Paneer Sandwich", "Cucumber Sandwich", "Cheese Sandwich", "Tomato Cheese Sandwich"],
  "Grilled Sandwich (Toast)": ["Grilled Cheese Sandwich", "Mumbai Toastie", "Paneer Tikka Sandwich", "Mushroom Sandwich", "Grilled Veg Sandwich", "Paneer Bhurji Sandwich", "Corn Cheese Grill", "Veg Masala Grill", "Chilli Cheese Toast", "Pesto Grill Sandwich"],
  "French Fries": ["Classic Salted Fries", "Peri Peri Fries", "Cheese Fries", "Cheesy Jalapeno Fries", "Loaded Fries", "Tandoori Fries", "Pizza Fries", "BBQ Fries", "Garlic Herb Fries", "Sweet Chili Fries"],
  "Chaat": ["Pani Puri", "Bhel Puri", "Sev Puri", "Dahi Puri", "Aloo Tikki Chaat", "Papdi Chaat", "Raj Kachori", "Samosa Chaat", "Basket Chaat", "Palak Patta Chaat"],
  "Milkshake": ["Oreo Shake", "Kitkat Shake", "Mango Shake", "Strawberry Shake", "Chocolate Shake", "Vanilla Shake", "Banana Shake", "Brownie Shake", "Cold Coffee with Ice Cream", "Ferrero Rocher Shake"]
};

// Helper to generate generic authentic-sounding names if not explicitly defined
const prefixes = ["Special", "Classic", "Crispy", "Tandoori", "Masala", "Butter", "Garlic", "Cheesy", "Royal"];
const suffixes = ["Delight", "Supreme", "Bites", "Treat", "Special", "Bowl", "Platter", "Magic", "Twist", "Fusion"];

export const menuItems: MenuItem[] = categories.flatMap((cat) => {
  const specificDishes = realisticDishes[cat.name] || [];
  
  return Array.from({ length: 10 }).map((_, idx) => {
    // Determine the name: Use predefined if available, else generate a generic realistic name
    let dishName = "";
    if (specificDishes && specificDishes[idx]) {
      dishName = specificDishes[idx];
    } else {
      const prefix = prefixes[Math.floor(Math.random() * prefixes.length)];
      const suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
      // If no specific dish, just make a nice sounding one based on the category name
      dishName = `${prefix} ${cat.name.replace(/s$/, '')} ${suffix}`;
    }
    
    // Assign realistic prices based on category
    let basePrice = 150;
    if (cat.name === "Chaat" || cat.name === "French Fries") basePrice = 80;
    else if (cat.name === "Pizza") basePrice = 250;
    else if (cat.name === "Burger" || cat.name === "Milkshake") basePrice = 120;
    
    const price = Math.floor(Math.random() * 5 + (basePrice / 20)) * 20; // Round to nearest 20

    return {
      id: `${cat.id}_item_${idx + 1}`,
      name: dishName,
      price: price,
      category: cat.name,
      isVeg: true, 
      isAvailable: Math.random() > 0.1, 
    };
  });
});
