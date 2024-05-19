const db = require("../models");
const Project = db.projects;

const index = async (req, res) => {
  await Project.findAll()
    .then((data) => {
      res.status("200").json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

const create = async (req, res) => {
  const project = req.body;
  await Project.create(project)
    .then((data) => {
      res.status("200").json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Project.",
      });
    });
};

const show = async (req, res) => {
  const id = req.params.id;
  await Project.findOne({
    where: { id: id },
  })
    .then((data) => {
      res.status("200").json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials.",
      });
    });
};

module.exports = { index, create, show };
