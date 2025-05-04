"use client";

import AuthForm from "@/components/AuthForm";

export default function SignUpPage() {
  const handleSignUp = (data) => {
    console.log("Signing up with:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <AuthForm onSubmit={handleSignUp} type="signup" />
    </div>
  );
}
