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
    <Route path="/showproduct" element={<Singlecollection/>}/>
    <Route path="/adminqueryreplay/:abc" element={<Adminqueryreplay/>}/>
   </Routes>
   <Footer/>
   </BrowserRouter>
   </>
  )
}

export default App
