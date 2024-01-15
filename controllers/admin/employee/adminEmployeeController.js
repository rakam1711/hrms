const Employee = require('../../../models/employee');


exports.addEmployee = async(req,res,next) =>{
    try{
    const {name, employeeId , email , designation ,role , gender ,contact , strtingDate,leavingDate} = req.body;
    const {profilepic} = req.body.files
    let employeeRegister
    if (profile) {
        
    } else {
        employeeRegister = new Employee({
            name : name,
            employeeId:employeeId,
            email:email,
            designation:designation,
            role:role,
            gender:gender,
            contact:contact,
            startingDate:strtingDate,
            leavingDate:leavingDate,
        })
    }
    const employee = await employeeRegister.save();
        return res.status(201).send({
            statusText:'Created',
            status:201,
            message:'employee registered successfully.',
            data:{employee}
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
      const employee = await Employee.findOne({_id:req?.params?._id})
      return res.status(200).send({
        statusText:'success',
        status:200,
        message:'employee data displayed',
        data:{employee}
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

    
  
  