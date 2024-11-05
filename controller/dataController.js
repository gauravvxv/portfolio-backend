const { DataModel } = require("../model/data.model")

const sendMessage =  async (req,res) => {

    try {
        const {fullName , number , email , message} = req.body;

        const newData = new DataModel({fullName , number , email , message});
        await newData.save();

        res.status(201).json({
            message: "Data saved successfully",
            data: newData
        })

    } catch (error) {
        res.status(500).json({ error: 'Failed to save data' });
        console.log(error)
    }

}

module.exports = sendMessage