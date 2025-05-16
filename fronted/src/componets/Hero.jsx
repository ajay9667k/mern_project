import Tshirt from "../assets/tshirt.jpg"
const Hero=()=>{
    return(
     <div>
         <div className="flex flex-col sm:flex-row border border-gray-400">
           {/* Left side */}
           <div className="w-full sm:w-1/2 flex items-center justify-center">
           <div className="text-gray-500">
                <div className="flex item-center gap-2">
                     <p className="w-8 mt-2 md:w-14 sm:mt-4 h-[2px] bg-red-600"></p>
                     <p className="font-medium text-sm md:text-xl">
                        OUR BESTSELLER
                     </p>
                </div>
        <h1 className="text-3xl sm:py-3 lg:text-6xl text-black">Latest Arrivals</h1>
        <div className="flex item-center md:mt-4 gap-2">
             <p className="font-semibold text-sm md:text-xl">SHOP NOW</p>
             <p className="w-8 mt-2 sm:mt-4 md:w-14 h-[2px] bg-red-600"></p>
        </div>
           </div>
           </div>
           {/* {Right side} */}
           <img src={Tshirt} alt="" className="w-full sm:w-1/2 h-[450px]" />
         </div>
     </div>
    )
}
export default Hero;