import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

export default class Tab extends Component {
  render() {
    return (
      <div id="tab">
        {/* Tab header: Hệ thống rạp */}
        <ul
          className="nav nav-pills mb-3 tab-header"
          id="pills-tab"
          role="tablist"
        >
          <li className="nav-item">
            <a
              className="nav-link active"
              id="pills-cgv-tab"
              data-toggle="pill"
              href="#pills-cgv"
              role="tab"
              aria-controls="pills-cgv"
              aria-selected="true"
            >
              <img className="rap-logo-tab" src="../img/cgv.png" alt="cgv" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-bhdstar-tab"
              data-toggle="pill"
              href="#pills-bhdstar"
              role="tab"
              aria-controls="pills-bhdstar"
              aria-selected="false"
            >
              <img className="rap-logo-tab" src="../img/bhd.png" alt="bhd" />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-galaxy-tab"
              data-toggle="pill"
              href="#pills-galaxy"
              role="tab"
              aria-controls="pills-galaxy"
              aria-selected="false"
            >
              <img
                className="rap-logo-tab"
                src="../img/galaxycine.png"
                alt="galaxycine"
              />
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              id="pills-cinestar-tab"
              data-toggle="pill"
              href="#pills-cinestar"
              role="tab"
              aria-controls="pills-cinestar"
              aria-selected="false"
            >
              <img
                className="rap-logo-tab"
                src="../img/cinestar.png"
                alt="cinestar"
              />
            </a>
          </li>
        </ul>
        {/* Tab content: Danh sách cụm rạp và lịch chiếu */}
        <div className="tab-content mb-5" id="pills-tabContent">
          <div
            className="tab-pane fade show active"
            id="pills-cgv"
            role="tabpanel"
            aria-labelledby="pills-cgv-tab"
          >
            <div className="accordion" id="accordionExample">
              <div className="card">
                <div className="card-header" id="headingOne">
                  <div
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="tab-body d-flex justify-content-between">
                      <div>Tên cụm rạp: BHD Star Cineplex - Bitexco</div>
                      <div>Địa chỉ: L3-Bitexco Icon 68, 2 Hải Triều, Q.1</div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body tab-body">
                    <div className="d-flex  justify-content-start">
                      <div className="ten-rap d-flex">
                        <FontAwesomeIcon className="pink rating-icon" icon={faHeart} />
                        <div className="ten-rap-text ml-2">Tên Rạp: Rạp 7</div>
                      </div>
                      <div className="lich-chieu d-flex flex-wrap">
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>10:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>12:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>
                        <div className="suat-chieu mr-4 mb-3">
                          <div>2019-01-01</div>
                          <div>14:10:00</div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card">
                <div className="card-header" id="headingOne">
                  <div
                    data-toggle="collapse"
                    data-target="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                    style={{ cursor: "pointer" }}
                  >
                    <div className="tab-body d-flex justify-content-between">
                      <div>Tên cụm rạp: BHD Star Cineplex - Bitexco</div>
                      <div>Địa chỉ: L3-Bitexco Icon 68, 2 Hải Triều, Q.1</div>
                    </div>
                  </div>
                </div>
                <div
                  id="collapseOne"
                  className="collapse show"
                  aria-labelledby="headingOne"
                  data-parent="#accordionExample"
                >
                  <div className="card-body tab-body">
                    Anim pariatur cliche reprehenderit, enim eiusmod high life
                    accusamus terry richardson ad squid. 3 wolf moon officia
                    aute, non cupidatat skateboard dolor brunch. Food truck
                    quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor,
                    sunt aliqua put a bird on it squid single-origin coffee
                    nulla assumenda shoreditch et. Nihil anim keffiyeh
                    helvetica, craft beer labore wes anderson cred nesciunt
                    sapiente ea proident. Ad vegan excepteur butcher vice lomo.
                    Leggings occaecat craft beer farm-to-table, raw denim
                    aesthetic synth nesciunt you probably haven't heard of them
                    accusamus labore sustainable VHS.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className="tab-pane fade"
            id="pills-bhdstar"
            role="tabpanel"
            aria-labelledby="pills-cinestar-tab"
          >
            BHD Star
          </div>
          <div
            className="tab-pane fade"
            id="pills-galaxy"
            role="tabpanel"
            aria-labelledby="pills-galaxy-tab"
          >
            Galaxycine
          </div>
          <div
            className="tab-pane fade"
            id="pills-cinestar"
            role="tabpanel"
            aria-labelledby="pills-cinestar-tab"
          >
            Cinestar
          </div>
        </div>
      </div>
    );
  }
}
