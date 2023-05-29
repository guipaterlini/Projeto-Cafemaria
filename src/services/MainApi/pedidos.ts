import baseAPI from "./config";

interface PedidoPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroPedido(payload: PedidoPayload) {
  return baseAPI.post("/order", payload);
}
export function listarPPedidos() {
  return baseAPI.get("/order");
}
export function listarPedido() {
  return baseAPI.get("/order/:id");
}
export function atualizarPedido() {
  return baseAPI.put("/order/:id");
}
export function deletarPedido() {
  return baseAPI.delete("/order/:id");
}
