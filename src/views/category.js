import Layout from "../components/layout";
import ItemListCate from "../components/ItemListCate";
import CategoryFilter from "../components/categoryFilter";
import { useParams } from "react-router-dom";
import { Actualcompany } from '../context/companyContext'
import { ActualmaxPrice } from '../context/priceContext'
import { Actualname } from '../context/nameContext'
function Category (){
    const params = useParams()
    return (
        <Layout a={'3'}>
            <Actualname>
            <ActualmaxPrice>
            <Actualcompany>
                <CategoryFilter  main={params.category}/>
                <ItemListCate />  
            </Actualcompany>
            </ActualmaxPrice>
            </Actualname>
        </Layout>
    )
}
export default Category