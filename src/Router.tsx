import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import PagAdmin from "./pages/PagAdmin";
import Carrinho from "./pages/Carrinho";
import MeuPerfil from "./pages/MeuPerfil";
import Pedidos from "./pages/Pedidos";
import Produto from "./pages/Produto";
import Produtos from "./pages/Produtos";
import Sucesso from "./pages/Sucesso";
import AuthPage from "./pages/AuthPage";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<AuthPage formType="cadastro" />} />
        <Route path="/login" element={<AuthPage formType="login" />} />
        <Route path="/admin" element={<PagAdmin />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/sucesso" element={<Sucesso />} />
        <Route path="/meuperfil/:email" element={<MeuPerfil />} />
        <Route path="/pedidos/:id" element={<Pedidos />} />
      </Routes>
    </BrowserRouter>
  );
}
