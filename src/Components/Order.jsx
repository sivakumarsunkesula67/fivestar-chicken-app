import React, { useState } from "react";

function Order({ cart, setPage, setOrderDetails }) {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  function submitOrder(e) {
    e.preventDefault();
    setLoading(true);
    fetch("http://localhost:4000/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: cart,
        customer: { name, address, phone }
      })
    })
      .then((r) => r.json())
      .then((data) => {
        setLoading(false);
        setOrderDetails(data.order);
        setPage("success");
      });
  }

  return (
    <section className="fade-in" style={{ padding: "32px 8px", maxWidth: "450px", margin: "auto" }}>
      <h2 style={{ color: "#d90429" }}>Order Details</h2>
      <form onSubmit={submitOrder} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        <input required placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <input required placeholder="Address" value={address} onChange={e => setAddress(e.target.value)} />
        <input required placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        <button className="button" type="submit" disabled={loading}>
          {loading ? "Placing Order..." : "Place Order"}
        </button>
      </form>
    </section>
  );
}

export default Order;