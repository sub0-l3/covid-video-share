import React, { Component } from "react";
// import { Link } from "react-router-dom";
// import axios from 'axios'
// import fileDownload from 'js-file-download';
// import DownloadLink from "react-download-link";
import { withRouter } from "react-router-dom";
import firebase from "firebase";
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
    shouldDisplayMenu: true
  };

  redirectToSingleVideo = () => {
    if (this.props.redirect)
      this.props.history.replace(`/videos/${this.props.psaId}`);
  };
 downloadFile = () => {
  // firebase
  // .storage()
  // .ref("videos")
  // .child(this.props.videoId)
  // .getDownloadURL()
  // .then(url => console.log(url));

  firebase
  .storage().ref("videos").child(this.props.videoId).getDownloadURL().then(function(url) {
    // `url` is the download URL for 'images/stars.jpg'
  
    // This can be downloaded directly:
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event) {
      var blob = xhr.response;
      console.log(blob)
    };
    xhr.open('GET', url);
    xhr.send();
    // Or inserted into an <img> element:
    // var img = document.getElementById('myimg');
    // img.src = url;
  }).catch(function(error) {
    // Handle any errors
    console.log(error)
  });

  // console.log(this.state.avatarURL);
//   var config = {
//     headers: {'Access-Control-Allow-Origin': '*'}
// };
//   axios({
//     url: this.props.url,
//     method: 'GET',
//     responseType: 'blob', // important
//     config
//   }).then((response) => {
//     const url = window.URL.createObjectURL(new Blob([response.data]));
//     const link = document.createElement('a');
//     link.href = url;
//     link.setAttribute('download', 'file.mp4');
//     document.body.appendChild(link);
//     link.click();
//   });
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
        <div className={`${baseClassName}__date`}>
          created on: <Moment format="dddd, MMMM D, YYYY hh:mm A" withTitle>{date}</Moment>
        </div>
        <div className={`${baseClassName}__download`}>
          {/* <DownloadLink
            label={<FaDownload color={"white"} />}
            filename={outputVideoId}
            exportFile={() => 'https://firebasestorage.googleapis.com/v0/b/recordingmechanic.appspot.com/o/videos%2F050a4306-aaa0-735b-bc8d-20cd13b322e3?alt=media&token=142938ff-8a2d-4916-af56-8522123bfbe1'}
          />

      <a href={url} download="a.mp4">download me</a> */}
      <button onClick={()=>this.downloadFile()} className={`${baseClassName}__download-button`}><FaDownload color={"white"} /></button>
        </div>
      </div>
    );
  }
}

VideoCard.propTypes = {};

export default withRouter(VideoCard);
