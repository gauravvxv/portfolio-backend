const {DataModel} = require("../model/data.model");
const {Router} = require("express");
const dataController = Router();

dataController.post("/data",async(req,res)=>{
try {
    const {fullName,number,email,message} = req.body;
await DataModel.create({fullName,number,email,message});
res.send("Thankyou for contacting me")
} catch (error) {
    console.log(error);
    res.send("Something went wrong");
}
})

module.exports={
    dataController
}