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
   comments:{
       type:mongoose.Schema.Types.ObjectId,
       ref:"Comment"
   },
   likes:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Like"
}
})

module.exports = mongoose.model("Post",postSchema);