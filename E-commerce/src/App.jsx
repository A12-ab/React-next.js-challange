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
const App=()=>{
  return(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
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