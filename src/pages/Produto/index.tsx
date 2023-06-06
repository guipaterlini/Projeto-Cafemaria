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
import * as jose from "jose";
import { addToCart } from "../../services/MainApi/carrinho";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
    const productId = Number(id);
    let userId;
    const token = localStorage.getItem("token");

    if (token) {
      const decodedToken = jose.decodeJwt(token);
      userId = decodedToken.id;
    } else {
      console.error("Usuário nao está logado.");
    }

    const cartObj = {
      user_id: userId as number, // Conversão explícita de tipo
      product_id: productId,
      product_quantity: quantity,
    };

    addToCart(cartObj)
    .then(() => {
      toast.success(`O item "${product?.title}" foi adicionado ao carrinho`);
    })
    .catch((error) => {
      console.error('Erro ao adicionar ao carrinho:', error);
      toast.error('Erro ao adicionar ao carrinho. Por favor, tente novamente.');
    });
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
            <ToastContainer position="top-right" autoClose={3000} />
          </ProductDetailsContainer>
        </ProductInfoContainer>
      </ProductPageContainer>

      <Footer />
    </main>
  );
}
