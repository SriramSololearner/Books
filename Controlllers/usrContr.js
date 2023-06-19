const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Umodel } = require('../Models/usr');

const Get=(req ,res)=>{
    res.send("server starting...")
}

// User Registration...

const Add = async(req,res)=>{
    console.log(req.body)
    let Udata=await Umodel.findById({"_id":req.body._id});
    console.log(Udata);

    if(Udata){
        res.send("user already Registered!!");
    }else{

        let newPwd= await bcrypt.hash(req.body.password,10);
        let NewData={...req.body,"password":newPwd};
        let genData= new Umodel(NewData);
        genData.save().then(()=>{
            res.send("user successfully registered!!");
        }).catch((er)=>{
            console.log(er);
        });
    }
};

// User login Process...

const Login=async(req,res)=>{
    let UData=await Umodel.findById({"_id":req.body._id});
    if(UData){  
        let match=await bcrypt.compare(req.body.password,UData.password);
        if(match){
            const token=jwt.sign({"_id":req.body._id},"Sree");
            res.json({"token":token});

        }else{
            res.send("The Given credentials are not matching!!!");
        }

    }else{
        res.send("pls register before login!!");
    }
    
};

// user Authentication

const isAuthentication=(req,res,next)=>{
    // console.log(req.headers)
    try{
        let res=jwt.verify(req.headers.authorization,"Sree");
        console.log(res)
        if(res){
            next();
        }
    }
    catch(er){
        res.send("pls provide Valid token");
    }
};

const isAdmin= async(req,res,next)=>{
    let data=await Umodel.findById({"_id":req.headers._id});
    console.log(data)
    if(data.role=="admin"){
        next()

    }else{
        res.send("you are not allowed!!!");
    }

}

module.exports={Get,Add,Login,isAuthentication,isAdmin}