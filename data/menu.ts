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
    { name: "Veg Aloo Tikki Schezwan Burger", price: 90 },
    { name: "Paneer Tikki Cheese Burger", price: 110 },
  ],
  "Pizza": [
    { name: "Corn Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Veg Exotic Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Veg Tandoori Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
    { name: "Onion Capcicum Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },

     { name: "Onion Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },
{ name: "Capcicum Cheese Pizza", variants: [{ name: "6 inch", price: 130 }, { name: "8 inch", price: 160 }] },

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

const dishDescriptions: Record<string, string> = {
  // Burgers
  "Veg Aloo Tikki Burger": "Classic golden aloo tikki patty served with creamy mayo, fresh lettuce, and soft toasted buns.",
  "Peri Peri Burger": "Spicy veg burger with a crispy patty, seasoned with hot peri peri mix and tangy burger sauce.",
  "Veg Aloo Tikki Extra Mayo Burger": "Our classic aloo tikki burger loaded with an extra generous dollop of rich, creamy mayonnaise.",
  "Veg Aloo Tikki Schezwan Burger": "Crispy aloo tikki patty topped with fiery Schezwan sauce and crunchy onion slices.",
  "Veg Aloo Tikki Cheese Burger": "Classic aloo tikki burger enhanced with a thick slice of delicious melted cheese.",
  "Peri Peri Cheese Burger": "Spicy peri peri burger combined with a slice of creamy melted cheese for the perfect balance.",
  "Paneer Tikki Burger": "Premium burger featuring a crispy paneer tikki, fresh garden veggies, and house dressing.",
  "Paneer Tikki Cheese Burger": "Rich paneer tikki burger topped with a slice of melted cheese and special herb sauce.",

  // Pizzas
  "Corn Cheese Pizza": "Delicious pizza topped with sweet golden corn kernels and a generous layer of mozzarella cheese.",
  "Veg Exotic Cheese Pizza": "Loaded with exotic veggies like olives, baby corn, bell peppers, and melted mozzarella.",
  "Veg Tandoori Cheese Pizza": "Infused with smoky tandoori sauce, fresh veggies, and a double layer of mozzarella.",
  "Onion Capcicum Pizza": "A classic combination of crunchy onions, green capsicum, and gooey mozzarella cheese.",
  "Onion Cheese Pizza": "Simple yet flavorful pizza topped with sweet sliced onions and lots of mozzarella cheese.",
  "Capcicum Cheese Pizza": "Crisp green capsicum slices layered over tangy pizza sauce and gooey melted cheese.",
  "Plain Cheese Pizza": "Classic delight loaded with pure mozzarella cheese and our signature seasoned tomato sauce.",
  "Paneer Cheese Pizza": "Topped with soft marinated paneer cubes, fresh capsicum, onions, and premium cheese.",
  "Veg B.B.Q. Cheese Pizza": "Drizzled with sweet and smoky BBQ sauce, topped with fresh veggies and gooey cheese.",
  "Super Cheese Bust Pizza": "Ultimate cheese explosion with a liquid cheese base and a double layer of melted mozzarella.",

  // Sandwiches
  "Veg Sandwich": "Fresh bread slices stuffed with sliced cucumbers, tomatoes, potatoes, and savory green chutney.",
  "Chocolate Sandwich": "A sweet sandwich loaded with rich hazelnut chocolate spread between fresh buttered bread.",
  "Veg Cheese Sandwich": "Classic veg sandwich filled with fresh salad veggies and a slice of delicious cheddar cheese.",
  "Plain Cheese Sandwich": "Simple and delicious sandwich filled solely with a slice of cheese and premium butter.",
  "Chocolate Cheese Sandwich": "An indulgent sweet and savory mix of rich chocolate spread and melted cheese slices.",

  // Grilled Sandwiches
  "Veg Grilled Sandwich": "Crispy grilled sandwich stuffed with spiced potatoes, onions, tomatoes, and mint chutney.",
  "Veg Schezwan Grilled Sandwich": "Grilled sandwich with a spicy kick of Schezwan sauce and fresh mixed veggies.",
  "Chocolate Grilled Sandwich": "Toasted grilled sandwich filled with warm, oozing melted chocolate spread.",
  "Veg Cheese Grilled Sandwich": "Crispy grilled sandwich packed with fresh veggies and loaded with melted cheddar cheese.",
  "Plain Cheese Grilled Sandwich": "Perfectly grilled bread slices enclosing a generous layer of melted gooey cheese.",
  "Chocolate Cheese Grilled Sandwich": "Unique combination of rich chocolate spread and melted cheese, grilled to crispy perfection.",
  "Veg Paneer Cheese Grilled Sandwich": "Stuffed with spiced paneer cubes, fresh vegetables, green chutney, and melted cheese.",
  "Veg Pizza Cheese Grilled Sandwich": "Filled with pizza sauce, capsicum, onion, sweet corn, and abundant mozzarella cheese.",

  // French Fries
  "Salted Fries": "Perfectly fried golden potato fries lightly seasoned with sea salt.",
  "Masala Fries": "Golden fries tossed in a spicy, aromatic Indian masala blend.",
  "Peri Peri Fries": "Spicy and tangy fries coated in hot African peri-peri seasoning.",
  "Cheese Fries": "Crispy golden fries served with a generous drizzle of warm, creamy cheese sauce.",
  "Peri Peri Cheese Fries": "Spicy peri-peri fries smothered in warm, rich cheese sauce.",

  // Chaat
  "Pani Puri": "Crispy hollow puris filled with potatoes, sprouts, sweet chutney, and spicy mint water.",
  "Sev Puri": "Crispy flat puris topped with potatoes, onions, chutneys, and a mountain of fine sev.",
  "Masala Puri": "Crushed flat puris soaked in hot spiced peas gravy, topped with onions and sev.",
  "Ragda Kachori": "Crispy kachori stuffed with spiced peas gravy (ragda), sweet and tangy chutneys.",
  "Oli Bhel": "Wet bhel made with puffed rice, chopped veggies, tangy tamarind chutney, and coriander.",
  "Sukhi Bhel": "Dry bhel featuring puffed rice, roasted peanuts, sev, and a light spice blend.",
  "Oli Cheese Bhel": "Traditional wet bhel elevated with a topping of grated processed cheese.",

  // Milkshakes
  "Cold Coffee": "Classic chilled beverage made by blending rich coffee with milk and vanilla ice cream.",
  "Mango Shake": "Creamy milkshake blended with sweet pulp of ripe Alphonso mangoes.",
  "Strawberry Shake": "Sweet and fruity milkshake made with luscious strawberries and milk.",
  "Chocolate Shake": "Thick milkshake blended with rich chocolate syrup and cocoa powder.",
  "Oreo Shake": "Creamy vanilla milkshake blended with crunchy Oreo cookie chunks.",
  "Butterscotch Shake": "Rich milkshake infused with sweet butterscotch syrup and crunchy praline.",

  // Bread Pizza
  "Bread Pizza": "Quick mini pizza prepared on a bread slice with pizza sauce, onions, capsicum, and cheese.",
  "Corn Bread Pizza": "Bread slice toasted with pizza sauce, sweet corn kernels, and melted mozzarella."
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
      description: dishDescriptions[dish.name] || "Delicious specialty prepared with fresh ingredients and authentic taste.",
    };
  });
});
