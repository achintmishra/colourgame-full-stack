const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");
app.use(express.static('public'));
app.set('view engine', 'hbs');
app.get("/",(req,res)=>{
  res.render('mainmenu')
})
app.get("/selectpage",(req,res)=>{
  res.render('selectpage')
})
app.get("/beginner",(req,res)=>{
  res.render('beginner')
})
app.get("/intermediate",(req,res)=>{
  res.render('intermediate')
})
app.get("/advanced",(req,res)=>{
  res.render('advanced')
})
app.listen(3000);