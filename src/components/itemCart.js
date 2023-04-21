import { Link } from 'react-router-dom'
import { ContextCart } from '../context/cartContext'
function ItemCartDetail({ porps, restart }) {
    const price = Math.round(porps.price * porps.number)
    return (
        <ContextCart.Consumer>
            {({ deleteItemAllS, plus, less }) => {
                function deleteAll() {
                    deleteItemAllS(porps.id)
                    restart()
                }
                function plusAction() {
                    plus(porps, porps.number)
                    restart()
                }
                function lessAction() {
                    less(porps, porps.number)
                    restart()
                }
                return (
                    <div className="ItemCartDetail">
                        <Link to={{ pathname: `/Store/item/${porps.id}` }} className="imgCartItemCon">
                            <img className="imgCartItem" src={porps.pictureUrl} />
                        </Link>
                        <h2 className="titleCartItem"> {porps.title}</h2>
                        <h2 className="titleCartItem h priceCart">${price}</h2>
                        <div className='but'>
                            <div className="allButtonsCart">
                                <button className="clear r deleteBut" onClick={() => { deleteAll() }}>Delete</button>
                                <div className="moreLessBut">
                                    <button className="butCart" onClick={() => { lessAction() }}>-</button>
                                    <h3 className="actualCart h">{porps.number}</h3>
                                    <button className="butCart" onClick={() => { plusAction() }}>+</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }}
        </ContextCart.Consumer>
    )
}
export default ItemCartDetail;