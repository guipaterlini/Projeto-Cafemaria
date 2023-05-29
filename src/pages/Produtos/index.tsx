import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import ProductList, { Product } from "../../components/ProductList";
import { Main, TituloH1 } from "./styles";

const products: Product[] = [
  {
    id: 1,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 2,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 3,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 4,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 5,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 6,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 7,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 8,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 9,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 10,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 11,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 12,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 13,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 14,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 15,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 16,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 18,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 19,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 20,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 21,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 22,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 23,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 24,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 25,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 26,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 27,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 28,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 29,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 30,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 31,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 32,
    name: "Produto 1",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 10.99,
  },
  {
    id: 33,
    name: "Produto 2",
    photo: "../../../assets/images/logo-com-nome.png",
    price: 19.99,
  },
  {
    id: 34,
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
