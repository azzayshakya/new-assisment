"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { authService } from "@/lib/api";

const AuthForm = ({ type = "login", onSubmit }) => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  
  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      let response;
      if (type === "login") {
        response = await authService.login(formData);
      } else {
        response = await authService.register(formData);
      }
      
      if (onSubmit) {
        onSubmit(formData);
      }
      
      // Simulate a delay for the spinner to be visible
      setTimeout(() => {
        setIsLoading(false);
        // Redirect or handle success based on your app's flow
        if (type === "login") {
          router.push("/dashboard");
        } else {
          router.push("/login");
        }
      }, 1500);
    } catch (error) {
      setIsLoading(false);
      console.error("Auth error:", error);
      setErrors(prev => ({
        ...prev,
        form: error.response?.data?.message || "Authentication failed"
      }));
    }
  };
  
  return (
    <div className="w-full max-w-md">
      <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-all hover:scale-105">
        <div className="px-6 py-8 sm:p-10">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-1">
              {type === "login" ? "Welcome back" : "Create account"}
            </h2>
            <p className="text-sm text-gray-500">
              {type === "login" 
                ? "Sign in to access your account" 
                : "Sign up to get started"}
            </p>
          </div>
          
          <div className="mt-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email address
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-3 border ${
                      errors.email ? 'border-red-300' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                    placeholder="you@example.com"
                  />
                </div>
                {errors.email && (
                  <p className="mt-2 text-sm text-red-600">{errors.email}</p>
                )}
              </div>
              
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete={type === "login" ? "current-password" : "new-password"}
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none block w-full px-3 py-3 border ${
                      errors.password ? 'border-red-300' : 'border-gray-300'
                    } rounded-md shadow-sm placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200`}
                    placeholder="••••••••"
                  />
                </div>
                {errors.password && (
                  <p className="mt-2 text-sm text-red-600">{errors.password}</p>
                )}
              </div>
              
              {type === "login" && (
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                      Forgot your password?
                    </Link>
                  </div>
                </div>
              )}
              
              {errors.form && (
                <div className="rounded-md bg-red-50 p-4">
                  <div className="flex">
                    <div className="ml-3">
                      <p className="text-sm text-red-700">{errors.form}</p>
                    </div>
                  </div>
                </div>
              )}
              
              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 
                  hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 
                  transition-all duration-200 ${isLoading ? 'opacity-80' : ''}`}
                >
                  {isLoading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      {type === "login" ? "Signing in..." : "Creating account..."}
                    </>
                  ) : (
                    <>{type === "login" ? "Sign in" : "Create account"}</>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 sm:px-10">
          <p className="text-xs text-center text-gray-500">
            {type === "login" ? (
              <>
                Don't have an account yet?{" "}
                <Link href="/register" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                  Create an account
                </Link>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <Link href="/login" className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200">
                  Sign in
                </Link>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;