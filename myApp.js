let express = require('express');
let app = express();


app.use((request, response, next) => {
   console.log(request.method + " " 
   + request.path + " - " + request.ip);
   next();
 });


require('dotenv').config();

console.log("Hello World");
console.log(process.env.MESSAGE_STYLE)

//app.get('/', (req, res) => {
   // res.send("Hello Express")
//});

app.get('/',(req, res) => {
    res.sendFile(__dirname + "/views/index.html");
})

app.use("/public", express.static(__dirname + "/public"));


//app.get("/json", (req, res) => {
   // res.json({ message: "Hello json" });
//});


app.get("/json", function(req, res) {
console.log(process.env.MESSAGE_STYLE, "<= message style");
if (process.env.MESSAGE_STYLE === "uppercase") {
    res.json({ "message": "HELLO JSON" })
 }else { 
    res.json({ "message": "Hello json" })
}  
});



app.get('/now', function(req, res, next) {
   req.time = new Date().toString();
   next();
}, function(req, res)  {
   res.send({time: req.time});
});


app.get('/:word/echo', function(req, res) {
   console.log(req.params.word)
   res.json({ echo: req.params.word })
});



app.get('/name', (request, response) => {
let string = request.query.first + ' ' + request.query.last
response.json({name: string})
});

























 module.exports = app;
