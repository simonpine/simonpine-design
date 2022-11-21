import Layout from "../components/layout";
import { cartItems } from "../mocks/cart.mock";
import ItemListCate from "../components/ItemListCate";
import CategoryFilter from "../components/categoryFilter";
import { useParams } from "react-router-dom";
function Category (){
    const params = useParams()
    let o;
    params.category == 'combos'? o = 1 : o = 2;
    return (
        <Layout a={'3'} b={cartItems.length}>
            <CategoryFilter  main={o}/>
        <ItemListCate />
            
        </Layout>
    )
}
export default Category