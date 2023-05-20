import { Link } from "react-router-dom";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { useState } from "react";
import { Button, Form, Input, Main } from "./styles";

export default function Login() {
  const [open, setOpen] = useState(false);

  return (
    <Main>
      <Header open={open} setOpen={setOpen} />

      <Form action="">
        <Input name="email" type="text" placeholder="Email" />
        <Input name="senha" type="text" placeholder="Senha" />
        <Button>Login</Button>
        <span>
          Cliente novo? <Link to={"/cadastro"}>Comece aqui.</Link>
        </span>
      </Form>

      <Footer />
    </Main>
  );
}
