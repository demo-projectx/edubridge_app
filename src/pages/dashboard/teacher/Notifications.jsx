import React from "react";

const Notifications = () => {
  return (
    <div className="p-8 bg-orange-50 shadow-lg rounded-lg max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-orange-800 mb-4">Notifications</h2>
      <p className="text-orange-600 mb-6">Check recent alerts and reminders.</p>
      {/* Notifications (dummy content) */}
      <ul className="space-y-4">
        <li className="p-4 bg-orange-100 rounded-lg">
          <p className="font-semibold">New Student Joined: John Doe</p>
        </li>
        <li className="p-4 bg-orange-100 rounded-lg">
          <p className="font-semibold">Assignment Due: Science Project</p>
        </li>
      </ul>
    </div>
  );
};

export default Notifications;
