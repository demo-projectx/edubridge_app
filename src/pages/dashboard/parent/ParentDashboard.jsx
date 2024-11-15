import React from "react";
import NotificationsList from "../../messageNotification/NotificationsList"; // Parent-specific notifications component
import MessageViewer from "../../messageNotification/MessageViewer"; // Component for viewing messages from teachers
import AttendanceAlerts from "./AttendanceAllerts";
import BehavioralIssues from "./BehavorialIssue";
import ChildProgress from "./ChildProgress";
import Messages from "./Messages";

// Sample data for parent notifications
const notificationsList = [
  {
    message: "Your child, Felicia, missed a class on 10/27",
    timestamp: "2024-10-27 11:00 AM",
    type: "attendanceAlert",
  },
  {
    message: "Ama received a commendation for excellent performance in Math",
    timestamp: "2024-10-26 9:30 AM",
    type: "achievement",
  },
  {
    message: "Parent-Teacher meeting scheduled for 11/03 at 4:00 PM",
    timestamp: "2024-10-25 3:45 PM",
    type: "eventReminder",
  },
];

const ParentDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">
        Parent Dashboard
      </h2>
      <p className="text-lg text-gray-600 mb-8">
        Track your child’s academic performance, behavioral issues, and
        attendance.
      </p>

      {/* Notifications Section */}
      <div className="my-6 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Notifications
        </h3>
        <NotificationsList notifications={notificationsList} />{" "}
        {/* Displays parent-specific notifications */}
      </div>

      {/* Messaging Section */}
      <div className="my-6 p-6 bg-white shadow-md rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">
          Messages from Teachers
        </h3>
        <MessageViewer />{" "}
        {/* Allows the parent to view messages sent by teachers */}
      </div>
    </div>
  );
};

export default ParentDashboard;
