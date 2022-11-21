import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from './items.js';
import { ProductsTest } from '../mocks/item.mock'
function ItemListCate(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const productsFromApi = new Promise((resolve) => {  setTimeout(()=>{resolve(ProductsTest)}, 2000)})
    useEffect(()=>{
        productsFromApi.then((data) => {
            setProducts(data)
        }).then((data)  => setLoading(!!data))
    }, [Items])
    const params = useParams()
    return(
    <section className="productContainer">
            {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
            {products.map((product) => {
            if(params.category == product.category){return <Items props={product}/>}
            })}
    </section>
    )
}
export default ItemListCate;