import { Footer } from "../../components/Footer";

import ProdutoUnitario from "../../components/ProdutoUnitario";
import { ProdutoContainer } from "../Produtos/style";

export default function Produtos() {
  return (
    <>
      <ProdutoContainer>
        <ProdutoUnitario />
      </ProdutoContainer>

      <Footer />
    </>

  );
}
