import axios from "axios";

const token = localStorage.getItem("token");
const authorizationHeader = token ? `Bearer ${token}` : undefined;

const baseAPI = axios.create({
  withCredentials: true,
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
    Authorization: authorizationHeader,
  },
});

export default baseAPI;
