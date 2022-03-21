import PropTypes from "prop-types";
import React, { Fragment, Component } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { Form } from "reactstrap";
import axios from "axios";

export default class MyAccount extends Component {
  constructor(props) {
    super(props);

    this.state = {
      firstname: "",
      lastname: "",
      //email: "",
      //mobile: "",

      address: "",
      locality: "",
      pincode: "",
      city: "",
      state: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://35.154.86.59/api/user/getonecustomer", {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        console.log(response);

        this.setState({
          firstname: response.data.data.firstname,
          lastname: response.data.data.lastname,
          email: response.data.data.email,
          mobile: response.data.data.mobile,
        });
        // this.state
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error.response);
      });

    axios
      .get("http://35.154.86.59/api/user/viewoneuseraddress", {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        console.log(response);

        this.setState({
          address: response.data.data.address,
          locality: response.data.data.locality,
          pincode: response.data.data.pincode,
          city: response.data.data.city,
          state: response.data.data.state,
        });
        console.log(this.state);
      })
      .catch((error) => {
        console.log(error.response);
      });
  }

  submitHandler = (e) => {
    e.preventDefault();
    //let { id } = this.props.match.params;
    axios
      .post(`http://35.154.86.59/api/user/editcustomer`, this.state, {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  addAddress = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios
      .post("http://35.154.86.59/api/user/addcus_address", this.state, {
        headers: {
          "auth-token": localStorage.getItem("auth-token"),
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error.response);
      });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Fragment>
        <MetaTags>
          <title>Flone | My Account</title>
          <meta
            name="description"
            content="Compare page of flone react minimalist eCommerce template."
          />
        </MetaTags>
        <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>
          Home
        </BreadcrumbsItem>
        {/* <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        My Account
      </BreadcrumbsItem> */}
        <LayoutOne headerTop="visible">
          {/* breadcrumb */}
          <Breadcrumb />
          <div className="myaccount-area pb-80 pt-100">
            <div className="container">
              <div className="row d-flex justify-content-center align-items-center">
                <div className="ml-auto mr-auto col-lg-9">
                  <div className="myaccount-wrapper">
                    {/* <Accordion defaultActiveKey="0"> */}
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        {/* <Accordion.Toggle variant="link" eventKey="0">
                            <h3 className="panel-title">
                              Edit your account information{" "}
                            </h3>
                          </Accordion.Toggle> */}
                      </Card.Header>
                      {/* <Accordion.Collapse eventKey="0"> */}
                      <Card.Body>
                        <Form onSubmit={this.submitHandler}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Account Information</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input
                                    type="text"
                                    placeholder="First Name"
                                    name="firstname"
                                    value={this.state.firstname}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input
                                    type="text"
                                    placeholder="Last Name"
                                    name="lastname"
                                    value={this.state.lastname}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input
                                    readOnly
                                    type="email"
                                    placeholder="Customer Email"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Mobile Number</label>
                                  <input
                                    readOnly
                                    type="number"
                                    name="mobile"
                                    value={this.state.mobile}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Body>
                        <Form onSubmit={this.addAddress}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Address</h4>
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Address</label>
                                  <input
                                    type="textarea"
                                    placeholder="Address"
                                    name="address"
                                    value={this.state.address}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Locality</label>
                                  <input
                                    type="text"
                                    placeholder="Locality"
                                    name="locality"
                                    value={this.state.locality}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Pin Code</label>
                                  <input
                                    type="number"
                                    placeholder="Pin Code"
                                    name="pincode"
                                    value={this.state.pincode}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>City</label>
                                  <input
                                    type="text"
                                    placeholder="city"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>State</label>
                                  <input
                                    type="text"
                                    placeholder="State"
                                    name="state"
                                    value={this.state.state}
                                    onChange={this.changeHandler}
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Body>
                        <Form onSubmit={this.addAddress}>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>My Orders</h4>
                            </div>
                            <div className="row"></div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Form>
                      </Card.Body>
                      {/* </Accordion.Collapse> */}
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </LayoutOne>
      </Fragment>
    );
  }
}

//export default MyAccount;
