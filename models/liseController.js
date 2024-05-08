const mongoose = require("mongoose");

const likeSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
     
    
})

module.exports = mongoose.model("Like",likeSchema);