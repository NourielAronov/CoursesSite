const sql = require("mssql")
const config = require("./dbconfig")

async function getCourses() {
  try {
    let pool = await sql.connect(config)
    let products = await pool
      .request()
      .query(
        "SELECT C.CourseName, C.CourseDescription, C.gmush, D.startDate FROM Dates as D JOIN CoursesDateRelation as CD ON CD.DateID = D.DateID JOIN Courses as C ON CD.CourseID = C.CourseID"
      )
    return products.recordsets
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  getCourses: getCourses,
}
