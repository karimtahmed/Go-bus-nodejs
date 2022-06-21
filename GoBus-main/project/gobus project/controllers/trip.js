const trip = require("../models/trip")
const joi = require("joi")



exports.TripDetail = (request,response )=>{
    const knex = request.app.locals.knex
    knex
    .select( 'trip.Code as Trip Code','trip.DepTime as Departure Time','trip.ArTime as Arrival Time','trip.From as From','trip.To as To','bus.Code as Bus Code','bus.BusClass as Bus Class','bus.BookedSeats as Booked Seats','bus.AvailSeats as Available Seats')
    .from('trip')
    .innerJoin('bus', 'trip.bus_id', 'bus.id') 
    .where('bus.is_deleted','=','0'  )
.then(trip=>{
response.status(200).json(trip)
    
})
.catch(error=>{
console.log(error);
response.status(500).json({
    status: "error",
    msg: "500 Internal Server Error"
})
})
}

exports.selectTrip = (request,response )=>{
    const knex = request.app.locals.knex
knex("trip")
.select("Code","DepTime","ArTime","From","To")
.then(trip=>{
response.status(200).json(trip)
    
})
.catch(error=>{
console.log(error);
response.status(500).json({
    status: "error",
    msg: "500 Internal Server Error"
})
})
}

exports.addTrip = (request,response)=>{
    const knex = request.app.locals.knex

    const Code= request.body.Code
    const DepTime = request.body.DepTime
    const ArTime = request.body.ArTime
    const bus_id = request.body.bus_id
    const From = request.body.From
    const To = request.body.To

if(!Code||!DepTime||!ArTime||!bus_id||!From||!To){
    return response.status(400).json({
        status: "error",
        msg: "400 Bad Request"
    })

}


const trip2= new trip ("1",Code,DepTime,ArTime,bus_id,From,To)
const Scheme=joi.object({
    id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    Code : joi.string().not().empty().min(1).max(20).pattern(/[0-9]{1,20}/).required(),
    DepTime :joi.string().required().pattern(/[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) (0[0-9]|1[0-9]|2[1-4]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])/),
    ArTime  :joi.string().required().pattern(/[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) (0[0-9]|1[0-9]|2[1-4]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])/),    
    bus_id: joi.number().not().empty().min(1).max(50).required(),
    From:joi.string().not().empty().min(3).max(50).pattern(/[a-z A-Z]{3,50}/).required(),
    To:joi.string().not().empty().min(3).max(50).pattern(/[a-z A-Z]{3,50}/).required(),

})

    const joiErrorr= Scheme.validate(trip2)
    if (joiErrorr.error) {

        console.log(joiErrorr.error.details);
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request JOI"
        })
    }


    knex("trip")
        .insert({
            Code : trip2.Code,
            DepTime : trip2.DepTime,
            ArTime : trip2.ArTime,
            bus_id : trip2.bus_id,
            From : trip2.From,
            To : trip2.To
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


exports.updateTrip = (request, response) => {
    const knex = request.app.locals.knex

    const Code= request.body.Code
    const DepTime = request.body.DepTime
    const ArTime = request.body.ArTime
    const bus_id = request.body.bus_id
    const From = request.body.From
    const To = request.body.To

if(!Code||!DepTime||!ArTime||!bus_id||!From||!To){
    return response.status(400).json({
        status: "error",
        msg: "400 Bad Request"
    })

}


const trip2= new trip ("1",Code,DepTime,ArTime,bus_id,From,To)
const Scheme=joi.object({
    id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
    Code : joi.string().not().empty().min(1).max(20).pattern(/[0-9]{1,20}/).required(),
    DepTime :joi.string().required().pattern(/[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) (0[0-9]|1[0-9]|2[1-4]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])/),
    ArTime  :joi.string().required().pattern(/[12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]) (0[0-9]|1[0-9]|2[1-4]):(0[0-9]|[1-5][0-9]):(0[0-9]|[1-5][0-9])/),    
    bus_id: joi.number().not().empty().min(1).max(50).required(),
    From:joi.string().not().empty().min(3).max(50).pattern(/[a-z A-Z]{3,50}/).required(),
    To:joi.string().not().empty().min(3).max(50).pattern(/[a-z A-Z]{3,50}/).required(),

})

    const joiErrorr= Scheme.validate(trip2)
    if (joiErrorr.error) {

        console.log(joiErrorr.error.details);
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request JOI"
        })
    }
    knex('trip')
        .where('Code', '=', trip2.Code)
        .update({
            Code : trip2.Code,
            DepTime : trip2.DepTime,
            ArTime : trip2.ArTime,
            bus_id : trip2.bus_id,
            From : trip2.From,
            To : trip2.To
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


exports.deleteTrip = (request, response) => {
    const knex = request.app.locals.knex


    knex('trip')
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


exports.restoreTrip = (request, response) => {
    const knex = request.app.locals.knex


    knex('trip')
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