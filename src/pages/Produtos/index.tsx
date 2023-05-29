<<<<<<< HEAD
import {Footer} from '../../components/Footer';
import ProdutoUnitario from '../../components/ProdutoUnitario';
import {ProdutoContainer} from '../Produtos/style';

export default function Produtos() {
	return (
		<>
		
				<ProdutoContainer>
					<ProdutoUnitario/>
				</ProdutoContainer>
		
			<Footer/>
		</>
    );
=======
import { useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";

export default function Produtos() {
  const [open, setOpen] = useState(false);

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <h1>Produtos</h1>
      <Footer />
    </main>
  );
>>>>>>> 8731914697e8ad52e780e20337c3e4696215323f
}
