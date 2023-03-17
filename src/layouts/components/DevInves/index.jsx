import React from "react";
import PropTypes from "prop-types";
import "./DevInves.scss";

DevInves.propTypes = {};

function DevInves(props) {
  return (
    <div className="ladi-inves">
      <div className="container">
        <div className="ladi-inves-wrap">
          <div className="ladi-inves-content">
            <div className="ladi-inves-content__header">
              <h2>ĐẦU TƯ PHÁT TRIỂN</h2>
            </div>
            <div className="ladi-inves-content__title">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                leo leo, tincidunt ac lectus vel, tincidunt scelerisque{" "}
              </p>
            </div>
            <div className="ladi-inves-block">
              <div className="ladi-inves-group">
                <div className="ladi-inves-shape">
                  <div className="ladi-inves-shape__box"></div>
                  <div className="ladi-inves-line"></div>
                </div>
                <div className="ladi-inves-shape">
                  <div className="ladi-inves-shape__box"></div>
                  <div className="ladi-inves-line"></div>
                </div>
                <div className="ladi-inves-shape">
                  <div className="ladi-inves-shape__box"></div>
                </div>
              </div>

              <div className="ladi-inves-group">
                <div className="ladi-inves-paragraph">
                  Cảng Chu Lai được quy hoạch từ cảng biển loại II (cảng tổng
                  hợp địa phương) thành <strong>cảng biển loại I</strong> (cảng
                  quốc gia, đầu mối khu vực) theo phê duyệt Quy hoạch tổng thể
                  phát triển hệ thống cảng biển Việt Nam thời kỳ 2021-2030
                </div>
                <div className="ladi-inves-paragraph">
                  Định hướng đến năm 2030 với mục tiêu phát triển hệ thống cảng
                  biển Chu Lai trở thành một trong các đầu mối về giao thông vận
                  tải, giao thương trong nước và quốc tế của khu vực miền Trung
                  và Tây Nguyên; là cửa ngõ kết nối ra Biển Đông của vùng Tây
                  Nguyên, Nam Lào, Đông Bắc Campuchia và Thái Lan
                </div>
                <div className="ladi-inves-paragraph">
                  Tháng 6/2022 cảng Chu Lai tiếp tục triển khai xây dựng mở rộng
                  bến cảng nước sâu để đón tàu lớn có tải trọng 5 vạn tấn (dự
                  kiến đưa vào khai thác trong năm 2023)
                </div>
              </div>
            </div>
          </div>

          <div className="ladi-inves-silde">
            <div className="ladi-inves-boxline"></div>

            <div className="ladi-inves-boxwhite"></div>

            <div className="ladi-inves-img">
              <div className="ladi-inves-img__bg"></div>
            </div>
            <div className="ladi-inves-boxslide">
              <div className="ladi-inves-box"></div>
              <div className="ladi-inves-imgside">
                <div className="ladi-inves-imgsilde__bg"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DevInves;
