import React, { useState } from "react";
import PropTypes from "prop-types";
import "./PortCapacity.scss";
import Popup from "../../../components/Popup";

PortCapacity.propTypes = {};
const dataFix = [
  {
    title: "BẾN CẢNG",
    content:
      "Bến cảng dài gần 500m, rộng 35m với độ sâu trước bến –9.5m, đường kính quay vòng 260m; có khả năng tiếp nhận cùng lúc 3 tàu có trọng tải 30.000 tấn với chiều dài tối đa 172m. Cảng được đầu tư xây dựng theo mô hình cảng hiện đại với kết cấu bến liền bờ; khai thác đa dạng các loại hàng hóa: hàng container, hàng rời, lỏng, khí, hàng siêu trường, siêu trọng, hàng thiết bị… với công suất 4 triệu tấn/năm.",
    img:
      "url(" +
      "https://w.ladicdn.com/s1050x750/62df85ef0af80500167afcc9/9-copy-resize-20220801023508.jpg" +
      ")",
  },
  {
    title: "HỆ THỐNG KHO BÃI",
    content:
      "Tổng diện tích hơn 187.820m2 được xây dựng theo tiêu chuẩn châu Âu, phân chia theo từng khu vực chuyên dùng phù hợp với điều kiện bảo quản, xếp dỡ, vận chuyển từng loại hàng hóa. Hệ thống kho, bãi được trang bị an ninh nghiêm ngặt, hệ thống báo cháy, chữa cháy hiện đại và lắp đặt hệ thống camera giám sát 24/24 nhằm đảm bảo an toàn hàng hóa của khách hàng.",
    img:
      "url(" +
      "https://w.ladicdn.com/s700x600/62df85ef0af80500167afcc9/283027631_529391425530074_3801124348979368586_n-20220728084706.jpg" +
      ")",
  },
  {
    title: "TRANG THIẾT BỊ",
    content:
      "Cảng Chu Lai đầu tư mạnh mẽ về phương tiện, thiết bị xếp dỡ như: cẩu Liebherr, cẩu bánh lốp, xe nâng container cùng với tàu lai dắt, xe đầu kéo công suất lớn… nhằm đảm bảo tối ưu hiệu quả phục vụ khách hàng.",
    img:
      "url(" +
      "https://w.ladicdn.com/s700x600/62df85ef0af80500167afcc9/hinh-5-xe-nang-boc-xep-container-tai-cang2-20221011004439-vw43j.jpg" +
      ")",
  },
];

function PortCapacity(props) {
  const [active, setActive] = useState(false);
  const [data, setData] = useState({});
  function handleClick(data) {
    setActive(true);
    setData(data);
  }
  function hanleClickClose() {
    setActive(false);
  }

  return (
    <>
      <div className="ladi-port">
        <div className="container">
          <div className="ladi-port-cap">
            <div className="ladi-port-cap-header">
              <h2>NĂNG LỰC CẢNG</h2>
            </div>
            <div className="ladi-port-cap-content">
              {dataFix.map((data, index) => {
                return (
                  <div className="ladi-port-cap-elememt" key={index}>
                    <div
                      className="ladi-port-cap-img"
                      style={{ backgroundImage: data.img }}
                    ></div>
                    <div className="ladi-port-cap-des">
                      <h6 key={data.content}>{data.title}</h6>
                      <p className="ladi-port-cap-des__content">{data.content.substr(0, 125) + "..."}</p>
                      <a onClick={() => handleClick(data)}>READ MORE</a>
                      <p className="ladi-port-line"></p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {active && <Popup data={data} onHanleClickClose={hanleClickClose} />}
    </>
  );
}

export default PortCapacity;
