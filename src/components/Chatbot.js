import { useState, useEffect, useRef } from "react";
import "./Chatbot.css";
import logo from "../assets/icon2.png";

/* 🔑 STRONG DECISION INTENT KEYWORDS */
const decisionKeywords = [
  "we want",
  "we need",
  "our company",
  "our business",
  "can you build",
  "can you develop",
  "need proposal",
  "need quote",
  "want to discuss",
  "contact your team",
  "looking for a vendor",
  "looking for a partner",
  "i need this",
  "i require",
  "i want",
];

const CHAT_API = "https://manovatebackend.onrender.com/api/chat/";

export default function Chatbot({ open, onClose }) {
  const [messages, setMessages] = useState([
   {
  from: "bot",
  text: "Welcome to Manovate AI Assistance. Please let me know what you’d like to explore."
}

  ]);

  const [input, setInput] = useState("");
  const [leadAsked, setLeadAsked] = useState(false);
  const [botTyping, setBotTyping] = useState(false);

  const messagesEndRef = useRef(null);

  /* 🔽 Auto-scroll */
 useEffect(() => {
  if (!messagesEndRef.current) return;

  messagesEndRef.current.scrollIntoView({
    behavior: "smooth",
    block: "end",
  });
}, [messages]);

useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, botTyping]);

  /* ================= SEND MESSAGE ================= */
  const sendMessage = async () => {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");

    // Show user message
    setMessages((prev) => [...prev, { from: "user", text: userText }]);
    setBotTyping(true);

    try {
      const res = await fetch(CHAT_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
    message: userText,
    history: messages.slice(-6), 
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();

      // 1️⃣ Always respond first
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: data.reply },
      ]);

      // 2️⃣ Strong decision intent detection
      const lowerMsg = userText.toLowerCase();
      const isDecisionIntent = decisionKeywords.some((k) =>
        lowerMsg.includes(k)
      );

      // 3️⃣ Soft lead ask (ONLY ONCE)
      if (isDecisionIntent && !leadAsked) {
        setLeadAsked(true);

        setTimeout(() => {
          setMessages((prev) => [
            ...prev,
            {
              from: "bot",
              text:
                "It sounds like you’re considering a real collaboration. I can arrange a follow-up with our team. May I know your name?",
            },
          ]);
        }, 700);
      }
    } catch (error) {
  console.error("Chat API error:", error);

  setMessages((prev) => [
    ...prev,
    {
      from: "bot",
      text:
        "Sorry, I’m having trouble responding right now. Please try again in a moment.",
    },
  ]);
} finally {
      setBotTyping(false);
    }
  };
  /* ================================================= */

  return (
    <div className={`chatbot-wrapper ${open ? "open" : ""}`}>
      {/* HEADER */}
      <div className="chatbot-header">
        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

        <div className="logo-container">
  <img
    src={logo}
    alt="Manovate Technologies"
    className="chatbot-logo"
  />
</div>


        <h2>Manovate AI Assistance</h2>
        <p className="subtitle">How can I help you today?</p>
      </div>

      {/* MESSAGES */}
      <div className="chatbot-messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.from}`}>
            {msg.from === "bot" && (
  <div className="bot-avatar">
    <img src={logo} alt="Manovate" />
  </div>
)}


            <div className="message-content">
  {msg.text.split("\n").map((line, index) => {
  if (line.trim().endsWith(":")) {
    return <p key={index} className="section-title">{line}</p>;
  }

  if (line.trim().startsWith("-")) {
    return (
      <div key={index} className="bullet-line">
        <span className="bullet-dot"></span>
        <span>{line.replace(/^-+\s*/, "")}</span>
      </div>
    );
  }

  return line.trim() ? <p key={index}>{line}</p> : null;
})}

</div>

          </div>
        ))}

        {botTyping && (
          <div className="message bot">
            <div className="bot-avatar">
      <img src={logo} alt="Manovate" />
    </div>
            <div className="message-content">
              <p>Typing…</p>
            </div>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* INPUT */}
      <div className="chatbot-input">
        <input
          type="text"
          placeholder="Message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
        />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}