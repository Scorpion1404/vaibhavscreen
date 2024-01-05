const mongoose = require("mongoose");

const dbUrl = "mongodb+srv://yashp:Deadpool2004@cluster0.aexlvbm.mongodb.net/mydbs";



mongoose.connect(dbUrl)
.then(()=>{
    console.info("connected");
})
.catch((e)=>{
    console.log("Erroe",e);
});

const LogInSchema= new mongoose.Schema({
    username:{
        type:String,
        require:true,
    },
    password :{
        type:String,
        require:true,
    },
})

const collection = new mongoose.model("Collection1",LogInSchema)

module.exports=collection
