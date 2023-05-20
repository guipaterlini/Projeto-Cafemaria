import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export default function Cadastro() {
  return (
    <main>
      <form action="">
        <input name="email" type="text" placeholder="email" />
        <input name="senha" type="text" placeholder="senha" />
        <button>Fazer login</button>
        <span>
          Você já tem uma conta? <Link to={"/login"}>Fazer login</Link>
        </span>
      </form>
      <Footer />
    </main>
  );
}
