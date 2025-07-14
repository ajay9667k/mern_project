
import { useEffect, useState } from "react";
import Title from "../componets/title";
import { Link } from "react-router-dom";

const Latest=()=>{
   
    const [latest, setlatest] = useState([]);

    useEffect(()=>{
        fetch(`/api/latestcollection`).then((res)=>{
            return res.json()
        }).then((result)=>{
           setlatest(result)
          
        })
    },[])
    return(
          <div className="min-h-40 bg-gray-100 p-6">
      <h1 className="text-center"><Title text_one={"Latest"} text_two={"Collections"} /></h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {latest.map((items) => (
            <Link to={`/showproduct/${items._id}`}>
              <div className="bg-white rounded-xl shadow p-4">
                <img
                  src={`/uploads/${items.ProductImage}`}
                  alt="Product"
                  className="w-full h-80 object-fill rounded-md mb-3"
                />
                <h3 className="text-lg font-semibold">{items.ProductName}</h3>
                <p className="text-gray-600">{items.ProductDescription}</p>
                <p className="text-blue-600 font-bold mt-2">
                  ₹ {items.ProductPrice}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
    )
}
export default Latest;