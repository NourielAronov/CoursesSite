const Courses = require("../models/courses")

// Display list of all Courses.
// exports.courses_list = function (req, res) {
//   res.send("NOT IMPLEMENTED: Courses list")
// }

// Display specific Course by id.
exports.course = function (req, res) {
  res.send("NOT IMPLEMENTED: Courses detail: " + req.params.id)
}

// Display list of all BookInstances.
exports.courses_list = function (req, res, next) {
  BookInstance.find()
    .populate("book")
    .exec(function (err, list_bookinstances) {
      if (err) {
        return next(err)
      }
      // Successful, so render
      res.render("bookinstance_list", {
        title: "Book Instance List",
        bookinstance_list: list_bookinstances,
      })
    })
}
