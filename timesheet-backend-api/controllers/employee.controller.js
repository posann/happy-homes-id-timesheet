const db = require("../models");
const Employee = db.employees;

const index = async (req, res) => {
  await Employee.findAll()
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
  const { name, ...employeeData } = req.body;

  try {
    // Cek apakah employee dengan name sudah ada
    const existingEmployee = await Employee.findOne({ where: { name } });

    if (existingEmployee) {
      // Jika employee dengan name sudah ada, update data yang ada
      await Employee.update(employeeData, {
        where: { id: existingEmployee.id },
      });
      res.status(200).json({
        message: "Employee updated successfully",
        data: { id: existingEmployee.id, name, ...employeeData },
      });
      await Employee.update({ active: false }, { where: {} });
      await Employee.update(
        { active: true },
        { where: { id: existingEmployee.id } }
      );
    } else {
      // Jika employee dengan name tidak ada, tambahkan data baru
      const newEmployee = await Employee.create({ name, ...employeeData });
      await Employee.update({ active: false }, { where: {} });
      await Employee.update(
        { active: true },
        { where: { id: newEmployee.id } }
      );
      res.status(200).json({
        message: "Employee created successfully",
        data: newEmployee,
      });
    }
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while processing the request.",
    });
  }
};

const update = async (req, res) => {
  const id = req.params.id;
  const employee = req.body;
  await Employee.update(employee, {
    where: { id: id },
  })
    .then(async (data) => {
      await Employee.update({ active: false }, { where: {} }).then;
      res.status("200").json({
        message: "Success",
        data: data,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while updating the Employee.",
      });
    });
};

const destroy = async (req, res) => {
  const id = req.params.id;
  await Employee.destroy({
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
          err.message || "Some error occurred while deleting the Employee.",
      });
    });
};

const checkActiveEmployees = async (req, res) => {
  try {
    const activeEmployees = await Employee.findAll({
      where: { active: true },
    });

    if (activeEmployees.length === 0) {
      return res.status(200).json({
        message: "No active employees found.",
        data: [],
      });
    }

    res.status(200).json({
      message: "Active employees found.",
      data: activeEmployees[0],
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while retrieving active employees.",
    });
  }
};

module.exports = {
  index,
  create,
  update,
  destroy,
  checkActiveEmployees,
};
