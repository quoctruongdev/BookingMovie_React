import React from "react";
import HomeCarousel from "../_component/Carousel";
import HomeMenu from "../_component/HomeMenu";
import ListMoviePage from "../ListMoviePage";
// import CineManagement from "../CinemaMagement";

export default function HomePage() {
  return (
    <div className="ani">
      <HomeCarousel />
      <ListMoviePage />
      <HomeMenu />
      {/* <Home2 /> */}
      {/* <CineManagement/> */}
    </div>
  );
}
