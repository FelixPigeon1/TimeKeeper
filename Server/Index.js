const express = require("express");
const app = express();
const mongoose = require("mongoose");
const RemindersModel = require('./Reminders');

const cors = require("cors")
app.use(express.json());
app.use(cors());
module.exports = app;


mongoose.connect("mongodb+srv://maurerev:MotorCityMayhem@cluster0.t2ikduu.mongodb.net/TimeKeeper?retryWrites=true&w=majority");
app.listen(3001, () => {
    console.log("Server is running now......");
});

app.get("/getReminders", (req, res) => {
    RemindersModel.find().then((data) => {
        console.log(data);
        res.json(data);
    });
});

app.post("/createReminder", async (req, res) => {
    const reminder = req.body;
    console.log(reminder);
    const newReminder = new RemindersModel(reminder);
    await newReminder.save();
    res.json(reminder);
});
//mongodb+srv://maurerev:<password>@cluster0.t2ikduu.mongodb.net/?retryWrites=true&w=majority