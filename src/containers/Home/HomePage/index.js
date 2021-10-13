import React from "react";
import HomeCarousel from "../_component/Carousel";
import ListCard from "../_component/_ListCard";
import HomeMenu from "../_component/HomeMenu";

export default function HomePage() {
  return (
    <div>
      <HomeCarousel />
      <ListCard />
      <HomeMenu />
    </div>
  );
}
