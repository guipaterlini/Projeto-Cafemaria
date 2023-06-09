import baseAPI, { authorizationHeader } from "./config";

export interface ProdutoPayload {
  id: number;
  title: string;
  description: string;
  price: number;
  amount: string;
  option: string;
  image: string;
  published: string;
  category_id: number;
}

export function cadastroProduto(payload: FormData) {
  return baseAPI.post("/products", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: authorizationHeader,
    },
  });
}

export function listarProdutos() {
  return baseAPI.get("/products");
}

export function listarProduto(id: number) {
  return baseAPI.get(`/products/${id}`);
}

export function atualizarProduto(id: number, payload: FormData) {
  return baseAPI.put(`/products/${id}`, payload, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: authorizationHeader,
    },
  });
}

export function deletarProduto(id: number) {
  return baseAPI.delete(`/products/${id}`);
}
