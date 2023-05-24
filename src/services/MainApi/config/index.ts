import axios from "axios";

const apiURL = "https://reqres.in/api"
const token = localStorage.getItem("token");
const authorizationHeader = token ? `Bearer ${token}` : undefined;

const baseAPI = axios.create({
  // withCredentials: true,
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: authorizationHeader,
  },
});

export default baseAPI;
