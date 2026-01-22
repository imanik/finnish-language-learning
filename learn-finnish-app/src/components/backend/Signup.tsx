import React, { useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import CardWrapper from "../wrapper/CardWrapper";

interface SignupProps {
  onSwitch?: () => void;
}

function SignupUser({onSwitch}: SignupProps) {
  console.log("switch",onSwitch)
  const {signup} = useAuth()
  const [name, setName] = useState("") 
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const user = await signup(name, username, email, password);
      console.log("Signed up:", user);
      // TODO: Redirect or save user info
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.log("Unknown signup error.", error);
        setErrorMsg(error.message);
      } else {
        console.log("Unknown signup error.");
        setErrorMsg("Unknown signup error.");
      }
    }
  };

  return (

        <CardWrapper title="">
       <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-lg border border-teal-700 p-4 mb-6">
         <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold text-teal-400 mb-4">Signup</h2>
       <form id="signup-form"  onSubmit={handleSubmit}>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
            id="signup-name"
            className="bg-gray-900 border border-teal-800 text-teal-200 mb-5 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
        <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Type your username"
            id="signup-username"
            className="bg-gray-900 border border-teal-800 text-teal-200 mb-5 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />

       <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
            id="signup-email"
            className="bg-gray-900 border border-teal-800 text-teal-200 mb-5 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
        <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your [password]"
            id="signup-password"
            className="bg-gray-900 border border-teal-800 text-teal-200 mb-5 p-2 rounded w-full focus:outline-none focus:ring-2 focus:ring-teal-500"
            />
        
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        <button type="submit" className="bg-teal-900 text-white px-4 py-2 rounded hover:bg-teal-300 hover:text-teal-900 transform hover:scale-110 transition duration-200">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-sm text-teal-400">
        Already have an account?{" "}
        <button
          type="button"
          onClick={onSwitch}
          className="text-teal-500 hover:underline"
        >
          Log in
        </button>
      </p>
    </div>
      
      </section>

    </CardWrapper>


  );
}

export default SignupUser;
