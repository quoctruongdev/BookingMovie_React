import React, { Component } from "react";
import InfoMovie from "./infomovie";
import Iframe from "react-iframe";
import "./../../_component/Modal-video/style.css";

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
                <a
                  type="button"
                  data-toggle="modal"
                  data-src={dataPhim?.trailer}
                  data-target="#myModal"
                >
                  <img
                    className="playBtn"
                    s
                    src="/asset/img/play-video.png"
                    alt="play-video"
                  />
                </a>

                <div
                  className="modal fade"
                  id="myModal"
                  tabIndex={-1}
                  role="dialog"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog" role="document">
                    <div className="modal-content">
                      <div className="modal-body">
                        <button
                          type="button"
                          className="close"
                          data-dismiss="modal"
                          aria-label="Close"
                        >
                          <span aria-hidden="true">×</span>
                        </button>

                        <div className="embed-responsive embed-responsive-16by9">
                          <Iframe
                            url={dataPhim?.trailer}
                            width="450px"
                            height="450px"
                            id="myId"
                            className="myClassname
                            "
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="img-wrapper-overlay "></div>
            </div>
            <div className="info-movie">
              <div className="content my-4 ml-3">
                <InfoMovie dataPhim={dataPhim} />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
