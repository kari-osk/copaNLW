import axios from "axios";

//utilizar numero ip, mão utilizar localhost pode dar erro
export const api = axios.create({
  baseURL: "http://192.168.15.21:3333",
});
