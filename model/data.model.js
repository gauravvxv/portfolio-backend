const mongoose = require("mongoose");

const dataSchema = mongoose.Schema({
    fullName : {type: String, required: true},
    number : {type: Number, required: true},
    email: {type: String, required: true},
    message: {type: String,required: true}
})

const DataModel = mongoose.model("portfolio data",dataSchema);

module.exports={
    DataModel
}