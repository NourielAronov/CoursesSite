module.exports = (sequelize, DataTypes) => {
  const Course = sequelize.define("course", {
    name: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.STRING,
    },
    gmush: {
      type: DataTypes.INTEGER,
    },
  })
  return Course
}
