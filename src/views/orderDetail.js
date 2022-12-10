import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout";
import { doc, getFirestore, getDoc } from "firebase/firestore"
import {Link} from 'react-router-dom'
function OrderDetail(){
    const params = useParams()
    const [product, setProduct] = useState({})
    const [loading, setLoading] = useState(true)
    const [mainImg, setMainImg] = useState('')
    useEffect(()=>{

        const db = getFirestore()
        const itemUse = doc(db, 'orders', `${params.id}`)
        getDoc(itemUse).then((snap) => {
            if(snap.exists()){
                setProduct({...snap.data(), id: snap.id,})
            }
        }).then((data)  => setLoading(!!data))
    }, [])
    return(
    <Layout a={'3'}> 
        <section className="itemDatail">
            {loading && <div className="loading"><div class="lds-dual-ring"></div></div>}
            <h1>{product.orderDate}</h1>
        </section>
    </Layout>
    )
}
export default OrderDetail;