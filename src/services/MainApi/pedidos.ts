import baseAPI from "./config";

export interface PedidoPayload {
  id?: number;
  cart_id?: number;
  buyer_id?: number;
  total_value?: number;
  cart?: string[];
  created_at?: string;
  buyer?: string;
  order_status?: string;
}

export function cadastroPedido(payload: PedidoPayload) {
  return baseAPI.post("/order", payload);
}
export function listarPedidos() {
  return baseAPI.get("/order");
}
export function listarPedido(id: number) {
  return baseAPI.get(`/order/${id}`);
}
export function atualizarStatus(id: number, payload: PedidoPayload) {
  return baseAPI.put(`/order/${id}`, payload);
}
export function deletarPedido(id: number) {
  return baseAPI.delete(`/order/${id}`);
}
