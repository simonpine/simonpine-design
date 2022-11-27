import './App.css';
import { useEffect, useState } from 'react'
import Layout from "./components/layout";
import logo from './img/logo1.svg'
import {Link} from 'react-router-dom'
import React from 'react';
import Items from './components/items';
import { ProductsTest } from './mocks/item.mock'
function App() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const productsFromApi = new Promise((resolve) => {  setTimeout(()=>{resolve(ProductsTest)}, 2000)})
  useEffect(()=>{
      productsFromApi.then((data) => {
          setProducts(data)
      }).then((data)  => setLoading(!!data))
  }, [])
  const a = (Math.ceil(Math.random()*23))
  const b = (Math.ceil(Math.random()*23))
  const c = (Math.ceil(Math.random()*23))
  return (
    <Layout a={'1'}>
        <div className='homeContainer'>
          <div className='title'>
            <div className='first'>
              <h1>Ideal designs at your service</h1>
              <p className='pTitle'>There's no one-size-fits-all when it comes to branding. No matter what stage you're at, our branding experts can bring your vision to life with creative assets that are as unique as your business.</p>
              <Link
              to={{
                pathname:"/Store",
              }}
              className="buyNow" > Buy now</Link>
            </div>
            <img src={logo} alt="SimonPine logo" className='logoTitle'/>        
          </div>
          <div className='examples'>
            <h2 className='secondTitle'>Examples</h2>
            <div className='exampleCards'>
            {loading && <div className="loading2"><div className="lds-dual-ring"></div></div>}
              {products.map((product) => {
                if ((product.id == a || product.id == b ) || (product.id == c)){
                  return(
                    <Items props={product}/>
                  )
                }
              })}
            </div>
          </div>
        </div>
    </Layout>
  );
}

export default App;
