export type SpiceLevel = "Mild" | "Medium" | "Spicy" | null;

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
  isChefSpecial: boolean;
  spiceLevel: SpiceLevel;
  isAvailable: boolean;
}

const categoryNames = [
  "Starters", "Roti", "Main Course", "Rice", "Desserts", "Beverages", 
  "Soups", "Salads", "Tandoori", "Pizza", "Pasta", "Burgers", 
  "Chinese", "South Indian", "Mocktails", "Ice Creams", "Thalis"
];

export const categories: Category[] = categoryNames.map((name, index) => ({
  id: `cat_${index + 1}`,
  name,
  image: `/images/categories/${name.toLowerCase().replace(/ /g, '-')}.png`,
}));

// Dictionary of realistic dish names per category
const realisticDishes: Record<string, string[]> = {
  "Starters": ["Paneer Tikka", "Veg Crispy", "Hara Bhara Kebab", "Chilli Paneer", "Corn Cheese Balls", "French Fries", "Spring Rolls", "Mushroom Tikka", "Gobi Manchurian", "Jalapeno Poppers"],
  "Roti": ["Tandoori Roti", "Butter Naan", "Garlic Naan", "Laccha Paratha", "Missi Roti", "Roomali Roti", "Plain Naan", "Onion Kulcha", "Cheese Garlic Naan", "Tandoori Butter Roti"],
  "Main Course": ["Paneer Butter Masala", "Veg Kadai", "Malai Kofta", "Palak Paneer", "Mix Veg", "Chana Masala", "Dal Makhani", "Paneer Tikka Masala", "Dum Aloo", "Veg Jalfrezi"],
  "Rice": ["Veg Biryani", "Jeera Rice", "Steamed Rice", "Veg Pulao", "Peas Pulao", "Kashmiri Pulao", "Dal Khichdi", "Paneer Biryani", "Schezwan Fried Rice", "Veg Fried Rice"],
  "Desserts": ["Gulab Jamun", "Rasmalai", "Gajar Ka Halwa", "Chocolate Brownie", "Vanilla Ice Cream", "Kesar Pista Kulfi", "Moong Dal Halwa", "Fruit Salad", "Cheesecake", "Tiramisu"],
  "Beverages": ["Fresh Lime Soda", "Cold Coffee", "Mango Lassi", "Sweet Lassi", "Masala Chai", "Filter Coffee", "Virgin Mojito", "Blue Lagoon", "Iced Tea", "Buttermilk"],
  "Soups": ["Tomato Soup", "Sweet Corn Soup", "Manchow Soup", "Hot & Sour Soup", "Clear Veg Soup", "Mushroom Soup", "Minestrone Soup", "Broccoli Almond Soup", "Lemon Coriander Soup", "Pumpkin Soup"],
  "Salads": ["Green Salad", "Russian Salad", "Greek Salad", "Caesar Salad", "Macaroni Salad", "Kachumber Salad", "Sprout Salad", "Corn Salad", "Waldorf Salad", "Caprese Salad"],
  "Tandoori": ["Tandoori Aloo", "Tandoori Mushroom", "Paneer Malai Tikka", "Seekh Kebab", "Tandoori Gobi", "Achari Paneer Tikka", "Peshawari Paneer", "Tandoori Baby Corn", "Hariyali Paneer Tikka", "Tandoori Platter"],
  "Pizza": ["Margherita Pizza", "Farmhouse Pizza", "Veggie Paradise", "Peppy Paneer", "Mexican Green Wave", "Cheese n Corn", "Deluxe Veggie", "Veg Extravaganza", "Tandoori Paneer Pizza", "Four Cheese Pizza"],
  "Pasta": ["Penne Arrabbiata", "Alfredo Pasta", "Pesto Pasta", "Mac n Cheese", "Pink Sauce Pasta", "Spaghetti Aglio e Olio", "Veg Lasagna", "Ravioli", "Mushroom Pasta", "Baked Pasta"],
  "Burgers": ["Veggie Burger", "Aloo Tikki Burger", "Paneer Burger", "Cheese Burger", "Mushroom Burger", "Spicy Bean Burger", "Double Cheese Burger", "Crispy Veg Burger", "BBQ Veg Burger", "Jumbo Veg Burger"],
  "Sandwiches": ["Veg Club Sandwich", "Grilled Cheese Sandwich", "Mumbai Toastie", "Paneer Tikka Sandwich", "Coleslaw Sandwich", "Spinach Corn Sandwich", "Chutney Sandwich", "Mushroom Sandwich", "Veg Mayo Sandwich", "Bombay Sandwich"],
  "Chinese": ["Veg Hakka Noodles", "Veg Fried Rice", "Gobi Manchurian", "Chilli Mushroom", "Veg Spring Roll", "Crispy Corn", "Chop Suey", "Veg Sweet & Sour", "Dragon Potato", "Schezwan Noodles"],
  "South Indian": ["Idli Sambar", "Masala Dosa", "Plain Dosa", "Medu Vada", "Uttapam", "Rava Dosa", "Mysore Masala Dosa", "Upma", "Lemon Rice", "Curd Rice"],
  "North Indian": ["Chole Bhature", "Rajma Chawal", "Amritsari Kulcha", "Aloo Paratha", "Paneer Bhurji", "Dal Tadka", "Kadhi Pakora", "Baingan Bharta", "Bhindi Masala", "Aloo Gobi"],
  "Mocktails": ["Virgin Pina Colada", "Fruit Punch", "Shirley Temple", "Green Apple Soda", "Watermelon Mojito", "Strawberry Margarita", "Peach Iced Tea", "Kiwi Cooler", "Mango Delight", "Sunset Glory"],
  "Ice Creams": ["Vanilla", "Chocolate", "Strawberry", "Butterscotch", "Mango", "Tutti Frutti", "Black Currant", "Pista", "Coffee", "Mint Chocochip"],
  "Shakes": ["Oreo Shake", "Kitkat Shake", "Mango Shake", "Strawberry Shake", "Chocolate Shake", "Vanilla Shake", "Banana Shake", "Brownie Shake", "Cold Coffee with Ice Cream", "Ferrero Rocher Shake"],
  "Juices": ["Orange Juice", "Apple Juice", "Watermelon Juice", "Pineapple Juice", "Mosambi Juice", "Mix Fruit Juice", "Carrot Juice", "Beetroot Juice", "Pomegranate Juice", "Grape Juice"],
  "Chaats": ["Pani Puri", "Bhel Puri", "Sev Puri", "Dahi Puri", "Aloo Tikki Chaat", "Papdi Chaat", "Raj Kachori", "Samosa Chaat", "Basket Chaat", "Palak Patta Chaat"]
};

// Helper to generate generic authentic-sounding names if not explicitly defined
const prefixes = ["Special", "Classic", "Spicy", "Crispy", "Tandoori", "Masala", "Butter", "Garlic", "Cheesy", "Royal"];
const suffixes = ["Delight", "Supreme", "Bites", "Treat", "Special", "Bowl", "Platter", "Magic", "Twist", "Fusion"];

export const menuItems: MenuItem[] = categories.flatMap((cat) => {
  const specificDishes = realisticDishes[cat.name];
  
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

    const isSpecial = Math.random() > 0.8;
    const spiceLevels: SpiceLevel[] = ["Mild", "Medium", "Spicy", null];
    const spice = spiceLevels[Math.floor(Math.random() * spiceLevels.length)];
    
    // Assign realistic prices based on category
    let basePrice = 200;
    if (cat.name === "Roti" || cat.name === "Beverages" || cat.name === "Soups" || cat.name === "Desserts") basePrice = 80;
    else if (cat.name === "Main Course" || cat.name === "Pizza" || cat.name === "Sizzlers") basePrice = 250;
    
    const price = Math.floor(Math.random() * 5 + (basePrice / 20)) * 20; // Round to nearest 20

    return {
      id: `${cat.id}_item_${idx + 1}`,
      name: dishName,
      price: price,
      category: cat.name,
      isVeg: true, 
      isChefSpecial: isSpecial,
      spiceLevel: spice,
      isAvailable: Math.random() > 0.1, 
    };
  });
});
