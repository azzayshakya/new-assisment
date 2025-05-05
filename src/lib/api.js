import axios from "axios";

const api = axios.create({
  baseURL: "https://we-chat-backend-kappa.vercel.app",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// api.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => Promise.reject(error)
// );

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.removeItem("authToken");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export const authService = {
  login: async (credentials) => {
    const response = await api.post("/auth/login", credentials);
    if (response.data.token) {
      localStorage.setItem("authToken", response.data.token);
    }
    return response.data;
  },

  register: async (userData) => {
    const response = await api.post("/auth/create-account", userData);
    return response.data;
  },

  logout: () => {
    localStorage.removeItem("authToken");
  },

  forgotPassword: async (email) => {
    const response = await api.post("/auth/forgot-password", { email });
    return response.data;
  },

  resetPassword: async (token, newPassword) => {
    const response = await api.post("/auth/reset-password", {
      token,
      newPassword,
    });
    return response.data;
  },

  getCurrentUser: async () => {
    const response = await api.get("/user/me");
    return response.data;
  },
};

export default api;
