import React from "react";
import ParentDashboard from "./parent/ParentDashboard";
import TeacherDashboard from "./parent/TeacherDashboard";
import StudentDashboard from "./student/StudentDashboard";
import { useUser } from "../../components/userContext";

const Dashboard = () => {
  const { userRole } = useUser();

  return (
    <div className="p-6">
      {/* Conditionally render based on user role */}
      {userRole === "parent" && <ParentDashboard />}
      {userRole === "teacher" && <TeacherDashboard />}
      {userRole === "student" && <StudentDashboard />}
    </div>
  );
};

export default Dashboard;
