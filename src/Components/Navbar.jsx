import React from "react";

function Navbar({ setPage, cartCount }) {
  return (
    <nav className="navbar">
      <div style={{ fontWeight: "bold", fontSize: "1.4rem", letterSpacing: "2px" }}>
        🍗 FiveStar Fried Chicken
      </div>
      <div className="navbar-links">
        <button onClick={() => setPage("home")}>Home</button>
        <button onClick={() => setPage("menu")}>Menu</button>
        <button onClick={() => setPage("cart")}>
          Cart {cartCount > 0 && <span>({cartCount})</span>}
        </button>
      </div>
    </nav>
  );
}

export default Navbar;