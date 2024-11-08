import React from "react";

const TeacherNotificationsList = ({ notifications }) => {
  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <h3 className="text-lg font-bold mb-4">Teacher Notifications</h3>
      <ul>
        {notifications.map((notification, index) => (
          <li
            key={index}
            className="mb-2 p-2 bg-gray-100 rounded-md shadow-sm border border-gray-200"
          >
            <p className="text-gray-800 font-medium">{notification.message}</p>
            <p className="text-xs text-gray-500">{notification.timestamp}</p>
            {notification.type === "studentAlert" && (
              <p className="text-sm text-red-500">Action Needed</p>
            )}
          </li>
        ))}
      </ul>

      {notifications.length === 0 && (
        <p className="text-gray-600">No notifications available.</p>
      )}
    </div>
  );
};

export default TeacherNotificationsList;
