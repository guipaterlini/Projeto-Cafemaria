import baseAPI from "./config";

interface UsuarioPayload {
  nome: string;
  foto: string;
  preco: number;
  descricao: string;
  categoria: string;
}

export function cadastroUsuario(payload: UsuarioPayload) {
  return baseAPI.post("/usuario", payload);
}
export function listarUsuarios() {
  return baseAPI.get("/usuarios");
}
export function listarUsuario() {
  return baseAPI.get("/usuario/:id");
}
export function atualizarUsuario() {
  return baseAPI.put("/usuario/:id");
}
export function deletarUsuario() {
  return baseAPI.delete("/usuario/:id");
}
