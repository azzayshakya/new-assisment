"use client";

import AuthForm from "@/components/AuthForm";

export default function LoginPage() {
  const handleLogin = (data) => {
    console.log("Logging in with:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm onSubmit={handleLogin} type="login" />
    </div>
  );
}
