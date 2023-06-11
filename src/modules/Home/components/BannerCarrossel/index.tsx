import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img, StyledSlider, Wrapper } from "./styles";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { listarProdutos } from "../../../../services/MainApi/produtos";

type ProductImage = {
  image: string;
  id: number;
  description: string;
  title: string;
};

export default function BannerCarrossel() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const caminhoDaPagina = "/produto/";

  useEffect(() => {
    // Função assíncrona para buscar as imagens do carrossel
    async function fetchProductImages() {
      try {
        // Chama a função de API para listar os produtos
        const response = await listarProdutos();
        const produtos = response.data.result;

        // Extrair as informações relevantes das imagens
        const imagensCarrossel = produtos.map((produto: ProductImage) => ({
          image: produto.image || "../../../assets/images/defaultImage.png", // Verificação da imagem nula e atribuição de uma imagem padrão
          id: produto.id,
          description: produto.description,
          title: produto.title,
        }));

        setProductImages(imagensCarrossel);
      } catch (error) {
        console.error("Erro ao buscar as imagens do carrossel:", error);
      }
    }

    // Chama a função para buscar as imagens ao montar o componente
    fetchProductImages();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <Wrapper>
      {/* Componente de slider carrossel */}
      <StyledSlider {...settings}>
        {/* Mapeia as imagens do carrossel */}
        {productImages.map((image: ProductImage) => (
          <div key={image.id}>
            {/* Link para a página do produto */}
            <Link to={caminhoDaPagina + image.id}>
              {/* Imagem do produto */}
              <Img src={image.image} />
            </Link>
          </div>
        ))}
      </StyledSlider>
    </Wrapper>
  );
}
