// Basic Express backend for FiveStar Fried Chicken orders

const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 4000;

// Use CORS to allow frontend requests
app.use(cors());
app.use(express.json());

// Mock menu data (in real use, you'd use a database)
const menu = [
  {
    id: 1,
    name: "Classic Fried Chicken Bucket",
    description: "Juicy, crispy fried chicken pieces served in a family bucket.",
    price: 499,
    image: "https://images.pexels.com/photos/33037756/pexels-photo-33037756.jpeg"
  },
  {
    id: 2,
    name: "Spicy Chicken Wings",
    description: "Hot and spicy wings tossed in our secret sauce.",
    price: 299,
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJAy2jWJ9530jebV_V375erA3x5nQ289t1sg&s"
  },
  {
    id: 3,
    name: "Chicken Popcorn",
    description: "Bite-sized crispy chicken popcorn. Perfect snack for all ages.",
    price: 199,
    image: "https://images.unsplash.com/photo-1464306076886-debede12a15b?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    name: "Chicken Burger",
    description: "Tender chicken patty, fresh veggies, and our special sauce.",
    price: 149,
    image: "https://content.jdmagicbox.com/comp/def_content_category/five-star-chicken-11979519-3sgz0i0p7h-250.jpg"
  },
  {
    id: 5,
    name: "Veg Nuggets",
    description: "Crispy vegetarian nuggets made with veggies and spices.",
    price: 99,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/494360458/CY/VP/EY/41057084/frozen-veg-nuggets.jpg"
  },
  {
    id: 6,
    name: "French Fries",
    description: "Golden, crispy French fries served with dip.",
    price: 89,
    image: "https://www.recipetineats.com/tachyon/2022/09/Crispy-Fries_8.jpg"
  },
  {
    id: 7,
    name: "Cheese Balls",
    description: "Cheesy, crunchy balls - perfect for sharing.",
    price: 129,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/494360458/CY/VP/EY/41057084/frozen-veg-nuggets.jpg"
  },
  {
    id: 8,
    name: "Chicken Nuggets",
    description: "Classic chicken nuggets with a golden crunch.",
    price: 159,
    image: "https://5.imimg.com/data5/SELLER/Default/2025/3/494360458/CY/VP/EY/41057084/frozen-veg-nuggets.jpg"
  },
  {
    id: 9,
    name: "Chicken Wrap",
    description: "Soft tortilla wrap filled with spicy chicken, veggies, and sauce.",
    price: 179,
    image: "https://www.momables.com/wp-content/uploads/2024/03/Crispy-chicken-wrap_SQ.jpg"
  },
  {
    id: 10,
    name: "Soft Drink",
    description: "Choice of Coke, Sprite, or Fanta.",
    price: 49,
    image: "https://www.bbassets.com/media/uploads/p/l/40094179_9-pepsi-soft-drink.jpg"
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