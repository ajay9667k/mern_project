import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Left from "./left";
import { Button, TextField } from "@mui/material";

const Adminqueryreplay=()=>{
    const[querydata,setquerydata]= useState("")
    const[sub,setsub]=useState("")
    const[ebody,setebody]=useState("")
    const userid =useParams()
    const id=userid.abc
   useEffect(()=>{
       fetch(`/api/replayqueryadmin/${id}`).then((res)=>{
        return res.json()
       }).then((result)=>{
           setquerydata(result.QuerEmail)
           
       })
    },[])

    function Handleform(e){
       e.preventDefault()
       const formdata={sub,ebody,querydata}
       fetch(`/api/usermailreply/${id}`,{
        method:"POST",
        headers:({"Content-Type":"application/json"}),
        body:JSON.stringify(formdata)
       }).then((res)=>{
          return res.json()
       }).then((result)=>{
          console.log(result)
       })
    }

    return(
         <div>
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        {/* Right */}
        <div className="w-11/12 ">
          <h1 className="text-4xl font-bold text-sky-600 my-4">Reply 📧</h1>
          <form onSubmit={Handleform}>
            <TextField
              fullWidth
              label="To"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={querydata}

             
            />
            <TextField
              fullWidth
              label="From"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={"ajay9667k@gmail.com"}
            />
            <TextField
              fullWidth
              label="Subject"
              id="fullWidth"
              sx={{ marginBottom: "10px" }}
              value={sub}
              onChange={((e)=>{setsub(e.target.value)})}
            />
            <TextField
              fullWidth
              label="Body"
              id="fullWidth"
              multiline
              rows={4}
              sx={{ marginBottom: "10px" }}
              value={ebody}
              onChange={((e)=>{setebody(e.target.value)})}
            />

            <Button type="submit" variant="outlined" color="error">
              Reply
            </Button>
          </form>
        </div>
      </div>
    </div>
    )
}
export default Adminqueryreplay;