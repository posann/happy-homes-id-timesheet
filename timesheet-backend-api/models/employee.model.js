module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    name: {
      type: Sequelize.STRING,
    },
    rate: {
      type: Sequelize.DOUBLE,
    },
    overtime: {
      type: Sequelize.INTEGER,
    },
    earnings: {
      type: Sequelize.DOUBLE,
    },
    active: {
      type: Sequelize.BOOLEAN,
    },
  });

  return Employee;
};
