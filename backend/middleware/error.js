const Errorhandler = require("../utils/errorhandler");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500;
    err.messages = err.messages || "Internal Server Error";

   // Wrong Mongodb Id error
   if (err.name === "CastError") {
     const message = `Resource not found. Invalid: ${err.path}`;
     err = new Errorhandler(message, 400);
    }

    res.status(err.statusCode).json({
        success: false,
        messages:err.messages,
      });
};