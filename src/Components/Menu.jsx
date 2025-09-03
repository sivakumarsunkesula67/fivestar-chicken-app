import React, { useEffect, useState } from "react";

function Menu({ cart, setCart }) {
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/menu")
      .then((r) => r.json())
      .then((data) => {
        setMenu(data);
        setLoading(false);
      });
  }, []);

  function addToCart(item) {
    setCart([...cart, { ...item, qty: 1 }]);
  }

  return (
    <section className="fade-in" style={{ padding: "32px 8px" }}>
      <h2 style={{ color: "#d90429" }}>Menu</h2>
      {loading ? (
        <p>Loading menu...</p>
      ) : (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
          {menu.map((item) => (
            <div className="card" key={item.id} style={{ width: "270px" }}>
              <img src={item.image} alt={item.name} style={{ width: "100%", borderRadius: "10px",height:"150px",objectFit:"cover" }} />
              <h3 style={{ color: "#d90429" }}>{item.name}</h3>
              <p>{item.description}</p>
              <p style={{ fontWeight: "bold", color: "#444" }}>₹{item.price}</p>
              <button className="button" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Menu;