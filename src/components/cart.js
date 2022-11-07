import cart from '../img/shopping-cart.png';
function Cart ({ numItem }){
    return(
        <span className='cart'>
            <img src={cart} className='socialMedia'/>
            <span className='red'>{numItem}</span>
        </span>
        
    )
}
export default Cart;