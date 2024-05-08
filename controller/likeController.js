const Like = require("../models/liseController");
const Post = require("../models/postController")

exports.likeController = async(req,res)=>{
    try{
      const {post,user}= req.body;
       const like = new Like({
        post,user
       });
       const saveLike = await like.save();
       const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:saveLike._id}},{new:true}).populate("likes").exec();
       res.json({
        post:updatePost,
       })
    }
    catch(err){
         console.log(err);
         res.status(500).json({
            error:"Not able to Like"
         })
    }
};

exports.unLikeController = async(req,res)=>{
    try{
      const {post,like}= req.body;
      const deleteLike = await Like.findByIdAndDelete({post:post,_id:like})
       const updatePost = await Post.findByIdAndUpdate(post,{$pull:{likes:like}},{new:true}).populate("likes").exec();
       res.json({
        post:updatePost,
       })
    }
    catch(err){
         console.log(err);
         res.status(500).json({
            error:"Not able to UnLike"
         })
    }
};