import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Carrinho from "./pages/Carrinho";
import MeuPerfil from "./pages/MeuPerfil";
import Pedidos from "./pages/Pedidos";
import Produto from "./pages/Produto";
import Produtos from "./pages/Produtos";
import Sucesso from "./pages/Sucesso";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={<Admin />} />
        <Route path="/carrinho" element={<Carrinho />} />
        <Route path="/" element={<Home />} />
        <Route path="/meuperfil/:email" element={<MeuPerfil />} />
        <Route path="/pedidos/:id" element={<Pedidos />} />
        <Route path="/produto/:id" element={<Produto />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/sucesso" element={<Sucesso />} />
      </Routes>
    </BrowserRouter>
  );
}
