module.exports = (sequelize, Sequelize) => {
  const Activity = sequelize.define("activity", {
    id_employee: {
      type: Sequelize.INTEGER(50),
    },
    id_project: {
      type: Sequelize.INTEGER(50),
    },
    title: {
      type: Sequelize.STRING,
    },
    dateStart: {
      type: Sequelize.DATEONLY,
    },
    dateEnd: {
      type: Sequelize.DATEONLY,
    },
    timeStart: {
      type: Sequelize.TIME,
    },
    timeEnd: {
      type: Sequelize.TIME,
    },
    duration: {
      type: Sequelize.STRING,
    },
  });

  return Activity;
};
