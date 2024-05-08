const Post= require("../models/postController");

exports.postController=async(req,res)=>{
    try{
         const {title,description} =req.body;
         const post = new Post( {
            title,description
         });
         const savePost = await post.save();
         res.json({
            post:savePost,
         })
    }
    catch(err){
        console.error(err);
        res.status(404).json({
            error:"ERROR while saving post"
            
        })
    }
}

exports.getAllPost = async(req,res)=>{
    try{
        const getPosts =await Post.find().populate("likes").populate("comments").exec();
        res.json({
              post:getPosts,
        })
    }
    catch(err){
          console.log(err);
          res.status(500).json({
            error:"Can;t get the posts"
          })
    }
}