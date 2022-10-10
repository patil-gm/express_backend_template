//jshint esversion:6

// create a project_name folder
// create js file in it e.g. app.js/server.js
// npm i server.js/app.js
// npm i exress
// npm i nodemon
// paste above code in server.js/app.js
// nodemon server.js/app.js


const express = require('express');

const app= express();

app.get("/",function(req,res){
   res.send("<h1>Hello World</h1>");
});

app.get("/contact",function(req,res){
    res.send("<h1>Cantact me at : 8855993659</h1>");
 });

 app.get("/abt",function(req,res){
    res.send("<h1>My name is ghanashyam and i am currently learning the full stack devlopement</h1>");
 });

 

 app.get("/hey",function(req,res){
    res.send("<h1>coding</h1>");
 });

app.listen(3000,function(){
    console.log("server started on port 3000");
});


