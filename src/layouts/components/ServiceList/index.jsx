import React, { useState } from "react";
import PropTypes from "prop-types";
import "./ServiceList.scss";
import Popup from "../../../components/Popup";
ServiceList.propTypes = {};

const dataFix = [
  {
    title: "DỊCH VỤ CẢNG BIỂN",
    content:
      "Cảng Chu Lai cung ứng chuỗi các dịch vụ như: dịch vụ tàu lai; dịch vụ cầu bến, phao neo; kiểm đếm, xếp dỡ hàng hóa; nâng hạ, sửa chữa container; khai báo hải quan…đáp ứng khai thác đa dạng các loại hàng hóa như: hàng container, hàng siêu trường siêu trọng, hàng thiết bị, hàng lỏng, khí, hàng rời…phục vụ khách hàng.",
    img:
      "url(" +
      "https://w.ladicdn.com/s900x650/62df85ef0af80500167afcc9/hinh-9_-dich-vu-lai-dat-tau-min-resize-20220801023915.png" +
      ")",
    icon: {
      viewBox: "0 0 1792 1896.0833",
      path: "M960 256q0-26-19-45t-45-19-45 19-19 45 19 45 45 19 45-19 19-45zm832 928v352q0 22-20 30-8 2-12 2-13 0-23-9l-93-93q-119 143-318.5 226.5T896 1776t-429.5-83.5T148 1466l-93 93q-9 9-23 9-4 0-12-2-20-8-20-30v-352q0-14 9-23t23-9h352q22 0 30 20 8 19-7 35l-100 100q67 91 189.5 153.5T768 1543V896H576q-26 0-45-19t-19-45V704q0-26 19-45t45-19h192V477q-58-34-93-92.5T640 256q0-106 75-181T896 0t181 75 75 181q0 70-35 128.5t-93 92.5v163h192q26 0 45 19t19 45v128q0 26-19 45t-45 19h-192v647q149-20 271.5-82.5T1485 1307l-100-100q-15-16-7-35 8-20 30-20h352q14 0 23 9t9 23z",
    },
  },
  {
    title: "LƯU TRỮ HÀNG HOÁ",
    content:
      "Cảng Chu Lai có tổng diện tích kho và bãi hơn 187.820 m2, được xây dựng theo tiêu chuẩn Châu Âu và phân chia thành các phân khu chuyên biệt (kho ngoại quan, kho hàng, bãi container…) đáp ứng các điều kiện xếp dỡ, bảo quản.",
    img:
      "url(" +
      "https://w.ladicdn.com/s1000x750/62df85ef0af80500167afcc9/he-thong-kho-chuyen-dung-cong-nghe-quoc-te-tai-cang-chu-lai-resize-20220801025627.jpg" +
      ")",
    icon: {
      viewBox: "0 0 24 24",
      path: "M11.5,1L2,6V8H21V6M16,10V17H19V10M2,22H21V19H2M10,10V17H13V10M4,10V17H7V10H4Z",
    },
  },
  {
    title: "VẬN TẢI HÀNG HOÁ",
    content:
      "Cảng Chu Lai sở hữu đội xe (xe đầu kéo, xe tải) phục vụ vận chuyển hàng hóa xuất, nhập khẩu một cách an toàn, nhanh chóng và hiệu quả đáp ứng đầy đủ các yêu cầu của quý khách hàng.",
    img:
      "url(" +
      "https://w.ladicdn.com/s950x650/62df85ef0af80500167afcc9/dji_0778-copy-e1629793642521-resize-20220801071659.jpg" +
      ")",
    icon: {
      viewBox: "0 0 1792 1896.0833",
      path: "M640 1408q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zM256 896h384V640H482q-13 0-22 9L265 844q-9 9-9 22v30zm1280 512q0-52-38-90t-90-38-90 38-38 90 38 90 90 38 90-38 38-90zm256-1088v1024q0 15-4 26.5t-13.5 18.5-16.5 11.5-23.5 6-22.5 2-25.5 0-22.5-.5q0 106-75 181t-181 75-181-75-75-181H768q0 106-75 181t-181 75-181-75-75-181h-64q-3 0-22.5.5t-25.5 0-22.5-2-23.5-6-16.5-11.5-13.5-18.5-4-26.5q0-26 19-45t45-19V960q0-8-.5-35t0-38 2.5-34.5 6.5-37 14-30.5 22.5-30l198-198q19-19 50.5-32t58.5-13h160V320q0-26 19-45t45-19h1024q26 0 45 19t19 45z",
    },
  },
];

function ServiceList(props) {
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
      <div className="ladi-servicewrap">
        <div className="container">
          <div className="ladi-service-wrap">
            <div className="ladi-service-list">
              {dataFix.map((data, index) => {
                return (
                  <div className="ladi-service-col">
                    <div className="ladi-service-content">
                      <div
                        className="ladi-service-content__img"
                        style={{ backgroundImage: data.img }}
                      ></div>
                      <div className="ladi-service-group">
                        <div className="ladi-service-group__block"></div>
                        <div className="ladi-service-group__icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="100%"
                            height="100%"
                            preserveAspectRatio="none"
                            viewBox={data.icon.viewBox}
                            class=""
                            fill="rgba(255, 255, 255, 1)"
                          >
                            {" "}
                            <path d={data.icon.path}></path>{" "}
                          </svg>
                        </div>
                      </div>
                      <div className="ladi-service-headerline">
                        <h6>{data.title}</h6>
                      </div>
                      <div className="ladi-service-textline">
                        <p>{data.content.substr(0, 180) + "..."}</p>
                      </div>
                      <div className="ladi-service-readmore">
                        <a onClick={() => handleClick(data)}>READ MORE</a>
                        <div className="ladi-service-readmore__line"></div>
                      </div>
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

export default ServiceList;