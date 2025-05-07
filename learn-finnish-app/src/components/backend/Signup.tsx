import React, { useState } from "react";
import { signupUser } from "../../api";




function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      const user = await signupUser(username, email, password);
      console.log("Signed up:", user);
      // TODO: Redirect or save user info
    } catch (error: unknown) {
      if (error instanceof Error) {
        setErrorMsg(error.message);
      } else {
        setErrorMsg("Unknown signup error.");
      }
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4">Signup</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="w-full border p-2 mb-2"
          required
        />
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
        {errorMsg && <p className="text-red-500">{errorMsg}</p>}
        <button type="submit" className="bg-green-600 text-white px-4 py-2">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Signup;
