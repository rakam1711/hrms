const Department = require('../../../models/department')




exports.addDepartment = async (req, res, next) => {
    try {
      const { departmentName ,departmentHead,place ,email } = req.body;

      const registration = new Department({
        admin : req.employeeData._id,
        departmentName : departmentName,
        departmentHead :departmentHead ,
        place :place,
        email :email

      })
      const employee = await registration.save();
      return res.status(201).send({
        statusText: "CREATED",
        status: 201,
        message: "employee registered successfully.",
        data: { employee },
      });
    } catch (error) {
      console.log('error',error)
      res.status(400).send({
        statusText: "BAD REQUEST",
        status: 400,
        message: error.message || "Getting error while registering employee",
        data: {},
      });
    }
  };
  
  
exports.departmentDetails = async (req, res, next) => {
  try {
    
    const department = await Department.findById({_id: req?.params?.id});
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "Department data displayed",
      data: { department },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while geting department",
      data: {},
    });
  }
};

exports.departmentUpdate = async (req, res, next) => {
  try {
    const data  = req.body;    
    const department = await Department.findByIdAndUpdate({_id: req?.params?.id},data);
    
    
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "department data updated",
      data: { department },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while updating department ",
      data: {},
    });
  }
}

exports.departmentDelete = async (req, res, next) => {
  try {
    const department = await Department.findByIdAndDelete({ _id: req?.params?.id });
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "employee data deleted",
      data: { department},
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while deleting department",
      data: {},
    });
  }
};
