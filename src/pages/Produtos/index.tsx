import { Footer } from "../../components/Footer";

import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import ProductList from "../../components/ProductList";
import { Main, TituloH1 } from "./styles";
import { listarProdutos } from "../../services/MainApi/produtos";

export default function Produtos() {
  const [open, setOpen] = React.useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await listarProdutos();
        setProducts(response.data.result || []);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error);
      }
    }

    fetchProducts();
  }, []);

  return (
    <Main>
      <Header open={open} setOpen={setOpen} />


      <TituloH1> Nossos Produtos</TituloH1>
      <ProductList products={products} itemsPerPage={10} />

      <Footer />
    </Main>
  );
}

// return (
//   <Wrapper>
//     <StyledSlider {...settings}>
//       {productImages.map((image: ProductImage) => (
//         <div key={image.id}>
//           <Link to={caminhoDaPagina + image.id}>
//             <Img src={image.image} />
//           </Link>
//         </div>
//       ))}
//     </StyledSlider>
//   </Wrapper>
// );
// }
