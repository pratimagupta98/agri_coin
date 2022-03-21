import PropTypes from "prop-types";
import React from "react";
import LayoutOne from "../../layouts/LayoutOne";
import Cloth from "../../assets/img/Cloth.jpg";
import { Container, Row,  Col, Input, InputGroup, Form } from "reactstrap";




const Water = ({ data, spaceBottomClass }) => {
    
  return (
    <LayoutOne>
    <Container fluid className="mb-4">
      <Row className="mb-5">
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            backgroundImage: `url(${Cloth})`,
            width: "100%",
            padding:"100px 0px",
            backgroundSize:"cover"
          }}
        >
          <div className="">
            <h1 className="text-light text-center">Water Bills</h1>
          </div>
        </div>
      </Row>
      </Container>
      <section style={{margin:"70px 0px"}}>
        <Container>
        <Row>
            <Col md="6">
                <Row>
                  <h4 className="sr-h4">Pay Water</h4>
                  <div className="sr-1">
                    <Form>
                    <Col md="12">
                        {/* <Input type="text"
                        className="form-control"
                        placeholder="Select Operator"
                          /> */}
                          <select className="form-control" >
                             <option>Select State</option>
                             <option>MP</option>
                             <option>UP</option>
                          </select>
                    </Col>
                    <br></br>
                    <Col md="12">
                        <Input type="text"
                        className="form-control"
                        placeholder="Consumer Number"
                          />
                    </Col>
                    <small style={{color:"red",}}>(Subscriber ID starts with 1 and is 10 digits long. To locate it, press the home button on remote.)</small>
                    <br></br>
                    <br></br>
                    <Col md="12">
                        <InputGroup>
                            <span className="sr-2">Rs.</span>
                            <Input 
                              className="form-control"
                              placeholder="Amount"
                            />
                        </InputGroup>
                    </Col>
                    </Form>
                    <br></br>
                    <button className="sr-btn">Proceed</button>
                  </div>
                </Row>
            </Col>
            <Col md="6">
                <div className="sr-3">
                   <h4 className="sr-h">Consumer Details</h4>
                      <ul className="sr-ul">
                      <li className="sr-li">Consumer Number: <span className="sr-span">44545</span></li>
                      <li  className="sr-li">State: <span  className="sr-span">MP</span></li>
                      <li  className="sr-li">Amount: <span  className="sr-span">100rs</span></li>
                      <li  className="sr-li dr">Amount: <span  className="sr-span">Rs:100</span></li>
                    </ul>
                    <div className="sr-div">
                        <button className="sr-btn1">Make Payment</button>
                    </div>
                </div>
            </Col>
        </Row>

        
    </Container> 
    </section>

  </LayoutOne>
  );

};

Water.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default Water;
