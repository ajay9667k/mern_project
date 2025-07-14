import AdminQuery from "../Admin/Adminquery";
import Hero from "../componets/Hero";
import Policy from "../componets/Policy";
import Bestseller from "./Bestsaller";
import Latest from "./latest";
import Quary from "./quary";


const Home=()=>{
    return(
        
        <>
        <Hero/>
        <Policy/>
        <Latest/>
        <Bestseller/>
        <Quary/>
        
        
        </>
    )
}
export default Home;