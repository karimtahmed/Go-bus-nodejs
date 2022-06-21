const bcrypt = require("bcrypt")
const pass = require("../models/Passenger")
const jwt = require('jsonwebtoken');

const joi= require("joi")

exports.selectUser = (request, response) => {
    const knex = request.app.locals.knex

    knex("passenger")
        .select("id", "Code", "Name", "PhoneNum", "Email")
        .then(passenger => {
            response.status(200).json(passenger)
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({
                status: "error",
                msg: "500 Internal Server Error"
            })
        })
}
exports.ShowInfo = (request, response) => {
    const knex = request.app.locals.knex

    knex("passenger")
        .select("id", "Code", "Name", "PhoneNum", "Email")
        .where('Code', '=', request.body.Code)
        .then(passenger => {
            response.status(200).json(passenger)
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({
                status: "error",
                msg: "500 Internal Server Error"
            })
        })
}

exports.addUser = (request, response) => {
    const knex = request.app.locals.knex

    const Name = request.body.Name
    const Code = request.body.Code
    const PhoneNum = request.body.PhoneNum
    const Email = request.body.Email
    const Password = request.body.Password

    if (!Name || !Code || !PhoneNum || !Email || !Password) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }

        const pas = new pass("1", Code,  Name,PhoneNum, Email, Password, 'has')
        const Scheme=joi.object({
            id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),

            Name: joi.string().not().empty().min(3).max(20).pattern(/[a-z A-Z]{3,20}/).required(),
            Code : joi.string().not().empty().min(3).max(20).pattern(/[0-9]{1,20}/).required(),
            PhoneNum :joi.string().not().empty().min(3).max(30).pattern(/[0-9]{11}/).required(),
            Email  :joi.string().not().empty().min(2).max(100).email().required() ,      
    
            Password: joi.string().min(6).max(30).required(),
            hashedPassword: joi.string().min(1).max(100).required(),
        })


        const joiErrorr= Scheme.validate(pas)
        if (joiErrorr.error) {

            console.log(joiErrorr.error.details);
            return response.status(400).json({
                status: "error",
                msg: "400 Bad Request JOI"
            })
        }

        bcrypt.hash(Password, 10, function (err, hash) {
            if (err) {
                console.log(err);
    
                return response.status(500).json({
                    status: "error",
                    msg: "500 internal server error"
                })
            }
       
            pas.hashedPassword = hash


        knex("passenger")
            .insert({
                Code: pas.Code,
                Email: pas.Email,

                Name: pas.Name,
                Password: pas.hashedPassword,
                PhoneNum: pas.PhoneNum,
            })
            .then(data => {
                response.status(201).json({
                    status: "ok",
                    msg: "Created"
                })
            })
            .catch(error => {
                console.log(error);
                response.status(400).json({
                    status: "error",
                    msg: "400 Bad Request ADD USER"
                })
            })



    });


}

exports.login = (request, response) => {

    const knex = request.app.locals.knex

    const Email = request.body.Email
    const Password = request.body.Password
    if (!Email || !Password) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }

    knex("passenger")
        .select('Email', 'Password')
        .limit(1)
        .where('Email', '=', Email)
        .then(pas => {
            console.log(pas);
            if (pas[0] != null) {
                bcrypt.compare(Password, pas[0].Password, (error, result) => {
                    if (error) {
                        console.log(error);
                    }
                    if (result) {



                        const token = jwt.sign({
                            userEmail: pas[0].Email,
                            usertype: 'Passenger'
                        }, "12345", {})
                        response.status(200).json({
                            status: "ok",
                            msg: "login",
                            token
                        })
                    } else {
                        response.status(401).json({
                            status: "error",
                            msg: "invalid password"
                        })
                    }
                })

            } else {
                response.status(401).json({
                    status: "error",
                    msg: "401 not Auth"
                })
            }
        })
        .catch(error => {
            console.log(error);
            response.status(500).json({
                status: "error",
                msg: "500 Internal Server Error"
            })
        })
}

exports.updatePas = (request, response) => {
    const knex = request.app.locals.knex
    const Name = request.body.Name
    const Code = request.body.Code
    const PhoneNum = request.body.PhoneNum
    const Email = request.body.Email
    const Password = request.body.Password

    if (!Name || !Code || !PhoneNum || !Email || !Password) {
        return response.status(400).json({
            status: "error",
            msg: "400 Bad Request"
        })
    }

        const pas = new pass("1", Code,  Name,PhoneNum, Email, Password, 'has')
        const Scheme=joi.object({
            id: joi.string().not().empty().min(1).max(50).pattern(/[0-9]+/).required(),

            Name: joi.string().not().empty().min(3).max(20).pattern(/[a-z A-Z]{3,20}/).required(),
            Code : joi.string().not().empty().min(3).max(20).pattern(/[0-9]{1,20}/).required(),
            PhoneNum :joi.string().not().empty().min(3).max(30).pattern(/[0-9]{11}/).required(),
            Email  :joi.string().not().empty().min(2).max(100).email().required() ,      
    
            Password: joi.string().min(6).max(30).required(),
            hashedPassword: joi.string().min(1).max(100).required(),
        })


        const joiErrorr= Scheme.validate(pas)
        if (joiErrorr.error) {

            console.log(joiErrorr.error.details);
            return response.status(400).json({
                status: "error",
                msg: "400 Bad Request JOI"
            })
        }

        bcrypt.hash(Password, 10, function (err, hash) {
            if (err) {
                console.log(err);
    
                return response.status(500).json({
                    status: "error",
                    msg: "500 internal server error"
                })
            }
       
            pas.hashedPassword = hash

    knex('passenger')
        .where('Code', '=', pas.Code)
        .update({
            Code: pas.Code,
            Email: pas.Email,

            Name: pas.Name,
            Password: pas.hashedPassword,
            PhoneNum: pas.PhoneNum,
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
}






exports.deletePas = (request, response) => {
    const knex = request.app.locals.knex


    knex('passenger')
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


exports.restorePas = (request, response) => {
    const knex = request.app.locals.knex


    knex('passenger')
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