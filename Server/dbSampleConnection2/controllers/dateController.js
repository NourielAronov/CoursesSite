const db = require("../sequelize")
const SDate = db.date;
const Course = db.course;


exports.create = (date) => {
  return SDate.create({
    startDate: date.startDate,
  })
    .then((date) => {
      console.log(">> Created Date: " + JSON.stringify(date, null, 2))
      return date
    })
    .catch((err) => {
      console.log(">> Error while creating Date: ", err)
    })
}

exports.findAll = () => {
  return SDate.findAll({
    include: [
      {
        model: Course,
        as: "courses",
        attributes: ["id", "name", "description", "gmush"],
        through: {
          attributes: [],
        },
      },
    ],
  })
    .then((dates) => {
      return dates
    })
    .catch((err) => {
      console.log(">> Error while retrieving Dates: ", err)
    })
}

// exports.findById = (id) => {
//   return SDate.findByPk(id, {
//     include: [
//       {
//         model: Course,
//         as: "Courses",
//         attributes: ["id", "name", "description", "gmush"],
//         through: {
//           attributes: [],
//         },
//       },
//     ],
//   })
//     .then((date) => {
//       return date
//     })
//     .catch((err) => {
//       console.log(">> Error while finding Date: ", err)
//     })
// }

exports.addCourse = (dateId, courseId) => {
  return SDate.findByPk(dateId)
    .then((date) => {
      if (!date) {
        console.log("Date not found!")
        return null
      }
      return Course.findByPk(courseId).then((course) => {
        if (!course) {
          console.log("Course not found!")
          return null
        }

        date.addCourse(course)
        console.log(`>> added Course id=${course.id} to Date id=${date.id}`)
        return date
      })
    })
    .catch((err) => {
      console.log(">> Error while adding Course to Date: ", err)
    })
}
