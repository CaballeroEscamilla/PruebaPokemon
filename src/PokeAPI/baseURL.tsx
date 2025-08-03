import axios from "axios";

export const instanceAPI = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
});
