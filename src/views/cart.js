import { useState, useEffect } from 'react';
import {ContextCart} from '../context/cartContext'
import ItemCartDetail from '../components/itemCart';
import Layout from '../components/layout';
import bag from '../img/sho.png'
import {Link} from 'react-router-dom'
function CartView (){
    const [showItems, setShowItems] = useState([])
    const [r, setr] = useState(1)
    const showCart = () =>{
        showItems.length = 0
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason2 = localStorage.getItem(`item${i}`)
            const itemNew = JSON.parse(newItemJason2)
            if(itemNew.id){
                showItems.push(itemNew)
            }
        }
    }
    function restart(){
        setr(Math.random())
    }
    useEffect(()=>{
        showCart()
    }, [r])
    showCart()
    return(
        <Layout a={'4'}>
            <section className='cartSpace'>
                <div className='productsInCartContainer'>
                    {showItems.map((item) => {
                            return(
                                <ItemCartDetail key={item.id} porps={item} restart={restart}/>
                            )
                        })
                    }
                </div>
                {showItems != 0 ?
                    <ContextCart.Consumer>
                        {( { total, clear } ) =>{
                            function clearAll(){
                                clear()
                                setr(Math.random())
                            }
                            return(
                                <div className='confirmation'>
                                    <div className='k'>
                                        <h4 className='total'>Total: <div>${total}</div></h4>
                                    </div>
                                    <div className='k'>
                                        <button className='clear l' onClick={() => {clearAll()}}>Clear cart</button>
                                        <Link to={{pathname:"/order",}} className="clear l" >Look other orders</Link>
                                        <Link to={{pathname:"/cart/checkout"}} className='clear'>Checkout</Link>
                                    </div>
                                </div>
                            )
                        }}
                    </ContextCart.Consumer> :
                    <div className='center'>
                        <div className='title1'>
                             <div className='first'>
                                <h1>The cart is empty</h1>
                                <p className='pTitle'>Please take a moment to explore our store and discover the amazing products we have to offer.</p>
                                <Link
                                to={{
                                    pathname:"/Store/All",
                                }}
                                className="buyNow">Explore the store</Link>
                            </div>
                            <img src={bag} alt="SimonPine logo" className='logoTitle'/>        
                        </div>
                    </div>
                }
            </section>
        </Layout>
    )
}
export default CartView;