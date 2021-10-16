import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function InfoMovie() {
  return (
    <div>
      <p className="fs-lg mb-1">No Time To Die</p>
      <div className="rating d-flex justify-content-between align-items-baseline">
        <FontAwesomeIcon className="pink icon" icon={faHeart} />
        <div>
          <span className="fs-md-bold">82%</span>
          <span className="fs-md ml-1">10 đánh giá</span>
        </div>
      </div>
      <div className="mt-3">
        <span className="more-info mb-1">
          2D,IMAX 2D,4DX 3D,4DX,3D,MX4D,3D SCREEN X,IMAX 3D
        </span>
        <br />
        <span className="more-info  mt-1 mb-2">Phụ đề, Lồng tiếng</span>
      </div>
      <div className="duration mt-3">
        <span>2h 43m</span>
        <span> • </span>
        <span>Action</span>
        <span> • </span>
        <span>30 Sep, 2021</span>
      </div>
      <button type="button" class=" btn btn-danger mt-4" id="mybtn-1">
        Mua vé
      </button>
    </div>
  );
}
