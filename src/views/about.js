import Layout from "../components/layout";
import { cartItems } from "../mocks/cart.mock";

function About() {
  return (
    <Layout a={'2'} b={cartItems.length}>
        <h3>no se que poner 🥶</h3>
    </Layout>
  );
}

export default About;
