const express = require("express")
var request = require("request")
var cors = require("cors")

const App = express()
const port = 5000

App.use(cors())
App.get("/", (req, res) => {
  request("https://api.mocki.io/v1/07bc5d06", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body)
    }
  })
})

App.listen(port)
