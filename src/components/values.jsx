import React from "react";
import "./navbar.css"
import cartSVG from "./undraw_empty_cart_co35.svg"
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";
import { useState, createContext, useContext } from "react";
import  CartContext  from "../contexts/cartContext";
import QualitySVG from "./undraw_qa_engineers_dg-5-p.svg"
import Customer from "./undraw_appreciation_re_8nbx.svg"

const Values = () => {
  const { Orders } = useContext(CartContext);
  const Hygiene = "https://www2.insightsoftware.com/definitive-guide-to-predictive-analytics/wp-content/uploads/sites/4/2019/09/hygiene-icon.png"
  
  return (
    <div>
      <Navbar variant="light" className="custom-nav">
        <Container width="100%" height="40px">
          <Navbar.Brand href="/">
            <h2 className="logo-Style">GrubHub</h2>
          </Navbar.Brand>
          <Nav className="href-Links col-md-4">
            <Nav.Link href="/values">Values</Nav.Link>
            <Nav.Link href="/contacts">Contact</Nav.Link>
          </Nav>
          <Navbar.Brand href="/checkout">
            <img src={cartSVG} className="Cart" alt="Your cart" />
          </Navbar.Brand>
          <h4>{Orders}</h4>
        </Container>
      </Navbar>
      <div className="ms-3 mt-5 container bg-success">
        <div className="row">
          <div className="col d-flex justify-content-start bg-success"><img src={Hygiene}/></div>
          <div className="col-lg-8 text-white bold "><h1>Hygiene</h1><br></br><p>At Grubhub your safety is our number one concern,which is why we take the utmost paramount safety procedures to<br></br> ensure you and your family return safely</p></div>
        </div>
        
        
      </div>
      <div className="me-5 mt-5 container-sm bg-danger">
        <div className="row">
          <div className="col d-flex justify-content-start bg-danger"><img src={QualitySVG} width="257px" height="220px"/></div>
          <div className="col-lg-8 text-white bold "><h1>Quality</h1><br></br><p>At Grubhub your satisfaction gives us pride. Let us know your thoughts in the contacts page about our food </p></div>
        </div>
        
        
      </div>
      <div className="ms-3 mt-5 container bg-primary">
        <div className="row">
          <div className="col d-flex justify-content-start bg-primary"><img src={Customer} width="257px" height="220px"/></div>
          <div className="col-lg-8 text-white bold "><h1>Customer Service</h1><p>Our waiters and waitresses are trained such that you encounter no hassle as you wind down the evening with a nice sip of coke. Let us do the work.</p></div>
        </div>
        
        
      </div>
      
    </div>
    


  );
};

export default Values;
