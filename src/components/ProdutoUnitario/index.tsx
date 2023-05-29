import {ProdutoDefault, BotaoCompra} from './style';
import { useEffect, useState } from "react";
import { listarProdutos } from "../../services/MainApi/produtos";

type ProductImage = {
  image: string;
  id: number;
  description: string;
  title: string;
	price: string;
};

export default function ProdutoUnitario() {

	const [productImages, setProductImages] = useState<ProductImage[]>([]);
	
	useEffect(() => {
    async function fetchProductImages() {
      try {
        const response = await listarProdutos();
        const produtos = response.data.result;

        // Extrair as informações relevantes das imagens
        const imagensCarrossel = produtos.map((produto: any) => ({
          image: produto.image,
          id: produto.id,
          description: produto.description,
          title: produto.title,
					price: produto.price,
        }));

        setProductImages(imagensCarrossel);
      } catch (error) {
        console.error("Erro ao buscar as imagens do carrossel:", error);
      }
    }

    fetchProductImages();
  }, []);

	return (
		<>{productImages.map((item: ProductImage) => (
		<>
			<ProdutoDefault>
				<img src={item.image} alt='' />
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<span>{item.price}</span>

				<BotaoCompra><a href='./Produto/index.tsx'>Comprar</a></BotaoCompra>

			</ProdutoDefault>
		</>
		))}
		</>
	);
}
