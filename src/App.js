import './App.css';
import Layout from "./components/layout";
import { cartItems } from "./mocks/cart.mock";
import logo from './img/logo1.svg'
import {Link} from 'react-router-dom'
import { ExamplesWork } from './mocks/examples.mock'
function App() {
  return (
    <Layout a={'1'} b={cartItems.length}>
        <div className='homeContainer'>
          <div className='title'>
            <div className='first'>
              <h1>Ideal designs at your service</h1>
              <p className='pTitle'>There's no one-size-fits-all when it comes to branding. No matter what stage you're at, our branding experts can bring your vision to life with creative assets that are as unique as your business.</p>
              <Link
              to={{
                pathname:"/Store",
              }}
              className="buyNow" > Buy now</Link>
            </div>
            <img src={logo} alt="SimonPine logo" className='logoTitle'/>        
          </div>
          <div className='examples'>
              <h2 className='secondTitle'>Examples</h2>
              {ExamplesWork.map((example)=>{
                return <img className='exampleImage' src={example.pictureUrl} />
              })}
          </div>
        </div>
    </Layout>
  );
}

export default App;
