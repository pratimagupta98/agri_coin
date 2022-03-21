// import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { Link, useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import axios from "axios";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Toast, ToastBody, ToastHeader } from "reactstrap";
import { ToastContainer } from "react-bootstrap";
import { Button } from "reactstrap";
export default class LoginRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
      otp: true,
      otpnumber: "",
      token: "",
    };
    // this.state = {
    //   email: "",
    //   mobile: "",
    //   password: "",
    // };
  }

  otpHandler = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://35.154.86.59/api/user/verifyotp", {
        mobile: this.state.mobile,
        //customer_email: this.state.email,
        otp: this.state.otpnumber,
      })
      .then((response) => {
        console.log(response);
        //localStorage.setItem("user", response.data.data._id);
        localStorage.setItem("auth-token", this.state.token);
        // const location = this.props.location;
        // if (location.state && location.state.nextPathname) {
        //   History.push("/login-register");
        // } else {
        //   History.push("/cart");
        // }
        // const history = useHistory();
        // history.push("/cart");

        this.props.history.push({
          pathname: `/cart`,
        });
      })
      .catch((error) => {
        console.log(error.response);
        //this.setState({ errormsg: error });
      });
  };

  handlechange = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };

  loginHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://35.154.86.59/api/user/login", {
        mobile:
          parseInt(this.state.email) != NaN
            ? parseInt(this.state.email)
            : "null",
        email: this.state.email,
        password: this.state.password,
      })
      .then((response) => {
        console.log(response);
        //localStorage.setItem("authec", response.data.token);
        localStorage.setItem("auth-token", response.data.token);
        this.props.history.push("/cart");
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
  };
  // otp = true;
  changeHandler = (e) => {
    e.preventDefault();
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    this.setState({ otp: false });
    axios
      .post("http://35.154.86.59/api/user/signup", this.state)
      .then((response) => {
        console.log(response);
        // localStorage.setItem("token", response.data.token);
        this.setState({
          token: response.data.token,
        });
        //this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });

    axios
      .post("http://35.154.86.59/api/user/sendotp", {
        mobile: this.state.mobile,
        //customer_email: this.state.email,
      })
      .then((response) => {
        console.log(response);
        // localStorage.setItem("token", response.data.token);
        // this.props.history.push("/");
      })
      .catch((error) => {
        console.log(error.response);
      });
  };
  render() {
    console.log(this.state.otp);
    return (
      <Fragment>
        <MetaTags>
          <title>Buynaa | Login</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <LayoutOne headerTop="visible">
          <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  {this.state.otp ? (
                    <div className="login-register-wrapper">
                      <Tab.Container defaultActiveKey="login">
                        <Nav
                          variant="pills"
                          className="login-register-tab-list"
                        >
                          <Nav.Item>
                            <Nav.Link eventKey="login">
                              <h4>Login</h4>
                            </Nav.Link>
                          </Nav.Item>
                          <Nav.Item>
                            <Nav.Link eventKey="register">
                              <h4>Register</h4>
                            </Nav.Link>
                          </Nav.Item>
                        </Nav>
                        <Tab.Content>
                          <Tab.Pane eventKey="login">
                            <div className="login-form-container">
                              <div className="login-register-form">
                                <form onSubmit={this.loginHandler}>
                                  <input
                                    type="text"
                                    name="email"
                                    placeholder="Email / Mobile"
                                    value={this.state.email}
                                    onChange={this.handlechange}
                                  />
                                  {/* <input
                                    type="number"
                                    name="mobile"
                                    placeholder="Mobile No"
                                    value={this.state.mobile}
                                    onChange={this.handlechange}
                                  /> */}
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.handlechange}
                                  />
                                  <div className="button-box">
                                    <div className="login-toggle-btn"></div>
                                    <button type="submit">
                                      <span>Login</span>
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>

                          {/* Register the user now */}

                          <Tab.Pane eventKey="register">
                            <div className="login-form-container">
                              <div className="login-register-form">
                                <form
                                  className="text-center"
                                  onSubmit={this.submitHandler}
                                  method="post"
                                >
                                  <input
                                    type="text"
                                    name="firstname"
                                    placeholder="Enter Your Firstname"
                                    value={this.state.firstname}
                                    onChange={this.changeHandler}
                                  />
                                  <input
                                    type="text"
                                    name="lastname"
                                    placeholder="Enter Your Lastname"
                                    value={this.state.lastname}
                                    onChange={this.changeHandler}
                                  />
                                  <input
                                    type="email"
                                    name="email"
                                    placeholder="Enter Your Email"
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                  />
                                  <input
                                    type="number"
                                    name="mobile"
                                    placeholder="Enter Your Mobile No."
                                    value={this.state.mobile}
                                    onChange={this.changeHandler}
                                  />
                                  <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    value={this.state.password}
                                    onChange={this.changeHandler}
                                  />
                                  <div className="button-box">
                                    <button type="submit">
                                      <span>Register</span>
                                    </button>
                                  </div>
                                </form>
                              </div>
                            </div>
                          </Tab.Pane>
                        </Tab.Content>
                      </Tab.Container>
                    </div>
                  ) : (
                    <>
                      <div className="login-form-container">
                        <div className="login-register-form">
                          <form onSubmit={this.otpHandler}>
                            <input
                              type="number"
                              name="otpnumber"
                              placeholder="OTP No"
                              value={this.state.otpnumber}
                              onChange={this.handlechange}
                            />
                            <div className="button-box">
                              <div className="login-toggle-btn"></div>
                              <Button type="submit">
                                <span>Verify</span>
                              </Button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="login-register-area pt-100 pb-100">
            <div className="container">
              <div className="row d-flex align-items-center justify-content-center">
                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                  <div className="login-register-wrapper">
                    <Tab.Container defaultActiveKey="login">
                      <Nav variant="pills" className="login-register-tab-list">
                        <Nav.Item>
                          <Nav.Link eventKey="login">
                            <h4>Login</h4>
                          </Nav.Link>
                        </Nav.Item>
                        <Nav.Item>
                          <Nav.Link eventKey="register">
                            <h4>Register</h4>
                          </Nav.Link>
                        </Nav.Item>
                      </Nav>
                      <Tab.Content>
                        <Tab.Pane eventKey="login">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form onSubmit={this.loginHandler}>
                                <input
                                  type="text"
                                  name="customer_email"
                                  placeholder="Email"
                                  value={this.state.customer_email}
                                  onChange={this.handlechange}
                                />
                                <div className="button-box">
                                  <div className="login-toggle-btn"></div>
                                  <button type="submit">
                                    <span>Login</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Tab.Pane>
                        <Tab.Pane eventKey="register">
                          <div className="login-form-container">
                            <div className="login-register-form">
                              <form
                                className=" text-center "
                                onSubmit={this.submitHandler}
                                method="post"
                              >
                                <input
                                  type="text"
                                  name="first_name"
                                  placeholder="Enter Your Firstname"
                                  value={this.state.first_name}
                                  onChange={this.changeHandler}
                                />
                                <input
                                  type="text"
                                  name="last_name"
                                  placeholder="Enter Your Lastname"
                                  value={this.state.last_name}
                                  onChange={this.changeHandler}
                                />
                                <input
                                  type="email"
                                  name="customer_email"
                                  placeholder="Enter Your Email"
                                  value={this.state.customer_email}
                                  onChange={this.changeHandler}
                                />
                                <input
                                  type="number"
                                  name="mobile_no"
                                  placeholder="Enter Your Mobile No."
                                  value={this.state.mobile_no}
                                  onChange={this.changeHandler}
                                />
                                <input
                                  type="number"
                                  name="sortorder"
                                  placeholder="Sort Order"
                                  value={this.state.sortorder}
                                  onChange={this.changeHandler}
                                />
                                <div className="button-box">
                                  <button type="submit">
                                    <span>Register</span>
                                  </button>
                                </div>
                              </form>
                            </div>
                          </div>
                        </Tab.Pane>
                      </Tab.Content>
                    </Tab.Container>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </LayoutOne>
      </Fragment>
    );
  }
}
