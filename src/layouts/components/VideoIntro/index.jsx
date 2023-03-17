import React, { useState } from "react";
import PropTypes from "prop-types";
import "./VideoIntro.scss";
VideoIntro.propTypes = {};

function VideoIntro(props) {
  const [active, setActive] = useState(false);
  const handleClick = () => {
    setActive(true);
  };
  return (
    <div className="ladi-video">
      {active ? (
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/iKhnVHSnLbA?start=2&autoplay=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      ) : (
        <div className="ladi-video-bg-img">
          <div className="ladi-video-btn">
            <div className="ladi-btn-play" onClick={handleClick}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
                viewBox="0 0 408.7 408.7"
                fill="rgba(0, 0, 0, 0.5)"
              >
                <polygon
                  fill="#fff"
                  points="163.5 296.3 286.1 204.3 163.5 112.4 163.5 296.3"
                ></polygon>
                <path
                  d="M204.3,0C91.5,0,0,91.5,0,204.3S91.5,408.7,204.3,408.7s204.3-91.5,204.3-204.3S316.7,0,204.3,0ZM163.5,296.3V112.4l122.6,91.9Z"
                  transform="translate(0 0)"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default VideoIntro;
