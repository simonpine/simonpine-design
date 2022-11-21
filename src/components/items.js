import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
function Items({ props }){
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
    function addToCart(){
        
    }
    return(
        <div className="card">
            <div className="hoverCard">
                <h3 className="itemId">Item #{props.id}</h3>
                <Link className="more"
                to={{
                    pathname:`/Store/Item/${props.id}`,
                }}
                >
                    More
                </Link>
                <div>
                    <button className="mainButton buttonHover" onClick={addToCart}>Add to the cart {actualCart}</button>
                    <button className="secondButton buttonHover" onClick={lessStock} >-</button>
                    <button className="secondButton buttonHover buttonOne" onClick={moreStock} >+</button>
                </div>
            </div>
            <img className="imgCard" src={props.pictureUrl} />
            <div className="textCard">
                <h2 className="titleCard">{props.title}</h2>
                <h3 className="informationCard">{props.price}</h3>
            </div>
        </div>
    )
}
export default Items;