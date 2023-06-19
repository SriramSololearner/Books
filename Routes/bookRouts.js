const express=require("express");
const { Get, isAuthentication, isAdmin } = require("../Controlllers/usrContr");
const { SaveData, Getdata } = require("../Controlllers/BContr");
const Broute= new express.Router();
Broute.get("/",Get);
Broute.get("/GetData",Getdata);
Broute.post("/saveData",isAuthentication,isAdmin,SaveData);

module.exports={Broute};