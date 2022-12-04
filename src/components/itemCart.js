function ItemCartDetail( { porps } ){
    const price = Math.round(porps.price * porps.number)
    return(
        
        <div className="ItemCartDetail">
            <div className="imgCartItemCon">
                <img className="imgCartItem" src={porps.pictureUrl} />
            </div>
            <h2 className="titleCartItem"> { porps.title}</h2>
            <h2>${price}</h2>
        </div>
    )
}
export default ItemCartDetail;