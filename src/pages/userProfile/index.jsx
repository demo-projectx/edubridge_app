import React, { useState, useEffect } from "react";
import { updateUserProfile } from "../services/user"; // Service function to update the user profile
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUser } from "../../components/userContext";

const UserProfile = () => {
  const { user } = useUser();
  const [profileData, setProfileData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    id: user?.id || "",
    preferences: user?.preferences || {},
  });
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    // Populate profile data if user data changes
    setProfileData({
      name: user?.name,
      email: user?.email,
      id: user?.id,
      preferences: user?.preferences || {},
    });
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfileData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSaveChanges = async (e) => {
    e.preventDefault();
    if (password && password !== confirmPassword) {
      toast.error("Passwords do not match!");
      return;
    }

    try {
      await updateUserProfile({
        ...profileData,
        password: password || undefined,
      });
      toast.success("Profile updated successfully!");
      setIsEditing(false);
    } catch (error) {
      toast.error("Failed to update profile.");
    }
  };

  return (
    <div className="p-8 bg-white rounded-lg shadow-md max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold mb-6 text-center">User Profile</h2>
      <form onSubmit={handleSaveChanges} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={profileData.name}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 border rounded-md ${
              isEditing ? "bg-white" : "bg-gray-100"
            } focus:outline-none focus:ring`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            name="email"
            value={profileData.email}
            onChange={handleInputChange}
            disabled={!isEditing}
            className={`mt-1 block w-full px-3 py-2 border rounded-md ${
              isEditing ? "bg-white" : "bg-gray-100"
            } focus:outline-none focus:ring`}
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">ID</label>
          <input
            type="text"
            name="id"
            value={profileData.id}
            disabled
            className="mt-1 block w-full px-3 py-2 border rounded-md bg-gray-100 focus:outline-none focus:ring"
          />
        </div>

        {/* user.role-Specific Information */}
        {user.role === "teacher" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Teacher Dashboard</h3>
            <p>Access your class insights and tasks here.</p>
          </div>
        )}

        {user.role === "parent" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Parent Dashboard</h3>
            <p>Track your child’s progress and receive alerts here.</p>
          </div>
        )}

        {user.role === "student" && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold">Student Dashboard</h3>
            <p>Access your grades, feedback, and growth metrics here.</p>
          </div>
        )}

        {/* Password Change Section */}
        {isEditing && (
          <>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                New Password
              </label>
              <input
                type="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Confirm New Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-md focus:outline-none focus:ring"
              />
            </div>
          </>
        )}

        <div className="flex justify-between mt-6">
          <button
            type="button"
            onClick={() => setIsEditing(!isEditing)}
            className="px-4 py-2 font-semibold text-white bg-green-600 rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
          >
            {isEditing ? "Cancel" : "Edit Profile"}
          </button>
          {isEditing && (
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            >
              Save Changes
            </button>
          )}
        </div>
      </form>
      <ToastContainer />
    </div>
  );
};

export default UserProfile;
