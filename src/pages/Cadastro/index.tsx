import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import { FormEvent, useState } from "react";
import { cadastroUsuario } from "../../services/MainApi/usuarios";

export default function Cadastro() {
  const [email, setEmail] = useState<string>("");
  const [senha, setSenha] = useState<string>("");

  const cadastro = async (event: FormEvent) => {
    event.preventDefault();

    const payload = {
      email,
      senha,
    };

    try {
      const response = await cadastroUsuario(payload);

      if (response.status !== 201) {
        return alert("Deu algo errado");
      }

      alert("Cadastro realizado com sucesso!");
    } catch (error) {
      alert("Deu algo errado");
    }
  };

  return (
    <main>
      <h1>Criar conta</h1>
      <form onSubmit={cadastro}>
        <div>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div>
          <label>Senha</label>
          <input
            type="password"
            value={senha}
            onChange={(event) => setSenha(event.target.value)}
          />
        </div>
        <button type="submit">Crie sua conta</button>
        <span>
          Você já tem uma conta? <Link to={"/login"}>Fazer login</Link>
        </span>
      </form>
      <Footer />
    </main>
  );
}
