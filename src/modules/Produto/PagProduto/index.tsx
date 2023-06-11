import React, { useEffect, useState } from "react";
import { Footer } from "../../../components/Footer";
import Header from "../../../components/Header";
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
import {
  ProdutoPayload,
  listarProduto,
} from "../../../services/MainApi/produtos";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Produto() {
  const [open, setOpen] = useState(false);
  const [product, setProduct] = useState<ProdutoPayload | null>(null);
  const [quantity, setQuantity] = useState(1);
  const { id } = useParams();

  const handleQuantityChange = ({
    target: { value },
  }: {
    target: { value: string };
  }) => {
    const parsedValue = parseInt(value);
    setQuantity(parsedValue);
  };

  const handleAddToCart = () => {
    const productId = Number(id);

    const cartObj = {
      product_id: productId,
      product_title: product?.title || "",
      product_price: product?.price || "",
      product_quantity: quantity,
    };

    // Verifica se já existe algum item no carrinho
    const cartItems = localStorage.getItem("cartItems");
    if (cartItems) {
      // Atualiza o carrinho com o novo item
      const updatedCart = [...JSON.parse(cartItems), cartObj];
      localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    } else {
      // Cria o carrinho com o novo item
      localStorage.setItem("cartItems", JSON.stringify([cartObj]));
    }

    toast.success(`O item "${product?.title}" foi adicionado ao carrinho`);
  };

  useEffect(() => {
    async function fetchProduct() {
      try {
        // Busca o produto com o ID fornecido
        const response = await listarProduto(Number(id));

        // Armazena os dados do produto em uma variável
        const productData = { ...response.data.result };

        // Atualiza o estado do produto
        setProduct(productData);
      } catch (error) {
        console.error("Erro ao buscar produto:", error);
      }
    }

    fetchProduct();
  }, [id]);

  if (!product) {
    // Renderiza um componente de carregamento ou uma mensagem de erro enquanto os dados do produto são buscados
    return null;
  }

  return (
    <>
      <Header open={open} setOpen={setOpen} />

      <ProductPageContainer>
        <ProductInfoContainer>
          <ProductImage
            src={product.image || "../../../assets/images/defaultImage.png"}
            alt={product.title}
          />

          <ProductDetailsContainer>
            {/* Renderiza os detalhes do produto */}
            <ProductTitle>{product.title}</ProductTitle>
            <ProductDescription>{product.description}</ProductDescription>
            <ProductDescription>{product.option}</ProductDescription>
            <ProductPrice>R$ {product.price}</ProductPrice>

            {/* Permite selecionar a quantidade do produto */}
            <QuantitySelector value={quantity} onChange={handleQuantityChange}>
              {/* Cria as opções de quantidade com base no estoque disponível */}
              {[...Array(product.amount)].map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </QuantitySelector>

            {/* Botão para adicionar o produto ao carrinho */}
            <AddToCartButton onClick={handleAddToCart}>
              Adicionar ao Carrinho
            </AddToCartButton>
            <ToastContainer position="top-right" autoClose={3000} />
          </ProductDetailsContainer>
        </ProductInfoContainer>
      </ProductPageContainer>

      <Footer />
    </>
  );
}
