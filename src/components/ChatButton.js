import "./ChatButton.css";
import chatbotIcon from "../assets/bot.png"; // 👈 your chatbot image

export default function ChatButton({ onClick }) {
  return (
    <button
      className="chat-button"
      onClick={onClick}
      aria-label="Open chat"
    >
      <img
        src={chatbotIcon}
        alt="Manovate Chatbot"
        className="chat-button-logo"
      />
    </button>
  );
}
