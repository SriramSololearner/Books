const express=require("express");
const mongoose=require("mongoose");
const cors=require("cors");
const Port=6020;
const bodyParser = require('body-parser');
const {Uroute } = require("./Routes/usrRouts");
const { Broute } = require("./Routes/bookRouts");
const app=express();

app.use(express.json());                                                          
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());


mongoose.connect("mongodb://127.0.0.1:27017/BooksStore",{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log(" Mongoserver Started!!");
}).catch((er)=>{
    console.log(er);
})

app.use("/",Uroute);
app.use("/",Broute);

app.listen(Port,()=>{
    console.log(`server running on http://localhost:${Port}`);
})


