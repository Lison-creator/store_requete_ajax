
import './App.css';
import ProductList from './containers/product-list/product-list';
import ProductDetail from './containers/product-detail/product-detail';

import WeatherContainer from './containers/weather-container/weather-container';


function App() {
  return (
    <div className="App">
      <h1 className="titre">Requêtes Ajax Redux</h1>
      <WeatherContainer />
      <ProductList />
      <ProductDetail />
    </div>
  );
}

export default App;
