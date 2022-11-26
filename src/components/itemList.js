import { useState, useEffect } from "react";
import Items from './items.js';
import { ProductsTest } from '../mocks/item.mock'
function ItemList(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const productsFromApi = new Promise((resolve) => {  setTimeout(()=>{resolve(ProductsTest)}, 2000)})
    useEffect(()=>{
        productsFromApi.then((data) => {
            setProducts(data)
        }).then((data)  => setLoading(!!data))
    }, [Items])
    return(
    <section className="productContainer">
            {loading && <div className="loading"><div className="lds-dual-ring"></div></div>}
            {products.map((product) => {
            return <Items props={product}/>
            })}
    </section>
    )
}
export default ItemList;