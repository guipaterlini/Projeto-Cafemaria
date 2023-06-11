import React, { useState } from "react";
import ImageLink from "../ImageLink";
import ProductSearch from "../ProductSearch";
import TokenButton from "../LoginBtn";
import { HeaderDefault, ListDefault, ListItem, StyledBurger } from "./styles";
import { Link } from "react-router-dom";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Header: React.FC<Props> = React.memo(({ setOpen, open }) => {
  // Itens do menu do cabeçalho
  const menuItems = [
    { text: "PRODUTOS", href: "/produtos" },
    { text: "CONTATO", href: "/contato" },
    { text: "QUEM SOMOS", href: "/about" },
  ];

  const [inputValue, setInputValue] = useState("");

  return (
    <HeaderDefault>
      {/* Link para a página inicial */}
      <Link to="/">
        <img src="../../../assets/images/logo-com-nome.png" alt="Logo" />
      </Link>

      <ListDefault open={open}>
        {/* Renderiza os itens do menu */}
        {menuItems.map((item, index) => (
          <ListItem key={index}>
            {/* Link para cada item do menu */}
            <Link to={item.href}>{item.text}</Link>
          </ListItem>
        ))}

        <ListItem>
          {/* Componente de busca de produtos */}
          <ProductSearch
            value={inputValue}
            onChange={(value: string) => setInputValue(value)}
          />
        </ListItem>

        <ListItem>
          {/* Componente de link de imagem (por exemplo, carrinho de compras) */}
          <ImageLink
            src="../../../assets/icons/carrinho.png"
            alt="icone de carrinho"
            href="/carrinho"
          />
        </ListItem>
        <ListItem>
          {/* Componente de botão de login/token */}
          <TokenButton />
        </ListItem>
      </ListDefault>

      {/* Ícone do menu responsivo */}
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </HeaderDefault>
  );
});

export default Header;
