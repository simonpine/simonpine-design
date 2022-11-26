import cart from '../img/shopping-cart.png';
import { cartItems } from '../mocks/cart.mock';
function Cart (){
    return(
        <button className='cart'>
            <img src={cart} className='socialMedia'/>
            <span className='red'>{cartItems.length}</span>
        </button>
        
    )
}
export default Cart;