
import { Routes , Route } from 'react-router-dom';
import './App.css';
import Header from './containers/Header';
import Productlisting from './containers/Productlisting';
import ProductDetail from './containers/ProductDetail';


function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path='/' element={<Productlisting/>}/>
        <Route exact path='/product/:productId' element={<ProductDetail/>}/>
      </Routes> 
    </div>
  );
}

export default App;
