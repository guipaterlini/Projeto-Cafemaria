import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export default function Cadastro() {
  return (
    <main>
      <form action="">
      <h1>Criar conta</h1>
        <input name="email" type="text" placeholder="email" />
        <input name="senha" type="text" placeholder="senha" />
        <button>Crie sua conta</button>
        <span>
          Você já tem uma conta? <Link to={"/login"}>Fazer login</Link>
        </span>
      </form>
      <Footer />
    </main>
  );
}
