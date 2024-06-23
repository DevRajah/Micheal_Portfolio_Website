const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: [true, "Please Email is required"],
    },
    lastName: {
        type: String,
        required: [true, "Please Name field is required"],
    }, 
    email: {
        type: String,
        required: [true, "Please Email is required"],
    },
    message: {
        type: String,
        required: [true, "Please type in your message"],
    }
    // country:{
    //     type: String,
    //     required: true
    // },
    // subject:{
    //     type: String,
    //     required: true,
    // },
    // phone:{
    //     type: Number,
    //     required: [true, "Please enter your phone number"]
    // }
}, {timestamps: true});

const contactModel = mongoose.model('Messages', userSchema);

module.exports = contactModel;