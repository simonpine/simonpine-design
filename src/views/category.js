import Layout from "../components/layout";
import { cartItems } from "../mocks/cart.mock";

function Category (){
    return (
        <Layout a={'3'} b={cartItems.length}>
            <h1>hola</h1>
        </Layout>
    )
}
export default Category