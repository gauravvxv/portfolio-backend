const express = require("express");
const connection = require("./config/db")
const router  = require("./Routes/data.route")
const cors = require("cors");

const app = express();

const port = process.env.PORT;

app.use(express.json())

app.use(cors());

app.get("/",(req,res)=>{
    res.send("BASED API ENDPOINT")
})

app.use("/",router); 


app.listen(port,async()=>{
try {
    await connection
    console.log("mongodb is connect to server")
} catch (error) {
    console.log(error)
}
console.log("listening")
})
