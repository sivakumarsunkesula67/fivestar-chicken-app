// Basic Express backend for FiveStar Fried Chicken orders

import express, { json } from 'express';
import cors from 'cors';
const app = express();
const PORT = 4000;

// Use CORS to allow frontend requests
app.use(cors());
app.use(json());

// Mock menu data (in real use, you'd use a database)
const menu = [
  {
    id: 1,
    name: "Classic Fried Chicken Bucket",
    description: "Juicy, crispy fried chicken pieces served in a family bucket.",
    price: 499,
    image: "../assets/image2.jpg"
  },
  {
    id: 2,
    name: "Spicy Chicken Wings",
    description: "Hot and spicy wings tossed in our secret sauce.",
    price: 299,
    image: "../assets/image3.jpg"
  },
  {
    id: 3,
    name: "Chicken Popcorn",
    description: "Bite-sized crispy chicken popcorn. Perfect snack for all ages.",
    price: 199,
    image: "../assets/image4.jpg"
  },
  {
    id: 4,
    name: "Chicken Burger",
    description: "Tender chicken patty, fresh veggies, and our special sauce.",
    price: 149,
    image: "../assets/image5.jpg"
  },
  {
    id: 5,
    name: "Veg Nuggets",
    description: "Crispy vegetarian nuggets made with veggies and spices.",
    price: 99,
    image: "../assets/image6.jpg"
  },
  {
    id: 6,
    name: "French Fries",
    description: "Golden, crispy French fries served with dip.",
    price: 89,
    image: "../assets/image7.jpg"
  },
  {
    id: 7,
    name: "Cheese Balls",
    description: "Cheesy, crunchy balls - perfect for sharing.",
    price: 129,
    image: "../assets/image8.jpg"
  },
  {
    id: 8,
    name: "Chicken Nuggets",
    description: "Classic chicken nuggets with a golden crunch.",
    price: 159,
    image: "../assets/image9.jpg"
  },
  {
    id: 9,
    name: "Chicken Wrap",
    description: "Soft tortilla wrap filled with spicy chicken, veggies, and sauce.",
    price: 179,
    image: "../assets/image10.jpg"
  },
  {
    id: 10,
    name: "Soft Drink",
    description: "Choice of Coke, Sprite, or Fanta.",
    price: 49,
    image: "../assets/image11.jpg"
  }
];

// GET /menu - get menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// POST /order - place an order
app.post('/order', (req, res) => {
  const { items, customer } = req.body;
  if (!items || !customer) {
    return res.status(400).json({ error: "Missing order items or customer details." });
  }
  // In real backend, you'd save to DB & send confirmation
  // For now, just echo back the order
  return res.json({
    success: true,
    order: {
      items,
      customer,
      orderId: "FS" + Math.floor(Math.random() * 1000000),
      status: "confirmed"
    }
  });
});

// Health check
app.get('/', (req, res) => {
  res.send("FiveStar Fried Chicken backend running!");
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});
