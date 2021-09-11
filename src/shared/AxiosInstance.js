import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
});

axiosInstace.interceptors.request.use((value) => {
  value.params = value.params || {};
  value.params.api_key = "FdP765MZ2DggQh3FvqMiZBIZD7hKUzDH";
  return value;
});

export { axiosInstace };
