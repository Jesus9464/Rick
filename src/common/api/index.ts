import axios from "axios";
import { handleRejectedHttpErrors } from "../utils/ErrorInterceptor";

const rickAndMorty = axios.create({
  baseURL: "https://rickandmortyapi.com/api",
});

rickAndMorty.interceptors.response.use((response) => {
  if (response.status === 204) {
    return { ...response, data: "Successful update" };
  }

  return response;
}, handleRejectedHttpErrors);

export default rickAndMorty;
