import React, { Component } from "react";
import "./style.css";

export default class Loader extends Component {
  render() {
    return (
      <div className="Container">
        <div className="loading">
          <div></div>
          <div></div>
        </div>
      </div>
    );
  }
}
