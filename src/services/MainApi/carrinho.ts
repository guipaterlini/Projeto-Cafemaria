import baseAPI from "./config";

interface CarrinhoPayload {
  cart_id?: number;
  user_id: number;
  product_id: number;
  product_quantity: number;
}

export function addToCart(payload: CarrinhoPayload) {
  return baseAPI.post("/cart/add-to-cart", payload);
}
export function listarCarrinho(user_id: number) {
  return baseAPI.get(`/cart/${user_id}`);
}
export function atualizarCarrinho(user_id: number, cart_id: number) {
  return baseAPI.put(`/cart/${user_id}/${cart_id}`);
}
export function atualizarStatusCarrinho(user_id: number, cart_id: number) {
  return baseAPI.put(`/cartupdatestatus/${user_id}/${cart_id}`);
}
export function deletarCarrinho(user_id: number, cart_id: number) {
  return baseAPI.delete(`/cart/${user_id}/${cart_id}`);
}
