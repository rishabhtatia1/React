import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-9afd2.firebaseio.com/",
});

export default instance;
