"use strict"

const express = require("express")
const router = require("./lib/portofolio_api")
const app = express()

const PORT = 3000

function setServer(app) {

	app.set("view engine", "hbs")
	app.use(express.static("public"))
	app.use(express.urlencoded( {extended: true} ))

	app.use(express.json())
	app.use(router)
	app.use((err, req, resp, _next) => {
		resp
			.status(err.status || 500)
			.json({
				message: err.message
			})
	})

}

setServer(app)
app.listen(PORT, () => {
	console.log("Listening in " + PORT)
})

module.exports = {
	setServer
}
