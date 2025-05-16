import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Left=()=>{
    return(
       
            
                  <div className="w-1/3 flex flex-col gap-2">
                 <Link to={"/adminproduct"}>
                 <Button fullWidth color='success'  variant='contained'>Product Management</Button>
                 </Link>
                 <Link to={"/adminquery"}>
                 <Button fullWidth color='success' variant='contained'>Query Management</Button>
                 </Link>
                 
                  </div>
                 
          
        
    )
}
export default Left;