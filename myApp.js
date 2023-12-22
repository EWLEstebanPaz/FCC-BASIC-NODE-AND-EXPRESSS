let express = require('express');
let app = express();

require('dotenv').config();

console.log("Hello World");
console.log(process.env.MESSAGE_STYLE)

//app.get('/', (req, res) => {
    //res.send("Hello Express")
//});

app.get('/',(req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.use("/public", express.static(__dirname + "/public"));

let message = { message: "Hello json" };
//app.get("/json", (req, res) => {
    //res.json(message);
//});


app.get("/json", (req, res) => {
if(process.env.MESSAGE_STYLE === "uppercase"){
    res.json({"message": "HELLO JSON"})
 }else{ 
    res.json(message)
}  
});
































 module.exports = app;
