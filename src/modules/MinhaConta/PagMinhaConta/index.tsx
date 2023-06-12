import { useState } from "react";
import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
import {Container, ListItem, LogoutBtn} from "./styles";
import { useNavigate } from "react-router-dom";

export default function MinhaConta() {
  const [open, setOpen] = useState(false);


  const pedidos = [
		{
			idCompra: 1,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Aguardando pagamento',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		},
    {
			idCompra: 2,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Entregue',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		},
    {
			idCompra: 3,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Em curso',
			data: '15/04/2023',
      valor: 'R$ 45,00',
    },
    {
			idCompra: 4,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Entregue',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		},
    {
			idCompra: 5,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Entregue',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		},
    {
			idCompra: 6,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Entregue',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		},
    {
			idCompra: 7,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Entregue',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		},
    {
			idCompra: 8,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Entregue',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		},
    {
			idCompra: 9,
			cliente: 'Jonathas Pereira Golçalves',
			situacao: 'Entregue',
			data: '15/04/2023',
      valor: 'R$ 45,00',
		}
	] 

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // Remove o token antigo, se existir
    navigate("/"); // Redirecionamento para a página Home
  };
  
  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <LogoutBtn onClick={() => logout()}>Logout</LogoutBtn>

      <Container>
        <thead>
          <th>Código da compra</th>
          <th>Cliente</th>
          <th>Situação do pedido</th>
          <th>Data da compra</th>
          <th>Valor</th>
        </thead>

        <tbody>
        <>{pedidos.map((item) => (
          <tr>
            <ListItem>{item.idCompra}</ListItem>
            <ListItem>{item.cliente}</ListItem>
            <ListItem>{item.situacao}</ListItem>
            <ListItem>{item.data}</ListItem>
            <ListItem>{item.valor}</ListItem>
          </tr>
        ))}</> 
        </tbody>
      </Container>
      
      <Footer />
    </main>
  );
}
