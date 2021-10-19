import React from "react";
import "./style.css";
import Iframe from "react-iframe";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListMovie } from "../../ListMoviePage/modules/actions";

function ModalVideo(props) {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listMovieReducer.data);

  useEffect(() => {
    dispatch(actFetchListMovie());
  }, []);

  function renderVideo() {
    return data?.map((item, index) => {
      return (
        <Iframe
          key={index}
          url={item.trailer}
          width="450px"
          height="450px"
          id="myId"
          className="myClassname"
        />
      );
    });
  }

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
                <Iframe
                  url={renderVideo()}
                  width="450px"
                  height="450px"
                  id="myId"
                  className="myClassname"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalVideo;
