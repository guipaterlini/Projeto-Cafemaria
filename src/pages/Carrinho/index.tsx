import { useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import carrinho from "../../services/MainApi/config"
import CartTable from "../../components/CartTable";


//todo X fazer um placeholder para quando não houver itens no carrinho
//     - inserção de novos produtos no carrinho
//     - remoção de produtos
//     - alteração de quantidade
//     - calculo de preço total
//     - Puxar info das APIs
//     - Checar se está logado
//     - cupom de desconto?

export default function Carrinho() {
  const [open, setOpen] = useState(false);
  const [cart, setCart] = useState([])
 

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <main>
        <h1>Carrinho</h1>
        <div className="cart-content">
          <section>
            <table>
              <thead>
                <th>Produto</th>
                <th>Preço</th>
                <th>Quantidade</th>
                <th>Total</th>
                <th>-</th>
              </thead>
              <tbody>                            
              </tbody>
            </table>
          </section>
        </div>        
      </main>


      <Footer />
    </main>
  );
}
