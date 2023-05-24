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
export function listarUsuario() {
  return baseAPI.get("/users/:id");
}
export function atualizarUsuario() {
  return baseAPI.put("/users/:id");
}
export function deletarUsuario() {
  return baseAPI.delete("/users/:id");
}
