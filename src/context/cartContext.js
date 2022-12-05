import React, { createContext, useState, useEffect } from "react";

export const ContextCart = createContext()
export const CustomProvider = ( { children } ) => {
    const cart = []
    const [qty, setQty] = useState(0)
    const [total, setTotal] = useState(0)
    const [reEfect, setReEfect] = useState(0)
    useEffect(()=>{
        const a = []
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason2 = localStorage.getItem(`item${i}`)
            const itemNew = JSON.parse(newItemJason2)
            if(itemNew.id){
                a.push(itemNew)
            }
        }
        let g = 0
        a.forEach((q) => {
            g = Math.round((((+q.price) * (+q.number)) + (+g)))

        })
        setTotal(g)
        setQty(a.length)
    }, [reEfect])
    function localSto(){
        if(localStorage.length != 0){
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason = localStorage.getItem(`item${i}`)
            const itemNew = JSON.parse(newItemJason)
            cart.push(itemNew)
        }
    }}
    const clear = () => {
        localStorage.clear()
        setReEfect(Math.random())
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
                setReEfect(Math.random())
            }
        }
    }
    const deleteItemAllS = ( itemId ) => {
            for(let i = 0; i < (localStorage.length); i++){
                const newItemJason = localStorage.getItem(`item${i}`)
                const cartItem = JSON.parse(newItemJason)
                if(cartItem.id == itemId){
                    const itemJSON = JSON.stringify({ empty: 'deletedItem', });
                    localStorage.setItem(`item${i}`, itemJSON)
                    localSto()
                    setReEfect(Math.random())
                }
            }
    }
    const plus = ( itemProps, actual ) => {
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason = localStorage.getItem(`item${i}`)
            const cartItem = JSON.parse(newItemJason)
            if(cartItem.id == itemProps.id){
                if(actual < cartItem.stock){

                    cartItem.number = cartItem.number + 1
                    const itemJSON = JSON.stringify(cartItem);
                    localStorage.setItem(`item${i}`, itemJSON)
                    localSto()
                }
            }
        }
    }
    const less = ( itemProps, actual ) => {
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason = localStorage.getItem(`item${i}`)
            const cartItem = JSON.parse(newItemJason)
            if(cartItem.id == itemProps.id){
                if(actual > 1){
                    cartItem.number = cartItem.number - 1
                    const itemJSON = JSON.stringify(cartItem);
                    localStorage.setItem(`item${i}`, itemJSON)
                    localSto()
                }
            }
        }
    }
    const numberInCart = ( idSearch ) => {
        const a = []
        let num
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason2 = localStorage.getItem(`item${i}`)
            const itemNew = JSON.parse(newItemJason2)
            a.push(itemNew)
        }
        a.map((itemSe) => {
            if(itemSe.id == idSearch){
                num = itemSe.number
            }
        })
        return num
    }
    return(
        <ContextCart.Provider value={{ cart, qty, total, addItem, numberInCart, clear, deleteItemAllS, plus, less }}>
            {children}
        </ContextCart.Provider>
    )
}