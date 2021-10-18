import React, { Component } from "react";
import InfoMovie from "./infomovie";

export default class Carousel extends Component {
  render() {
    const { dataPhim } = this.props;
    return (
      <div className="carousel">
        <div className="container">
          <div className="row  d-flex .flex-column carousel-wrapper">
            <div
              className="carousel-bg"
              style={{
                backgroundImage: `linear-gradient(to bottom, rgba(43, 43, 44, 0.4), rgba(20, 9, 1, 0.4)), url(${dataPhim?.hinhAnh})`,
              }}
            ></div>
            <div className="img-wrapper ">
              <div className="detail-poster">
                <img
                  className="img-fluid"
                  src={dataPhim?.hinhAnh}
                  alt={dataPhim?.tenPhim}
                  style={{ objectPosition: "left top", height: "100%" }}
                />
                <a href={dataPhim?.trailer}>
                  <img
                    className="playBtn"s
                    src="/asset/img/play-video.png"
                    alt="play-video"
                  />
                </a>
              </div>
              <div className="img-wrapper-overlay "></div>
            </div>
            <div className="info-movie">
              <div className="content my-4 ml-3">
                <InfoMovie dataPhims={dataPhim} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
