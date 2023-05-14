import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Img, StyledSlider, Wrapper } from "./Style";

export default function BannerCarrossel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "10px",
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Wrapper>
      <StyledSlider {...settings}>
        <div>
          <Img src="../../../assets/images/1.png" alt="" />
        </div>
        <div>
          <Img src="../../../assets/images/2.png" alt="" />
        </div>
        <div>
          <Img src="../../../assets/images/3.png" alt="" />
        </div>
        <div>
          <Img src="../../../assets/images/1.png" alt="" />
        </div>
        <div>
          <Img src="../../../assets/images/2.png" alt="" />
        </div>
        <div>
          <Img src="../../../assets/images/3.png" alt="" />
        </div>
      </StyledSlider>
    </Wrapper>
  );
}
