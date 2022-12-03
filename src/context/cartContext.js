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
        }
        console.log(cart)
    }}
    const clear = () => {
        cart = []
        setQty(0)
        setTotal(0)
    }
    const addItem = ( itemProps, numNew ) => {
        if(numNew != 0){
            let dontExist = true
            for(let i = 0; i < (localStorage.length); i++){
                const newItemJason = localStorage.getItem(`item${i}`)
                const cartItem = JSON.parse(newItemJason)
                if(cartItem.id == itemProps.id){
                    cartItem.number = cartItem.number + numNew
                    const itemJSON = JSON.stringify(cartItem);
                    localStorage.setItem(`item${i}`, itemJSON)
                    console.log('yeah')
                    dontExist = false
                    localSto()
                }
            }
            if(dontExist){        
                const newItem = itemProps
                newItem.number = numNew
                const itemJSON = JSON.stringify(newItem);
                localStorage.setItem(`item${localStorage.length}`, itemJSON)
                localSto()
                setQty(localStorage.length)
            }
        }
    }
    const numberInCart = ( idSearch ) => {
        const a = []
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason2 = localStorage.getItem(`item${i}`)
            const itemNew = JSON.parse(newItemJason2)
            a.push(itemNew)
        }
        let num
        a.map((itemSe) => {
            if(itemSe.id == idSearch){
                num = itemSe.number
            }
        })
        return num
    }
    return(
        <ContextCart.Provider value={{ cart, qty, total, addItem, numberInCart }}>
            {children}
        </ContextCart.Provider>
    )
}