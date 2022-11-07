import logo from './img/logo1.svg';
import './App.css';
import Nav from './components/nav';

const cartItems = ['one', 'two', 'tree']

function App() {
  return (
    <div className="App">
      <Nav ite={cartItems.length} />
    </div>
  );
}

export default App;
