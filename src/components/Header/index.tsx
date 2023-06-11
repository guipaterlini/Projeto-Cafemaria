import React, { useState } from "react";

import ImageLink from "../ImageLink";
import ProductSearch from "../ProductSearch";
import TokenButton from "../LoginBtn";

import { HeaderDefault, ListDefault, ListItem, StyledBurger } from "./styles";

type Props = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const Header: React.FC<Props> = ({ setOpen, open }) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <HeaderDefault>
      <a href="/">
        <img src="../../../assets/images/logo-com-nome.png" alt="Logo" />
      </a>

      <ListDefault open={open}>
        <ListItem>
          <a href="/produtos">PRODUTOS</a>
        </ListItem>
        <ListItem>
          <a href="/contato">CONTATO</a>
        </ListItem>
        <ListItem>
          <a href="/about">QUEM SOMOS</a>
        </ListItem>

        <ListItem>
          <ProductSearch value={inputValue} onChange={setInputValue} />
        </ListItem>

        <ListItem>
          <ImageLink
            src="../../../assets/icons/carrinho.png"
            alt="icone de carrinho"
            href="/carrinho"
          />
        </ListItem>
        <ListItem>
          <TokenButton />
        </ListItem>
      </ListDefault>

      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </HeaderDefault>
  );
};

export default Header;
