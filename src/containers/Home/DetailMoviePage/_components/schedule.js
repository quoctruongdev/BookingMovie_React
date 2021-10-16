import React from "react";
import DaySlider from "./dayslider";
import Tab from "./tab";
import InfoMovie from "./infomovie";

export default function Schedule() {
  return (
    <div className="container schedule">
      {/* info movie */}
      <div style={{
        padding:"20px",
      }}>
      <div className="info-movie">
        <div className="content py-4 px-5">
          {/* <p className="fs-lg  mb-1">No Time To Die</p>
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
          </button> */}
          <InfoMovie/>
        </div>
      </div>
      </div>
      {/* Mô tả */}
      <div className="my-5">
        <h4>Mô tả</h4>
        <div>
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto
            repudiandae distinctio aut quasi. Quae quam, et soluta distinctio
            mollitia adipisci quia praesentium vel dolorum, suscipit maiores
            exercitationem, ipsam omnis? Sit iste natus eligendi nobis odio,
            ipsa harum debitis! Nisi, quidem autem fugit praesentium
            exercitationem fuga. Officiis reprehenderit fugit vitae ullam.
          </span>
        </div>
      </div>
      {/* Lịch chiếu */}
      <div>
        <h4>Lịch chiếu</h4>
        <DaySlider />
        <Tab />
      </div>
    </div>
  );
}
