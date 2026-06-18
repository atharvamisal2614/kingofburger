export interface Category {
  id: string;
  name: string;
  image: string; // Placeholder for category image path
}

export interface MenuVariant {
  name: string;
  price: number;
}

export interface MenuItem {
  id: string;
  name: string;
  price?: number;
  variants?: MenuVariant[];
  category: string;
  isVeg: boolean;
  isAvailable: boolean;
}

const categoryNames = [
  "Burger", "Pizza", "Sandwich", "Grilled Sandwich",
  "French Fries", "Chaat", "Milkshake", "Bread Pizza"
];

export const categories: Category[] = categoryNames.map((name, index) => ({
  id: `cat_${index + 1}`,
  name,
  image: `/images/categories/${name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}.png`,
}));

// Dictionary of realistic dish names per category
const exactDishes: Record<string, { name: string, price?: number, variants?: MenuVariant[] }[]> = {
  "Burger": [
    { name: "Veg Aloo Tikki Burger", price: 60 },
    { name: "Peri Peri Burger", price: 70 },
    { name: "Veg Aloo Tikki Extra Mayo Burger", price: 70 },
    { name: "Veg Aloo Tikki Schezwan Burger", price: 70 },
    { name: "Veg Aloo Tikki Cheese Burger", price: 80 },
    { name: "Paneer Tikki Burger", price: 90 },
    { name: "Veg Aloo Tikki Schezwan Burger", price: 90 },
    { name: "Paneer Tikki Cheese Burger", price: 110 },
  ],
  "Pizza": [
    { name: "Corn Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Veg Exotic Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Veg Tandoori Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Onion Capsicum Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Plain Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Paneer Cheese Pizza", variants: [{ name: "6 inch", price: 140 }, { name: "8 inch", price: 170 }] },
    { name: "Veg B.B.Q. Cheese Pizza", variants: [{ name: "6 inch", price: 140 }, { name: "8 inch", price: 170 }] },
    { name: "Super Cheese Bust Pizza", variants: [{ name: "6 inch", price: 170 }, { name: "8 inch", price: 200 }] },

  ],
  "Sandwich": [
    { name: "Veg Sandwich", price: 40 },
    { name: "Chocolate Sandwich", price: 60 },
    { name: "Veg Cheese Sandwich", price: 70 },
    { name: "Plain Cheese Sandwich", price: 70 },
    { name: "Chocolate Cheese Sandwich", price: 90 },
  ],
  "Grilled Sandwich": [
    { name: "Veg Grilled Sandwich", price: 70 },
    { name: "Veg Schezwan Grilled Sandwich", price: 80 },
    { name: "Chocolate Grilled Sandwich", price: 80 },
    { name: "Veg Cheese Grilled Sandwich", price: 100 },
    { name: "Plain Cheese Grilled Sandwich", price: 100 },
    { name: "Chocolate Cheese Grilled Sandwich", price: 110 },
    { name: "Veg Paneer Cheese Grilled Sandwich", price: 130 },
    { name: "Veg Pizza Cheese Grilled Sandwich", price: 130 },
  ],
  "French Fries": [
    { name: "Salted Fries", price: 80 },
    { name: "Masala Fries", price: 90 },
    { name: "Peri Peri Fries", price: 90 },
    { name: "Cheese Fries", price: 120 },
    { name: "Peri Peri Cheese Fries", price: 90 },
  ],
  "Chaat": [
    { name: "Pani Puri", price: 20 },
    { name: "Sev Puri", price: 30 },
    { name: "Masala Puri", price: 30 },
    { name: "Ragda Kachori", price: 30 },
    { name: "Oli Bhel", price: 40 },
    { name: "Sukhi Bhel", price: 40 },
    { name: "Oli Cheese Bhel", price: 70 },

  ],
  "Milkshake": [
    { name: "Cold Coffee", variants: [{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Mango Shake", variants: [{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Strawberry Shake", variants: [{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Chocolate Shake", variants: [{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Oreo Shake", variants: [{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Butterscotch Shake", variants: [{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
  ],
  "Bread Pizza": [
    { name: "Bread Pizza", price: 20 },
    { name: "Corn Bread Pizza", price: 30 }
  ]

};

export const menuItems: MenuItem[] = categories.flatMap((cat) => {
  const specificDishes = exactDishes[cat.name] || [];

  return specificDishes.map((dish, idx) => {
    return {
      id: `${cat.id}_item_${idx + 1}`,
      name: dish.name,
      price: dish.price,
      variants: dish.variants,
      category: cat.name,
      isVeg: true,
      isAvailable: true,
    };
  });
});
