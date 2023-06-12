import { useState, useEffect } from "react";
import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
import { Container, ListItem, LogoutBtn } from "./styles";
import { useNavigate } from "react-router-dom";
import { listarPedidos, PedidoPayload } from "../../../services/MainApi/pedidos";

export default function MinhaConta() {
  const [open, setOpen] = useState(false);
  const [pedidos, setPedidos] = useState<PedidoPayload[]>([]);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await listarPedidos();
        const { success, result } = response.data;

        if (success) {
          setPedidos(result);
        } else {
          setError(() => "Ocorreu um erro ao obter os pedidos. Por favor, tente novamente mais tarde.");
        }
      } catch (error) {
        console.error("Erro ao obter pedidos:", error);
        setError(() => "Ocorreu um erro ao obter os pedidos. Por favor, tente novamente mais tarde.");
      }
    };

    fetchPedidos();
  }, []);

  const logout = () => {
    localStorage.removeItem("token"); // Remove o token antigo, se existir
    navigate("/"); // Redirecionamento para a página Home
  };

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <LogoutBtn onClick={logout}>Logout</LogoutBtn>

      <Container>
        <thead>
          <tr>
            <th>Código da compra</th>
            <th>Cliente</th>
            <th>Situação do pedido</th>
            <th>Data da compra</th>
            <th>Valor</th>
          </tr>
        </thead>

        <tbody>
          {pedidos.map((order) => (
            <tr key={order.id}>
              <ListItem>{order.id}</ListItem>
              <ListItem>{order.buyer}</ListItem>
              <ListItem>{order.order_status}</ListItem>
              <ListItem>{order.created_at}</ListItem>
              <ListItem>{order.total_value}</ListItem>
            </tr>
          ))}
        </tbody>
      </Container>

      {error && <p className="error-message">{error}</p>}

      <Footer />
    </main>
  );
}
