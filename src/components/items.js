import { useState } from "react";
function Items({ props }){
    const [actualStock, setActualStock] = useState(props.stock)
    return(
        <div className="card">
            <img className="imgCard" src={props.pictureUrl} />
            <div className="textCard">
                <h2 className="titleCard">{props.title}</h2>
            </div>
        </div>
    )
}
export default Items;