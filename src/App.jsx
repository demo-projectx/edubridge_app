import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Dashboard from "./pages/dashboard/Index";
import DashboardLayout from "./layouts/DashboardLayout";
import StudentProfile from "./pages/studentProfile/StudentProfile";
import { STUDENT } from "./constants";
import BehavioralIssues from "./pages/dashboard/parent/BehavorialIssue";
import ParentDashboard from "./pages/dashboard/parent/ParentDashboard";
import ChildProgress from "./pages/dashboard/parent/ChildProgress";
import AttendanceAlerts from "./pages/dashboard/parent/AttendanceAllerts";
import Messages from "./pages/dashboard/parent/Messages";
import StudentDashboard from "./pages/dashboard/student/StudentDashboard";
import Feedback from "./pages/dashboard/student/Feedback";
import Grades from "./pages/dashboard/student/Grades";
import GrowthMetrics from "./pages/dashboard/student/GrowthMetrics";
import SignUp from "./pages/authForm/SignUp";
import Login from "./pages/authForm/Login";
import { Bounce, ToastContainer } from "react-toastify";
import UserProfile from "./pages/userProfile";
import ResourceCenter from "./pages/resourceCenter";
import StudentInsights from "./pages/dashboard/teacher/StudentInsights";
import PendingTasks from "./pages/dashboard/teacher/PendingTasks";
import Notifications from "./pages/dashboard/teacher/Notifications";
import TeacherDashboard from "./pages/dashboard/teacher/TeacherDashboard";
import ResourceCenter1 from "./pages/dashboard/teacher/ResourceCenter";
import { useEffect } from "react";
import { useUser } from "./components/userContext";

function App() {
  const { user, setUser } = useUser();

  useEffect(() => {
    // check if there is user information in the local storage
    // if there is, put it in state

    if (localStorage.getItem("user")) {
      setUser(localStorage.getItem("user"));
    }
  }, []);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/signUp",
      element: <SignUp />,
    },

    {
      path: "/login",
      element: <Login />,
    },

    {
      path: "/userprofile",
      element: (
          <UserProfile />

      ),
    },

    {
      path: "/dashboard",
      element: (
       
          <DashboardLayout />
   
      ),
      children: [
        {
          index: true,
          element: <Dashboard />,
        },
      ],
    },

    //Parent----------------
    {
      path: "/dashboard/parent",
      element: (
      
          <DashboardLayout />
      
      ),
      children: [
        {
          index: true,
          element: <ParentDashboard />,
        },
        {
          path: "behavioral-issues",
          element: <BehavioralIssues />,
        },
        {
          path: "child-progress",
          element: <ChildProgress />,
        },
        {
          path: "attendance-alerts",
          element: <AttendanceAlerts />,
        },
        {
          path: "messages",
          element: <Messages />,
        },
        {
          path: "resourcecentre",
          element: <ResourceCenter />,
        },
      ],
    },
    //teacher----------------
    {
      path: "/dashboard/teacher",
      element: (
          <DashboardLayout />
      ),
      children: [
        {
          index: true,
          element: <TeacherDashboard />,
        },
        {
          path: "resource-center",
          element: <ResourceCenter1 />,
        },
        {
          path: "student-insights",
          element: <StudentInsights />,
        },
        {
          path: "pending-tasks",
          element: <PendingTasks />,
        },
        {
          path: "notifications",
          element: <Notifications />,
        },
      ],
    },
    //student----------------
    {
      path: "/dashboard/student",
      element: (
      
          <DashboardLayout />
      ),
      children: [
        {
          index: true,
          element: <StudentDashboard />,
        },
        {
          path: "feedback",
          element: <Feedback />,
        },
        {
          path: "grades",
          element: <Grades />,
        },
        {
          path: "growth-metrics",
          element: <GrowthMetrics />,
        },

        {
          path: "studentprofile",
          element: <StudentProfile student={STUDENT} />,
        },
        {
          path: "resourcecentre",
          element: <ResourceCenter />,
        },
      ],
    },
  ]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
      />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
