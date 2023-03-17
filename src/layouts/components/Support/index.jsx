import React from "react";
import PropTypes from "prop-types";
import "./Support.scss";

Support.propTypes = {};

const dataFix = [
  {
    title: "Lịch tàu",
    img:
      "url(" +
      "https://w.ladicdn.com/s400x400/62df85ef0af80500167afcc9/images-20220919042753-_r4jd.png" +
      ")",
  },
  {
    title: "Thông báo",
    img:
      "url(" +
      "https://w.ladicdn.com/s400x400/62df85ef0af80500167afcc9/istockphoto-1221101058-170667a-20220919060247-albu1.jpg" +
      ")",
  },
  {
    title: "Biểu cước",
    img:
      "url(" +
      "https://w.ladicdn.com/s400x400/62df85ef0af80500167afcc9/tai-xuong-3-20220920032955-klxje.png" +
      ")",
  },
];

function Support(props) {
  return (
    <div className="ladi-support">
      <div className="container">
        <div className="ladi-support-title">
          <h3>HỖ TRỢ</h3>
        </div>
        <div className="ladi-support-group">
          <div className="ladi-support-option">
            {dataFix.map((data, index) => {
              return (
                <div className="ladi-support-block">
                  <div className="ladi-support-block__rectangle">
                    <h3>{data.title}</h3>
                  </div>

                  <div className="ladi-support-block__circle" style={{backgroundImage: data.img}}></div>
                </div>
              );
            })}
          </div>
          <div className="ladi-support-calculator">
            <div className="ladi-support-calculator__bgimg"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Support;
