const mongoose = require("mongoose");

require("dotenv").config();
const dbConnect =()=>{

    mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
    })
    .then(() => {
        console.log("DB CONNECTED SUCCESSFULLY");
    })
    .catch((err)=>{
        console.log("DB connection failed");
        console.log(err);
        process.exit(1);
    }) 
}

module.exports=dbConnect;