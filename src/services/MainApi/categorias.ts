import baseAPI from "./config";

interface CategoriaPayload {
  title: string;
  description: string;
  published: string;
}

export function cadastroCategoria(payload: FormData) {
  return baseAPI.post("/categories", payload);
}
export function listarCategorias() {
  return baseAPI.get("/categories");
}
export function listarCategoria(id: number) {
  return baseAPI.get(`/categories/${id}`);
}
export function atualizarCategoria(id: number, payload: FormData) {
  return baseAPI.put(`/categories/${id}`, payload);
}
export function deletarCategoria(id: number) {
  return baseAPI.delete(`/categories/${id}`);
}
