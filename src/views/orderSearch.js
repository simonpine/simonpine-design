import { useState } from "react"
import { Link } from "react-router-dom"
import Layout from "../components/layout"
import orderImg from '../img/order.png'
function OrderSearch (){
    const [code, setCode] = useState('')
    return (
        <Layout a={'4'}>
            <div className="orderSearchCont">
                <div className='title title4'>
                    <div className='first'>
                    <h1>Search your orders</h1>
                    <p className='pTitle'>Write the order code to know the information of each order in the space below</p>
                    <input placeholder="IcyLQRcI9RU4vACNdeG2" className="search mata" type='text' onChange={(evt) => { setCode(evt.target.value) }} ></input>
                    <Link className='clear mat' to={{pathname:`/order/${code}`}}>Find the order</Link>
                    </div>
                <img src={orderImg} alt="SimonPine logo" className='logoTitle'/>        
                </div>
            </div>
        </Layout>
    )
}
export default OrderSearch