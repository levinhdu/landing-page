import React from "react";
import PropTypes from "prop-types";
import './BtnLadiNav.scss'

BtnLadiNav.propTypes = {
  title: String,
  link: String,
};

BtnLadiNav.defaulProps = {
  title: "",
  link: "",
};

function BtnLadiNav(props) {
  const { title, link } = props;
  return (
    <div className="ladi-btn-nav">
      <a href={link}>{title}</a>
    </div>
  );
}

export default BtnLadiNav;
