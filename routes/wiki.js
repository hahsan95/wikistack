const express = require("express");
const router = express.Router();
const {addPage, wikiPage} = require("../views");
const { db, Page, User } = require('../models');

router.get("/", async (req, res, next) => {
    const page = await Page.findAll();
    
    res.send(wikiPage(page));
});

router.post("/", async (req, res, next) => {

    res.json(req.body);
});

router.get("/add", async (req, res, next) => {
    res.send(addPage());
});

module.exports = router;

