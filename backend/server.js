const app = require("./app");
const dotenv = require('dotenv');

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
    console.log(`Error: ${err.message}`);
    console.log(`Shutting down the server due to Uncaught Exception`);
    process.exit(1);
  });

  
//Config
dotenv.config({path:"backend/config/config.env"});

const server = app.listen(process.env.port,() => {
    console.log(`Backend is running ${process.env.port}`);
})

//Unhandled Promise Rejection
process.on("unhandledRejection",(err) => {
    console.log(`Error:${err.message}`);
    console.log("Shutting Down Server due to Internal Issue");

    server.close(()=>{
        process.exit(1);
    });
});



