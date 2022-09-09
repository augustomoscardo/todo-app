import axios from "axios";

const development = process.env.NODE_ENV !== "production";

export const api = axios.create({
  baseURL: development
    ? "http://localhost:3000/api"
    : "https://todo-app-roan-three.vercel.app/api",
});
