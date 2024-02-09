const mongoose= require('mongoose');
const aggregatePaginate = require("mongoose-aggregate-paginate-v2");

const rolesSchema = new mongoose.Schema({
    admin : {type:mongoose.Schema.Types.ObjectId ,ref :'Admin' , required:true} ,
    roles: { type: String , enum :['admin', 'subAdmin' ,"Hr","Employee"] , default:'admin', required :true },
    
    
    

})
projectSchema.plugin(aggregatePaginate);
const Project = mongoose.model('Project',projectSchema)


module.exports = Project