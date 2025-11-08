import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { useTheme } from "../../contexts/ThemeContext";
import CardWrapper from "../CardWrapper";

function Profile() {
  const { logout, user } = useAuth();
  const {theme, setTheme} = useTheme()

  const handleLogout = async () => {
    try {
      await logout();
      console.log("Logout successful");
    } catch (error) {
      console.error("Logout failed", error);
    }
  };


  return (
     <CardWrapper title="Your Profile">
       <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-4 mb-6">
        {/* Avatar + Name */}
        <div className="flex flex-col items-center">
          <div className="w-24 h-24 rounded-full bg-teal-600 flex items-center justify-center text-3xl font-bold text-white shadow-md">
            {user?.name?.charAt(0).toUpperCase() ?? "?"}
          </div>
          <h2 className="mt-4 text-2xl font-bold text-teal-300">
            {user?.name ?? "Guest User"}
          </h2>
          <p className="text-teal-400 text-sm">@{user?.username ?? "Signup for tracking your progress!"}</p>
        </div>

        {/* Divider */}
        <div className="border-b border-teal-700 my-4"></div>

        {/* Info */}
        <div className="space-y-3">
          <div className="flex justify-between text-teal-200">
            <span className="font-medium">📧 Email</span>
            <span>{user?.email ?? "N/A"}</span>
          </div>
          <div className="flex justify-between text-teal-200">
            <span className="font-medium">🧠 Quizzes Completed</span>
            <span>12</span>
          </div>
       
          <div className="flex justify-between text-teal-200">
            <span className="font-medium">🎯 Next Milestone</span>
            <span>A1 Certified</span>
          </div>

            <div className="flex justify-between text-teal-200">
            <span className="font-medium">🎯 Theme Style</span>
            <button className={`px-3 py-1 rounded ${
              theme === "light" ? "bg-teal-600 text-white" : "bg-teal-800"
            }`}
            onClick={() => setTheme("light")}>Light</button>
            <button className={`px-3 py-1 rounded ${
              theme === "dark" ? "bg-teal-600 text-white" : "bg-teal-800"
            }`}
             onClick={() => setTheme("dark")}>Dark</button>
            
          </div>
        </div>

        {/* Progress bar */}
        <div className="mt-6">
          <p className="text-sm text-teal-200 mb-1">Progress</p>
          <div className="w-full bg-gray-800 rounded-full h-2">
            <div
              className="bg-teal-500 h-2 rounded-full"
              style={{ width: "45%" }}
            />
          </div>
        </div>

        {/* Logout */}
        </section>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-gray-900 hover:bg-teal-500 text-teal-400 hover:text-teal-900 py-2 rounded-lg shadow-sm shadow-teal-900 transition transform hover:scale-105"
        >
          Logout
        </button>
    </CardWrapper>
  );
}

export default Profile;
