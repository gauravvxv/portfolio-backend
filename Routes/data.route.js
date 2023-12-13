const {DataModel} = require("../model/data.model");
const {Router} = require("express");
const dataController = Router();

dataController.post("/data",async(req,res)=>{
const {fullname,number,email,message} = req.body;
await DataModel.create({fullname,number,email,message});

res.send("Thankyou for contacting me")
})

module.exports={
    dataController
}