import React from "react";
import { HeaderDefault, ListDefault, ListItem, InputDefault } from "./Style";
import ImageLink from "../ImageLink";

export default function Header() {
  return (
    <HeaderDefault>
      <img src="" alt="Logo" />

      <ListDefault>
        <ListItem>
          <a href="/">Shop</a>
        </ListItem>
        <ListItem>
          <a href="/about">Stories</a>
        </ListItem>
        <ListItem>
          <a href="/contact">About</a>
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
          <a href="/">Login</a>
        </ListItem>
      </ListDefault>
    </HeaderDefault>
  );
}
