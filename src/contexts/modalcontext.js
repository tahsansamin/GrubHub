import { createContext,useEffect,useState } from "react";

export const ModalContext = createContext()

export const ModalProvider = ({children}) => {
    const [isOpen,setOpen] = useState(false)
    const[foodItem,setItem] = useState(null)
    const [isDecimal,setDecimal] = useState(false)
    const[modalImage,setImage] = useState(null)
    const[modalPrice,setPrice] = useState(0)
    const [myCart,setCart] = useState([])
    
    return(
        <ModalContext.Provider value={{isOpen,setOpen,foodItem,setItem,isDecimal,setDecimal,modalImage,setImage,modalPrice,setPrice,myCart,setCart}}>
            {children}
        </ModalContext.Provider>
    )

}