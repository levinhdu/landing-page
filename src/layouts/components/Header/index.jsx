import React from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import BtnLadiNav from "../../../components/BtnLadiNav";
import Button from "../../../components/Button";

Header.propTypes = {};

function Header(props) {
  return (
    <div className="ladi-header container">
      <div className="ladi-logo">
        <div className="ladi-logo__img"></div>
      </div>
      <div className="ladi-nav">
        <ul>
          <li>
            <BtnLadiNav title={"GIỚI THIỆU"} link={"#"} />
          </li>
          <p>
          </p>
          <li>
            <BtnLadiNav title={"DỊCH VỤ"} link={"#"} />
          </li>
          <p></p>
          <li>
            <BtnLadiNav title={"HỔ TRỢ"} link={"#"} />
          </li>
          <p></p>
          <li>
            <BtnLadiNav title={"LIÊN HỆ"} link={"#"} />
          </li>
          <p></p>
          <li>
            <BtnLadiNav title={"ĐỐI TÁC"} link={"#"} />
          </li>
          <p></p>
        </ul>
      </div>
      <div className="btn-language">
        <Button title={"Tiếng Việt"} />
      </div>
      <div className="ladi-header-text">
        <p>CHU LAI PORT</p>
      </div>
    </div>
  );
}

export default Header;
