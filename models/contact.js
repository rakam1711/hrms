const mongoose= require('mongoose')
const aggregatePaginate= require('mongoose-aggregate-paginate-v2')

const ContactSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, lowercase: true, trim: true },
    phoneNumber: { type: String, default: '' },
    projectStage:{type:String},
    budget:{type:String},
    projectType:{type:String},
    ndaCopy:{type:Boolean,default:false},
    marketing:{type:Boolean,default:false},
    createdOn: {
        type: Date,
        default: Date.now,
      },
      updatedOn: {
        type: Date,
        default: Date.now,
      },
})
ContactSchema.plugin(aggregatePaginate)
const Contact = mongoose.model('Contact',ContactSchema)

module.exports = Contact