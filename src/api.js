import axios from "axios";

const API = axios.create({
  baseURL: "https://manovatebackend.onrender.com/",
});

// Automatically attach admin token
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

export default API;
