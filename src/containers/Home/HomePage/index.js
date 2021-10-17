import React from "react";
import HomeCarousel from "../_component/Carousel";
import HomeMenu from "../_component/HomeMenu";
import ListMoviePage from "../ListMoviePage";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <ListMoviePage />
      <HomeMenu />
    </div>
  );
}
