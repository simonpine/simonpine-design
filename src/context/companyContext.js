import React, { createContext, useState } from "react";

export const Context = createContext('all')
export const Actualcompany = ( { children } ) => {
    const [theCompany, setTheCompany] = useState("all")
    return(
        <Context.Provider value={{theCompany, setTheCompany}}>
            {children}
        </Context.Provider>
    )
}