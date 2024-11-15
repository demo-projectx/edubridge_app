import React from "react";
import TeacherNotificationsList from "../../messageNotification/TeacherNotificationList"; // Import teacher-specific notifications component
import MessageSender from "../../messageNotification/MessageSender"; // Allows the teacher to send messages to parents
import PendingTasks from "./PendingTasks";
import StudentInsights from "./StudentInsights";
import Notifications from "./Notifications";
import ResourceCenter1 from "./ResourceCenter";

// Sample data for teacher notifications
const teacherNotifications = [
  {
    message: "Student John Doe missed class",
    timestamp: "2024-10-28 10:30 AM",
    type: "studentAlert",
  },
  {
    message: "Assignment 3 submission is pending for review",
    timestamp: "2024-10-27 9:00 AM",
    type: "taskReminder",
  },
  {
    message: "New message from Parent of Jane Doe",
    timestamp: "2024-10-26 2:15 PM",
    type: "parentMessage",
  },
];

const TeacherDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Teacher Dashboard
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        View student insights, pending tasks, and notifications.
      </p>

      {/* Notifications Section */}
      <div className="my-6 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Notifications
        </h3>
        <TeacherNotificationsList notifications={teacherNotifications} />
      </div>

      {/* Messaging Section */}
      <div className="my-6 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Message Parents
        </h3>
        <MessageSender /> {/* Allows the teacher to send messages to parents */}
      </div>
    </div>
  );
};

export default TeacherDashboard;
