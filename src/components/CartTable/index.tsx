import React, { useEffect } from "react";
import { listarCarrinho } from "../../services/MainApi/carrinho";

interface CartTableProps {
  data: Produto;
  handleRemoveItem: (props: Produto) => void;
  userId: number | undefined;
}

interface Produto {
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

const CartTable = (props: CartTableProps) => {
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await listarCarrinho(props.userId || 0);
        // setCarrinhoProdutos(response.data);
      } catch (error) {
        alert("algo deu errado");
      }
    };
    getData();
  }, []);

  useEffect(() => console.log(props));

  return (
    <tr>
      <td>
        <div className="produto">
          <div className="info">
            <div className="nome">{props.data.name}</div>
          </div>
        </div>
      </td>
      <td>{props.data.price}</td>
      <td>
        <div className="quantidade">
          <button>
            <i> - </i>
          </button>
          <span>{props.data.quantity}</span>
          <button>
            <i> + </i>
          </button>
        </div>
      </td>
      <td>{props.data.price * props.data.quantity}</td>
      <td>
        <button
          className="btn-remove-produto"
          onClick={() => props.handleRemoveItem(props.data)}
        >
          <i> remover </i>
        </button>
      </td>
    </tr>
  );
};

export default CartTable;
