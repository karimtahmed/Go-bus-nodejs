const ADRouter = require("express").Router()
const ADController = require("../controllers/admin")
const TripController = require("../controllers/trip")
const PasController = require("../controllers/user")
const PaymentController = require("../controllers/payment")
const BusController = require("../controllers/bus")
const CreditController = require("../controllers/credit")
const TicketConroller = require("../controllers/ticket")


const MiddelWares = require("../util/middelwares")
// -------ADMIN--------------
ADRouter.get("/",ADController.selectADs)
ADRouter.post("",ADController.addAD)
ADRouter.post("/login",ADController.login)

ADRouter.put("/:id",MiddelWares.checkADAuth,ADController.updateAD)
ADRouter.delete("/:id",MiddelWares.checkADAuth,ADController.deleteAd)
ADRouter.patch("/:id",MiddelWares.checkADAuth,ADController.restoreAD)
//----------USER-------------
ADRouter.get("/user/",MiddelWares.checkADAuth,PasController.selectUser)
ADRouter.post("/user/",MiddelWares.checkADAuth,PasController.addUser)
ADRouter.put("/user/:id",MiddelWares.checkADAuth,PasController.updatePas)
ADRouter.delete("/user/:id",MiddelWares.checkADAuth,PasController.deletePas)
ADRouter.patch("/user/:id",MiddelWares.checkADAuth,PasController.restorePas)



//----------TRIP-------------

ADRouter.get("/trip/",MiddelWares.checkADAuth,TripController.selectTrip)
ADRouter.get("/trip/detail/",MiddelWares.checkADAuth,TripController.TripDetail)

ADRouter.post("/trip",MiddelWares.checkADAuth,TripController.addTrip)
ADRouter.put("/trip/:id",MiddelWares.checkADAuth,TripController.updateTrip)
ADRouter.delete("/trip/:id",MiddelWares.checkADAuth,TripController.deleteTrip)
ADRouter.patch("/trip/:id",MiddelWares.checkADAuth,TripController.restoreTrip)



//----------PAYMENT-------------


ADRouter.get("/payment/",MiddelWares.checkADAuth,PaymentController.selectPayment)

ADRouter.post("/payment/",MiddelWares.checkADAuth,PaymentController.addPayment)

ADRouter.put("/payment/:id",MiddelWares.checkADAuth,PaymentController.updatePayment)




//----------BUS-------------

ADRouter.get("/bus",MiddelWares.checkADAuth,BusController.selectBus)
ADRouter.post("/bus/",MiddelWares.checkADAuth,BusController.addBus)
ADRouter.put("/bus/:id",MiddelWares.checkADAuth,BusController.updateBus)
ADRouter.delete("/bus/:id",MiddelWares.checkADAuth,BusController.deleteBus)
ADRouter.patch("/bus/:id",MiddelWares.checkADAuth,BusController.restoreBus)


//----------CREDIT-------------


ADRouter.post("/credit",MiddelWares.checkADAuth,CreditController.addCredit)
ADRouter.put("/credit/:id",MiddelWares.checkADAuth,CreditController.updateCredit)

ADRouter.delete("/credit/:id",MiddelWares.checkADAuth,CreditController.deleteCredit)
ADRouter.patch("/credit/:id",MiddelWares.checkADAuth,CreditController.restoreCredit)

//----------TICKET-------------


ADRouter.get("/ticket/",MiddelWares.checkADAuth,MiddelWares.checkADAuth,TicketConroller.selectTicket)
ADRouter.post("/ticket",MiddelWares.checkADAuth,TicketConroller.addTicket)
ADRouter.put("/ticket/:id",MiddelWares.checkADAuth,TicketConroller.updateTicket)
ADRouter.delete("/ticket/:id",MiddelWares.checkADAuth,TicketConroller.deleteTicket)
ADRouter.patch("/ticket/:id",MiddelWares.checkADAuth,TicketConroller.restoreTTicket)



module.exports = ADRouter
