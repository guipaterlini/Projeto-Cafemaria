import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import {
  baseAPI,
  listarCarrinho,
  atualizarCarrinho,
  cadastroCarrinho,
  deletarCarrinho,
} from "../../services/MainApi/carrinho";

import carrinho from "../../services/MainApi/config";
import CartTable from "../../components/CartTable";
import { Container } from "./style";

interface Produto {
  _id: string;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

function randomNumber(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

export default function Carrinho() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const productObject = {
    name: "produto",
    category: "categoria",
    price: randomNumber(80, 1200),
    quantity: 1,
  };
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    baseAPI.get("/cart").then((response) => setCart(response.data));
  };

  const handleAddItem = () => {
    baseAPI.post("/cart", productObject).then((response) => {
      getData();
      console.log(response);
      console.log("Disparou addItem");
    });
  };

  const handleRemoveItem = (item: Produto) => {
    console.log({ item });
    console.log("disparou remove item");
  };
  const handleUpdateItem = () => {
    return;
  };

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <main>
        <h1>Carrinho</h1>
        {/* <button onClick={handleAddItem} style={{padding: '5px 10px', margin: '15px' }}>add to cart</button> */}
        <div className="cart-content">
          <Container>
            <thead>
              <th>Produto</th>
              <th>Preço</th>
              <th>Quantidade</th>
              <th>Total</th>
              <th>-</th>
            </thead>
            <tbody>
              {cart.map((props: Produto) => (
                <CartTable
                  data={props}
                  key={props._id}
                  handleRemoveItem={() => handleRemoveItem(props)}
                />
              ))}
              ;
              {cart.length === 0 && (
                <tr>
                  <td colSpan={5} style={{ textAlign: "center" }}>
                    <b>Carrinho de compras vazio.</b>
                  </td>
                </tr>
              )}
            </tbody>
          </Container>
        </div>
      </main>

      <Footer />
    </main>
  );
}
