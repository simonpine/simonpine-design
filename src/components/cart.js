import cart from '../img/shopping-cart.png';
function Cart ({ numItem }){
    return(
        <button className='cart'>
            <img src={cart} className='socialMedia'/>
            <span className='red'>{numItem}</span>
        </button>
        
    )
}
export default Cart;