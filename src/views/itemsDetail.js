import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsTest } from '../mocks/item.mock'
import Layout from "../components/layout";
import {Link} from 'react-router-dom'
function ItemDetail(){
    const [actualCart, setActualCart] = useState(0)
    function lessStock(){
        if(actualCart != 0){
            setActualCart(actualCart - 1)
        }
    }
    function moreStock(){
        if(actualCart < product.stock){
            setActualCart(actualCart + 1)
        }
    }
    function addToCart(){
        
    }
    const params = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const productsFromApi = new Promise((resolve) => {  setTimeout(()=>{resolve(ProductsTest)}, 2000)})
    useEffect(()=>{
        productsFromApi.then((data) => {
            data.forEach(element => {
                if(element.id == params.id){
                    setProduct(element)
                }
            });
        }).then((data)  => setLoading(!!data))
    }, [])
    return(
    <Layout a={'3'}> 
        <section className="itemDatail">
            {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            <div>
                <button className="mainButton buttonHover" onClick={addToCart}>Add to the cart {actualCart}</button>
                <button className="secondButton buttonHover" onClick={lessStock} >-</button>
                <button className="secondButton buttonHover buttonOne" onClick={moreStock} >+</button>
            </div>
            <img src={product.pictureUrl}/>
        </section>
        <Link className='b'
                to={{
                    pathname:"/Store/All",
                }}
                >
                    volver                        
                </Link>
    </Layout>
    )
}
export default ItemDetail;