const mongoose=require("mongoose");

const Bsch=new mongoose.Schema({
    "Bid":String,   
    "Bname":String,
    "author":String,
    "ratings":String,
    "price":String

});

const Bmodel=mongoose.model("Books",Bsch);

module.exports={Bmodel};