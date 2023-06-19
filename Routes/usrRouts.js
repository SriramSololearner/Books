const express=require("express");
const {  Add, Login } = require("../Controlllers/usrContr");
const Uroute= new express.Router();


Uroute.post("/Reg",Add);
Uroute.post("/login", Login);

module.exports={Uroute};
