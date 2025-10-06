const BASE_URL = "http://localhost:5000/api";

export async function loginUser(username: string, password: string) {


  const response = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ username, password }),
    credentials: "include"
  });
  
  console.log('Responese', response)
  if (!response.ok) {
    const error = await response.json();
    throw new Error(error.error || "Login failed");
  }

  return await response.json();
}

export async function signupUser(name:string, username: string, email: string, password: string) {
 
  
  const response = await fetch(`${BASE_URL}/auth/register`, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ name, username, email, password }),
  credentials: "include"
});

   if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Signup error");
    }
  
    return response.json(); // { id, username, email }
}

export async function checkAuth() {

  const response = await fetch(`${BASE_URL}/auth/me`,{
    method: 'GET',
    credentials: "include"
  })

    
   if (!response.ok) {
    return { authenticated: false };
  }

     const data = await response.json();
    
     return data
  
}
