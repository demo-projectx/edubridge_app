import React from "react";
import ParentDashboard from "./parent/ParentDashboard";
import TeacherDashboard from "./teacher/TeacherDashboard";
import StudentDashboard from "./student/StudentDashboard";
import { useUser } from "../../components/userContext";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const Dashboard = () => {
  // const { userRole } = useUser();
  const { user } = useUser();

  return (
    <div className="p-6">
      {/* Conditionally render based on user role */}
      {user?.role === "Parent" && <ParentDashboard />}
      {user?.role === "Teacher" && <TeacherDashboard />}
      {user?.role === "Student" && <StudentDashboard />}
    </div>
  );
};

export default Dashboard;
