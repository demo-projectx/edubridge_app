import React, { useState } from "react";

const Notifications = () => {
  const [notifications, setNotifications] = useState([
    { id: 1, type: "Alert", message: "Low grade in Math", timestamp: "Oct 20, 10:00 AM" },
    { id: 2, type: "Achievement", message: "Excellent behavior this week", timestamp: "Oct 21, 2:00 PM" },
    { id: 3, type: "Attendance", message: "Absent on Oct 18", timestamp: "Oct 18, 9:00 AM" },
  ]);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md mx-auto mt-8">
      <h2 className="text-xl font-bold mb-4">Notifications</h2>
      <ul className="space-y-4">
        {notifications.map((notification) => (
          <li key={notification.id} className="border-b pb-2">
            <p className={`font-bold ${notification.type === "Alert" ? "text-red-500" : notification.type === "Achievement" ? "text-green-500" : "text-blue-500"}`}>
              {notification.type}
            </p>
            <p>{notification.message}</p>
            <p className="text-xs text-gray-400">{notification.timestamp}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Notifications;
