import React, { useState } from "react";
import {
  FaHome,
  FaUserGraduate,
  FaAward,
  FaChalkboardTeacher,
  FaBell,
  FaSignOutAlt,
  FaBars,
} from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GrResources } from "react-icons/gr";
import { Link, useNavigate } from "react-router-dom"; // Correct import
import { useUser } from "./userContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser(); // Fetch user role from context
  const navigate = useNavigate(); // Initialize useNavigate
console.log("user in sidebar",user)
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    // Clear user from state
    setUser(null);

    // Clear user from local storage
    localStorage.removeItem("user");

    // Navigate user to home
    navigate("/"); // Correct way to navigate
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-green-600 fixed top-0 left-0 h-screen w-64 p-4 hidden md:block text-white space-y-6 py-7 px-2 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4">
          <h2 className="text-2xl font-bold">LearnLink</h2>
          <button
            onClick={toggleSidebar}
            className="md:hidden focus:outline-none"
          >
            <FaBars size={24} />
          </button>
        </div>
        {/* Navigation Links */}
        <nav className="mt-10">
          <Link
            to="/dashboard"
            className="flex items-center py-2 px-4 rounded hover:bg-green-500"
          >
            <FaHome className="mr-3" /> Dashboard
          </Link>

          {user?.role === "Parent" && (
            <>
              <Link
                to="/dashboard/parent/child-progress"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaUserGraduate className="mr-3" /> Child Progress
              </Link>
              <Link
                to="/dashboard/parent/behavioral-issues"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaBell className="mr-3" /> Behavioral Issues
              </Link>
              <Link
                to="/dashboard/parent/attendance-alerts"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaAward className="mr-3" /> Attendance Alerts
              </Link>
              <Link
                to="/dashboard/parent/resourcecentre"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <GrResources className="mr-3" /> Resource Center
              </Link>
            </>
          )}

          {user?.role === "Teacher" && (
            <>
              <Link
                to="/dashboard/teacher/student-insights"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaUserGraduate className="mr-3" /> Student Insights
              </Link>
              <Link
                to="/dashboard/teacher/pending-tasks"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaChalkboardTeacher className="mr-3" /> Pending Tasks
              </Link>
              <Link
                to="/dashboard/teacher/notifications"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaBell className="mr-3" /> Notifications
              </Link>
              <Link
                to="/dashboard/teacher/resource-center"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <GrResources className="mr-3" /> Resource Center
              </Link>
            </>
          )}

          {user && user?.role === "Student" && (
            <>
              <Link
                to="/dashboard/student/studentprofile"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <CgProfile className="mr-3" /> Student Profile
              </Link>
              <Link
                to="/dashboard/student/grades"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaAward className="mr-3" /> Grades
              </Link>
              <Link
                to="/dashboard/student/feedback"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaChalkboardTeacher className="mr-3" /> Feedback
              </Link>
              <Link
                to="/dashboard/student/growth-metrics"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaUserGraduate className="mr-3" /> Growth Metrics
              </Link>
              <Link
                to="/dashboard/student/resourcecentre"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <GrResources className="mr-3" /> Resource Center
              </Link>
            </>
          )}
        </nav>
        {/* Sign Out Button */}
        <div className="mt-auto px-4">
          <button
            onClick={handleSignOut}
            className="flex items-center py-2 px-4 rounded hover:bg-red-500 w-full"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </button>
        </div>
      </div>

      {/* Mobile Button */}
      <button
        className="md:hidden text-green-600 focus:outline-none fixed top-4 left-4 z-50"
        onClick={toggleSidebar}
      >
        <FaBars size={24} />
      </button>
    </div>
  );
};

export default Sidebar;
