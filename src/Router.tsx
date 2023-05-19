import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Carrinho from "./pages/Carrinho";
import MeuPerfil from "./pages/MeuPerfil";
import Pedidos from "./pages/Pedidos";
import Produto from "./pages/Produto";
import Produtos from "./pages/Produtos";
import Sucesso from "./pages/Sucesso";
import Login from "./pages/Login";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
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
