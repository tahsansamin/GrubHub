import React from "react";
import { Container, Card, Button } from "react-bootstrap";
import cancelSVG from "./iconmonstr-trash-can-1.svg";
import { useNavigate } from "react-router-dom";

export default function Ordercart({ Quantity, Food, Image, Unique }) {
  const navigate = useNavigate()
  const delItem = (id) => {
    var myarr = JSON.parse(localStorage.getItem("courses"));
    
    for(let i=0;i<myarr.length;i++){
        if (Object.values(myarr[i])[4] === id)(
          myarr.splice(i,1)
        )
        

        
        
      
    }
    console.log(myarr)
    var myOrder = localStorage.getItem("nOrders")
    localStorage.setItem("nOrders",myOrder-1)
    var finalarr = JSON.stringify(myarr)
    localStorage.setItem("courses",finalarr)
    window.location.reload(false)
    
    
    
    
  };
  return (
    <div className="card w-50 m-auto mt-4 px-4 ">
      <div className="row">
        <div className="col-md-3">
          <img
            src={Image}
            alt={Food}
            className="w-100 position-relative"
            height="100%"
          />
        </div>
        <div className="col-md-3">
          <h2>{Food}</h2>
        </div>
        <div className="col-md-3">
          <h1>{Quantity}</h1>
        </div>
        <div className="col-md-3">
          <button
            className="bg-danger text-white"
            onClick={() => delItem(Unique)}
          >
            <img src={cancelSVG} alt="deleteorder" />
          </button>
        </div>
      </div>
    </div>
  );
}
