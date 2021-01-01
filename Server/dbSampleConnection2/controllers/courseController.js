const db = require("../sequelize")
const SDate = db.date;
const Course = db.course;

exports.create = (course) => {
  return Course.create({
    name: course.name,
    description: course.description,
    gmush: course.gmush,
  })
    .then((course) => {
      console.log(">> Created Course: " + JSON.stringify(course, null, 4))
      return course
    })
    .catch((err) => {
      console.log(">> Error while creating Course: ", err)
    })
}

exports.findAll = () => {
  return Course.findAll({
    include: [
      {
        model: SDate,
        as: "dates",
        attributes: ["id", "startDate"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["date_id", "course_id"],
        // },
      },
    ],
  })
    .then((courses) => {
      return courses
    })
    .catch((err) => {
      console.log(">> Error while retrieving Courses: ", err)
    })
}

exports.findById = (id) => {
  return Course.findByPk(id, {
    include: [
      {
        model: SDate,
        as: "dates",
        attributes: ["id", "startDate"],
        through: {
          attributes: [],
        },
        // through: {
        //   attributes: ["date_id", "course_id"],
        // },
      },
    ],
  })
    .then((course) => {
      return course
    })
    .catch((err) => {
      console.log(">> Error while finding Course: ", err)
    })
}
