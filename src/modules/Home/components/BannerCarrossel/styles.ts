import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  max-width: 80%;
  margin: 40px auto;

  @media (max-width: 1024px) {
    max-width: 90%;
  }
`;
export const Img = styled.img`
  max-width: 250px;
  background-color: var(--cor-font-secundaria);
  border-radius: 30px;

  @media (min-width: 768px) and (max-width: 1024px) {
    max-width: 200px;
  }
`;

export const StyledSlider = styled(Slider)`
  .slick-slide {
    text-align: center;
    height: 400px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .slick-slide img {
    height: 350px;
    transition: all ease-in-out 0.2s;
  }

  .slick-slide.slick-center img {
    margin-top: -50px;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #000;
  }
`;
