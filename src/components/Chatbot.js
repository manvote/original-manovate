import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import logo from "../assets/icon2.png";

const CHAT_API = "https://manovatebackend.onrender.com/api/chat/";

export default function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Welcome to Manovate AI Assistance. Please let me know what you’d like to explore.",
    },
  ]);
  const [input, setInput] = useState("");
  const [botTyping, setBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  const sendMessage = async () => {
    if (!input.trim()) return;
    const userText = input.trim();
    setInput("");

    setMessages((p) => [...p, { from: "user", text: userText }]);
    setBotTyping(true);

    try {
      const res = await fetch(CHAT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userText }),
      });
      const data = await res.json();
      setMessages((p) => [...p, { from: "bot", text: data.reply }]);
    } catch {
      setMessages((p) => [
        ...p,
        { from: "bot", text: "Sorry, something went wrong." },
      ]);
    } finally {
      setBotTyping(false);
    }
  };

  return (
    <div className={`chatbot-container ${open ? "chatbot-open" : ""}`}>
      {/* HEADER */}
      <div className="chatbot-header">
        <button className="chatbot-close" onClick={onClose}>✕</button>

        <div className="chatbot-logo-circle">
          <img src={logo} alt="Manovate" className="chatbot-logo-img" />
        </div>

        <h2 className="chatbot-heading">Manovate AI Assistance</h2>
        <p className="chatbot-subheading">How can I help you today?</p>
      </div>

      {/* MESSAGES */}
      <div className="chatbot-body">
        {messages.map((msg, i) => (
          <div
            key={i}
            className={`chatbot-row ${
              msg.from === "bot" ? "chatbot-row-bot" : "chatbot-row-user"
            }`}
          >
            {msg.from === "bot" && (
              <div className="chatbot-bot-avatar">
                <img src={logo} alt="M" />
              </div>
            )}
            <div className="chatbot-bubble">{msg.text}</div>
          </div>
        ))}

        {botTyping && (
          <div className="chatbot-row chatbot-row-bot">
            <div className="chatbot-bot-avatar">
              <img src={logo} alt="M" />
            </div>
            <div className="chatbot-bubble">Typing…</div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="chatbot-input">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Message..."
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}
