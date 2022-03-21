import React from "react";
import { Card, CardBody, Row, Col, Container } from "reactstrap";
import "swiper/css/swiper.css";
import "swiper/swiper.scss";
import "swiper/swiper.less";
import { Link } from "react-router-dom";
class SecondSection extends React.Component {
  
  render() {
   
    return (
      <section className="srevicegrid">
         <Container >
           <h1>OUR POPULAR SERVICES</h1>
           <p style={{color:"#008000"}}>What We Do </p>
           
            <Row>
               <Col md="6">
                  <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-credit card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>Digital Service</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..</p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
               <Col md="6">
               <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-plane card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>Travelling Ticket</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..</p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
               <Col md="6">
                 <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-cash card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>Bill Payments</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..</p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
               <Col md="6">
                 <Link>
                 <Card className="st-card">
                     <Row>
                        <Col md="2">
                           <i className="pe-7s-phone card_icon" />
                        </Col>
                        <Col md="10">
                           <h3>Phone Recharge And DTH</h3>
                           <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores soluta et debitis facere architecto fugit. Quod, minus earum. Dolore veritatis tempora..</p>
                        </Col>
                     </Row>
                 </Card>
                 </Link>
               </Col>
            </Row>
         </Container>
      </section>
    );
  }
}
export default SecondSection;
