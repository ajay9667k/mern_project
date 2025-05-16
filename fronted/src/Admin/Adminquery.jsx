import { Button } from "@mui/material";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import SendIcon from "@mui/icons-material/Send";
import DeleteIcon from "@mui/icons-material/Delete";

const AdminQuery=()=>{
   const[query,setquery]= useState([])
    useEffect(()=>{
        fetch("/api/queryadmindata").then((res)=>{
            return res.json()
        }).then((data)=>{
            setquery(data)
            
        })
    },[query])

    function Hamdledelete(id){
      
       fetch(`/api/removequeryt/${id}`,{
        method:"DELETE"
       }).then((res)=>{
           return res.json()
       }).then((result)=>{
        if(result.message==="successfuly delete"){
            toast.success(result.message)
        }else{
          toast.error(result.message)
        }
          
       })
    }
  
    return(
     <div>
               <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
                     
                      <div className="w-11/12 ">
                        <h1 className="text-4xl font-bold text-sky-600 my-4">
                          Query Management👤
                        </h1>
                        
                         
                        
              
                        <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-8">
                          {query.length === 0 ? (
                            <div className="bg-slate-300 p-4">
                              <h1 className="text-center text-3xl font-bold">
                                No Query Here..🫤
                              </h1>
                            </div>
                          ) : (
                            <table className="bg-black w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                                <tr>
                                  <th scope="col" className="px-6 py-3">
                                      S.No
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                     USerEmail
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                    UserQuery
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                     Status
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                     Action
                                  </th>
                                  <th scope="col" className="px-6 py-3">
                                     Action
                                  </th>
              
                                </tr>
                              </thead>
                              <tbody>
                                {query.map((item,index) => (
                                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                                   
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                      {index+1}
                                      </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                      {item.QuerEmail}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                     {item.Query}
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                   {item.QueryStatus}
                                    </td>
                                   
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                      
                                        <Button variant="contained" color="success"
                                        endIcon={<SendIcon />}
                                        >
                                           Reply
                                        </Button>
                                      
                                    </td>
                                    <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                                      <Button
                                        variant="contained"
                                        color="error"
                                        endIcon={<DeleteIcon />}
                                      onClick={()=>{Hamdledelete(item._id)}}

                                      >
                                        Delete
                                      </Button>
                                    </td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          )}
                        </div>
                      </div>
                    </div>
     </div>
        
    )
}
export default AdminQuery;