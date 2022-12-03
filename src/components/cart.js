import cart from '../img/shopping-cart.png';
import {ContextCart} from '../context/cartContext'
import {Link} from 'react-router-dom'
function Cart ({ main }){
    return(
        <ContextCart.Consumer>
            {({qty}) =>{
                return(
                    <Link className="cart" to={{
                        pathname:"/cart",
                    }} >
                        <img src={cart} style={main} className='socialMedia'/>
                        <span className='red'>
                            <h5>{qty}</h5>    
                        </span>
                    </Link>
                )
            }}
        </ContextCart.Consumer>
    )
}
export default Cart;