import { Footer } from "../../components/Footer";
import { useState } from "react";
import Header from "../../components/Header";
import ProdutoUnitario from "../../components/ProdutoUnitario";
import { ProdutoContainer } from "../Produtos/style";

export default function Produtos() {

  const [open, setOpen] = useState(false);

  return (
    <>
      <Header open={open} setOpen={setOpen} />

      <ProdutoContainer>
        <ProdutoUnitario />
      </ProdutoContainer>

      <Footer />
    </>

  );
}
