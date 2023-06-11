import React from "react";
import {
  InputDefault,
  ResultadosPesquisa,
  SearchComponent,
  LoadingText,
} from "./styles";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { listarProdutos } from "../../services/MainApi/produtos";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export type Produto = {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
};

export default function ProductSearch({ value, onChange }: Props) {
  const caminhoDaPagina = "/produto/";

  // Utiliza o hook useQuery do react-query para realizar a busca dos produtos
  const { data, isLoading, isError } = useQuery(
    ["pesquisaDeProduto", value], // Define uma chave única para a query baseada no valor da pesquisa
    () => findProduct(value), // Função que realiza a busca dos produtos
    {
      enabled: value.length > 2, // Define se a query deve ser executada com base no tamanho do valor da pesquisa
    }
  );

  async function findProduct(query: string): Promise<Produto[]> {
    try {
      const response = await listarProdutos(); // Chama a função listarProdutos para obter os produtos
      const produtos = response.data.result;

      // Filtra os produtos que correspondem à pesquisa com base no título
      const produtosFiltrados = produtos.filter((produto: Produto) =>
        produto.title.toLowerCase().includes(query.toLowerCase())
      );

      return produtosFiltrados;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      throw new Error("Falha ao buscar produtos.");
    }
  }

  return (
    <SearchComponent>
      <InputDefault
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type="text"
        name="produto"
        placeholder="Busque produtos"
      />
      {isLoading && <LoadingText>Carregando ...</LoadingText>}
      {isError && <div>Erro ao buscar produtos.</div>}
      {data && data.length > 0 && (
        <ResultadosPesquisa>
          {/* Renderiza os resultados da pesquisa como links para os produtos */}
          {data.map((produto) => (
            <div className="row" key={produto.id}>
              <div className="column">
                <Link to={caminhoDaPagina + produto.id}>{produto.title}</Link>
              </div>
            </div>
          ))}
        </ResultadosPesquisa>
      )}
    </SearchComponent>
  );
}
