import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProductDetail from './components/ProductDetail';
import Home from './components/Home';
import './App.css';

function App() {

  const products = useSelector(state => state.products)

  return (
    <div className="App">
      <Route exact path={"/"} component={Home} />
      <Route path={"/detail/:id"} render={({match}) => (
        <ProductDetail
          product={products.find(
            (p) => p.id === parseInt(match.params.id)
          )}/>
      )}
      />
    </div>
  );
}

export default App;