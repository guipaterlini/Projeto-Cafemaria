import baseAPI from "./config";

interface CategoriaPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroCategoria(payload: CategoriaPayload) {
  return baseAPI.post("/categories", payload);
}
export function listarCategorias() {
  return baseAPI.get("/categories");
}
export function listarCategoria() {
  return baseAPI.get("/categories/:id");
}
export function atualizarCategoria() {
  return baseAPI.put("/categories/:id");
}
export function deletarCategoria() {
  return baseAPI.delete("/categories/:id");
}
