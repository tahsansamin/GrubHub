import { createContext,useRef,useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({children}) => {
    var Orders = JSON.parse(localStorage.getItem("nOrders")|| "0")
    return(
        <CartContext.Provider value={{Orders}}>{children}</CartContext.Provider>
        
    );
}
export default CartContext;