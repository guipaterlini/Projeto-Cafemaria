import axios from "axios";

const baseAPI = axios.create({
  baseURL: "http://localhost:4000",
  headers: {
    "Content-Type": "application/json",
  },
});

export default baseAPI;

// const baseAPI = axios.create({
//   withCredentials: true,
//   baseURL: "http://localhost:4000",
//   headers: {
//     "Content-Type": "application/json",
//     Authorization: `Bearer ${localStorage.getItem("token")}`,
//   },
// });

// export default baseAPI;
