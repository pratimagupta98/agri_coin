import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Form, Input, Row } from "reactstrap";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { string } from "prop-types";

const CategoryFiveGrid = ({ spaceBottomClass }) => {
  return (
    <section className="st-p">
      <Container>
        <div className="bx1">
          <Row>
            <Col md="12">
              <ul className="st-2">
                <li className="st-1">
                  <Link>
                    <i className="pe-7s-cash circle-1" />
                    <p>Fast Recharge</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/internet"}>
                  {string["internet"]}
                    <i className="pe-7s-global circle-1" />
                    <p>Internet Bill</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link>
                    <i className="pe-7s-phone circle-1 active" />
                    <p>M. Balance</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/gass"}>
                    {string["gass"]}
                    <i className="pe-7s-safe circle-1" />
                    <p>Gass</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/electricity"}>
                    {string["electricity"]}
                    <i className="pe-7s-light circle-1" />
                    <p>Electricity</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link  to={process.env.PUBLIC_URL + "/water"}>
                    {string["water"]}
                    <i className="pe-7s-wine circle-1" />
                    <p>Water</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/internetbill"}>
                    {string["internetbill"]}
                    <i className="pe-7s-airplay circle-1" />
                    <p>TV</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link to={process.env.PUBLIC_URL + "/shoppingbill"}>
                    {string["shoppingbill"]}
                    <i className="pe-7s-shopbag circle-1" />
                    <p>Shopping Bill</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link>
                    <i className="pe-7s-clock circle-1" />
                    <p>Airtime</p>
                  </Link>
                </li>
                <li className="st-1">
                  <Link>
                    <i className="pe-7s-more circle-1" />
                    <p> More</p>
                  </Link>
                </li>
              </ul>
            </Col>
            <div className="bx-2">
              <Form>
                <div className="int-box">
                  <FormControlLabel
                    control={<Checkbox defaultChecked />}
                    label="Prepaid"
                  />
                </div>
                <div className="int-box">
                  <FormControlLabel control={<Checkbox />} label="Postpaid" />
                </div>
                <Row>
                  <Col md="3">
                    <Input
                      type="text"
                      className="form-control mb-st"
                      placeholder="Enter Mobile Number "
                    ></Input>
                  </Col>
                  <Col md="3">
                    <Input type="text" className="form-control" placeholder="Select Operator">
                      <option>Idea</option>
                      <option>Jio</option>
                    </Input>
                  </Col>
                  <Col md="3">
                    <Input type="text" className="form-control mb-st" placeholder="Amount"></Input>
                  </Col>
                  <Col md="3">
                    <button type="button" class="btn-s mb-st">
                      Continue
                    </button>
                  </Col>
                </Row>
              </Form>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default CategoryFiveGrid;
