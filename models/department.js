const mongoose= require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const departmentSchema = new mongoose.Schema({
    employee : {type:mongoose.Schema.Types.ObjectId ,ref :'Employee' , required:true} ,
    name: { type: String, required: true },
    place :{type :String },
    email: { type: String, lowercase: true},
    

})
employeeSchema.plugin(aggregatePaginate);
const Department = mongoose.model('department',departmentSchema)


module.exports = Department