import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";

export default function Login() {
  return (
    <main>
      <form action="">
        <input name="email" type="text" placeholder="email"/>
        <input name="senha" type="text" placeholder="senha"/>
        <button>Fazer login</button>
        <span>Cliente novo? <Link to={"/"}>Comece aqui.</Link></span>
      </form>
      <Footer />
    </main>
  );
}
