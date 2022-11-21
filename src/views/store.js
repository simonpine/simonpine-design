import Layout from "../components/layout";
import ItemList from "../components/itemList"
import { cartItems } from "../mocks/cart.mock";
import CategoryFilter from "../components/categoryFilter";
function Store() {
  return (
    <Layout a={'3'} b={cartItems.length}>
        <CategoryFilter main={3} />
        <ItemList />
    </Layout>
  );
}

export default Store;
