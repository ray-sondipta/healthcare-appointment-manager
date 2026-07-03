import axios from "axios";

const api = axios.create({
  baseURL: "https://healthcare-appointment-manager-avjx.onrender.com",
});

export default api;