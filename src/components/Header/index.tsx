import React from "react";
import {
  HeaderDefault,
  ListDefault,
  ListItem,
  InputDefault,
  Logo,
} from "./Style";
import ImageLink from "../ImageLink";

export default function Header() {
  return (
    <HeaderDefault>
      <a href="/">
        <Logo src="../../../assets/images/logo-com-nome.png" alt="Logo" />
      </a>

      <ListDefault>
        <ListItem>
          <a href="/produtos">PRODUTOS</a>
        </ListItem>
        <ListItem>
          <a href="/contato">CONTATO</a>
        </ListItem>
        <ListItem>
          <a href="/about">QUEM SOMOS</a>
        </ListItem>
      </ListDefault>

      <InputDefault type="text" placeholder="Faça sua pesquisa aqui" />
      <ListDefault>
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
    </HeaderDefault>
  );
}
