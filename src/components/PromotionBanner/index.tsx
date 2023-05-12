// import { BannerContainer, Image } from "./Style";

// export default function PromotionBanner() {
//   return (
//     <BannerContainer>
//       <Image src="../../../assets/images/1.png" alt="Image 1" />
//       <Image src="../../../assets/images/2.png" alt="Image 2" />
//       <Image src="../../../assets/images/3.png" alt="Image 3" />
//     </BannerContainer>
//   );
// }

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Image } from "./Style";

export default function PromotionBanner() {
  return (
    <Slider
      infinite={true}
      slidesToShow={3}
      slidesToScroll={1}
      centerMode={true}
      autoplay={true}
      autoplaySpeed={3000}
      pauseOnHover={true}
      className="center"
    >
      <Image src="../../../assets/images/1.png" alt="Image 1" />
      <Image src="../../../assets/images/2.png" alt="Image 2" />
      <Image src="../../../assets/images/3.png" alt="Image 3" />
    </Slider>
  );
}
