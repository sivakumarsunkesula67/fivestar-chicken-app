require('dotenv').config();
import express, { json } from 'express';
import cors from 'cors';
import sendOrderEmail from './OrderMailer.js';
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(json());

// Menu data (can replace with DB if needed)
const menu = [
  { id: 1, name: "Classic Fried Chicken Bucket", description: "Juicy, crispy fried chicken pieces served in a family bucket.", price: 499, image: "image2.jpg" },
  { id: 2, name: "Spicy Chicken Wings", description: "Hot and spicy wings tossed in our secret sauce.", price: 299, image: "image3.jpg" },
  { id: 3, name: "Chicken Popcorn", description: "Bite-sized crispy chicken popcorn. Perfect snack for all ages.", price: 199, image: "image4.jpg" },
  { id: 4, name: "Chicken Burger", description: "Tender chicken patty, fresh veggies, and our special sauce.", price: 149, image: "image5.jpg" },
  { id: 5, name: "Veg Nuggets", description: "Crispy vegetarian nuggets made with veggies and spices.", price: 99, image: "image6.jpg" },
  { id: 6, name: "French Fries", description: "Golden, crispy French fries served with dip.", price: 89, image: "image7.jpg" },
  { id: 7, name: "Cheese Balls", description: "Cheesy, crunchy balls - perfect for sharing.", price: 129, image: "image8.jpg" },
  { id: 8, name: "Chicken Nuggets", description: "Classic chicken nuggets with a golden crunch.", price: 159, image: "image9.jpg" },
  { id: 9, name: "Chicken Wrap", description: "Soft tortilla wrap filled with spicy chicken, veggies, and sauce.", price: 179, image: "image10.jpg" },
  { id: 10, name: "Soft Drink", description: "Choice of Coke, Sprite, or Fanta.", price: 49, image: "image11.jpg" }
];

// GET /menu - get menu items
app.get('/menu', (req, res) => {
  res.json(menu);
});

// POST /order - place an order and email admin
app.post('/order', async (req, res) => {
  const { items, customer } = req.body;
  if (!items || !customer || !customer.name || !customer.phone) {
    return res.status(400).json({ error: "Missing order items or customer details." });
  }
  const orderId = "FS" + Math.floor(Math.random() * 1000000);
  const order = {
    items,
    customer,
    orderId,
    status: "confirmed"
  };
  try {
    await sendOrderEmail(order);
    res.json({ success: true, order, message: "Order received and email sent!" });
  } catch (err) {
    console.error('Error sending order email:', err);
    res.status(500).json({ success: false, error: err.message });
  }
});

// Health check
app.get('/', (req, res) => {
  res.send("Food order backend running!");
});

app.listen(PORT, () => {
  console.log(`Backend server running on http://localhost:${PORT}`);
});