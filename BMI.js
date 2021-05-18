const express = require("express");
const bodyParser = require("body-parser")


const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



app.get("/", function (req, res) {
    res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function (req, res) {

    var weight = Number(req.body.num1);
    var height = Number(req.body.num2);

    var result = n1 / (n2 * n2);

    res.send("The result is " + result);
});

app.listen(3000, function () {
    console.log("Server has started on port 3000.");
});
