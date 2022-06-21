const PasRouter = require("express").Router()
const PasController = require("../controllers/user")
 const MiddelWares = require("../util/middelwares")

 const TripController = require("../controllers/trip")
 const PaymentController = require("../controllers/payment")
 const CreditController = require("../controllers/credit")
 const TicketConroller = require("../controllers/ticket")
 
 
 
 //----------USER-------------
 PasRouter.get("/",MiddelWares.checkPasAuth,PasController.ShowInfo)
 PasRouter.post("/",MiddelWares.checkPasAuth,PasController.addUser)
 PasRouter.post("/login",PasController.login)
 PasRouter.put("/:id",MiddelWares.checkPasAuth,PasController.updatePas)
 PasRouter.delete("/:id",MiddelWares.checkPasAuth,PasController.deletePas)
 PasRouter.patch("/:id",MiddelWares.checkPasAuth,PasController.restorePas)
 
 //----------PAYMENT-------------
 
  
 PasRouter.post("/payment/",MiddelWares.checkPasAuth,PaymentController.addPayment)
 PasRouter.put("/payment/:id",MiddelWares.checkPasAuth,PaymentController.updatePayment)
 
 
 
 //----------SHOW ALL TRIP DETAILS-------------
 PasRouter.get("/trip/detail/",MiddelWares.checkPasAuth,TripController.TripDetail)

 
 //----------CREDIT-------------
 
 
 PasRouter.post("/credit",MiddelWares.checkPasAuth,CreditController.addCredit)
 PasRouter.put("/credit/:id",MiddelWares.checkPasAuth,CreditController.updateCredit)
 
 PasRouter.delete("/credit/:id",MiddelWares.checkPasAuth,CreditController.deleteCredit)
 
 //----------TICKET-------------
//  PasRouter.get("/ticket",TicketConroller.selectTicket)
PasRouter.get("/ticket",TicketConroller.selectTicket)

 PasRouter.get("/ticket/tic",TicketConroller.selectMyTicket)
 PasRouter.post("/ticket",MiddelWares.checkPasAuth,TicketConroller.addTicket)
 PasRouter.put("/ticket/:id",MiddelWares.checkPasAuth,TicketConroller.updateTicket)
 PasRouter.delete("/ticket/:id",MiddelWares.checkPasAuth,TicketConroller.deleteTicket)
 
 
module.exports = PasRouter