import express from "express"
import "@babel/polyfill";
import { courseRouter } from "./dbSampleConnection2/routes/coursesRoutes"
const cors = require("cors")

const App = express()
const port = 4000

App.use(cors())
App.use("/course", courseRouter)

App.listen(port, () => {
  console.log(`Running on http://localhost:${port}`)
})

const db = require("./dbSampleConnection2/sequelize")
const CourseController = require("./dbSampleConnection2/controllers/courseController")
const DateController = require("./dbSampleConnection2/controllers/dateController")

const run = async () => {
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
  console.log("initialize done!")
}

// db.sequelize.sync()
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync DB & Tables!")
  run()
})
