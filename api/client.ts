import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://66.94.96.175:3333",
  headers: {
    "Content-type": "application/json",
  },
});
