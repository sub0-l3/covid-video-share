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

import "./VideoCard.scss";
class VideoCard extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  };

  render() {
    const { url, name } = this.props;
    const baseClassName = "psa-video-card";
    return (
      <div className={`${baseClassName}`}>
        <video width="320" height="240" controls>
          <source src={url} type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>
        <div className={`${baseClassName}__name`}>
          <h3>{name}</h3>
        </div>
        <div className={`${baseClassName}__share`}>
          <FacebookShareButton url={url}>
            <FacebookIcon size="30" round={true} />
          </FacebookShareButton>

          <LinkedinShareButton url={url}>
            <LinkedinIcon size="30" round={true} />
          </LinkedinShareButton>

          <TwitterShareButton url={url}>
            <TwitterIcon size="30" round={true} />
          </TwitterShareButton>

          <TelegramShareButton url={url}>
            <TelegramIcon size="30" round={true} />
          </TelegramShareButton>

          <WhatsappShareButton url={url}>
            <WhatsappIcon size="30" round={true} />
          </WhatsappShareButton>

          <EmailShareButton url={url}>
            <EmailIcon size="30" round={true} />
          </EmailShareButton>
        </div>
        <div className={`${baseClassName}__download`}>
          <DownloadLink
            label="Download"
            filename={name}
            exportFile={() => url}
          />
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {};

export default VideoCard;
