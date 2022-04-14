import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Shop from './components/Shop/Shop';
import SignUp from './components/SignUp/SignUp';
import Orders from './Orders/Orders';
import About from './utilities/Inventory/About/About';
import Inventory from './utilities/Inventory/Inventory';
 


function App() {
  return (
    <div>
      <Header></Header>
   <Routes>
  
    <Route path='/' element={<Shop></Shop>}></Route>
    <Route path='/shop' element={<Shop></Shop>}></Route>
    <Route path='/orders' element={<Orders></Orders>}></Route>
    <Route path='/inventory' element={<Inventory></Inventory>}></Route>
    <Route path='/about' element={<About></About>}></Route>
    <Route path='/login' element={<Login></Login>}></Route>
    <Route path='/signup' element={<SignUp></SignUp>}></Route>
   </Routes>



    </div>
  );
}

export default App;
