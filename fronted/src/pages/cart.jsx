import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Deletecart,totalcart } from "../../features/Carts/CartSlice";
import { useEffect } from "react";

const Cart =()=>{
    const Cartvalue= useSelector((state)=>state.Cart.ProductCart)
    const Carttotal=useSelector((state)=>state.Cart)
    
    
    const dispatch=useDispatch()

     useEffect(() => {
    dispatch(totalcart());
  });
    return(
        <div>
               <div className="min-h-screen bg-gray-100 p-6">
        <h1 className="text-3xl font-bold mb-6 text-center">Your Cart</h1>

        {
          Cartvalue.length===0 ? <>
          <h1 className="text-center text-3xl font-bold">
              You Cart Is Empty..🛒
            </h1>
            <p className="text-center text-blue-600 text-xl">
              {" "}
              <Link to={"/collection"}>Continue Shopping</Link>
            </p>
          </>  :
          <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
            {/* Cart Item 1 */}
            {Cartvalue.map((value, index) => (
              <div
                className="flex items-center justify-between border-b py-4"
                key={index}
              >
                <div className="flex items-center gap-4">
                  <img
                    src={`/uploads/${value.ProductImage}`}
                    alt="Product"
                    className="w-20 h-20 object-contain rounded"
                  />
                  <div>
                    <h2 className="font-semibold text-lg">
                      {value.ProductName}
                    </h2>
                    <p className="text-sm text-gray-500">
                      ₹{value.ProductPrice}
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <p>Qty: {value.quantity}</p>
                  <p className="font-semibold">
                    ₹  {value.quantity*value.ProductPrice}
                  </p>
                </div>

                <button
                  className="text-red-500 hover:text-red-700 transition"
                  onClick={()=>{dispatch(Deletecart(value._id))}}
                >
                  Delete
                </button>
              </div>
            ))}

            {/* Total & Checkout */}
            <div className="text-right mt-6">
              <h2 className="text-xl font-bold">
                Total Product Qty : {Carttotal.Quantity}
              </h2>
              <h2 className="text-xl font-bold">
                Total Price : ₹ {Carttotal.Price}
              </h2>
              <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition duration-300">
                Proceed to Checkout
              </button>
            </div>
          </div>
        }
          
            
        
        
          
        
      </div>                                 
                                            
        </div>
    )
}
export default Cart;