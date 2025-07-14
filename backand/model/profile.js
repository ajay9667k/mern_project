const mongoose= require("mongoose")
const{Schema,model}=mongoose
const profilecollection=Schema({
    UserProfile:String
})




module.exports=model("/Profilepic",profilecollection)