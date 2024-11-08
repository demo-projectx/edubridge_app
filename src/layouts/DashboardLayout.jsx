import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const DashboardLayout = () => {
  return (
    <div className="flex">
      <div className="h-screen overflow-y-auto"><Sidebar/></div>
        
      <Outlet />
    </div>
  );
};

export default DashboardLayout;
