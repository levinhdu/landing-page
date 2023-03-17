import React, { useState } from "react";
import PropTypes from "prop-types";
import "./FactItem.scss";
import RegisterInfo from "../../../components/RegisterInfo";

FactItem.propTypes = {};

function FactItem(props) {
  const [active, setActive] = useState(false);
  const handleClickModal = () => {
    setActive(true);
  };
  const handleClickClose = () =>{
    setActive(false)
  }
  return (
    <>
      <div className="ladi-item container">
        <div className="ladi-element"></div>
        <div className="ladi-item-warp">
          <div className="ladi-shap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 2048 1896.0833"
              class=""
              fill="rgba(97, 97, 97, 1)"
            >
              <path d="M1024 512H640v384h384V512zm128 640v128H512v-128h640zm0-768v640H512V384h640zm640 768v128h-512v-128h512zm0-256v128h-512V896h512zm0-256v128h-512V640h512zm0-256v128h-512V384h512zM256 1344V384H128v960q0 26 19 45t45 19 45-19 19-45zm1664 0V256H384v1088q0 33-11 64h1483q26 0 45-19t19-45zm128-1216v1216q0 80-56 136t-136 56H192q-80 0-136-56T0 1344V256h256V128h1792z"></path>{" "}
            </svg>
          </div>
          <div className="ladi-item-tiltle">
            <h3>BROCHURE</h3>
          </div>
        </div>
        <div className="ladi-element"></div>
        <div className="ladi-item-warp">
          <a className="ladi-shap" href="https://goo.gl/maps/WGpNZn2dVT7D8a6j6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 24 24"
              class=""
              fill="rgba(97, 97, 97, 1)"
            >
              {" "}
              <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6A2,2 0 0,0 10,8A2,2 0 0,0 12,10A2,2 0 0,0 14,8A2,2 0 0,0 12,6M20,19C20,21.21 16.42,23 12,23C7.58,23 4,21.21 4,19C4,17.71 5.22,16.56 7.11,15.83L7.75,16.74C6.67,17.19 6,17.81 6,18.5C6,19.88 8.69,21 12,21C15.31,21 18,19.88 18,18.5C18,17.81 17.33,17.19 16.25,16.74L16.89,15.83C18.78,16.56 20,17.71 20,19Z"></path>{" "}
            </svg>
          </a>
          <div className="ladi-item-tiltle">
            <h3>VỊ TRÍ</h3>
          </div>
        </div>
        <div className="ladi-element"></div>
        <div className="ladi-item-warp" onClick={handleClickModal}>
          <div className="ladi-shap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100%"
              height="100%"
              preserveAspectRatio="none"
              viewBox="0 0 1792 1896.0833"
              class=""
              fill="rgba(97, 97, 97, 1)"
            >
              {" "}
              <path d="M888 1184l116-116-152-152-116 116v56h96v96h56zm440-720q-16-16-33 1L945 815q-17 17-1 33t33-1l350-350q17-17 1-33zm80 594v190q0 119-84.5 203.5T1120 1536H288q-119 0-203.5-84.5T0 1248V416q0-119 84.5-203.5T288 128h832q63 0 117 25 15 7 18 23 3 17-9 29l-49 49q-14 14-32 8-23-6-45-6H288q-66 0-113 47t-47 113v832q0 66 47 113t113 47h832q66 0 113-47t47-113v-126q0-13 9-22l64-64q15-15 35-7t20 29zm-96-738l288 288-672 672H640V992zm444 132l-92 92-288-288 92-92q28-28 68-28t68 28l152 152q28 28 28 68t-28 68z"></path>{" "}
            </svg>
          </div>
          <div className="ladi-item-tiltle">
            <h3>ĐĂNG KÝ THÔNG TIN</h3>
          </div>
        </div>
        <div className="ladi-element"></div>
      </div>
      {active && <RegisterInfo onModalClick={handleClickClose}/>}
    </>
  );
}

export default FactItem;
