import React, { Component } from 'react';
import './VideoPlayer.scss'
class VideoPlayer extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  }


  render() {
      const {url} = this.props
      const baseClassName = 'psa-video-player';
    return(
        <div className={`${baseClassName}`}>
            <video width="320" height="240" controls>
                <source src={url} type="video/mp4" />
                {/* <source src="movie.ogg" type="video/ogg" /> */}
                Your browser does not support the video tag.
            </video>
        </div>
    );
  }
}

VideoPlayer.propTypes = {

};

export default VideoPlayer;
