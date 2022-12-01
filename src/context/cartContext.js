import React, { createContext, useState } from "react";

export const ContextCart = createContext()
export const CustomProvider = ( { children } ) => {
    const [cart, setCart] = useState([])
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(0)
    
    if(localStorage.length != 0){
        for(item of localStorage){
            setCart([...cart, item])
            setTotal(total + item.price)
        }
    }

    return(
        <ContextCart.Provider>
            {children}
        </ContextCart.Provider>
    )
}