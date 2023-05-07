import { Link } from "react-router-dom";
import { FooterDefault, NewsletterContainer, LinksContainer } from "./Style";

export function Footer() {
  return (
    <FooterDefault>
      <NewsletterContainer>
        <h2>Acompanhe nossa newsletter</h2>
        <p>
          Seja o primeiro a saber sobre nossas ofertas especiais, eventos e
          lançamentos de produtos.
        </p>
        <form>
          <input type="text" name="email" placeholder="Seu melhor email" />
          <button aria-label="Digite aqui seu endereço de email">
            Inscreva-se
          </button>
        </form>
      </NewsletterContainer>
      <LinksContainer>
        <ul>
          <h3>Loja</h3>
          <li>
            <Link to="/produtos">Cafés Premium</Link>
          </li>
          <li>
            <Link to="/produtos">Cafés Tradicionais</Link>
          </li>
          <li>
            <Link to="/produtos">Cafeteiras</Link>
          </li>
        </ul>
        <ul>
          <h3>Ajuda</h3>
          <li>
            <Link to="/produtos">Central de Ajuda</Link>
          </li>
          <li>
            <Link to="/produtos">Meus pedidos</Link>
          </li>
          <li>
            <Link to="/produtos">Carrinho</Link>
          </li>
          <li>
            <Link to="/produtos">Política de devolução</Link>
          </li>
          <li>
            <Link to="/produtos">Contato</Link>
          </li>
        </ul>
        <ul>
          <h3>Sobre nós</h3>
          <li>
            <Link to="/produtos">Nossa história</Link>
          </li>
          <li>
            <Link to="/produtos">Seja um representante</Link>
          </li>
          <li>
            <Link to="/produtos">Trabalhe conosco</Link>
          </li>
          <li>
            <Link to="/produtos">Equipe Cafemaria</Link>
          </li>
        </ul>
      </LinksContainer>
    </FooterDefault>
  );
}
