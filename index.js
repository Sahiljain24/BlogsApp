const express = require("express");
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

app.use(express.json());

const blogs = require("../Blog app/routes/blogs");
app.use("/api/v1",blogs);
const dbConnect = require("./config/database");
dbConnect();

app.get('/', (req,res)=>{
    res.send(`<h1>HELLO WORLD</h1>`)
})
app.listen(PORT,()=>{
    console.log(`APP is started at ${PORT}`);
})
