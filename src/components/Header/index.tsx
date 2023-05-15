import React from "react";
import {
  HeaderDefault,
  ListDefault,
  ListItem,
  InputDefault,
  StyledBurger,
} from "./Style";
import ImageLink from "../ImageLink";

interface Props {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const Header: React.FC<Props> = ({ setOpen, open }) => {
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

        <InputDefault type="text" placeholder="Busque produtos" />

        <ListItem>
          <ImageLink
            src="../../../assets/icons/carrinho.png"
            alt="icone de carrinho"
            href="/carrinho"
          />
        </ListItem>
        <ListItem>
          <a href="/login">LOGIN</a>
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
