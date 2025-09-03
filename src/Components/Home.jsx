import React from "react";

function Home({ setPage }) {
  return (
    <section className="fade-in" style={{ textAlign: "center", padding: "48px 8px" }}>
      <h1 style={{ fontSize: "2.8rem", color: "#d90429" }}>Welcome to FiveStar Fried Chicken!</h1>
      <p style={{ fontSize: "1.3rem", margin: "24px 0", color: "#333" }}>
        The best fried chicken in town, now available for online orders.
      </p>
      <img
        src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
        alt="Fried Chicken"
        style={{ borderRadius: "25px", maxWidth: "400px", width: "90%", boxShadow: "0 2px 24px rgba(0,0,0,0.13)", margin: "24px 0" }}
      />
      <br />
      <button className="button" onClick={() => setPage("menu")}>
        Order Now
      </button>
    </section>
  );
}

export default Home;