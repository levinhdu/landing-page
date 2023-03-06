import React from "react";
import PropTypes from "prop-types";
import "./Silde.scss";

Silde.propTypes = {};

function Silde(props) {
  return (
    <div className="ladi-silde">
      <div className="ladi-background-img"></div>
      <div className="container">
        <div className="ladi-description">
          <div className="ladi-description__header">
            <h1>CẢNG BIỂN QUỐC TẾ CHU LAI</h1>
          </div>
          <div className="ladi-description__content">
            <p>
              Cửa ngõ trung chuyển quốc tế kết nối với Tây Nguyên, Lào,
              Campuchia và hai miền Nam - Bắc.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Silde;
