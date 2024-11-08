import React, { useState } from "react";

const MessageSender = ({ onSendMessage }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() === "") {
      setStatus("Please enter a message.");
      return;
    }

    onSendMessage({ content: message, timestamp: Date.now() });
    setMessage(""); // Clear the message input
    setStatus("Message sent successfully!");

    // Clear the status message after a few seconds
    setTimeout(() => setStatus(""), 3000);
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h3 className="text-lg font-bold mb-4">Send a Message to Parent</h3>
      <textarea
        className="w-full p-2 border rounded-md mb-4"
        placeholder="Write your message here..."
        value={message}
        onChange={handleMessageChange}
        rows="4"
      ></textarea>
      <button
        className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
        onClick={handleSendMessage}
      >
        Send Message
      </button>
      {status && <p className="mt-4 text-green-600 font-semibold">{status}</p>}
    </div>
  );
};

export default MessageSender;
