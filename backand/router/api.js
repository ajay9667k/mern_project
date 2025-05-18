const router= require("express").Router()
const Controller=require("../controller/control")
const Addminproductdata=require("../controller/adddata")
const upload=require("../middleware/multerMiddleware")


router.post("/regdata",Controller.Regdata)
router.post("/signupdata",Controller.signup)
router.post("/Adimproduct",upload.single("image"),Addminproductdata.Admindata)
router.get("/showadddata",Addminproductdata.showproductdata)
router.delete("/deletepr/:id",Addminproductdata.deletprdata)
router.get("/showadminupdatedata/:id",Addminproductdata.Showupdate)
router.put("/admindataupdate/:id",Addminproductdata.Updateadmindata)
router.get("/forntedproduct",Addminproductdata.fornteddata)
router.post("/userquery",Controller.Qdata)
router.get("/queryadmindata",Addminproductdata.Querydata)
router.delete("/removequeryt/:id",Addminproductdata.Queryremove)
router.get("/replayqueryadmin/:abc",Addminproductdata.replayadmin)
router.post("/usermailreply/:ert",Addminproductdata.replayemail)


module.exports=router