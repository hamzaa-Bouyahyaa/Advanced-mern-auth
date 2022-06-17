import axios from "axios";
axios.defaults.withCredentials = true;
export const API = axios.create({
  baseURL: process.env.REACT_APP_API,
});
