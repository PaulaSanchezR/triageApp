const express = require('express');
const patientRouter = express.Router();
const Patient= require('../models/patient')

//====== NEW PATIENT =========

patientRouter.post('/patient',(req,res,next)=> {
    const {name, lastname, address, phone, age, event,ename,elastname,ephone} = req.body;
    Patient.create({
        name,
        lastname,
        address,
        phone,
        age,
        dcapblts,
        event,
        ename,
        elastname,
        ephone
    })
    .then(newPatient=>{
        res.status(200).json(newPatient)
    })
    .catch(err=>{
        res.status(500).json({message:"Adding the Patient when wrong"})
    })
})



module.exports = patientRouter