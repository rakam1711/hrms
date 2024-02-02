const Department = require('../../../models/department')




exports.addDepartment = async (req, res, next) => {
    try {
      const { departmentName ,departmentHead,place ,email } = req.body;

      const registration = new Department({
        admin : req.admin,
        departmentName : departmentName,
        departmentHead :departmentHead ,
        place :place,
        email :email

      })
      const employee = await employeeRegister.save();
      return res.status(201).send({
        statusText: "Created",
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
  