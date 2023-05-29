import baseAPI from "./config";

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
