const mongoose=require("mongoose");

const Usch=new mongoose.Schema({
    "_id":String,
    "name":String,
    "password":String,
    "city":String,
    "role":{
        type:String,
        default:"admin"
    }

});

const Umodel = mongoose.model("usrs",Usch);

module.exports={Umodel};