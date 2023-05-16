import { InputDefault } from "./Style";
import axios from "axios";
import { useQuery } from "react-query";



export type Comida = {
    food: string;
    category: string;
    kcal: number;
  };

const pesquisarComida = async (query: string): Promise<Comida[]> => {
    const response = await axios.get(
      `https://foods-json-server.onrender.com/foods?q=${query}`
    );
    return response.data;
  };

export default function ProductSearch() {
    return(
        <InputDefault type="text" placeholder="Busque produtos" />
    )
}