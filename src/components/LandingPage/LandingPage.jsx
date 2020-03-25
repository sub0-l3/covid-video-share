import React, { Component } from 'react';
import VideoPlayer from '../VideoPlayer'
import './LandingPage.scss'

class LandingPage extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  }


  render() {
      const url = "https://www.radiantmediaplayer.com/media/bbb-360p.mp4"
      const baseClassName = 'psa-landing-page';
    return(
        <div className={`${baseClassName}`}>
            <VideoPlayer url={url}/>
        </div>
    );
  }
}

LandingPage.propTypes = {

};

export default LandingPage;
