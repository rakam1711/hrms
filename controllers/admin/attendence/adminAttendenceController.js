const db = require('../../../models/employee');

const {Attendence} = db

exports.addEmployee = async(req,res,next) =>{
    try{
    const {name, date , intime , outtime , place} = req.body;
    const attendence = await Attendence.create({name, date , intime , outtime , place});
    return res.status(201).send({
        statusText:'ssuccess',
        status:201,
        message:'attendence added.',
        data:{}
    })
    }catch(error){
        res.status(400).send({
            statusText:'Bad Request',
            status:400,
            message: error.message||'Getting error while creating  employee attendence',
            data:{}

        })

    }
}