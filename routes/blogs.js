const express = require("express");

const router = express.Router();

router.get("/",(req,res)=>{
    res.send(`<h1>ThIS IS FIRST PAGE</h1>`)
})

module.exports =router;