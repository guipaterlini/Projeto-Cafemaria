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

export default function ProductSearch(props: Props) {
  const caminhoDaPagina = "/produto/";

  const { data, isLoading } = useQuery(
    ["pesquisaDeProduto", props.value],
    () => findProduct(props.value),
    { enabled: props.value.length > 2 }
  );

  async function findProduct(query: string): Promise<Produto[]> {
    try {
      const response = await listarProdutos();
      const produtos = response.data.result;

      // Filtrar os produtos que correspondem à pesquisa
      const produtosFiltrados = produtos.filter((produto: Produto) =>
        produto.title.toLowerCase().includes(query.toLowerCase())
      );

      return produtosFiltrados;
    } catch (error) {
      console.error("Erro ao buscar produtos:", error);
      return [];
    }
  }

  return (
    <SearchComponent>
      <InputDefault
        value={props.value}
        onChange={(e) => props.onChange(e.target.value)}
        type="text"
        name="produto"
        placeholder="Busque produtos"
      />
      {isLoading && <LoadingText>Carregando ...</LoadingText>}
      {data && data.length > 0 && (
        <ResultadosPesquisa>
          {data?.map((produto) => (
            <div className="row" key={produto.id}>
              <div className="column">
                <Link to={caminhoDaPagina + produto.id}>
                  {produto.title}
                </Link>
              </div>
            </div>
          ))}
        </ResultadosPesquisa>
      )}
    </SearchComponent>
  );
}
