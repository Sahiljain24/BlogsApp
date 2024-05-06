const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    post:{
        type:mongoose.Schema.ObjectId,
        ref:"Post",
    },
    user:{
        type:String,
        required:true,
    },
     
    
})

module.exports = mongoose.model("Comment",commentSchema);