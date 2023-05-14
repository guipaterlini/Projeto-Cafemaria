import { Link } from "react-router-dom";
import {
  FooterDefault,
  NewsletterContainer,
  LinksContainer,
  FormNewsLetter,
} from "./Style";

export function Footer() {
  return (
    <FooterDefault>
      <NewsletterContainer>
        <h2>Acompanhe nossa newsletter</h2>
        <p>
          Seja o primeiro a saber sobre nossas ofertas especiais, eventos e
          lançamentos de produtos.
        </p>
        <FormNewsLetter>
          <input type="text" name="email" placeholder="Seu melhor email" />
          <button aria-label="Digite aqui seu endereço de email">
            Inscreva-se
          </button>
        </FormNewsLetter>
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
            <Link to="/helpcenter">Central de Ajuda</Link>
          </li>
          <li>
            <Link to="/meuspedidos">Meus pedidos</Link>
          </li>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>
          <li>
            <Link to="/politicas">Política de devolução</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
        <ul>
          <h3>Sobre nós</h3>
          <li>
            <Link to="/about">Nossa história</Link>
          </li>
          <li>
            <Link to="/contato">Seja um representante</Link>
          </li>
          <li>
            <Link to="/contato">Trabalhe conosco</Link>
          </li>
          <li>
            <Link to="/nossaequipe">Equipe Cafemaria</Link>
          </li>
        </ul>
      </LinksContainer>
    </FooterDefault>
  );
}
