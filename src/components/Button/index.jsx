import React from "react";
import PropTypes from "prop-types";
import "./Button.scss";

Button.propTypes = {
  title: String,
};
Button.defaulProps = {
  title: "",
};

function Button(props) {
  const { title } = props;
  return (
    <div className="ladi-btn">
      <p>{title}</p>
    </div>
  );
}

export default Button;
