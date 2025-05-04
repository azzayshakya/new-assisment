"use client";

import { useState } from "react";

export default function AuthForm({ onSubmit, type = "login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onSubmit({ email, password });
      }}
      className="max-w-md mx-auto p-6 shadow rounded bg-white"
    >
      <h2 className="text-xl font-bold mb-4">
        {type === "login" ? "Login" : "Sign Up"}
      </h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full border p-2 rounded mb-4"
        required
      />
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded"
      >
        {type === "login" ? "Login" : "Sign Up"}
      </button>
    </form>
  );
}
