import { useState } from "react";
import Header from "../../components/Header";
import { Footer } from "../../components/Footer";
import React from "react";
import AsideItem from "../../components/AsideItem";
import ListSection from "../../components/ListSection";

type Menu = "products" | "categories" | "clients" | "orders" | "users";


export default function PagAdmin() {
  const [open, setOpen] = useState(false);
  const [section, setSection] = useState<Menu | null>(null);

  const handleMenuClick = (menu: Menu) => {
    setSection(menu);
  };

  return (
    <main>
      <Header open={open} setOpen={setOpen} />
      <div>
        <aside>
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
        </aside>
        <section>
          {section === "products" && <ListSection />}
          {section === "categories" && <ListSection />}
          {section === "clients" && <ListSection />}
          {section === "orders" && <ListSection />}
          {section === "users" && <ListSection />}
        </section>
      </div>

      <Footer />
    </main>
  );
}
