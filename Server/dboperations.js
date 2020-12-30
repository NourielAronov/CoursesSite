const sql = require("mssql")
var config = require("./dbconfig")

async function getCourses() {
    try {
        let pool = await sql.connect(config);
        let products = await pool.request().query("SELECT * from Courses");
        return products.recordsets;
    }
    catch (error) {
        console.log(error);
    }
}



module.exports = {
  getCourses: getCourses,
}
