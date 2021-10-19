import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./_component/Navbar";

function LayoutAdmin(props) {
  return (
    <>
      <Navbar />
      {props.children}
    </>
  );
}

// export default function AdminTemplate(props) {
//   const { exact, path, Component } = props;
//   return (
//     <LayoutAdmin>
//       <Route exact={exact} path={path} component={Component} />
//     </LayoutAdmin>
//   );
// }

export default function AdminTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsRoute) => (
        <LayoutAdmin>
          <Component {...propsRoute} />
        </LayoutAdmin>
      )}
    />
  );
}
