import React from "react";
import "./navbar.css"
import cartSVG from "./undraw_empty_cart_co35.svg"
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";
import { useState, createContext, useContext } from "react";
import  CartContext  from "../contexts/cartContext";
import Itemcard from "./itemcard";
import Mdal from "./mdal";
import { ModalContext } from "../contexts/modalcontext";

const DesertPage = () => {
  const { Orders } = useContext(CartContext);
  const {isOpen,setOpen} = useContext(ModalContext)
  const Icecream ="https://thumbs.dreamstime.com/b/neapolitan-ice-cream-15779155.jpg"
  const Fudge = "https://media.istockphoto.com/photos/dessert-chocolate-cake-picture-id155598375?b=1&k=20&m=155598375&s=170667a&w=0&h=kcXg4jNBBjXs31XwWktKpE9bOeZqmwnMDKvxzr_MpFM="
  const Waffles = "https://media.istockphoto.com/photos/waffles-with-fruit-and-maple-syrup-on-a-marble-counter-picture-id185266029?k=20&m=185266029&s=612x612&w=0&h=Tms_IvrEGK0W9oWnno2rZ8e_GBAOyT_Ug0HN9qJNlVY="
  const Sundae = "https://thumbs.dreamstime.com/b/soft-focus-ice-cream-sundae-big-bowl-97879608.jpg"
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
          <h4>{JSON.parse(localStorage.getItem("nOrders"))}</h4>
        </Container>
      </Navbar>
      <Itemcard foodTitle="Ice Cream" Description="Home brewed savoury ice cream" Image={Icecream} Price={1040}/>
      <Itemcard foodTitle="Chocolate Fudge" Description="Warm Crispy chocolate delight" Image={Fudge} Price={3000}/>
      <Itemcard foodTitle="Waffles" Description="Sunny ,brown soft biscuits" Image={Waffles} Price={11000}/>
      <Itemcard foodTitle="Sunny Sundae" Description="Combination of a crisp and a breeze" Image={Sundae} Price={1000}/>
      <Mdal isOpen={isOpen} setOpen={setOpen} Image="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80"/>



    </div>
  );
};
export default DesertPage;
