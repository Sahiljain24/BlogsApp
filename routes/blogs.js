const express = require("express");

const router = express.Router();


const{commentController} =require("../controller/commentController");
const { postController, getAllPost } = require("../controller/postController");
const { likeController, unLikeController } = require("../controller/likeController");

router.post("/comment/create",commentController);
router.post("/post/create",postController)
router.get("/posts",getAllPost)
router.get("/likes/like",likeController)
router.delete("/likes/unlike",unLikeController)

module.exports =router;