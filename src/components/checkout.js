import React, { useContext, useEffect } from "react";
import "./navbar.css";
import { Nav, Navbar, Container, Carousel, Button } from "react-bootstrap";
import CartContext from "../contexts/cartContext";
import cartSVG from "./undraw_empty_cart_co35.svg";
import Ordercart from "./ordercart";

export default function Checkout() {
  const { Orders } = useContext(CartContext);
  const Allorders = JSON.parse(localStorage.getItem("courses"));
  const myTotal = [];
  const delAll = () => {
    var myarr = JSON.parse(localStorage.getItem("courses"));
    

    for (let i = 0; i <= myarr.length; i++) {
      console.log(i)
      myarr.splice(i,1)
    }
    myarr.splice(0,1)
    console.log(myarr)
    var myOrder = localStorage.getItem("nOrders");
    localStorage.setItem("nOrders", 0);
    var finalarr = JSON.stringify(myarr);
    
    localStorage.setItem("courses", finalarr)
    window.location.reload(false)
    
  };

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
      {Allorders.length == 0 ? (
        <>
          <div>No orders</div>
        </>
      ) : (
        Allorders.map(
          (Allorders) => (
            myTotal.push(Allorders.total),
            console.log(myTotal),
            (
              <Ordercart
                Food={Allorders.item}
                Quantity={Allorders.Quantity}
                Image={Allorders.IMG}
                Unique={Allorders.ID}
              />
            )
          )
        )
      )}

      <div className="col-md-7 m-auto  w-50">
        <h1>
          Your total ={" "}
          {myTotal.reduce(function (a, b) {
            return a + b;
          }, 0)}
        </h1>
        <Button className="bg-danger text-white" onClick={delAll}>
          Delete all Orders
        </Button>
      </div>
    </div>
  );
}
