import React, { Component } from "react";
import VideoCard from "../VideoCard";
import "./LandingPage.scss";

class LandingPage extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  };

  render() {
    const url =
      "https://firebasestorage.googleapis.com/v0/b/net-ninja-marioplan-5bc26.appspot.com/o/maldives-speedboat.mp4?alt=media&token=dd4611f3-ac59-4bb2-bd2e-13ff6e5468ca";
    const baseClassName = "psa-landing-page";
    return (
      <div className={`${baseClassName}`}>
        <VideoCard url={url} />
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
