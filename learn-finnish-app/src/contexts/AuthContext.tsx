import React, { createContext, useContext, useState, useEffect } from "react";
import { loginUser as apiLoginUser, signupUser as apiSignupUser, checkAuth as apiCheckAuth } from "../api/auth";

interface User  {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface AuthContextType  {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<User | null>;
  signup: (name: string, username: string, email: string, password: string) => Promise<User | null>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // Check auth on app load
  useEffect(() => {
    const initAuth = async () => {
      try {
        const res = await apiCheckAuth();
        if (res.authenticated) {
          setUser(res.user);
        } else {
          setUser(null);
        }
      } catch (err) {
        console.error("Auth check failed", err);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };
    initAuth();
  }, []);

  // Login
  const login = async (username: string, password: string): Promise<User | null> => {
    const res = await apiLoginUser(username, password);
    if (res.authenticated) {
      setUser(res.user);
      return res.user; // ✅ return user immediately
    }
    return null;
  };

  // Signup
  const signup = async (name: string, username: string, email: string, password: string): Promise<User | null> => {
    const res = await apiSignupUser(name, username, email, password);
    if (res.authenticated) {
      setUser(res.user);
      return res.user; // ✅ return user immediately
    }
    return null;
  };

  // Logout
  const logout = () => {
    setUser(null);
    // optional: call backend logout route
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook for usage
export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
