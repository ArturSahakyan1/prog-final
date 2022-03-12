var express = require("express");
var app = express();

app.use(express.static("."));

app.get("/", function(req, res){
   res.redirect("index.html");
});

app.listen(3000, function(){
   console.log("Example is running on port 3000");
});



var fs = require('fs');

// console.log(grassArr)

var statistics = {};

var grassArr = []
let grassEaterArr = []
let PredatorArr = []
let grass2Arr = []
let mahArr = []
let ulArr = []
let pixArr = []


let aa = grassArr.length;
let bb = grass2Arr.length;
let cc = grassEaterArr.length;
let dd = ulArr.length;
let ff = PredatorArr.length;
let ll = mahArr
let kk = pixArr

setInterval(function() {
statistics.grass = aa;
statistics.grassEater = cc;
statistics.grass2 = bb;
statistics.ul = dd;
statistics.Predator = ff;
statistics.Mah = ll;
statistics.Pix = kk;
fs.writeFile("statistics.json", JSON.stringify( statistics), function(){
console.log("send")
})
},60000);

//var script = document.getElementById("script");
//console.log(script)
// var fs = require('fs');



// var statistics = {};
// let a = 200;

// let b = 80;
// setInterval(function() {
// statistics.grass = a++;
// statistics.grassEater = b++;
// fs.writeFile("statistics.json", JSON.stringify( statistics), function(){
// console.log("send")
// })
// },1000);

// var otherFile = require("script.js");
// var myArray = otherFile.largeArrayFunction();
// console.log(myArray);