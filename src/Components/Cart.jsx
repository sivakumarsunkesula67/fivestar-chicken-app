import React from "react";

function Cart({ cart, setCart, setPage }) {
  function updateQty(index, val) {
    const newCart = [...cart];
    newCart[index].qty = Math.max(1, newCart[index].qty + val);
    setCart(newCart);
  }

  function removeItem(index) {
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart(newCart);
  }

  const total = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <section className="fade-in" style={{ padding: "32px 8px" }}>
      <h2 style={{ color: "#d90429" }}>Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, idx) => (
            <div className="card" key={item.id + idx} style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
              <img src={item.image} alt={item.name} style={{ width: "80px", borderRadius: "10px", marginRight: "16px" }} />
              <div style={{ flex: 1 }}>
                <h3 style={{ color: "#d90429", margin: 0 }}>{item.name}</h3>
                <div>
                  <button className="button" style={{ padding: "2px 10px", marginRight: "8px" }} onClick={() => updateQty(idx, -1)}>-</button>
                  <span>{item.qty}</span>
                  <button className="button" style={{ padding: "2px 10px", marginLeft: "8px" }} onClick={() => updateQty(idx, 1)}>+</button>
                </div>
                <p style={{ margin: "8px 0" }}>₹{item.price * item.qty}</p>
                <button className="button" style={{ background: "#333" }} onClick={() => removeItem(idx)}>
                  Remove
                </button>
              </div>
            </div>
          ))}
          <h3>Total: ₹{total}</h3>
          <button className="button" onClick={() => setPage("order")}>Proceed to Order</button>
        </div>
      )}
    </section>
  );
}

export default Cart;