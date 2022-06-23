import React from "react";
import "./cont.css"
import cartSVG from "./undraw_empty_cart_co35.svg"
import { Nav, Navbar, Container, Carousel,button } from "react-bootstrap";
import { useState, createContext, useContext } from "react";
import  CartContext  from "../contexts/cartContext";
import Contactcard from "./contactcard";

const Contact = () => {
  const  { Orders }  = useContext(CartContext);
  return (
    <div className="App">
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
      <Contactcard />
      <section className="head pb-5">
        <div className="container-py-5">
          <div className="card">
            <div className="card-body">
              <h1 className="text-center py-5">Leave A review</h1>
              <div className="row">
                <div className="col">
                  <h3>Your email</h3>
                </div>
              

              </div>
              <div className="row">
                <div className="col">
                  <input placeholder="email@something.com"></input>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col"><h3>Your Number</h3></div>
              </div>
              <div className="row">
                <div className="col">
                  <input placeholder="+256" type="number"></input>
                </div>
              </div>
              <div className="row pt-3">
                <div className="col"><h3>Your Comments</h3></div>
              </div>
              <div className="row pt-3">
                <textarea rows="5" cols="10">
                  
                </textarea>
              </div>
              <div className="row pt-3">
                <div className="col">
                  <button type="button "className="btn btn-danger">Submit</button>
                </div>
              </div>
              
            </div>
          </div>
        </div>

      </section>
     
    </div>
  );
};

export default Contact;
