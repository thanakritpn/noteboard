// src/api.js
import axios from "axios";

// Use env variable if available, fallback to localhost in dev
// VITE_API_BASE should be defined in .env.development or .env.production
// Example in .env.production:
// VITE_API_BASE=/api

let BASE_URL;

if (import.meta.env.MODE === "development") {
  BASE_URL = import.meta.env.VITE_API_BASE || "http://localhost:5001/api";
} else {
  // In production, use whatever VITE_API_BASE was injected at build time
  BASE_URL = import.meta.env.VITE_API_BASE || "/api";
}

console.log("API Base URL:", BASE_URL);

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // set true if you use cookies/sessions
});

export default api;
