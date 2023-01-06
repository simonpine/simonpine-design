import {useState} from 'react'
import { ContextCart } from '../context/cartContext'
function Buttons( { props } ) {
    const [actualCart, setActualCart] = useState(0)
    return(
        
        <ContextCart.Consumer>
            {( { addItem, numberInCart } ) => {
                
                const realStock = props.stock - numberInCart(props.id)
                    function lessStock(){
                        if(actualCart !== 0){
                            setActualCart(actualCart - 1)
                        }
                    }
                    function moreStock(){
                        if(actualCart < realStock){
                            setActualCart(actualCart + 1)
                        }
                    }
                const g = () =>{
                    addItem(props, actualCart)
                    setActualCart(0)
                }
                return(
                    <div>
                        <h2 className="aditionalInfo">In cart: {numberInCart(props.id) ? numberInCart(props.id) : 0}</h2>
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