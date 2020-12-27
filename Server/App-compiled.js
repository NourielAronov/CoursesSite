"use strict";

var _express = _interopRequireDefault(require("express"));

var _request = _interopRequireDefault(require("request"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var cors = require("cors");

var App = (0, _express["default"])();
var port = 5000;
App.use(cors());
App.get("/", function (req, res) {
  (0, _request["default"])("https://api.mocki.io/v1/07bc5d06", function (error, response, body) {
    if (!error && response.statusCode == 200) {
      res.send(body);
    }
  });
});
App.listen(port);
