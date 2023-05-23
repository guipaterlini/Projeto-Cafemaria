import baseAPI from "./config";

interface CarrinhoPayload {
  email: string;
  senha: string;
}

export function cadastroCarrinho(payload: CarrinhoPayload) {
  return baseAPI.post("/cart", payload);
}
export function listarCarrinhos() {
  return baseAPI.get("/cart");
}
export function listarCarrinho() {
  return baseAPI.get("/cart/:id");
}
export function atualizarCarrinho() {
  return baseAPI.put("/cart/:id");
}
export function deletarCarrinho() {
  return baseAPI.delete("/cart/:id");
}
