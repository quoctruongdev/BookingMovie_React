import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { actLogout } from "../LoginPage/modules/actions";
import { connect } from "react-redux";
import Loader from "../../../components/Loader";

class MyPage extends Component {
  render() {
    if (localStorage.getItem("User")) {
      return (
        <div
          style={{
            backgroundColor: "white",
            height: "50vh",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h1>Comming soon</h1>
        </div>
      );
    }
    //redirect ve /auth
    return <Redirect to="/login" />;
  }
}

export default MyPage;
