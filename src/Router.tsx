import { Routes, Route, BrowserRouter } from "react-router-dom";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contato/:id" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}
