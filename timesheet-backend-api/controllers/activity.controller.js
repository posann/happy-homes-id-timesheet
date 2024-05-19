const db = require("../models");
const Activity = db.activities;
const Project = db.projects;

const index = async (req, res) => {
  await Activity.findAll()
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
  const activity = req.body;
  await Activity.create(activity)
    .then((data) => {
      res.status("200").json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Activity.",
      });
    });
};

const update = async (req, res) => {
  const id = req.params.id;
  const activity = req.body;
  await Activity.update(activity, {
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
          err.message || "Some error occurred while updating the Activity.",
      });
    });
};

const destroy = async (req, res) => {
  const id = req.params.id;
  await Activity.destroy({
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
          err.message || "Some error occurred while deleting the Activity.",
      });
    });
};

const show = async (req, res) => {
  const id = req.params.id;
  await Activity.findAll({
    where: { id_employee: id },
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

module.exports = { index, create, update, destroy, show };
