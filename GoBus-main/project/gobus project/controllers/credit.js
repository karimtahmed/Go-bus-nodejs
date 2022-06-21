const bcrypt = require("bcrypt")
const credit= require("../models/credit")
const jwt = require('jsonwebtoken');
const joi = require("joi")

exports.addCredit = (request, response) => {
    const knex = request.app.locals.knex

    const CardNumber = request.body.CardNumber
    const CvC = request.body.CvC
    const ExpireDate = request.body.ExpireDate
    const Payment_id = request.body.Payment_id

    if (!CardNumber || !CvC || !ExpireDate || !Payment_id ) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request!!"
        })
    }
    const credit2 = new credit('1', CardNumber,  CvC , ExpireDate, Payment_id)
    const Scheme=joi.object({
        id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
        CardNumber:joi.string().min(16).max(18).required(),
        CvC : joi.string().min(3).max(4).required(),
        ExpireDate :joi.string().min(1).max(4).required(),
        Payment_id  :joi.string().min(1).max(50).required(),      

    })

    const joiErrorr= Scheme.validate(credit2)
    if (joiErrorr.error) {

        console.log(joiErrorr.error.details);
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request JOI"
        })
    }
    
        
            bcrypt.hash(CardNumber, 10, function (err, hash) {
                if (err) {
                    console.log(err);
        
                    return response.status(500).json({
                        status: "error",
                        msg: "500 internal server error"
                    })
                }
                credit2.CardNumber = hash


                bcrypt.hash(CvC, 10, function (err, hash2) {
                    if (err) {
                        console.log(err);
            
                        return response.status(500).json({
                            status: "error",
                            msg: "500 internal server error"
                        })
                    }
                    credit2.CvC = hash2



                knex("creditcard")
                    .insert({
                        CardNumber: credit2.CardNumber,
                        CvC: credit2.CvC,
                        ExpireDate: credit2.ExpireDate,
                        Payment_id: credit2.Payment_id,
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
        
        
        
            });
        });

        
        }

        exports.updateCredit = (request, response) => {
            const knex = request.app.locals.knex
            const CardNumber = request.body.CardNumber
            const CvC = request.body.CvC
             const ExpireDate = request.body.ExpireDate
             const Payment_id = request.body.Payment_id

    if (!CardNumber || !CvC || !ExpireDate || !Payment_id ) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request!!"
        })
    }
          
        
    const credit2 = new credit('1', CardNumber,  CvC , ExpireDate, Payment_id)
    const Scheme=joi.object({
        id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),
        CardNumber:joi.string().min(16).max(18).required(),
        CvC : joi.string().min(3).max(4).required(),
        ExpireDate :joi.string().min(1).max(4).required(),
        Payment_id  :joi.string().min(1).max(50).required(),      

    })

    const joiErrorr= Scheme.validate(credit2)
    if (joiErrorr.error) {

        console.log(joiErrorr.error.details);
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request JOI"
        })
    }
    bcrypt.hash(CardNumber, 10, function (err, hash) {
        if (err) {
            console.log(err);

            return response.status(500).json({
                status: "error",
                msg: "500 internal server error"
            })
        }
        credit2.CardNumber = hash


        bcrypt.hash(CvC, 10, function (err, hash2) {
            if (err) {
                console.log(err);
    
                return response.status(500).json({
                    status: "error",
                    msg: "500 internal server error"
                })
            }
            credit2.CvC = hash2
    
            knex('creditcard')
                .where('id', '=', request.body.id)
                .update({
                    CardNumber: credit2.CardNumber,
                    CvC: credit2.CvC,
                    ExpireDate: credit2.ExpireDate,
                    Payment_id: credit2.Payment_id,
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
        
        })
        
    });
}
        
        
        
        
        exports.deleteCredit = (request, response) => {
            const knex = request.app.locals.knex
        
        
            knex('creditcard')
                .where('id', '=', request.body.id)
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
        
        exports.restoreCredit = (request, response) => {
            const knex = request.app.locals.knex
        
        
            knex('creditcard')
                .where('id', '=', request.body.id)
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
        
    