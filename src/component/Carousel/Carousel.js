import React, { useEffect } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./carousel.css";
import { useDispatch, useSelector } from "react-redux";
import { getCarousel } from "../../actions/carouselAction";
const Carousel = () => {
  const dispatch = useDispatch();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    dispatch(getCarousel());
  }, [dispatch]);
  const {  carousel } = useSelector((state) => state.carousels);
  return (
    <div style={{ width: "100%", margin: "auto",marginTop:"0.3rem"}}>
  
      <Slider
        {...settings}
        style={{
          width: "100%",
          height: "600px",
        }}
      >
        {carousel &&
          carousel?.map((item) => {
            return item?.images?.map((item) => {
              return (
                <div>
                  <img src={item?.url} className="carouselImg" alt="c" />
                  
                </div>
              );
            });
          })}
      </Slider>
    </div>
  );
};

export default Carousel;
