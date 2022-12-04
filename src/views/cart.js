import { useState, useEffect } from 'react';
import {ContextCart} from '../context/cartContext'
import ItemCartDetail from '../components/itemCart';
import Layout from '../components/layout';
function CartView (){
    const [showItems, setShowItems] = useState([])
    function showCart(){
        showItems.length = 0
        for(let i = 0; i < (localStorage.length); i++){
            const newItemJason2 = localStorage.getItem(`item${i}`)
            const itemNew = JSON.parse(newItemJason2)
            if(itemNew.id){
                showItems.push(itemNew)
            }
        }
    }
    showCart()
    return(
        <Layout a={'4'}>
            <section className='cartSpace'>
                <div className='productsInCartContainer'>
                    {showItems.map((item) => {
                            return(
                                <ItemCartDetail porps={item} />
                            )
                        })
                    }
                </div>
                {showItems != 0 ?
                    <ContextCart.Consumer>
                        {( { total } ) =>{
                            return(
                                <div className='confirmation'>
                                    <div>
                                        <h4 className='total'>TOTAL: ${total}</h4>
                                        <button className='clear'>clear cart</button>
                                    </div>
                                    <div>
                                        <button className='clear'>back to store</button>
                                        <button className='clear'>checkout</button>
                                    </div>
                                </div>
                            )
                        }}
                    </ContextCart.Consumer> :

                    <h1>cagon</h1>
                }
            </section>
        </Layout>
    )
}
export default CartView;