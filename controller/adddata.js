const Adminquerycollection= require("../model/Query")
const newproductdata=require("../model/AdminProduct")
const nodemailer= require("nodemailer") 

const Admindata= async (req,res)=>{
    
  try {
    const Pimage= req.file.filename
    const{ title, Dese, Price, Ratting, Size,Bestsaller }=req.body
    
   if(!title || !Dese || !Price || !Ratting || !Size || !Bestsaller || !Pimage){
    res.status(500).json({message:"All filed are Required 👨‍🔧"})
   }

 const recored=  new newproductdata({
        ProductName:title ,
        ProductDescription: Dese,
        ProductPrice: parseFloat(Price),
        ProductRating:parseFloat(Ratting),
        ProductSizes:Size, 
        ProductBestSeller: JSON.parse(Bestsaller),
         ProductImage:Pimage,
    })

   await recored.save()
    res.status(200).json({message:"succuessfuly productdata insert"})
  } catch (error) {
    res.status(500).json({message:"INTERNAL SERVER ERORR 😒"})
  }
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
try {
     const frontedproduct=await newproductdata.find({ProductStock:"In-Stock"})
   res.status(200).json({data:frontedproduct,message:"succuessfuly"})
} catch (error) {
  res.status(500).json({ message: "Internal Server Error 🫤" });
}
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

const replayadmin=async (req,res)=>{
try {
    const queryid= req.params.abc
 const data= await Adminquerycollection.findById(queryid)
 res.status(200).json(data)
} catch (error) {
    res.status(500).json({message:"INTERNAL SERVER ERROR"})
}
}

const replayemail= async (req,res)=>{
  try {
    const{sub,ebody,querydata}= req.body
   const id=req.params.ert
    const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, 
  auth: {
    user: "pensia123ajay@gmail.com",
    pass: "xpncmvcidgbklzxg",
  },
});


  const info = await transporter.sendMail({
    from: '"OnlineShop" <ajay9667k@gmail.com>',
    to:querydata,
    subject:sub,
    text:ebody, // plain‑text body
    html:ebody, // HTML body
  });

      await Adminquerycollection.findByIdAndUpdate(id, {
      QueryStatus: "Read",
    });

    res.status(200).json({ message: "Successfully Reply 😉" });
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error 🫤" });
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
    Queryremove,
    replayadmin,
    replayemail
  
}