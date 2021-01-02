"use strict";

var _express = _interopRequireDefault(require("express"));

require("@babel/polyfill");

var _coursesRoutes = require("./dbSampleConnection2/routes/coursesRoutes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var cors = require("cors");

var App = (0, _express["default"])();
var port = 4000;
App.use(cors());
App.use("/course", _coursesRoutes.courseRouter);
App.listen(port, function () {
  console.log("Running on http://localhost:".concat(port));
});

var db = require("./dbSampleConnection2/sequelize");

var CourseController = require("./dbSampleConnection2/controllers/courseController");

var DateController = require("./dbSampleConnection2/controllers/dateController");

var run = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // const course1 = await CourseController.create({
            //   name: "MongoDB",
            //   description: "Mongo not Longo",
            //   gmush: 20,
            // })
            // const course2 = await CourseController.create({
            //   name: "Python",
            //   description: "Learn about snakes",
            //   gmush: 40,
            // })
            // const course3 = await CourseController.create({
            //   name: "Safe coding",
            //   description: "Keep the hackers away",
            //   gmush: 10,
            // })
            // const course4 = await CourseController.create({
            //   name: "SQL",
            //   description: "Gotta know how to receive the datao",
            //   gmush: 15,
            // })
            // /**************************************************************************/
            // const date1 = await DateController.create({
            //   startDate: "2021-01-01",
            // })
            // const date2 = await DateController.create({
            //   startDate: "2020-07-25",
            // })
            // const date3 = await DateController.create({
            //   startDate: "2020-12-14",
            // })
            // /**************************************************************************/
            // await DateController.addCourse(date1.id, course1.id)
            // // >> added Course id=1 to Date id=1
            // await DateController.addCourse(date1.id, course2.id)
            // // >> added Course id=2 to Date id=1
            // await DateController.addCourse(date1.id, course3.id)
            // // >> added Course id=3 to Date id=1
            // await DateController.addCourse(date2.id, course3.id)
            // // >> added Course id=3 to Date id=2
            // await DateController.addCourse(date2.id, course4.id)
            // // >> added Course id=4 to Date id=2
            // await DateController.addCourse(date2.id, course1.id)
            // // >> added Course id=1 to Date id=2

            /**************************************************************************/
            console.log("initialize done!");

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function run() {
    return _ref.apply(this, arguments);
  };
}(); // db.sequelize.sync()


db.sequelize.sync({
  force: true
}).then(function () {
  console.log("Drop and re-sync DB & Tables!");
  run();
});
