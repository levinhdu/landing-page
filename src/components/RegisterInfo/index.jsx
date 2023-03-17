import React, { useState } from "react";
import PropTypes from "prop-types";
import "./RegisterInfo.scss";

RegisterInfo.propTypes = {
  onModalClick: PropTypes.func,
};
RegisterInfo.defauleProps = {
  onModalClick: null,
};

function RegisterInfo(props) {
  const { onModalClick } = props;
  const handleClickClose = () => {
    if (!onModalClick) return;
    onModalClick();
  };
  return (
    <div className="ladi-modal">
      <div className="ladi-modal-container">
        <div className="ladi-modal-wrap">
          <div className="ladi-close" onClick={handleClickClose}>
            <button>
              <ion-icon name="close-outline"></ion-icon>
            </button>
          </div>
          <div className="ladi-modal-title">
            <h3>ĐĂNG KÍ THÔNG TIN</h3>
            <p>
              Gửi thông tin đến chúng tôi bằng cách điền vào biểu mẫu bên dưới.
              Chúng tôi sẽ liên hệ với bạn sớm nhất có thể.
            </p>
          </div>
          <form action="#" className="ladi-from-modal">
            <input type="text" name="" id="" placeholder="Họ và tên" />
            <input type="email" name="" id="" placeholder="Email" />
            <input type="tel" name="" id="" placeholder="Số điện thoại" />
            <textarea
              name=""
              id=""
              cols="39"
              rows="6"
              placeholder="Để lại lời nhắn cho chúng tôi"
            ></textarea>
            <button>GỬI</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default RegisterInfo;
