import React from "react";
import PropTypes from "prop-types";
import "./Introduce.scss";

Introduce.propTypes = {};

function Introduce(props) {
  return (
    <div id="introduce" className="ladi-introduce">
      <div className="container">
        <div className="ladi-introduce-row">
          <div className="ladi-introduce-col">
            <div className="ladi-introduce-header">
              <h2>GIỚI THIỆU</h2>
            </div>
            <div className="ladi-introduce-content">
              <p>
                Cảng Chu Lai thuộc Khu kinh tế mở Chu Lai, Quảng Nam, được đầu
                tư xây dựng năm 2010 và chính thức khánh thành, đưa vào hoạt
                động vào tháng 5/2012 trên diện tích 140 ha. Đây là cảng hàng
                hóa tổng hợp với các phân khu chuyên biệt, vừa phục vụ hoạt động
                sản xuất kinh doanh của THACO đồng thời cung cấp các dịch vụ
                cảng biển, kho bãi cho các nhà đầu tư trong khu vực Miền Trung –
                Tây Nguyên, Nam Lào và Bắc Campuchia..v...v
              </p>
            </div>
            <div className="ladi-introduce-list">
              <ul>
                <li>Độ dài luồng: 11km</li>
                <li>Độ sâu luồng: -10.0m</li>
                <li>Độ sâu trước bến: -9.5m</li>
                <li>Chế độ thủy triều: 1.2m</li>
                <li>Đường kính quay tàu: 260m</li>
                <li>Tiếp nhận tàu: 30.000 DWT</li>
                <li>LOA: 172m</li>
                <li>UCK: 0.8 m</li>
              </ul>
            </div>
          </div>
          <div className="ladi-introduce-col">
            <div className="ladi-row">
              <div className="ladi-col">
                <div className="ladi-img1-introduce"></div>
              </div>
              <div className="ladi-col">
                <div className="ladi-img2-introduce"></div>
              </div>
            </div>
            <div className="ladi-row">
              <div className="ladi-img3-introduce"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
