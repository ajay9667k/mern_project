const Adminquerycollection= require("../model/Query")
const newproductdata=require("../model/AdminProduct") 
const Admindata= async (req,res)=>{
    
   const Pimage= req.file.filename
    
    const{prductN,ProductDes,ProductP,ProductRa,ProductBest,Size,}=req.body
    console.log(req.body)
//  const recored=  new newproductdata({
//         ProductName: prductN,
//         ProductDescription: ProductDes,
//         ProductPrice: parseFloat(ProductP),
//         ProductRating:parseFloat(ProductRa),
//         ProductSizes:Size, 
//         ProductBestSeller: ProductBest,
//          ProductImage:Pimage,
//     })

   // await recored.save()
   //  res.status(200).json({message:"succuessfuly productdata insert"})
}
const showproductdata= async(req,res)=>{
  const showrecored= await newproductdata.find()
  res.json(showrecored)
  
}

const deletprdata=async (req,res)=>{
   const Did= req.params.id
      await newproductdata.findByIdAndDelete(Did)
      
    res.json({message:"succuessfuly delete"})
}

const Showupdate= async (req,res)=>{
    const updatedata= req.params.id
   const prdata= await newproductdata.findById(updatedata)
   res.status(200).json(prdata)
}

const Updateadmindata=async (req,res)=>{
   try {
    const upid= req.params.id
   const {Name,des,price,ratting,size,bestseller,Stock}=req.body
     await newproductdata.findByIdAndUpdate(upid,{
    ProductName: Name,
    ProductDescription: des,
    ProductPrice: price,
    ProductRating: ratting,
    ProductSizes:size ,
    ProductStock:Stock,
    ProductBestSeller: bestseller,
     })

     res.status(200).json({message:"succuessfuly update"})
   } catch (error) {
    res.status(500).json({message:"INTERNAL ERORR"})
   }
}

const fornteddata=async (req,res)=>{
   const frontedproduct=await newproductdata.find()
   res.status(200).json(frontedproduct)
}

const Querydata= async (req,res)=>{
   const data= await Adminquerycollection.find()
   res.status(200).json(data)
}

const Queryremove=async (req,res)=>{
try {
   const abc= req.params.id
   await Adminquerycollection.findByIdAndDelete(abc)
   res.status(200).json({message:"successfuly delete"})
} catch (error) {
    res.status(500).json({message:"INTERNAL ERROR"})
}


}







module.exports={
    Admindata,
    showproductdata,
    deletprdata,
    Showupdate,
    Updateadmindata,
    fornteddata,
    Querydata,
    Queryremove
  
}