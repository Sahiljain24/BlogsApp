const Like = require("../models/liseController");
const Post = require("../models/postController")

exports.likeController = async(res,res)=>{
    try{
      const {post,user}= req.body;
       const like = new Like({
        post,user
       });
       const saveLike = await like.save();
       const updatePost = await Post.findByIdAndUpdate(post,{$push:{likes:lsaveLike._id}},{new:true}).populate("likes").exec();
       res.json({
        
       })
    }
    catch(err){
         console.log(err);
         res.status(500).json({
            error:"Not able to Like"
         })
    }
}