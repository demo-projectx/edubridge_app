import React, { useState, useEffect } from "react";

const MessageViewer = ({ messages }) => {
  const [messageList, setMessageList] = useState(messages || []);

  useEffect(() => {
    // Mocking an API call to fetch messages, if needed
    setMessageList(messages || []);
  }, [messages]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h3 className="text-lg font-bold mb-4">Messages from Teachers</h3>
      <div className="space-y-4">
        {messageList.length > 0 ? (
          messageList.map((msg, index) => (
            <div key={index} className="border-b pb-3 mb-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span>{msg.sender}</span>
                <span>{new Date(msg.timestamp).toLocaleString()}</span>
              </div>
              <p className="text-gray-800 mt-1">{msg.content}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No messages available.</p>
        )}
      </div>
    </div>
  );
};

// Sample data, replace with actual props or API data
MessageViewer.defaultProps = {
  messages: [
    {
      sender: "Mr. Smith",
      timestamp: Date.now(),
      content: "Please contact me regarding your child’s performance.",
    },
    {
      sender: "Ms. Johnson",
      timestamp: Date.now() - 86400000,
      content: "Reminder for the parent-teacher meeting.",
    },
  ],
};

export default MessageViewer;
