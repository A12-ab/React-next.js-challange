import { BrowserRouter, Route, Routes } from "react-router-dom";
import 'remixicon/fonts/remixicon.css'
import Products from "./components/Admin/Products";
import NotFound from "./components/NotFound";
import Orders from "./components/Admin/Orders";
import Dashboard from "./components/Admin/Dashboard";
import Customer from "./components/Admin/Customer";
import Payment from "./components/Admin/Payment";
import Settings from "./components/Admin/Settings";
import Admin from "./components/Admin";
import Home from "./components/Home";
import Product from "./components/Products";
import Category from "./components/Category";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Contact from "./components/Contact";
import 'animate.css';
const App=()=>{
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/products" element={<Product/>}/>
            <Route path="/category" element={<Category/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/contact-us" element={<Contact/>}/>
           <Route path="/admin">
                <Route path="products" element={<Products/>}/> 
                <Route path="orders" element={<Orders/>}/>
                <Route path="dashboard" element={<Dashboard/>}/>
                <Route path="customers" element={<Customer/>}/>
                <Route path="payments" element={<Payment/>}/>
                <Route path="settings" element={<Settings/>}/>
                <Route path="auth" element={<Admin/>}/>
           </Route>
           <Route path="*" element={<NotFound/>}/>
        </Routes>
    
    </BrowserRouter>
  )
}
export default App;