// Messages.jsx

import React, { useState } from "react";

const Messages = () => {
  const [messages, setMessages] = useState([
    {
      sender: "Teacher",
      text: "Hello, how is your child doing with the assignments?",
      timestamp: "10:00 AM",
    },
    {
      sender: "Parent",
      text: "Doing well! Thank you for checking in.",
      timestamp: "10:05 AM",
    },
  ]);
  const [newMessage, setNewMessage] = useState("");

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      setMessages([
        ...messages,
        {
          sender: "You",
          text: newMessage,
          timestamp: new Date().toLocaleTimeString(),
        },
      ]);
      setNewMessage("");
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Messages</h2>
      <div className="h-64 overflow-y-scroll mb-4 border p-2 rounded">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 ${msg.sender === "You" ? "text-right" : ""}`}
          >
            <p className="text-sm text-gray-600">{msg.sender}</p>
            <p className="p-2 bg-gray-100 rounded">{msg.text}</p>
            <span className="text-xs text-gray-400">{msg.timestamp}</span>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          placeholder="Type a message"
          className="border rounded-l p-2 flex-grow"
        />
        <button
          onClick={handleSendMessage}
          className="bg-green-500 text-white rounded-r px-4"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Messages;
