import baseAPI from "./config";

interface ProdutoPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroProduto(payload: ProdutoPayload) {
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
