const express = require("express")
const app = express()
const cors = require("cors")
const morgan = require("morgan")
const bodyPareser = require("body-parser")
const conn = require("./db/connection")


const ADRouter = require("./routes/admin")
const PassRouter = require("./routes/pass")
const tripRouter = require("./routes/trip")
const CreditRouter = require("./routes/credit")
const BusRouter = require("./routes/bus")
const TicketRouter = require("./routes/ticket")
const PaymentRauter=require("./routes/payment")

//const passengerRouter = require("./routes/passenger")
app.use(morgan("dev"))
app.use(cors())
app.use(bodyPareser.urlencoded({
    extended: false
}))
app.use(bodyPareser.json())

const knex = conn.openConnection()

app.locals.knex = knex


app.use("/AD",ADRouter)
app.use("/pass",PassRouter)
app.use("/trip",tripRouter)
app.use("/credit",CreditRouter)
app.use("/bus",BusRouter)
app.use("/ticket",TicketRouter)
app.use("/payment",PaymentRauter)

app.use((req, res, next) => {

    const error = new Error("Page not Found")
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    if (error.status = 404) {
        res.status(404).json({
            status: "error",
            msg: "Page not Found!!!"
        })
    }
})


module.exports = app