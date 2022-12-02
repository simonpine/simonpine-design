import cart from '../img/shopping-cart.png';
import { cartItems } from '../mocks/cart.mock';
import {ContextCart} from '../context/cartContext'
function Cart (){
    return(
        <ContextCart.Consumer>
            {({qty}) =>{
                return(
                    <button className='cart'>
                        <img src={cart} className='socialMedia'/>
                        <span className='red'>{qty}</span>
                    </button>
                )
            }}
        </ContextCart.Consumer>
    )
}
export default Cart;