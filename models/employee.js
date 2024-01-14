const mongoose= require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const employeeSchema = new mongoose.Schema({
    profilepic:{type:string },
    name: { type: String, required: true },
    id: { type: String, lowercase: true, trim: true },
    email: { type: String, default: '' },
    role :{type :String},
    gender :{type:String},
    contact:{type:String},
    designation:{type:String},
    enrolldate:{type:Date,default: Date.now},
})
employeeSchema.plugin(aggregatePaginate);
const Employee = mongoose.model('employee',employeeSchema)


module.exports = Employee