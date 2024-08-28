import 'remixicon/fonts/remixicon.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from "./Components/Home";
import Teachers from "./Components/Teachers";
import Holidays from "./Components/Holidays";
import Contact from "./Components/ContactUs";
import NotFound from "./Components/NotFound";
import 'animate.css';
const App = ()=>{
  return(
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/teachers" element={<Teachers/>}/>
          <Route path="/holidays" element={<Holidays/>}/>
          <Route path="/contact-us" element={<Contact/>}/>
          <Route path="*" element={<NotFound/>}/>
       </Routes>
    </BrowserRouter>
    

  )
}
export default App;