// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router , Routes ,Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import AddProduct from './pages/AddProduct';
import MyHome from './pages/MyHome';
import FavoriteProducts from './pages/FavoriteProducts';
import ProductBody from './pages/ProductBody';
import Update from './pages/Update';

function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
       <div>
        <Routes>

        <Route exact path = '/'
          element = { <MyHome/>} >
          </Route>

          <Route exact path = '/addProduct'
          element = { <AddProduct/>} >
          </Route>

          <Route exact path = '/favoriteProducts'
          element = { <FavoriteProducts/>} >
          </Route>

          <Route exact path = '/ProductBody'
          element = { <ProductBody/>} >
          </Route>

          <Route path = '/ProductBody/:id'
           element = {<ProductBody />} >
          </Route>

          <Route path = '/ProductBody/:id/Update/:id'
           element = {<Update />} >
          </Route>



       
        </Routes>
       </div>
    </div>
  </Router>
  );
}

export default App;
