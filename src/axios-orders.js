import axios from "axios";

const instance = axios.create({
  baseURL: "https://basic-burger-builder.firebaseio.com/"
});

export default instance;