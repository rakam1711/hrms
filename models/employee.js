const mongoose= require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const employeeSchema = new mongoose.Schema({
    profilepic:{type:String },
    name: { type: String, required: true },
    employeeId: { type: String },
    email: { type: String, lowercase: true},
    role :{type :String},
    gender :{type:String},
    contact:{type:String},
    designation:{type:String},
    startingDate:{type:Date,},
    leavingDate:{type:Date },
createdOn:{type:Date,default:Date.now()},
updatedOn:{type:Date,default:Date.now()}
})
employeeSchema.plugin(aggregatePaginate);
const Employee = mongoose.model('Employee',employeeSchema)


module.exports = Employee