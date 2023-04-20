import { Context2 } from '../context/priceContext'
import { collection, getDocs, getFirestore } from "firebase/firestore"
import { useState, useEffect } from 'react'
function FilterByPrice(props){
    const [max, setMax] = useState(0)
    useEffect(()=>{
        const db = getFirestore()
        const itemsColection = collection(db, 'maxPrice')
        getDocs(itemsColection).then((snap) => {
            setMax(snap.docs[0].data().max)
            })
    }, [])
    const changeValue = ( evt ) => {
        props.otherPrice(evt.target.value)
    }
    return(
        <Context2.Consumer>               
            {({ maxprice }) => {
                return(
                    <input type="range" id="volume" name="volume" className='range'
                    min="0" max={max}value={maxprice}
                    onChange={changeValue}
                    />
                )
            }}
        </Context2.Consumer>
    )
}
export default FilterByPrice;