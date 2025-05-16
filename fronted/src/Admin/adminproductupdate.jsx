import {
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
const Adminupdate = () => {
 const[Productname,setProductname]= useState("")
 const[Productdes,setProductdes]=useState("")
 const[Productprice,setProductprice]=useState("")
 const[Productratting,setProductratting]=useState("")
 const [isSize, setIssize] = useState([]);
 const [isBestseller, setIsbestseller] = useState(false);
 const[stock,setstock]=useState("")
  
  const navigate= useNavigate()

 function Handlechange(e){
      let value=e.target.value
      let chaked=e.target.checked
      if(chaked){
          setIssize([...isSize,value])
      }else{
        setIssize(isSize.filter((item)=>item  !== value))
      }
      
 }

 const abc=useParams()
  const dataid=abc.id
  useEffect(()=>{
      fetch(`/api/showadminupdatedata/${dataid}`).then((res)=>{
        return res.json()
      }).then((data)=>{
       
       setProductname(data.ProductName),
       setProductdes(data.ProductDescription),
       setProductprice(data.ProductPrice),
       setProductratting(data.ProductRating),
       setIsbestseller(data.ProductBestSeller),
       setIssize(data.ProductSizes),
       setstock(data.ProductStock)

      })
  },[])

  function Handleform(e){
       e.preventDefault()
  const updatedata ={
    Name:Productname,des:Productdes,price:Productprice,ratting:Productratting,size:isSize,bestseller:isBestseller,Stock:stock
  }
  fetch(`/api/admindataupdate/${dataid}`,{
    method:"PUT",
    headers:({"Content-Type":"application/json"}),
    body:JSON.stringify(updatedata)
  }).then((res)=>{
    return res.json()
  }).then((result)=>{
   if(result.message==="succuessfuly update"){
        navigate("/adminproduct")
   }
  })

  
  }

  return (
    <div>
      <div className="flex items-center justify-center w-11/12 mt-5 gap-3">
        <div className="w-1/3 flex flex-col gap-2">
          <Link to={"/adminproduct"}>
            <Button fullWidth color="success" variant="contained">
              Product Management
            </Button>
          </Link>
          <Link to={"/adminquery"}>
            <Button fullWidth color="success" variant="contained">
              Query Management
            </Button>
          </Link>
        </div>
        <div className="w-2/3">
          <h1 className="text-4xl text-center font-bold text-sky-600 my-4">
            Update Product
          </h1>
          <form onSubmit={Handleform}>
            <TextField
              id="outlined-basic"
              label="ProductName"
              variant="outlined"
              fullWidth
              value={Productname}
              onChange={(e)=>{setProductname(e.target.value)}}
              sx={{ marginBottom: "10px" }}
            />
            <TextField
              id="outlined-basic"
              label="ProductDescripition"
              variant="outlined"
              rows={4}
              multiline
              fullWidth
              value={Productdes}
              onChange={(e)=>{setProductdes(e.target.value)}}
              sx={{ marginBottom: "10px" }}
            />

            <FormControl  fullWidth sx={{ marginBottom: "10px" }}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={Productprice}
                onChange={(e)=>{setProductprice(e.target.value)}}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
                
               
              />
            </FormControl>

            <TextField
              id="outlined-basic"
              label="Ratting"
              variant="outlined"
              fullWidth
              value={Productratting}
              onChange={(e)=>{setProductratting(e.target.value)}}
              sx={{ marginBottom: "10px" }}
            />
             <select className="w-full p-3 border bottom-10 border-black rounded-sm" 
             onChange={(e)=>{setstock(e.target.value)}}>
                  <option  value="">--Select--</option>
                  <option  value="In-Stock">In-Stock</option>
                  <option  value="Out-Of-Stock">Out-Of-Stock</option>
                </select>

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size</h3>
              <div className="flex gap-2">
                <FormGroup  sx={{display:"flex", flexDirection:"row"}}>
                  <FormControlLabel
                    control={<Checkbox  />}
                    label="S"
                    value={"S"}
                    checked={isSize.includes("S")}
                    onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="L"
                    value={"L"}
                   checked={isSize.includes("L")}
                   onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="M"
                    value={"M"}
                    checked={isSize.includes("M")}
                    onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XL"
                    value={"XL"}
                   checked={isSize.includes("XL")}
                   onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XXL"
                    value={"XXL"}
                   checked={isSize.includes("XXL")}
                    onChange={Handlechange}
                  />
                </FormGroup>

               
              </div>
             
            </div>
            <FormControlLabel
                    control={ <Checkbox   icon={<FavoriteBorder />}
                     checkedIcon={<Favorite />} color="error"  />}
                     checked={isBestseller}
                     onChange={(e)=>{setIsbestseller(e.target.checked)}}
                    label="Best Seller"
                   
                  />
           
            <Button type="submit"  variant="contained" color="warning">
                    Update product
                </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Adminupdate;
