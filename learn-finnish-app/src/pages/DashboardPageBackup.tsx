import React, { useState, useEffect } from "react";
import axios from "axios";

interface Tutorial { id: number; title: string; completed_at: string }
interface Exercise { id: number; title: string; completed_at: string }
interface Quiz { id: number; title: string; score: number; total: number; completed_at: string }
interface Progress { date: string; streak_count: number }
interface Goal { id: number; title: string; description: string; target_date: string; is_completed: boolean }
interface User { id: number; username: string; email: string }

interface CompletedResponse {
  tutorials: Tutorial[];
  exercises: Exercise[];
  quizzes: Quiz[];
}

const Dashboard: React.FC = () => {
  const [user, setUser] = useState<User | null>(null);
  const [completed, setCompleted] = useState<CompletedResponse>({ tutorials: [], exercises: [], quizzes: [] });
  const [progress, setProgress] = useState<Progress[]>([]);
  const [goals, setGoals] = useState<Goal[]>([]);
  const [newGoal, setNewGoal] = useState({ title: "", description: "", target_date: "" });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  useEffect(() => {
    if (user) {
      // Fetch completed items
      axios.get(`http://localhost:5000/api/user/${user.id}/completed`)
        .then((res) => setCompleted(res.data as CompletedResponse))
        .catch((err) => console.error("Error fetching completed items:", err));

      // Fetch progress
      axios.get(`http://localhost:5000/api/user/${user.id}/progress`)
        .then((res) => setProgress(res.data as Progress[]))
        .catch((err) => console.error("Error fetching progress:", err));

      // Fetch goals
      axios.get(`http://localhost:5000/api/user/${user.id}/goals`)
        .then((res) => setGoals(res.data as Goal[]))
        .catch((err) => console.error("Error fetching goals:", err));
    }
  }, [user]);

  const handleLogin = () => {
    axios.post("http://localhost:5000/api/login", loginData)
      .then((res) => {
        setUser(res.data as User);
        setLoginData({ email: "", password: "" });
      })
      .catch((err) => console.error("Error logging in:", err));
  };

  const handleAddGoal = () => {
    if (!user) return;
    axios.post(`http://localhost:5000/api/user/${user.id}/goals`, newGoal)
      .then((res) => {
        setGoals([...goals, res.data as Goal]);
        setNewGoal({ title: "", description: "", target_date: "" });
      })
      .catch((err) => console.error("Error adding goal:", err));
  };

  
  if (!user) {
    return (
      <div>

      
      <div className="min-h-screen bg-gradient-to-br from-purple-500 to-teal-500 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <div className="flex items-center justify-center mb-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-purple-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 01-8 0m8 0a4 4 0 00-8 0m8 0v10m-8 0V7m0 10h8"
              />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-teal-600 text-center mb-4">Login</h1>
          <p className="text-gray-600 text-center mb-6">
            Welcome back! Please login to your account.
          </p>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="p-3 border border-gray-300 rounded-lg w-full mb-4 focus:outline-none focus:ring-2 focus:ring-teal-500"
          />
          <button
            onClick={handleLogin}
            className="w-full bg-gradient-to-r from-purple-500 to-teal-500 text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
          >
            Login
          </button>
        </div>
      </div>
      <div className="min-h-screen bg-teal-50 p-6 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md">
          <h1 className="text-2xl text-teal-700 font-bold mb-4">Login</h1>
          <input
            type="email"
            placeholder="Email"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
            className="p-2 border rounded w-full mb-2"
          />
          <input
            type="password"
            placeholder="Password"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
            className="p-2 border rounded w-full mb-2"
          />
          <button
            onClick={handleLogin}
            className="bg-teal-600 text-white px-4 py-2 rounded hover:bg-teal-700"
          >
            Login
          </button>
        </div>
      </div>
      </div>
    );
  }else{

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-500 to-teal-500 ">
      
      <div className="p-10">

      <h2 className="text-center text-white font-extrabold text-5xl">Welcome, <span className="">{ user.username}</span></h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
        {/* Completed Activities Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-600">Completed Activities</h2>
          </div>
          <div className="text-gray-800">
            <h3 className="font-semibold text-teal-700">Tutorials</h3>
            {completed.tutorials.length === 0 ? (
              <p className="text-gray-600">No tutorials completed.</p>
            ) : (
              <ul className="list-disc pl-5">
                {completed.tutorials.map((item) => (
                  <li key={item.id}>
                    {item.title} (Completed: {new Date(item.completed_at).toLocaleDateString()})
                  </li>
                ))}
              </ul>
            )}
            <h3 className="font-semibold text-teal-700 mt-4">Exercises</h3>
            {completed.exercises.length === 0 ? (
              <p className="text-gray-600">No exercises completed.</p>
            ) : (
              <ul className="list-disc pl-5">
                {completed.exercises.map((item) => (
                  <li key={item.id}>
                    {item.title} (Completed: {new Date(item.completed_at).toLocaleDateString()})
                  </li>
                ))}
              </ul>
            )}
            <h3 className="font-semibold text-teal-700 mt-4">Quizzes</h3>
            {completed.quizzes.length === 0 ? (
              <p className="text-gray-600">No quizzes completed.</p>
            ) : (
              <ul className="list-disc pl-5">
                {completed.quizzes.map((item) => (
                  <li key={item.id}>
                    {item.title} (Score: {item.score}/{item.total}, Completed: {new Date(item.completed_at).toLocaleDateString()})
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>

        {/* Progress & Streaks Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-600">Progress & Streaks</h2>
          </div>
          <div className="text-gray-800">
            {progress.length === 0 ? (
              <p className="text-gray-600">No progress recorded.</p>
            ) : (
              <div>
                <p className="mb-2">Current Streak: {progress[0]?.streak_count || 0} days</p>
                <ul className="list-disc pl-5">
                  {progress.slice(0, 5).map((entry) => (
                    <li key={entry.date}>
                      {new Date(entry.date).toLocaleDateString()}: {entry.streak_count} day(s)
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Goals Card */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-purple-500 mr-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 6v6l4 2m-4-8a9 9 0 110 18 9 9 0 010-18z"
              />
            </svg>
            <h2 className="text-xl font-semibold text-purple-600">Goals</h2>
          </div>
          <div className="mb-4">
            <div className="flex flex-wrap gap-4">
              <input
                type="text"
                placeholder="Goal Title"
                value={newGoal.title}
                onChange={(e) => setNewGoal({ ...newGoal, title: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="text"
                placeholder="Description"
                value={newGoal.description}
                onChange={(e) => setNewGoal({ ...newGoal, description: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg flex-1 focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <input
                type="date"
                value={newGoal.target_date}
                onChange={(e) => setNewGoal({ ...newGoal, target_date: e.target.value })}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
              />
              <button
                onClick={handleAddGoal}
                className="bg-gradient-to-r from-purple-500 to-teal-500 text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
              >
                Add Goal
              </button>
            </div>
          </div>
          {goals.length === 0 ? (
            <p className="text-gray-600">No goals set.</p>
          ) : (
            <ul className="list-disc pl-5 text-gray-800">
              {goals.map((goal) => (
                <li key={goal.id}>
                  {goal.title} - {goal.description} (Due: {new Date(goal.target_date).toLocaleDateString()})
                  {goal.is_completed && " (Completed)"}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    
    
    </div>
  );
}
};

export default Dashboard;