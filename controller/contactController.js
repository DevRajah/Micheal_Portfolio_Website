const contactModel = require("../model/contactModel");
const sendMail = require("../utils/email");
require('dotenv').config();


//Function to receive emails from potential clients
const receiveEmail = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                message: "Please enter your Name, Email and Message!"
            })
        }

        // Save the message to the database
        const newMessage = new contactModel({
            name,
            email,
            message,
        });

        // Send email notification to admin
        const adminEmail = 'kingmicheal1319@gmail.com';
        const title = 'Email from Client Via Portfolio';

        await sendMail({
            email: adminEmail,
            subject: title,
            text: message,
        });

        await newMessage.save();

        
        return res.status(200).json({
            message: 'Message sent successfully'
        });

    } catch (error) {
        return res.status(500).json({
            Error: "Internal Server Error: " + error.message,
        })
    }
}

module.exports = {
    receiveEmail,

}