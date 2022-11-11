import { useState } from "react";
import Items from './items.js';
const ProductsTest =  [{
    id: "001",
    title: "logo",
    description: "A custom logo for your brand, made according to your preferences",
    price: "US$99",
    pictureUrl: null,
    stock:12,
},
{
    id: "002",
    title: "logo + website",
    description: "A custom logo for your brand, and a website where you can expose your brand",
    price: "US$199",
    pictureUrl: null,
    stock: 6,
}]
function ItemList(){
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    const productsFromApi = new Promise((resolve) => {  setTimeout(()=>{resolve(ProductsTest)}, 10000)//en este espacio estaria el lamado a la api, el cual por cada dato que llegue (objetos) lo metera en el array allProducts
    })
    productsFromApi.then((data) => {
        setProducts(data)
    }).then((data)  => setLoading(!!data))
    return(
    <section className="productContainer">
            {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
            {products.map((product) => {
            <Items props={product}></Items>
            })}
    </section>
    )
}
export default ItemList;