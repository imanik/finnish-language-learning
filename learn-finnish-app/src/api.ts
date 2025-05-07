// src/api.ts
export async function loginUser(email: string, password: string) {
    const response = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Login failed");
    }
  
    return response.json(); // { id, username, email }
  }
  
  export async function signupUser(username: string, email: string, password: string) {
    const response = await fetch("http://localhost:5000/api/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password }),
    });
  
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Signup failed");
    }
  
    return response.json(); // { id, username, email }
  }
  