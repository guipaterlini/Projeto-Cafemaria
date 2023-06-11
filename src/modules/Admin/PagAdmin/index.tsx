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
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<Menu | null>("products");

  const handleMenuClick = (menu: Menu) => {
    setSection(menu);
  };

  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token"); // Remove o token antigo, se existir
    navigate("/"); // Redirecionamento para a página Home
  };

  const sections = {
    products: <ProductSection title="Produtos" />,
    categories: <CategorySection title="Categorias" />,
    clients: <ClienteSection title="Cliente" />,
    orders: <OrderSection title="Pedidos" />,
    users: <AdminSection title="Usuários Admin" />,
  };

  const menuItems = [
    { id: "products", label: "Produtos" },
    { id: "categories", label: "Categorias" },
    { id: "clients", label: "Clientes" },
    { id: "orders", label: "Pedidos" },
    { id: "users", label: "Usuários Admin" },
  ];

  return (
    <main>
      <Header open={open} setOpen={setOpen} />
      <Container>
        <AsideMenu>
          <ul>
            {menuItems.map((item) => (
              <AsideItem
                key={item.id}
                onClick={() => handleMenuClick(item.id as Menu)}
                label={item.label}
              />
            ))}
            <AsideItem onClick={() => logout()} label="Logout" />
          </ul>
        </AsideMenu>
        <TableSection>{sections[section || "products"]}</TableSection>
      </Container>
    </main>
  );
}
