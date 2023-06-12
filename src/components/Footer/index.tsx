import { Link } from "react-router-dom";
import {
  FooterDefault,
  NewsletterContainer,
  LinksContainer,
  FormNewsLetter,
} from "./styles";
import React, { useState } from "react";

// Links da seção "Loja"
const storeLinks = [
  { text: "Cafés Premium", to: "/produtos" },
  { text: "Cafés Tradicionais", to: "/produtos" },
  { text: "Cafeteiras", to: "/produtos" },
];

// Links da seção "Ajuda"
const helpLinks = [
  { text: "Central de Ajuda", to: "/helpcenter" },
  { text: "Meus pedidos", to: "/meuspedidos" },
  { text: "Carrinho", to: "/carrinho" },
  { text: "Política de devolução", to: "/politicas" },
  { text: "Contato", to: "/contato" },
];

// Links da seção "Sobre nós"
const aboutLinks = [
  { text: "Nossa história", to: "/about" },
  { text: "Seja um representante", to: "/contato" },
  { text: "Trabalhe conosco", to: "/contato" },
  { text: "Equipe Cafemaria", to: "/nossaequipe" },
];

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (email.trim() !== "") {
      alert("Obrigado por se inscrever!");
    }
  };

  return (
    <FooterDefault>
      {/* Seção da Newsletter */}
      <NewsletterContainer>
        <h2>Acompanhe nossa newsletter</h2>
        <p>
          Seja o primeiro a saber sobre nossas ofertas especiais, eventos e
          lançamentos de produtos.
        </p>
        <FormNewsLetter>
          <input
            type="text"
            name="email"
            placeholder="Seu melhor email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            aria-label="Digite aqui seu endereço de email"
            onClick={handleSubscribe}
          >
            Inscreva-se
          </button>
        </FormNewsLetter>
      </NewsletterContainer>

      {/* Seção de Links */}
      <LinksContainer>
        {/* Lista de links da seção "Loja" */}
        <ul>
          <h3>Loja</h3>
          {storeLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>

        {/* Lista de links da seção "Ajuda" */}
        <ul>
          <h3>Ajuda</h3>
          {helpLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>

        {/* Lista de links da seção "Sobre nós" */}
        <ul>
          <h3>Sobre nós</h3>
          {aboutLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.to}>{link.text}</Link>
            </li>
          ))}
        </ul>
      </LinksContainer>
    </FooterDefault>
  );
}
