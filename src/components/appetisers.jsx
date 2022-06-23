import React from "react";
import "./navbar.css"
import cartSVG from "./undraw_empty_cart_co35.svg"
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";
import { useState, createContext, useContext } from "react";
import CartContext  from "../contexts/cartContext";
import Itemcard from "./itemcard";
import { ModalContext } from "../contexts/modalcontext";
import Mdal from "./mdal"


const AppetiserPage = (submitFunction) =>{
  const {isOpen,setOpen} = useContext(ModalContext)
  
  const Wings = "https://www.jessicagavin.com/wp-content/uploads/2019/01/baked-chicken-wings-5-1200.jpg"
  const Lollipops= "https://alekasgettogether.com/wp-content/uploads/2020/01/lollipop-chicken-drumsticks.jpg"
  const Samosa ="https://media.istockphoto.com/photos/plate-of-samosas-and-dipping-sauce-picture-id147914856?k=20&m=147914856&s=612x612&w=0&h=xDk2l9aFYfi-u6zK3rHtrtrvBKXUIIHXmZ8KcI1L-fs="
  const  {Orders} = useContext(CartContext);
  
  const background = "https://media.istockphoto.com/photos/empty-dark-wooden-table-in-front-of-abstract-blurred-bokeh-background-picture-id1130714046?b=1&k=20&m=1130714046&s=170667a&w=0&h=MC8LticTUrt8xJ9MevhvuJEH49Rf6Psv8E50KKcPx0A="
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
      
      <Itemcard foodTitle="Samosas" Description="Start off with a savoury CRUNCH with our packed Samosas" Image={Samosa} Price={1200} />
      <Itemcard  foodTitle="Wings" Description="Lick your fingers as you devour the juicy meat off these tender bones" Image={Wings} Price={1040}/>
      <Itemcard  foodTitle="Chicken lollipops" Description="A traditional starter item all around the world for the kids." Image={Lollipops} Price={1000}/>
      
      <Mdal isOpen={isOpen} setOpen={setOpen} Image="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80" handleSubmit={submitFunction}/>
      
    </div>
  );
};
export default AppetiserPage;
