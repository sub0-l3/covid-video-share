import React, { Component } from "react";
import { auth } from "../../services/firebase";
import { getUserVideos } from "../../helpers/db";
import Loader from "react-loader-spinner";

import VideoCard from "../VideoCard";
import "./LandingPage.scss";

class LandingPage extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  };

  constructor(props) {
    super(props);
    this.state = {
      videos: []
    };
  }

  componentDidMount() {
    auth().onAuthStateChanged(user => {
      if (user) {
        const videos = getUserVideos(user.uid);
        this.setState({
          videos: videos
        });
      }
      // TODO: redirect to home page with some error.
    });
  }

  render() {
    const baseClassName = "psa-landing-page";

    const { videos } = this.state;
    if (videos.length === 0) {
      // TODO : User might have no videos, to be fixed
      return (
        <Loader
          type="Circles"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      );
    }
    return (
      <div className={`${baseClassName}`}>
        {videos.map(video => {
          return <VideoCard url={video.url} />;
        })}
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
