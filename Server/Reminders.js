const mongoose = require("mongoose")
const RemindersSchema = new mongoose.Schema({
    name: {
        type: String,
        required : true,
    },
    priority : {
        type : Number,
        required : true,
    },
    eventTime : {
        type : String,
        required : true,
    },
    remindTime : {
        type : String,
        required : true,
    }
});

const RemindersModel = mongoose.model("reminders", RemindersSchema);
module.exports = RemindersModel;

    