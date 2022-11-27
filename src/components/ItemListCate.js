import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from './items.js';
import { ProductsTest } from '../mocks/item.mock'
import { Context } from '../context/companyContext'
import { Context2 } from '../context/priceContext'

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
        <div>
        {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
        <Context.Consumer>
        {({ theCompany }) => {
            return(
                <Context2.Consumer>
                {({ maxprice }) => {
                    return(
                        <section className="productContainer">
                        {products.map((product) => {
                            if(!(+product.price > maxprice)){ 
                            if(theCompany == 'all'){
                                if (params.category == 'All'){return <Items props={product}/>}
                                else if(params.category == product.category){return <Items props={product}/>}
                            }
                            else if(theCompany == product.company){
                                if (params.category == 'All'){return <Items props={product}/>}
                                else if(params.category == product.category){return <Items props={product}/>}
                            }}
                            })
                        }
                        </section>
                    )
                }}
                </Context2.Consumer>
            )
        }}
        </Context.Consumer>
        </div>
    )
}
export default ItemListCate;