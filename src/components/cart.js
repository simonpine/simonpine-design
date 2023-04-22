import cart from '../img/shopping-cart.png';
import { ContextCart } from '../context/cartContext'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
function Cart({ main, cell }) {

    const [ce, setce] = useState('')
    useEffect(() => {
        if(cell){
            setce('nav2')
        }
    }, [])
    return (
        <ContextCart.Consumer>
            {({ qty }) => {
                return (
                    <Link className={`cart ${ce}`} to={{
                        pathname: "/cart",
                    }} >
                        <img src={cart} style={main} className={'socialMedia'} />
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