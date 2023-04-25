import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { doc, getFirestore, getDoc } from "firebase/firestore"
import { Link } from 'react-router-dom'
import bag from '../img/warning.png'
function OrderDetail() {
    const params = useParams()
    const [order, setOrder] = useState({})
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])
    const [exis, setExis] = useState(false)
    useEffect(() => {
        const db = getFirestore()
        const itemUse = doc(db, 'orders', `${params.id}`)
        getDoc(itemUse).then((snap) => {
            if (snap.exists()) {
                setProducts(snap.data().items)
                setExis(true)
                return (snap)
            }
            else{
                setLoading(false)
            }
        }).then((snap) => {
            if (snap.exists()) {
                setOrder({ ...snap.data(), id: snap.id, })
            }
        }).then((data) => setLoading(!!data))
    }, [])
    return (
        <Layout a={'4'}>
            
            {loading && <div className="loading"><div className="lds-dual-ring"></div></div>}
            {exis ?
            <section className="orderDetail">
                <div className="firstOrder">
                    <div>
                        <h1 className="h1Order">Order code #: <div>{order.id}</div></h1>
                        <h2 className="DLI">Don't lose it</h2>
                    </div>
                    <h2 className="h2Order">Buy on: {order.orderDate}</h2>
                    <h2 className="h2Order">{order.delivery}</h2>
                </div>
                <div className="itemsOfOrder">
                    {
                    products.map((item) => {
                        const price = item.price * item.number
                        return(
                        <Link key={item.id}  to={{ pathname: `/Store/item/${item.id}` }}  className="ItemCartDetail">
                            <div className="imgCartItemCon">
                                <img className="imgCartItem" src={item.pictureUrl} />
                            </div>
                            <h2 className="titleCartItem titleOrder"> {item.title}</h2>
                            <h2 className="titleCartItem h priceOrder">${price}</h2>
                            <div className="numIOrd">
                                <h3 className="actualCart h">{item.number}</h3>
                            </div>
                        </Link>
                        )
                    })}
                </div>
                <div className="fin">
                    <h2 className="h2Order g">Subtotal: ${order.preTotal}</h2>
                    <h2 className="h2Order g">Shipping: ${order.shippingCost}</h2>
                    <h2 className="h2Order g">Total: <b>${order.total}</b></h2>
                </div>
            </section>
            :
            <section className="orderDetail">
                <div className='centerOrder'>
                        <div className='title1'>
                        <img src={bag} alt="Warning Img" className='logoTitle logoTitle2'/>   
                             <div className='first'>
                                <h1 className="errorH1">Error</h1>
                                <p className='pTitle'>We're sorry, but the order you're looking for doesn't exist. Please double-check the details provided and contact our customer support team if you continue to experience issues.</p>
                                <Link
                                to={{
                                    pathname:"/order",
                                }}
                                className="buyNow">Return to order search</Link>
                            </div>     
                        </div>
                </div>
            </section>
            }
        </Layout>
    )
}
export default OrderDetail;