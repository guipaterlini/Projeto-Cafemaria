import baseAPI from "./config";

interface AdminPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroAdmin(payload: AdminPayload) {
  return baseAPI.post("/admin", payload);
}
export function listarAdmins() {
  return baseAPI.get("/admins");
}
export function listarAdmin() {
  return baseAPI.get("/admin/:id");
}
export function atualizarAdmin() {
  return baseAPI.put("/admin/:id");
}
export function deletarAdmin() {
  return baseAPI.delete("/admin/:id");
}
