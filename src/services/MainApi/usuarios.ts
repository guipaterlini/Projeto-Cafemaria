import baseAPI from "./config";

interface UsuarioPayload {
  name?: string;
  email: string;
  password: string;
}

export function cadastroUsuario(payload: UsuarioPayload) {
  return baseAPI.post("/users", payload);
}
export function listarUsuarios() {
  return baseAPI.get("/users");
}
export function listarUsuario(id: number) {
  return baseAPI.get(`/users/${id}`);
}
export function atualizarUsuario(id: number, payload: UsuarioPayload) {
  return baseAPI.put(`/users/${id}`, payload);
}
export function deletarUsuario(id: number) {
  return baseAPI.delete(`/users/${id}`);
}
