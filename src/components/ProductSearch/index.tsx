import { InputDefault, ResultadosPesquisa, SearchComponent, LoadingText } from "./Style";
import axios from "axios";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export type Produto = {
  food: string;
  category: string;
};

const findProduct = async (query: string): Promise<Produto[]> => {
  const response = await axios.get(
    `https://foods-json-server.onrender.com/foods?q=${query}`
  );
  return response.data;
};

export default function ProductSearch(props: Props) {
  const caminhoDaPagina = "/produto/";

  const { data, isLoading } = useQuery(
    ["pesquisaDeProduto", props.value],
    () => findProduct(props.value),
    { enabled: props.value.length > 2 }
  );

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
            <div className="row" key={produto.food}>
              <div className="column">
                <Link to={caminhoDaPagina + produto.category}>{produto.food}</Link>
              </div>
            </div>
          ))}
        </ResultadosPesquisa>
      )}
    </SearchComponent>
  );
}
