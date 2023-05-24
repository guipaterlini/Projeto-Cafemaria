import baseAPI from "./config";

interface UsuarioPayload {
  email: string;
  password: string;
}

export function loginUsuario(payload: UsuarioPayload) {
  return baseAPI.post("/login", payload);
}
