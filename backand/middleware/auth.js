const jwt= require("jsonwebtoken")


const verifyTokens=(req,res,next)=>{
   try {
    const bearerHeader  = req.headers.authorization
   if (bearerHeader !== "Bearer undefined") {
      const token = bearerHeader.split(" ")[1];

      if (!token) {
        return res.status(401).json({ message: "No token found in header" });
      }

      const user = jwt.verify(token, process.env.JWT_SECRET);
      req.token = user;
      return next();
    } else {
     
      return res.status(401).json({ message: "No token provided" });
    }
   } catch (error) {
    return res.status(403).json({ message: "Invalid token or expired token" });
   }
}


module.exports= verifyTokens