const Attendence = require('../../../models/employee');



exports.addAttendence = async(req,res,next) =>{
    try{                                
    const {name, date , intime , outtime , place,userId} = req.body;
    const attendenceData = new Attendence({
        userId:userId,
        name:name,
        date:date,
        intime:intime,
        outtime:outtime,
        place:place,

    })
    const attendence =await attendenceData.save();
    return res.status(201).send({
        statusText:'created',
        status:201,
        message:'attendence added.',
        data:{attendence}
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