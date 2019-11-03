const express = require('express');
const healthRouter = express.Router();
const Health = require ('../models/health');
const Patient= require('../models/patient')

//====== GET HEALTH =========

// healthRouter.get('/health/:idPatient',(req,res,next)=> {
//     if (!mongoose.Types.ObjectId.isValid(req.params.idPatient)) {
//         res.status(400).json({ message: 'Specified id is not valid' });
//         return;
//       }
//     Health.find({'patient':req.params.idPatient})
//     .populate('patientId')
//     .then(healthRecord=>{
//         res.status(200).json(healthRecord)
//     })
//     .catch(err=>{
//         res.status(500).json({message:"Getting the Patient when wrong"})
//     })
// })

//===== NEW HEALTH =======

healthRouter.post('/createhealthrecord' ,(req,res,next)=>{
        const { 
            patientId,
            asistance,
            picture ,
            avpu ,
           // dcapblts,//array
            healthStatus,
            treatment,
            latitud,
            altitud
     }= req.body;
console.log("===",req.body)
    // Patient.findOne({ patientId})
    // .then(foundPatient => {
         Health.create({
                    patientId,
                    asistance,
                    picture ,
                    avpu ,
                //   dcapblts,//array
                    healthStatus,
                    treatment,
                    latitud,
                    altitud
            })
            .then(newHealth => {
                console.log("===",newHealth);
                res.status(200).json(newHealth)
            })
            .catch(err => {
                res.status(500).json({message:"Adding the Health when wrong"})

            })
    // .catch(err => )
        
    // })

      
})

module.exports = healthRouter;


