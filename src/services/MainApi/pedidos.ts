import baseAPI from "./config";

interface PedidoPayload {
  email: string;
  cart_id: string;
  buyer_id: number;
  total_value: string;
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
export function deletarPedido(id: number) {
  return baseAPI.delete(`/order/${id}`);
}
