import React, { Fragment, useEffect } from "react";
import "./Home.css";
// import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import {
  clearErrors,
  getFeaturedProducts,
  getHotDealProduct,
} from "../../actions/productActions";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import Carousel from "../Carousel/Carousel";
import FeaturedProduct from "../Carousel/FeaturedProduct/FeaturedProduct";
import { Typography } from "@material-ui/core";
import HotDealProduct from "../Carousel/HotDealProduct/HotDealProduct";
import HomeFeatureSection from "../HomeFeatureSection";


const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const {  error,  } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    // dispatch(getProduct());
    dispatch(getFeaturedProducts());
    dispatch(getHotDealProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
    
        <MetaData title={"Home"}/>
          <Carousel />
          <HomeFeatureSection/>

          <div style={{ width: "85%", margin: "auto", marginTop: "2rem" }}>
            <Typography variant="h6" style={{fontSize:"1vmax"}}>Featured Product</Typography>
            <FeaturedProduct />
          </div>
          <div style={{ width: "85%", margin: "auto", marginTop: "2rem"}}>
            <Typography variant="h6" style={{fontSize:"1vmax"}}>HotDeal Product</Typography>
            <HotDealProduct />
          </div>
        </Fragment>

  )
};

export default Home;
