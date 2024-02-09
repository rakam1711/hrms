const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const attendenceSchema = new mongoose.Schema({
    employeeId :{
        type: mongoose.Schema.ObjectId,
         ref: 'Employee',
          required :true},
    date:{type:Date , required:true},
    intime:{type:String},
    outtime:{type:String},
    place:{type:String ,},
    
})

attendenceSchema.plugin(aggregatePaginate);
const Attendence = mongoose.model('Attendence',attendenceSchema)


module.exports = Attendence