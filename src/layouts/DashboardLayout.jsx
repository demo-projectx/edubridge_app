import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useUser } from "../components/userContext";

const DashboardLayout = () => {
  const { user } = useUser();

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main Content */}
      <div className="flex flex-1"> 
        {/* Conditional Sidebar */}
        {user && (
          <div className="w-64 fixed h-screen overflow-y-auto">
            <Sidebar />
          </div>
        )}

        {/* Right Side Content */}
        <div className={`flex-1 flex flex-col ${user ? 'ml-64' : ''}`}>
          {/* Navbar */}
          <Navbar />
          
          {/* Main Content Area */}
          <main className="p-6 pt-16"> {/* pt-16 to account for fixed navbar */}
            <Outlet />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
