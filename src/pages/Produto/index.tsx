import { useState } from "react";
import { Footer } from "../../components/Footer";
<<<<<<< HEAD
import { Container, ContainerInfo, BotaoAddCarrinho } from "./style";
=======
import Header from "../../components/Header";
>>>>>>> 8731914697e8ad52e780e20337c3e4696215323f

export default function Produto() {
  const [open, setOpen] = useState(false);

  return (
<<<<<<< HEAD
    <>
      <Container>
        <img src="../../../assets/images/cafe-forte.png" alt="" />
        <ContainerInfo>
          <h1>Café Maria Tradicional</h1>
          <p>Uma experiência indulgente para os amantes de café que buscam um sabor intenso e uma dose perfeita de energia para começar o dia.Nosso café forte de torra média é cuidadosamente selecionado a partir dos melhores grãos arábica, provenientes de regiões conhecidas por sua qualidade excepcional. Esses grãos são submetidos a uma torra média precisa, que acentua seus sabores e aromas distintos, sem comprometer a suavidade característica da torra média.O resultado é uma xícara de café encorpado e rico, com um sabor marcante e notas pronunciadas de chocolate amargo, nozes torradas e um toque sutil de caramelo. Cada gole revela uma combinação perfeitamente equilibrada de intensidade e suavidade, oferecendo uma experiência sensorial inigualável.</p>
          <span>R$ 45,00</span>
          <BotaoAddCarrinho> <a href="*">Adicionar ao carrinho</a> </BotaoAddCarrinho>
        </ContainerInfo>
      </Container>

=======
    <main>
      <Header open={open} setOpen={setOpen} />

      <h1>Produto</h1>
>>>>>>> 8731914697e8ad52e780e20337c3e4696215323f
      <Footer />
    </>
  );
}
