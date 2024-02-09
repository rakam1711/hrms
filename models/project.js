const mongoose= require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const projectSchema = new mongoose.Schema({
    admin : {type:mongoose.Schema.Types.ObjectId ,ref :'Admin' , required:true} ,
    projectName: { type: String, required: true },
    projectHead :{type: String ,required:true},
    
    

})
projectSchema.plugin(aggregatePaginate);
const Project = mongoose.model('Project',projectSchema)


module.exports = Project