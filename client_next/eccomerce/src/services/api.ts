import axios from "axios";

// Create an instance of Axios with custom configurations
const api = axios.create({
  baseURL: "http://localhost:5500/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
