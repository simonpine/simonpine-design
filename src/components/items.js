import { useState } from "react";
function Items({ props }){
    const [actualStock, setActualStock] = useState(props.stock)
    function newStock(){

        setActualStock(actualStock -1)
    }
    return(
        <div className="card">
            <div className="hoverCard">
                <h3>{actualStock}</h3>
                <button onClick={newStock} ></button>
            </div>
            <img className="imgCard" src={props.pictureUrl} />
            <div className="textCard">
                <h2 className="titleCard">{props.title}</h2>
                <h3 className="informationCard">{props.description}</h3>
            </div>
        </div>
    )
}
export default Items;