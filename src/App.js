import React, { Component } from "react";
import LandingPage from "./components/LandingPage";
import { auth } from "./services/firebase";
import { signin } from "./helpers/auth";
import { readUserData } from "./helpers/db";

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      authenticated: false
    };
  }
  async componentDidMount() {
    await signin("subhrajit.debnath@gmail.com", "subzero");

    auth().onAuthStateChanged(user => {
      if (user) {
        readUserData(user.uid)
        this.setState({
          authenticated: true
        });
      } else {
        this.setState({
          authenticated: false
        });
      }
    });
  }
  render() {
    return (
      <div className="App">
        <LandingPage />
      </div>
    );
  }
}

export default App;
