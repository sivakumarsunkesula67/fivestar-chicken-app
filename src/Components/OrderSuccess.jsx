import React from "react";

function OrderSuccess({ details }) {
  return (
    <section className="fade-in" style={{ textAlign: "center", padding: "40px 8px" }}>
      <h2 style={{ color: "#d90429" }}>Thank You for Your Order!</h2>
      <p>Your order has been placed successfully.</p>
      {details && (
        <div style={{ margin: "20px auto", maxWidth: "350px", background: "#fff", borderRadius: "14px", boxShadow: "0 2px 14px rgba(0,0,0,0.1)", padding: "18px" }}>
          <h3>Order ID: {details.orderId}</h3>
          <p>Status: {details.status}</p>
          <p>Name: {details.customer.name}</p>
          <p>Phone: {details.customer.phone}</p>
          <ul>
            {details.items.map((item, idx) => (
              <li key={idx}>{item.name} x {item.qty}</li>
            ))}
          </ul>
        </div>
      )}
      <p style={{ marginTop: "18px" }}>We’ll reach out to you soon!</p>
    </section>
  );
}

export default OrderSuccess;