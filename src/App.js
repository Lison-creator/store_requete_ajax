import logo from './logo.svg';
import './App.css';
import ProductList from './containers/product-list/product-list';
import ProductDetail from './containers/product-detail/product-detail';


function App() {
  return (
    <div className="App">
      <h1 className="titre">Requêtes Ajax Redux</h1>
      <ProductList />
      <ProductDetail />
    </div>
  );
}

export default App;
