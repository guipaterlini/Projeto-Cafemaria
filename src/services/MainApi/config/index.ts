import axios from "axios";

const apiURL = "https://api-ecommerce-cafemaria.onrender.com/";
const token = localStorage.getItem("token");
export const authorizationHeader = token ? `Bearer ${token}` : undefined;

const baseAPI = axios.create({
  baseURL: apiURL,
  headers: {
    "Content-Type": "application/json",
    Authorization: authorizationHeader,
  },
});

export default baseAPI;
