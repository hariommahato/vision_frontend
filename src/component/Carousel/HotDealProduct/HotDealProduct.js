import { Card, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useAlert } from "react-alert";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { Rating } from "@material-ui/lab";
const HotDealProduct = () => {
  const alert = useAlert();
  const { error, products } = useSelector((state) => state.hotdealproduct);
  useEffect(() => {
    if (error) {
      alert.error(Error);
    }
  }, [error, alert]);
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 5,
    autoplay: true,
    autoplaySpeed: 5000,
    slidesToScroll: 4,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div>
      <Slider {...settings} style={{ height: "auto" }}>
        {products &&
          products.map((product) => (
            <div key={product._id}>
              <Link
                to={`/product/${product._id}`}
                style={{ textDecoration: "none" }}
              >
                <Card style={{ minHeight: "18rem", width: "14rem" }}>
                  <img
                    src={product.images[0].url}
                    style={{
                      height: "14rem",
                      width: "100%",
                      padding: "2rem",
                    }}
                    alt="product"
                  />
                  <Typography
                    style={{
                      margin: "0.5rem 0.5rem",
                      padding: "3px",
                      fontSize: "1vmax",
                    }}
                  >{` ${product.name}`}</Typography>

                  <div
                    style={{
                      margin: "0.5rem 0.5rem",
                      padding: "3px",
                    }}
                  >
                    <Rating
                      size="small"
                      value={product.ratings}
                      readOnly={true}
                      precision={0.5}
                    />
                  </div>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      padding: "3px",
                    }}
                  >
                    {" "}
                    <Typography
                      style={{ margin: "0.5rem 0.5rem", fontSize: "1vmax" }}
                    >{`Rs ${product.price}`}</Typography>
                    <Typography
                      style={{ margin: "0.5rem 0.5rem", fontSize: "1vmax" }}
                    >
                      {` ${product.sold}`}Sold
                    </Typography>
                  </div>
                </Card>
              </Link>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default HotDealProduct;
