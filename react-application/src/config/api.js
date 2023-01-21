import axios from "axios";
import BASE_URL from "../constants/baseUrl"

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((req) => {
  return req;
});

export default instance;