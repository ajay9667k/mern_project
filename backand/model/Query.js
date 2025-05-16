const{Schema,model, Types}= require("mongoose")
 const QuerySchema=new Schema({
    QuerEmail:String,
    Query:String,
    QueryStatus:{type:String,default:"unread"}
})

module.exports=model("UserQuery",QuerySchema)


