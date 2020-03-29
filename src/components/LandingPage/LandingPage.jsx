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
      videos: [],
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({isLoading: true})
    auth().onAuthStateChanged(user => {
      if (user) {
        const videos = getUserVideos(user.uid);
        this.setState({
          videos: videos,
          isLoading:false
        });
      }
      // TODO: redirect to home page with some error.
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.videos.length === 0;
}
  render() {
    const baseClassName = "psa-landing-page";
    console.log(this.state.videos.length)
    console.log(this.state.videos)
    const { isLoading, videos } = this.state;
    if (isLoading) {
      // TODO : User might have no videos, to be fixed
      return (
        <div className={`${baseClassName}__loader-div`}>
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
        </div>
      );
    }
    return (
      <div className={`${baseClassName}`}>
        {/* <NavigationBar /> */}
        <div className={`${baseClassName}__video-list`}>
          {videos.map(video => {
            return <VideoCard url={video.url} name={video.psaName} />;
          })}
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
