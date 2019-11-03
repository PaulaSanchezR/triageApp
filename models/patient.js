const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const patientSchema = new Schema({
    name :    { type: String, require : true  },
    lastname: { type: String,require : true },
    age: {type: String, require:true},
    phone: {type: String, require: true},
    address: {type: String, require:true},
    ename: {type:String, require:true} ,
    elastname: {type:String, require:true},
    ephone:{type:String, require:true},
    event: { type:String, require:true}
   },
   {
    timestamps: {createdAt:"created_at",updateAt:"update_at"}
}
   )

   const Patient = mongoose.model('Patient', patientSchema);
   module.exports = Patient;