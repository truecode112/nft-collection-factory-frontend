import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://dev.goodmealtime.com/nft-collection-api",
  headers: {
    "Content-type": "application/json",
  },
});
