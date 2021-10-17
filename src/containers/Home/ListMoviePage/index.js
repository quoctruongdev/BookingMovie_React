import React from "react";
import MultipleRows from "../_component/Slick-react/MultipleRowsSlick";

export default function ListMoviePage(props) {
  return (
    <div className="container">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <MultipleRows />
        </div>
       </section>
    </div>
  );
}
