const db = require('../../../models/employee');

const {Employee} = db

exports.addEmployee = async(req,res,next) =>{
    try{
    const {profilepic , name, id , email , designation ,role , gender ,conatct , enrolldate} = req.body;
    const employee = await Employee.create({profilepic , name, id , email , designation ,gender,role , conatct , enrolldate});
    return res.status(201).send({
        statusText:'Created',
        status:201,
        message:'employee registered successfully.',
        data:{}
    })
    }catch(error){
        res.status(400).send({
            statusText:'Bad Request',
            status:400,
            message: error.message||'Getting error while registering employee',
            data:{}

        })

    }
}

exports.employeeDetails = async (req ,res, next) => {
  
    try {
      const user = await Employee.find({})
      return res.status(201).send({
        statusText:'success',
        status:201,
        message:'employee data displayed',
        data:{user}
      })
    }catch(error){
        res.status(400).send({
            statusText:'Bad Request',
            status:400,
            message: error.message||'Getting error while registering employee',
            data:{}

        })
    }
}

    
  
  