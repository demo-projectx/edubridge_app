import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import { UserProvider } from "./components/userContext";
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

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },

    {
      path: "/studentprofile",
      element: <StudentProfile student={STUDENT} />,
    },

    {
      path: "/dashboard",
      element: (
        <UserProvider>
          <DashboardLayout />
        </UserProvider>
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
        <UserProvider>
          <DashboardLayout />
        </UserProvider>
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
      ],
    },
    //teacher----------------
    {
      path: "/dashboard/teacher",
      element: (
        <UserProvider>
          <DashboardLayout />
        </UserProvider>
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
      ],
    },
    //student----------------
    {
      path: "/dashboard/student",
      element: (
        <UserProvider>
          <DashboardLayout />
        </UserProvider>
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
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
