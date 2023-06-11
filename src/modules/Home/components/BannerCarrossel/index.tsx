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
        }));

        setProductImages(imagensCarrossel);
      } catch (error) {
        console.error("Erro ao buscar as imagens do carrossel:", error);
      }
    }

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
      <StyledSlider {...settings}>
        {productImages.map((image: ProductImage) => (
          <div key={image.id}>
            <Link to={caminhoDaPagina + image.id}>
              <Img src={image.image} />
            </Link>
          </div>
        ))}
      </StyledSlider>
    </Wrapper>
  );
}
