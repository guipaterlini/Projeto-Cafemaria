import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
import React, { useEffect, useState } from "react";
import ProductList from "../components/ProductList";
import { Main, TituloH1 } from "./styles";
import { listarProdutos } from "../../../services/MainApi/produtos";
import { ProductData } from "../../../type";

export default function Produtos() {
  const [open, setOpen] = React.useState(false); // Estado para controlar o estado do menu lateral
  const [products, setProducts] = useState<ProductData[]>([]); // Estado para armazenar os produtos

  useEffect(() => {
    // Função assíncrona para buscar os produtos
    async function fetchProducts() {
      try {
        const response = await listarProdutos(); // Chamada da API para buscar os produtos
        setProducts(response.data.result || []); // Atualiza o estado dos produtos com a resposta da API
      } catch (error) {
        console.error("Erro ao buscar produtos:", error); // Exibe um erro caso ocorra algum problema na busca dos produtos
      }
    }

    fetchProducts(); // Chama a função para buscar os produtos quando o componente for montado

    // Nota: A dependência vazia [] garante que o useEffect seja executado apenas uma vez, ao montar o componente
  }, []);

  return (
    <Main>
      {/* Componente Header com propriedades de controle do estado do menu lateral */}
      <Header open={open} setOpen={setOpen} />
      {/* Título da página */}
      <TituloH1> Nossos Produtos</TituloH1>
      {/* Componente ProductList com a lista de produtos e a quantidade de itens por página */}
      <ProductList products={products} itemsPerPage={10} />
      {/* Componente Footer */}
      <Footer />
    </Main>
  );
}
