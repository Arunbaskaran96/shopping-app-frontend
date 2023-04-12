
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Portal from './Components/Portal';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './Pages/Mobiles'
import Mobiles from './Pages/Mobiles';
import Accessories from './Pages/Accessories'
import Cart from './Pages/Cart'
import Orders from './Pages/Orders';
import YourProfile from './Pages/YourProfile';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Editprofile from './Pages/Editprofile';
import Adminportal from './Components/Admin/Adminportal';
import Home from './Pages/Admin/Home';
import AdminAccessories from './Pages/Admin/AdminAccessories';
import Adminorders from './Pages/Admin/Adminorders';
import Admincustomer from './Pages/Admin/Admincustomer';
import Addmobiles from './Pages/Admin/Addmobiles';
import Viewcustomer from './Pages/Admin/Viewcustomer';
import ProductDetails from './Pages/Admin/ProductDetails';
import Addaccessories from './Pages/Admin/Addaccessories';
import Editproduct from './Pages/Admin/Editproduct';
import Editaccessories from './Pages/Admin/Editaccessories';
import Forgotpassword from './Pages/Forgotpassword';
import Paymentpage from './Pages/Paymentpage';



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/register' element={<Register/>}></Route>
      <Route path='/payment' element={<Paymentpage/>}></Route>
      <Route path='/forgot-password' element={<Forgotpassword/>}></Route>
      <Route  path='/navbar' element={<Portal/>}>
        <Route path='mobiles' element={<Mobiles/>}/>
        <Route path='accessories' element={<Accessories/>}></Route>
        <Route path='cart' element={<Cart/>}></Route>
        <Route path='orders' element={<Orders/>}></Route>
        <Route path='profile' element={<YourProfile/>}></Route>
        <Route path='editprofile' element={<Editprofile/>}></Route>
      </Route>
      <Route path='/navbar' element={<Adminportal/>}>
        <Route path='adminhome' element={<Home/>}></Route>
        <Route path='adminaccess' element={<AdminAccessories/>}></Route>
        <Route path='adminorder' element={<Adminorders/>}></Route>
        <Route path='admincustomer' element={<Admincustomer/>}></Route>
        <Route path='addmobile' element={<Addmobiles/>}></Route>
        <Route path='customerview/:id' element={<Viewcustomer/>}></Route>
        <Route path='orderview/:id' element={<ProductDetails/>}></Route>
        <Route path='addmobile' element={<Addmobiles/>}></Route>
        <Route path='addaccessories' element={<Addaccessories/>}></Route>
        <Route path='editproduct/:id' element={<Editproduct/>}></Route>
        <Route path='editaccess/:id' element={<Editaccessories/>}></Route>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
