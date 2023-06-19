const multer  = require('multer')
const { Bmodel } = require('../Models/books')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
      cb(null, file.fieldname + '-' + uniqueSuffix)
    }
  })
  
const upload = multer({ storage: storage })


const SaveData=(req,res)=>{
    // console.log(req);
     
    let mdata= new Bmodel(req.body);
    mdata.save().then(()=>{
        res.send("data uploaded");
    }).catch((er)=>{
        console.log(er);
    })
}

const Getdata=async(req,res)=>{
    let data= await Bmodel.find();
        res.json(data);
}

module.exports={SaveData,upload,Getdata}