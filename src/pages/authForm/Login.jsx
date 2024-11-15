import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import React, { useState } from "react";
import { apiSignin } from "../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../components/userContext";

const Login = () => {
  const { user, setUser } = useUser()
  const navigate = useNavigate();
  // const [role, setRole] = useState("Student"); // Default role
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData(event.target);
    const email = formData.get("email");
    const pin = formData.get("pin");

    try {
      const response = await apiSignin({ email, pin });
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        toast.success("Login successful!");

        navigate("/dashboard");
      }
    } catch (error) {
      console.log(error)
      toast.error("Login failed! Please check your credentials.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-green-50 pt-20">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-center text-green-700">
            LearnLink Login
          </h2>

          {/* Role selection */}
          {/* <div className="text-center my-4">
            <label className="font-semibold text-gray-700">Login as:</label>
            <div className="flex justify-center mt-2 space-x-4">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Student"
                  checked={role === "Student"}
                  onChange={() => setRole("Student")}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-gray-700">Student</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Teacher"
                  checked={role === "Teacher"}
                  onChange={() => setRole("Teacher")}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-gray-700">Teacher</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  name="role"
                  value="Parent"
                  checked={role === "Parent"}
                  onChange={() => setRole("Parent")}
                  className="text-green-600 focus:ring-green-500"
                />
                <span className="ml-2 text-gray-700">Parent</span>
              </label>
            </div>
          </div> */}

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-3 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Pin Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                PIN
              </label>
              <input
                type="password"
                name="pin"
                required
                className="mt-1 block w-full px-3 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-green-500 focus:border-green-500"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              {loading ? "Logging in..." : "Login"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
      <ToastContainer position="top-left" autoClose={3000} hideProgressBar />
    </div>
  );
};

export default Login;
