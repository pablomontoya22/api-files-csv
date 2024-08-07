import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_API_URL

axios.interceptors.request.use(
  config => {
    return config
  },
  error => Promise.reject(error)
)