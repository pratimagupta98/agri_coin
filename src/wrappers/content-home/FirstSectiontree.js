import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "react-scroll";
import { Row, Col, Container,ul, Input, Form } from "reactstrap";


export class FirstSectiontree extends Component {
  render() {
    return (
        <section className="st-p">
            <Container>
                <div className="bx1">
                 <Row>
                    <Col md="12" >
                     <ul className="st-2">
                           <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>Fast Recharge</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>F. Internet Bill</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>Internet Bill</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>M. Balance</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>Gass</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>Electricity</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>TV</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>Shopping Bill</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p>Airtime</p>
                             </Link>
                            </li>
                            <li className="st-1">
                             <Link>
                               <i className="pe-7s-user-female circle-1" />
                               <p> More</p>
                             </Link>
                            </li>
                           
                       </ul>
                    </Col> 
                      <div className="bx-2">
                      <Form>
                      <Row>
                         <Col md="3">
                            <Input type="text"
                             className="form-control"
                             placeholder="Enter Mobile Number "
                             >

                            </Input>
                         </Col>
                         <Col md="3">
                         <select class="custom-select" id="operator" required="">
                                    <option value="">Select Your Operator</option>
                                    <option>GramenPhone</option>
                                    <option>Banlalink</option>
                                    <option>Airtel</option>
                                    <option>Robi</option>
                                    <option>Citycell</option>
                                    <option>Xirosoft</option>
                                </select>
                         </Col>
                         <Col md="3">
                            <Input type="text" className="form-control" ></Input>
                          </Col>
                         <Col md="3">
                           <button type="button" class="btn btn-primary"></button>
                         </Col>
                      </Row>
                      </Form>
                      </div>
                 </Row>
                 </div>
            </Container>
        </section>
    );
  }
}

export default FirstSectiontree;
