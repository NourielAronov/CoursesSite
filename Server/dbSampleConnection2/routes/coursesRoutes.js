const express = require("express")
const CourseController = require("../controllers/courseController")
const courseRouter = express.Router()

// GET request for one Course.
courseRouter.get("/:id", (req, res) => {
    return CourseController.findById(req.params.id).then((course) => res.json(course))
  })

// GET request for all Courses.
courseRouter.get("/", (req, res) => {
  return CourseController.findAll().then((courses) => res.json(courses))
})

exports.courseRouter = courseRouter
