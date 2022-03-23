import PropTypes from "prop-types";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Input, Button } from "reactstrap";
import banner from "../../assets/img/banner.jpg";
import axios from "axios";
import Select from "react-select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];
export class HeroSliderTwentyEightSingle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: [],
      loading: false,
      value: "",
    };
  }

  search = async (val) => {
    this.setState({ loading: true });
    console.log(this.state);
    axios
      .post(`http://35.154.134.118/api/admin/searchinputproduct`, {
        oneinput: this.state.value,
      })
      .then((response) => {
        console.log(response.data.data);
        this.setState({ products: response.data.data });
        console.log(this.state.products);
      })
      .catch((error) => {
        console.log(error);
        console.log(error.response);
      });
    //const products = await res.data;

    this.setState({ loading: false });
  };
  onChangeHandler = async (e) => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let products = <h4>There's no products</h4>;
    // if (this.state.products !== 0) {
    //   this.state.products.map(i=>{
    //     // console.log(i?.product_name);
    //     <h4>list={i.product_name} </h4>
    //   })
    //   // products = ;
    // }
    // console.log(products);
    return products;
  }

  render() {
    return (
      <div
        className={`single-slider-2 slider-height-1 d-flex align-items-center bg-img ${
          this.props.sliderClass ? this.props.sliderClass : ""
        }`}
        style={{ backgroundImage: `url(${banner})`, height: "100vh" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="slider-content-red slider-content-2 slider-content-2--white slider-animated-1">
                <h1 className="animated" style={{ color: "white",textAlign:"center"} }>
                  {" "}
                  Apparel Stores Online mobile recharge And bill payment.

                </h1>
                <h3
                  className="animated no-style mb-2"
                  style={{ color: "#FFFFFF", textAlign:"center" }}
                >
                 Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br>
                  Voluptatem odit consequuntur omnis est mollitia sint<br></br>
                  atque voluptas voluptatibus iure.
                </h3>
                {/* <div className="d-flex">
                  <Input
                    type="search"
                    value={this.state.value}
                    onChange={(e) => this.onChangeHandler(e)}
                    placeholder="Type something to search"
                  />
                 
                </div> */}
                <div
                  style={{
                    backgroundColor: "white",
                    textTransform: "capitalize",
                  }}
                >
                  {this.state.products.map((i) => {
                    return (
                      <li className="p-1" key={i?._id}>
                        <Link
                          to={
                            process.env.PUBLIC_URL +
                            "/product-slider/" +
                            i.store
                          }
                        >
                          {" "}
                          {i?.product_name}
                        </Link>{" "}
                      </li>
                    );
                  })}
                </div>

                {/* <div className="slider-btn-red btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  Shop Now
                </Link>
              </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

HeroSliderTwentyEightSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string,
};

export default HeroSliderTwentyEightSingle;
