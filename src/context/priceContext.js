import React, { createContext, useState } from "react";

export const Context2 = createContext('all')
export const ActualmaxPrice = ( { children } ) => {
    const [maxprice, setmaxprice] = useState(3100)
    return(
        <Context2.Provider value={{maxprice, setmaxprice}}>
            {children}
        </Context2.Provider>
    )
}