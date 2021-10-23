import React from "react";
import { Route } from "react-router-dom";
import Sidebar from "./_component/sidebar";

function LayoutAdmin(props) {
  return (
    <>
      <Sidebar />
      {props.children}
    </>
  );
}

// function LayoutAdmin(props) {
//   return (
//     <>
//       <Sidebar />
//       {props.children}
//     </>
//   );
// }

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
