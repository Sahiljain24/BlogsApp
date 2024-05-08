const express = require("express");

const router = express.Router();


const{commentController} =require("../controller/commentController");
const { postController, getAllPost } = require("../controller/postController");

router.post("/comment/create",commentController);
router.post("/post/create",postController)
router.get("/posts",getAllPost)
 
module.exports =router;