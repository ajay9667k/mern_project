const Singalcollection=require("../model/AdminProduct")
const signupschema= require("../model/Regdata")
const Querydata= require("../model/Query")
const profiledata= require("../model/profile")
const jwt=require("jsonwebtoken")
const bcrypt = require("bcrypt")
const nodemailer= require("nodemailer")



const Regdata=async (req,res)=>{
   const {Firstname,lastname,email,pass}= req.body
   if(!Firstname || !lastname || !email || !pass){
     res.status(500).json({message:"All filed are Required 👨‍🔧"})
   }
   const allredysign=await signupschema.findOne({Email:email})
   if(allredysign){
    return res.status(200).json({message:"you have allredy Account 😊"})
   }
   const hashpass= await bcrypt.hash(pass,10)
   const Otp= Math.floor(100000 + Math.random() * 900000).toString();
   const signrecored=await new signupschema({
    FirstName:Firstname,
    LastName:lastname,
    Email:email,
    Passworld:hashpass,
    Isveryfy:Otp,
   })

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
       to:email,
       subject:"Otp",
       text:"otp", // plain‑text body
       html:Otp, // HTML body
     });
   
   
  await signrecored.save()

  res.status(200).send({message:"succuessfuly send otp",EmailOtp:Otp,ema:email})
  
}
const signup= async (req,res)=>{

    try {
      const{email,pass}= req.body
      
     const Userchak= await signupschema.findOne({Email:email})
     
      if(!Userchak)
        {
          res.status(400).json({message:"User no found"})}
      if(Userchak.Isveryfy){
              const matchpass =await bcrypt.compare(pass,Userchak.Passworld)
        if(!matchpass){
          res.status(400).json({message:"Invalid credentials"})
        }
        

        const token =jwt.sign({id:Userchak._id},process.env.JWT_SECRET,{
          expiresIn:"5d"
        })
        res.status(200).json({data:Userchak,tokens:token,message:"Successfully Login"})
     
          }
        
   
    } catch (error) {
      res.status(500).json({message:"INTERNAL ERROR"})
    }
}
 
 const Qdata=async (req,res)=>{
  try {
     const{QEmail,Uquery}=req.body
  const Queryrecored= new Querydata({
     QuerEmail:QEmail,
    Query:Uquery,
  })
  await Queryrecored.save()
  res.status(200).json({message:"Successfully Send Your Query"})
  } catch (error) {
    res.status(500).json({message:"Internal Server Error"})
  }
 
}

const Singaldata=async (req,res)=>{
 try {
  const singalproduct= req.params.id
 const data= await Singalcollection.findById(singalproduct)
 res.status(200).json(data)
 } catch (error) {
   res.status(500).json({message:"INTERNAL ERROR"})
 }
}

const profilephoto=async (req,res)=>{
   const profilepic= req.file.filename
 const recored= new profiledata({
      UserProfile:profilepic
  })
  await recored.save()
  res.status(500).json({message:"profile photo uplode"})
}
const getphoto= async(req,res)=>{
 const data= await profiledata.find()
 res.status(200).json(data)
}

const newcollection=async (req,res)=>{
 try {
  const collection= await Singalcollection.find({ProductStock:"In-Stock"}).sort({_id:-1}).limit(5);
  res.status(200).json(collection)
 } catch (error) {
  res.status(500).json({message:"INTERNAL SERVER ERROR "})
 }

}

const Bestseller=async (req,res)=>{
 try {
  const Best= await Singalcollection.find({
    ProductBestSeller:true
  })
  res.status(200).json(Best)
 } catch (error) {
  res.status(500).json({message:"INTERNAL SERVER ERROR "})
 }

}

const findotpemail=async (req,res)=>{
  try {
    const idema= req.params.id
 
  const deta=await signupschema.findOne({Email:idema})
   res.status(200).json({maindata:deta,message:"fetch all data"})
  } catch (error) {
    res.status(500).json({maindata:deta,message:"fetch not data"})
  }
}

const veryfyotp=async(req,res)=>{
  
 try {
   const getotp=parseFloat(req.body.data)
  const usrdata=await signupschema.findOne({Isveryfy:getotp})
  
     if(usrdata.Isveryfy===getotp){
      return res.status(200).json({message:"otp match"})
       
     }else{
     return res.status(200).json({message:"otp not match"})
     }
 } catch (error) {
  return res.status(500).json({message:"INTERNAL ERROR"})
 }
     
     
}


module.exports={
    Regdata,
    signup,
    Qdata,
   Singaldata,
   profilephoto,
   newcollection,
   Bestseller,
   getphoto,
   findotpemail,
   veryfyotp
}