import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000" });

export const getUser = (userId) => {
  return API.post(`user/${userId}/`, userId);
};
