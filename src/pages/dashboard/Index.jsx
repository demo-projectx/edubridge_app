import React from "react";
import ParentDashboard from "./parent/ParentDashboard";
import TeacherDashboard from "./teacher/TeacherDashboard";
import StudentDashboard from "./student/StudentDashboard";
import { useUser } from "../../components/userContext";

const Dashboard = () => {
  const { user } = useUser();

  const renderDashboard = () => {
    switch (user?.role) {
      case "Parent":
        return <ParentDashboard />;
      case "Teacher":
        return <TeacherDashboard />;
      case "Student":
        return <StudentDashboard />;
      default:
        return (
          <div className="text-center py-10">
            <h2 className="text-2xl font-semibold text-gray-700">
              Please log in to access your dashboard
            </h2>
          </div>
        );
    }
  };

  return (
    <div className="w-full">
      {renderDashboard()}
    </div>
  );
};

export default Dashboard;
