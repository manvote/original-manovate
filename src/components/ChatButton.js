import "./ChatButton.css";
import logo from "../assets/icon2.png";

export default function ChatButton({ onClick }) {
  return (
    <button
      className="chat-button"
      onClick={onClick}
      aria-label="Open chat"
    >
      <img
        src={logo}
        alt="Manovate Chat"
        className="chat-button-logo"
      />
    </button>
  );
}
