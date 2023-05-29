import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import { Product } from "../../components/ProductCard";
import ProductList from "../../components/ProductList";
import { Main, TituloH1 } from "./styles";

const products: Product[] = [
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: "2",
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: "1",
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },

  // Adicione mais produtos aqui
];

export default function Produtos() {
  const [open, setOpen] = React.useState(false);

  return (
    <Main>
      <Header open={open} setOpen={setOpen} />

      <TituloH1> Nossos Produtos</TituloH1>
      <ProductList products={products} itemsPerPage={10} />

      <Footer />
    </Main>
  );
}
