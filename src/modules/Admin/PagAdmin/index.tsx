import { useState } from "react";
import { AsideMenu, Container, TableSection } from "./styles";
import { useNavigate } from "react-router-dom";
import { Menu } from "../../../type";
import Header from "../../../components/Header";
import AsideItem from "../Components/AsideItem";
import ProductSection from "../Produtos/ProductSection";
import CategorySection from "../Categorias/CategorySection";
import ClienteSection from "../Clientes/ClienteSection";
import OrderSection from "../Pedidos/OrderSection";
import AdminSection from "../UserAdmin/AdminSection";

export default function PagAdmin() {
  // Estado para controlar o estado de abertura do menu lateral
  const [open, setOpen] = useState(false);

  // Estado para controlar a seção atual
  const [section, setSection] = useState<Menu | null>("products");

  // Função para lidar com o clique nos itens do menu lateral
  const handleMenuClick = (menu: Menu) => {
    setSection(menu);
  };

  // Hook de roteamento para navegar entre as páginas
  const navigate = useNavigate();

  // Função para realizar o logout
  const logout = () => {
    localStorage.removeItem("token"); // Remove o token antigo, se existir
    navigate("/"); // Redirecionamento para a página Home
  };

  // Definição das seções disponíveis no admin e seus títulos
  const sections = {
    products: <ProductSection title="Produtos" />,
    categories: <CategorySection title="Categorias" />,
    clients: <ClienteSection title="Cliente" />,
    orders: <OrderSection title="Pedidos" />,
    users: <AdminSection title="Usuários Admin" />,
  };

  // Itens do menu lateral
  const menuItems = [
    { id: "products", label: "Produtos" },
    { id: "categories", label: "Categorias" },
    { id: "clients", label: "Clientes" },
    { id: "orders", label: "Pedidos" },
    { id: "users", label: "Usuários Admin" },
  ];

  return (
    <main>
      <Header open={open} setOpen={setOpen} /> {/* Componente de cabeçalho */}
      <Container>
        <AsideMenu>
          {/* Menu lateral */}
          <ul>
            {menuItems.map((item) => (
              <AsideItem
                key={item.id}
                onClick={() => handleMenuClick(item.id as Menu)}
                label={item.label}
              />
            ))}
            {/* Item de logout */}
            <AsideItem onClick={() => logout()} label="Logout" />
          </ul>
        </AsideMenu>
        {/* Seção atual renderizada */}
        <TableSection>{sections[section || "products"]}</TableSection>
      </Container>
    </main>
  );
}
