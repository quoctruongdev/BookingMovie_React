import React from "react";
import { NavLink } from "react-router-dom";

export default function HeaderComponent() {
  return (
    <header
      className="  dark:bg-coolGray-800 dark:text-coolGray-100 fixed text-white w-full z-50  "
      style={{ backgroundColor: "#323545" }}
    >
      <div className=" flex justify-between h-16 mx-auto my-auto container">
        <NavLink
          exact
          to="/"
          activeClassName="active"
          aria-label="quay lại trang chủ"
          className="flex items-center p-2"
        >
          <img
            src={"./asset/img/iconMovie.png"}
            style={{ width: "50px", height: "50px" }}
            alt="iconMovie"
          />
        </NavLink>
        <ul className="items-stretch hidden space-x-3 lg:flex">
          <li className="flex">
            <NavLink
              activeClassName="active"
              to="/list-movie"
              className="flex items-center px-4 -mb-4  dark:border-transparent dark:text-white-400 dark:border-white-400 "
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Đang chiếu</font>
              </font>
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              activeClassName="active"
              to="/about"
              className="flex items-center px-4 -mb-4  dark:border-transparent dark:text-white-400 dark:border-white-400"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Sắp chiếu</font>
              </font>
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              activeClassName="active"
              to="/about"
              className="flex items-center px-4 -mb-4 dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Lịch chiếu</font>
              </font>
            </NavLink>
          </li>

          <li className="flex">
            <NavLink
              activeClassName="active"
              to="/about"
              className="flex items-center px-4 -mb-4  dark:border-transparent dark:text-violet-400 dark:border-violet-400"
            >
              <font style={{ verticalAlign: "inherit" }}>
                <font style={{ verticalAlign: "inherit" }}>Khuyến mãi</font>
              </font>
            </NavLink>
          </li>
        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          <button className="self-center px-8 py-3 rounded">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Đăng nhập</font>
            </font>
          </button>
          <button className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-400 dark:text-coolGray-900">
            <font style={{ verticalAlign: "inherit" }}>
              <font style={{ verticalAlign: "inherit" }}>Đăng ký</font>
            </font>
          </button>
        </div>
        <button className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-coolGray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
