import React from "react";
import { CardContainer, Image, Title, Price } from "./styles";

export interface Product {
  id: string;
  name: string;
  photo: string;
  price: number;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <CardContainer>
      <Image src={product.photo} alt={product.name} />
      <div>
        <Title>{product.name}</Title>
        <Price>R$ {product.price.toFixed(2)}</Price>
      </div>
    </CardContainer>
  );
};

export default ProductCard;
