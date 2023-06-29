var exp = require("express");
var app = exp();
var bp = require("body-parser");
app.use(bp.json());
app.use(bp.urlencoded({ extended: true }));
app.get("/getform", function (req, res) {
  res.sendFile(__dirname + "/form.html");
});
app.post("/getDataTable", function (req, res) {
  var myname = req.body.name;
  var mybdate = req.body.bdate;
  var myemail = req.body.email;
  var mybdate = req.body.bdate;
  var str = "";
  str += "<table>";
  str += "<tr>";
  str += "<td> myname</td>";
  str += "</tr>";
  str += "<tr>";
  str += "<td> mybdate</td>";
  str += "</tr>";
  str += "<tr>";
  str += "<td> myname</td>";
  str += "</tr>";
  str += "<tr>";
  str += "<td> myname</td>";
  str += "</tr>";
  str += "</table>";
  res.send(str);
});
app.listen(9000, function () {
  console.log("server is active at 9000");
});
