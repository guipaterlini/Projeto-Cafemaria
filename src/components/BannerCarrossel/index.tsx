import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img, StyledSlider, Wrapper } from "./styles";
import { useMediaQuery } from "react-responsive";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

type ProductImage = {
  image: string;
  id: number;
  description: string;
  title: string;
};

function getProductImage(): Promise<ProductImage[]> {
  return fetch("https://dog.ceo/api/breed/hound/images")
    .then((res) => res.json())
    .then((data) => {
      // Extrair as URLs das imagens do objeto de resposta
      const imageUrls = data.message;

      // Mapear as URLs para objetos ProductImage
      const productImages = imageUrls.map((imageUrl: any, index: any) => ({
        image: imageUrl,
        id: index,
        description: "",
        title: "",
      }));

      return productImages;
    });
}

export default function BannerCarrossel() {
  const isMobile = useMediaQuery({ maxWidth: 768 });
  const [productImages, setProductImages] = useState<ProductImage[]>([]);
  const caminhoDaPagina = "/produto/";

  useEffect(() => {
    async function fetchProductImages() {
      const data = await getProductImage();
      setProductImages(data);
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
