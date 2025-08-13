import React, { useState } from "react";
import { loginUser } from "../../api";
import { useAuth } from "../../contexts/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [errorMsg, setErrorMsg] = useState("");


  
  // Inside Login component:
  const { login } = useAuth();
  
  
  const handleSubmit = async (e: React.FormEvent) => {
  
    try {
      const user = await loginUser(email, password);
      login(user); // Save to context and localStorage
      console.log("Logged in:", user);
    } catch (error: unknown) {
    
    }
  };

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setErrorMsg("");

  //   try {
  //     const user = await loginUser(email, password);
  //     console.log("Logged in:", user);
  //     // TODO: Save user info in context or localStorage
  //   } catch (error: unknown) {
  //     if (error instanceof Error) {
  //       setErrorMsg(error.message);
  //     } else {
  //       setErrorMsg("Unknown login error.");
  //     }
  //   }
  // };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full border p-2 mb-2"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full border p-2 mb-2"
          required
        />
        
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
