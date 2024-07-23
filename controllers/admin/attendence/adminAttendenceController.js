const Attendence = require("../../../models/attendence");

exports.addAttendence = async (req, res, next) => {
  try {
    const { date, intime, outtime, place } = req.body;
    const attendenceData = new Attendence({
      employeeId: req.employeeData._id,
      date: date,
      intime: intime,
      outtime: outtime,
      place: place,
    });
    console.log("attendence", attendenceData);
    const attendence = await attendenceData.save();
    return res.status(201).send({
      statusText: "CREATED",
      status: 201,
      message: "attendence added.",
      data: { attendence },
    });
  } catch (error) {
    console.log("err", error);
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message:
        error.message || "Getting error while creating  employee attendence",
      data: {},
    });
  }
};
