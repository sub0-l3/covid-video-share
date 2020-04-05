import React, { Component } from "react";
import {Helmet} from "react-helmet";
import { getVideo } from "../../helpers/db";
import Loader from "react-loader-spinner";

import VideoCard from "../VideoCard";
import "./SingleVideoShare.scss";

class SingleVideoShare extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  };

  constructor(props) {
    super(props);
    this.state = {
      video: {},
      isLoading: false
    };
  }

  componentDidMount() {
    this.setState({
      isLoading: true
    })

    getVideo(this.props.match.params.userId, this.props.match.params.id).onSnapshot(querySnapshot => {
      console.log(querySnapshot.data())
      this.setState({
              video: querySnapshot.data(),
              isLoading: false
            });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return Object.keys(this.state.video).length === 0;
  }

  render() {
    const baseClassName = "psa-single-video-share";

    const { isLoading, video } = this.state;
    
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
        <Helmet>
            <meta charSet="utf-8" />
            <title>Covid-19</title>
            <meta name="description" content="Help to spread awareness for covid-19" />
            <link rel="canonical" href="http://mysite.com/example" />

            <meta property="og:url" content={window.location} />
            <meta property="og:type" content="video" />
            <meta property="og:title" content={video.psaName} />
            <meta property="og:description" content="Help to spread awareness for covid-19" />
            {/* <meta property="og:image" content="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" /> */}
            <meta property="og:video" content={video.outputUrl} />
            <meta property="og:video:type" content="video/mp4" />
            <meta property="og:video:width" content="300px" />
            <meta property="og:video:width" content="300px" />
            
            <meta property="twitter:type" content="video" />
            <meta name="twitter:title" content={video.psaName} />
            <meta name="twitter:description" content="Help to spread awareness for covid-19" />
            {/* <meta name="twitter:image" content="https://homepages.cae.wisc.edu/~ece533/images/airplane.png" /> */}
            <meta property="twitter:video" content={video.outputUrl} />
            <meta name="twitter:card" content="summary_large_image" />
        </Helmet>
        <VideoCard
         url={video.outputUrl}
         name={video.psaName} 
         date={video.createdDate}
         outputVideoId={video.outputVideoId}
         videoId={video.videoId}
         />
      </div>
    );
  }
}

SingleVideoShare.propTypes = {};

export default SingleVideoShare;
