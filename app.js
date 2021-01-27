//jshint esversion:6


const express=require("express");
const bodyparser=require("body-parser");
const request=require("request");
const app=express();
let items=["Buy foods","cook foods","SellFoods"];
app.set("view engine","ejs");
app.use(bodyparser.urlencoded({extended:true}));
app.use(express.static("public"));
app.get("/",function(req,res){
  let today=new Date();
let options={
  weekday:"long",
  day:"numeric",
  month:"long",
};
  let day = today.toLocaleDateString("en-us",options);
    res.render("list",{Listtitle:day,newitems:items});
});
app.post("/",function(req,res){
    let item=req.body.newitem;
    items.push(item);
    res.redirect("/");
});
app.listen(3000,function(){
  console.log("server is running");
})
