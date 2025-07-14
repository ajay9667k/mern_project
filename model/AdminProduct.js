const mogoose= require("mongoose")
const{Schema,model}= mogoose
const Productaddata= Schema({
    ProductName: String,
    ProductDescription: String,
    ProductPrice: Number,
    ProductRating: Number,
    ProductSizes: {
    type: [String],
    default: [],
    },
    ProductStock:{
        type:String,
        default:"Out-Of-Stock"
    },
    ProductBestSeller: Boolean,
    ProductImage:String,
})

module.exports=model("AdminProduct",Productaddata)