import React from "react";
import "./HomeFeatureSection.css";
import Card from "react-bootstrap/Card";
import { GrStatusGood } from "react-icons/gr";
const HomeFeatureSection = () => {
  return (
    <div>
      <Card className="containerFeatureCard">
        <div className="featureContainer">
          <div className="detailMainContainer">
            <div className="featureImgContainer">
              <img src="./best.png" color="red" className="contentImage" />
            </div>
            <div className="contentContainerMain">
              <h6>Best Services</h6>
            </div>
          </div>

          <div className="detailMainContainer">
            <div className="featureImgContainer">
              <img src="./affordable.png" className="contentImage" />
            </div>
            <div className="contentContainerMain">
              <h6>Affordable Price</h6>
            </div>
          </div>

          <div className="detailMainContainer">
            <div className="featureImgContainer">
              <img src="./safe.png" className="contentImage" />
            </div>
            <div className="contentContainerMain">
              <h6>Secure Payment</h6>
            </div>
            
          </div>


          <div className="detailMainContainer">
            <div className="featureImgContainer">
              <img src="./variety.png" className="contentImage" />
            </div>
            <div className="contentContainerMain">
              <h6>Large Variety </h6>
            </div>
            
          </div>
         
        </div>
        
        
      </Card>
    </div>
  );
};

export default HomeFeatureSection;
