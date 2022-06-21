const bus = require("../models/bus")
const jwt = require('jsonwebtoken');
const joi = require("joi")






exports.selectBus = (request, response) => {
    const knex = request.app.locals.knex
    knex("bus")
        .select("id", "Code", "BusClass", "BookedSeats", "AvailSeats")
        .then(bus => {
            response.status(200).json(bus)
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({
                status: "error",
                msg: "500 Internal Server Error"
            })
        })
}

exports.addBus = (request, response) => {
    const knex = request.app.locals.knex

    const Code = request.body.Code
    const BusClass = request.body.BusClass
    const BookedSeats = request.body.BookedSeats
    const AvailSeats = request.body.AvailSeats

    

    if (!Code || !BusClass || !BookedSeats || !AvailSeats) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }
    const buss = new bus('1', Code, BusClass, BookedSeats, AvailSeats)

    const adSchema=joi.object({
        id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
        Code:joi.string().not().empty().min(1).max(50).required(),
        BusClass:joi.string().not().empty().min(3).max(50).pattern(/[a-z A-Z]{3,50}/).required(),
        BookedSeats:joi.number().min(1).max(60).required(),
        AvailSeats:joi.number().min(1).max(60).required()

       })
       const joiError=adSchema.validate(buss);
       if(joiError.error){
           console.log("joiError");
           console.log(joiError.error.details);
           return response.status(400).json({
           status:"error",
           msg:"400 bad Request"

           })
       }
                 
        knex("bus")
            .insert({
                Code: buss.Code,
                BusClass: buss.BusClass,
                BookedSeats: buss.BookedSeats,
                AvailSeats: buss.AvailSeats,
            })
            .then(data => {
                response.status(201).json({
                    status: "ok",
                    msg: "Created"
                })
            })
            .catch(error => {
                console.log(error);
                response.status(500).json({
                    status: "error",
                    msg: "500 Internal Server Error"
                })
            })




}

exports.updateBus = (request, response) => {
    const knex = request.app.locals.knex
    const Code = request.body.Code
    const BusClass = request.body.BusClass
    const BookedSeats = request.body.BookedSeats
    const AvailSeats = request.body.AvailSeats

    

    if (!Code || !BusClass || !BookedSeats || !AvailSeats) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }
    const buss = new bus('1', Code, BusClass, BookedSeats, AvailSeats)
    const adSchema=joi.object({
        id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
        Code:joi.string().not().empty().min(1).max(50).required(),
        BusClass:joi.string().not().empty().min(3).max(50).pattern(/[a-z A-Z]{3,50}/).required(),
        BookedSeats:joi.number().min(1).max(60).required(),
        AvailSeats:joi.number().min(1).max(60).required()

       })
       const joiError=adSchema.validate(buss);
       if(joiError.error){
           console.log("joiError");
           console.log(joiError.error.details);
           return response.status(400).json({
           status:"error",
           msg:"400 bad Request"

           })
       }

    knex('bus')
        .where('Code', '=', buss.Code)
        .update({
            Code: buss.Code,
            BusClass: buss.BusClass,
            BookedSeats: buss.BookedSeats,
            AvailSeats: buss.AvailSeats,
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






exports.deleteBus = (request, response) => {
    const knex = request.app.locals.knex


    knex('bus')
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

exports.restoreBus = (request, response) => {
    const knex = request.app.locals.knex


    knex('bus')
        .where('Code', '=', request.body.Code)
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
exports.restoreBus = (request, response) => {
    const knex = request.app.locals.knex


    knex('bus')
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
        

