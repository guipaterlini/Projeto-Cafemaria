import { useState } from "react";
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

export default function Produto() {
  const [open, setOpen] = useState(false);
  const product = {
    title: "Nome do Produto",
    image: "../../../assets/images/logo-com-nome.png",
    price: 99.99,
    description:
      "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec.",
    stock: 20,
  };
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (event: { target: { value: string } }) => {
    const value = parseInt(event.target.value);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // Lógica para adicionar o produto ao carrinho
  };

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
              {[...Array(product.stock)].map((_, index) => (
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
