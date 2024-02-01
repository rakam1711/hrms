const mongoose = require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const attendenceSchema = new mongoose.Schema({
    employee :{type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required :true},
    name:{type:String ,required:true},
    Date:{type:Date.now , required:true},
    intime:{type:Date},
    outtime:{type:Date},
    place:{type:String , required:true},
    
})

attendenceSchema.plugin(aggregatePaginate);
const Attendence = mongoose.model('Attendence',attendenceSchema)


module.exports = Attendence