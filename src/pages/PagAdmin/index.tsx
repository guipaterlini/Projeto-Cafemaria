import { useState } from "react";
import Header from "../../components/Header";
import AsideItem from "../../components/AsideItem";
import { AsideMenu, Container, TableSection } from "./styles";
import ProductSection from "../../components/ListSection/ProductSection";
import CategorySection from "../../components/ListSection/CategorySection";
import OrderSection from "../../components/ListSection/OrderSection";
import ClienteSection from "../../components/ListSection/ClienteSection";
import AdminSection from "../../components/ListSection/AdminSection";
import { Menu } from "../../type";

export default function PagAdmin() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<Menu | null>("products");

  const handleMenuClick = (menu: Menu) => {
    setSection(menu);
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
          </ul>
        </AsideMenu>
        <TableSection>
          {section === "products" && (
            <ProductSection
              title="Produtos"
              columns={[
                { key: "title", label: "Nome" },
                { key: "description", label: "Descrição" },
                { key: "price", label: "Preço" },
                { key: "amount", label: "Quantidade" },
                { key: "option", label: "Variante" },
                { key: "image", label: "Foto" },
                { key: "published", label: "Publicado" },
              ]}
            />
          )}
          {section === "categories" && (
            <CategorySection
              title="Categorias"
              columns={[
                { key: "title", label: "Nome" },
                { key: "description", label: "Descrição" },
                { key: "published", label: "Publicado" },
              ]}
            />
          )}
          {section === "clients" && (
            <ClienteSection
              title="Cliente"
              columns={[
                { key: "name", label: "Nome" },
                { key: "email", label: "Email" },
                { key: "password", label: "Senha" },
              ]}
            />
          )}
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
          {section === "users" && (
            <AdminSection
              title="Usuários Admin"
              columns={[
                { key: "name", label: "Nome" },
                { key: "email", label: "Email" },
                { key: "password", label: "Senha" },
              ]}
            />
          )}
        </TableSection>
      </Container>
    </main>
  );
}
