import React, { useState } from "react";
import PropTypes from "prop-types";
import Header from "../components/Header";
import Silde from "../components/Silde";
import FactItem from "../components/FactItem";
import Introduce from "../components/Introduce";
import VideoIntro from "../components/VideoIntro";
import PortCapacity from "../components/PortCapacity";
import DevInves from "../components/DevInves";
import Service from "../components/Service";
import ServiceList from "../components/ServiceList";
import Support from "../components/Support";
import Partner from "../components/Partner";
import Footer from "../components/Footer";

HomePage.propTypes = {};

function HomePage(props) {
  return (
    <React.Fragment >
      <Header />
      <Silde />
      <div id="introduce">
      <FactItem />
      <Introduce />
      </div>
      <VideoIntro />
      <PortCapacity/>
      <DevInves/>
      <div id="service">
      <Service/>
      </div>
      <ServiceList/>
      <div id="support">
      <Support/>
      </div>
      <div id="partner">
      <Partner/>
      </div>
      <Footer/>
      </React.Fragment>
  );
}

export default HomePage;
