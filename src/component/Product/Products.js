import React, { Fragment, useEffect, useState } from "react";
import "./Products.css";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productActions";
import Loader from "../layout/Loader/Loader";
import ProductCard from "../Home/ProductCard";
import Pagination from "react-js-pagination";
import Slider from "@material-ui/core/Slider";
import { useAlert } from "react-alert";
import Typography from "@material-ui/core/Typography";
import MetaData from "../layout/MetaData";
import { useParams } from "react-router-dom";
import { clearErrorsCato, getAllCategory } from "../../actions/categoryAction";
import Dropdown from "react-bootstrap/Dropdown";
const Products = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const alert = useAlert();
  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000000]);
  const [category, setCategory] = useState("");
  const [ratings, setRatings] = useState(0);
  const { error: categoryError, category: categories } = useSelector(
    (state) => state.categories
  );

  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state) => state.products);

  const keyword = params.keyword;

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  const priceHandler = (event, newPrice) => {
    setPrice(newPrice);
  };
  let count = filteredProductsCount;

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    if (categoryError) {
      alert.error(error);
      dispatch(clearErrorsCato());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
    dispatch(getAllCategory());
  }, [
    dispatch,
    keyword,
    currentPage,
    price,
    category,
    ratings,
    alert,
    error,
    categoryError,
  ]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PRODUCTS -- ECOMMERCE" />
          <h2 className="productsHeading">Products</h2>
          <div style={{ display: "flex", width: "100%", gap: "5rem" }}>
            <div className="productsPage">
              {products &&
                products.map((product) => (
                  <ProductCard key={product._id} product={product} />
                ))}
            </div>
            <div className="filterBox">
              <Dropdown>
                <Dropdown.Toggle
                  id="dropdown-basic"
                  style={{
                    backgroundColor: "black",
                    color: "white",
                    border: "none",
                    width: "15vmax",
                  }}
                >
                  Categories
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  {categories?.map((category) => (
                    <Dropdown.Item key={category.name} onClick={()=>{
                      setCategory(category.name)
                    }}>
                      {category.name}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <Typography>Price</Typography>
              <Slider
                value={price}
                onChange={priceHandler}
                valueLabelDisplay="auto"
                aria-labelledby="range-slider"
                min={0}
                max={25000}
              />

              <fieldset>
                <Typography component="legend">Ratings Above</Typography>
                <Slider
                  value={ratings}
                  onChange={(e, newRating) => {
                    setRatings(newRating);
                  }}
                  aria-labelledby="continuous-slider"
                  valueLabelDisplay="auto"
                  min={0}
                  max={5}
                />
              </fieldset>
            </div>
          </div>

          {resultPerPage < count && (
            <div className="paginationBox">
              <Pagination
                activePage={currentPage}
                itemsCountPerPage={resultPerPage}
                totalItemsCount={productsCount}
                onChange={setCurrentPageNo}
                nextPageText="Next"
                prevPageText="Prev"
                firstPageText="1st"
                lastPageText="Last"
                itemClass="page-item"
                linkClass="page-link"
                activeClass="pageItemActive"
                activeLinkClass="pageLinkActive"
              />
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
};

export default Products;
