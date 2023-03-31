import { Card, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import { useAlert } from "react-alert";
import Loader from "../../layout/Loader/Loader";
import { Rating } from "@material-ui/lab";

const FeaturedProduct = () => {
  const alert = useAlert();
  const { loading, error, products } = useSelector(
    (state) => state.featuredproduct
  );
  useEffect(() => {
    if (error) {
      alert.error(error);
    }
  }, [alert, error]);

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
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
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
                          alt="poduct"
                        />

                        <Typography
                          style={{
                            margin: "0.5rem 0.5rem",
                            padding: "3px",
                            fontSize: "0.9vmax",
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
                            style={{
                              margin: "0.5rem 0.5rem",
                              fontSize: "0.9vmax",
                            }}
                          >{`Rs ${product.price}`}</Typography>
                          <Typography
                            style={{
                              margin: "0.5rem 0.5rem",
                              fontSize: "0.9vmax",
                            }}
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
        </>
      )}
    </>
  );
};

export default FeaturedProduct;
