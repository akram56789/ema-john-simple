import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';
import Orders from './Orders/Orders';
import About from './utilities/Inventory/About/About';
import Inventory from './utilities/Inventory/Inventory';
 


function App() {
  return (
    <div>
      <Header></Header>
   <Routes>
    
    <Route path='/shop' element={<Shop></Shop>}></Route>
    <Route path='/orders' element={<Orders></Orders>}></Route>
    <Route path='/inventory' element={<Inventory></Inventory>}></Route>
    <Route path='/about' element={<About></About>}></Route>
   </Routes>



    </div>
  );
}

export default App;
