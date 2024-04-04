// import logo from './logo.svg';
// import './App.css';

import { BrowserRouter as Router , Routes ,Route ,Navigate} from 'react-router-dom';
import NavBar from './components/NavBar';
import AddProduct from './pages/AddProduct';
import MyHome from './pages/MyHome';
import FavoriteProducts from './pages/FavoriteProducts';
import ProductBody from './pages/ProductBody';
import Update from './pages/Update';
import Mobiles from './pages/Mobiles';
import MobileBody from './pages/MobileBody';
import Signup from './pages/SignUp';
import Login from './pages/Login';
import Cart from './pages/Cart';
import { useAuthContext } from './hooks/useAuthContext';



function App() {
  const {user} = useAuthContext()
  return (
    <Router>
    <div className="App">
      <NavBar/>
       <div>
        <Routes>

        <Route exact path = '/'
          element = {user ? <MyHome/> : <Navigate to = "/Login"/>} >
         </Route>

          <Route exact path = '/mobiles'
          element = { user ? <Mobiles/> : <Navigate to = "/Login"/> } >
          </Route>

          <Route exact path = '/addProduct'
          element = {user ? <AddProduct/> : <Navigate to = "/Login"/>}  >
          </Route>


          <Route exact path = '/favoriteProducts'
          element = { user ? <FavoriteProducts/> : <Navigate to = "/Login" />} >
          </Route>

          <Route exact path = '/ProductBody'
          element = { <ProductBody/>} >
          </Route>

          <Route path = '/ProductBody/:id'
           element = {<ProductBody />} >
          </Route>


          <Route path = '/Mobiledetails/:id'
           element = {<MobileBody />} >
          </Route>

          <Route path = '/ProductBody/:id/Update/:id'
           element = {<Update />} >
          </Route>


          <Route path = '/Mobiledetails/:id/Update/:id'
           element = {<Update />} >
          </Route>


          <Route path = '/SignUp'
           element = {<Signup/>} >
          </Route>


          <Route path = '/Login'
           element = {<Login/>} >
          </Route>

          <Route path = '/Cart'
           element = {<Cart/>} >
          </Route>




       
        </Routes>
       </div>
    </div>
  </Router>
  );
}

export default App;
