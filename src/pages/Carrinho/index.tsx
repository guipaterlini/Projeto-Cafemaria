import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import { addToCart, listarCarrinho } from "../../services/MainApi/carrinho";
import CartTable from "../../components/CartTable";
import { Container } from "./style";
import * as jose from "jose";

interface CarrinhoPayload {
  user_id: number;
  name: string;
  category: string;
  price: number;
  quantity: number;
}

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
  const [cart, setCart] = useState<Produto[]>([]);
  let userId: number | undefined;
  const token = localStorage.getItem("token");

  if (token) {
    const decodedToken = jose.decodeJwt(token);
    userId = decodedToken.id as number;
  } else {
    console.error("Usuário não está logado.");
  }


  const productObject: CarrinhoPayload = {
    user_id: userId ?? -1,
    name: "produto",
    category: "categoria",
    price: randomNumber(80, 1200),
    quantity: 1,
  };

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    if (userId) {
      const id = Number(userId);
      listarCarrinho(id)
        .then((response) => {
          const responseData = response.data;
          if (Array.isArray(responseData)) {
            setCart(responseData);
          } else {
            console.error("Dados inválidos retornados do servidor. Esperava-se uma matriz.");
          }
        })
        .catch((error) => {
          console.error("Erro ao obter os dados do carrinho:", error);
        });
    }
  };
  

  const handleAddItem = () => {
    addToCart(productObject as CarrinhoPayload).then((response) => {
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
            <table>
              <thead>
                <tr>
                  <th>Produto</th>
                  <th>Preço</th>
                  <th>Quantidade</th>
                  <th>Total</th>
                  <th>-</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((props: Produto) => (
                  <CartTable
                    data={props}
                    key={props._id}
                    handleRemoveItem={handleRemoveItem}
                    userId={userId}
                  />
                ))}
                {cart.length === 0 && (
                  <tr>
                    <td colSpan={5} style={{ textAlign: "center" }}>
                      <b>Carrinho de compras vazio.</b>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </Container>
        </div>
      </main>

      <Footer />
    </main>
  );
}
