import { useState, useEffect } from 'react';
import {ContextCart} from '../context/cartContext'
import Layout from '../components/layout';
import {Link, useNavigate} from 'react-router-dom'
import { clear } from '@testing-library/user-event/dist/clear';
function Checkout (){
    const [subTotal, setSubTotal] = useState(0)
    const [iva, setIva] = useState(0)
    const [shipping, setShipping] = useState(0)
    const [toTal, setToTal] = useState(0)
    const [disa, setDisa] = useState(true)
    const [disa2, setDisa2] = useState(true)
    const navigate = useNavigate();
    const [delivery, setDelivery] = useState('')
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    return(
        <Layout a={'4'}>
            <section className='checkpout'>
                    <ContextCart.Consumer>
                        {( { total, qty, setOrder } ) =>{
                            function setOrdeAction( evt ){
                                evt.preventDefault();
                                return Promise.resolve(setOrder(subTotal, iva, disa2, delivery, toTal, name, mail, shipping )).then((a) => navigate(`/order/${a}`)).then(() => {localStorage.clear()})
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
                            function m(evt){
                                setDisa(false)
                                if(evt.target.value == 2){
                                    initial( true )
                                    setDisa2(false)
                                }
                                else{
                                    initial( false )
                                    setDisa2(true)
                                }
                            }
                            return(
                                <form onSubmit={setOrdeAction}  className='confirmationChek'>
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
                                        <input disabled={disa2} type='text' onChange={(evt) => { setDelivery(evt.target.value) }} className='search search2' placeholder='Delivery address' required></input>
                                    </div>
                                    <div className='PaymentMethod reUseP'>
                                        <div className='conpayme'>
                                            <h2 className='titlePa'>Payment method</h2>
                                            <div className='payM'>
                                                <input disabled={disa} type='text' onChange={(evt) => { setName(evt.target.value) }}  className='f search search2' placeholder='Name' required></input>
                                                <input disabled={disa} type='text' onChange={(evt) => { setMail(evt.target.value) }} className='g search search2' placeholder='Email' required></input>
                                                <input disabled={disa} type='phone' className='j search search2' placeholder='Phone' required></input>
                                                <input disabled={disa} type='text' className='e search search2' placeholder='Card number' required></input>
                                                <input disabled={disa} type='date' id='ex' className='y search search2' placeholder='expiration date' required></input>
                                                <input disabled={disa} type='text' className='x search search2 ' placeholder='CVV' required></input>
                                            </div>
                                        </div>
                                        <div className='lastButtonsCont'>
                                            <Link className='finish' type='submit' to={{pathname:"/cart"}}>Back to cart</Link>
                                            <button disabled={disa} type='submit' className='finish'>finish order</button>
                                        </div>
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