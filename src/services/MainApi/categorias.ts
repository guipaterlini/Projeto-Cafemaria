import baseAPI from "./config";

interface CategoriaPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroCategoria(payload: CategoriaPayload) {
  return baseAPI.post("/categoria", payload);
}
export function listarCategorias() {
  return baseAPI.get("/categorias");
}
export function listarCategoria() {
  return baseAPI.get("/categoria/:id");
}
export function atualizarCategoria() {
  return baseAPI.put("/categoria/:id");
}
export function deletarCategoria() {
  return baseAPI.delete("/categoria/:id");
}
