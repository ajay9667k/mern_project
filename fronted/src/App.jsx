import {BrowserRouter,Routes,Route} from "react-router-dom"
import Navbar from "./componets/Navbar"
import Home from "./pages/Home"
import Collection from "./pages/Collections"
import Service from "./pages/Service"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/signin"
import Admin from "./Admin/admin"
import Footer from "./componets/footer"
import Productmanage from "./Admin/Productmanage"
import Querymanage from "./Admin/Querymanage"
import Addproduct from "./Admin/Addproduct"
import Adminupdate from "./Admin/adminproductupdate"
import Singlecollection from "./pages/showproduct"
import Adminqueryreplay from "./Admin/Adminqueryreplay"
import Cart from "./pages/cart"
import Userprofile from "./pages/userprofile"
import Veryfyotp from "./pages/veryfyotp"



function App() {


  return (
   <>
   <BrowserRouter>
      <Navbar/>
   <Routes>
    <Route path="/" element={<SignIn/>}/>
    <Route path="/home" element={<Home/>}/>
    <Route path="/collection" element={<Collection/>}/>
    <Route path="/SignUp" element={<SignUp/>}/>
    <Route path="/admin" element={<Admin/>} />
    <Route path="/adminproduct" element={<Productmanage/>}/>
    <Route path="/adminquery" element={<Querymanage/>}/>
    <Route path="/addproduct" element={<Addproduct/>}/>
    <Route path="/adminproductupdate/:id" element={<Adminupdate/>}/>
    <Route path="/showproduct/:id" element={<Singlecollection/>}/>
    <Route path="/adminqueryreplay/:abc" element={<Adminqueryreplay/>}/>
    <Route path="/cart" element={<Cart/>}/>
    <Route path="/profile" element={<Userprofile/>}/> 
    <Route path="/veryfyotp" element={<Veryfyotp/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
