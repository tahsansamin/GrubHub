import React from "react";
import { useState,useContext } from "react";
import { Card, Button, Modal } from "react-bootstrap";
import Mdal from "./mdal";
import { ModalContext } from "../contexts/modalcontext";

const Itemcard = ({ foodTitle,Description,Image,Price }) => {
  const {isOpen,setOpen} = useContext(ModalContext)
  const {foodItem,setItem} = useContext(ModalContext)
  const {modalImage,setImage} = useContext(ModalContext)
  const {modalPrice,setPrice} = useContext(ModalContext)
  
  
  
  const Dect =() =>{
    setOpen(true)
    setItem(foodTitle)
    setImage(Image)
    setPrice(Price)
    
    
  }
  
  const [numbers,setOrder] = useState(0);
  
  
  
  
  
  return(
    <div className="card w-50 m-auto mt-4 px-4 ">
      <div className="row">
        <div className="col-md-4">
          <img src={Image} alt="Food picture"  height="100%" className="position-relative w-100 "/>
        </div>
        <div className="col-md-8">
          <h2 className="card-title mt-3">{foodTitle}</h2>
          <p>{Description}</p>
          <h4>${Price}</h4>
          <button type="button" className="btn btn-danger" onClick={Dect}>Order Now</button>
          
          
          
          
        </div>
      </div>
      
    </div>

    
  );
  
  
};

export default Itemcard;
