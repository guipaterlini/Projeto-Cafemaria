//import baseAPI from "./config";

import axios from "axios";

const apiURL = 'https://crudcrud.com/api/61ace0154e9e40b8aa74cb245b39a98d/'
export const baseAPI = axios.create({
  // withCredentials: true,
  baseURL: apiURL,
  // headers: {
  //   "Content-Type": "application/json",
  //   //Authorization: authorizationHeader,
  // },
});

interface CarrinhoPayload {
  email: string;
  senha: string;
}

export function cadastroCarrinho(payload: CarrinhoPayload) {
  return baseAPI.post("/cart/add-to-cart", payload);
}
export function listarCarrinho() {
  return baseAPI.get("/cart/:user_id");
}
export function atualizarCarrinho() {
  return baseAPI.put("/cart/:user_id/:cart_id");
}
export function deletarCarrinho() {
  return baseAPI.delete("/cart/:user_id/:cart_id");
}
