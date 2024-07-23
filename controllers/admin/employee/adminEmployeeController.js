const Admin = require("../../../models/admin");
const Employee = require("../../../models/employee");
const path = require("path");
const upload = require("../../../middlewares/multer");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { env } = require("../../../environments/env");

exports.employeeLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const admin = await Admin.findOne({ email });

    const isMatched = await bcrypt.compare(password, admin.password);
    if (isMatched) {
      const token = jwt.sign(
        { _id: admin._id, email: admin.email },
        env().jwt_secret
      );
      admin.password = null;
      if (!token) {
        throw new Error("Unable to login the user");
      }
      res.send({
        status: 200,
        message: "User Login successfully",
        data: { admin, token },
      });
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

exports.addEmployee = (req, res, next) => {
  upload.single("profilePic")(req, res, async (err) => {
    if (err) {
      return res.status(400).send({
        statusText: "BAD REQUEST",
        status: 400,
        message: err.message || "Error uploading file",
        data: {},
      });
    }

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

      let profilePicPath = null;
      if (req.file) {
        profilePicPath = req.file.path;
      }

      const hashedPassword = await bcrypt.hash(password, 10);

      let employeeRegister = new Employee({
        name,
        employeeId,
        email,
        designation,
        role,
        gender,
        contact,
        startingDate,
        profilePic: profilePicPath,
      });

      const employee = await employeeRegister.save();

      const registration = new Admin({
        employeeId: employeeId,
        name: name,
        email: email,
        password: hashedPassword,
        status: true,
        role:
          role == "Owner"
            ? "Admin"
            : role == "Admin"
            ? "SubAdmin"
            : role == "Hr"
            ? "Hr"
            : "Employee",
      });

      const admin = await registration.save();
      admin.password = null;

      return res.status(201).send({
        statusText: "Created",
        status: 201,
        message: "Employee registered successfully.",
        data: { employee, admin },
      });
    } catch (error) {
      console.log("error", error);
      res.status(400).send({
        statusText: "BAD REQUEST",
        status: 400,
        message: error.message || "Error registering employee",
        data: {},
      });
    }
  });
};

// exports.employeeDetails = async (req, res, next) => {
//   try {
//     const employee = await Employee.findById({ _id: req.params.id });
//     return res.status(200).send({
//       statusText: "OK",
//       status: 200,
//       message: "Employee data displayed",
//       data: { employee },
//     });
//   } catch (error) {
//     res.status(400).send({
//       statusText: "BAD REQUEST",
//       status: 400,
//       message: error.message || "Error retrieving employee",
//       data: {},
//     });
//   }
// };

exports.employeeDetails = async (req, res, next) => {
  try {
    const employee = await Employee.findById({ _id: req?.params?.id });
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
    const data = req.body;
    const employee = await Employee.findByIdAndUpdate(
      { _id: req?.params?.id },
      data
    );

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
};

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
