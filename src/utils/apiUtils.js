import axios from "axios";
const TOKEN_CYBERSOFFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCAxNCIsIkhldEhhblN0cmluZyI6IjE4LzAzLzIwMjIiLCJIZXRIYW5UaW1lIjoiMTY0NzU2MTYwMDAwMCIsIm5iZiI6MTYyMTE4NDQwMCwiZXhwIjoxNjQ3NzA5MjAwfQ.Gn_duD0LZ6aamu893NNv17QlXn6HTFtyfWIFAIMBjEM";

const api = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn/api/",
});
api.interceptors.request.use(
  (config) => {
    config.headers = {
      ...config.headers,
      TokenCybersoft: TOKEN_CYBERSOFFT,
      Authorization: localStorage.getItem("User")
        ? "Bearer" + JSON.parse(localStorage.getItem("User")).accessToken
        : "",
    };
    return config;
  },
  (errors) => {
    return Promise.reject(errors);
  }
);

export default api;
