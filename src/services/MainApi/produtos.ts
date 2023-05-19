import baseAPI from "./config";

interface ProdutoPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroProduto(payload: ProdutoPayload) {
  return baseAPI.post("/produto", payload);
}
export function listarProdutos() {
  return baseAPI.get("/produtos");
}
export function listarProduto() {
  return baseAPI.get("/produto/:id");
}
export function atualizarProduto() {
  return baseAPI.put("/produto/:id");
}
export function deletarProduto() {
  return baseAPI.delete("/produto/:id");
}
