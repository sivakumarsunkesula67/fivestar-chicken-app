import React, { useState, useRef, useEffect } from "react";

// Simple AI responses
function getAIReply(message) {
  message = message.toLowerCase();
  if (message.includes("menu") || message.includes("chicken")) {
    return "You can view our delicious menu by clicking 'Menu' above! 🍗";
  }
  if (message.includes("order") || message.includes("how to order")) {
    return "Add items to your cart and proceed to order. Need help? Just ask!";
  }
  if (message.includes("thanks") || message.includes("thank you")) {
    return "You're welcome! 😊";
  }
  if (message.includes("hello") || message.includes("hi")) {
    return "Hello! How can I assist you today?";
  }
  if (message.includes("payment") || message.includes("pay")) {
    return "We accept cash on delivery and online payment options!";
  }
  if (message.includes("delivery")) {
    return "We deliver within 5km radius. Orders usually arrive in 30-45 minutes.";
  }
  if (message.includes("open") || message.includes("timing") || message.includes("hours")) {
    return "We are open from 11am to 11pm every day!";
  }
  if (message.includes("location") || message.includes("where")) {
    return "We are located at Main Road, City Center. Check our contact page for details.";
  }
  return "I'm here to help with orders, menu, payment, delivery, and more! Try asking about delivery, payment, or timings.";
}

function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hi! Need help with ordering chicken? Ask me anything." }
  ]);
  const [input, setInput] = useState("");
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (open && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function sendMessage(e) {
    e.preventDefault();
    if (!input.trim()) return;
    setMessages([...messages, { sender: "user", text: input }]);
    setTimeout(() => {
      setMessages((msgs) => [
        ...msgs,
        { sender: "bot", text: getAIReply(input) }
      ]);
    }, 800);
    setInput("");
  }

  return (
    <div className="chatbot-container">
      {open ? (
        <div className="chatbot-card">
          <div className="chatbot-header">
            FiveStar Chatbot
            <button onClick={() => setOpen(false)} style={{ float: "right", background: "none", border: "none", color: "#fff", fontWeight: "bold", fontSize: "1.1rem", cursor: "pointer" }}>×</button>
          </div>
          <div className="chatbot-messages">
            {messages.map((msg, idx) => (
              <div key={idx} style={{
                textAlign: msg.sender === "bot" ? "left" : "right",
                margin: "6px 0"
              }}>
                <span style={{
                  background: msg.sender === "bot" ? "#eee" : "#ffd166",
                  borderRadius: "8px",
                  padding: "7px 14px",
                  display: "inline-block"
                }}>
                  {msg.text}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef}></div>
          </div>
          <form className="chatbot-input" onSubmit={sendMessage}>
            <input
              value={input}
              onChange={e => setInput(e.target.value)}
              placeholder="Ask something..."
              autoFocus
            />
            <button type="submit">Send</button>
          </form>
        </div>
      ) : (
        <button className="button" style={{ borderRadius: "50%", width: "56px", height: "56px", fontSize: "1.6rem", position: "fixed", bottom: "24px", right: "24px", zIndex: 1000 }}
          onClick={() => setOpen(true)}>
          💬
        </button>
      )}
    </div>
  );
}

export default Chatbot;