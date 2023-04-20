import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Items from './items.js';
import { Context } from '../context/companyContext'
import { Context2 } from '../context/priceContext'
import { Context3 } from '../context/nameContext'
import { collection, getDocs, getFirestore } from "firebase/firestore"

function ItemListCate() {
    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const db = getFirestore()
        const itemsColection = collection(db, 'items')
        getDocs(itemsColection).then((snap) => {
            const prov = []
            snap.docs.map((c) => {
                let a = { ...c.data(), id: c.id, }
                prov.push(a)
            })
            setProducts(prov)
        }).then((data) => setLoading(!!data))
    }, [])
    const params = useParams()
    return (
        <div>
            {loading && <div className="loading"><div className="lds-dual-ring"></div></div>}
            <Context.Consumer>
                {({ theCompany }) => {
                    return (
                        <Context2.Consumer>
                            {({ maxprice }) => {
                                return (
                                    <Context3.Consumer>
                                        {({ name }) => {
                                            return (
                                                <section className="productContainer">
                                                    {loading && <div></div>}
                                                    {products.map((product) => {
                                                        const title2 = product.title.toLowerCase()
                                                        const nameLow = name.toLowerCase()
                                                        if (name == '' || title2.includes(nameLow)) {
                                                            if (!(+product.price > maxprice)) {
                                                                if (theCompany == 'all' || theCompany == product.company) {
                                                                    if (params.category === 'All' || params.category === product.category) { return <Items key={product.id} props={product} /> }
                                                                }
                                                            }
                                                        }
                                                    })
                                                    }
                                                </section>
                                            )
                                        }}
                                    </Context3.Consumer>
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