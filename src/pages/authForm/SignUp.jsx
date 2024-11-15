import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { apiSignup } from "../services/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../components/userContext";

const SignUp = () => {
  const { user, setUser } = useUser();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [role, setRole] = useState("Student");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData(event.target);
      const payload = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password"),
        role: formData.get("role"),
        // uniqueID: formData.get("uniqueID"),
      };

      const response = await apiSignup(payload);
      if (response.status === 200 || response.status === 201) {
        console.log("Sign up response --->", response.data);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setUser(response.data.user);
        toast.success("Signup successful!");
        navigate("/dashboard");
      }

    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Navbar />
      <ToastContainer position="top-left" autoClose={3000} hideProgressBar />
      <div className="flex items-center justify-center min-h-screen bg-green-50 pt-20">
        <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
          <h2 className="text-3xl font-semibold text-center text-green-700">
            LearnLink Signup
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-green-900">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-900">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-green-900">
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>
            {/* <div>
              <label className="block text-sm font-medium text-green-900">
                ID (Student, Staff, or Parent)
              </label>
              <input
                type="text"
                name="uniqueID"
                required
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div> */}
            <div>
              <label className="block text-sm font-medium text-green-900">
                Role
              </label>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                name="role"
                className="mt-1 block w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              >
                <option value="Teacher">Teacher</option>
                <option value="Parent">Parent</option>
                <option value="Student">Student</option>
              </select>
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white bg-green-600 rounded hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
            >
              {loading ? "Loading..." : "Register"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SignUp;
