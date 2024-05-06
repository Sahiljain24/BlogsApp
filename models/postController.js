const mongoose = require("mongoose");
const { type } = require("os");
const { title } = require("process");

const postSchema =mongoose.Schema({
    title:{
         type:String,
         required:true,
    },
    description:{
        type:String,
        required:true,
   },
   comment:{
       type:mongoose.Schema.ObjectId,
       ref:"Comment"
   },
   like:{
    type:mongoose.Schema.ObjectId,
    ref:"like"
}
})