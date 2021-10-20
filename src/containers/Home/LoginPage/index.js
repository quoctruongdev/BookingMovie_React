import { concat } from "lodash";
import React, { Component } from "react";
import "./style.css";
import { actFetchLogin, actFetchSignUp } from "./modules/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Loader from "./../../../components/Loader";

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentView: "logIn",
      values: {
        taiKhoan: "",
        matKhau: "",
        taiKhoanSignUp: "",
        emailSignUp: "",
        matKhauSignUp: "",
        phoneSignUp: "",
        hoTenSignUp: "",
        maNhom: "GP11",
      },
      //lưu thông báo lỗi
      errorsInput: {
        taiKhoan: "",
        matKhau: "",
        taiKhoanSignUp: "",
        emailSignUp: "",
        matKhauSignUp: "",
        phoneSignUp: "",
        hoTenSignUp: "",
        maNhom: "",
      },
      taiKhoanValid: false,
      matKhauValid: false,
      taiKhoanSignUpValid: false,
      emailSignUpValid: false,
      matKhauSignUpValid: false,
      phoneSignUpValid: false,
      hoTenSignUpValid: false,
      //form chua hop le
      formLoginValid: false,
      formSignUpValid: false,
    };
  }

  changeView = (view) => {
    this.setState({
      currentView: view,
      values: {
        taiKhoan: "",
        matKhau: "",
        taiKhoanSignUp: "",
        emailSignUp: "",
        matKhauSignUp: "",
        phoneSignUp: "",
        hoTenSignUp: "",
      },
      //lưu thông báo lỗi
      errorsInput: {
        taiKhoan: "",
        matKhau: "",
        taiKhoanSignUp: "",
        emailSignUp: "",
        matKhauSignUp: "",
        phoneSignUp: "",
        hoTenSignUp: "",
      },
      taiKhoanValid: false,
      matKhauValid: false,
      taiKhoanSignUpValid: false,
      emailSignUpValid: false,
      matKhauSignUpValid: false,
      phoneSignUpValid: false,
      hoTenSignUpValid: false,
      //form chua hop le
      formLoginValid: false,
      formSignUpValid: false,
    });
  };

  // Form Sign Up
  handleOnChange = (event) => {
    const { name, value } = event.target;
    this.setState({
      values: { ...this.state.values, [name]: value },
    });
  };

  handleErrors = (e) => {
    const { name, value } = e.target;
    let mess = value.trim() === "" ? "Vui lòng nhập thông tin" : "";
    // Form Sign up
    switch (this.state.currentView) {
      case "signUp": {
        let {
          taiKhoanSignUpValid,
          emailSignUpValid,
          matKhauSignUpValid,
          phoneSignUpValid,
          hoTenSignUpValid,
        } = this.state;
        switch (name) {
          case "taiKhoanSignUp":
            taiKhoanSignUpValid = mess === "" ? true : false;
            if (value && value.length > 30 && value.length <= 4) {
              mess = "Tài khoản không hợp lệ";
              taiKhoanSignUpValid = false;
            }
            break;

          case "emailSignUp":
            emailSignUpValid = mess === "" ? true : false;
            if (
              value &&
              !value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)
            ) {
              mess = "Email không hợp lệ";
              emailSignUpValid = false;
            }
            break;
          case "matKhauSignUp":
            matKhauSignUpValid = mess === "" ? true : false;
            if (value && value.length > 30 && value.length <= 7) {
              mess = "Mật khẩu không hợp lệ";
              matKhauSignUpValid = false;
            }
            break;
          case "phoneSignUp":
            phoneSignUpValid = mess === "" ? true : false;
            if (value && !value.match(/^(?=.{9,11}$)[0-9]+$/)) {
              mess = "Số điện thoại không hợp lệ";
              phoneSignUpValid = false;
            }
            break;
          case "hoTenSignUp":
            hoTenSignUpValid = mess === "" ? true : false;
            if (value && value.length < 2) {
              mess = "Họ tên không hợp lệ";
              hoTenSignUpValid = false;
            }
            break;
          default:
            break;
        }
        this.setState(
          {
            errorsInput: { ...this.state.errorsInput, [name]: mess },
            taiKhoanSignUpValid,
            emailSignUpValid,
            matKhauSignUpValid,
            phoneSignUpValid,
            hoTenSignUpValid,
          },
          () => {
            this.handleFormSignUpValid();
          }
        );
        break;
      }
      case "logIn": {
        // Form Login
        let { taiKhoanValid, matKhauValid } = this.state;
        switch (name) {
          case "taiKhoan":
            taiKhoanValid = mess === "" ? true : false;
            if (value && value.length > 30 && value.length <= 4) {
              mess = "Tài khoản không hợp lệ";
              taiKhoanValid = false;
            }
            break;

          case "matKhau":
            matKhauValid = mess === "" ? true : false;
            if (value && value.length > 30 && value.length <= 7) {
              mess = "Mật khẩu không hợp lệ";
              matKhauValid = false;
            }
            break;
          default:
            break;
        }
        this.setState(
          {
            errorsInput: { ...this.state.errorsInput, [name]: mess },
            taiKhoanValid,
            matKhauValid,
          },
          () => {
            this.handleFormLoginValid();
          }
        );
        break;
      }
      default:
        break;
    }
  };

  handleFormSignUpValid = () => {
    let {
      taiKhoanSignUpValid,
      emailSignUpValid,
      matKhauSignUpValid,
      phoneSignUpValid,
      hoTenSignUpValid,
    } = this.state;

    this.setState({
      formSignUpValid:
        taiKhoanSignUpValid &&
        emailSignUpValid &&
        matKhauSignUpValid &&
        phoneSignUpValid &&
        hoTenSignUpValid,
    });
  };

  handleSubmitSignUp = (e) => {
    e.preventDefault();
    const user = {
      taiKhoan: this.state.values.taiKhoanSignUp,
      matKhau: this.state.values.matKhauSignUp,
      email: this.state.values.emailSignUp,
      soDt: this.state.values.phoneSignUp,
      maNhom: this.state.values.maNhom,
      hoTen: this.state.values.hoTenSignUp,
    };
    console.log("user, state", user, this.state);
    this.props.signUp(user, this.props.history);
  };

  // Form Login

  handleFormLoginValid = () => {
    let { taiKhoanValid, matKhauValid } = this.state;

    this.setState({
      formLoginValid: taiKhoanValid && matKhauValid,
    });
  };

  handleSubmitLogin = (e) => {
    e.preventDefault();
    this.props.login(
      {
        taiKhoan: this.state.values.taiKhoan,
        matKhau: this.state.values.matKhau,
      },
      this.props.history
    );
  };

  renderNoti = (currentView) => {
    const { errorLogin, errorSignUp } = this.props;
    switch (currentView) {
      case "signUp":
        return (
          errorSignUp && (
            <div className="auth-result">
              {errorSignUp?.response?.data?.content}
            </div>
          )
        );
      case "logIn":
        return (
          errorLogin && (
            <div className="auth-result">
              {errorLogin?.response?.data?.content}
            </div>
          )
        );
      default:
        break;
    }
  };

  currentView = () => {
    const { errorsInput } = this.state;
    switch (this.state.currentView) {
      case "signUp":
        return (
          <form onSubmit={this.handleSubmitSignUp}>
            <h2>Đăng ký</h2>
            
            <fieldset>
              <legend>Tạo tài khoản</legend>
              {this.renderNoti(this.state.currentView)}
              <ul>
                <li>
                  <label for="username">Tài khoản:</label>
                  <input
                    type="text"
                    id="username"
                    name="taiKhoanSignUp"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                  />
                  {errorsInput.taiKhoanSignUp ? (
                    <div className="show-error">
                      {errorsInput.taiKhoanSignUp}
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="emailSignUp"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                  />
                  {errorsInput.emailSignUp ? (
                    <div className="show-error">{errorsInput.emailSignUp}</div>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <label for="password">Mật khẩu:</label>
                  <input
                    type="password"
                    id="password"
                    name="matKhauSignUp"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                  />
                  {errorsInput.matKhauSignUp ? (
                    <div className="show-error">
                      {errorsInput.matKhauSignUp}
                    </div>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <label for="phone">Số điện thoại:</label>
                  <input
                    id="phone"
                    name="phoneSignUp"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                  />
                  {errorsInput.phoneSignUp ? (
                    <div className="show-error">{errorsInput.phoneSignUp}</div>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <label for="fullname">Họ tên:</label>
                  <input
                    id="fullname"
                    name="hoTenSignUp"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                  />
                  {errorsInput.hoTenSignUp ? (
                    <div className="show-error">{errorsInput.hoTenSignUp}</div>
                  ) : (
                    ""
                  )}
                </li>
              </ul>
            </fieldset>
            <button
              className="signUpBtn login-form-btn"
              type="submit"
              disabled={!this.state.formSignUpValid}
            >
              Đăng ký
            </button>
            <button
              type="button"
              className="login-form-btn"
              onClick={() => this.changeView("logIn")}
            >
              Bạn đã có tài khoản?
            </button>
          </form>
        );
        break;
      case "logIn":
        return (
          <form onSubmit={this.handleSubmitLogin} action="/mypage">
            <h2>Chào mừng bạn trở lại!</h2>
            <fieldset>
              <legend>Đăng nhập</legend>
              {this.renderNoti(this.state.currentView)}
              <ul>
                <li>
                  <label for="username">Tài khoản:</label>
                  <input
                    type="text"
                    id="username"
                    name="taiKhoan"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                  />
                  {errorsInput.taiKhoan ? (
                    <span className="show-error">{errorsInput.taiKhoan}</span>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <label for="password">Mật khẩu:</label>
                  <input
                    type="password"
                    id="password"
                    name="matKhau"
                    onChange={this.handleOnChange}
                    onBlur={this.handleErrors}
                  />
                  {errorsInput.matKhau ? (
                    <div className="show-error">{errorsInput.matKhau}</div>
                  ) : (
                    ""
                  )}
                </li>
                <li>
                  <i />
                  <a onClick={() => this.changeView("PWReset")} href="#">
                    Quên mật khẩu?
                  </a>
                </li>
              </ul>
            </fieldset>
            <button
              className="login-form-btn"
              type="submit"
              disabled={!this.state.formLoginValid}
            >
              Đăng nhập
            </button>
            <button
              type="button"
              className="login-form-btn"
              onClick={() => this.changeView("signUp")}
            >
              Tạo tài khoản
            </button>
          </form>
        );
        break;
      case "PWReset":
        return (
          <form>
            <h2>Thiết đặt lại mật khẩu</h2>
            <fieldset>
              <legend>Thiết đặt lại mật khẩu</legend>
              <ul>
                <li>
                  <em>
                    Mail thiết đặt lại mật khẩu sẽ được gửi vào hòm thư của bạn.
                  </em>
                </li>
                <li>
                  <label for="email">Email:</label>
                  <input type="email" id="email" required />
                </li>
              </ul>
            </fieldset>
            <button className="login-form-btn">
              Gửi liên kết thiết đặt mật khẩu
            </button>
            <button
              type="button"
              className="login-form-btn"
              onClick={() => this.changeView("logIn")}
            >
              Trở lại trang đăng nhập
            </button>
          </form>
        );
      default:
        break;
    }
  };

  render() {
    if (this.props.loading) return <Loader />;
    return <section id="entry-page">{this.currentView()}</section>;
  }
}

const mapStateToProps = (state) => {
  return {
    loading: state.logInReducer.loading,
    errorLogin: state.logInReducer.errorLogin,
    dataLogin: state.logInReducer.dataLogin,
    dataSignUp: state.logInReducer.dataSignUp,
    errorSignUp: state.logInReducer.errorSignUp,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (user, history) => {
      dispatch(actFetchLogin(user, history));
    },
    signUp: (user, history) => {
      dispatch(actFetchSignUp(user, history));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
