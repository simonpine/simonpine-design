import React, { createContext, useState } from "react";

export const ContextCart = createContext()
export const CustomProvider = ( { children } ) => {
    const cart = []
    const [qty, setQty] = useState(localStorage.length)
    const [total, setTotal] = useState(0)
    
    function localSto(){
        if(localStorage.length != 0){
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason = localStorage.getItem(`item${i}`)
            const itemNew = JSON.parse(newItemJason)
            cart.push(itemNew)
            setTotal(total + (itemNew.price * itemNew.qty))
        }
        console.log(cart)
    }}
    const clear = () => {
        cart = []
        setQty(0)
        setTotal(0)
    }
    const addItem = ( itemProps, numNew ) => {
        // let yes = true
        // cart.map((cartItem) =>{
        //     if(cartItem.id == itemProps.id){
        //         cartItem.number = cartItem.number + numNew
        //         yes = false
        //         console.log('yeah')
        //     }
        // })
        if(true){
            const newItem = itemProps
            newItem.number = numNew
            const itemJSON = JSON.stringify(newItem);
            localStorage.setItem(`item${localStorage.length}`, itemJSON)
            localSto()
            setQty(localStorage.length)
        }
    }
    return(
        <ContextCart.Provider value={{ cart, qty, total, addItem }}>
            {children}
        </ContextCart.Provider>
    )
}