const BASE_URL =
  window.location.hostname === "localhost"
    ? "http://localhost:5000/api"
    : "https://fin-learn-backend.onrender.com/api";

export async function loginUser(username: string, password: string) {
  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include", // ✅ cookie support
  });

  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }

  return await response.json();
}

export async function signupUser(name: string, username: string, email: string, password: string) {
  const response = await fetch(`${BASE_URL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, username, email, password }),
    credentials: "include", // ✅ cookie will be sent
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Signup error");
  }

  const data = await response.json();

  // ✅ data.user is returned and cookie is already set
  return data.user;
}

export async function checkAuth() {
  const response = await fetch(`${BASE_URL}/auth/me`, {
    method: "GET",
    credentials: "include", // ✅ cookie must be sent here too
  });

  if (!response.ok) return { authenticated: false };

  return await response.json();
}
