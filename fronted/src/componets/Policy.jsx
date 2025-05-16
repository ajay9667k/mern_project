import returntrust from "../assets/return.png"
import returnpolicy from "../assets/badge.png"
import customercatre from "../assets/custmorycare.png"
const Policy = () => {
  return (
    <div>
      <div className="flex flex-col sm:flex-row justify-center items-center gap-12 text-center sm:gap-40 mt-2">
         <div>
            <img src={returntrust} className='w-12 m-auto mb-2' alt="" />
            <p className='font-semibold'>Easy Exchange Policy</p>
            <p className='text-gray-400'>We Offer hassle free exchange policy</p>
         </div>
         <div>
           <img src={returnpolicy} className='w-12 m-auto mb-2' alt="" />
            <p className='font-semibold'>7 Days Return Policy</p>
            <p className='text-gray-400'>We provide 7 days free return policy </p>
         </div>
         <div>
           <img src={customercatre} className='w-12 m-auto mb-2' alt="" />
            <p className='font-semibold'>Best customer support</p>
            <p className='text-gray-400'>We provide 24/7 customer support</p>
         </div>
      </div>
    </div>
  );
};
export default Policy;
