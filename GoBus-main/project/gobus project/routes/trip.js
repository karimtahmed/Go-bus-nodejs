const tripRouter = require("express").Router()

const TripController = require("../controllers/trip")


tripRouter.get("/",TripController.TripDetail)

module.exports = tripRouter

