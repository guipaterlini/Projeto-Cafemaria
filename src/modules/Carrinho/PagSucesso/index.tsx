import { useState } from "react";
import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
import { Container, BotaoHome } from "./style";

export default function Sucesso() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />

      <Container>
        <h1>Compra realizada com sucesso!</h1>
        <BotaoHome><a href="*">Voltar a Página Inicial</a></BotaoHome>
      </Container>

      <Footer />
    </>
  );
}
