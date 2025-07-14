const express= require("express")
const app=express()
const dotenv= require("dotenv")
dotenv.config()
const cors =require("cors")
const bodyParser = require("body-parser")
const path =require("path")


app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

const apirouter= require("./router/api")
const mongoose= require("mongoose")
mongoose.connect(process.env.DV_STRING).then(()=>{
    console.log("DB SUCCUESSFULLY CONNERCT")
}).catch((error)=>{
  console.log(error)
})

app.use("/api",apirouter)
app.use("/uploads", express.static(path.join(__dirname, "/public/uploads")));





app.listen(process.env.PORT,()=>{
    console.log(`RUNNIG ON PORT ${process.env.PORT}`)
})