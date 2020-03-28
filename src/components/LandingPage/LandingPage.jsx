import React, { Component } from "react";
import VideoPlayer from "../VideoPlayer";
import { auth } from "../../services/firebase";
import { signin } from "../../helpers/auth";
import { db } from "../../services/firebase";
import Loader from 'react-loader-spinner'

import "./LandingPage.scss";

class LandingPage extends Component {
  static defaultProps = {
    shouldDisplayMenu: true,
    videos: []
  };

  constructor(props) {
    super(props);
    this.state = {
      authenticated: false,
      videos: {}
    };
  }

  async componentDidMount() {
   signin("tech@hopscotch.health", "111111");
   let videos = {}

    await auth().onAuthStateChanged(user => {
      if (user) {
        db.collection("users")
          .doc(user.uid)
          .collection("videos")
          .get()
          .then(function(querySnapshot) {
            querySnapshot.forEach(function(doc) {
              videos[`${doc.id}`] = doc.data();
            });
          })
          .catch(function(error) {
            console.log("Error getting documents: ", error);
          });
      } else {
        this.setState({
          authenticated: false
        });
      }
    });
    this.setState({videos: videos})
  }

  render() {

    const baseClassName = "psa-landing-page";
    if(this.state.videos === {}){
      return (
        <Loader
         type="Circles"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000} //3 secs

      />
      )
    }
    return (
      <div className={`${baseClassName}`}>
        {
          Object.keys(this.state.videos).map((key)=>{
             return (<VideoPlayer url={this.state.videos[key].url} />)
          })
        }
      </div>
    );
  }
}

LandingPage.propTypes = {};

export default LandingPage;
