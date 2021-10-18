import React from "react";
import "./style.css";

function ModalVideo() {
  return (
    <div className="container">
      {/* Button trigger modal */}
      <a
        type="button"
        data-toggle="modal"
        data-src="https://www.youtube.com/embed/Jfrjeg26Cwk"
        data-target="#myModal"
      >
        <img src="https://tix.vn/app/assets/img/icons/play-video.png" alt="" />
      </a>
      {/* Modal */}

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
              {/* 16:9 aspect ratio */}

              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  className="embed-responsive-item"
                  src="https://www.youtube.com/embed/DKqu9qc-5f4"
                  id="video"
                  allowscriptaccess="always"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ModalVideo };
