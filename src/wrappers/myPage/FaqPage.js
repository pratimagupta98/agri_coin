import React, { Component } from "react";
import {
  AccordionItem,
  AccordionHeader,
  Container,
  Row,
  Col,
} from "reactstrap";
import LayoutOne from "../../layouts/LayoutOne";
import "bootstrap/dist/css/bootstrap.min.css";
import Accordion from "react-bootstrap/Accordion";
import Cloth from "../../assets/img/Cloth.jpg";
import { width } from "dom-helpers";

export class FaqPage extends Component {
  render() {
    return (
      <LayoutOne>
        <Container fluid>
          <Row className="mb-5">
            <div
              className="d-flex justify-content-center align-items-center"
              style={{
                backgroundImage: `url(${Cloth})`,
                height: "70vh",
                width: "100%",
              }}
            >
              <div className="">
                <h1 className="text-light text-center">
                  Frequently Asked Questions
                </h1>
              </div>
            </div>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col xs lg="8">
              <Accordion>
                <Accordion.Item eventKey="0" className="m-4">
                  <Accordion.Header>
                    What to expect from Buynaa?
                  </Accordion.Header>
                  <Accordion.Body>
                    Buynaa is an online discovery platform plus an e-commerce
                    platform. Here you can search for clothes, or you can search
                    for specific shops. Go to shop profiles and check out which
                    products are listed for online shopping. You can check out
                    the shop profile and then pay a visit for the “look and
                    feel” of the clothes. You can view reviews and ratings of
                    other customers before you buy. You can expect SMS
                    communication from the shops once you have made a
                    transaction. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="m-4">
                  <Accordion.Header>
                    I don’t remember my password. Help!?
                  </Accordion.Header>
                  <Accordion.Body>
                    Very Easy. You can reset the password through the following
                    <br></br>
                    steps<br></br>
                    a.Click on Forgot Password<br></br>
                    b.Enter your registered email address or your registered
                    contact number<br></br>
                    c.In case you have entered your registered email address,
                    click on the link received in your email or in case you have
                    entered your contact number, enter the OTP received in your
                    phone.<br></br>
                    d.Now enter the new password as well re-enter the new
                    Password and click on Save. 
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs lg="2"></Col>
            <Col xs lg="8">
              <Accordion>
                <Accordion.Item eventKey="0" className="m-4">
                  <Accordion.Header>
                    I have received a call/sms/email asking for money? 
                  </Accordion.Header>
                  <Accordion.Body>
                    We NEVER request our customers for unsolicited
                    financial information or advance payments in exchange for
                    rewards. Please DO NOT respond to any call/sms/email
                    claiming to offer rewards/lucky draw prizes on behalf of
                    Buynaa. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1" className="m-4">
                  <Accordion.Header>
                    What are the payment options available for my orders at
                    Buynaa?
                  </Accordion.Header>
                  <Accordion.Body>
                    Cash-on-Delivery (COD), UPI, Net Banking. All these options
                    are available for payment. 
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="3" className="m-4">
                  <Accordion.Header>
                    Why can’t I see the COD option on the payment page? 
                  </Accordion.Header>
                  <Accordion.Body>
                    If you do not see the COD option, then either your order
                    value is less than Rs299 or above Rs49,999.  
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="4" className="m-4">
                  <Accordion.Header>What is the COD limit?</Accordion.Header>
                  <Accordion.Body>
                    Buynaa reserves the right to determine the COD limit for
                    every customer and/or orders. The COD limit includes any
                    undelivered, unpaid orders and any new orders being placed. 
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col xs lg="2"></Col>
          </Row>
        </Container>
      </LayoutOne>
    );
  }
}

export default FaqPage;
