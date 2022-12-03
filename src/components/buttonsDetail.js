import {useState, useEffect} from 'react'
import { ContextCart } from '../context/cartContext'
function Buttons( { props } ) {
    const [actualCart, setActualCart] = useState(0)
    const [inCart, setIncart] = useState('')
    const newInCart = (a) =>{

    }
    return(
        <ContextCart.Consumer>
            {( { addItem, numberInCart } ) => {
                const realStock = props.stock - inCart
                    function lessStock(){
                        if(actualCart != 0){
                            setActualCart(actualCart - 1)
                        }
                    }
                    function moreStock(){
                        if(actualCart < realStock){
                            setActualCart(actualCart + 1)
                        }
                    }
                function change(){
                    if((numberInCart(props.id) != undefined) || (numberInCart(props.id) != null) ){
                        setIncart(numberInCart(props.id))
                    }
                    else{
                        setIncart(0)
                    }
                }
                const g = () =>{
                    addItem(props, actualCart)
                    change()
                    setActualCart(0)
                }
                change()
                return(
                    <div>
                        <h2 className="aditionalInfo">In cart: {inCart}</h2>
                        <div className="allButtons">
                        <div className="moreLessBut">
                            <button className="secuButt" onClick={lessStock} >-</button>
                            <h3 className="actualCart">{actualCart}</h3>
                            <button className="secuButt" onClick={moreStock} >+</button>
                        </div>
                        <button className="addCart" onClick={() => {g()}}>Add to the cart</button>
                        </div>
                    </div>
                )
            }}
        </ContextCart.Consumer>
    )
}
export default Buttons