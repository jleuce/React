import logo from './logo.svg';
import './App.css';
import './components/NavBar.js';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Clicker from './components/Clicker';

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer  greeting="elgreeting"/>
    <Clicker/>
    </>
  );
}

export default App;
