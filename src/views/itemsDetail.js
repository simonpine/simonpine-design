import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsTest } from '../mocks/item.mock'
import { cartItems } from "../mocks/cart.mock";
import Layout from "../components/layout";
import CategoryFilter from "../components/categoryFilter";
function ItemDetail(){
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
    <Layout a={'3'} b={cartItems.length}> 
        <CategoryFilter />   
        <section className="itemDatail">
            {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
            <h1>{product.title}</h1>
            <h2>{product.description}</h2>
            
        </section>
    </Layout>
    )
}
export default ItemDetail;