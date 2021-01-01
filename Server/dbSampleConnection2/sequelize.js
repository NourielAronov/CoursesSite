const config = require("./config")
const Sequelize = require("sequelize")
const CourseModel = require("./models/courseModel")
const DateModel = require("./models/dateModel")

const sequelize = new Sequelize(config.DB, null, null, {
  dialect: config.dialect,
  host: config.HOST,
  dialectOptions: {
    authentication: {
      options: {
        userName: config.USER,
        password: config.PASSWORD,
      },
    },
    options: {
      validateBulkLoadParameters: true,
      encrypt: false,
      instanceName: config.INSTANCE,
    },
  },
  define: {
    timestamps: false
  },
})

const db = {}

db.sequelize = sequelize
db.Sequelize = Sequelize

db.course = CourseModel(sequelize, Sequelize)
db.date = DateModel(sequelize, Sequelize)

db.course.belongsToMany(db.date, {
  through: "course_date",
  as: "dates",
  foreignKey: "course_id",
})

db.date.belongsToMany(db.course, {
  through: "course_date",
  as: "courses",
  foreignKey: "date_id",
})

module.exports = db
