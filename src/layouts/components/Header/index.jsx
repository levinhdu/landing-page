import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Header.scss";
import BtnLadiNav from "../../../components/BtnLadiNav";
import Button from "../../../components/Button";
import RegisterInfo from "../../../components/RegisterInfo";

Header.propTypes = {};

function Header(props) {
  const [active, setActive] = useState(false);
  const [menu, setMenu] = useState(false)

  function hanleOnClickMenu(){
    setMenu(true)
  }

  function handleClickModal() {
    setActive(true);
  }
  function handleClickClose() {
    setActive(false);
  }
  return (
    <>
      <div className="ladi-header">
        <div className="container">
          <div className="ladi-header-wrap">
            <div className="ladi-logo">
              <div className="ladi-logo__img"></div>
              <div className="ladi-logo__text">
                <p>CHU LAI PORT</p>
              </div>
            </div>
            <div className="ladi-header-menu" onClick={hanleOnClickMenu}>
              <ion-icon name="menu-outline"></ion-icon>
            </div>
            <div className="ladi-nav" style={{display: menu && 'block'}}>
              <ul>
                <li className="ladi-nav__intro">
                  <BtnLadiNav title={"GIỚI THIỆU"} link={"#introduce"} />
                  <ul className="modal-service">
                    <li>
                      <a href="#">GIỚI THIỆU CẢNG</a>
                    </li>
                    <li>
                      <a href="#">NĂNG LỰC CẢNG</a>
                      <ul className="modal-service1">
                        <li>
                          <a href="#">BẾN CẢNG</a>
                        </li>
                        <li>
                          <a href="#">HỆ THỐNG KHO BÃI</a>
                        </li>
                        <li>
                          <a href="#">NĂNG LỰC CẢNG</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="ladi-nav__intro">
                  <BtnLadiNav title={"DỊCH VỤ"} link={"#service"} />
                  <ul className="modal-service">
                    <li>
                      <a href="#">DỊCH VỤ CẢNG BIỂN</a>
                    </li>
                    <li>
                      <a href="#">LƯU TRỮ HÀNG HÓA</a>
                    </li>
                    <li>
                      <a href="#">VẬN TẢI HÀNG HÓA</a>
                    </li>
                  </ul>
                </li>
                <li className="ladi-nav__intro">
                  <BtnLadiNav title={"HỔ TRỢ"} link={"#support"} />
                  <ul className="modal-service">
                    <li>
                      <a href="#">LỊCH TÀU</a>
                    </li>
                    <li>
                      <a href="#">THÔNG BÁO</a>
                    </li>
                    <li>
                      <a href="#">BIỂU CƯỚC</a>
                    </li>
                  </ul>
                </li>
                <li className="ladi-nav__intro" onClick={handleClickModal}>
                  <BtnLadiNav title={"LIÊN HỆ"} link={"#"} />
                </li>
                <li className="ladi-nav__intro">
                  <BtnLadiNav title={"ĐỐI TÁC"} link={"#partner"} />
                </li>
              </ul>
            </div>
            <div className="btn-language">
              <Button title={"Tiếng Việt"} />
            </div>
          </div>
        </div>
      </div>
      {active && <RegisterInfo onModalClick={handleClickClose} />}
    </>
  );
}

export default Header;
