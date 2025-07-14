import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useParams } from "react-router-dom";


const Veryfyotp=()=>{
  
    const [veryfyotp,setveryfyotp] = useState("")
   function Handleotp(e){
      e.preventDefault()    
       fetch(`/api/veryfy`,{
        method:"POST",
        headers:({"Content-Type":"application/json"}),
        body:JSON.stringify({data:veryfyotp})
       }).then((res)=>{
        return  res.json()
       }).then((result)=>{
      

       toast.success(result.message)
         
       })

       


       

       
    }
    return(
        <section className="bg-gray-700  dark:bg-gray-900 w-full h-auto mt-10">
        <div className="py-8 lg:py-16 w-[70%]  px-4 mx-auto ">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
            Veryfy top
          </h2>
          <form action="#" onSubmit={Handleotp} className="space-y-8">
            <div>
              <label
                htmlFor="otp"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your Otp
              </label>
              <input
                type="number"
                id="email"
                name="myInput"
               
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                placeholder="Enter Email Otp"
                required
                value={veryfyotp || ''}
                onChange={(e)=>{setveryfyotp(e.target.value)}}
              />
            </div>
           
            <button
              type="submit"
              
              className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-green-700 sm:w-fit hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-gray-300 dark:bg-green-600 dark:hover:bg-success-700 dark:focus:ring-green-800"
            >
              Send message
            </button>
          </form>
        </div>
      </section>
    )
}
export default Veryfyotp;