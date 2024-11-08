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
import { Link, Outlet } from "react-router-dom";
import { useUser } from "./UserContext";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { userRole } = useUser(); // Fetch user role from context

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`bg-green-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0 transition duration-200 ease-in-out`}
      >
        <div className="flex items-center justify-between px-4">
          <h2 className="text-2xl font-bold">EduBridge</h2>
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

          {userRole === "parent" && (
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
            </>
          )}

          {userRole === "teacher" && (
            <>
              <Link
                to="/teacher/student-insights"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaUserGraduate className="mr-3" /> Student Insights
              </Link>
              <Link
                to="/teacher/pending-tasks"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaChalkboardTeacher className="mr-3" /> Pending Tasks
              </Link>
              <Link
                to="/teacher/notifications"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaBell className="mr-3" /> Notifications
              </Link>
            </>
          )}

          {userRole === "student" && (
            <>
              <Link
                to="/studentprofile"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <CgProfile className="mr-3" /> Student Profile
              </Link>
              <Link
                to="/student/grades"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaAward className="mr-3" /> Grades
              </Link>
              <Link
                to="/student/feedback"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaChalkboardTeacher className="mr-3" /> Feedback
              </Link>
              <Link
                to="/student/growth-metrics"
                className="flex items-center py-2 px-4 rounded hover:bg-green-500"
              >
                <FaUserGraduate className="mr-3" /> Growth Metrics
              </Link>
            </>
          )}
        </nav>

        {/* Sign Out Link */}
        <div className="mt-auto px-4">
          <Link
            to="/logout"
            className="flex items-center py-2 px-4 rounded hover:bg-red-500"
          >
            <FaSignOutAlt className="mr-3" /> Logout
          </Link>
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
