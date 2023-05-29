
import { useEffect, useState } from "react";
import { Footer } from "../../components/Footer";
import Header from "../../components/Header";
import React from "react";
import {
  AddToCartButton,
  ProductDescription,
  ProductDetailsContainer,
  ProductImage,
  ProductInfoContainer,
  ProductPageContainer,
  ProductPrice,
  ProductTitle,
  QuantitySelector,
} from "./styles";
import { useParams } from "react-router-dom";
import { ProdutoPayload, listarProduto } from "../../services/MainApi/produtos";

export default function Produto() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<ProdutoPayload | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();


  const handleQuantityChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // Lógica para adicionar o produto ao carrinho
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await listarProduto(Number(id));
        setProduct(response.data.result || []);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    // Renderizar um componente de carregamento ou uma mensagem de erro enquanto os dados do produto são buscados
    return null;
  }

  return (
    <main>
      <Header open={open} setOpen={setOpen} />

      <ProductPageContainer>
        <ProductInfoContainer>
          <ProductImage src={product.image} alt={product.title} />

          <ProductDetailsContainer>
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductPrice>R$ {product.price}</ProductPrice>

            <QuantitySelector value={quantity} onChange={handleQuantityChange}>
              {[...Array(product.amount)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </QuantitySelector>

            <AddToCartButton onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </AddToCartButton>
          </ProductDetailsContainer>
        </ProductInfoContainer>
      </ProductPageContainer>

      <Footer />
    </main>
  );
}
