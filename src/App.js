import logo from './img/logo1.svg';
import './App.css';
import Nav from './components/nav';
import ItemList from './components/itemList';

const cartItems = ['one', 'two', 'tree']
const greetinTest = 'hola a todas las personas'

function App() {
  return (
    <div className="App">
      <Nav ite={cartItems.length} />
      <ItemList greeting={greetinTest} />
    </div>
  );
}

export default App;
