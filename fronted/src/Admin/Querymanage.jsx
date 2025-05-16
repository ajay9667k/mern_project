import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Querymanage=()=>{
    return(
        <div>
            <div className="flex items-center justify-center w-11/12 mt-3 gap-4">
                  <div className="w-1/3 flex flex-col gap-2">
                 <Link to={"/adminproduct"}>
                 <Button fullWidth color='success'  variant='contained'>Product Management</Button>
                 </Link>
                 <Link to={"/adminquery"}>
                 <Button fullWidth color='success' variant='contained'>Query Management</Button>
                 </Link>
                 
                  </div>
                  <div className="w-2/3 flex flex-col justify-center items-center  ">
                  <h1 className='text-4xl'>Querymanagement </h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At nisi rerum aut delectus amet officia autem ut adipisci. Neque aperiam, </p>
                  
                  </div>
            </div>
        </div>
    )
}
export default Querymanage;