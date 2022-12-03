import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductsTest } from '../mocks/item.mock'
import Layout from "../components/layout";
import { CustomProvider } from "../context/cartContext";
import {Link} from 'react-router-dom'
import one from '../img/complemen/1.jpeg'
import two from '../img/complemen/2.jpeg'
import tree from '../img/complemen/3.jpeg'
import four from '../img/complemen/4.jpeg'
import Buttons from "../components/buttonsDetail";
function ItemDetail(){
    const params = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [mainImg, setMainImg] = useState('')
    const productsFromApi = new Promise((resolve) => {  setTimeout(()=>{resolve(ProductsTest)}, 2000)})
    useEffect(()=>{
        productsFromApi.then((data) => {
            data.forEach(element => {
                if(element.id == params.id){
                    setProduct(element)
                    setMainImg(element.pictureUrl)
                }
            });
        }).then((data)  => setLoading(!!data))
    }, [])
    return(
    <Layout a={'3'}> 
        <section className="itemDatail">
            {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
            <div className="img">
                <div className="minImgCon">
                    <img className="mainImg" src={mainImg}/>
                </div>
                <div className="miniImg">
                    <button className="btnImg" onClick={() => {setMainImg(product.pictureUrl)}}><img className="innerBtn" src={product.pictureUrl}/></button>
                    <button className="btnImg" onClick={() => {setMainImg(one)}}><img className="innerBtn" src={one}/></button>
                    <button className="btnImg" onClick={() => {setMainImg(two)}}><img className="innerBtn" src={two}/></button>
                    <button className="btnImg" onClick={() => {setMainImg(tree)}}><img className="innerBtn" src={tree}/></button>
                    <button className="btnImg" onClick={() => {setMainImg(four)}}><img className="innerBtn" src={four}/></button>
                </div>
            </div>
            <div  className="details">
                <div className="btnBackCont">
                    <Link className='btnBack'
                        to={{
                            pathname:"/Store/All",
                        }}
                        >
                            BACK TO STORE                       
                    </Link>
                </div>
                <h1 className="h1">{product.title}</h1>
                <p className="pDetail">{product.description}</p>
                <h2 className="priceInfo">Price: ${product.price}</h2>
                <h2 className="aditionalInfo">Stock: {product.stock}</h2>
                <Buttons props={product}/>
            </div>
        </section>
    </Layout>
    )
}
export default ItemDetail;