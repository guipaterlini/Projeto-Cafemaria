import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PagAdmin from "./pages/PagAdmin";
// import Carrinho from "./pages/Carrinho";
import MeuPerfil from "./pages/MeuPerfil";
import Pedidos from "./pages/Pedidos";
import Produto from "./pages/Produto";
import Produtos from "./pages/Produtos";
import Sucesso from "./pages/Sucesso";
import AuthPage from "./pages/AuthPage";
import Contato from "./pages/Contato";
import React from "react";
import withAuth from "./components/ProtectedRoute";

const AdminRoute = withAuth(PagAdmin);
const ProdutosRoute = withAuth(Produtos);
const ProdutoRoute = withAuth(Produto);
// const CarrinhoRoute = withAuth(Carrinho);
const PedidoRoute = withAuth(Pedidos);
const SucessoRoute = withAuth(Sucesso);

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<AuthPage formType="cadastro" />} />
        <Route path="/login" element={<AuthPage formType="login" />} />
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="/produtos" element={<ProdutosRoute />} />
        <Route path="/produto/:id" element={<ProdutoRoute />} />
        {/* <Route path="/carrinho" element={<CarrinhoRoute />} /> */}
        <Route path="/sucesso" element={<SucessoRoute />} />
        <Route path="/meuperfil/:email" element={<MeuPerfil />} />
        <Route path="/pedidos" element={<PedidoRoute />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
