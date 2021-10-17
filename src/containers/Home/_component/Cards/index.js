import React from "react";

export default function Card() {
  return (
    <div>
      <div className="container">
        <div className="movie-card">
          <div className="movie-header manOfSteel">
            <div className="header-icon-container">
              <a href="#">
                {/* <svg data-testid="PlayCircleIcon"></svg> */}

                <i className="material-icons header-icon"></i>
              </a>
            </div>
          </div>
          {/*movie-header*/}
          <div className="movie-content">
            <div className="movie-content-header">
              <a href="#">
                <h3 className="movie-title">Man of Steel</h3>
              </a>
              <div className="imax-logo" />
            </div>
            <div className="movie-info">
              <div className="info-section">
                <label>Date &amp; Time</label>
                <span>Sun 8 Sept - 10:00PM</span>
              </div>
              {/*date,time*/}
              <div className="info-section">
                <label>Screen</label>
                <span>03</span>
              </div>
              {/*screen*/}
              <div className="info-section">
                <label>Row</label>
                <span>F</span>
              </div>
              {/*row*/}
              <div className="info-section">
                <label>Seat</label>
                <span>21,22</span>
              </div>
              {/*seat*/}
            </div>
          </div>
          {/*movie-content*/}
        </div>
      </div>
    </div>
  );
}
