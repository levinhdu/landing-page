import React from "react";
import PropTypes from "prop-types";
import "./Service.scss";

Service.propTypes = {};

function Service(props) {
  return (
    <div className="ladi-service">
      <div className="ladi-service-bgcolor"></div>
      <div className="ladi-service-img"></div>
      <div className="container">
        <div className="ladi-service-wrap">
          <div className="ladi-service-title">
            <div className="ladi-service-header">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                class=""
                fill="rgba(255, 255, 255, 1)"
              >
                {" "}
                <path d="M5.59,7.41L7,6L13,12L7,18L5.59,16.59L10.17,12L5.59,7.41M11.59,7.41L13,6L19,12L13,18L11.59,16.59L16.17,12L11.59,7.41Z"></path>{" "}
              </svg>
              <h2>DỊCH VỤ</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 24 24"
                class=""
                fill="rgba(255, 255, 255, 1)"
              >
                {" "}
                <path d="M18.41,7.41L17,6L11,12L17,18L18.41,16.59L13.83,12L18.41,7.41M12.41,7.41L11,6L5,12L11,18L12.41,16.59L7.83,12L12.41,7.41Z"></path>{" "}
              </svg>
            </div>
          </div>
          <div className="ladi-service-des">
            <p>
              Cảng biển Chu Lai - Cảng biển loại 1 cung ứng chuỗi dịch vụ
              logistics trọn gói phục vụ doanh nghiệp xuất nhập khẩu hàng hoá,
              cảng Chu Lai còn cung cấp đa dạng các dịch vụ với phương án làm
              hàng tối ưu, thủ tục hải quan nhanh chóng.
              <br />
              Với sự đầu tư và nâng cấp liên tục về chất lượng dịch vụ giao nhận
              - vận chuyển, cảng Chu Lai đã góp phần không nhỏ vào sự phát triển
              chung của ngành logistics tại khu vực miền Trung.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Service;
