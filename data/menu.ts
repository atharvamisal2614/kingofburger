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
  description?: string;
  image: string;
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
    { name: "Peri Peri Cheese Burger", price: 90 },
    { name: "Paneer Tikki Burger", price: 90 },
    { name: "Veg Aloo Tikki Schezwan Cheese Burger", price: 90 },
    { name: "Paneer Tikki Cheese Burger", price: 110 },
  ],
  "Pizza": [
    { name: "Corn Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Veg Exotic Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Veg Tandoori Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Onion Capcicum Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Onion Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Capcicum Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },

    { name: "Mushroom Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },

    { name: "Plain Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Paneer Cheese Pizza", variants: [{ name: "6 inch", price: 140 }, { name: "8 inch", price: 170 }] },

    { name: "Paneer Capcicum Cheese Pizza", variants: [{ name: "6 inch", price: 140 }, { name: "8 inch", price: 170 }] },

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
    { name: "Cold Coffee", variants: [{name: "Half", price:50},{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Mango Shake", variants: [{name: "Half", price:50},{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Strawberry Shake", variants: [{name: "Half", price:50},{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Chocolate Shake", variants: [{name: "Half", price:50},{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Oreo Shake", variants: [{name: "Half", price:50},{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
    { name: "Butterscotch Shake", variants: [{name: "Half", price:50},{ name: "Regular", price: 80 }, { name: "With Ice Cream", price: 100 }] },
  ],
  "Bread Pizza": [
    { name: "Bread Pizza", price: 20 },
    { name: "Corn Bread Pizza", price: 30 }
  ]

};

const dishDescriptions: Record<string, string> = {
  // Burgers
  "Veg Aloo Tikki Burger": "Classic golden potato patty with creamy mayo.",
  "Peri Peri Burger": "Spicy burger with hot peri-peri seasoning.",
  "Veg Aloo Tikki Extra Mayo Burger": "Classic aloo tikki burger with extra mayonnaise.",
  "Veg Aloo Tikki Schezwan Burger": "Crispy aloo tikki topped with Schezwan sauce.",
  "Veg Aloo Tikki Cheese Burger": "Classic aloo tikki burger with melted cheese.",
  "Peri Peri Cheese Burger": "Spicy peri peri burger with melted cheese.",
  "Paneer Tikki Burger": "Premium burger with crispy paneer patty.",
  "Paneer Tikki Cheese Burger": "Premium paneer burger with melted cheese.",

  // Pizzas
  "Corn Cheese Pizza": "Delicious pizza topped with sweet corn kernels.",
  "Veg Exotic Cheese Pizza": "Loaded with exotic veggies and mozzarella cheese.",
  "Veg Tandoori Cheese Pizza": "Infused with smoky tandoori sauce and cheese.",
  "Onion Capcicum Pizza": "Classic combination of crunchy onions and capsicum.",
  "Onion Cheese Pizza": "Simple pizza topped with sweet onions.",
  "Capcicum Cheese Pizza": "Crisp green capsicum layered over cheese.",
  "Plain Cheese Pizza": "Classic pizza loaded with pure mozzarella.",
  "Paneer Cheese Pizza": "Topped with soft marinated paneer cubes.",
  "Veg B.B.Q. Cheese Pizza": "Drizzled with sweet and smoky BBQ sauce.",
  "Super Cheese Bust Pizza": "Ultimate cheese explosion with liquid cheese base.",
  "Mushroom Cheese Pizza" : "Loaded with juicy mushrooms and melted cheese.",
  "Paneer Capcicum Cheese Pizza" : "Delicious combo of paneer and crunchy capsicum.",

  // Sandwiches
  "Veg Sandwich": "Fresh bread stuffed with sliced vegetables.",
  "Chocolate Sandwich": "Sweet sandwich loaded with rich chocolate spread.",
  "Veg Cheese Sandwich": "Classic veg sandwich with cheddar cheese slice.",
  "Plain Cheese Sandwich": "Simple sandwich filled solely with cheese.",
  "Chocolate Cheese Sandwich": "Sweet and savory mix of chocolate spread.",

  // Grilled Sandwiches
  "Veg Grilled Sandwich": "Crispy grilled sandwich with spiced vegetables.",
  "Veg Schezwan Grilled Sandwich": "Grilled sandwich with spicy Schezwan sauce.",
  "Chocolate Grilled Sandwich": "Toasted grilled sandwich filled with chocolate.",
  "Veg Cheese Grilled Sandwich": "Crispy grilled sandwich loaded with cheese.",
  "Plain Cheese Grilled Sandwich": "Perfectly grilled bread with melted cheese.",
  "Chocolate Cheese Grilled Sandwich": "Indulgent combination of chocolate and cheese.",
  "Veg Paneer Cheese Grilled Sandwich": "Stuffed with spiced paneer and cheese.",
  "Veg Pizza Cheese Grilled Sandwich": "Filled with pizza sauce and mozzarella cheese.",

  // French Fries
  "Salted Fries": "Golden potato fries seasoned with sea salt.",
  "Masala Fries": "Golden fries tossed in spicy Indian masala.",
  "Peri Peri Fries": "Spicy fries coated in peri-peri seasoning.",
  "Cheese Fries": "Crispy fries drizzled with warm cheese sauce.",
  "Peri Peri Cheese Fries": "Spicy peri-peri fries with warm cheese.",

  // Chaat
  "Pani Puri": "Crispy puris filled with spicy mint water.",
  "Sev Puri": "Flat puris topped with delicious chutneys.",
  "Masala Puri": "Puris soaked in hot spiced peas gravy.",
  "Ragda Kachori": "Crispy kachori stuffed with spiced peas gravy.",
  "Oli Bhel": "Wet bhel made with puffed rice.",
  "Sukhi Bhel": "Dry bhel featuring a light spice blend.",
  "Oli Cheese Bhel": "Traditional wet bhel topped with cheese.",

  // Milkshakes
  "Cold Coffee": "Classic chilled beverage blended with ice cream.",
  "Mango Shake": "Creamy milkshake blended with ripe mango pulp.",
  "Strawberry Shake": "Fruity milkshake made with fresh strawberries.",
  "Chocolate Shake": "Thick milkshake blended with rich chocolate.",
  "Oreo Shake": "Creamy milkshake blended with Oreo cookies.",
  "Butterscotch Shake": "Rich milkshake infused with sweet butterscotch.",

  // Bread Pizza
  "Bread Pizza": "Quick mini pizza prepared on bread.",
  "Corn Bread Pizza": "Bread slice toasted with sweet corn."
};

export const menuItems: MenuItem[] = categories.flatMap((cat) => {
  const specificDishes = exactDishes[cat.name] || [];

  return specificDishes.map((dish, idx) => {
    const categorySlug = cat.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const dishSlug = dish.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    return {
      id: `${cat.id}_item_${idx + 1}`,
      name: dish.name,
      price: dish.price,
      variants: dish.variants,
      category: cat.name,
      isVeg: true,
      isAvailable: true,
      description: dishDescriptions[dish.name] || "Delicious specialty prepared with fresh ingredients.",
      image: `/images/dishes/${categorySlug}/${dishSlug}.jpg`,
    };
  });
});
