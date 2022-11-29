import Layout from "../components/layout";
import { cartItems } from "../mocks/cart.mock";
import ItemListCate from "../components/ItemListCate";
import CategoryFilter from "../components/categoryFilter";
import { useParams } from "react-router-dom";
import { Actualcompany } from '../context/companyContext'
import { ActualmaxPrice } from '../context/priceContext'
import { Actualname } from '../context/nameContext'
function Category (){
    const params = useParams()
    let o;
    if(params.category == 'Office'){o = 1}
    else if(params.category == 'Living Room'){o = 2}
    else if(params.category == 'Kitchen'){o = 3}
    else if(params.category == 'Bedroom'){o = 4}
    else if(params.category == 'Dining'){o = 5}
    else if(params.category == 'Kids'){o = 6}
    return (
        <Layout a={'3'}>
            <Actualname>
            <ActualmaxPrice>
            <Actualcompany>
                <CategoryFilter  main={o}/>
                <ItemListCate />  
            </Actualcompany>
            </ActualmaxPrice>
            </Actualname>
        </Layout>
    )
}
export default Category