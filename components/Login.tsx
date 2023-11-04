"use client";

import { useEffect, useState } from "react";
import { useStore } from "@/store/UserStore";
import { account } from "@/appwrite";
import { getCurrentUser } from "@/lib/getCurrentUser";

const Login = () => {
  const { user, setUser } = useStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    const fetchUser = async () => {
      const currentUser = await getCurrentUser();
      setUser(currentUser);
    };

    fetchUser();
  }, []);

  const login = async (email: string, password: string) => {
    await account.createEmailSession(email, password);
    const currentUser = await getCurrentUser();
    setUser(currentUser);
  };

  const register = async (name: string, email: string, password: string) => {
    await account.create(name, email, password);
    login(email, password);
  };

  const logout = async () => {
    await account.deleteSession("current");
    setUser(null);
  };

  if (!user) {
    return (
      <div>
        <p>Not logged in</p>
        <form className="flex flex-col items-center justify-between">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => login(email, password)}>
            Login
          </button>
          <button type="button" onClick={() => register(name, email, password)}>
            Register
          </button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <p>Logged in as {user.name}</p>
      <button type="button" onClick={logout}>
        Logout
      </button>
    </div>
  );
};

export default Login;
