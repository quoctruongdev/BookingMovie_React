import { Carousel } from "antd";
import React from "react";

const contentStyle = {
  height: "600px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function HomeCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img src={"./asset/img/coffee.jpg"} alt="img1" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={"./asset/img/CoffeeAndTea.jpg"} alt="img2" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          {" "}
          <img src={"./asset/img/CoffeeBeans.jpeg"} alt="img3" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={"./asset/img/finland.jpg"} />
        </h3>
      </div>
    </Carousel>
  );
}
