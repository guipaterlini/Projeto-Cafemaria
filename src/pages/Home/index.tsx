import { Footer } from "../../components/Footer";
import BannerCarrossel from "../../components/BannerCarrossel";
import { FirstContainer } from "./Style";

export default function Home() {
  return (
    <main>
      <FirstContainer>
        <h1>O Café da Família Brasileira</h1>
        <p>
          Há mais de sete décadas, a Café Maria é sinônimo de qualidade e
          tradição no universo do café brasileiro. Com cuidado e dedicação em
          cada etapa do processo, desde a colheita dos grãos até a torrefação
          artesanal. Nossa história e tradição estão em cada xícara.
        </p>
        <a href="/produtos">
          <button>Nossos Produtos</button>
        </a>
      </FirstContainer>

      <BannerCarrossel />

      <Footer />
    </main>
  );
}
