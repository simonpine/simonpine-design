import { useState } from "react";
import Items from './items.js';
import { ProductsTest } from '../mocks/item.mock'
function ItemList(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const productsFromApi = new Promise((resolve) => {  setTimeout(()=>{resolve(ProductsTest)}, 5000)//en este espacio estaria el lamado a la api, el cual por cada dato que llegue (objetos) lo metera en el array allProducts
    })
    productsFromApi.then((data) => {
        setProducts(data)
    }).then((data)  => setLoading(!!data))
    return(
    <section className="productContainer">
            {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
            {products.map((product) => {
            return <Items props={product}/>
            })}
    </section>
    )
}
export default ItemList;