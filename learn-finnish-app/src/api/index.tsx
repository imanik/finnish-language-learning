const BASE_URL = "http://localhost:5000/api";

export async function loginUser(email: string, password: string) {
  const response = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }

  return await response.json();
}

export async function signupUser(username: string, email: string, password: string) {
  const response = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, email, password }),
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Signup failed");
  }

  return await response.json();
}
