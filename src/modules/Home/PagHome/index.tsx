import { Footer } from "../../../components/Footer";
import BannerCarrossel from "../components/BannerCarrossel";
import { FirstContainer } from "./styles";
import Header from "../../../components/Header";
import { useState } from "react";

export default function Home() {
  // Define o estado para controlar a abertura/fechamento do menu
  const [open, setOpen] = useState(false);

  return (
    <main>
      {/* Componente do cabeçalho */}
      <Header open={open} setOpen={setOpen} />

      {/* Container principal */}
      <FirstContainer>
        <h1>O Café da Família Brasileira</h1>
        <p>
          Há mais de sete décadas, a Café Maria é sinônimo de qualidade e
          tradição no universo do café brasileiro. Com cuidado e dedicação em
          cada etapa do processo, desde a colheita dos grãos até a torrefação
          artesanal. Nossa história e tradição estão em cada xícara.
        </p>
        {/* Link para a página de produtos */}
        <a href="/produtos" key="link-produtos">
          <button>Nossos Produtos</button>
        </a>
      </FirstContainer>

      {/* Componente do carrossel de banner */}
      <BannerCarrossel />

      {/* Componente do rodapé */}
      <Footer />
    </main>
  );
}
