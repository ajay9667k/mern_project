import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Left from "./left";
const Productmanage = () => {
 const[prdata,setprdata]= useState([])
  useEffect(()=>{
    fetch("/api/showadddata").then((res)=>{
      return res.json()
    }).then((result)=>{
      setprdata(result)
      
    })
  },[prdata])
  

  function Deletepr(id){
    fetch(`/api/deletepr/${id}`,{
      method:"DELETE",
    }).then((res)=>{
      return res.json()
    }).then((result)=>{
       console.log(result)
    })
  }
  return (
   <div>
      <div className="flex flex-col items-center justify-center gap-3 w-auto mt-5">
        <Left />
        {/* Right */}
        <div className="w-11/12 ">
          <h1 className="text-4xl font-bold text-sky-600 my-4">
            Product Management👤
          </h1>
          
          <Link to={"/addproduct"}>
            <Button variant="contained" color="warning">
              Add Product Here ..😍
            </Button>
          </Link>

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-full my-8">
            {prdata.length === 0 ? (
              <div className="bg-slate-300 p-4">
                <h1 className="text-center text-3xl font-bold">
                  No Products Here..🫤
                </h1>
              </div>
            ) : (
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      Product Image
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Name
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Desc
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Rating
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product Status
                    </th>

                    <th scope="col" className="px-6 py-3">
                      BestSeller
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action-1
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Action-2
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {prdata.map((item,index) => (
                      
                    <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="p-4">
                        <img
                          src={`/uploads/${item.ProductImage}`}
                          className="w-16 md:w-32 max-w-full max-h-full"
                          alt="Apple Watch"
                        />
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.ProductName}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.ProductDescription}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.ProductPrice} ₹
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.ProductRating}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.ProductStock}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        {item.ProductBestSeller ? "Yes" : "No"}
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        <Link to={`/adminproductupdate/${item._id}`}>
                          <Button variant="contained" color="success">
                            Update
                          </Button>
                        </Link>
                      </td>
                      <td className="px-6 py-4 font-semibold text-gray-900 dark:text-white">
                        <Button
                          variant="contained"
                          color="error"
                          onClick={() => {
                            Deletepr(item._id);
                          }}
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
   
  );
};
export default Productmanage;
