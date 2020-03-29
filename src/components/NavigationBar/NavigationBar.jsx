import React, { Component } from "react";

import "./NavigationBar.scss";

class NavigationBar extends Component {
  static defaultProps = {
    shouldDisplayMenu: true
  };

  constructor(props) {
    super(props);
    this.state = {
      
    };
  }


  render() {
    const baseClassName = "psa-navigation-bar";

    
    return (
      <div className={`${baseClassName}`}>
        <ul className={`${baseClassName}__nav-ul`}>
            <li><a class="active" href="#home">Home</a></li>
            <li><a href="#videos">Video library</a></li>
            <li><a href="#profile">Profile</a></li>
            <li><a href="#logout">Logout</a></li>
        </ul>
      </div>
    );
  }
}

NavigationBar.propTypes = {};

export default NavigationBar;
