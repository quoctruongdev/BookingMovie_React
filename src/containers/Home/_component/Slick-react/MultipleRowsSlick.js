import React from "react";
import Slider from "react-slick";
import styleSlick from "./MultipleRowsSlick.module.css";
import Movie from "./../../ListMoviePage/movies";
import Loader from "./../../../../components/Loader";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { actFetchListMovie } from "./../../ListMoviePage/modules/actions";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} ${styleSlick["slick-next"]}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;

  return (
    <div
      className={`${className} ${styleSlick["slick-prev"]}`}
      style={{
        ...style,
        display: "block",
      }}
      onClick={onClick}
    />
  );
}

const settings = {
  className: "contain  ",
  centerMode: true,
  infinite: true,
  centerPadding: "60px",
  slidesToShow: 3,
  speed: 500,
  rows: 1,
  slidesPerRow: 2,
  nextArrow: <SampleNextArrow />,
  prevArrow: <SamplePrevArrow />,
  margin: 0,
  autoplay: true,
  autoplaySpeed: 5000,
};
export default function MultipleRows() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.listMovieReducer.data);
  const loading = useSelector((state) => state.listMovieReducer.loading);

  useEffect(() => {
    dispatch(actFetchListMovie());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function renderMovie() {
    if (loading) return <Loader />;
    return data?.map((movie, index) => {
      return (
        <div className={`${styleSlick["width-item"]}`} key={index}>
          <Movie movie={movie} />
        </div>
      );
    });
  }

  return (
    <div>
      <h2>Danh sách phim </h2>
      <Slider {...settings}>{renderMovie()}</Slider>
    </div>
  );
}
