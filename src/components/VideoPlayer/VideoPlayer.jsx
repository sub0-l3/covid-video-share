import React, { Component } from "react";
import DownloadLink from "react-download-link";
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  EmailShareButton,
  FacebookIcon,
  LinkedinIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  EmailIcon
} from "react-share";

import "./VideoPlayer.scss";
class VideoPlayer extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  };

  render() {
    const { url } = this.props;
    const baseClassName = "psa-video-player";
    return (
      <div className={`${baseClassName}`}>
        <video width="320" height="240" controls>
          <source src={url} type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>

        <div className={`${baseClassName}__download-div`}>
          <DownloadLink
            label="Download Video"
            filename="myfile.mp4"
            exportFile={() => url}
          />
        </div>
        <div className={`${baseClassName}__share-div`}>
          <FacebookShareButton url={url}>
            <FacebookIcon size="50" round={true} />
          </FacebookShareButton>

          <LinkedinShareButton url={url}>
            <LinkedinIcon size="50" round={true} />
          </LinkedinShareButton>

          <TwitterShareButton url={url}>
            <TwitterIcon size="50" round={true} />
          </TwitterShareButton>

          <TelegramShareButton url={url}>
            <TelegramIcon size="50" round={true} />
          </TelegramShareButton>

          <WhatsappShareButton url={url}>
            <WhatsappIcon size="50" round={true} />
          </WhatsappShareButton>

          <EmailShareButton url={url}>
            <EmailIcon size="50" round={true} />
          </EmailShareButton>
        </div>
      </div>
    );
  }
}

VideoPlayer.propTypes = {};

export default VideoPlayer;
