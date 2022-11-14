import { useState } from "react";
import Items from './items.js';
const ProductsTest =  [{
    id: "001",
    title: "Logo design",
    description: "A custom logo for your brand, made according to your preferences",
    price: "from US$99",
    pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBGV2vdDAsYf-_tSuW5emSubQzUVi2g4X6SUlFWFXm0CzTZwMMxyRWZcUaWLcX4CDNQlA&usqp=CAU",
    stock:12,
},
{
    id: "002",
    title: "Logo & website",
    description: "A custom logo for your brand, and a website where you can expose your brand",
    price: "from US$399",
    pictureUrl: "https://images.all-free-download.com/images/graphiclarge/logo_templates_word_sketch_flat_design_6853586.jpg",
    stock: 6,
},
{
    id: "003",
    title: "Logo & business card",
    description: "A custom and unique card to build different connections",
    price: "from US$249",
    pictureUrl: "https://www.kibrispdr.org/data/750/logo-gambar-huruf-m-59.jpg",
    stock: 11,
},
{
    id: "004",
    title: "Logo & social media",
    description: "A custom logo for your brand, a Facebook cover, a Twitter header and a YouTube background",
    price: "from US$199",
    pictureUrl: "https://i.pinimg.com/736x/ee/fd/d6/eefdd6fd8889659dd4a5ba0a40b718bd.jpg",
    stock: 4,
}]
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