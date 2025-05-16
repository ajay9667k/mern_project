const mongoose= require("mongoose")
const{Schema,model}= mongoose
const RegSchema= Schema({
    FirstName:String,
    LastName:String,
    Email:String,
    Passworld:String
})




module.exports = model("Regdata",RegSchema)