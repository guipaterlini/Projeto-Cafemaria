import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";

export default function Login() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <h1>Fazer login</h1>
      <form action="">
        <input name="email" type="text" placeholder="email" />
        <input name="senha" type="text" placeholder="senha" />
        <button>Fazer login</button>
        <span>
          Cliente novo? <Link to={"/cadastro"}>Comece aqui.</Link>
        </span>
      </form>
      <Footer />
    </main>
  );
}
