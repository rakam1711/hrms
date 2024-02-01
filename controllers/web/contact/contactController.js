const Contact = require('../../../models/contact')
exports.addContact = async(req,res,next)=>{
    try {
        const {name,email,phoneNumber,projectStage,budget,projectType,ndaCopy,marketing} = req.body
        const contactData = new Contact({
            name:name,
            email:email,
            phoneNumber:phoneNumber,
            projectStage:projectStage,
            budget:budget,
            projectType:projectType,
            ndaCopy:ndaCopy==='true'?true:false,
            marketing:marketing==='true'?true:false
        }) 
        const contact = await contactData.save();
        return res.status(201).send({
            statusText:'CREATED',
            status:201,
            message:'Thank you for contacting us.',
            data:{}
        })
    } catch (error) {
        res.status(400).send({
            statusText:'BAD REQUEST',
            status:400,
            message: error.message||'Getting error while creating contact data',
            data:{}
        })
    }
}