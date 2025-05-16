
const signupschema= require("../model/Regdata")
const Querydata= require("../model/Query")
const Regdata=async (req,res)=>{
   const {Firstname,lastname,email,pass}= req.body
   const signrecored= new signupschema({
    FirstName:Firstname,
    LastName:lastname,
    Email:email,
    Passworld:pass
   })

  await signrecored.save()
  res.status(200).send({message:"succuessfuly register"})

}
const signup= async (req,res)=>{
    const{email,pass}= req.body
   const Userchak= await signupschema.findOne({Email:email})
   if(Userchak!==null){
      if(Userchak.Passworld===pass){
        res.status(200).json({data:Userchak,message:"Successfuly Login"})
      }
      else{
        res.status(404).json({message:"Email and Passworld Did not Match"})
      }
   }else{
    res.status(404).json({message:"Email and Passworld Did not Match"})
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





module.exports={
    Regdata,
    signup,
    Qdata,
   
}