import {ContextCart} from '../context/cartContext'
import Layout from '../components/layout';
function CartView (){
    return(
        <Layout a={'4'}>
            <ContextCart.Consumer>
                {() =>{
                    return(
                        <h1>hola</h1>
                    )
                }}
            </ContextCart.Consumer>
        </Layout>
    )
}
export default CartView;