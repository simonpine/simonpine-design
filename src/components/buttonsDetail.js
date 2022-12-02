import {useState} from 'react'
import { ContextCart } from '../context/cartContext'
function Buttons( { props } ) {
    const [actualCart, setActualCart] = useState(0)
    function lessStock(){
        if(actualCart != 0){
            setActualCart(actualCart - 1)
        }
    }
    function moreStock(){
        if(actualCart < props.stock){
            setActualCart(actualCart + 1)
        }
    }

    return(
        <ContextCart.Consumer>
            {( { addItem } ) => {
                return(
                    <div className="allButtons">
                    <div className="moreLessBut">
                        <button className="secuButt" onClick={lessStock} >-</button>
                        <h3 className="actualCart">{actualCart}</h3>
                        <button className="secuButt" onClick={moreStock} >+</button>
                    </div>
                    <button className="addCart" onClick={() => {addItem(props, actualCart)}}>Add to the cart</button>
                    </div>
                )
            }}
        </ContextCart.Consumer>
    )
}
export default Buttons