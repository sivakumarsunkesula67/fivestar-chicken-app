import React from "react";

function Home({ setPage }) {
  return (
    <section className="fade-in" style={{ textAlign: "center", padding: "48px 8px" }}>
      <h1 style={{ fontSize: "2.8rem", color: "#d90429" }}>Welcome to FiveStar Fried Chicken!</h1>
      <p style={{ fontSize: "1.3rem", margin: "24px 0", color: "#333" }}>
        The best fried chicken in town, now available for online orders.
      </p>
      <img
        src="https://b.zmtcdn.com/data/pictures/chains/5/19109745/b868068e1156413264921e894100275c_featured_v2.jpghttps://b.zmtcdn.com/data/pictures/chains/5/19109745/b868068e1156413264921e894100275c_featured_v2.jpg"
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