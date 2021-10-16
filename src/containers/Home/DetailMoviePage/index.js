import React, { Component } from "react";
import Carousel from "./_components/carousel";
import Schedule from "./_components/schedule";
import "./style.css";

export default class DetailMoviePage extends Component {
  render() {
    return (
      <div>
        <Carousel />
        <Schedule />
      </div>
    );
  }
}
