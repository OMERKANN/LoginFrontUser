const express = require("express")
const bodyParser = require("body-parser");

const app = express();

app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html")
})

app.post("/", (req, res) =>{

    const mail = req.body.eMail;
    const firstName = req.body.fName;
    const lastName = req.body.lName;
    console.log(mail, firstName, lastName );

})

app.listen(3000, function(req, res){
    console.log("Start Server")
})