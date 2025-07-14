import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {Addtocart} from "../../features/Carts/CartSlice"


const Singlecollection=()=>{
  const dispatch= useDispatch()
  const[Singaldata,setSingaldata]= useState("")
  const abc= useParams()
  const Sid=abc.id
  useEffect(()=>{
      fetch(`/api/Singalproduct/${Sid}`).then((res)=>{
         return res.json()
      }).then((result)=>{
        setSingaldata(result)
       
      })
  },[])
    return(
       <div>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg shadow-md grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left: Product Image */}
          <div className="flex justify-center items-center">
            <img
              src={`/uploads/${Singaldata.ProductImage}`}
              alt="Product"
              className="rounded-lg object-cover"
            />
          </div>

          {/* Right: Product Details */}
          <div>
            <h2 className="text-3xl font-bold mb-2">{Singaldata.ProductName}</h2>
            <p className="text-xl text-green-600 font-semibold mb-4">₹ {Singaldata.ProductPrice}</p>

            <p className="text-gray-700 mb-4">
             {Singaldata.ProductDescription}
            </p>

            {/* Size Options */}
            <div className="mb-4">
              <h3 className="font-semibold mb-2">Select Size:</h3>
              <div className="flex gap-2">
                {Singaldata.ProductSizes && Singaldata.ProductSizes.map((value)=>(
                <button className="border px-4 py-1 rounded hover:bg-gray-200">
                  {value}
                </button>
                ))}
                
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 mt-6">
              <button onClick={()=>{dispatch(Addtocart(Singaldata))}} className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">
                Add to Cart
              </button>
              <button className="border border-red-500 text-red-500 px-6 py-2 rounded hover:bg-red-100 transition">
                Add to Wishlist
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}
export default Singlecollection;