const mongoose = require("mongoose");
//const dburl = "mongodb+srv://EC:EC@store.jwrik.mongodb.net/users";
const dburl= "mongodb+srv://EC:EC@store.jwrik.mongodb.net/users";

mongoose.connect(dburl,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
})
.then(()=>{
    console.log("Database Connected");
})
.catch((err)=>{
    console.log("Database Not Connected",err);
})