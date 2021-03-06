import React, { Component } from "react";
import { auth } from "../../services/firebase";
import { getUserVideos } from "../../helpers/db";
import Loader from "react-loader-spinner";
import {Helmet} from "react-helmet";
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
      isLoading: false,
      psaId: []
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    auth().onAuthStateChanged(user => {
      if (user) {
        getUserVideos(user.uid).onSnapshot(querySnapshot => {
          let videos = [];
          let psaId = [];
          querySnapshot.forEach(function(doc) {
            console.log(doc.id, " => ", doc.data());
            videos.push(doc.data());
            psaId.push(doc.id);
          });
          this.setState({
            videos: videos,
            isLoading: false,
            psaId: psaId,
            userId: user.uid
          });
        });
      }
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.videos.length === 0;
  }
  render() {
    const baseClassName = "psa-landing-page";
    const { isLoading, videos, psaId, userId } = this.state;
    if (isLoading) {
      return (
        <div className={`${baseClassName}__loader-div`}>
          <Loader
            type="ThreeDots"
            color="#00BFFF"
            height={100}
            width={100}
            timeout={3000}
          />
        </div>
      );
    }
    return (
      <div className={`${baseClassName}`}>
          <Helmet>
            <meta charSet="utf-8" />
            <title>Covid-19</title>
            <meta name="description" content="Help to spread awareness for covid-19" />
            <link rel="canonical" href="http://mysite.com/example" />

            <meta property="og:title" content="Avareness for covid" />
            <meta property="og:description" content="Help to spread awareness for covid-19" />
            <meta property="og:image" content="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
            <meta property="og:url" content={window.location} />

            <meta name="twitter:title" content="Avareness for covid" />
            <meta name="twitter:description" content="Help to spread awareness for covid-19" />
            <meta name="twitter:image" content="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <div className={`${baseClassName}__video-list`}>
          {videos.map((video, index) => {
            return (
              <VideoCard
                url={video.outputUrl}
                name={video.psaName}
                outputVideoId={video.outputVideoId}
                key={index}
                userId={userId}
                psaId={psaId[index]}
                videoId={video.videoId}
                redirect={true}
                date={video.createdDate ? new Date(video.createdDate.seconds*1000) : video.createdDate}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
