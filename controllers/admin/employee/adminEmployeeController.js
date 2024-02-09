const Admin = require("../../../models/admin");
const Employee = require("../../../models/employee");
const formidable = require("formidable");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { env } = require("../../../environments/env");




exports.employeeLogin = async (req, res, next) => {
  try {
    const {email , password} = req.body;
    const admin = await Admin.findOne({email})
    
    const isMatched = await bcrypt.compare(password, admin.password);
        if (isMatched) {
            const token = jwt.sign(
                { _id: admin._id, email: admin.email },
                env().jwt_secret
            );
            admin.password = null
            if (!token) {
              throw new Error('Unable to login the user')
            }
            res.send({ status: 200, message: "User Login successfully", data: { admin ,token } });
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
      password,
      designation,
      role,
      gender,
      contact,
      startingDate,
    } = req.body;
    const { profilepic } = req.body.files;
    let employeeRegister = new Employee();
    const hashedPassword = await bcrypt.hash(password[0] , 10);
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

    const registration = new Admin({
      employeeId:employeeId[0],
      name: name[0],
      email: email[0],
      password: hashedPassword,
      status: true,
      role: role[0]=='Owner'?'Admin':role[0]=='Admin'?'SubAdmin':role[0]=='Hr'?'Hr':'Employee',
    });

    const admin =registration.save();
    admin .password =null;


    return res.status(201).send({
      statusText: "Created",
      status: 201,
      message: "employee registered successfully.",
      data: { employee ,admin},
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
      message: error.message || "Getting error while geting  employee",
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
      message: error.message || "Getting error while updating  employee",
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
      message: error.message || "Getting error while deleting  employee",
      data: {},
    });
  }
};
