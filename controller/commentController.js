const Comment = require("../models/commentController");
const Post = require("../models/postController");


exports.commentController =async(req,res)=>{
    try{
         const{post,user,body} =req.body;
          
         const comment =new Comment({
            post,user,body
         });
         const saveComment = await comment.save();
         const updatePost = await Post.findByIdAndUpdate(post,{$push :{comment:saveComment._id}},{new:true}).populate("comments").exec();

         res.status(200).json({
            post:updatePost,
         })
    }
    catch(err){
         console.log(err);
         res.status(404).json({
            error:"ERROR while saving comments"
         });
    }
}