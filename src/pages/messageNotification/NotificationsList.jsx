import React, { useState, useEffect } from "react";

const NotificationsList = ({ notifications }) => {
  const [notificationList, setNotificationList] = useState(notifications || []);

  useEffect(() => {
    // Mocking an API call to fetch notifications, if needed
    setNotificationList(notifications || []);
  }, [notifications]);

  return (
    <div className="p-4 bg-white rounded-lg shadow-md max-w-lg mx-auto">
      <h3 className="text-lg font-bold mb-4">Notifications</h3>
      <div className="space-y-4">
        {notificationList.length > 0 ? (
          notificationList.map((notification, index) => (
            <div key={index} className="border-b pb-3 mb-3">
              <div className="flex justify-between text-sm text-gray-500">
                <span>{notification.type}</span>
                <span>{new Date(notification.timestamp).toLocaleString()}</span>
              </div>
              <p className="text-gray-800 mt-1">{notification.message}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-500">No notifications available.</p>
        )}
      </div>
    </div>
  );
};

// Sample data, replace with actual props or API data
NotificationsList.defaultProps = {
  notifications: [
    {
      type: "Low Grade",
      timestamp: Date.now(),
      message: "Your child scored below average in Mathematics.",
    },
    {
      type: "Attendance Alert",
      timestamp: Date.now() - 43200000,
      message: "Your child was absent yesterday.",
    },
  ],
};

export default NotificationsList;
