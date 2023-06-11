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

  return (
    <main>
      <Header open={open} setOpen={setOpen} />
      <Container>
        <AsideMenu>
          <ul>
            <AsideItem
              onClick={() => handleMenuClick("products")}
              label="Produtos"
            />
            <AsideItem
              onClick={() => handleMenuClick("categories")}
              label="Categorias"
            />
            <AsideItem
              onClick={() => handleMenuClick("clients")}
              label="Clientes"
            />
            <AsideItem
              onClick={() => handleMenuClick("orders")}
              label="Pedidos"
            />
            <AsideItem
              onClick={() => handleMenuClick("users")}
              label="Usuários Admin"
            />
            <AsideItem onClick={() => logout()} label="Logout" />
          </ul>
        </AsideMenu>
        <TableSection>
          {section === "products" && <ProductSection title="Produtos" />}
          {section === "categories" && <CategorySection title="Categorias" />}
          {section === "clients" && <ClienteSection title="Cliente" />}
          {section === "orders" && (
            <OrderSection
              title="Pedidos"
              columns={[
                { key: "title", label: "Nome" },
                { key: "description", label: "Descrição" },
                { key: "published", label: "Publicado" },
              ]}
            />
          )}
          {section === "users" && <AdminSection title="Usuários Admin" />}
        </TableSection>
      </Container>
    </main>
  );
}
