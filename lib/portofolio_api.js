"use strict"

const router = require("express").Router()

router.get("/", (req,res, next) => {
	res.render("homePage")
})

router.get("/timeline", (req,res, next) => {
	res.render("timeline")
})


module.exports = router