import React from "react";
import "./navbar.css"
import cartSVG from "./undraw_empty_cart_co35.svg"
import { Nav, Navbar, Container, Carousel } from "react-bootstrap";
import { useState, createContext, useContext } from "react";
import  CartContext  from "../contexts/cartContext";
import Itemcard from "./itemcard";
import Mdal from "./mdal";
import { ModalContext } from "../contexts/modalcontext";


const MaincoursePage = () => {
  const {isOpen,setOpen} = useContext(ModalContext)
  const Chicken = "https://media.istockphoto.com/photos/grilled-chicken-legs-with-chips-and-vegetables-picture-id824623884?b=1&k=20&m=824623884&s=170667a&w=0&h=5BAmNysuPQKX40JSmKN6-GrfMC3FHZLeXkBVXk9UbVg="
  const Fish = "https://media.istockphoto.com/photos/fish-and-chips-with-peas-and-slice-of-lemon-and-garnish-picture-id884635802?k=20&m=884635802&s=612x612&w=0&h=77bQvJocKMwVPCR0dDnu44t_YMvjLjW6EUrWlZDP-w0="
  const Jerk = "https://media.istockphoto.com/photos/jamaican-jerk-chicken-rice-and-peas-and-grilled-corn-picture-id527014673?b=1&k=20&m=527014673&s=170667a&w=0&h=rf1oJl5bxXo9AzH7q7hK8Bo93CblGL23h8J-w3g9kio="
  const Quesedilla ="https://media.istockphoto.com/photos/close-up-baked-chicken-and-cheese-quesadillas-served-with-salsa-and-picture-id1137678835?k=20&m=1137678835&s=612x612&w=0&h=0tKKiyiGsjZrJzVTPLd8w7HQkKM1g43APd1jlwiikq4="
  const Taco = "https://thumbs.dreamstime.com/b/mexican-food-delicious-taco-shells-ground-beef-home-made-salsa-77872135.jpg"
  const { Orders } = useContext(CartContext);
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
      <Itemcard foodTitle="Chips N Chicken" Description="Our original Chips with our secretly cooked tender Chicken loins" Image={Chicken} Price={11000}/>
      <Itemcard foodTitle="Chips N Fish" Description="Fresh caught Tilipia with a side of hearty chips" Image={Fish} Price={100056}/>
      <Itemcard foodTitle="Jerk Chicken" Description="Juicy,salty and sweet Chicken thighs" Image={Jerk} Price={1000}/>
      <Itemcard foodTitle="Quesedillas" Description="Heaven in a triangle brought to you from Mexico" Image={Quesedilla} Price={15600}/>
      <Itemcard foodTitle="Tacos" Description="Delicious Semi Circles stuffed with minced beef and cheese" Image={Taco} Price={14560}/>
      <Mdal isOpen={isOpen} setOpen={setOpen} Image="https://images.unsplash.com/photo-1444312645910-ffa973656eba?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fHBpY3xlbnwwfHwwfHw%3D&w=1000&q=80"/>
    </div>
  );
};
export default MaincoursePage;
