const ticket=require("../models/ticket")
const joi = require("joi")
const jwt = require('jsonwebtoken');

exports.selectMyTicket= (request,response)=>{

    const knex = request.app.locals.knex

    const ticketCode = request.body.ticketCode

   


    knex
    .select('ticket.Code as Ticket Code','passenger.Code as Passenger Code','passenger.Name as Passenger Name' , 'trip.Code as Trip Code','trip.DepTime as Departure Time','trip.ArTime as Arrival Time','trip.From as From','trip.To as To','ticket.SeatNumber as Seat Number','bus.Code as Bus Code','bus.BusClass as Bus Class')
    .from('ticket')
    .where('ticket.Code', '=', ticketCode)
    .where('ticket.is_deleted','=','0'  )
    .where('passenger.is_deleted','=','0'  )
    .where('creditcard.is_deleted','=','0'  )
    .where('trip.is_deleted','=','0'  )
    .where('bus.is_deleted','=','0'  )


    .innerJoin('passenger','ticket.passenger_id', 'passenger.id')    
    .innerJoin('creditcard','ticket.creditcard_id', 'creditcard.id')    
    .innerJoin('trip','ticket.trip_id', 'trip.id')    
    .innerJoin('bus','ticket.trip_bus_id', 'bus.id')    

    
     .then(ticket => {
        response.status(200).json(ticket)
    })
    .catch(error => {
        console.log(error);
        response.status(500).json({
            status: "error",
            msg: "500 Internal Server Error"
        })
    })

}






exports.selectTicket= (request,response)=>{

    const knex = request.app.locals.knex

    knex("ticket")
    .select("Code", "passenger_id", "creditcard_id", "trip_id", "trip_bus_id")
    .then(ticket => {
        response.status(200).json(ticket)
    })
    .catch(error => {
        console.log(error);
        response.status(500).json({
            status: "error",
            msg: "500 Internal Server Error"
        })
    })

}



exports.addTicket=(request,response)=>{

    const knex = request.app.locals.knex

    const passenger_id = request.body.passenger_id
    const creditcard_id = request.body.creditcard_id
    const trip_id = request.body.trip_id
    const trip_bus_id = request.body.trip_bus_id
    const Code = request.body.Code
    const SeatNumber = request.body.SeatNumber

if(!passenger_id||!creditcard_id||!trip_id||!trip_bus_id||!Code||!SeatNumber){
    return response.status(400).json({
        status: "error",
        msg: "400 Bad Request"
    })

}


const ticket2= new ticket (passenger_id , creditcard_id , trip_id , trip_bus_id , Code,SeatNumber)
const Scheme=joi.object({
    passenger_id : joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    creditcard_id :joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    trip_id : joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    trip_bus_id :joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    Code :joi.string().not().empty().min(1).max(20).pattern(/[0-9]{1,20}/).required(),      
    SeatNumber: joi.string().min(1).max(4).required(),


})

const joiErrorr= Scheme.validate(ticket2)
if (joiErrorr.error) {

    console.log(joiErrorr.error.details);
    return response.status(400).json({
        status: "error",
        msg: "400 Bad Request JOI"
    })
}

knex('ticket')
.insert({
    passenger_id : ticket2.passenger_id,
    creditcard_id : ticket2.creditcard_id,
    trip_id : ticket2.trip_id,
    trip_bus_id : ticket2.trip_bus_id,
    Code : ticket2.Code,
    SeatNumber : ticket2.SeatNumber,

})
.then(data=>{
    response.status(201).json({
        status: "ok",
        msg: "Created"

    })


})
.catch(error=>{
    console.log(error);
    response.status(400).json({
        status: "error",
        msg: "400 Bad Request ADD trip"
    })
})

}

exports.updateTicket = (request, response) => {
    const knex = request.app.locals.knex

    const passenger_id = request.body.passenger_id
    const creditcard_id = request.body.creditcard_id
    const trip_id = request.body.trip_id
    const trip_bus_id = request.body.trip_bus_id
    const Code = request.body.Code
    const SeatNumber = request.body.SeatNumber

if(!passenger_id||!creditcard_id||!trip_id||!trip_bus_id||!Code||!SeatNumber){
    return response.status(400).json({
        status: "error",
        msg: "400 Bad Request"
    })

}


const ticket2= new ticket (passenger_id , creditcard_id , trip_id , trip_bus_id , Code,SeatNumber)
const Scheme=joi.object({
    passenger_id : joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    creditcard_id :joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    trip_id : joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    trip_bus_id :joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    Code :joi.string().not().empty().min(1).max(20).pattern(/[0-9]{1,20}/).required(),      
    SeatNumber: joi.string().min(1).max(4).required(),


})

const joiErrorr= Scheme.validate(ticket2)
if (joiErrorr.error) {

    console.log(joiErrorr.error.details);
    return response.status(400).json({
        status: "error",
        msg: "400 Bad Request JOI"
    })
}

    knex('ticket')
        .where('Code', '=', ticket2.Code)
        .update({
            passenger_id : ticket2.passenger_id,
            creditcard_id : ticket2.creditcard_id,
            trip_id : ticket2.trip_id,
            trip_bus_id : ticket2.trip_bus_id,
            Code : ticket2.Code,
            SeatNumber : ticket2.SeatNumber,
        })
        .then(data => {
            response.status(200).json({
                status: "ok",
                msg: "updated"
            })
        })
        .catch(err => {
            console.log("error");

            response.status(500).json({
                status: "error",
                msg: "500 Internal Server Error"
            })
        })

}




exports.deleteTicket = (request, response) => {
    const knex = request.app.locals.knex


    knex('ticket')
        .where('Code', '=', request.body.Code)
        .update({
            is_deleted: '1',
        })
        .then(data => {
            response.status(200).json({
                status: "ok",
                msg: "deleted"
            })
        })
        .catch(err => {
            console.log(err);
        })
}

exports.restoreTTicket = (request, response) => {
    const knex = request.app.locals.knex


    knex('ticket')
        .where('code', '=', request.body.Code)
        .update({
            is_deleted: '0',
        })
        .then(data => {
            response.status(200).json({
                status: "ok",
                msg: "restored"
            })
        })
        .catch(err => {
            console.log("err");
        })
}