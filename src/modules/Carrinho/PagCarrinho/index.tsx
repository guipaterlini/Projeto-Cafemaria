import { useState } from "react";
import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
import * as jose from "jose";
import {
  CarrinhoPayload,
  addToCart,
  deletarCarrinho,
} from "../../../services/MainApi/carrinho";
import { CancelButton, H1, OrderButton, Section, Table } from "./style";
import { RiDeleteBinLine } from "react-icons/ri";
import {
  PedidoPayload,
  cadastroPedido,
} from "../../../services/MainApi/pedidos";
import { useNavigate } from "react-router-dom";

interface CartItem {
  product_id: number;
  product_title: string;
  product_price: number;
  product_quantity: number;
}

// Função para obter o ID do usuário a partir do token
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

// Função para processar os itens do carrinho antes de exibi-los na tabela
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

  const navigate = useNavigate();

  const handleRemoveItem = (productId: number) => {
    const updatedCartItems = cartItems.filter(
      (item) => item.product_id !== productId
    );
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  const handleCancelCart = () => {
    setCartItems([]);
    localStorage.removeItem("cartItems");
  };

  const handleCheckout = async () => {
    let pedidoCriado = false;
    let cartId: number | undefined; // Variável para armazenar o ID do carrinho

    for (const item of processedCartItems) {
      const payload: CarrinhoPayload = {
        user_id: userID,
        product_id: item.product_id,
        product_quantity: item.product_quantity,
      };

      const response = await addToCart(payload);
      cartId = response.data.result.cart_id; // Acessando o valor de cart_id na resposta

      console.log("Pedido fechado!");

      // Não faça nada relacionado ao cadastroPedido aqui dentro do loop

      if (response.status === 200) {
        pedidoCriado = true;
      } else {
        pedidoCriado = false;
        // Lógica para lidar com a falha ao adicionar item ao carrinho, se necessário
      }
    }

    // Cadastro do pedido fora do loop, após o processamento de todos os produtos do carrinho
    if (pedidoCriado && cartId !== undefined) {
      const pedidoPayload: PedidoPayload = {
        cart_id: cartId
        // total_value: totalPrice,
        // cart: processedCartItems.map((item) => item.product_title),
        // created_at: new Date().toISOString(),
        // buyer: userID?.toString() ?? "",
      };

      try {
        await cadastroPedido(pedidoPayload);
        // Excluir o carrinho somente se o pedido foi criado com sucesso
        await deletarCarrinho(userID, cartId);
        localStorage.removeItem("cartItems");
        navigate("/sucesso"); // Redirecionar para "/sucesso"
      } catch (error) {
        console.error("Erro ao cadastrar pedido:", error);
        alert("Erro ao cadastrar pedido, por favor tente mais tarde");
        // Lógica para lidar com o erro de cadastro do pedido, se necessário
      }
    }
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
              {processedCartItems.map((item: CartItem) => (
                <tr key={item.product_id}>
                  <td>{item.product_title}</td>
                  <td>{item.product_quantity}</td>
                  <td>R$ {item.product_price}</td>
                  <td>
                    <button
                      className="RemoveBtn"
                      onClick={() => handleRemoveItem(item.product_id)}
                    >
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
