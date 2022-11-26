import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import search from '../img/search.png'
function Items({ props }){
    return(
        <div className="card">
            <div className="hoverCard">
                <Link className="more"
                to={{
                    pathname:`/Store/Item/${props.id}`,
                }}
                >
                    <img src={search} />
                </Link>
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