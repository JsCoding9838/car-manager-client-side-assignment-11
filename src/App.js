import { Route, Routes } from "react-router-dom";

import Home from "./components/Home/Home";
import InventoryDetails from "./components/InventoryDetails/InventoryDetails";
import Login from "./components/Login/Login";
import AddInventory from "./components/ManageInventorys/AddInventory";
import ManageInventory from "./components/ManageInventorys/ManageInventory";
import Navbar from "./components/Navbar/Navbar";
import NotFound from "./components/NotFound/NotFound";
import Register from "./components/Register/Register";
import Services from "./components/Services/Services";


function App() {
  return (
    <>
     <Navbar/>
     
     <Routes>
       <Route path='/' element={<Home/>}></Route>
       <Route path='/home' element={<Home/>}></Route>
       <Route path='/login' element={<Login/>}></Route>
       <Route path='/register' element={<Register/>}></Route>
       <Route path='/inventory/:id' element={<InventoryDetails/>}></Route>
       <Route path='/manage-inventory' element={<ManageInventory/>}></Route>
       <Route path='/add-inventory' element={<AddInventory/>}></Route>
       <Route path='/services' element={<Services/>}></Route>
       <Route path='*' element={<NotFound/>}></Route>
     </Routes>
     
    </>
  );
}

export default App;
