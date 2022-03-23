import axios from "axios";

const instance = axios.create({
  baseURL: "http://35.154.134.118/api/admin",
});

export default instance;
