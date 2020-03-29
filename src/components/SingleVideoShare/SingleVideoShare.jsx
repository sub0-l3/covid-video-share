import React, { Component } from "react";

import VideoCard from "../VideoCard";
import "./SingleVideoShare.scss";

class SingleVideoShare extends Component {
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
    // auth().onAuthStateChanged(user => {
    //   if (user) {
    //     const videos = getUserVideos(user.uid);
    //     this.setState({
    //       videos: videos
    //     });
    //   }
    //   // TODO: redirect to home page with some error.
    // });
  }

  render() {
    const baseClassName = "psa-single-video-share";
    const url = "https://firebasestorage.googleapis.com/v0/b/recordingmechanic.appspot.com/o/videos%2Fd428b8da-454a-fdbf-d17b-83dd239f1fe7?alt=media&token=1d1c035b-234b-45e1-a231-80d33e9feae7"
    // const { videos } = this.state;
    // if (videos.length === 0) {
    //   // TODO : User might have no videos, to be fixed
    //   return (
    //     <div className={`${baseClassName}__loader-div`}>
    //     <Loader
    //       type="Oval"
    //       color="#00BFFF"
    //       height={100}
    //       width={100}
    //       timeout={3000} //3 secs
    //     />
    //     </div>
    //   );
    // }
    return (
      <div className={`${baseClassName}`}>
            <VideoCard url={url} name={'sample video'} />
      </div>
    );
  }
}

SingleVideoShare.propTypes = {};

export default SingleVideoShare;
