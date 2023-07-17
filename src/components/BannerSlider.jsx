// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "red" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "green" }}
      onClick={onClick}
    />
  );
}


const BannerSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
    
  };

  return (
    <div className="container">
      <Slider {...settings}>
      <div>
        <img src="https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg" alt="" />
      </div>
      <div>
        <img src="https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg" alt="" />
      </div>
      <div>
        <img src="https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg" alt="" />
      </div>
      <div>
        <img src="https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg" alt="" />
      </div>
      <div>
        <img src="https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg" alt="" />
      </div>
      <div>
        <img src="https://e0.pxfuel.com/wallpapers/898/129/desktop-wallpaper-cool-boy-boy-pic.jpg" alt="" />
      </div>
    
    </Slider>
    </div>
  );
};

export default BannerSlider;