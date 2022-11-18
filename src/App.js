import './App.css';
import Layout from "./components/layout";
import { cartItems } from "./mocks/cart.mock";

function App() {
  return (
    <Layout a={'1'} b={cartItems.length}>
        <h1>hola</h1>
    </Layout>
  );
}

export default App;
