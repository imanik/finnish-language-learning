import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import CardWrapper from "../CardWrapper";

interface LoginProps {
  onSwitch?: () => void;   // 👈 a function passed from MainContent
}

function Login({ onSwitch }: LoginProps) {
  const { login } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
   // console.log("Submitting login…", { username, password });
    try {
      const user = await login(username, password);  // 🔑 this updates context + UI
    //  console.log("Login successful", user);
    } catch (error) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("Unknown signup error.");
      }
    }
  };

 

  return (
    <CardWrapper title="Track Your Progress">
      <section className="bg-gray-900 rounded-lg border border-teal-700 p-4 mb-6">
        <h2 className="text-xl text-teal-400 font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="bg-gray-900 border border-teal-800 text-teal-200 mb-5 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-gray-900 border border-teal-800 text-teal-200 mb-5 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            required
          />
          {errorMsg && <p className="text-red-500">{errorMsg}</p>}
          <button type="submit" className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-2002">
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-teal-400">
        Don’t have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-teal-500 hover:underline"
        >
          Sign up
        </button>
      </p>

      </section>
    </CardWrapper>
  );
}

export default Login;
