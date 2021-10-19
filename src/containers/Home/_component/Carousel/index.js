import { Carousel } from "antd";
import React, { useSelector, useDispatch } from "react-redux";
import Loader from "./../../../../components/Loader";
import { actAddCarousel } from "./modules/actions";
import { useEffect } from "react";

const contentStyle = {
  height: "650px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
  backgroundPosition: "center",
  backgroundSize: "100%",
  backgroundRepeat: "no-repeat",
};

export default function HomeCarousel() {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.addCarouselReducer.loading);
  const data = useSelector((state) => state.addCarouselReducer.data);

  useEffect(() => {
    dispatch(actAddCarousel());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const renderCarousel = () => {
    return data?.map((item) => {
      return (
        <div key={item.maBanner} className="pt-16">
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            {/* <img src={item.hinhAnh} className="w-full opacity-100   " alt="" /> */}
          </div>
        </div>
      );
    });
  };

  if (loading) return <Loader />;

  return (
    <Carousel autoplay autoplaySpeed={10000}>
      {renderCarousel()}
    </Carousel>
  );
}
