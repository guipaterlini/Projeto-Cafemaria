import { useState } from "react";
import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
import * as jose from "jose";
import { CarrinhoPayload, addToCart } from "../../../services/MainApi/carrinho";
import { CancelButton, H1, OrderButton, Section, Table } from "./style";
import { RiDeleteBinLine } from "react-icons/ri";

interface CartItem {
  product_id: number;
  product_title: string;
  product_price: number;
  product_quantity: number;
}

const getUserIdFromToken = (token: string | null) => {
  if (!token || typeof token === "undefined") {
    return null;
  }
  try {
    const decodedToken: any = jose.decodeJwt(token);
    return decodedToken.id;
  } catch (error) {
    console.error("Erro ao decodificar o token:", error);
    return null;
  }
};

function preprocessCartItems(cartItems: CartItem[]): [CartItem[], number] {
  const processedCartItems: CartItem[] = [];
  const productMap = new Map<number, CartItem>();
  let totalPrice = 0;

  for (const item of cartItems) {
    const existingItem = productMap.get(item.product_id);
    if (existingItem) {
      existingItem.product_quantity += item.product_quantity;
    } else {
      productMap.set(item.product_id, { ...item });
    }
    totalPrice += item.product_price * item.product_quantity;
  }

  const values = Array.from(productMap.values());
  for (const item of values) {
    processedCartItems.push(item);
  }

  return [processedCartItems, totalPrice];
}

export default function Carrinho() {
  const [open, setOpen] = useState(false);
  const [cartItems, setCartItems] = useState<CartItem[]>(
    JSON.parse(localStorage.getItem("cartItems") || "[]")
  );
  const token = localStorage.getItem("token");
  const userID = token ? getUserIdFromToken(token) : null;

  const handleRemoveItem = (index: number) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleCancelCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const handleCheckout = () => {
    for (const item of processedCartItems) {
      const payload: CarrinhoPayload = {
        user_id: userID,
        product_id: item.product_id,
        product_quantity: item.product_quantity,
      };
      addToCart(payload); // Chamar a função addToCart() com o payload adequado
    }

    console.log("Pedido fechado!");
  };

  const [processedCartItems, totalPrice] = preprocessCartItems(cartItems);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <Section>
        <H1>Carrinho de Compras</H1>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <Table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Quantidade</th>
                <th>Preço Unitário</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              {processedCartItems.map((item: CartItem, index: number) => (
                <tr key={index}>
                  <td>{item.product_title}</td>
                  <td>{item.product_quantity}</td>
                  <td>R$ {item.product_price}</td>
                  <td>
                    <button className="RemoveBtn" onClick={() => handleRemoveItem(index)}>
                    <RiDeleteBinLine />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td className="tdTotal" colSpan={2}></td>
                <td className="tdTotal">R$ {totalPrice.toFixed(2)}</td>
              </tr>
            </tfoot>
          </Table>
        )}
        <div>
          <CancelButton onClick={handleCancelCart}>
            Cancelar Carrinho
          </CancelButton>
          <OrderButton onClick={handleCheckout}>Fechar Pedido</OrderButton>
        </div>
      </Section>

      <Footer />
    </main>
  );
}
