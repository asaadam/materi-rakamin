import axios from "axios";

const axiosInstace = axios.create({
  baseURL: "https://api.giphy.com/v1/gifs",
});

const axiosInstaceUpload = axios.create({
  baseURL: "https://upload.giphy.com/v1/gifs",
});

axiosInstace.interceptors.request.use((value) => {
  value.params = value.params || {};
  value.params.api_key = "FdP765MZ2DggQh3FvqMiZBIZD7hKUzDH";
  return value;
});

axiosInstaceUpload.interceptors.request.use((value) => {
  value.params = value.params || {};
  value.params.api_key = "FdP765MZ2DggQh3FvqMiZBIZD7hKUzDH";
  return value;
});

export { axiosInstace, axiosInstaceUpload };
