import './App.css';
import { useEffect, useState } from 'react'
import Layout from "./components/layout";
import logo from './img/logo1.svg'
import { Link } from 'react-router-dom'
import React from 'react';
import Items from './components/items';
import { CustomProvider } from './context/cartContext'
import { collection, getDocs, getFirestore } from "firebase/firestore"
function App() {
  const [a, setA] = useState({})
  const [b, setB] = useState({})
  const [c, setC] = useState({})
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    const db = getFirestore()
    const itemsColection = collection(db, 'items')
    getDocs(itemsColection).then((snap) => {
      const prov = []
      const pro = snap.docs.map((c) => {
        let a = { ...c.data(), id: c.id, }
        prov.push(a)
      })
      setProducts(prov)
      setA(prov[Math.floor(Math.random()*23)])
      setB(prov[Math.floor(Math.random()*23)])
      setC(prov[Math.floor(Math.random()*23)])
    }).then((data) => setLoading(!!data))
  }, [])
  return (
    <CustomProvider>
      <Layout a={'1'}>
        <div className='homeContainer'>
          <div className='title'>
            <div className='first'>
              <h1>Ideal designs at your service</h1>
              <p className='pTitle'>There's no one-size-fits-all when it comes to branding. No matter what stage you're at, our branding experts can bring your vision to life with creative assets that are as unique as your business.</p>
              <Link
                to={{
                  pathname: "/order",
                }}
                className="buyNow" >Search your order</Link>
            </div>
            <img src={logo} alt="SimonPine logo" className='logoTitle' />
          </div>
          <div className='examples'>
            <h2 className='secondTitle'>Examples</h2>
            <div className='exampleCards'>
              {loading && <div className="loading2"><div className="lds-dual-ring"></div></div>}
              {products && products.map((product) => {
                if ((product.title == a.title || product.title == b.title) || product.title == c.title) {
                  return (
                    <Items key={product.id} props={product} />
                  )
                }
              })}
            </div>
          </div>
        </div>
      </Layout>
    </CustomProvider>
  );
}

export default App;
