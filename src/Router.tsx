import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./modules/Home/PagHome";
import Carrinho from "./modules/Carrinho/PagCarrinho";
import Produto from "./modules/Produto/PagProduto";
import Produtos from "./modules/Produto/PagProdutos";
import Sucesso from "./modules/Carrinho/PagSucesso";
import AuthPage from "./modules/AuthPage";
import React from "react";
import withAuth from "./components/ProtectedRoute";
import PagAdmin from "./modules/Admin/PagAdmin";
import MinhaConta from "./modules/MinhaConta/PagMinhaConta";

const AdminRoute = withAuth(PagAdmin);
const CarrinhoRoute = withAuth(Carrinho);
const MinhaContaRoute = withAuth(MinhaConta);
const SucessoRoute = withAuth(Sucesso);

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<AuthPage formType="cadastro" />} />
        <Route path="/login" element={<AuthPage formType="login" />} />
        <Route path="/admin" element={<AdminRoute />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/carrinho" element={<CarrinhoRoute />} />
        <Route path="/sucesso" element={<SucessoRoute />} />
        <Route path="/minhaconta" element={<MinhaContaRoute />} />
      </Routes>
    </BrowserRouter>
  );
}
