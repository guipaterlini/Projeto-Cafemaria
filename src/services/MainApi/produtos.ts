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
export function listarProduto() {
  return baseAPI.get("/products/:id");
}
export function atualizarProduto() {
  return baseAPI.put("/products/:id");
}
export function deletarProduto() {
  return baseAPI.delete("/products/:id");
}
