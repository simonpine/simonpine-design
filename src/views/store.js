import Layout from "../components/layout";
import ItemList from "../components/itemList"
import { cartItems } from "../mocks/cart.mock";

function Store() {
  return (
    <Layout a={'3'} b={cartItems.length}>
        <ItemList />
    </Layout>
  );
}

export default Store;
