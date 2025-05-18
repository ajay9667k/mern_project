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
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
const Addproduct = () => {
 const[Productname,setProductname]= useState("")
 const[Productdes,setProductdes]=useState("")
 const[Productprice,setProductprice]=useState("")
 const[Productratting,setProductratting]=useState("")
 const [isSize, setIssize] = useState([]);
 const [isBestseller, setIsbestseller] = useState(false);
 const[image,setimage]=useState("")
  
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

  function Handleform(e){
       e.preventDefault()


   const formData=new FormData();
   formData.append("title",Productname)
   formData.append("Dese",Productdes)
   formData.append("Price",Productprice)

   formData.append("Ratting",Productratting)
   isSize.forEach((value)=>{
    formData.append("Size",value)
   })
   formData.append("Bestsaller",JSON.stringify(isBestseller))
   formData.append("image",image)


   fetch("/api/Adimproduct",{
    method:"POST",
    body:formData
   }).then((res)=>{
    return res.json()
   }).then((data)=>{
      if(data.message==="succuessfuly productdata insert"){
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
            Addproduct
          </h1>
          <form onSubmit={Handleform}
          method="post"
          encType="multipart/form-data"
          >
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
                startAdornment={
                  <InputAdornment position="start">₹</InputAdornment>
                }
                label="Amount"
                type="number"
                value={Productprice}
                onChange={(e)=>{setProductprice(e.target.value)}}
               
              />
            </FormControl>

            <TextField
              id="outlined-basic"
              label="Ratting"
              variant="outlined"
              fullWidth
             type="number"
             value={Productratting}
             onChange={(e)=>{setProductratting(e.target.value)}}
              sx={{ marginBottom: "10px" }}
            />


             <label htmlFor="">Product Image</label>
            <input
              type="file"
              name="image"
              id=""
              className="w-full my-4 "
              onChange={(e) => {
                setimage(e.target.files[0]);
              }}
            />

            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size</h3>
              <div className="flex gap-2">
                <FormGroup  sx={{display:"flex", flexDirection:"row"}}>
                  <FormControlLabel
                    control={<Checkbox  />}
                    label="S"
                    value={"S"}
                    onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="L"
                    value={"L"}
                    onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="M"
                    value={"M"}
                    onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XL"
                    value={"XL"}
                    onChange={Handlechange}
                  />
                  <FormControlLabel
                    control={<Checkbox />}
                    label="XXL"
                    value={"XXL"}
                    onChange={Handlechange}
                  />
                </FormGroup>

                
              </div>
             
            </div>
            <FormControlLabel
                    control={ <Checkbox   icon={<FavoriteBorder />}
                     checkedIcon={<Favorite />} color="error" checked={isBestseller}
                     onChange={(e)=>{setIsbestseller(e.target.checked)}}
                     />}
                    label="Best Seller"
                   
                  />
           
            <Button type="submit"  variant="contained" color="warning">
                    Addproduct
                </Button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Addproduct;
