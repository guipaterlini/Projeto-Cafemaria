import baseAPI from "./config";

interface PedidoPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroPedido(payload: PedidoPayload) {
  return baseAPI.post("/pedido", payload);
}
export function listarPPedidos() {
  return baseAPI.get("/pedidos");
}
export function listarPedido() {
  return baseAPI.get("/pedido/:id");
}
export function atualizarPedido() {
  return baseAPI.put("/pedido/:id");
}
export function deletarPedido() {
  return baseAPI.delete("/pedido/:id");
}
