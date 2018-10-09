import React, { Component } from "react";

import "./Welcome.css";

class Welcome extends Component {
  render() {
    return (
      <div className="row " id="Body">
        <div className="medium-12 columns">
          <h3>Please Log in to get Started</h3>

          <a href="/login" className="button">
            Login
          </a>
          <a href="/signup" className="button success">
            Signup
          </a>
        </div>
      </div>
    );
  }
}

export default Welcome;
