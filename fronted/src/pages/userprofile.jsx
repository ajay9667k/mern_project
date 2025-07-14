import { useEffect } from "react";
import { useState } from "react";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Userprofile=()=>{
  const [profile,setprofile]= useState("")
  const navigate= useNavigate()
   function handleLogout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  function Handleform(e){
     e.preventDefault()
     
     const formData=new FormData()
     formData.append("profile",profile)
     fetch("/api/profile",{
         method:"POST",
         body:formData
     }).then((res)=>{
        return res.json()
     }).then((result)=>{
       console.log(result)
     })

  }
  useEffect(()=>{
     fetch("/api/getprofilephoto").then((res)=>{
        return res.json()
     }).then((result)=>{
       console.log(result)
     })
  },[])
    return(
        <div>
              <div>
        <div className="max-w-sm mx-auto mt-15 mb-15 bg-gray-300 rounded-xl shadow-lg p-6 text-center space-y-4">
          <div className="space-y-3">
            <img
              src={""}
              alt="Profile"
              className="w-24 h-24 mx-auto rounded-full  border-4 border-blue-950 object-cover"
            />
            <h2 className="text-lg font-semibold">name</h2>
          </div>

          <div className="text-center">
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Upload Profile Picture
            </label>
           <form onSubmit={Handleform}
            method="post"
          encType="multipart/form-data">
             <div className="flex items-center justify-center gap-3">
              <label className="cursor-pointer inline-block px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition duration-200">
                Choose File
                <input
                  type="file"
                  name="profile"
                  accept="image/*"
                  className="hidden"
                  
                  onChange={(e)=>{setprofile(e.target.files[0])}}
                />
              </label>
              <div className="flex justify-center gap-3">
            <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
              Upload
            </button>
            <button className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Update
            </button>
          </div>
            </div>
           </form>
           <div>
            <Button onClick={handleLogout} color="warning"  fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }} >
               Logout
            </Button>
           </div>
          </div>

          
        </div>
      </div>
        </div>
    )
}
export default Userprofile;