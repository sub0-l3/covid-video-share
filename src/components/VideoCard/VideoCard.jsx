import React, { Component } from "react";
import axios from 'axios'
import { withRouter } from "react-router-dom";
import Moment from 'react-moment'
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
import { FaDownload } from "react-icons/fa";

import "./VideoCard.scss";
class VideoCard extends Component {
  static defaultProps = {
    shouldDisplayMenu: true,
    userId: ''
  };

  redirectToSingleVideo = () => {
    if (this.props.redirect)
      this.props.history.replace(`/${this.props.userId}/videos/${this.props.psaId}`);
  };

 downloadFile = () => {
  var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
  };
    axios({
      url: this.props.url,
      method: 'GET',
      responseType: 'blob', // important
      config
    }).then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', this.props.outputVideoId);
      document.body.appendChild(link);
      link.click();
  });
 }

  render() {
    const { url, name, date } = this.props;
    const baseClassName = "psa-video-card";
    
    return (
      <div className={`${baseClassName}`}>
        <video width="320" height="240" controls>
          <source src={url} type="video/mp4" />
          {/* <source src="movie.ogg" type="video/ogg" /> */}
          Your browser does not support the video tag.
        </video>
        <div
          className={`${baseClassName}__name`}
          onClick={() => this.redirectToSingleVideo()}
        >
          <h3>{name}</h3>
        </div>
        <div className={`${baseClassName}__share`}>
          <FacebookShareButton url={window.location}>
            <FacebookIcon size="30" round={true} />
          </FacebookShareButton>

          <LinkedinShareButton url={window.location}>
            <LinkedinIcon size="30" round={true} />
          </LinkedinShareButton>

          <TwitterShareButton url={window.location}>
            <TwitterIcon size="30" round={true} />
          </TwitterShareButton>

          <TelegramShareButton url={window.location}>
            <TelegramIcon size="30" round={true} />
          </TelegramShareButton>

          <WhatsappShareButton url={window.location}>
            <WhatsappIcon size="30" round={true} />
          </WhatsappShareButton>

          <EmailShareButton url={window.location}>
            <EmailIcon size="30" round={true} />
          </EmailShareButton>
        </div>
        <div className={`${baseClassName}__date`}>
          created on: <Moment format="dddd, MMMM D, YYYY hh:mm A" withTitle>{date}</Moment>
        </div>
        <div className={`${baseClassName}__download`}>
            <button onClick={()=>this.downloadFile()} className={`${baseClassName}__download-button`}><FaDownload color={"white"}/></button>
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {};

export default withRouter(VideoCard);
