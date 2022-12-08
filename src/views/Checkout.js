import { useState, useEffect } from 'react';
import {ContextCart} from '../context/cartContext'
import Layout from '../components/layout';
import {Link} from 'react-router-dom'
import ShoppingEndCard from '../components/shopingEndCard';
function Checkout (){
    const [subTotal, setSubTotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [toTal, setToTal] = useState(0)
    const [disa, setDisa] = useState(true)
    const [disa2, setDisa2] = useState(true)

    const [delivery, setdelivery] = useState({})
    const [orderCode, setOrderCode] = useState(true)

    const [end, setEnd] = useState({  top: '-200vh', })
    return(
        <Layout a={'4'}>
            <section className='checkpout'>
                    <ContextCart.Consumer>
                        {( { total, clear, qty } ) =>{
                            function clearAll( evt ){
                                console.log(evt.target)
                                evt.preventDefault();
                                setEnd({  top: '-2%', })
                                setTimeout(clear(), 1000)
                            }
                            const initial = ( s ) => {
                                let k = 0
                                setShipping(0)
                                setIva(total * 0.15)
                                setSubTotal(total - (total * 0.15))
                                if( s ){
                                    if(total < 2000){
                                        setShipping(400)
                                        k = 400
                                    }
                                }
                                setToTal((total * 0.15) + (total - (total * 0.15)) + k)
                            }
                            const initial2 = ( s ) => {
                                let k = 0
                                setShipping(0)
                                setIva(total * 0.15)
                                setSubTotal(total - (total * 0.15))
                                if( s ){
                                    if(total < 2000){
                                        setShipping(400)
                                        k = 400
                                    }
                                }
                                setToTal((total * 0.15) + (total - (total * 0.15)) + k)
                            }
                            function m(evt){
                                setDisa(false)
                                if(evt.target.value == 2){
                                    initial2( true )
                                    setDisa2(false)
                                }
                                else{
                                    initial( false )
                                    setDisa2(true)
                                }
                            }
                            return(
                                <form onSubmit={clearAll}  className='confirmationChek'>
                                    {<ShoppingEndCard total={toTal} see={end}></ShoppingEndCard>}
                                    <div className='Purchase reUseP reUsev'>
                                        <h2 className='titlePa'>Purchase Summary</h2>
                                        <h4 className='total ko'>Subtotal: <div>${subTotal}</div></h4>
                                        <h4 className='total ko'>IVA: <div>${iva}</div></h4>
                                        <h4 className='total ko'>Shipping: <div>${shipping}</div></h4>
                                        <h4 className='total toTal ko'>Total: <div>${toTal}</div></h4>
                                    </div>
                                    <div className='Delivery reUseP reUsev'>
                                        <h2 className='titlePa'>Delivery service</h2>
                                        <div className='deliCOn'>
                                            <div>
                                                <input type='radio' id='1' value='1' name='a' onChange={m}></input>
                                                <label className='Deli' for='1'>Pick at store</label>
                                            </div>
                                            <div>
                                                <input type='radio' id='2' value='2' name='a' onChange={m}></input>
                                                <label className='Deli' for='2'>Send home</label>
                                            </div>
                                        </div>
                                        <input disabled={disa2} type='text' className='search search2' placeholder='Delivery address' required></input>
                                    </div>
                                    <div className='PaymentMethod reUseP'>
                                        <div className='conpayme'>
                                            <h2 className='titlePa'>Payment method</h2>
                                            <div className='payM'>
                                                <input disabled={disa} type='text' className='f search search2' placeholder='Name' required></input>
                                                <input disabled={disa} type='text' className='g search search2' placeholder='Email' required></input>
                                                <input disabled={disa} type='phone' className='j search search2' placeholder='Phone' required></input>
                                                <input disabled={disa} type='text' className='e search search2' placeholder='Card number' required></input>
                                                <input disabled={disa} type='date' id='ex' className='y search search2' placeholder='expiration date' required></input>
                                                <input disabled={disa} type='text' className='x search search2 ' placeholder='CVV' required></input>
                                            </div>
                                        </div>
                                        <button disabled={disa} type='submit' className='finish'>finish order</button>
                                    </div>
                                </form>
                            )
                        }}
                    </ContextCart.Consumer>
            </section>
        </Layout>
    )
}
export default Checkout;