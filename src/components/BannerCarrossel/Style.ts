import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Wrapper = styled.div`
  max-width: 55%;
  margin: 40px auto;
`;
export const Img = styled.img`
  max-width: 250px;
  background-color: #fff;
  border-radius: 30px;
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
