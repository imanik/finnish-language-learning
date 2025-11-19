import React, { createContext, useContext, useState, useEffect } from "react";
import {
  loginUser as apiLoginUser,
  signupUser as apiSignupUser,
  checkAuth as apiCheckAuth,
} from "../api/auth";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  loading: boolean;
  login: (username: string, password: string) => Promise<User | null>;
  signup: (
    name: string,
    username: string,
    email: string,
    password: string
  ) => Promise<User | null>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  // ✅ Load user from localStorage on first render
  useEffect(() => {
    const savedUser = localStorage.getItem("user");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
      setLoading(false);
    } else {
      // Optional: verify session from API if available
      const initAuth = async () => {
        try {
          const res = await apiCheckAuth();
          if (res.authenticated) {
            setUser(res.user);
            localStorage.setItem("user", JSON.stringify(res.user));
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
    }
  }, []);

  // ✅ Login and store user
  const login = async (
    username: string,
    password: string
  ): Promise<User | null> => {
    const res = await apiLoginUser(username, password);
    if (res.authenticated) {
      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user)); // save
      return res.user;
    }
    return null;
  };

  // ✅ Signup and store user
  const signup = async (
    name: string,
    username: string,
    email: string,
    password: string
  ): Promise<User | null> => {
    const res = await apiSignupUser(name, username, email, password);
    if (res.authenticated) {
      setUser(res.user);
      localStorage.setItem("user", JSON.stringify(res.user)); // save
      return res.user;
    }
    return null;
  };

  // ✅ Logout clears storage and state
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    // optionally call your API logout endpoint
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
