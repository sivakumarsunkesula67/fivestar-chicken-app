import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import Cart from "./Components/Cart";
import Order from "./Components/Order";
import OrderSuccess from "./Components/OrderSuccess";
import Chatbot from "./Components/Chatbot";

import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);
  const [orderDetails, setOrderDetails] = useState(null);

  return (
    <div className="app-container">
      <Navbar setPage={setPage} cartCount={cart.length} />
      <Chatbot />
      
      {page === "home" && <Home setPage={setPage} />}
      {page === "menu" && <Menu cart={cart} setCart={setCart} />}
      {page === "cart" && (
        <Cart cart={cart} setCart={setCart} setPage={setPage} />
      )}
      {page === "order" && (
        <Order
          cart={cart}
          setPage={setPage}
          setOrderDetails={setOrderDetails}
        />
      )}
      {page === "success" && <OrderSuccess details={orderDetails} />}
      <footer className="footer">
        © 2025 FiveStar Fried Chicken
      </footer>
    </div>
  );
}

export default App;