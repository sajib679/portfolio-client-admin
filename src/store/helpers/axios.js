import axios from "axios";
import { api } from "../urlConfig";
import store from "../index";
import { authConstants } from "../constant";
const token = window.localStorage.getItem("token");

const axiosInstance = axios.create({
  baseURL: api,
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

axiosInstance.interceptors.request.use((req) => {
  const { auth } = store.getState();
  if (auth.token) {
    req.headers.Authorization = `Bearer ${auth.token}`;
  }
  return req;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error) => {
    const { status } = error.response;
    console.log(error.response);

    if (status === 599) {
      localStorage.clear();
      store.dispatch({ type: authConstants.LOGOUT_SUCCESS });
    }

    return Promise.reject(error);
  }
);
export default axiosInstance;
