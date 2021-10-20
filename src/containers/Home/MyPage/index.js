import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { actLogout } from "../LoginPage/modules/actions";
import { connect } from "react-redux";

class MyPage extends Component {
  render() {
    if (localStorage.getItem("User")) {
      return (
        <div style={{ padding: "80px 0 40px 0" }}>
          MyPage
          <button
            className="btnLogOut btn btn-danger"
            onClick={() => {
              this.props.logOut(this.props.history);
            }}
          >
            Đăng xuất
          </button>
        </div>
      );
    }
    //redirect ve /auth
    return <Redirect to="/login" />;
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logOut: (history) => {
      dispatch(actLogout(history));
    },
  };
};

export default connect(null, mapDispatchToProps)(MyPage);
