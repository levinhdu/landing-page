import React from "react";
import PropTypes from "prop-types";
import "./Popup.scss";

Popup.propTypes = {
  data: PropTypes.array,
  onHanleClickClose: PropTypes.func,
};
Popup.defaulProps = {
  data: null,
  onHanleClickClose: null,
};

function Popup(props) {
  const { data, onHanleClickClose } = props;
  function onHanleClose() {
    if (onHanleClickClose) {
      onHanleClickClose();
    }
  }
  return (
    <div className="ladi-popup">
      <div className="ladi-popup-container">
        <div className="ladi-popup-close" onClick={onHanleClose}>
          <button>
            <ion-icon name="close-outline"></ion-icon>
          </button>
        </div>
        <div className="ladi-popup-content">
          <h2>{data.title}</h2>
          <p>
            {data.content}
          </p>
        </div>
        <div className="ladi-popup-img">
          <div className="ladi-popup-img__shape"></div>
          <div className="ladi-popup-img__bg" style={{backgroundImage: data.img}}></div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
