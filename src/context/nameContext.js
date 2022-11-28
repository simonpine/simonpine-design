import React, { createContext, useState } from "react";

export const Context3 = createContext('all')
export const Actualname = ( { children } ) => {
    const [name, setName] = useState("")
    return(
        <Context3.Provider value={{name, setName}}>
            {children}
        </Context3.Provider>
    )
}