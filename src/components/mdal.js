import { useContext, useState, useRef } from "react";
import { Modal, card, Button } from "react-bootstrap";
import { ModalContext } from "../contexts/modalcontext";
import { CartContext } from "../contexts/cartContext";
import React from "react";

const Mdal = ({ isOpen, setOpen, Image}) => {
  const {modalImage,setImage} = useContext(ModalContext)
  const { foodItem, setItem } = useContext(ModalContext);
  const {isDecimal,setDecimal} = useContext(ModalContext);
  const {modalPrice,setPrice} = useContext(ModalContext)
  const [Quantity, setQuantity] = useState(0);
  const{myCart,setCart} = useContext(ModalContext)
  
  const {Orders} = useContext(CartContext);
  const Subtotal = Quantity*modalPrice
  
  
  function submitButton() {
    if(Quantity % 1 == 0 & Quantity!=0){
      
      setDecimal(false)
      var FoodOrders = JSON.parse(localStorage.getItem('courses') || "[]")
      var orders = JSON.parse(localStorage.getItem("nOrders"))
      localStorage.setItem('nOrders',JSON.stringify(orders+1))
      var myOrder = {
        item:foodItem,

        Quantity:Quantity,
        total:Subtotal,
        IMG:modalImage,
        ID:orders

    
      }
      FoodOrders.push(myOrder)
      
      localStorage.setItem('courses',JSON.stringify(FoodOrders))
      
      
      console.log(Orders)
      alert(`Your order for ${Quantity} ${foodItem} has been placed!`)
      
      
      
      
      
      
      
      

      
      
    } else{
      setDecimal(true)
      
    }
     
  }
  

  const handleClose = () => setOpen(false);
  return (
    <>
      {isOpen ? (
        <Modal show={true} onHide={handleClose}>
          <Modal.Header closeButton>
            <h1 className="modal-title w-100 text-center">Place Order</h1>
          </Modal.Header>
          <Modal.Body>
            <img src={modalImage} alt="food-item" width="100%" height="300px" />
            <h3>{foodItem}</h3>
            <input
              type="number"
              value={Quantity}
              onChange={(e) => setQuantity(e.target.value)}
              placeholder="0"
              min="1"
            />
            {isDecimal ? (
              <div className="text-danger">No decimals or 0 Quantity allowed</div>
            ): null}

          </Modal.Body>
          <Modal.Footer>
            <h3 className="w-100">Subtotal: {Subtotal} </h3>

            <Button type="button" className="bg-primary" onClick={submitButton}>
              Order
            </Button>
          </Modal.Footer>
        </Modal>
      ) : null}
    </>
  );
};
export default Mdal;
