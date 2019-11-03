const mongoose = require ('mongoose');
const Schema = mongoose.Schema;

const healthSchema = new Schema({
    patientId: { type: Schema.Types.ObjectId, ref :'Patient'},
    personhowupadate: { type:String },// app user
    picture :  { type: String },
    avpu : {type: String , enum:['awake', 'verbal','pain','unresposive'] },
    dcapblts: [{type:String}],
    healthStatus:{type: Boolean},//are you OK, do you  need assistance?
    treatment: {type:String}, // filling by the assistance
    latitud:{type:Number, required:true},
    altitud:{type:Number,require:true},
    },
    {
        timestamps: {createdAt:"created_at",updateAt:"update_at"}
    },
    
)

const Health = mongoose.model('health', healthSchema);
module.exports = Health;