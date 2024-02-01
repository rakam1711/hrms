const Employee = require("../../../models/employee");
const formidable = require("formidable");


exports.employeeLogin = async (req, res, next) => {
  try {
    const data = req.body;
    const employee = req.employeeData;
    const isMatched = await bcrypt.compare(data.password, employee.password);
        if (isMatched) {
            const token = jwt.sign(
                { _id: Employee._id, email: Employee.email },
                env().jwt_secret
            );
            user.password = null
            res.send({ status: 200, message: "User Login successfully", data: { employee, token } });
        } else {
            res.send({ status: 401, message: "Invalid email or password", data: {} });
        }
  } catch (error) { 
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while employee login ",
      data: {},
    });
  }
};

exports.addEmployee = async (req, res, next) => {
  try {
    const {
      name,
      employeeId,
      email,
      designation,
      role,
      gender,
      contact,
      startingDate,
    } = req.body;
    const { profilepic } = req.body.files;
    let employeeRegister = new Employee();
if (profilepic) {
  // employeeRegister.profilepic = 
}
    employeeRegister.name =name[0]
    employeeRegister.employeeId = employeeId[0]
    employeeRegister.email = email[0]
    employeeRegister.designation = designation[0]
    employeeRegister.role = role[0]
    employeeRegister.gender = gender[0]
    employeeRegister.contact=contact[0]
    employeeRegister.startingDate=startingDate[0]
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

exports.employeeDetails = async (req, res, next) => {
  try {
    
    const employee = await Employee.findById({_id: req?.params?.id});
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "employee data displayed",
      data: { employee },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while registering employee",
      data: {},
    });
  }
};

exports.employeeUpdate = async (req, res, next) => {
  try {
    const data  = req.body;    
    const employee = await Employee.findByIdAndUpdate({_id: req?.params?.id},data);
    
    
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "employee data updated",
      data: { employee },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while registering employee",
      data: {},
    });
  }
}

exports.employeeDelete = async (req, res, next) => {
  try {
    const employee = await Employee.findByIdAndDelete({ _id: req?.params?.id });
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "employee data deleted",
      data: { employee },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while registering employee",
      data: {},
    });
  }
};
