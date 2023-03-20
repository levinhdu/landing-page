import React from "react";
import PropTypes from "prop-types";
import "./Partner.scss";
Partner.propTypes = {};

function Partner(props) {
  return (
    <div className="ladi-partner">
      <div className="container">
        <div className="ladi-partner-title">
          <h2>ĐỐI TÁC</h2>
        </div>
        <div className="ladi-partner-group">
          <div className="ladi-partner-group-row">
            <div className="ladi-partner-group-logo ">
              <div className="ladi-partner-group-logo__img"></div>
            </div>
            <div className="ladi-partner-group-logo  ">
              <div className="ladi-partner-group-logo__img1"></div>
            </div>
            <div className="ladi-partner-group-logo ">
              <div className="ladi-partner-group-logo__img2"></div>
            </div>
            <div className="ladi-partner-group-logo ">
              <div className="ladi-partner-group-logo__img3"></div>
            </div>
          </div>
          <div className="ladi-partner-group-row">
            <div className="ladi-partner-group-logo ">
              <div className="ladi-partner-group-logo__img4"></div>
            </div>
            <div className="ladi-partner-group-logo ">
              <div className="ladi-partner-group-logo__img5"></div>
            </div>
            <div className="ladi-partner-group-logo ">
              <div className="ladi-partner-group-logo__img6"></div>
            </div>
            <div className="ladi-partner-group-logo ">
              <div className="ladi-partner-group-logo__img7"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Partner;
