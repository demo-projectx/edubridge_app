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
import { AiFillMessage } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import { useUser } from "./userContext";
import axios from "axios";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, setUser } = useUser();
  const navigate = useNavigate();

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOut = () => {
    // Clear user context
    setUser(null);
    
    // Remove stored credentials
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    
    // Clear axios auth header
    delete axios.defaults.headers.common["Authorization"];
    
    // Redirect to home page
    navigate("/");
  };

  return (
    <div className="h-full">
      <div className="flex h-full">
        <div
          className={`bg-green-600 fixed top-0 left-0 h-screen w-64 p-4 md:block text-white space-y-6 py-7 px-2 transform ${
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
                  to="/dashboard/parent/messages"
                  className="flex items-center py-2 px-4 rounded hover:bg-green-500"
                >
                  <AiFillMessage className="mr-3" /> Messages
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

            {user?.role === "Student" && (
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

          <div className="mt-auto px-4">
            <button
              onClick={handleSignOut}
              className="flex items-center py-2 px-4 rounded hover:bg-red-500 w-full"
            >
              <FaSignOutAlt className="mr-3" /> Logout
            </button>
          </div>
        </div>

        <button
          className="md:hidden text-green-600 focus:outline-none fixed top-4 left-4 z-50"
          onClick={toggleSidebar}
        >
          <FaBars size={24} />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
