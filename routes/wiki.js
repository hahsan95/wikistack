const express = require("express");
const router = express.Router();
const {addPage, wikiPage} = require("../views");


router.get("/", async(req,res,next)=>{
    res.send("wikiPage()")
});


router.post("/", async(req,res,next)=>{
    res.send("nothing")
});


router.get("/add", async(req,res,next)=>{
    res.send(addPage())
});


module.exports = router;

//lamine