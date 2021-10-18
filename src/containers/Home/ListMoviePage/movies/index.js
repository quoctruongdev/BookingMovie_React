import React from "react";
import { NavLink } from "react-router-dom";

export default function Movie(props) {
  const movie = props.movie;

  return (
    <div className="containerx">
      <div className="movie-card">
        <div
          className="movie-header manOfSteel"
          style={{
            background: `url(${movie.hinhAnh})`,
            backgroundSize: "cover",
          }}
        >
          <div className="header-icon-container">
            <a href="#">
              <i className="material-icons header-icon"></i>
            </a>
          </div>
        </div>

        <div className="movie-content">
          <div className="movie-content-header">
            <NavLink
              to={`detail-movie/${movie.maPhim}`}
              activeClassName="active"
            >
              <h3 className="movie-title">{movie.tenPhim}</h3>
            </NavLink>

            <div className="imax-logo" />
          </div>
          <div className="movie-info">
            <div className="info-section">
              <label>Ngày khởi chiếu</label>
              <span>{movie.ngayKhoiChieu}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div
  //     className="h-full mx-2 my-2
  //    border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden"
  //   >
  //     <div
  //       style={{
  //         background: `url(${movie.hinhAnh})`,
  //         backgroundPosition: "center",
  //         backgroundSize: "cover",
  //         backgroundRepeat: "no-repeat",
  //         height: "400px",
  //       }}
  //     >
  //       <img
  //         className="lg:h-48 h-1/3	 md:h-36 w-full object-cover object-center"
  //         src={movie.hinhAnh}
  //         alt={`imgMovie${movie.tenPhim}`}
  //         style={{ height: "400px" }}
  //       />
  //     </div>

  //     <div className="p-2">
  //       <h1 className="title-font text-lg font-medium text-gray-900 mb-2">
  //         {movie.tenPhim}
  //       </h1>
  //       {/* <p className="leading-relaxed mb-3">Photo booth fam kinfolk</p> */}
  //       <div className="flex items-center flex-wrap " type="input">
  //         <a
  //           href="/#"
  //           className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
  //         >
  //           Chi tiết
  //           <svg
  //             className="w-4 h-4 ml-2"
  //             viewBox="0 0 24 24"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //             fill="none"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //           >
  //             <path d="M5 12h14" />
  //             <path d="M12 5l7 7-7 7" />
  //           </svg>
  //         </a>
  //         <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
  //           <svg
  //             className="w-4 h-4 mr-1"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //             fill="none"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             viewBox="0 0 24 24"
  //           >
  //             <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
  //             <circle cx={12} cy={12} r={3} />
  //           </svg>
  //           1.2K
  //         </span>
  //         <span className="text-gray-400 inline-flex items-center leading-none text-sm">
  //           <svg
  //             className="w-4 h-4 mr-1"
  //             stroke="currentColor"
  //             strokeWidth={2}
  //             fill="none"
  //             strokeLinecap="round"
  //             strokeLinejoin="round"
  //             viewBox="0 0 24 24"
  //           >
  //             <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
  //           </svg>
  //           6
  //         </span>
  //       </div>
  //     </div>
  //   </div>
  // );
}
