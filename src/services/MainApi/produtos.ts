import baseAPI from "./config";

export interface ProdutoPayload {
  id: number;
  title: string;
  description: string;
  price: number;
  amount: string;
  option: string;
  image: string;
  published: string;
}

export function cadastroProduto(payload: FormData) {
  return baseAPI.post("/products", payload);
}

export function listarProdutos() {
  return baseAPI.get("/products");
}
export function listarProduto(id: number) {
  return baseAPI.get(`/products/${id}`);
}
export function atualizarProduto(id: number, payload: ProdutoPayload) {
  return baseAPI.put(`/products/${id}`, payload);
}
export function deletarProduto(id: number) {
  return baseAPI.delete(`/products/${id}`);
}
