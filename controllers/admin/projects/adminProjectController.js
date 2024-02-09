const Project = require('../../../models/project')




exports.addProject = async (req, res, next) => {
    try {
      const { projectName ,projectHead } = req.body;

      const registration = new Project({
        admin : req.employeeData._id,
        projectName : projectName,
        projectHead :projectHead ,
        

      })
      const project = await registration.save();
      return res.status(201).send({
        statusText: "CREATED",
        status: 201,
        message: "project registered successfully.",
        data: { project },
      });
    } catch (error) {
      console.log('error',error)
      res.status(400).send({
        statusText: "BAD REQUEST",
        status: 400,
        message: error.message || "Getting error while registering project",
        data: {},
      });
    }
  };
  
  
exports.projectDetails = async (req, res, next) => {
  try {
    
    const project = await Project.findById({_id: req?.params?.id});
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "project data displayed",
      data: { project },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while geting project",
      data: {},
    });
  }
};

exports.projectUpdate = async (req, res, next) => {
  try {
    const data  = req.body;    
    const project = await Project.findByIdAndUpdate({_id: req?.params?.id},data);
    
    
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "project data updated",
      data: { project },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while updating project ",
      data: {},
    });
  }
}

exports.projectDelete = async (req, res, next) => {
  try {
    const project = await Project.findByIdAndDelete({ _id: req?.params?.id });
    return res.status(200).send({
      statusText: "OK",
      status: 200,
      message: "project data deleted",
      data: { project },
    });
  } catch (error) {
    res.status(400).send({
      statusText: "BAD REQUEST",
      status: 400,
      message: error.message || "Getting error while deleting project",
      data: {},
    });
  }
};
