module.exports = (sequelize, DataTypes) => {
    const Date = sequelize.define("date", {
      startDate: {
        type: DataTypes.DATEONLY,
      },
    })
    return Date
  }
  